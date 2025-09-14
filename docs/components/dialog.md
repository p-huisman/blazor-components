# PggmDialog

The PggmDialog component provides a modal dialog that wraps the PGGM design system dialog web component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Open` | bool | false | Whether the dialog is open/visible |
| `Title` | string | null | The title of the dialog |
| `CloseOnEscape` | bool | true | Whether the dialog can be closed with the Escape key |
| `CloseOnBackdrop` | bool | true | Whether the dialog can be closed by clicking the backdrop |
| `ChildContent` | RenderFragment | null | The main content of the dialog |
| `Actions` | RenderFragment | null | The action buttons for the dialog |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `OnClose` | EventCallback | Fired when the dialog is closed |
| `OnOpen` | EventCallback | Fired when the dialog is opened |

## Example Usage

### Basic Dialog

```razor
<PggmButton OnClick="OpenDialog">Open Dialog</PggmButton>

<PggmDialog Open="@isDialogOpen" Title="Confirmation" OnClose="CloseDialog">
    <ChildContent>
        <p>Are you sure you want to delete this item?</p>
    </ChildContent>
    
    <Actions>
        <PggmButton OnClick="CloseDialog">Cancel</PggmButton>
        <PggmButton Appearance="primary" OnClick="ConfirmDelete">Delete</PggmButton>
    </Actions>
</PggmDialog>

@code {
    private bool isDialogOpen = false;

    private void OpenDialog() => isDialogOpen = true;
    private void CloseDialog() => isDialogOpen = false;
    
    private void ConfirmDelete()
    {
        // Handle deletion
        CloseDialog();
    }
}
```

## Dependencies

- Inherits from `PggmEventComponentBase`  
- Requires the PGGM design system web components JavaScript library