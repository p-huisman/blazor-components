# Refactoring Plan: Blazor Components Code Quality Improvement

## Overview
Refactor the PGGM Blazor Components library to follow Blazor and C# best practices, improve code quality, and standardize patterns across all 47+ components.

---

## Phase 1: Critical Fixes (High Priority)

### 1.1 Fix `async void` Event Handlers
**Problem**: `async void` cannot be awaited, exceptions are lost, causes memory leaks.

| File | Line | Current | Fix |
|------|------|---------|-----|
| `PggmAppLayout.razor.cs` | 32 | `private async void OnLocationChanged` | `private async Task OnLocationChangedAsync` |
| `SelectColumn.razor.cs` | 27 | `private async void OnInternalSelectionChanged` | Use `EventCallback` pattern |

**Dependencies**: None  
**Parallel**: Yes

### 1.2 Replace `Console.WriteLine` with `ILogger<T>`
**Files to update**:
- `PggmCheckbox.razor.cs` (lines 44, 72)
- `PggmRadio.razor.cs` (lines 46, 74)
- `PggmSlider.razor.cs` (line 130)
- `PggmWizard.razor.cs` (lines 190, 197)
- `PggmTab.razor.cs` (line 102)

**Pattern**: Inject `ILogger<T>` and use `logger.LogError()` instead.

**Dependencies**: None  
**Parallel**: Yes

### 1.3 Fix Empty Catch Blocks
**Files to update**:
- `PggmCheckbox.razor.cs` (line 56)
- `PggmRadio.razor.cs` (line 56)
- `PggmDataGrid.razor.cs` (lines 363, 378, 395)
- `PggmSelect.razor.cs` (line 371)

**Pattern**: Log exceptions with `ILogger` at appropriate level instead of suppressing.

**Dependencies**: 1.2 (ILogger injection)  
**Parallel**: No

### 1.4 Remove Redundant `StateHasChanged()` Calls
**Files to update**:
- `PggmDialog.razor.cs` (lines 122, 131, 139)
- `PggmDrawer.razor.cs` (lines 105, 121)
- `PggmAddressInput.razor.cs` (line 198)
- `PggmBankAccountInput.razor.cs` (line 188)
- `PggmDataGrid.razor.cs` (lines 353, 1149, 1155)
- `PggmCheckboxForList.razor.cs` (line 40)
- `PggmToolbarToggleButtonGroup.razor.cs` (line 23)
- `PggmValidationSummary.razor.cs` (line 49)
- `PggmValidationMessage.razor.cs` (line 68)
- `PggmInput.cs` (line 106)
- `DialogProvider.razor.cs` (line 31)

**Pattern**: Event callbacks already trigger re-renders; explicit calls are redundant.

**Dependencies**: None  
**Parallel**: Yes

---

## Phase 2: Standardization (Medium Priority)

### 2.1 Standardize Disposal Patterns
**Problem**: Mix of `IDisposable` and `IAsyncDisposable` without clear guidance.

**Actions**:
1. Audit all components implementing `IDisposable` or `IAsyncDisposable`
2. Convert `IDisposable` implementations to `IAsyncDisposable` where JS interop is used
3. Verify `DotNetObjectReference` disposal in:
   - `PggmCheckbox`
   - `PggmRadio`
   - `PggmTable`
   - `PggmDataGrid`

**Files to update**:
- `PggmPaginator` (convert to `IAsyncDisposable`)
- `PggmToolbar` (convert to `IAsyncDisposable`)

**Dependencies**: None  
**Parallel**: Yes

### 2.2 Standardize Form Input Base Classes
**Problem**: Inconsistent inheritance patterns for form inputs.

**Current State**:
- `PggmCheckbox`/`PggmRadio`: Direct `InputBase<T>` inheritance
- `PggmCombobox`: Uses `PggmEventComponentInputBase<T>`
- `PggmInput`: Custom `ComponentBase` with manual rendering

**Target Pattern**: All form inputs should inherit from `PggmEventComponentInputBase<T>` for consistency.

**Files to refactor**:
- `PggmCheckbox.razor.cs`
- `PggmRadio.razor.cs`
- `PggmInput.cs`

**Dependencies**: Phase 1 completion  
**Parallel**: No (sequential refactoring needed)

### 2.3 Add `[EditorRequired]` to Required Parameters
**Files to audit**: All component `.razor.cs` files

**Pattern**: Add `[EditorRequired]` attribute to parameters that must be set for component to function correctly.

**Dependencies**: None  
**Parallel**: Yes

### 2.4 Standardize Event Callback Naming
**Problem**: Inconsistent naming (some use `On` prefix, others don't).

**Target Convention**: All event callbacks should use `On` prefix (e.g., `OnClick`, `OnValueChanged`).

**Files to update**:
- `PggmAccordionItem.razor.cs` (line 26: `OnAccordionItemToggle` → `OnToggle`)

**Note**: This is a breaking change; document in migration guide.

**Dependencies**: None  
**Parallel**: Yes

---

## Phase 3: Performance Optimizations (Medium Priority)

### 3.1 Optimize `GetAttributes()` to Reduce Allocations
**Problem**: `new Dictionary<string, object>()` allocated on every render.

**Files to update**:
- `PggmComponentBase.cs` (line 73)
- `PggmEventComponentInputBase.cs` (line 37)
- `PggmInput.cs` (line 89)

**Options**:
1. Cache dictionaries for common attribute combinations
2. Use `FrozenDictionary` for static attribute sets (.NET 8+)
3. Return `IReadOnlyDictionary` to prevent modifications

**Dependencies**: None  
**Parallel**: Yes

### 3.2 Replace String Concatenation with Interpolation or StringBuilder
**Files to update**:
- `SelectColumn.razor.cs` (line 59)
- `PggmSelect.razor.cs` (line 349)
- `SwatFactuurApiClient.cs` (multiple lines)

**Dependencies**: None  
**Parallel**: Yes

### 3.3 Use `CssBuilder` Consistently
**Problem**: Some components use `CssBuilder`, others use string concatenation.

**Files to audit**: All components building CSS classes dynamically

**Pattern**: Standardize on `CssBuilder` fluent API.

**Dependencies**: None  
**Parallel**: Yes

---

## Phase 4: Null Safety & Validation (Medium Priority)

### 4.1 Reduce Null-Forgiving Operator Usage
**Problem**: Excessive `!` operator suppresses null warnings.

**Files to update**:
- `PggmComponentBase.cs` (lines 17, 18)
- `PggmEventComponentInputBase.cs` (lines 20, 42, 63, 72, 168)
- `PggmEventComponentBase.cs` (lines 119, 149)
- `PggmAppLayout.razor.cs` (lines 12, 15)
- `PggmTopMenu.razor.cs` (line 10)

**Pattern**: Use null-conditional operators (`?.`) or proper null checks instead of `!`.

**Dependencies**: None  
**Parallel**: Yes

### 4.2 Add Missing Null Checks
**Files to update**:
- `PggmCheckboxForList.razor.cs` (line 40: `SelectedItems` null check)
- `PggmCheckbox.razor.cs` (line 58: `EditContext` null check)
- `PggmRadio.razor.cs` (line 60: `EditContext` null check)

**Dependencies**: None  
**Parallel**: Yes

### 4.3 Use `Guard` Utility Consistently
**Problem**: `Guard` utility is underutilized.

**Pattern**: Add parameter validation using `Guard.NotNull()` and `Guard.NotNullOrEmpty()` where appropriate.

**Files to audit**: All component `.razor.cs` files

**Dependencies**: None  
**Parallel**: Yes

---

## Phase 5: Code Style & Tooling (Low Priority)

### 5.1 Add `.editorconfig`
**Configuration**:
```ini
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.cs]
dotnet_sort_system_directives_first = true
dotnet_separate_import_directive_groups = false
```

**Dependencies**: None  
**Parallel**: Yes

### 5.2 Add `Directory.Build.props`
**Purpose**: Centralize common MSBuild properties.

**Content**:
```xml
<Project>
  <PropertyGroup>
    <TargetFramework>net10.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
  </PropertyGroup>
</Project>
```

**Dependencies**: None  
**Parallel**: Yes

### 5.3 Add StyleCop Analyzers
**Actions**:
1. Add `StyleCop.Analyzers` NuGet package to all projects
2. Create `stylecop.json` configuration
3. Fix style violations

**Dependencies**: 5.1 (EditorConfig)  
**Parallel**: No

### 5.4 Add `global.json`
**Purpose**: Pin SDK version for reproducible builds.

**Content**:
```json
{
  "sdk": {
    "version": "10.0.100",
    "rollForward": "latestFeature"
  }
}
```

**Dependencies**: None  
**Parallel**: Yes

---

## Phase 6: Testing & Verification

### 6.1 Add Async Disposal Tests
**Files to create/update**:
- Test components properly dispose `DotNetObjectReference`
- Test `IAsyncDisposable` implementations

### 6.2 Add Event Handling Tests
**Files to create/update**:
- Test event callback invocations
- Test cancelable events

### 6.3 Add Performance Tests
**Files to create**:
- Benchmark component render performance
- Benchmark `GetAttributes()` allocations

---

## Critical Files to Modify

### Base Classes
- `Pggm.Components/Base/PggmComponentBase.cs`
- `Pggm.Components/Base/PggmEventComponentBase.cs`
- `Pggm.Components/Base/PggmEventComponentInputBase.cs`

### Components (High Priority)
- `Pggm.Components/Components/PggmApp/PggmAppLayout/PggmAppLayout.razor.cs`
- `Pggm.Components/Components/PggmDataGrid/SelectColumn.razor.cs`
- `Pggm.Components/Components/PggmCheckbox/PggmCheckbox.razor.cs`
- `Pggm.Components/Components/PggmRadio/PggmRadio.razor.cs`
- `Pggm.Components/Components/PggmDialog/PggmDialog.razor.cs`
- `Pggm.Components/Components/PggmDrawer/PggmDrawer.razor.cs`

### Components (Medium Priority)
- `Pggm.Components/Components/PggmDataGrid/PggmDataGrid.razor.cs`
- `Pggm.Components/Components/PggmSelect/PggmSelect.razor.cs`
- `Pggm.Components/Components/PggmAddressInput/PggmAddressInput.razor.cs`
- `Pggm.Components/Components/PggmBankAccountInput/PggmBankAccountInput.razor.cs`
- `Pggm.Components/Components/PggmPaginator/PggmPaginator.razor.cs`
- `Pggm.Components/Components/PggmToolbar/PggmToolbar.razor.cs`

### Services
- `Pggm.Components/Services/PggmDesignSystemService.cs`

### Configuration Files (New)
- `.editorconfig`
- `Directory.Build.props`
- `stylecop.json`
- `global.json`

---

## Verification Steps

1. **Build Verification**
   ```bash
   dotnet build --configuration Release
   dotnet test
   ```

2. **Static Analysis**
   ```bash
   dotnet format --verify-no-changes
   # After StyleCop: dotnet build (warnings as errors)
   ```

3. **Functional Testing**
   - Run all existing unit tests
   - Run Sample application and verify component behavior
   - Test form validation scenarios
   - Test event handling (cancelable and non-cancelable)

4. **Performance Testing**
   - Profile component render times
   - Verify reduced allocations in `GetAttributes()`
   - Check for memory leaks in disposal patterns

---

## Decisions & Assumptions

1. **Breaking Changes**: Event callback renaming (Phase 2.4) is a breaking change requiring major version bump.
2. **Target Framework**: Stay on .NET 10.0; use `FrozenDictionary` where applicable.
3. **Disposal Pattern**: Standardize on `IAsyncDisposable` for all components using JS interop.
4. **Logging**: Use `ILogger<T>` throughout; no custom logging abstractions.
5. **Form Inputs**: Standardize on `PggmEventComponentInputBase<T>` inheritance.

---

## Excluded from Scope

1. **Documentation updates** (separate effort)
2. **New component creation**
3. **API changes beyond naming fixes**
4. **Bundle/CSS optimizations**
5. **TypeScript code changes**

---

## Timeline Estimate

| Phase | Estimated Effort |
|-------|-----------------|
| Phase 1: Critical Fixes | 2-3 days |
| Phase 2: Standardization | 3-4 days |
| Phase 3: Performance | 2-3 days |
| Phase 4: Null Safety | 2-3 days |
| Phase 5: Tooling | 1-2 days |
| Phase 6: Testing | 2-3 days |
| **Total** | **12-18 days** |

Phases 1, 3, 4, and 5 can run in parallel. Phase 2 contains one sequential task (2.2) that should wait for Phase 1 to finish; the other Phase 2 tasks (2.1, 2.3, 2.4) can run in parallel with Phase 1 where safe. Phase 6 runs after all other phases.
