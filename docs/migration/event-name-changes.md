# Migration: Event Name Changes

This release standardizes event callback parameter names across components by removing redundant component-name prefixes and shortening names while keeping the `On` prefix.

Summary of renames (breaking):

- `OnAccordionItemToggle` → `OnToggle` (PggmAccordionItem)
- `OnWizardFormChanged` → `OnChanged` (PggmWizardForm)
- `OnWizardFinished` → `OnFinished` (PggmWizard)
- `OnWizardFormInvalid` → `OnFormInvalid` (PggmWizard)
- `OnSplitterResize` → `OnResize` (PggmSplitter)
- `OnItemSelect` → `OnSelect` (PggmComboboxItem, PggmDropdownItem)
- `OnTabChange` → `OnChange` (PggmTab)
- `OnTabClick` → `OnClick` (PggmTab)

What to change in your code

- Razor markup: replace attribute names

	Before:

	```razor
	<PggmWizard OnWizardFinished="HandleComplete" />
	```

	After:

	```razor
	<PggmWizard OnFinished="HandleComplete" />
	```

- Programmatic adds (e.g., tests or generated markup): update `AddAttribute` / `Add(p => p....)` usages

	Before:

	```csharp
	builder.AddAttribute(1, "OnAccordionItemToggle", EventCallback.Factory.Create(this, () => ...));
	// or
	component.Parameters.Add(p => p.OnAccordionItemToggle, EventCallback.Factory.Create(...));
	```

	After:

	```csharp
	builder.AddAttribute(1, "OnToggle", EventCallback.Factory.Create(this, () => ...));
	// or
	component.Parameters.Add(p => p.OnToggle, EventCallback.Factory.Create(...));
	```

- Tests and snippets: update hard-coded snippet strings used in demos and `ApiDocumentation` lists. Search for the old names across the repo and replace.

Migration checklist (recommended)

1. Search your codebase for the old event names and update occurrences:

	 - `OnAccordionItemToggle`, `OnWizardFormChanged`, `OnWizardFinished`, `OnWizardFormInvalid`,
		 `OnSplitterResize`, `OnItemSelect`, `OnTabChange`, `OnTabClick`.

2. Update sample snippets and `ApiDocumentation` entries if you maintain docs.
3. Update any reflection-driven or JSON-driven integrations that reference event names.
4. Run the build and tests:

```bash
dotnet build --configuration Release
dotnet test --configuration Release --no-build
```

Optional non-breaking migration (recommended for public libraries)

If you prefer not to break consumers immediately, add non-breaking shims that forward the old property name to the new one and mark them as `[Obsolete]`:

```csharp
[Parameter]
[Obsolete("Use OnToggle instead")] // shows the deprecation message at compile time
public EventCallback<EventArgs> OnAccordionItemToggle
{
		get => OnToggle;
		set => OnToggle = value;
}

[Parameter]
public EventCallback<EventArgs> OnToggle { get; set; }
```

Notes on shims:

- Shims preserve runtime compatibility and let you deprecate the old name over one or more releases.
- Prefer shims for widely-used public APIs. Mark them `[EditorBrowsable(EditorBrowsableState.Never)]` if you want to hide them from IntelliSense.

Repo updates performed here

- Sample pages and snippet strings were updated to use the new names.
- Tests in this repository were updated to match the renames.
- A `CHANGELOG.md` entry and this migration note were added.

Need help?

- I can add shims to specific components for a non-breaking migration — tell me which components to add them for and I'll apply patches and run tests.
- I can also prepare a short release note snippet or PR description summarizing the changes for your release.

---

File: `docs/migration/event-name-changes.md`
