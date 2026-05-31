using System.Linq.Expressions;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Rendering;

namespace Pggm.Components
{
    using Pggm.Components.Base;

    public class PggmInput : PggmEventComponentInputBase<string>
    {
        // Reuse a dictionary to avoid allocating on every render.
        private readonly Dictionary<string, object> _attributeCache = new(StringComparer.OrdinalIgnoreCase);
        private readonly string _dummyValueBacking = string.Empty;
        private string _internalValueBacking = string.Empty;
        private string? _lastValueParameter;
        private InputText? _inputTextRef;
        public new ElementReference ElementRef => _inputTextRef?.Element ?? default;

        protected override void OnParametersSet()
        {
            // When the consumer provided a Value but did not provide ValueChanged (not two-way bound),
            // we should initialize (or update) the internal backing value so the input displays it.
            // Only update the internal backing when the incoming Value parameter actually changed
            // to avoid clobbering user input during re-renders.
            var isTwoWayBound = ValueChanged.HasDelegate;
            if (!isTwoWayBound)
            {
                if (!string.Equals(Value, _lastValueParameter, StringComparison.Ordinal))
                {
                    _internalValueBacking = Value ?? string.Empty;
                    _lastValueParameter = Value;
                }
            }
            else
            {
                // keep _lastValueParameter in sync when two-way bound
                _lastValueParameter = Value;
            }

            base.OnParametersSet();
        }

        [CascadingParameter] private EditContext? LocalCascadedEditContext { get; set; }

        [Parameter] public string Type { get; set; } = "text";
        [Parameter] public string? Placeholder { get; set; }
        [Parameter] public bool Disabled { get; set; }
        [Parameter] public bool Required { get; set; }
        [Parameter] public bool ReadOnly { get; set; }
        [Parameter] public string? Name { get; set; }
        [Parameter] public string? Id { get; set; }
        [Parameter] public int? MaxLength { get; set; }
        [Parameter] public int? MinLength { get; set; }
        [Parameter] public string? Pattern { get; set; }
        [Parameter] public string? Min { get; set; }
        [Parameter] public string? Max { get; set; }
        [Parameter] public string? Step { get; set; }
        // Use AdditionalAttributes from the base InputBase<string>

        [Parameter] public EventCallback<ChangeEventArgs> OnChange { get; set; }
        [Parameter] public EventCallback<ChangeEventArgs> OnInput { get; set; }

        protected override void BuildRenderTree(RenderTreeBuilder builder)
        {
            var valueExpressionToPass = GetValueExpressionToPass();
            var isTwoWayBound = ValueChanged.HasDelegate;

            RenderInputComponent(builder, isTwoWayBound, valueExpressionToPass);

            var attrs = BuildAttributes(LocalCascadedEditContext != null);
            builder.AddMultipleAttributes(4, attrs);
            builder.AddComponentReferenceCapture(5, r => _inputTextRef = (InputText)r);
            builder.CloseComponent();
        }

        private Expression<Func<string>> GetValueExpressionToPass()
        {
            return ValueExpression ?? (Expression<Func<string>>)(() => _dummyValueBacking);
        }

        private void RenderInputComponent(RenderTreeBuilder builder, bool isTwoWayBound, Expression<Func<string>> valueExpressionToPass)
        {
            builder.OpenComponent(0, typeof(InputText));
            if (isTwoWayBound)
            {
                builder.AddAttribute(1, "Value", Value);
                builder.AddAttribute(2, "ValueChanged", EventCallback.Factory.Create<string>(this, async (string v) =>
                {
                    await ValueChanged.InvokeAsync(v);
                    if (OnChange.HasDelegate)
                        await OnChange.InvokeAsync(new ChangeEventArgs { Value = v });
                }));
                builder.AddAttribute(3, "ValueExpression", valueExpressionToPass);
            }
            else
            {
                builder.AddAttribute(1, "Value", _internalValueBacking);
                builder.AddAttribute(2, "ValueChanged", EventCallback.Factory.Create<string>(this, async (string v) =>
                {
                    _internalValueBacking = v ?? string.Empty;
                    if (OnChange.HasDelegate)
                        await OnChange.InvokeAsync(new ChangeEventArgs { Value = v });
                    StateHasChanged();
                }));
                builder.AddAttribute(3, "ValueExpression", (Expression<Func<string>>)(() => _internalValueBacking));
            }
            builder.AddAttribute(4, "is", "pggm-input");
        }

        private IDictionary<string, object> BuildAttributes(bool inEditForm)
        {
            _attributeCache.Clear();
            AddAdditionalAttributes(_attributeCache);
            AddIdentityAttributes(_attributeCache);
            AddValidationAttributes(_attributeCache, inEditForm);
            AddStateAttributes(_attributeCache);
            AddInputHandler(_attributeCache);
            return _attributeCache;
        }

        private void AddAdditionalAttributes(IDictionary<string, object> attrs)
        {
            if (base.AdditionalAttributes == null) return;
            foreach (var kv in base.AdditionalAttributes)
                attrs[kv.Key] = kv.Value!;
        }

        private void AddIdentityAttributes(IDictionary<string, object> attrs)
        {
            if (!string.IsNullOrEmpty(Placeholder)) attrs["placeholder"] = Placeholder!;
            if (!string.IsNullOrEmpty(Name)) attrs["name"] = Name!;
            if (!string.IsNullOrEmpty(Id)) attrs["id"] = Id!;
        }

        private void AddValidationAttributes(IDictionary<string, object> attrs, bool inEditForm)
        {
            if (!inEditForm && !string.IsNullOrEmpty(Pattern)) attrs["pattern"] = Pattern!;
            if (!string.IsNullOrEmpty(Min) && !inEditForm) attrs["min"] = Min!;
            if (!string.IsNullOrEmpty(Max) && !inEditForm) attrs["max"] = Max!;
            if (!string.IsNullOrEmpty(Step)) attrs["step"] = Step!;
            if (MaxLength.HasValue) attrs["maxlength"] = MaxLength.Value;
            if (MinLength.HasValue && !inEditForm) attrs["minlength"] = MinLength.Value;
            if (!string.Equals(Type, "text", StringComparison.OrdinalIgnoreCase)) attrs["type"] = Type;
            if (Required && !inEditForm) attrs["required"] = true;
        }

        private void AddStateAttributes(IDictionary<string, object> attrs)
        {
            if (Disabled) attrs["disabled"] = true;
            if (ReadOnly) attrs["readonly"] = true;
        }

        private void AddInputHandler(IDictionary<string, object> attrs)
        {
            if (!OnInput.HasDelegate) return;
            attrs["oninput"] = EventCallback.Factory.Create<ChangeEventArgs>(this, async (ChangeEventArgs e) =>
            {
                await OnInput.InvokeAsync(e);
            });
        }

        public static class InputTypes
        {
            public const string Text = "text";
            public const string Email = "email";
            public const string Password = "password";
            public const string Number = "number";
            public const string Tel = "tel";
            public const string Url = "url";
            public const string Search = "search";
            public const string Date = "date";
            public const string Time = "time";
            public const string DateTime = "datetime-local";
            public const string Month = "month";
            public const string Week = "week";
            public const string Color = "color";
            public const string Range = "range";
            public const string File = "file";
            public const string Hidden = "hidden";
        }
    }
}
