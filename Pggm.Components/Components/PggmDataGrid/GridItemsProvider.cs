using System.Threading.Tasks;

namespace Pggm.Components.Components.PggmDataGrid
{
    public delegate ValueTask<GridItemsProviderResult<TGridItem>> GridItemsProvider<TGridItem>(
        GridItemsProviderRequest<TGridItem> request);
}
