using System;
using System.Linq.Expressions;
using System.Linq;
using Pggm.Components.Components.PggmDataGrid;
using Xunit;

namespace Pggm.Components.Tests
{
    public class GridSortTests
    {
        private record Person(string Name, int Age);

        [Fact]
        public void ToPropertyList_MixedThenBy_DirectionsRespectOverallAscending()
        {
            // Arrange: create GridSort with first Name ascending, then Age descending
            var sort = GridSort<Person>.CreateFromExpression(p => p.Name)
                .ThenByDescending(p => p.Age);

            // Act: when overall ascending = true
            var propsAsc = sort.ToPropertyList(true);

            // Assert: first should be Ascending (stored true matches overall true), second should be Descending (stored false)
            Assert.Equal(2, propsAsc.Count);
            Assert.Equal("Name", propsAsc.ElementAt(0).PropertyName);
            Assert.Equal(SortDirection.Ascending, propsAsc.ElementAt(0).Direction);
            Assert.Equal("Age", propsAsc.ElementAt(1).PropertyName);
            Assert.Equal(SortDirection.Descending, propsAsc.ElementAt(1).Direction);

            // Act: when overall ascending = false
            var propsDesc = sort.ToPropertyList(false);

            // Assert: directions should flip relative to stored polarity
            Assert.Equal(2, propsDesc.Count);
            Assert.Equal("Name", propsDesc.ElementAt(0).PropertyName);
            Assert.Equal(SortDirection.Descending, propsDesc.ElementAt(0).Direction);
            Assert.Equal("Age", propsDesc.ElementAt(1).PropertyName);
            Assert.Equal(SortDirection.Ascending, propsDesc.ElementAt(1).Direction);
        }

        [Fact]
        public void ToPropertyList_ThenBy_WithConversions_ExtractsPropertyNames()
        {
            // Arrange: create GridSort where expression includes a convert (e.g., object cast)
            Expression<Func<Person, object>> expr = p => (object)p.Name;
            var sort = GridSort<Person>.CreateFromExpression(expr)
                .ThenBy(p => p.Age);

            // Act
            var list = sort.ToPropertyList(true);

            // Assert
            Assert.Equal(2, list.Count);
            Assert.Equal("Name", list.ElementAt(0).PropertyName);
            Assert.Equal("Age", list.ElementAt(1).PropertyName);
        }

        [Fact]
        public void ToPropertyList_UnsupportedExpression_Throws()
        {
            // Arrange: expression that is a binary operation (unsupported for property extraction)
            Expression<Func<Person, object>> expr = p => p.Name + "x";
            var sort = GridSort<Person>.CreateFromExpression(expr);

            // Act & Assert
            Assert.Throws<InvalidOperationException>(() => sort.ToPropertyList(true));
        }

        [Fact]
        public void ToPropertyList_MethodCallExpression_Throws()
        {
            // Arrange: method call in expression (unsupported)
            Expression<Func<Person, object>> expr = p => p.Name.Substring(0, 1);
            var sort = GridSort<Person>.CreateFromExpression(expr);

            // Act & Assert
            Assert.Throws<InvalidOperationException>(() => sort.ToPropertyList(true));
        }
    }
}
