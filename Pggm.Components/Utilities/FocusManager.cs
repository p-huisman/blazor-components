using System;

namespace Pggm.Components.Utilities
{
    public class FocusManager
    {
        public (int Row, int Col) Active { get; private set; } = (-1, -1);

        public void SetActive(int row, int col)
        {
            Active = (row, col);
        }

        public int GetTabIndex(int row, int col)
        {
            return Active.Row == row && Active.Col == col ? 0 : -1;
        }
    }
}
