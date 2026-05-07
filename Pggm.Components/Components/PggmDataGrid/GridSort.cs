using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Pggm.Components.Components.PggmDataGrid
{
    public sealed class GridSort<TGridItem> : IGridSort<TGridItem>
    {
        private readonly Func<IQueryable<TGridItem>, bool, IOrderedQueryable<TGridItem>> _first;
        private readonly (LambdaExpression, bool) _firstExpression;
        private List<Func<IOrderedQueryable<TGridItem>, bool, IOrderedQueryable<TGridItem>>>? _then;
        private List<(LambdaExpression, bool)>? _thenExpressions;

        private GridSort(Func<IQueryable<TGridItem>, bool, IOrderedQueryable<TGridItem>> first, (LambdaExpression, bool) firstExpression)
        {
            _first = first;
            _firstExpression = firstExpression;
        }

        public static GridSort<TGridItem> CreateFromExpression<U>(Expression<Func<TGridItem, U>> expression)
            => new((q, asc) => asc ? q.OrderBy(expression) : q.OrderByDescending(expression), (expression, true));

        public IOrderedQueryable<TGridItem> Apply(IQueryable<TGridItem> queryable, bool ascending)
        {
            var ordered = _first(queryable, ascending);
            if (_then is not null)
            {
                foreach (var t in _then)
                {
                    ordered = t(ordered, ascending);
                }
            }
            return ordered;
        }

        public GridSort<TGridItem> ThenBy<U>(Expression<Func<TGridItem, U>> expression)
        {
            _then ??= new List<Func<IOrderedQueryable<TGridItem>, bool, IOrderedQueryable<TGridItem>>>();
            _thenExpressions ??= new List<(LambdaExpression, bool)>();
            _then.Add((q, asc) => asc ? q.ThenBy(expression) : q.ThenByDescending(expression));
            _thenExpressions.Add((expression, true));
            return this;
        }

        public GridSort<TGridItem> ThenByDescending<U>(Expression<Func<TGridItem, U>> expression)
        {
            _then ??= new List<Func<IOrderedQueryable<TGridItem>, bool, IOrderedQueryable<TGridItem>>>();
            _thenExpressions ??= new List<(LambdaExpression, bool)>();
            _then.Add((q, asc) => asc ? q.ThenByDescending(expression) : q.ThenBy(expression));
            _thenExpressions.Add((expression, false));
            return this;
        }

        public IReadOnlyCollection<SortedProperty> ToPropertyList(bool ascending)
        {
            var list = new List<SortedProperty>();

            // First expression uses the stored polarity combined with the overall ascending flag.
            var firstStored = _firstExpression.Item2;
            var firstDir = (ascending == firstStored) ? SortDirection.Ascending : SortDirection.Descending;
            list.Add(new SortedProperty { PropertyName = ToPropertyName(_firstExpression.Item1), Direction = firstDir });

            if (_thenExpressions is not null)
            {
                foreach (var then in _thenExpressions)
                {
                    var stored = then.Item2;
                    var dir = (ascending == stored) ? SortDirection.Ascending : SortDirection.Descending;
                    list.Add(new SortedProperty { PropertyName = ToPropertyName(then.Item1), Direction = dir });
                }
            }

            return list;
        }

        private static string ToPropertyName(LambdaExpression expr)
        {
            Expression body = expr.Body;
            // unwrap conversions: (object) x.Property
            if (body is UnaryExpression u && u.NodeType == ExpressionType.Convert)
            {
                body = u.Operand;
            }

            if (body is MemberExpression m)
            {
                return m.Member.Name;
            }

            throw new InvalidOperationException("Unsupported expression for GridSort");
        }
    }
}
