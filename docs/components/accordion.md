# PggmAccordion

The PggmAccordion component provides a collapsible content container that wraps the PGGM design system accordion web component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `AllowMultiple` | bool | false | Whether multiple accordion items can be open at the same time |
| `ChildContent` | RenderFragment | null | The content to be displayed inside the accordion |

## Example Usage

### Basic Accordion

```razor
<PggmAccordion>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Section 1</PggmAccordionItemTitle>
        <p>This is the content of the first section. Only one section can be open at a time.</p>
    </PggmAccordionItem>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Section 2</PggmAccordionItemTitle>
        <p>This is the content of the second section. Opening this will close other sections.</p>
    </PggmAccordionItem>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Section 3</PggmAccordionItemTitle>
        <p>This is the content of the third section.</p>
    </PggmAccordionItem>
</PggmAccordion>
```

### Allow Multiple Items Open

```razor
<PggmAccordion AllowMultiple="true">
    <PggmAccordionItem>
        <PggmAccordionItemTitle>First Section</PggmAccordionItemTitle>
        <p>Content for the first section. Multiple sections can be open simultaneously.</p>
    </PggmAccordionItem>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Second Section</PggmAccordionItemTitle>
        <p>Content for the second section. This can be open at the same time as others.</p>
    </PggmAccordionItem>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Third Section</PggmAccordionItemTitle>
        <p>Content for the third section.</p>
    </PggmAccordionItem>
</PggmAccordion>
```

## Styling

The accordion component inherits styling from the PGGM design system. Additional CSS classes can be applied through standard Blazor component attributes:

```razor
<PggmAccordion class="custom-accordion" id="main-accordion">
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Styled Section</PggmAccordionItemTitle>
        <p>Content with custom styling applied to the accordion container.</p>
    </PggmAccordionItem>
</PggmAccordion>
```

## Accessibility

The component provides proper ARIA attributes and keyboard navigation support through the underlying PGGM web component. The accordion items are structured to provide proper accessibility with expandable/collapsible behavior.

## Dependencies

- Inherits from `PggmComponentBase`
- Requires the PGGM design system web components JavaScript library