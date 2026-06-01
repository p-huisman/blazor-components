import re
import os
import subprocess

components_dir = os.path.normpath(os.path.join(os.path.dirname(__file__), '..', 'Sample', 'Pages', 'Components'))

pattern = re.compile(r'''(?mx)
(?P<header>^[ \t]*(?:private|protected|public)\s+string\s+(?P<name>\w+)\s*=\s*\n)
(?P<body>(?:^[ \t]*@?\$?"(?:.|\n)*?"\s*\+\s*\n)+)
(?P<final>^[ \t]*@?\$?"(?:.|\n)*?"\s*;)''')

print('Scanning for files to convert in', components_dir)

files = []
for dirpath, dirs, filenames in os.walk(components_dir):
    for fn in filenames:
        if fn.endswith('.razor'):
            path = os.path.join(dirpath, fn)
            with open(path, 'r', encoding='utf-8') as f:
                txt = f.read()
            if pattern.search(txt):
                files.append(path)

print(f'Found {len(files)} files with concatenated strings.')

for path in sorted(files):
    print('\nProcessing', path)
    # read original
    with open(path, 'r', encoding='utf-8') as f:
        orig = f.read()

    new_text = orig
    offset = 0
    any_repl = False
    for m in pattern.finditer(orig):
        header = m.group('header')
        body = m.group('body')
        final = m.group('final')

        literals = []
        for line in (body + final).splitlines():
            lit_m = re.search(r'(@?\$?)"(?P<content>(?:\\.|[^\\"])*)"', line)
            if lit_m:
                prefix = lit_m.group(1)
                content = lit_m.group('content')
                literals.append((prefix, content))

        if not literals:
            continue

        needs_dollar = any(p and '$' in p for p, c in literals)

        decoded_parts = []
        for p, c in literals:
            s = c.replace('\\"', '"')
            try:
                s = bytes(s, 'utf-8').decode('unicode_escape')
            except Exception:
                pass
            decoded_parts.append(s)
        content = "".join(decoded_parts)
        if content.endswith('\n'):
            content = content[:-1]

        indent = re.match(r'^([ \t]*)', header).group(1)
        dollar = '$' if needs_dollar else ''
        safe_content = content.replace('"""', '\\"\\"\\"')
        triple = (
            indent
            + f'private string {m.group("name")} = {dollar}"""\n'
            + safe_content
            + '\n""";\n'
        )

        start = m.start() + offset
        end = m.end() + offset
        new_text = new_text[:start] + triple + new_text[end:]
        offset += len(triple) - (end - start)
        any_repl = True

    if not any_repl:
        print('  No replacements found (unexpected)')
        continue

    # backup to temp file
    backup = path + '.bak'
    with open(backup, 'w', encoding='utf-8') as f:
        f.write(orig)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_text)

    # run build
    print('  Running build...')
    p = subprocess.run(['dotnet', 'build', '--configuration', 'Release'], cwd=os.path.normpath(os.path.join(os.path.dirname(__file__), '..')), capture_output=True, text=True)
    if p.returncode == 0:
        print('  Build succeeded — keeping changes for', os.path.basename(path))
        os.remove(backup)
    else:
        print('  Build failed — reverting', os.path.basename(path))
        print('  Build stderr (truncated):')
        print('\n'.join(p.stderr.splitlines()[-20:]))
        # revert
        with open(path, 'w', encoding='utf-8') as f:
            f.write(orig)
        os.remove(backup)

print('\nDone')
