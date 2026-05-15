namespace Pggm.Components;

using System;

/// <summary>
/// Specifies the orientation of stacked components.
/// </summary>
public enum Orientation
{
    Horizontal,
    Vertical
}

/// <summary>
/// Specifies the horizontal alignment of stacked components.
/// </summary>
public enum HorizontalAlignment
{
    Left,
    Start,
    Center,
    Right,
    End,
    Stretch,
    SpaceBetween
}

/// <summary>
/// Specifies the vertical alignment of stacked components.
/// </summary>
public enum VerticalAlignment
{
    Top,
    Center,
    Bottom,
    Stretch,
    SpaceBetween
}

/// <summary>
/// Specifies the justify-content alignment.
/// </summary>
public enum JustifyContent
{
    FlexStart,
    Center,
    FlexEnd,
    SpaceBetween,
    SpaceAround,
    SpaceEvenly
}

/// <summary>
/// Specifies when a GridItem should be hidden based on screen size breakpoints.
/// </summary>

[Flags]
public enum GridItemHidden
{
    None = 0,
    Xs = 1 << 0,
    Sm = 1 << 1,
    Md = 1 << 2,
    Lg = 1 << 3,
    Xl = 1 << 4,
    Xxl = 1 << 5
}
