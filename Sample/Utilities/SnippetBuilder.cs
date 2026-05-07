using System;
using System.Linq;

namespace Pggm.Components.Sample.Utilities
{
    public static class SnippetBuilder
    {
        public static string Build(params string[] lines)
        {
            var arr = (lines ?? Array.Empty<string>()).ToArray();
            if (arr.Length == 0) return string.Empty;

            // Normalize indentation: remove common leading whitespace from all non-empty lines
            var nonEmpty = arr.Where(l => !string.IsNullOrWhiteSpace(l)).ToArray();
            if (nonEmpty.Length > 0)
            {
                int minIndent = nonEmpty
                    .Select(l => l.TakeWhile(c => c == ' ' || c == '\t').Count())
                    .DefaultIfEmpty(0)
                    .Min();

                if (minIndent > 0)
                {
                    for (int i = 0; i < arr.Length; i++)
                    {
                        if (!string.IsNullOrWhiteSpace(arr[i]) && arr[i].Length >= minIndent)
                            arr[i] = arr[i].Substring(minIndent);
                    }
                }
            }

            return string.Join(Environment.NewLine, arr);
        }
    }
}
