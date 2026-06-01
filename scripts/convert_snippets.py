import re
import os

root = os.path.join(os.path.dirname(__file__), '..', 'Sample', 'Pages', 'Components')
root = os.path.normpath(root)

pattern = re.compile(r'''(?mx)
(?P<header>^[ \t]*(?:private|protected|public)\s+string\s+(?P<name>\w+)\s*=\s*\n)
(?P<body>(?:^[ \t]*@?\$?"(?:.|\n)*?"\s*\+\s*\n)+)
(?P<final>^[ \t]*@?\$?"(?:.|\n)*?"\s*;)''')

string_literal_re = re.compile(r'^[ \t]*(@?\$?)("""|"@?"|\@"|\$"|\"|\$@"|\@\$\")?(?P<inner>.*)"\s*(?:\+\s*)?$', re.DOTALL)

changed_files = []

for dirpath, dirs, files in os.walk(root):
    for fname in files:
        if not fname.endswith('.razor'):
            continue
        path = os.path.join(dirpath, fname)
        with open(path, 'r', encoding='utf-8') as f:
            text = f.read()

        new_text = text
        offset = 0
        replacements = []
        for m in pattern.finditer(text):
            header = m.group('header')
            body = m.group('body')
            final = m.group('final')
            full = text[m.start():m.end()]

            # collect all string literal lines from body+final
            literals = []
            for line in (body + final).splitlines():
                line = line.rstrip('\n')
                # match a string literal line
                lit_m = re.search(r'(@?\$?)\"(?P<content>(?:\\.|[^\\"])*)\"', line)
                if lit_m:
                    prefix = lit_m.group(1)
                    content = lit_m.group('content')
                    literals.append((prefix, content))

            if not literals:
                continue

            # determine if any prefix has $ (interpolated)
            needs_dollar = any(p and '$' in p for p, c in literals)

            # decode C# string escape sequences roughly using python unicode_escape
            decoded_parts = []
            for p, c in literals:
                # replace escaped double quotes \" with " and escaped single quotes as-is
                s = c.replace('\\"', '"')
                # interpret common escapes \n, \t, \\ etc
                try:
                    s = bytes(s, 'utf-8').decode('unicode_escape')
                except Exception:
                    pass
                decoded_parts.append(s)

            content = "".join(decoded_parts)

            # Trim a final trailing newline if present in content
            if content.endswith('\n'):
                content = content[:-1]

            # determine indent from header
            indent = re.match(r'^([ \t]*)', header).group(1)
            dollar = '$' if needs_dollar else ''
            # escape any triple-quote sequences inside content
            safe_content = content.replace('"""', '\\"\\"\\"')
            triple = (
                indent
                + f'private string {m.group("name")} = {dollar}"""\n'
                + safe_content
                + '\n""";\n'
            )

            # replace the full span in new_text
            start = m.start() + offset
            end = m.end() + offset
            new_text = new_text[:start] + triple + new_text[end:]
            offset += len(triple) - (end - start)
            replacements.append(m.group('name'))

        if replacements:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_text)
            changed_files.append((path, replacements))

print('Converted files:')
for p, reps in changed_files:
    print(p)
    for r in reps:
        print('  -', r)

print('Done')
