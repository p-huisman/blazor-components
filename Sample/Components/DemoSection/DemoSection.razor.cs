// ------------------------------------------------------------------------
// This file is licensed to you under the MIT License.
// ------------------------------------------------------------------------

using System;
using System.Reflection.Metadata;
using System.Text.RegularExpressions;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.JSInterop;

namespace Pggm.Components.Sample.Components.DemoSection;

public partial class DemoSection : ComponentBase
{
    private string? _ariaId;

    private readonly Regex _pattern = Pattern();
    private bool _scrolled = false;
    private bool _subscribedToLocation = false;

    [Inject]
    private NavigationManager NavigationManager { get; set; } = default!;

    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    [Parameter, EditorRequired]
    public string Title { get; set; } = string.Empty;

    [Parameter]
    public string? Code { get; set; }

    [Parameter]
    public string? CodeBehind { get; set; }

    [Parameter]
    public RenderFragment? Description { get; set; }

    [Parameter]
    public RenderFragment? Content { get; set; }

    // Backwards-compatible alias: allow pages to use <ChildContent> as well as <Content>
    [Parameter]
    public RenderFragment? ChildContent
    {
        get => Content;
        set => Content = value;
    }


    protected override void OnInitialized()
    {
        base.OnInitialized();
        _ariaId = _pattern.Replace(Title.ToLower(), "");
        if (_ariaId.Length > 20)
        {
            _ariaId = _ariaId[..20];
        }

        // Subscribe to location changes so we can react to hash changes
        if (!_subscribedToLocation)
        {
            NavigationManager.LocationChanged += OnLocationChanged;
            _subscribedToLocation = true;
        }
    }

    private void OnLocationChanged(object? sender, LocationChangedEventArgs args)
    {
        // Fire-and-forget the scroll check on location change
        _ = InvokeAsync(async () =>
        {
            await ScrollIfHashMatchesAsync(args.Location);
        });
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await ScrollIfHashMatchesAsync(NavigationManager.Uri);
        }
    }

    private async Task ScrollIfHashMatchesAsync(string uri)
    {
        try
        {
            var frag = new Uri(uri).Fragment;
            if (!string.IsNullOrEmpty(frag))
            {
                var id = frag.StartsWith("#") ? frag.Substring(1) : frag;
                if (!string.IsNullOrEmpty(id) && id == _ariaId && !_scrolled)
                {
                    await JSRuntime.InvokeVoidAsync("blazorLayout.scrollToId", _ariaId);
                    _scrolled = true;
                }
            }
        }
        catch { /* ignore malformed URIs */ }
    }

    [GeneratedRegex(@"[;,<>&(){}!$^#@=/\ ]")]
    private static partial Regex Pattern();

    public void Dispose()
    {
        if (_subscribedToLocation)
        {
            NavigationManager.LocationChanged -= OnLocationChanged;
            _subscribedToLocation = false;
        }
    }

}
