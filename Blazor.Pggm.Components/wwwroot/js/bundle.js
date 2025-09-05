var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __reflectGet = Reflect.get;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../packages/accordion/src/accordion-item.css
var accordion_item_default = ":host {\n  display: block;\n  outline: none;\n}\n#content {\n  display: none;\n}\n.pggm-accordion-item--open #content {\n  display: block;\n}\n.pggm-accordion-item--disabled .pggm-accordion-item__header {\n  opacity: 0.5;\n}\nhr {\n  margin: 0;\n  padding: 0;\n  border: 0px;\n  background-color: #D3D5D6;\n  width: 100%;\n  height: 1px;\n}\n.pggm-accordion-item__header {\n  font-size: inherit;\n  width: 100%;\n  text-align: left;\n  padding: .5em 0;\n  border: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 1em;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: none;\n  border-radius: var(--pggm-focus-border-radius);\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.pggm-accordion-item__header .pggm-accordion-item__header--title {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.pggm-accordion-item:hover:not(:has([disabled])) hr {\n  background-color: #898c8f;\n}\n.pggm-accordion-item__header:not([disabled]) {\n  cursor: pointer;\n}\n.chevron {\n  -webkit-transition: .3s ease-in-out;\n  transition: .3s ease-in-out;\n}\n.chevron--up {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.chevron rect {\n  fill: #D0EFE5;\n}\n.chevron path {\n  fill: #008055;\n}\n";

// ../packages/helpers/src/focus.css
var focus_default = ".focus:focus:not([disabled]),\n.focus:focus-visible {\n  outline: var(--pggm-focus-outline-width) solid blue;\n  outline: var(--pggm-focus-outline-width) var(--pggm-focus-outline-style, solid) var(--pggm-focus-outline-color, blue);\n  outline-offset: var(--pggm-focus-outline-offset);\n}\n:where(.focus:focus:not([disabled])) {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: var(--pggm-focus-border-radius);\n}\n:where(.focus:focus-visible:not(.does-not-exist)) {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: var(--pggm-focus-border-radius);\n}\n.focus:focus:not(:focus-visible) {\n  outline: 0;\n}\n";

// ../packages/accordion/src/icons/icons.tsx
var chevron = (direction) => {
  return /* @__PURE__ */ Maquette.h("svg", { xmlns: "http://www.w3.org/2000/svg", classes: { chevron: true, "chevron--up": direction === "up", "chevron--down": direction === "down" }, width: "24", height: "24", fill: "none" }, /* @__PURE__ */ Maquette.h("rect", { width: "24", height: "24", rx: "12" }), /* @__PURE__ */ Maquette.h("path", { "fill-rule": "evenodd", d: "M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z", "clip-rule": "evenodd" }));
};

// ../packages/accordion/src/accordion-item.tsx
var _PGGMAccordionItem_instances, toggle_fn, _onClick;
var PGGMAccordionItem = class extends CustomElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PGGMAccordionItem_instances);
    this.disabled = false;
    this.open = false;
    __privateAdd(this, _onClick, () => {
      if (this.disabled) {
        return;
      }
      __privateMethod(this, _PGGMAccordionItem_instances, toggle_fn).call(this);
    });
  }
  shouldUpdate(propertyName, oldValue, newValue) {
    if (propertyName === "open" && newValue === true) {
      if (this.disabled) {
        return false;
      }
    }
    return true;
  }
  updated(propertyName, oldValue, newValue) {
    if (propertyName === "open" && newValue === true) {
      if (this.disabled) {
        requestAnimationFrame(() => {
          this.open = false;
        });
      }
    } else if (propertyName === "disabled" && newValue === true) {
      requestAnimationFrame(() => {
        this.open = false;
      });
    }
  }
  render() {
    return /* @__PURE__ */ Maquette.h(
      "div",
      {
        classes: {
          "pggm-accordion-item": true,
          "pggm-accordion-item--open": this.open,
          "pggm-accordion-item--disabled": this.disabled
        }
      },
      /* @__PURE__ */ Maquette.h(
        "button",
        {
          class: "focus pggm-accordion-item__header",
          id: "header",
          onclick: __privateGet(this, _onClick),
          "aria-expanded": this.open,
          "aria-controls": "content",
          disabled: this.disabled
        },
        /* @__PURE__ */ Maquette.h("span", { class: "pggm-accordion-item__header--icon" }, this.open ? chevron("down") : chevron("up")),
        /* @__PURE__ */ Maquette.h("div", { class: "pggm-accordion-item__header--title" }, /* @__PURE__ */ Maquette.h("slot", { name: "header" }))
      ),
      /* @__PURE__ */ Maquette.h("div", { id: "content", role: "region", "aria-labelledby": "header" }, /* @__PURE__ */ Maquette.h("slot", null)),
      /* @__PURE__ */ Maquette.h("hr", null)
    );
  }
  connectedCallback() {
    this.addEventListener("focus", () => {
      var _a4, _b;
      (_b = (_a4 = this.shadowRoot) == null ? void 0 : _a4.querySelector("button")) == null ? void 0 : _b.focus();
    });
  }
};
_PGGMAccordionItem_instances = new WeakSet();
toggle_fn = function() {
  this.open = !this.open;
  const applyDefault = this.dispatchEvent(
    new CustomEvent("accordionItemToggle", {
      bubbles: true,
      composed: true,
      cancelable: true
    })
  );
  if (!applyDefault) {
    this.open = !this.open;
  }
};
_onClick = new WeakMap();
PGGMAccordionItem.style = focus_default + accordion_item_default;
PGGMAccordionItem.delegatesFocus = true;
__decorateClass([
  Property({ type: "boolean", attribute: "disabled", reflect: true })
], PGGMAccordionItem.prototype, "disabled", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "open", reflect: true })
], PGGMAccordionItem.prototype, "open", 2);
__decorateClass([
  Property({ type: "string", attribute: "size" })
], PGGMAccordionItem.prototype, "size", 2);
__decorateClass([
  Query("button")
], PGGMAccordionItem.prototype, "buttonElement", 2);
PGGMAccordionItem = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-accordion-item"
  })
], PGGMAccordionItem);

// ../packages/accordion/src/accordion.css
var accordion_default = ":host {\n  display: block;\n}\n";

// ../packages/helpers/src/focus-group-controller.tsx
var _currentFocused, _cachedElements, _directionLength, _FocusGroupController_instances, initElements_fn, initTabIndexes_fn, addEventHandlers_fn, removeEventHandlers_fn, _onFocus, _onKeyDown, focusFirst_fn, focusLast_fn, focusPrevious_fn, focusNext_fn;
var FocusGroupController = class extends CustomElementController {
  constructor(hostElement, options) {
    super(hostElement);
    this.options = options;
    __privateAdd(this, _FocusGroupController_instances);
    __privateAdd(this, _currentFocused, null);
    __privateAdd(this, _cachedElements, []);
    __privateAdd(this, _directionLength, 1);
    __privateAdd(this, _onFocus, (event) => {
      const target = event.target;
      __privateGet(this, _cachedElements).forEach((element) => {
        if (element !== target) {
          element.tabIndex = -1;
        } else {
          element.tabIndex = 0;
        }
      });
    });
    __privateAdd(this, _onKeyDown, (event) => {
      const keys = ["End", "Home"];
      if (this.options.direction === "both") {
        keys.push("ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown");
      } else if (this.options.direction === "horizontal") {
        keys.push("ArrowLeft", "ArrowRight");
      } else if (this.options.direction === "vertical") {
        keys.push("ArrowUp", "ArrowDown");
      }
      if (keys.includes(event.key)) {
        event.preventDefault();
        if (event.key === "End") {
          __privateMethod(this, _FocusGroupController_instances, focusLast_fn).call(this);
        } else if (event.key === "Home") {
          __privateMethod(this, _FocusGroupController_instances, focusFirst_fn).call(this);
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          let nrOfItems = 1;
          if (event.key === "ArrowUp") {
            nrOfItems = __privateGet(this, _directionLength);
          }
          __privateMethod(this, _FocusGroupController_instances, focusPrevious_fn).call(this, nrOfItems);
        } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          let nrOfItems = 1;
          if (event.key === "ArrowDown") {
            nrOfItems = __privateGet(this, _directionLength);
          }
          __privateMethod(this, _FocusGroupController_instances, focusNext_fn).call(this, nrOfItems);
        }
      }
    });
    if (this.options.directionLength) {
      __privateSet(this, _directionLength, this.options.directionLength);
    }
  }
  pause() {
    __privateMethod(this, _FocusGroupController_instances, removeEventHandlers_fn).call(this, __privateGet(this, _cachedElements));
  }
  resume() {
    __privateMethod(this, _FocusGroupController_instances, addEventHandlers_fn).call(this, __privateGet(this, _cachedElements));
  }
  focusElement(element, focusOptions) {
    if (!element) {
      __privateMethod(this, _FocusGroupController_instances, focusFirst_fn).call(this);
      return;
    }
    __privateSet(this, _currentFocused, element);
    element.focus(focusOptions);
  }
  updateElements() {
    __privateMethod(this, _FocusGroupController_instances, initElements_fn).call(this);
  }
  connected() {
    var _a4, _b;
    (_b = (_a4 = this.hostElement) == null ? void 0 : _a4.shadowRoot) == null ? void 0 : _b.addEventListener("slotchange", () => {
      this.updateElements();
    });
    this.updateElements();
  }
  disconnected() {
    __privateMethod(this, _FocusGroupController_instances, removeEventHandlers_fn).call(this, __privateGet(this, _cachedElements));
    __privateSet(this, _cachedElements, []);
  }
};
_currentFocused = new WeakMap();
_cachedElements = new WeakMap();
_directionLength = new WeakMap();
_FocusGroupController_instances = new WeakSet();
initElements_fn = function() {
  __privateMethod(this, _FocusGroupController_instances, removeEventHandlers_fn).call(this, __privateGet(this, _cachedElements));
  __privateSet(this, _cachedElements, []);
  const elements = this.options.elements();
  __privateMethod(this, _FocusGroupController_instances, addEventHandlers_fn).call(this, elements);
  __privateSet(this, _currentFocused, null);
  __privateSet(this, _cachedElements, elements);
  __privateMethod(this, _FocusGroupController_instances, initTabIndexes_fn).call(this, elements);
};
initTabIndexes_fn = function(elements) {
  if (elements.length === 0) {
    return;
  }
  elements.forEach((element) => {
    element.dataset.focusGroup = true.toString();
    element.tabIndex = -1;
  });
  const allFocusable = elements.filter(
    (el) => this.options.isFocusableElement(el)
  );
  if (!__privateGet(this, _currentFocused)) {
    __privateSet(this, _currentFocused, allFocusable[0]);
  }
  __privateGet(this, _currentFocused).tabIndex = 0;
};
addEventHandlers_fn = function(elements) {
  elements.forEach((element) => {
    element.addEventListener("focus", __privateGet(this, _onFocus));
    element.addEventListener("keydown", __privateGet(this, _onKeyDown));
  });
};
removeEventHandlers_fn = function(elements) {
  elements.forEach((element) => {
    element == null ? void 0 : element.removeEventListener("focus", __privateGet(this, _onFocus));
    element == null ? void 0 : element.removeEventListener("keydown", __privateGet(this, _onKeyDown));
  });
};
_onFocus = new WeakMap();
_onKeyDown = new WeakMap();
focusFirst_fn = function(options) {
  const elements = __privateGet(this, _cachedElements);
  const focusable = elements.filter(
    (el) => this.options.isFocusableElement(el)
  );
  const first = focusable[0];
  if (first) {
    __privateSet(this, _currentFocused, first);
    first.focus(options);
  }
};
focusLast_fn = function(options) {
  const elements = __privateGet(this, _cachedElements);
  const focusable = elements.filter(
    (el) => this.options.isFocusableElement(el)
  );
  const last = focusable[focusable.length - 1];
  if (last) {
    __privateSet(this, _currentFocused, last);
    last.focus(options);
  }
};
focusPrevious_fn = function(nr, options) {
  const elements = __privateGet(this, _cachedElements);
  const currentIndex = elements.indexOf(__privateGet(this, _currentFocused));
  const previous = elements[currentIndex - nr];
  if (!this.options.isFocusableElement(previous) && this.options.direction === "both") {
    return;
  }
  if (previous) {
    __privateSet(this, _currentFocused, previous);
    if (!this.options.isFocusableElement(previous)) {
      if (this.options.direction !== "both") {
        __privateMethod(this, _FocusGroupController_instances, focusPrevious_fn).call(this, 1);
      }
    } else {
      previous.focus(options);
    }
  } else if (this.options.direction !== "both") {
    __privateMethod(this, _FocusGroupController_instances, focusLast_fn).call(this);
  }
};
focusNext_fn = function(nr, options) {
  const elements = __privateGet(this, _cachedElements);
  const currentIndex = elements.indexOf(__privateGet(this, _currentFocused));
  const next = elements[currentIndex + nr];
  if (!this.options.isFocusableElement(next) && this.options.direction === "both") {
    return;
  }
  if (next) {
    __privateSet(this, _currentFocused, next);
    if (!this.options.isFocusableElement(next)) {
      if (this.options.direction !== "both") {
        __privateMethod(this, _FocusGroupController_instances, focusNext_fn).call(this, 1, options);
      }
    } else {
      next.focus(options);
    }
  } else if (this.options.direction !== "both") {
    __privateMethod(this, _FocusGroupController_instances, focusFirst_fn).call(this, options);
  }
};

// ../packages/accordion/src/accordion.tsx
var _PGGMAccordion_instances, defaultNodes_get, _focusGroupController, _onToggle;
var PGGMAccordion = class extends CustomElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PGGMAccordion_instances);
    /**
     * Focus group controller for managing focus behavior within the accordion.
     * @type {FocusGroupController}
     * @private
     */
    __privateAdd(this, _focusGroupController, new FocusGroupController(this, {
      direction: "vertical",
      elements: () => this.items,
      isFocusableElement: (el) => el && !el.disabled
    }));
    this.allowMultiple = false;
    /**
     * Handles the toggle event for accordion items.
     * Closes all other items if `allowMultiple` is false and the event is not prevented.
     * @param {Event} event - The toggle event.
     * @returns {void}
     * @private
     */
    __privateAdd(this, _onToggle, (event) => {
      const target = event.target;
      if (this.allowMultiple || event.defaultPrevented) {
        return;
      }
      const items = [...this.items];
      if (items && !items.length) {
        return;
      }
      items.forEach((item) => {
        if (item !== target) {
          item.open = false;
        }
      });
    });
  }
  /**
   * Retrieves the list of accordion items.
   * @type {PGGMAccordionItem[]}
   */
  get items() {
    return [...__privateGet(this, _PGGMAccordion_instances, defaultNodes_get) || []].filter(
      (node) => typeof node.tagName !== "undefined"
    );
  }
  render() {
    return /* @__PURE__ */ Maquette.h(
      "slot",
      {
        on: {
          accordionItemToggle: __privateGet(this, _onToggle)
        }
      }
    );
  }
};
_PGGMAccordion_instances = new WeakSet();
defaultNodes_get = function() {
  return this.querySelectorAll("pggm-accordion-item");
};
_focusGroupController = new WeakMap();
_onToggle = new WeakMap();
PGGMAccordion.delegatesFocus = true;
PGGMAccordion.style = accordion_default;
__decorateClass([
  Property({ type: "boolean", reflect: true, attribute: "allow-multiple" })
], PGGMAccordion.prototype, "allowMultiple", 2);
PGGMAccordion = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-accordion"
  })
], PGGMAccordion);

// ../packages/alert/src/alert.css
var alert_default = ':host(:not([open])) {\n  display: none;\n}\n.alert {\n  display: grid;\n  grid-template-areas: "icon header close-button" "icon content content";\n  grid-template-columns: var(--pggm-alert-icon-size) 1fr 48px;\n  grid-template-rows: auto auto;\n  grid-gap: var(--pggm-alert-content-row-gap) var(--pggm-alert-column-gap);\n  gap: var(--pggm-alert-content-row-gap) var(--pggm-alert-column-gap);\n  border-width: var(--pggm-alert-border-width);\n  border-style: solid;\n  padding: var(--pggm-alert-padding-block-start) var(--pggm-alert-padding-inline-start) var(--pggm-alert-padding-block-end) var(--pggm-alert-padding-inline-end);\n}\n.alert-action {\n  display: none;\n  visibility: hidden;\n}\n.alert-has-action {\n  grid-template-areas: "icon header close-button" "icon content content" "icon action action";\n  grid-template-rows: auto auto auto;\n}\n.alert-has-action .alert-action {\n  grid-area: action;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: var(--pggm-alert-column-gap);\n  visibility: visible;\n}\n.alert-close-button {\n  grid-area: close-button;\n  all: unset;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  text-align: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  min-width: 48px;\n  min-height: 48px;\n  border-radius: var(--pggm-focus-outline-offset);\n}\n.alert-close-button > svg {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.alert-icon--close {\n  width: 24px;\n  height: 24px;\n}\n.alert-informative {\n  border-color: var(--pggm-alert-informative-border-color);\n  background-color: var(--pggm-alert-informative-background-color);\n  color: var(--pggm-alert-informative-color);\n}\n.alert-informative .alert-icon--close {\n  fill: var(--pggm-alert-informative-color);\n}\n.alert-negative {\n  border-color: var(--pggm-alert-negative-border-color);\n  background-color: var(--pggm-alert-negative-background-color);\n  color: var(--pggm-alert-negative-color);\n}\n.alert-negative .alert-icon--close {\n  fill: var(--pggm-alert-negative-color);\n}\n.alert-positive {\n  border-color: var(--pggm-alert-positive-border-color);\n  background-color: var(--pggm-alert-positive-background-color);\n  color: var(--pggm-alert-positive-color);\n}\n.alert-positive .alert-icon--close {\n  fill: var(--pggm-alert-positive-color);\n}\n.alert-warning {\n  border-color: var(--pggm-alert-warning-border-color);\n  background-color: var(--pggm-alert-warning-background-color);\n  color: var(--pggm-alert-warning-color);\n}\n.alert-warning .alert-icon--close {\n  fill: var(--pggm-alert-warning-color);\n}\ndiv.alert-icon {\n  grid-area: icon;\n  width: 24px;\n  height: 24px;\n  padding: var(--pggm-alert-icon-padding-block-start) var(--pggm-alert-icon-padding-inline-start) var(--pggm-alert-icon-padding-block-end) var(--pggm-alert-icon-padding-inline-end);\n}\n.alert-icon--informative {\n  fill: var(--pggm-alert-icon-informative-color);\n}\n.alert-icon--positive {\n  fill: var(--pggm-alert-icon-positive-color);\n}\n.alert-icon--negative {\n  fill: var(--pggm-alert-icon-negative-color);\n}\n.alert-icon--warning {\n  fill: var(--pggm-alert-icon-warning-color);\n}\n.alert-header {\n  grid-area: header;\n  min-height: calc(var(--pggm-alert-icon-padding-block-start) + var(--pggm-alert-icon-size));\n  -ms-flex-line-pack: end;\n  align-content: end;\n}\n#AlertHeader ::slotted(*) {\n  margin: 0;\n  padding: 0;\n  font-family: var(--pggm-alert-heading-font-family);\n  font-size: var(--pggm-alert-heading-font-size);\n  font-weight: var(--pggm-alert-heading-font-weight);\n  line-height: var(--pggm-alert-heading-line-height);\n}\n.alert-content {\n  grid-area: content;\n}\n#AlertAction ::slotted(*:not(a):not(button)) {\n  display: none;\n  visibility: hidden;\n}\n#AlertAction ::slotted(*) {\n  margin: 0;\n  padding: 0;\n}\n#AlertAction ::slotted(a),\n#AlertAction ::slotted(button) {\n  --transition-duration: var(--pggm-motion-duration-xs, 0s);\n  all: unset;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  text-align: center;\n  text-align: var(--pggm-button-text-align, center);\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  border-radius: var(--pggm-button-border-radius);\n  border-width: var(--pggm-button-border-width);\n  border-style: solid;\n  border-style: var(--pggm-button-border-style, solid);\n  font-family: var(--pggm-button-font-family);\n  font-size: var(--pggm-button-font-size);\n  font-weight: var(--pggm-button-font-weight);\n  line-height: var(--pggm-button-line-height);\n  max-width: -webkit-max-content;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  min-height: var(--pggm-button-min-block-size);\n  min-width: var(--pggm-button-min-inline-size);\n  padding-left: var(--pggm-button-padding-inline-start);\n  padding-right: var(--pggm-button-padding-inline-end);\n  padding-top: var(--pggm-button-padding-block-start);\n  padding-bottom: var(--pggm-button-padding-block-end);\n  gap: var(--pggm-button-column-gap);\n  cursor: pointer;\n  position: relative;\n  -webkit-transition: background-color 0s;\n  transition: background-color 0s;\n  -webkit-transition: background-color var(--transition-duration);\n  transition: background-color var(--transition-duration);\n  border-color: var(--pggm-button-primary-border-color);\n  background-color: var(--pggm-alert-icon-informative-color);\n  color: var(--pggm-button-primary-color);\n}\n.alert-informative #AlertAction ::slotted(a),\n.alert-informative #AlertAction ::slotted(button) {\n  background-color: var(--pggm-alert-icon-informative-color);\n}\n.alert-negative #AlertAction ::slotted(a),\n.alert-negative #AlertAction ::slotted(button) {\n  background-color: var(--pggm-alert-icon-negative-color);\n}\n.alert-positive #AlertAction ::slotted(a),\n.alert-positive #AlertAction ::slotted(button) {\n  background-color: var(--pggm-alert-icon-positive-color);\n}\n.alert-warning #AlertAction ::slotted(a),\n.alert-warning #AlertAction ::slotted(button) {\n  background-color: var(--pggm-alert-icon-warning-color);\n}\n#AlertAction ::slotted(*:not([disabled]):focus-visible) {\n  outline: var(--pggm-focus-outline-width) solid blue;\n  outline: var(--pggm-focus-outline-width) var(--pggm-focus-outline-style, solid) var(--pggm-focus-outline-color, blue);\n  outline-offset: var(--pggm-focus-outline-offset);\n}\n';

// ../packages/alert/src/icons.tsx
var cssClassName = "alert-icon";
var informativeIcon = /* @__PURE__ */ Maquette.h("svg", { viewBox: "0 0 24 24", class: cssClassName }, /* @__PURE__ */ Maquette.h(
  "path",
  {
    class: `${cssClassName}--informative`,
    "fill-rule": "evenodd",
    d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z",
    "clip-rule": "evenodd"
  }
), /* @__PURE__ */ Maquette.h(
  "path",
  {
    class: `${cssClassName}--informative`,
    "fill-rule": "evenodd",
    d: "M11 8a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1ZM10 12a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1-1-1Z",
    "clip-rule": "evenodd"
  }
));
var negativeIcon = /* @__PURE__ */ Maquette.h("svg", { viewBox: "0 0 24 24", class: cssClassName }, /* @__PURE__ */ Maquette.h(
  "path",
  {
    class: `${cssClassName}--negative`,
    "fill-rule": "evenodd",
    d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z",
    "clip-rule": "evenodd"
  }
));
var positiveIcon = /* @__PURE__ */ Maquette.h("svg", { viewBox: "0 0 24 24", class: cssClassName }, /* @__PURE__ */ Maquette.h(
  "path",
  {
    class: `${cssClassName}--positive`,
    "fill-rule": "evenodd",
    d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-2.707a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0Z",
    "clip-rule": "evenodd"
  }
));
var warningIcon = /* @__PURE__ */ Maquette.h("svg", { viewBox: "0 0 24 24", class: cssClassName }, /* @__PURE__ */ Maquette.h(
  "path",
  {
    class: `${cssClassName}--warning`,
    "fill-rule": "evenodd",
    d: "M9.37 3.506a3 3 0 0 1 5.24 0l7.095 12.242c.024.04.044.083.062.126A3 3 0 0 1 19.007 20H5l-.055-.001a1.005 1.005 0 0 1-.107 0 3 3 0 0 1-2.625-4.125c.018-.043.038-.085.062-.125L9.37 3.506ZM4.945 18 5 17.999h13.996a1 1 0 0 0 .937-1.32L12.875 4.501l-.01-.017a1 1 0 0 0-1.75 0l-.01.017-7.059 12.18A1 1 0 0 0 4.941 18h.004ZM12 7.999a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1Zm-1 7a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1Z",
    "clip-rule": "evenodd"
  }
));
var closeIcon = /* @__PURE__ */ Maquette.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, /* @__PURE__ */ Maquette.h("path", { class: `${cssClassName}--close`, "fill-rule": "evenodd", d: "M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z", "clip-rule": "evenodd" }));

// ../packages/alert/src/alert.tsx
var _onCloseButtonClick, _PGGMAlert_instances, hasAction_get, _onSlotChange;
var PGGMAlert = class extends CustomElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PGGMAlert_instances);
    this.type = "informative";
    this.open = false;
    this.closeable = false;
    this.closeLabel = "Close";
    __privateAdd(this, _onCloseButtonClick, () => {
      const applyDefault = this.dispatchEvent(new CustomEvent("closeAlert", { bubbles: true, composed: true, cancelable: true }));
      ;
      if (applyDefault) {
        this.open = false;
      }
    });
    this.render = () => {
      return /* @__PURE__ */ Maquette.h("div", { role: "group", "aria-labelledby": "AlertHeader", classes: {
        "alert": true,
        "alert-informative": this.type === "informative",
        "alert-negative": this.type === "negative",
        "alert-positive": this.type === "positive",
        "alert-warning": this.type === "warning",
        "alert-is-closeable": this.closeable,
        "alert-has-action": __privateGet(this, _PGGMAlert_instances, hasAction_get)
      } }, this.closeable ? /* @__PURE__ */ Maquette.h("button", { onclick: __privateGet(this, _onCloseButtonClick), class: "focus alert-close-button", "aria-label": this.closeLabel }, closeIcon) : null, /* @__PURE__ */ Maquette.h("div", { class: "alert-icon", "aria-hidden": "true" }, this.type === "informative" ? informativeIcon : null, this.type === "negative" ? negativeIcon : null, this.type === "positive" ? positiveIcon : null, this.type === "warning" ? warningIcon : null), /* @__PURE__ */ Maquette.h("div", { class: "alert-header", id: "AlertHeader" }, /* @__PURE__ */ Maquette.h("slot", { name: "header" })), /* @__PURE__ */ Maquette.h("div", { class: "alert-content" }, /* @__PURE__ */ Maquette.h("slot", null)), /* @__PURE__ */ Maquette.h("div", { class: "alert-action", id: "AlertAction" }, /* @__PURE__ */ Maquette.h("slot", { name: "action" })));
    };
    __privateAdd(this, _onSlotChange, () => {
      this.renderNow();
    });
  }
  updated(propertyName, oldValue, newValue) {
    if (propertyName === "open" && newValue === true) {
      requestAnimationFrame(
        () => this.dispatchEvent(new CustomEvent("openAlert", {
          bubbles: true,
          composed: true
        }))
      );
    }
  }
  connectedCallback() {
    this.addEventListener("slotchange", __privateGet(this, _onSlotChange));
  }
  disconnectedCallback() {
    this.removeEventListener("slotchange", __privateGet(this, _onSlotChange));
  }
};
_onCloseButtonClick = new WeakMap();
_PGGMAlert_instances = new WeakSet();
hasAction_get = function() {
  return this.querySelector("[slot='action']") !== null;
};
_onSlotChange = new WeakMap();
PGGMAlert.style = focus_default + alert_default;
__decorateClass([
  Property({ type: "string", attribute: "type", reflect: true })
], PGGMAlert.prototype, "type", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "open", reflect: true })
], PGGMAlert.prototype, "open", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "closeable", reflect: true })
], PGGMAlert.prototype, "closeable", 2);
__decorateClass([
  Property({ type: "string", attribute: "close-label", reflect: true })
], PGGMAlert.prototype, "closeLabel", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "open", reflect: true })
], PGGMAlert.prototype, "visible", 2);
PGGMAlert = __decorateClass([
  CustomElementConfig({ tagName: "pggm-alert" })
], PGGMAlert);

// ../packages/button/src/button.css
var button_default = 'button[is=pggm-button],\na[is=pggm-anchor-button] {\n  --transition-duration: var(--pggm-motion-duration-xs, 0s);\n  all: unset;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  text-align: center;\n  text-align: var(--pggm-button-text-align, center);\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  border-radius: var(--pggm-button-border-radius);\n  border-width: var(--pggm-button-border-width);\n  border-style: solid;\n  border-style: var(--pggm-button-border-style, solid);\n  font-family: var(--pggm-button-font-family);\n  font-size: var(--pggm-button-font-size);\n  font-weight: var(--pggm-button-font-weight);\n  line-height: var(--pggm-button-line-height);\n  max-width: -webkit-max-content;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  min-height: var(--pggm-button-min-block-size);\n  min-width: var(--pggm-button-min-inline-size);\n  padding-left: var(--pggm-button-padding-inline-start);\n  padding-right: var(--pggm-button-padding-inline-end);\n  padding-top: var(--pggm-button-padding-block-start);\n  padding-bottom: var(--pggm-button-padding-block-end);\n  gap: var(--pggm-button-column-gap);\n  vertical-align: middle;\n  cursor: pointer;\n  position: relative;\n  -webkit-transition: background-color 0s;\n  transition: background-color 0s;\n  -webkit-transition: background-color var(--transition-duration);\n  transition: background-color var(--transition-duration);\n}\nbutton[is=pggm-button]:focus:not([disabled]),\na[is=pggm-anchor-button]:focus:not([disabled]),\nbutton[is=pggm-button]:focus-visible,\na[is=pggm-anchor-button]:focus-visible {\n  outline: var(--pggm-focus-outline-width) solid blue;\n  outline: var(--pggm-focus-outline-width) var(--pggm-focus-outline-style, solid) var(--pggm-focus-outline-color, blue);\n  outline-offset: var(--pggm-focus-outline-offset);\n}\n:where(button[is=pggm-button]:focus:not([disabled])) {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: var(--pggm-focus-border-radius);\n}\n:where(button[is=pggm-button]:focus-visible:not(.does-not-exist)) {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: var(--pggm-focus-border-radius);\n}\n:where(a[is=pggm-anchor-button]:focus:not([disabled])) {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: var(--pggm-focus-border-radius);\n}\n:where(a[is=pggm-anchor-button]:focus-visible:not(.does-not-exist)) {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border-radius: var(--pggm-focus-border-radius);\n}\nbutton[is=pggm-button]:focus:not(:focus-visible),\na[is=pggm-anchor-button]:focus:not(:focus-visible) {\n  outline: 0;\n}\nbutton[is=pggm-button][icon-only],\na[is=pggm-anchor-button][icon-only] {\n  width: var(--pggm-button-min-block-size);\n  height: var(--pggm-button-min-block-size);\n  padding-left: 0;\n  padding-left: initial;\n  padding-right: 0;\n  padding-right: initial;\n  text-indent: -9999px;\n  overflow: hidden;\n}\nbutton[is=pggm-button]::before,\na[is=pggm-anchor-button]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  min-height: var(--pggm-button-min-block-size);\n  min-width: var(--pggm-button-min-inline-size);\n  background-color: transparent;\n  z-index: 1;\n}\nbutton[is=pggm-button][disabled],\na[is=pggm-anchor-button][disabled] {\n  cursor: inherit;\n  pointer-events: none;\n  background-color: var(--pggm-button-disabled-background-color);\n  border-color: var(--pggm-button-disabled-border-color);\n  color: var(--pggm-button-disabled-color);\n}\nbutton[is=pggm-button][appearance=primary]:not([disabled]),\na[is=pggm-anchor-button][appearance=primary]:not([disabled]) {\n  background-color: var(--pggm-button-primary-background-color);\n  border-color: var(--pggm-button-primary-border-color);\n  color: var(--pggm-button-primary-color);\n}\nbutton[is=pggm-button][appearance=primary]:not([disabled]):hover,\na[is=pggm-anchor-button][appearance=primary]:not([disabled]):hover {\n  background-color: var(--pggm-button-primary-hover-background-color);\n  border-color: var(--pggm-button-primary-hover-background-color);\n  color: var(--pggm-button-primary-hover-color);\n}\nbutton[is=pggm-button][appearance=primary]:not([disabled]):active,\na[is=pggm-anchor-button][appearance=primary]:not([disabled]):active {\n  background-color: var(--pggm-button-primary-active-background-color);\n  border-color: var(--pggm-button-primary-active-border-color);\n  color: var(--pggm-button-primary-active-color);\n}\nbutton[is=pggm-button] pggm-icon,\na[is=pggm-anchor-button] pggm-icon {\n  margin: 0;\n  padding: 0;\n  line-height: 0;\n  --pggm-icon-size: var(--pggm-button-icon-size);\n}\nbutton[is=pggm-button][icon-only] pggm-icon,\na[is=pggm-anchor-button][icon-only] pggm-icon {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  translate: -50% -50%;\n}\nbutton[is=pggm-button][appearance=secondary]:not([disabled]),\na[is=pggm-anchor-button][appearance=secondary]:not([disabled]) {\n  background-color: var(--pggm-button-secondary-background-color);\n  border-color: var(--pggm-button-secondary-border-color);\n  color: var(--pggm-button-secondary-color);\n}\nbutton[is=pggm-button][appearance=secondary]:not([disabled]):hover,\na[is=pggm-anchor-button][appearance=secondary]:not([disabled]):hover {\n  background-color: var(--pggm-button-secondary-hover-background-color);\n  border-color: var(--pggm-button-secondary-hover-border-color);\n  color: var(--pggm-button-secondary-hover-color);\n}\nbutton[is=pggm-button][appearance=secondary]:not([disabled]):active,\na[is=pggm-anchor-button][appearance=secondary]:not([disabled]):active {\n  background-color: var(--pggm-button-secondary-active-background-color);\n  border-color: var(--pggm-button-secondary-active-border-color);\n  color: var(--pggm-button-secondary-active-color);\n}\nbutton[is=pggm-button][appearance=tertiary]:not([disabled]),\na[is=pggm-anchor-button][appearance=tertiary]:not([disabled]) {\n  background-color: var(--pggm-button-tertiary-background-color);\n  border-color: var(--pggm-button-tertiary-border-color);\n  color: var(--pggm-button-tertiary-color);\n}\nbutton[is=pggm-button][appearance=tertiary]:not([disabled]):hover,\na[is=pggm-anchor-button][appearance=tertiary]:not([disabled]):hover {\n  background-color: var(--pggm-button-tertiary-hover-background-color);\n  border-color: var(--pggm-button-tertiary-hover-border-color);\n  color: var(--pggm-button-tertiary-hover-color);\n}\nbutton[is=pggm-button][appearance=tertiary]:not([disabled]):active,\na[is=pggm-anchor-button][appearance=tertiary]:not([disabled]):active {\n  background-color: var(--pggm-button-tertiary-active-background-color);\n  border-color: var(--pggm-button-tertiary-active-border-color);\n  color: var(--pggm-button-tertiary-active-color);\n}\nbutton[is=pggm-button][appearance=sign-in]:not([disabled]),\na[is=pggm-anchor-button][appearance=sign-in]:not([disabled]) {\n  background-color: var(--pggm-button-sign-in-background-color);\n  border-color: var(--pggm-button-sign-in-border-color);\n  color: var(--pggm-button-sign-in-color);\n}\nbutton[is=pggm-button][appearance=sign-in]:not([disabled]):hover,\na[is=pggm-anchor-button][appearance=sign-in]:not([disabled]):hover {\n  background-color: var(--pggm-button-sign-in-hover-background-color);\n  border-color: var(--pggm-button-sign-in-hover-border-color);\n  color: var(--pggm-button-sign-in-hover-color);\n}\nbutton[is=pggm-button][appearance=sign-in]:not([disabled]):active,\na[is=pggm-anchor-button][appearance=sign-in]:not([disabled]):active {\n  background-color: var(--pggm-button-sign-in-active-background-color);\n  border-color: var(--pggm-button-sign-in-active-border-color);\n  color: var(--pggm-button-sign-in-active-color);\n}\n';

// ../packages/helpers/src/css.ts
var supportsAdoptedStyleSheets = document.adoptedStyleSheets && CSSStyleSheet ? true : false;
function createLinkElement(css, name) {
  const blob = new Blob([css], { type: "text/css" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("link");
  if (name) {
    link.setAttribute("data-name", name);
  }
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", url);
  return link;
}
function styleRuleExistsInAdoptedStyleSheets(root, name) {
  let hasStyle = false;
  if (!root.adoptedStyleSheets) {
    return false;
  }
  for (const sheet of root.adoptedStyleSheets) {
    for (const rule of sheet.cssRules) {
      if (rule instanceof CSSStyleRule && rule.selectorText.indexOf(`[is="${name}"]`) > -1) {
        hasStyle = true;
        break;
      }
      if (hasStyle) {
        break;
      }
    }
  }
  return hasStyle;
}
function addStyleToShadowRoot(root, css, name) {
  if (!(root instanceof ShadowRoot) && !(root instanceof Document)) {
    root = root.ownerDocument;
  }
  if (hasRootNodeStyleForCustomBuildIn(root, name)) {
    return;
  }
  if (supportsAdoptedStyleSheets) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`${name}{--_tmp_:1;}${css}`);
    if (!(root == null ? void 0 : root.adoptedStyleSheets)) {
      root.adoptedStyleSheets = [sheet];
    } else {
      root.adoptedStyleSheets.push(sheet);
    }
  } else {
    const link = createLinkElement(css, name);
    if (root instanceof Document) {
      root.head.appendChild(link);
    } else {
      root == null ? void 0 : root.appendChild(link);
    }
  }
}
function hasRootNodeStyleForCustomBuildIn(root, name) {
  let hasStyle = false;
  if (!(root instanceof ShadowRoot) && !(root instanceof Document)) {
    root = root.ownerDocument;
  }
  if (supportsAdoptedStyleSheets) {
    hasStyle = styleRuleExistsInAdoptedStyleSheets(root, name);
  } else {
    const style = root.querySelector(`link[data-name="${name}"]`);
    if (style) {
      hasStyle = true;
    }
  }
  return hasStyle;
}

// ../packages/anchor-button/src/anchor-button.tsx
var PGGMAnchorButton = class extends HTMLAnchorElement {
  connectedCallback() {
    addStyleToShadowRoot(this.getRootNode(), button_default, PGGMAnchorButton.TAG_NAME);
  }
};
PGGMAnchorButton.TAG_NAME = "pggm-anchor-button";
PGGMAnchorButton = __decorateClass([
  CustomElementConfig({
    tagName: PGGMAnchorButton.TAG_NAME,
    options: {
      extends: "a"
    }
  })
], PGGMAnchorButton);

// ../packages/button/src/button.tsx
var PGGMButton = class extends HTMLButtonElement {
  connectedCallback() {
    addStyleToShadowRoot(this.getRootNode(), button_default, PGGMButton.TAG_NAME);
  }
};
PGGMButton.TAG_NAME = "pggm-button";
PGGMButton = __decorateClass([
  CustomElementConfig({
    tagName: PGGMButton.TAG_NAME,
    options: {
      extends: "button"
    }
  })
], PGGMButton);

// ../packages/icon/src/icon.css
var icon_default = ":host {\n  display: inline-block;\n  vertical-align: text-top;\n}\n.icon__wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.icon svg {\n  display: block;\n  width: 1.5em;\n  width: var(--pggm-icon-size, 1.5em);\n  height: 1.5em;\n  height: var(--pggm-icon-size, 1.5em);\n  stroke: currentColor;\n  stroke: var(--pggm-icon-color, currentColor);\n  fill: currentColor;\n  stroke: none;\n}\n.icon.icon--s svg {\n  width: calc(1.5em / 1.5);\n  width: calc(var(--pggm-icon-size, 1.5em) / 1.5);\n  height: calc(1.5em / 1.5);\n  height: calc(var(--pggm-icon-size, 1.5em) / 1.5);\n}\n.icon.icon--l svg {\n  width: calc(1.5 * 1.5em);\n  width: calc(1.5 * var(--pggm-icon-size, 1.5em));\n  height: calc(1.5 * 1.5em);\n  height: calc(1.5 * var(--pggm-icon-size, 1.5em));\n}\n.icon.icon--xl svg {\n  width: calc(2 * 1.5em);\n  width: calc(2 * var(--pggm-icon-size, 1.5em));\n  height: calc(2 * 1.5em);\n  height: calc(2 * var(--pggm-icon-size, 1.5em));\n}\n.icon.icon--outline svg {\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n";

// ../packages/icon/src/icons.json
var icons_default = { "alert-filled": "\0", alert: "\0", apple: "\0", calendar: "\0", "chart-bars": "\0", "chevron-down": "\0", "chevron-left": "\0", "chevron-right": "\0", "chevron-up": "\0", copy: "\0", heart: "\0", info: "\0", "mood-smile": "\0", pencil: "\0", user: "\0", users: "\0" };

// ../packages/icon/src/pggm-icons.symbol.svg
var pggm_icons_symbol_default = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0" style="display:none;"><symbol viewBox="0 0 24 24" id="pggm-icons-alert-filled">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-alert">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M12 9v4"></path>\n  <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"></path>\n  <path d="M12 16h.01"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-apple">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M4 11.319c0 3.102 .444 5.319 2.222 7.978c1.351 1.797 3.156 2.247 5.08 .988c.426 -.268 .97 -.268 1.397 0c1.923 1.26 3.728 .809 5.079 -.988c1.778 -2.66 2.222 -4.876 2.222 -7.977c0 -2.661 -1.99 -5.32 -4.444 -5.32c-1.267 0 -2.41 .693 -3.22 1.44a.5 .5 0 0 1 -.672 0c-.809 -.746 -1.953 -1.44 -3.22 -1.44c-2.454 0 -4.444 2.66 -4.444 5.319"></path>\n  <path d="M7 12c0 -1.47 .454 -2.34 1.5 -3"></path>\n  <path d="M12 7c0 -1.2 .867 -4 3 -4"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-calendar">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>\n  <path d="M16 3v4"></path>\n  <path d="M8 3v4"></path>\n  <path d="M4 11h16"></path>\n  <path d="M11 15h1"></path>\n  <path d="M12 15v3"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-chart-bars">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>\n  <path d="M9 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>\n  <path d="M15 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>\n  <path d="M4 20h14"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-chevron-down">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M6 9l6 6l6 -6"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-chevron-left">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M15 6l-6 6l6 6"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-chevron-right">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M9 6l6 6l-6 6"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-chevron-up">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M6 15l6 -6l6 6"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-copy">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>\n  <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-heart">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-info">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>\n  <path d="M12 9h.01"></path>\n  <path d="M11 12h1v4h1"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-mood-smile">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>\n  <path d="M9 10l.01 0"></path>\n  <path d="M15 10l.01 0"></path>\n  <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-pencil">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>\n  <path d="M13.5 6.5l4 4"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-user">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>\n  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>\n</symbol><symbol viewBox="0 0 24 24" id="pggm-icons-users">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>\n  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>\n  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\n  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>\n</symbol></svg>';

// ../packages/icon/src/icon.tsx
var sizes = ["s", "m", "l", "xl"];
var icons = Object.keys(icons_default);
var PGGMIcon = class extends CustomElement {
  constructor() {
    super(...arguments);
    this.size = "m";
    this.render = () => {
      return /* @__PURE__ */ Maquette.h("div", { class: "icon__wrapper" }, /* @__PURE__ */ Maquette.h("span", { innerHTML: pggm_icons_symbol_default }), /* @__PURE__ */ Maquette.h("div", { class: `icon icon--${this.size} icon--${this.icon.endsWith("filled") ? "filled" : "outline"}` }, /* @__PURE__ */ Maquette.h("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ Maquette.h("use", { href: `#pggm-icons-${this.icon}`, x: "0", y: "0" }))));
    };
  }
  connectedCallback() {
    this.setAttribute("role", "presentation");
    this.icon = this.getAttribute("icon") || "";
  }
  updated(propperty, oldValue, newValue) {
    switch (propperty) {
      case "icon":
        this.icon = newValue;
        break;
      case "size":
        if (sizes.includes(newValue)) {
          this.size = newValue;
        }
        break;
      default:
        break;
    }
  }
};
PGGMIcon.style = icon_default;
PGGMIcon.observedAttributes = ["icon", "size", "outline"];
__decorateClass([
  Property({ type: "string", attribute: "icon", reflect: true })
], PGGMIcon.prototype, "icon", 2);
__decorateClass([
  Property({ type: "string", attribute: "size", reflect: true })
], PGGMIcon.prototype, "size", 2);
PGGMIcon = __decorateClass([
  CustomElementConfig({ tagName: "pggm-icon" })
], PGGMIcon);

// ../packages/calendar/src/calendar.css
var calendar_default = ":host {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  --pggm-calendar-font-family: var(--pggm-document-font-family);\n  --pggm-calendar-color: var(--pggm-document-color);\n  --pggm-calendar-padding-inline-end: var(--pggm-space-inline-md);\n  --pggm-calendar-padding-inline-start: var(--pggm-space-inline-md);\n  --pggm-calendar-gap: var(--pggm-space-inline-md);\n  --pggm-calendar-nav-button-width: 40px;\n  --pggm-calendar-nav-button-height: 40px;\n  --pggm-calendar-nav-button-color: var(--pggm-interaction-color);\n  --pggm-calendar-nav-button-hover-color: var(--pggm-color-green-100);\n  --pggm-calendar-nav-button-border-width: 1px;\n  --pggm-calendar-nav-button-border-color: var(--pggm-interaction-color);\n  --pggm-calendar-header-button-color: var(--pggm-interaction-color);\n  --pggm-calendar-header-button-hover-color: var( --pggm-interaction-active-color );\n  --pggm-calendar-header-button-font-size: var( --pggm-typography-font-size-regular );\n  --pggm-calendar-header-button-font-weight: var( --pggm-typography-font-weight-semibold );\n  --pggm-calendar-header-border-color: var(--pggm-color-gray-200);\n  --pggm-calendar-header-border-width: var(--pggm-border-width-sm);\n  --pggm-calendar-close-button-hover-color: var(--pggm-interaction-color);\n  --pggm-calendar-day-width: 32px;\n  --pggm-calendar-day-height: 32px;\n  --pggm-calendar-item-color: var(--pggm-document-color);\n  --pggm-calendar-item-disabled-color: var(--pggm-color-gray-500);\n  --pggm-calendar-item-font-weight: var(--pggm-typography-font-weight-regular);\n  --pggm-calendar-item-color: var(--pggm-interaction-color);\n  --pggm-calendar-item-hover-color: var(--pggm-interaction-hover-color);\n  --pggm-calendar-item-hover-background-color: var(--pggm-color-green-100);\n  --pggm-calendar-item-selected-color: var(--pggm-color-white);\n  --pggm-calendar-item-selected-background-color: var(--pggm-interaction-hover-color);\n  font-family: var(--pggm-calendar-font-family);\n  color: var(--pggm-calendar-color);\n  --__calendar-width: calc( var(--pggm-calendar-padding-inline-start) + (var(--pggm-calendar-day-width) * 7) + (var(--pggm-calendar-gap) * 6) + var(--pggm-calendar-padding-inline-end) );\n}\nbutton:not(:disabled) {\n  cursor: pointer;\n}\n.calendar,\n.calendar-panel {\n  width: var(--__calendar-width);\n}\n.calendar-header--nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: var(--pggm-calendar-gap);\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: var(--pggm-calendar-gap);\n}\n.calendar-header--nav button.nav-button {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  border: var(--pggm-calendar-nav-button-border-width) solid var(--pggm-calendar-nav-button-border-color);\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: var(--pggm-calendar-nav-button-height);\n  width: var(--pggm-calendar-nav-button-width);\n}\n.calendar-header--nav button.nav-button .chevron path {\n  fill: var(--pggm-calendar-nav-button-color);\n}\n.calendar-header--nav button.nav-button .chevron-right {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.calendar-header--nav button.nav-button:hover {\n  background-color: var(--pggm-calendar-nav-button-hover-color);\n}\n.calendar-header--nav .calendar-header--month-year {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  gap: 1em;\n}\n.calendar-header--nav .calendar-header--month-year .calendar-header-month,\n.calendar-header--nav .calendar-header--month-year .calendar-header-year {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: transparent;\n  border: none;\n  line-height: 1;\n  padding: .5em;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  vertical-align: middle;\n  margin: auto;\n  font-size: var(--pggm-calendar-header-button-font-size);\n  font-weight: var(--pggm-calendar-header-button-font-weight);\n  color: var(--pggm-calendar-header-button-color);\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n.calendar-header--nav .calendar-header--month-year .calendar-header-month:hover,\n.calendar-header--nav .calendar-header--month-year .calendar-header-year:hover {\n  color: var(--pggm-calendar-header-button-hover-color);\n}\n.calendar-header--nav .calendar-header--month-year .calendar-header-year {\n  width: 6ch;\n}\n";

// ../packages/calendar/src/calendar-panel.css
var calendar_panel_default = ".sr-only {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\nbutton {\n  white-space: nowrap;\n  color: var(--pggm-calendar-item-color, var(--pggm-document-color));\n}\nbutton:disabled {\n  color: var(--pggm-calendar-item-disabled-color, var(--pggm-color-gray-500));\n}\nbutton:not(:disabled) {\n  cursor: pointer;\n}\n.calendar-header--days,\n.calendar-header--months,\n.calendar-header--years,\n.calendar-week,\n.calendar-month-row,\n.calendar-year-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 1em;\n  padding: 0 1em;\n}\n.calendar-month-row,\n.calendar-year-row {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n.calendar-header--years,\n.calendar-header--months,\n.calendar-header--days {\n  margin-bottom: 1em;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\n.close-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n  padding: 0;\n  background: transparent;\n  border: none;\n}\n.close-button svg .close-icon {\n  stroke: var(--pggm-calendar-color);\n}\n.close-button:hover svg .close-icon {\n  stroke: var(--pggm-calendar-close-button-hover-color);\n}\n.calendar-month-row,\n.calendar-year-row,\n.calendar-week {\n  margin-bottom: 1em;\n}\n.calendar-header--days {\n  border-bottom: var(--pggm-calendar-header-border-width) solid var(--pggm-calendar-header-border-color);\n}\n.calendar-header-day-name,\n.month,\n.day,\n.year {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  overflow: hidden;\n  height: 32px;\n  width: 32px;\n}\n.year,\n.month {\n  width: calc(1.5 * var(--pggm-calendar-day-width));\n  height: calc(1.5 * var(--pggm-calendar-day-height));\n}\n.year,\n.month,\n.day {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  border-radius: 50%;\n}\n.year:focus-visible:not(.day--is-selected) {\n  background-color: var(--pggm-calendar-item-hover-background-color);\n  color: var(--pggm-calendar-item-hover-color);\n}\n.month:focus-visible:not(.day--is-selected) {\n  background-color: var(--pggm-calendar-item-hover-background-color);\n  color: var(--pggm-calendar-item-hover-color);\n}\n.day:focus-visible:not(.day--is-selected) {\n  background-color: var(--pggm-calendar-item-hover-background-color);\n  color: var(--pggm-calendar-item-hover-color);\n}\n.day--hover-in-between.year,\n.day--hover-in-between.month,\n.day--hover-in-between.day,\n.year:hover:not([disabled]):not(.day--is-selected),\n.month:hover:not([disabled]):not(.day--is-selected),\n.day:hover:not([disabled]):not(.day--is-selected) {\n  background-color: var(--pggm-calendar-item-hover-background-color);\n  color: var(--pggm-calendar-item-hover-color);\n}\n.day--is-today {\n  color: #007C53;\n  font-weight: var(--pggm-typography-font-weight-semibold);\n}\n.day--is-in-between,\n.day--is-selected:not(:disabled) {\n  background-color: var(--pggm-calendar-item-selected-background-color);\n  color: var(--pggm-calendar-item-selected-color);\n}\n.calendar-week > * {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: var(--pggm-calendar-day-width);\n  height: var(--pggm-calendar-day-height);\n}\n";

// ../packages/calendar/src/calendar-day-panel.tsx
var _focusGroupController2, _startDate, _endDate, _PGGMCalendarDayPanel_instances, renderDayNames_fn, _onDayButtonClick, _today, _handleMouseEnter, removeHoverClassNames_fn, _handleMouseLeave;
var PGGMCalendarDayPanel = class extends CustomElement {
  constructor() {
    super();
    __privateAdd(this, _PGGMCalendarDayPanel_instances);
    __privateAdd(this, _focusGroupController2);
    __privateAdd(this, _startDate, null);
    __privateAdd(this, _endDate, null);
    __privateAdd(this, _onDayButtonClick, (event) => {
      const button = event.target;
      __privateGet(this, _focusGroupController2).focusElement(button, { preventScroll: true });
      const type = this.calendar.type || "date";
      if (type === "date") {
        this.calendar.startDate = PGGMCalendar.parseDate(button.dataset.date);
      } else if (type === "period") {
        if (!this.calendar.startDate) {
          this.calendar.startDate = PGGMCalendar.parseDate(button.dataset.date);
        } else if (!this.calendar.endDate) {
          this.calendar.endDate = PGGMCalendar.parseDate(button.dataset.date);
        } else {
          this.calendar.startDate = PGGMCalendar.parseDate(button.dataset.date);
          this.calendar.endDate = null;
        }
      }
    });
    __privateAdd(this, _today, /* @__PURE__ */ new Date());
    __privateAdd(this, _handleMouseEnter, (event) => {
      if (!__privateGet(this, _startDate) || __privateGet(this, _endDate) || this.calendar.type === "date") {
        return;
      }
      const button = event.target;
      const hoverDate = PGGMCalendar.parseDate(button.dataset.date);
      this.shadowRoot.querySelectorAll(".calendar-week button").forEach((button2) => {
        const date = PGGMCalendar.parseDate(button2.dataset.date);
        if (date > __privateGet(this, _startDate) && date < hoverDate) {
          button2.classList.add("day--hover-in-between");
        } else {
          button2.classList.remove("day--hover-in-between");
        }
      });
    });
    __privateAdd(this, _handleMouseLeave, () => {
      if (!__privateGet(this, _startDate) || __privateGet(this, _endDate) || this.calendar.type === "date") {
        return;
      }
      __privateMethod(this, _PGGMCalendarDayPanel_instances, removeHoverClassNames_fn).call(this);
    });
    this.render = () => {
      return /* @__PURE__ */ Maquette.h("div", { class: "calendar-day-panel", afterCreate: () => {
        __privateGet(this, _focusGroupController2).updateElements();
      } }, /* @__PURE__ */ Maquette.h("div", { class: "calendar-header--days" }, __privateMethod(this, _PGGMCalendarDayPanel_instances, renderDayNames_fn).call(this)), this.renderDayPanel());
    };
    this.renderDayPanel = () => {
      const weeks = [];
      const firstDay = new Date(this.displayDateAsDate.getFullYear(), this.displayDateAsDate.getMonth(), 1).getDay();
      let offset3 = firstDay - this.firstDayOfWeek;
      if (offset3 < 0) {
        offset3 = 7 + offset3;
      }
      const daysInMonth = new Date(this.displayDateAsDate.getFullYear(), this.displayDateAsDate.getMonth() + 1, 0).getDate();
      const items = [
        ...Array.from({ length: offset3 }, (_) => -1),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
      ];
      const chunkSize = 7;
      for (let i = 0; i < items.length; i += chunkSize) {
        const chunk = items.slice(i, i + chunkSize);
        weeks.push(chunk);
      }
      const lastWeek = weeks[weeks.length - 1];
      while (lastWeek.length < 7) {
        lastWeek.push(-1);
      }
      return /* @__PURE__ */ Maquette.h("div", { class: "calendar-days" }, weeks.map((week, i) => {
        return /* @__PURE__ */ Maquette.h("div", { key: `week-${i}`, class: "calendar-week" }, week.map((day, i2) => {
          if (day === -1) {
            return /* @__PURE__ */ Maquette.h("button", { disabled: "disabled", key: `spacer-${i}-${i2}`, class: "day panel-button" });
          } else {
            const yyyy = this.displayDateAsDate.getFullYear().toString();
            const mm = (this.displayDateAsDate.getMonth() + 1).toString().padStart(2, "0");
            const dd = day.toString().padStart(2, "0");
            const date = PGGMCalendar.parseDate(`${yyyy}-${mm}-${dd}`);
            const isToday = `${yyyy}-${mm}-${dd}` === PGGMCalendar.dateToYYYY_MM_DD(__privateGet(this, _today));
            const isInRange = this.calendar.inRange(date, 0 /* Day */);
            let isValue = false;
            let isInBetween = false;
            if (this.calendar.type === "date") {
              const start = this.calendar.startDate ? PGGMCalendar.dateToYYYY_MM_DD(this.calendar.startDate) : null;
              if (start) {
                isValue = start === `${yyyy}-${mm}-${dd}`;
              }
            } else if (this.calendar.type === "period") {
              const start = this.calendar.startDate ? PGGMCalendar.dateToYYYY_MM_DD(this.calendar.startDate) : null;
              const end = this.calendar.endDate ? PGGMCalendar.dateToYYYY_MM_DD(this.calendar.endDate) : null;
              if (start && end) {
                isValue = start === `${yyyy}-${mm}-${dd}` || end === `${yyyy}-${mm}-${dd}`;
              }
              if (start && !end) {
                isValue = start === `${yyyy}-${mm}-${dd}`;
              }
              if (start && end) {
                const dateValue = PGGMCalendar.parseDate(`${yyyy}-${mm}-${dd}`);
                isInBetween = dateValue > this.calendar.startDate && dateValue < this.calendar.endDate;
              }
            }
            return /* @__PURE__ */ Maquette.h(
              "button",
              {
                onclick: __privateGet(this, _onDayButtonClick),
                onmouseenter: __privateGet(this, _handleMouseEnter),
                onmouseleave: __privateGet(this, _handleMouseLeave),
                classes: {
                  day: true,
                  "panel-button": true,
                  "day--is-today": isToday,
                  "day--is-selected": isValue,
                  "day--is-in-between": isInBetween,
                  focus: true
                },
                disabled: isInRange ? void 0 : "disabled",
                "data-date": `${yyyy}-${mm}-${dd}`,
                key: `button-=${date.getTime()}-${i}-${i2}`
              },
              day
            );
          }
        }));
      }));
    };
    __privateSet(this, _focusGroupController2, new FocusGroupController(this, {
      direction: "both",
      elements: () => Array.from(this.shadowRoot.querySelectorAll(".calendar-week button")),
      isFocusableElement: (el) => el && !el.disabled,
      directionLength: 7
    }));
  }
  get calendar() {
    return this.parentElement.getRootNode().host;
  }
  get firstDayOfWeek() {
    const lang = this.lang || "nl";
    const locale = new Intl.Locale(lang);
    const hasSupport = typeof locale.getWeekInfo === "function";
    if (hasSupport) {
      return locale.getWeekInfo().firstDay;
    }
    return 1;
  }
  get displayDateAsDate() {
    return dateAttributeConverter.fromAttribute(this.displayDate);
  }
  updated(propertyName, oldValue, newValue) {
    if (propertyName === "displayDate") {
      requestAnimationFrame(() => {
        __privateGet(this, _focusGroupController2).updateElements();
      });
    }
    if (propertyName === "value") {
      __privateSet(this, _startDate, this.calendar.startDate);
      __privateSet(this, _endDate, this.calendar.endDate);
      if (__privateGet(this, _endDate)) {
        __privateMethod(this, _PGGMCalendarDayPanel_instances, removeHoverClassNames_fn).call(this);
      }
    }
  }
  focus(options) {
    requestAnimationFrame(() => {
      options = options || {};
      options.preventScroll = true;
      __privateGet(this, _focusGroupController2).updateElements();
      __privateGet(this, _focusGroupController2).focusElement(void 0, options);
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("mouseleave", __privateGet(this, _handleMouseLeave));
  }
};
_focusGroupController2 = new WeakMap();
_startDate = new WeakMap();
_endDate = new WeakMap();
_PGGMCalendarDayPanel_instances = new WeakSet();
renderDayNames_fn = function() {
  const plus = this.firstDayOfWeek === 7 ? 0 : this.firstDayOfWeek;
  const dayNames = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(2024, 8, i + 1 + plus);
    return date.toLocaleString(this.lang || "nl", { weekday: "short" });
  });
  return dayNames.map((dayName) => /* @__PURE__ */ Maquette.h("div", { class: "calendar-header-day-name" }, dayName));
};
_onDayButtonClick = new WeakMap();
_today = new WeakMap();
_handleMouseEnter = new WeakMap();
removeHoverClassNames_fn = function() {
  this.shadowRoot.querySelectorAll(".calendar-week button").forEach((button) => {
    button.classList.remove("day--hover-in-between");
  });
};
_handleMouseLeave = new WeakMap();
PGGMCalendarDayPanel.style = calendar_panel_default;
__decorateClass([
  Property({ type: "string", reflect: true, attribute: "lang" })
], PGGMCalendarDayPanel.prototype, "lang", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "hidden" })
], PGGMCalendarDayPanel.prototype, "hidden", 2);
__decorateClass([
  Property({ type: "string", attribute: "value" })
], PGGMCalendarDayPanel.prototype, "value", 2);
__decorateClass([
  Property({ type: "string", attribute: "display-date", reflect: true })
], PGGMCalendarDayPanel.prototype, "displayDate", 2);
__decorateClass([
  Property({ type: "object", reflect: true, attribute: "min", converter: dateAttributeConverter })
], PGGMCalendarDayPanel.prototype, "minDate", 2);
__decorateClass([
  Property({ type: "object", reflect: true, attribute: "max", converter: dateAttributeConverter })
], PGGMCalendarDayPanel.prototype, "maxDate", 2);
PGGMCalendarDayPanel = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-calendar-day-panel"
  })
], PGGMCalendarDayPanel);

// ../packages/calendar/src/icons.tsx
var closeIcon2 = () => /* @__PURE__ */ Maquette.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, /* @__PURE__ */ Maquette.h("path", { class: `close-icon`, "fill-rule": "evenodd", d: "M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z", "clip-rule": "evenodd" }));

// ../packages/calendar/src/calendar-month-panel.tsx
var _focusGroupController3, _onCloseButtonClick2;
var PGGMCalendarMonthPanel = class extends CustomElement {
  constructor() {
    super();
    __privateAdd(this, _focusGroupController3);
    __privateAdd(this, _onCloseButtonClick2, () => {
      this.calendar.activePanel = "day";
    });
    this.render = () => {
      const monthNames = Array.from({ length: 12 }, (_, i) => {
        const date = new Date(this.calendar.displayDate.getFullYear(), i, 1);
        return date.toLocaleString(this.lang || "nl", { month: "short" });
      });
      const chunkSize = 3;
      const chunkedMonthNames = [];
      for (let i = 0; i < monthNames.length; i += chunkSize) {
        chunkedMonthNames.push(monthNames.slice(i, i + chunkSize));
      }
      let monthCount = 0;
      return /* @__PURE__ */ Maquette.h(
        "div",
        {
          class: "calendar-month-panel",
          afterCreate: () => __privateGet(this, _focusGroupController3).updateElements()
        },
        /* @__PURE__ */ Maquette.h("div", { class: "calendar-header--months" }, this.calendar.picker === "day" && /* @__PURE__ */ Maquette.h(
          "button",
          {
            class: "close-button focus",
            onclick: __privateGet(this, _onCloseButtonClick2)
          },
          closeIcon2(),
          /* @__PURE__ */ Maquette.h("span", { class: "sr-only" }, this.calendar.closeLabel)
        )),
        chunkedMonthNames.map((chunk) => /* @__PURE__ */ Maquette.h("div", { class: "calendar-month-row" }, chunk.map((monthName, i) => {
          const date = new Date(
            this.calendar.displayDate.getFullYear(),
            monthCount,
            1
          );
          monthCount++;
          const isInRange = this.calendar.inRange(
            date,
            1 /* Month */
          );
          return /* @__PURE__ */ Maquette.h(
            "button",
            {
              class: "month panel-button",
              disabled: !isInRange ? "" : void 0,
              onclick: () => {
                this.calendar.displayDate = date;
                this.calendar.activePanel = "day";
              }
            },
            monthName
          );
        })))
      );
    };
    __privateSet(this, _focusGroupController3, new FocusGroupController(this, {
      direction: "both",
      elements: () => Array.from(
        this.shadowRoot.querySelectorAll(
          ".calendar-month-row button"
        )
      ),
      isFocusableElement: (el) => el && !el.disabled,
      directionLength: 3
    }));
  }
  updated(propertyName, oldValue, newValue) {
    if (propertyName === "displayDate") {
      requestAnimationFrame(() => {
        __privateGet(this, _focusGroupController3).updateElements();
      });
    }
  }
  focus(options) {
    requestAnimationFrame(() => {
      options = options || {};
      options.preventScroll = true;
      __privateGet(this, _focusGroupController3).updateElements();
      __privateGet(this, _focusGroupController3).focusElement(void 0, options);
    });
  }
  get calendar() {
    return this.parentElement.getRootNode().host;
  }
};
_focusGroupController3 = new WeakMap();
_onCloseButtonClick2 = new WeakMap();
PGGMCalendarMonthPanel.style = calendar_panel_default;
__decorateClass([
  Property({ type: "string", attribute: "display-date", reflect: true })
], PGGMCalendarMonthPanel.prototype, "displayDate", 2);
PGGMCalendarMonthPanel = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-calendar-month-panel"
  })
], PGGMCalendarMonthPanel);

// ../packages/calendar/src/calendar-year-panel.tsx
var _focusGroupController4, _onCloseButtonClick3, _startYear;
var PGGMCalendarYearPanel = class extends CustomElement {
  constructor() {
    super();
    __privateAdd(this, _focusGroupController4);
    __privateAdd(this, _onCloseButtonClick3, () => {
      this.calendar.activePanel = "month";
    });
    __privateAdd(this, _startYear);
    this.showNextYears = () => {
      __privateSet(this, _startYear, __privateGet(this, _startYear) + 9);
      this.scheduleRender();
      this.updateFoucsGroup();
    };
    this.showPreviousYears = () => {
      __privateSet(this, _startYear, __privateGet(this, _startYear) - 9);
      this.scheduleRender();
      this.updateFoucsGroup();
    };
    this.updateFoucsGroup = () => {
      requestAnimationFrame(() => {
        __privateGet(this, _focusGroupController4).updateElements();
      });
    };
    this.render = () => {
      if (!__privateGet(this, _startYear)) {
        __privateSet(this, _startYear, this.calendar.displayDate.getFullYear());
      }
      const fourYearsBack = __privateGet(this, _startYear) - 4;
      const fourYearsForward = fourYearsBack + 8;
      const yearNames = Array.from(
        { length: fourYearsForward - fourYearsBack + 1 },
        (_, i) => fourYearsBack + i
      );
      const chunkSize = 3;
      const chunkedYearNames = [];
      yearNames.forEach((year, i) => {
        if (i % chunkSize === 0) {
          chunkedYearNames.push(yearNames.slice(i, i + chunkSize));
        }
      });
      return /* @__PURE__ */ Maquette.h(
        "div",
        {
          class: "calendar-year-panel",
          afterCreate: () => {
            __privateGet(this, _focusGroupController4).updateElements();
          }
        },
        /* @__PURE__ */ Maquette.h("div", { class: "calendar-header--years" }, /* @__PURE__ */ Maquette.h("button", { onclick: __privateGet(this, _onCloseButtonClick3), class: "close-button focus" }, closeIcon2(), /* @__PURE__ */ Maquette.h("span", { class: "sr-only" }, this.calendar.closeLabel))),
        chunkedYearNames.map((chunk) => /* @__PURE__ */ Maquette.h("div", { class: "calendar-year-row" }, chunk.map((yearName, i) => {
          const date = new Date(yearName, 0, 1);
          const isInRange = this.calendar.inRange(
            date,
            2 /* Year */
          );
          return /* @__PURE__ */ Maquette.h(
            "button",
            {
              class: "year panel-button",
              disabled: !isInRange,
              onclick: () => {
                this.calendar.displayDate = date;
                this.calendar.activePanel = "month";
              }
            },
            yearName
          );
        })))
      );
    };
    __privateSet(this, _focusGroupController4, new FocusGroupController(this, {
      direction: "both",
      elements: () => Array.from(
        this.shadowRoot.querySelectorAll(
          ".calendar-year-row button"
        )
      ),
      isFocusableElement: (el) => el && !el.disabled,
      directionLength: 3
    }));
  }
  focus(options) {
    requestAnimationFrame(() => {
      options = options || {};
      options.preventScroll = true;
      __privateGet(this, _focusGroupController4).updateElements();
      __privateGet(this, _focusGroupController4).focusElement(void 0, options);
    });
  }
  get calendar() {
    return this.parentElement.getRootNode().host;
  }
};
_focusGroupController4 = new WeakMap();
_onCloseButtonClick3 = new WeakMap();
_startYear = new WeakMap();
PGGMCalendarYearPanel.style = focus_default + calendar_panel_default;
PGGMCalendarYearPanel = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-calendar-year-panel"
  })
], PGGMCalendarYearPanel);

// ../packages/calendar/src/calendar.tsx
var CalendarType = ["date", "period"];
var CalendarPicker = ["day", "month"];
var dateValueAttributeConverter = {
  fromAttribute: (value) => {
    if (!value) {
      return null;
    }
    if (value.indexOf(",") > 0) {
      const begin = value.split(",", 2)[0];
      const end = value.split(",", 2)[1];
      const beginDate2 = PGGMCalendar.parseDate(begin);
      const endDate = PGGMCalendar.parseDate(end);
      if (Number.isNaN(beginDate2.getTime()) || Number.isNaN(endDate.getTime())) {
        return null;
      }
      if (beginDate2 > endDate) {
        return [end, begin];
      }
      return [begin, end];
    }
    const beginDate = PGGMCalendar.parseDate(value);
    ;
    if (Number.isNaN(beginDate.getTime())) {
      return null;
    }
    return value;
  },
  toAttribute: (value) => {
    if (!value) {
      return null;
    }
    if (Array.isArray(value)) {
      return value.join(",");
    }
    return value;
  }
};
var dateAttributeConverter = {
  fromAttribute: (value) => {
    if (!value) {
      return void 0;
    }
    return PGGMCalendar.parseDate(value);
  },
  toAttribute: (value) => {
    if (!value || !(value instanceof Date)) {
      return void 0;
    }
    return PGGMCalendar.dateToYYYY_MM_DD(value);
  }
};
var chevron2 = (direction) => /* @__PURE__ */ Maquette.h("svg", { classes: { chevron: true, "chevron-left": direction === "left", "chevron-right": direction === "right" }, xmlns: "http://www.w3.org/2000/svg", width: "8", height: "14", fill: "none" }, /* @__PURE__ */ Maquette.h("path", { d: "M7.647 13.62A1.29 1.29 0 0 0 8 12.729a1.29 1.29 0 0 0-.353-.891L2.938 6.935l4.71-4.954A1.304 1.304 0 0 0 7.49.354 1.18 1.18 0 0 0 5.923.25L.354 6.05A1.29 1.29 0 0 0 0 6.941c0 .334.127.654.353.89l5.57 5.801c.114.118.25.211.397.274a1.173 1.173 0 0 0 1.327-.286Z" }));
var _PGGMCalendar_instances, lang_get, _startDate2, _endDate2, displayNext_fn, displayPrevious_fn, _keyDownHandler;
var PGGMCalendar = class extends CustomElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PGGMCalendar_instances);
    __privateAdd(this, _startDate2, null);
    __privateAdd(this, _endDate2, null);
    this.displayDate = /* @__PURE__ */ new Date();
    this.type = "date";
    this.picker = "day";
    this.activePanel = "day";
    this.closeLabel = "Sluiten";
    this.render = () => {
      return /* @__PURE__ */ Maquette.h("div", { class: "calendar" }, /* @__PURE__ */ Maquette.h("div", { class: "calendar-header" }, /* @__PURE__ */ Maquette.h("div", { class: "calendar-header--nav" }, /* @__PURE__ */ Maquette.h("button", { class: "nav-button", onclick: () => __privateMethod(this, _PGGMCalendar_instances, displayPrevious_fn).call(this) }, chevron2("left")), /* @__PURE__ */ Maquette.h("div", { class: "calendar-header--month-year" }, /* @__PURE__ */ Maquette.h(
        "button",
        {
          class: "calendar-header-month",
          onclick: () => this.activePanel = "month"
        },
        this.displayDate.toLocaleString(__privateGet(this, _PGGMCalendar_instances, lang_get), { month: "long" })
      ), /* @__PURE__ */ Maquette.h(
        "button",
        {
          class: "calendar-header-year",
          onclick: () => this.activePanel = "year"
        },
        this.displayDate.getFullYear()
      )), /* @__PURE__ */ Maquette.h("button", { class: "nav-button", onclick: () => __privateMethod(this, _PGGMCalendar_instances, displayNext_fn).call(this) }, chevron2("right")))), /* @__PURE__ */ Maquette.h("div", { class: "calendar-body" }, this.activePanel === "day" && /* @__PURE__ */ Maquette.h(
        "pggm-calendar-day-panel",
        {
          class: "calendar-panel",
          value: this.value,
          lang: __privateGet(this, _PGGMCalendar_instances, lang_get),
          type: this.type,
          "display-date": dateAttributeConverter.toAttribute(this.displayDate)
        }
      ), this.activePanel === "month" && /* @__PURE__ */ Maquette.h(
        "pggm-calendar-month-panel",
        {
          class: "calendar-panel",
          lang: __privateGet(this, _PGGMCalendar_instances, lang_get),
          type: this.type,
          "display-date": dateAttributeConverter.toAttribute(this.displayDate)
        }
      ), this.activePanel === "year" && /* @__PURE__ */ Maquette.h(
        "pggm-calendar-year-panel",
        {
          class: "calendar-panel",
          lang: __privateGet(this, _PGGMCalendar_instances, lang_get),
          type: this.type,
          "display-date": dateAttributeConverter.toAttribute(this.displayDate)
        }
      )));
    };
    __privateAdd(this, _keyDownHandler, (e) => {
      if (e.key === "Escape" && this.activePanel === "year") {
        this.activePanel = "month";
        e.preventDefault();
      } else if (e.key === "Escape" && this.activePanel === "month") {
        this.activePanel = "day";
        e.preventDefault();
      }
    });
  }
  /**
   *
   * @param dateString
   * @param format
   * @returns Date | null
   *
   * @example
   * PGGMCalendar.parseDate("2024-01-01") // new Date(2024, 0, 1)
   */
  static parseDate(dateString, format) {
    if (!dateString) {
      return null;
    }
    const daysInMonth = (month, year) => {
      return new Date(year, month, 0).getDate();
    };
    if (!format) {
      format = PGGMCalendar.YYYY_MM_DD;
    }
    const parts = dateString.match(/(\d+)/g);
    let i = 0;
    const fmt = {};
    format.replace(/(yyyy|dd|mm)/g, (part) => {
      fmt[part] = i++;
      return "";
    });
    if (!parts || parts.length < 3) {
      return null;
    }
    const mnth = parseInt(parts[fmt.mm], 10);
    const dy = parseInt(parts[fmt.dd], 10);
    const yr = parseInt(parts[fmt.yyyy], 10);
    if (mnth - 1 > 11 || mnth - 1 < 0) {
      return null;
    }
    if (dy === 0) {
      return null;
    }
    if (dy > daysInMonth(mnth, yr)) {
      return null;
    }
    return new Date(yr, mnth - 1, dy);
  }
  /**
   *
   * @param date
   * @returns string
   * @throws Error
   *
   * @example
   * PGGMCalendar.dateToYYYY_MM_DD(new Date(2024, 0, 1)) // "2024-01-01"
   */
  static dateToYYYY_MM_DD(date) {
    if (!date || !(date instanceof Date)) {
      throw new Error("Invalid date");
    }
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth() + 1).toString().padStart(2, "0");
    const dd = date.getDate().toString().padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  /**
   * The start date of the selected period
   * @type {Date}
   */
  get startDate() {
    return __privateGet(this, _startDate2);
  }
  set startDate(value) {
    const privateValOf = __privateGet(this, _startDate2) ? __privateGet(this, _startDate2).valueOf() : null;
    if (privateValOf !== value.valueOf()) {
      __privateSet(this, _startDate2, value);
      this.value = PGGMCalendar.dateToYYYY_MM_DD(__privateGet(this, _startDate2));
    }
  }
  /**
   * The end date of the selected period
   * @type {Date}
   */
  get endDate() {
    return __privateGet(this, _endDate2);
  }
  set endDate(value) {
    const privateValOf = __privateGet(this, _endDate2) ? __privateGet(this, _endDate2).valueOf() : null;
    if (!value) {
      __privateSet(this, _endDate2, value);
      this.value = PGGMCalendar.dateToYYYY_MM_DD(__privateGet(this, _startDate2));
    } else if (privateValOf !== value.valueOf()) {
      __privateSet(this, _endDate2, value);
      this.value = [PGGMCalendar.dateToYYYY_MM_DD(__privateGet(this, _startDate2)), PGGMCalendar.dateToYYYY_MM_DD(__privateGet(this, _endDate2))];
    }
  }
  inRange(value, precision) {
    if (!precision) {
      precision = 0 /* Day */;
    }
    let isInRange = true;
    if (precision === 0 /* Day */ && this.minDate && value < this.minDate) {
      isInRange = false;
    }
    if (precision === 0 /* Day */ && this.maxDate && value > this.maxDate) {
      isInRange = false;
    }
    if (precision === 1 /* Month */ && this.minDate && value < new Date(this.minDate.getFullYear(), this.minDate.getMonth(), 1)) {
      isInRange = false;
    }
    if (precision === 1 /* Month */ && this.maxDate && value > new Date(this.maxDate.getFullYear(), this.maxDate.getMonth() + 1, 0)) {
      isInRange = false;
    }
    if (precision === 2 /* Year */ && this.minDate && value.getFullYear() < this.minDate.getFullYear()) {
      isInRange = false;
    }
    if (precision === 2 /* Year */ && this.maxDate && value.getFullYear() > this.maxDate.getFullYear()) {
      isInRange = false;
    }
    return isInRange;
  }
  shouldUpdate(propertyName, oldValue, newValue) {
    if (propertyName === "type" && newValue && !CalendarType.includes(newValue)) {
      console.warn(`Invalid value for type: ${newValue}, valid values are: ${CalendarType.join(",")}`);
      return false;
    } else if (propertyName === "picker" && newValue && !CalendarPicker.includes(newValue)) {
      console.warn(`Invalid value for picker: ${newValue}, valid values are: ${CalendarPicker.join(",")}`);
      return false;
    }
    return true;
  }
  updated(propertyName, oldValue, newValue) {
    if (propertyName === "value") {
      if (Array.isArray(newValue)) {
        this.startDate = dateAttributeConverter.fromAttribute(newValue[0]);
        this.endDate = dateAttributeConverter.fromAttribute(newValue[1]);
      } else {
        this.startDate = dateAttributeConverter.fromAttribute(newValue);
        this.endDate = null;
      }
      this.dispatchEvent(new CustomEvent("calendarDateChange", { bubbles: true, composed: true, detail: { value: this.value } }));
    }
    if (propertyName === "minDate" || propertyName === "maxDate" || propertyName === "displayDate") {
      const pnl = this.dayPanelElement || this.monthPanelElement || this.yearPanelElement;
      pnl == null ? void 0 : pnl.renderNow();
    }
    if (propertyName === "activePanel") {
      requestAnimationFrame(() => this.focus({ preventScroll: true }));
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", __privateGet(this, _keyDownHandler));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("keydown", __privateGet(this, _keyDownHandler));
  }
  focus(options) {
    const pnl = this.dayPanelElement || this.monthPanelElement || this.yearPanelElement;
    requestAnimationFrame(() => {
      pnl == null ? void 0 : pnl.focus(options);
    });
  }
};
_PGGMCalendar_instances = new WeakSet();
lang_get = function() {
  var _a4;
  let lang = this.getAttribute("lang");
  if (lang) {
    return lang;
  }
  lang = (_a4 = this.closest("[lang]")) == null ? void 0 : _a4.getAttribute("lang");
  if (lang) {
    return lang;
  }
  lang = document.documentElement.lang;
  return lang || "nl";
};
_startDate2 = new WeakMap();
_endDate2 = new WeakMap();
displayNext_fn = function() {
  const date = new Date(this.displayDate);
  if (this.activePanel === "day") {
    date.setMonth(date.getMonth() + 1);
  } else if (this.activePanel === "month") {
    date.setFullYear(date.getFullYear() + 1);
  } else if (this.activePanel === "year") {
    this.yearPanelElement.showNextYears();
  }
  this.displayDate = date;
};
displayPrevious_fn = function() {
  const date = new Date(this.displayDate);
  if (this.activePanel === "day") {
    date.setMonth(date.getMonth() - 1);
  } else if (this.activePanel === "month") {
    date.setFullYear(date.getFullYear() - 1);
  } else if (this.activePanel === "year") {
    this.yearPanelElement.showPreviousYears();
  }
  this.displayDate = date;
};
_keyDownHandler = new WeakMap();
PGGMCalendar.style = calendar_default;
PGGMCalendar.YYYY_MM_DD = "yyyy-mm-dd";
__decorateClass([
  Query("pggm-calendar-day-panel")
], PGGMCalendar.prototype, "dayPanelElement", 2);
__decorateClass([
  Query("pggm-calendar-month-panel")
], PGGMCalendar.prototype, "monthPanelElement", 2);
__decorateClass([
  Query("pggm-calendar-year-panel")
], PGGMCalendar.prototype, "yearPanelElement", 2);
__decorateClass([
  Property({ type: "object", converter: dateAttributeConverter })
], PGGMCalendar.prototype, "displayDate", 2);
__decorateClass([
  Property({ type: "object", reflect: true, attribute: "value", converter: dateValueAttributeConverter })
], PGGMCalendar.prototype, "value", 2);
__decorateClass([
  Property({ type: "object", reflect: true, attribute: "min", converter: dateAttributeConverter })
], PGGMCalendar.prototype, "minDate", 2);
__decorateClass([
  Property({ type: "object", reflect: true, attribute: "max", converter: dateAttributeConverter })
], PGGMCalendar.prototype, "maxDate", 2);
__decorateClass([
  Property({ type: "string", attribute: "type", reflect: true })
], PGGMCalendar.prototype, "type", 2);
__decorateClass([
  Property({ type: "string", attribute: "picker", reflect: true })
], PGGMCalendar.prototype, "picker", 2);
__decorateClass([
  Property({ type: "string" })
], PGGMCalendar.prototype, "activePanel", 2);
__decorateClass([
  Property({ type: "string", attribute: "close-label" })
], PGGMCalendar.prototype, "closeLabel", 2);
PGGMCalendar = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-calendar"
  })
], PGGMCalendar);

// ../packages/checkbox/src/checkbox.css
var checkbox_default = `:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  outline: none;
}
.pggm-checkbox {
  --transition-duration: var(--pggm-motion-duration-xs, 0s);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  cursor: pointer;
  color: var(--pggm-checkbox-option-label-color);
  font-family: var(--pggm-checkbox-option-label-font-family);
  font-size: var(--pggm-checkbox-option-label-font-size);
  font-weight: var(--pggm-checkbox-option-label-font-weight);
  gap: var(--pggm-checkbox-option-column-gap);
}
.pggm-checkbox__input {
  --border-width-max: max( var(--pggm-checkbox-border-width), var(--pggm-checkbox-active-border-width), var(--pggm-checkbox-invalid-border-width) );
  --border-width-difference: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: inherit;
  margin: 0;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 var(--pggm-checkbox-size);
  flex: 0 0 var(--pggm-checkbox-size);
  border-radius: var(--pggm-checkbox-border-radius);
  border-style: solid;
  border-width: var(--pggm-checkbox-border-width);
  border-color: var(--pggm-checkbox-border-color);
  height: var(--pggm-checkbox-size);
  width: var(--pggm-checkbox-size);
  -webkit-transition: background-color var(--transition-duration), border-color var(--transition-duration);
  transition: background-color var(--transition-duration), border-color var(--transition-duration);
}
.pggm-checkbox--disabled,
.pggm-checkbox--disabled .description {
  cursor: not-allowed;
  color: var(--pggm-checkbox-option-label-disabled-color);
}
.pggm-checkbox--disabled .pggm-checkbox__input {
  background-color: var(--pggm-checkbox-disabled-background-color);
  border-color: var(--pggm-checkbox-disabled-border-color);
}
.pggm-checkbox--error:not(.pggm-checkbox--disabled) .pggm-checkbox__input {
  border-color: var(--pggm-checkbox-invalid-border-color);
  border-width: var( --pggm-checkbox-invalid-border-width, var(--pggm-checkbox-border-width) );
}
.pggm-checkbox:not(.pggm-checkbox--disabled):not(.pggm-checkbox--error):hover .pggm-checkbox__input {
  background-color: var(--pggm-checkbox-hover-background-color);
  border-color: var(--pggm-checkbox-hover-border-color);
  border-width: var( --pggm-checkbox-hover-border-width, var(--pggm-checkbox-border-width) );
}
.pggm-checkbox:not(.pggm-checkbox--disabled):not(.pggm-checkbox--error):active .pggm-checkbox__input {
  background-color: var(--pggm-checkbox-active-background-color);
  border-color: var(--pggm-checkbox-active-border-color);
  border-width: var( --pggm-checkbox-active-border-width, var(--pggm-checkbox-border-width) );
}
.pggm-checkbox__input:checked {
  background-color: var(--pggm-checkbox-checked-background-color);
  -webkit-box-shadow: inset 0 0 0 var(--distance) var(--background-color);
  box-shadow: inset 0 0 0 var(--distance) var(--background-color);
  border-color: var(--pggm-checkbox-checked-border-color);
  border-width: var( --pggm-checkbox-checked-border-width, var(--pggm-checkbox-border-width) );
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none' /%3E%3Cpath d='M5 12l5 5l10 -10' /%3E%3C/svg%3E");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.pggm-checkbox--disabled .pggm-checkbox__input:checked {
  background-color: var(--pggm-checkbox-checked-disabled-background-color);
  border-color: var(--pggm-checkbox-checked-disabled-border-color);
  border-width: var( --pggm-checkbox-checked-disabled-border-width, var(--pggm-checkbox-border-width) );
}
.pggm-checkbox--error:not(.pggm-checkbox--disabled) .pggm-checkbox__input:checked,
.pggm-checkbox--error:not(.pggm-checkbox--disabled):hover .pggm-checkbox__input:checked {
  background-color: var(--pggm-checkbox-checked-invalid-background-color);
  border-color: var(--pggm-checkbox-checked-invalid-border-color);
  border-width: var( --pggm-checkbox-checked-invalid-border-width, var(--pggm-checkbox-border-width) );
}
.pggm-checkbox:not(.pggm-checkbox--disabled):not(.pggm-checkbox--error):hover .pggm-checkbox__input:checked {
  background-color: var(--pggm-checkbox-checked-hover-background-color);
  border-color: var(--pggm-checkbox-checked-hover-border-color);
  border-width: var( --pggm-checkbox-checked-hover-border-width, var(--pggm-checkbox-border-width) );
}
.pggm-checkbox:not(.pggm-checkbox--disabled):not(.pggm-checkbox--error):active .pggm-checkbox__input:checked {
  background-color: var(--pggm-checkbox-checked-active-background-color);
  border-color: var(--pggm-checkbox-checked-active-border-color);
  border-width: var( --pggm-checkbox-checked-active-border-width, var(--pggm-checkbox-border-width) );
}
.pggm-checkbox__input--indeterminate {
  background-color: var(--pggm-checkbox-indeterminate-background-color);
  border-color: var(--pggm-checkbox-indeterminate-border-color);
  border-width: var( --pggm-checkbox-indeterminate-border-width, var(--pggm-checkbox-border-width) );
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none' /%3E%3Cpath d='M5 12l14 0' /%3E%3C/svg%3E");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.pggm-checkbox--disabled .pggm-checkbox__input--indeterminate {
  background-color: var( --pggm-checkbox-indeterminate-disabled-background-color );
  border-color: var(--pggm-checkbox-indeterminate-disabled-border-color);
  border-width: var( --pggm-checkbox-indeterminate-disabled-border-width, var(--pggm-checkbox-border-width) );
}
.pggm-checkbox--error .pggm-checkbox__input--indeterminate {
  background-color: var( --pggm-checkbox-indeterminate-invalid-background-color );
  border-color: var(--pggm-checkbox-indeterminate-invalid-border-color);
  border-width: var( --pggm-checkbox-invalid-disabled-border-width, var(--pggm-checkbox-border-width) );
}
.pggm-checkbox:not(.pggm-checkbox--disabled):not(.pggm-checkbox--error):hover .pggm-checkbox__input--indeterminate {
  background-color: var(--pggm-checkbox-indeterminate-hover-background-color);
  border-color: var(--pggm-checkbox-indeterminate-hover-border-color);
  border-width: var( --pggm-checkbox-indeterminate-hover-border-width, var(--pggm-checkbox-border-width) );
}
.pggm-checkbox:not(.pggm-checkbox--disabled):not(.pggm-checkbox--error):active .pggm-checkbox__input--indeterminate {
  background-color: var(--pggm-checkbox-indeterminate-active-background-color);
  border-color: var(--pggm-checkbox-indeterminate-active-border-color);
  border-width: var( --pggm-checkbox-indeterminate-active-border-width, var(--pggm-checkbox-border-width) );
}
.description {
  display: block;
  margin: 0;
  font-family: var(--pggm-form-field-description-font-family);
  font-size: var(--pggm-form-field-description-font-size);
  font-weight: var(--pggm-form-field-description-font-weight);
  line-height: var(--pggm-form-field-description-line-height);
  color: var(--pggm-form-field-description-color);
}
:host(:focus-visible) input {
  outline: var(--pggm-focus-outline-width) solid blue;
  outline: var(--pggm-focus-outline-width) var(--pggm-focus-outline-style, solid) var(--pggm-focus-outline-color, blue);
  outline-offset: var(--pggm-focus-outline-offset);
}
`;

// ../packages/checkbox/src/checkbox.tsx
var _userInteracted, _onClick2, _onKeyDown2, _onBlur;
var PGGMCheckbox = class extends CustomElement {
  constructor() {
    super();
    this.required = false;
    this.disabled = false;
    this.indeterminate = false;
    __privateAdd(this, _userInteracted, false);
    this.render = () => {
      return /* @__PURE__ */ Maquette.h(
        "div",
        {
          classes: {
            "pggm-checkbox": true,
            "pggm-checkbox--disabled": this == null ? void 0 : this.disabled,
            "pggm-checkbox--error": __privateGet(this, _userInteracted) && !this.validity.valid
          }
        },
        /* @__PURE__ */ Maquette.h(
          "input",
          {
            "aria-labelledby": "CheckboxLabel",
            disabled: this.disabled ? "" : void 0,
            tabindex: "-1",
            onchange: (e) => {
              e.stopImmediatePropagation();
              e.stopPropagation();
            },
            classes: {
              "pggm-checkbox__input": true,
              "pggm-checkbox__input--indeterminate": this == null ? void 0 : this.indeterminate
            },
            type: "checkbox",
            checked: this.checked
          }
        ),
        /* @__PURE__ */ Maquette.h("span", { class: "pggm-checkbox__label", id: "CheckboxLabel" }, /* @__PURE__ */ Maquette.h("slot", null), /* @__PURE__ */ Maquette.h("slot", { name: "description", class: "description" }))
      );
    };
    __privateAdd(this, _onClick2, () => {
      if (this.disabled) {
        return;
      }
      this.checked = !this.checked;
    });
    __privateAdd(this, _onKeyDown2, (e) => {
      if (e.key === " ") {
        e.preventDefault();
        __privateGet(this, _onClick2).call(this);
      }
    });
    __privateAdd(this, _onBlur, () => {
      __privateSet(this, _userInteracted, true);
      this.scheduleRender();
    });
    this.internals.ariaChecked = "false";
    this.internals.role = "checkbox";
    this.checked = false;
  }
  get validationMessage() {
    if (!this.required) {
      return "";
    }
    return this.dataset.validationMessage || "Please check this box if you want to proceed.";
  }
  get willValidate() {
    return this.required;
  }
  get validity() {
    const isValid = this.required && this.checked || !this.required;
    return {
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valid: isValid,
      valueMissing: this.required ? !isValid : false
    };
  }
  updated(propertyName, oldValue, newValue) {
    const value = this.value || "on";
    if (propertyName === "checked") {
      this.internals.setFormValue(this.checked ? value : null);
      this.internals.ariaChecked = this.checked ? "true" : "false";
      this.dispatchEvent(
        new Event("change", { bubbles: true, composed: true })
      );
      if (this.checked) {
        this.indeterminate = false;
      }
    }
    if (propertyName === "value" || propertyName === "name") {
      this.internals.setFormValue(this.checked ? value : null);
    }
    if (propertyName === "disabled") {
      this.internals.ariaDisabled = this.disabled ? "true" : "false";
      requestAnimationFrame(() => {
        this.tabIndex = this.disabled ? -1 : 0;
      });
    }
    if (propertyName === "indeterminate") {
      this.internals.ariaChecked = this.indeterminate ? "mixed" : this.checked ? "true" : "false";
      if (newValue) {
        this.checked = false;
      }
    }
    this.internals.setValidity(this.validity, this.validationMessage, this.inputElement ? this.inputElement : void 0);
  }
  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = this.disabled ? -1 : 0;
    this.addEventListener("click", __privateGet(this, _onClick2));
    this.addEventListener("keydown", __privateGet(this, _onKeyDown2));
    this.addEventListener("blur", __privateGet(this, _onBlur));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", __privateGet(this, _onClick2));
    this.removeEventListener("keydown", __privateGet(this, _onKeyDown2));
    this.removeEventListener("blur", __privateGet(this, _onBlur));
  }
};
_userInteracted = new WeakMap();
_onClick2 = new WeakMap();
_onKeyDown2 = new WeakMap();
_onBlur = new WeakMap();
PGGMCheckbox.style = checkbox_default;
PGGMCheckbox.TAG_NAME = "pggm-checkbox";
PGGMCheckbox.formAssociated = true;
__decorateClass([
  Property({ type: "boolean", attribute: "required", reflect: true })
], PGGMCheckbox.prototype, "required", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "disabled", reflect: true })
], PGGMCheckbox.prototype, "disabled", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "checked", reflect: true })
], PGGMCheckbox.prototype, "checked", 2);
__decorateClass([
  Property({ type: "string", attribute: "name", reflect: true })
], PGGMCheckbox.prototype, "name", 2);
__decorateClass([
  Property({ type: "string", attribute: "value", reflect: true })
], PGGMCheckbox.prototype, "value", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "indeterminate", reflect: true })
], PGGMCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  Query("input")
], PGGMCheckbox.prototype, "inputElement", 2);
PGGMCheckbox = __decorateClass([
  CustomElementConfig({
    tagName: PGGMCheckbox.TAG_NAME
  })
], PGGMCheckbox);

// ../packages/checkbox/src/checkbox-group.css
var checkbox_group_default = ".pggm-checkbox-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  gap: var(--pggm-checkbox-group-row-gap);\n}\n.pggm-checkbox-group__options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  gap: var(--pggm-radio-group-row-gap);\n}\n#GroupOptions ::slotted(:not(pggm-checkbox)) {\n  display: none;\n  visibility: hidden;\n}\n";

// ../packages/checkbox/src/checkbox-group.tsx
var _slotChange, _updatedDisabled;
var PGGMCheckboxGroup = class extends CustomElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _slotChange, (e) => {
      const slot = e.target;
      const nodes = slot.assignedNodes();
      const label = nodes.filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent.trim()).join(" ");
      if (label && label.length > 0) {
        this.label = label;
      }
      nodes.filter((node) => node.nodeType === Node.TEXT_NODE).forEach((node) => {
        var _a4;
        return (_a4 = node.parentElement) == null ? void 0 : _a4.removeChild(node);
      });
    });
    __privateAdd(this, _updatedDisabled, (disabled) => {
      this.querySelectorAll("pggm-checkbox").forEach((checkbox) => {
        checkbox.disabled = disabled;
      });
    });
  }
  updated(propertyName, oldValue, newValue) {
    if (propertyName === "disabled") {
      __privateGet(this, _updatedDisabled).call(this, newValue);
    }
  }
  render() {
    return /* @__PURE__ */ Maquette.h(
      "div",
      {
        classes: {
          "pggm-checkbox-group": true,
          "pggm-checkbox-group--error": this.errorMessage,
          "pggm-checkbox-group--readonly": this.readonly,
          "pggm-checkbox-group--disabled": this.disabled
        }
      },
      /* @__PURE__ */ Maquette.h(
        "label",
        {
          is: "pggm-label",
          for: this.id ? this.id : null,
          required: this.required,
          disabled: this.disabled
        },
        this.label,
        /* @__PURE__ */ Maquette.h("p", { class: "pggm-label__description" }, /* @__PURE__ */ Maquette.h("slot", { slot: "description", name: "description" }))
      ),
      this.errorMessage && /* @__PURE__ */ Maquette.h("pggm-error", null, /* @__PURE__ */ Maquette.h("slot", { name: "error" }, this.errorMessage)),
      /* @__PURE__ */ Maquette.h("div", { id: "GroupOptions", class: "pggm-checkbox-group__options" }, /* @__PURE__ */ Maquette.h("slot", { on: {
        slotchange: __privateGet(this, _slotChange)
      } }))
    );
  }
};
_slotChange = new WeakMap();
_updatedDisabled = new WeakMap();
PGGMCheckboxGroup.style = checkbox_group_default;
__decorateClass([
  Property({ type: "string", attribute: "error-message", reflect: true })
], PGGMCheckboxGroup.prototype, "errorMessage", 2);
__decorateClass([
  Property({ type: "string", attribute: "label", reflect: true })
], PGGMCheckboxGroup.prototype, "label", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "readonly", reflect: true })
], PGGMCheckboxGroup.prototype, "readonly", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "disabled", reflect: true })
], PGGMCheckboxGroup.prototype, "disabled", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "required", reflect: true })
], PGGMCheckboxGroup.prototype, "required", 2);
PGGMCheckboxGroup = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-checkbox-group"
  })
], PGGMCheckboxGroup);

// ../packages/dialog/src/dialog.css
var dialog_default = ':host {\n  position: absolute;\n  display: none;\n  visibility: hidden;\n}\n:host([open]) {\n  visibility: visible;\n  position: fixed;\n  width: 100%;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\ndialog {\n  border: 0;\n  margin: 0px auto;\n  position: fixed;\n  top: 3em;\n  -webkit-box-shadow: var(--pggm-dialog-box-shadow);\n  box-shadow: var(--pggm-dialog-box-shadow);\n  color: var(--pggm-dialog-color);\n  background-color: var(--pggm-dialog-background-color, var(--pggm-tooltip-background-color));\n  padding: 16px 16px 16px;\n  padding: var(--pggm-dialog-padding-block-start, 16px) var(--pggm-dialog-padding-inline-start, 16px) var(--pggm-dialog-padding-block-end, 16px);\n  outline: 0;\n  border-radius: 16px;\n  border-radius: var(--pggm-dialog-border-radius, 16px);\n  -webkit-box-shadow: 0px 4px 5px 0px rgba(57, 58, 60, 0.20);\n  box-shadow: 0px 4px 5px 0px rgba(57, 58, 60, 0.20);\n  -webkit-box-shadow: var(--pggm-dialog-box-shadow, 0px 4px 5px 0px rgba(57, 58, 60, 0.20));\n  box-shadow: var(--pggm-dialog-box-shadow, 0px 4px 5px 0px rgba(57, 58, 60, 0.20));\n}\ndialog.modal {\n  overflow: hidden;\n  margin: auto;\n  top: 0px;\n  bottom: 0px;\n  max-width: calc(100% - 87px);\n}\n@media only screen and (max-width: 576px) {\n  dialog.modal {\n    border-radius: 0px;\n    max-width: 100% !important;\n    height: calc(100% - 32px) !important;\n    margin: 0 !important;\n    max-height: 100%;\n  }\n}\n.dialog {\n  display: grid;\n  grid-template-areas: "header close-button" "content content";\n  grid-template-columns: 1fr 48px;\n  grid-template-rows: auto 1fr;\n  grid-gap: var(--pggm-dialog-content-row-gap, var(--pggm-alert-content-row-gap)) var(--pggm-dialog-column-gap, var(--pggm-alert-column-gap));\n  gap: var(--pggm-dialog-content-row-gap, var(--pggm-alert-content-row-gap)) var(--pggm-dialog-column-gap, var(--pggm-alert-column-gap));\n  border: 0;\n  border: var(--pggm-dialog-border, 0);\n  border-radius: 16px;\n  border-radius: var(--pggm-dialog-border-radius, 16px);\n}\ndialog.modal .dialog {\n  height: inherit;\n  max-height: inherit;\n  width: auto;\n  width: initial;\n  -webkit-box-align: initial;\n  -ms-flex-align: initial;\n  align-items: initial;\n  width: 100%;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n@media only screen and (max-width: 576px) {\n  dialog.modal .dialog {\n    height: 100% !important;\n    max-height: 100% !important;\n  }\n}\ndialog.modal .dialog-content {\n  overflow-y: auto;\n  max-height: calc(100vh - 168px) !important;\n}\n@media only screen and (max-width: 576px) {\n  dialog.modal .dialog-content {\n    max-height: 100% !important;\n  }\n}\n.dialog-close-button {\n  padding: 8px;\n  grid-area: close-button;\n  all: unset;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  text-align: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  min-width: 48px;\n  min-height: 48px;\n  border-radius: var(--pggm-button-border-radius);\n  border: 1px solid #C0C1C4;\n  border: 1px solid var(--Manatee-Lighter, #C0C1C4);\n}\n.dialog-close-button > svg {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.dialog-close-button:focus-visible {\n  outline: auto;\n  outline: 1px solid blue;\n  outline: var(--pggm-focus-outline-width, 1px) var(--pggm-focus-outline-style, solid) var(--pggm-focus-outline-color, blue);\n  outline-offset: 1px;\n  outline-offset: var(--pggm-focus-outline-offset, 1px);\n}\n.dialog {\n  grid-template-areas: "header close-button" "content content" "action action";\n  grid-template-rows: auto 1fr auto;\n}\n.dialog .dialog-action {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  grid-area: action;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  visibility: visible;\n  gap: var(--pggm-dialog-column-gap, var(--pggm-alert-column-gap));\n}\n.dialog-header {\n  grid-area: header;\n  align-self: center;\n}\n#DialogHeader ::slotted(*) {\n  margin: 0;\n  padding: 0;\n  font-family: var(--pggm-dialog-heading-font-family, var(--pggm-alert-heading-font-family));\n  font-size: 24px;\n  font-size: var(--pggm-dialog-heading-font-size, 24px);\n  font-weight: var(--pggm-dialog-heading-font-weight, var(--pggm-alert-heading-font-weight));\n  line-height: var(--pggm-dialog-heading-line-height, var(--pggm-alert-heading-line-height));\n}\n.dialog-content {\n  grid-area: content;\n}\n#DialogAction ::slotted(*:not(a):not(button):not(pggm-button)) {\n  display: none;\n  visibility: hidden;\n}\n#DialogAction ::slotted(*) {\n  margin: 0;\n  padding: 0;\n}\n#DialogContent ::slotted(*) {\n  margin: 0;\n  padding: 0;\n  font-family: var(--pggm-dialog-font-family);\n}\n';

// ../packages/dialog/src/icons.tsx
var cssClassName2 = "dialog-icon";
var closeIcon3 = /* @__PURE__ */ Maquette.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, /* @__PURE__ */ Maquette.h("path", { class: `${cssClassName2}--close`, "fill-rule": "evenodd", d: "M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z", "clip-rule": "evenodd" }));

// ../packages/dialog/src/confirm-dialog.tsx
var confirmDialog = (title, content, buttons) => {
  if (typeof content === "string") {
    content = /* @__PURE__ */ Maquette.h("div", { innerHTML: content });
  }
  return new Promise((resolve, reject) => {
    const dialog = document.createElement("pggm-dialog");
    document.body.appendChild(dialog);
    const onActionButtonClick = (e) => {
      const button = e.target.getAttribute("data-button");
      requestAnimationFrame(() => {
        var _a4;
        e.target && ((_a4 = e.target.closest("pggm-dialog")) == null ? void 0 : _a4.close());
        resolve(button);
      });
    };
    const afterCreate = (element) => {
      element.addEventListener("openDialog", () => {
        var _a4;
        (_a4 = element.querySelector("button[data-button]")) == null ? void 0 : _a4.focus();
      });
      element.addEventListener("cancelDialog", (e) => {
        reject();
        requestAnimationFrame(() => {
          var _a4;
          (_a4 = e.target) == null ? void 0 : _a4.remove();
        });
      });
      element.addEventListener("closeDialog", (e) => {
        requestAnimationFrame(() => {
          var _a4;
          (_a4 = e.target) == null ? void 0 : _a4.remove();
        });
      });
    };
    const render = () => {
      return /* @__PURE__ */ Maquette.h("pggm-dialog", { modal: "modal", open: "open", afterCreate }, /* @__PURE__ */ Maquette.h("div", { slot: "header" }, title), /* @__PURE__ */ Maquette.h("div", null, content), buttons.map((button, idx) => {
        return /* @__PURE__ */ Maquette.h(
          "button",
          {
            appearance: idx === 0 ? "primary" : "secondary",
            is: "pggm-button",
            "data-button": button,
            slot: "action",
            onclick: onActionButtonClick
          },
          button
        );
      }));
    };
    const projector = Maquette.createProjector();
    projector.replace(dialog, render);
  });
};

// ../packages/dialog/src/prompt-dialog.tsx
var promptDialog = (title, form, submitLabel, cancelLabel) => {
  if (typeof form === "string") {
    form = /* @__PURE__ */ Maquette.h("form", { innerHTML: form });
  } else if (form instanceof HTMLFormElement) {
    form = /* @__PURE__ */ Maquette.h("form", { innerHTML: form.innerHTML });
  }
  return new Promise((resolve, reject) => {
    const dialog = document.createElement("pggm-dialog");
    document.body.appendChild(dialog);
    const onActionButtonClick = (e) => {
      const button = e.target.getAttribute("data-button");
      if (button === submitLabel) {
        const target = e.target;
        const dialogEelement = target.closest("pggm-dialog");
        const formElement = dialogEelement.querySelector("form");
        if (formElement.checkValidity() === false) {
          formElement.reportValidity();
          return;
        }
        const formData = new FormData(formElement);
        resolve(formData);
      } else {
        reject();
      }
      requestAnimationFrame(() => {
        var _a4;
        e.target && ((_a4 = e.target.closest("pggm-dialog")) == null ? void 0 : _a4.close());
        resolve(null);
      });
    };
    const afterCreate = (element) => {
      const form2 = element.querySelector("form");
      form2.method = "dialog";
      form2.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form2);
        resolve(formData);
        requestAnimationFrame(() => {
          element.remove();
        });
      });
      element.addEventListener("openDialog", () => {
        var _a4;
        (_a4 = Array.from(form2.elements).filter((element2) => {
          if (element2.focus) {
            return true;
          }
          return false;
        })[0]) == null ? void 0 : _a4.focus();
      });
      element.addEventListener("cancelDialog", (e) => {
        reject();
        requestAnimationFrame(() => {
          var _a4;
          (_a4 = e.target) == null ? void 0 : _a4.remove();
        });
      });
      element.addEventListener("closeDialog", (e) => {
        requestAnimationFrame(() => {
          var _a4;
          (_a4 = e.target) == null ? void 0 : _a4.remove();
        });
      });
    };
    const render = () => {
      return /* @__PURE__ */ Maquette.h("pggm-dialog", { modal: "modal", open: "open", afterCreate }, /* @__PURE__ */ Maquette.h("div", { slot: "header" }, title), /* @__PURE__ */ Maquette.h("div", null, form), [submitLabel, cancelLabel].map((button, idx) => {
        return /* @__PURE__ */ Maquette.h(
          "button",
          {
            appearance: idx === 0 ? "primary" : "secondary",
            is: "pggm-button",
            "data-button": button,
            slot: "action",
            onclick: onActionButtonClick
          },
          button
        );
      }));
    };
    const projector = Maquette.createProjector();
    projector.replace(dialog, render);
  });
};

// ../packages/dialog/src/dialog.tsx
var _onCloseButtonClick4, _onAfterCreateDialogElement, _PGGMDialog_instances, show_fn, hide_fn;
var PGGMDialog = class extends CustomElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PGGMDialog_instances);
    this.render = () => {
      const dlgContent = [
        /* @__PURE__ */ Maquette.h(
          "button",
          {
            onclick: __privateGet(this, _onCloseButtonClick4),
            class: "dialog-close-button",
            "aria-label": this.closeLabel ? this.closeLabel : "Close"
          },
          closeIcon3
        ),
        /* @__PURE__ */ Maquette.h("div", { class: "dialog-header", id: "DialogHeader" }, /* @__PURE__ */ Maquette.h("slot", { name: "header" })),
        /* @__PURE__ */ Maquette.h("div", { class: "dialog-content", id: "DialogContent" }, /* @__PURE__ */ Maquette.h("slot", null)),
        /* @__PURE__ */ Maquette.h("div", { class: "dialog-action", id: "DialogAction" }, /* @__PURE__ */ Maquette.h("slot", { name: "action" }))
      ];
      return /* @__PURE__ */ Maquette.h("dialog", { classes: { modal: this.modal }, afterCreate: __privateGet(this, _onAfterCreateDialogElement) }, /* @__PURE__ */ Maquette.h("div", { classes: { dialog: true } }, dlgContent));
    };
    this.closeLabel = null;
    this.modal = false;
    __privateAdd(this, _onCloseButtonClick4, () => {
      this.dispatchEvent(new CustomEvent("cancelDialog", { bubbles: true, composed: true }));
      this.open = false;
    });
    __privateAdd(this, _onAfterCreateDialogElement, (element) => {
      element.addEventListener("cancel", (e) => {
        e.preventDefault();
        __privateGet(this, _onCloseButtonClick4).call(this);
      });
    });
  }
  updated(propertyName, oldValue, newValue) {
    if (propertyName === "open") {
      requestAnimationFrame(() => {
        newValue === true ? __privateMethod(this, _PGGMDialog_instances, show_fn).call(this, this.modal) : __privateMethod(this, _PGGMDialog_instances, hide_fn).call(this);
      });
    }
  }
  close() {
    this.open = false;
  }
  show() {
    this.modal = false;
    requestAnimationFrame(() => {
      this.open = true;
    });
  }
  showModal() {
    this.modal = true;
    requestAnimationFrame(() => {
      this.open = true;
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
};
_onCloseButtonClick4 = new WeakMap();
_onAfterCreateDialogElement = new WeakMap();
_PGGMDialog_instances = new WeakSet();
show_fn = function(modal) {
  const wait = new Promise((resolve) => {
    const waitForElement = () => {
      const dialog = this.shadowRoot && this.shadowRoot.querySelector("dialog");
      if (dialog) {
        resolve(dialog);
      }
      setTimeout(waitForElement, 30);
    };
    waitForElement();
  });
  wait.then((dlg) => {
    try {
      if (modal) {
        dlg.showModal();
      } else {
        dlg.show();
      }
      this.dispatchEvent(new CustomEvent("openDialog", { bubbles: true, composed: true }));
    } catch (_e) {
    }
  });
};
hide_fn = function() {
  const wait = new Promise((resolve) => {
    const waitForElement = () => {
      const dialog = this.shadowRoot && this.shadowRoot.querySelector("dialog");
      if (dialog) {
        resolve(dialog);
      }
      setTimeout(waitForElement, 30);
    };
    waitForElement();
  });
  wait.then((dlg) => {
    this.dispatchEvent(new CustomEvent("closeDialog", { bubbles: true, composed: true }));
    dlg.close();
  });
};
PGGMDialog.style = dialog_default;
PGGMDialog.delegatesFocus = true;
PGGMDialog.confirm = confirmDialog;
PGGMDialog.prompt = promptDialog;
__decorateClass([
  Query(".dialog-close-button")
], PGGMDialog.prototype, "dialogCloseButton", 2);
__decorateClass([
  Property({ type: "string", attribute: "close-label", reflect: true })
], PGGMDialog.prototype, "closeLabel", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "modal", reflect: true })
], PGGMDialog.prototype, "modal", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "open", reflect: true })
], PGGMDialog.prototype, "open", 2);
PGGMDialog = __decorateClass([
  CustomElementConfig({ tagName: "pggm-dialog" })
], PGGMDialog);

// ../packages/error-message/src/error-message.css
var error_message_default = ":host {\n  display: none;\n  visibility: hidden;\n}\n:host([visible]) {\n  display: block;\n  visibility: visible;\n}\n.pggm-error {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: middle;\n  -ms-flex-align: middle;\n  align-items: middle;\n  gap: var(--pggm-form-field-error-message-row-gap);\n  font-family: var(--pggm-form-field-error-message-font-family);\n  font-size: var(--pggm-form-field-error-message-font-size);\n  font-weight: var(--pggm-form-field-error-message-font-weight);\n  color: var(--pggm-form-field-error-message-color);\n  margin-bottom: var(--pggm-form-field-error-message-margin-block-start);\n}\n.pggm-error__icon {\n  height: var(--pggm-form-field-error-message-icon-size);\n  width: var(--pggm-form-field-error-message-icon-size);\n}\n.pggm-error__icon--hidden {\n  visibility: hidden;\n}\n";

// ../node_modules/@tabler/icons/icons/outline/alert-triangle.svg
var alert_triangle_default = '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"\n>\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M12 9v4" />\n  <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />\n  <path d="M12 16h.01" />\n</svg>';

// ../packages/error-message/src/error-message.tsx
var validityStateNames = [
  "badInput",
  "customError",
  "patternMismatch",
  "rangeOverflow",
  "rangeUnderflow",
  "stepMismatch",
  "tooLong",
  "tooShort",
  "typeMismatch",
  "valueMissing"
];
var validityArrayConverter = {
  fromAttribute: (value) => {
    if (!value) {
      return null;
    }
    return value.split(" ").map((v) => v.trim()).filter((v) => validityStateNames.includes(v));
  },
  toAttribute: (value) => {
    if (!value || !value.join) {
      return null;
    }
    return value.join(" ");
  }
};
var _forElement, _PGGMErrorMessage_instances, addEventListeners_fn, checkValidity_fn, _onInvalid, _onBlur2, findForElement_fn, _updateIconVisibility;
var PGGMErrorMessage = class extends CustomElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PGGMErrorMessage_instances);
    this.visible = false;
    this.validity = [];
    __privateAdd(this, _forElement);
    __privateAdd(this, _onInvalid, (e) => {
      e.preventDefault();
      __privateGet(this, _forElement).setAttribute("aria-invalid", __privateGet(this, _forElement).validity.valid ? "false" : "true");
      const isInvalid = __privateMethod(this, _PGGMErrorMessage_instances, checkValidity_fn).call(this);
      this.visible = isInvalid;
      if (isInvalid) {
        e.preventDefault();
      }
    });
    __privateAdd(this, _onBlur2, (e) => {
      if (!__privateGet(this, _forElement)) {
        return;
      }
      let isInvalid = false;
      for (const validity of this.validity) {
        if (__privateGet(this, _forElement).validity[validity]) {
          isInvalid = true;
          break;
        }
      }
      this.visible = isInvalid;
      __privateGet(this, _forElement).setAttribute("aria-invalid", __privateGet(this, _forElement).validity.valid ? "false" : "true");
    });
    __privateAdd(this, _updateIconVisibility, () => {
      const errorElements = [];
      let prevElement = this.previousElementSibling;
      let nextElement = this.nextElementSibling;
      while (prevElement && prevElement.tagName === "PGGM-ERROR-MESSAGE") {
        errorElements.push(prevElement);
        prevElement = prevElement.previousElementSibling;
      }
      errorElements.push(this);
      while (nextElement && nextElement.tagName === "PGGM-ERROR-MESSAGE") {
        errorElements.push(nextElement);
        nextElement = nextElement.nextElementSibling;
      }
      errorElements.forEach((e) => {
        requestAnimationFrame(() => {
          e.hideIcon();
        });
      });
      requestAnimationFrame(() => {
        var _a4;
        const visibleErrors = errorElements.filter((e) => e.visible);
        (_a4 = visibleErrors[0]) == null ? void 0 : _a4.showIcon();
      });
    });
  }
  get forElement() {
    return __privateGet(this, _forElement);
  }
  updated(propertyName, oldValue, newValue) {
    if (propertyName === "visible" && newValue === true) {
      if (!this.hasAttribute("visible")) {
        this.setAttribute("visible", "");
      }
    } else if (propertyName === "visible" && newValue === false) {
      if (this.hasAttribute("visible")) {
        this.removeAttribute("visible");
      }
    }
    const rootNode = this.getRootNode();
    if (propertyName === "for" && rootNode && newValue) {
      __privateMethod(this, _PGGMErrorMessage_instances, findForElement_fn).call(this);
    }
  }
  render() {
    return /* @__PURE__ */ Maquette.h("div", { class: "pggm-error", afterUpdate: __privateGet(this, _updateIconVisibility) }, /* @__PURE__ */ Maquette.h("span", { classes: { "pggm-error__icon": true }, innerHTML: alert_triangle_default }), /* @__PURE__ */ Maquette.h("slot", null));
  }
  hideIcon() {
    this.shadowRoot.querySelector(".pggm-error__icon").classList.add("pggm-error__icon--hidden");
  }
  showIcon() {
    this.shadowRoot.querySelector(".pggm-error__icon").classList.remove("pggm-error__icon--hidden");
  }
  connectedCallback() {
    super.connectedCallback();
    __privateMethod(this, _PGGMErrorMessage_instances, findForElement_fn).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (__privateGet(this, _forElement)) {
      __privateGet(this, _forElement).removeEventListener("invalid", __privateGet(this, _onInvalid));
      PGGMErrorMessage.allUpdateEvents.forEach((event) => {
        __privateGet(this, _forElement).removeEventListener(event, __privateGet(this, _onBlur2));
      });
      __privateSet(this, _forElement, null);
    }
  }
};
_forElement = new WeakMap();
_PGGMErrorMessage_instances = new WeakSet();
addEventListeners_fn = function(forElement) {
  if (__privateGet(this, _forElement)) {
    __privateGet(this, _forElement).removeEventListener("invalid", __privateGet(this, _onInvalid));
    PGGMErrorMessage.allUpdateEvents.forEach((event) => {
      __privateGet(this, _forElement).removeEventListener(event, __privateGet(this, _onBlur2));
    });
  }
  __privateSet(this, _forElement, forElement);
  __privateGet(this, _forElement).addEventListener("invalid", __privateGet(this, _onInvalid));
  PGGMErrorMessage.allUpdateEvents.forEach((event) => {
    __privateGet(this, _forElement).addEventListener(event, __privateGet(this, _onBlur2));
  });
};
checkValidity_fn = function() {
  let isInvalid;
  for (const validity of this.validity ? this.validity : []) {
    if (__privateGet(this, _forElement).validity[validity]) {
      isInvalid = true;
      break;
    }
  }
  return isInvalid;
};
_onInvalid = new WeakMap();
_onBlur2 = new WeakMap();
findForElement_fn = function() {
  const rootNode = this.getRootNode();
  if (!rootNode) {
    return;
  }
  if (!__privateGet(this, _forElement)) {
    const forElement = rootNode.querySelector(`#${this.for}`);
    if (forElement) {
      __privateMethod(this, _PGGMErrorMessage_instances, addEventListeners_fn).call(this, forElement);
    } else {
      setTimeout(() => {
        __privateMethod(this, _PGGMErrorMessage_instances, findForElement_fn).call(this);
      }, 500);
    }
  }
};
_updateIconVisibility = new WeakMap();
PGGMErrorMessage.style = error_message_default;
PGGMErrorMessage.allUpdateEvents = ["blur", "change"];
__decorateClass([
  Property({ type: "boolean", attribute: "visible", reflect: true })
], PGGMErrorMessage.prototype, "visible", 2);
__decorateClass([
  Property({ type: "string", attribute: "for", reflect: true })
], PGGMErrorMessage.prototype, "for", 2);
__decorateClass([
  Property({ type: "object", attribute: "validity", reflect: true, converter: validityArrayConverter })
], PGGMErrorMessage.prototype, "validity", 2);
PGGMErrorMessage = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-error-message"
  })
], PGGMErrorMessage);

// ../packages/fieldset/src/fieldset.css
var fieldset_default = ':host {\n  display: block;\n  margin-bottom: var(--pggm-space-inline-lg);\n}\n#DescriptionContainer ::slotted(*) {\n  display: block;\n  margin: 0;\n  font-family: var(--pggm-form-field-description-font-family);\n  font-size: var(--pggm-form-field-description-font-size);\n  font-weight: var(--pggm-form-field-description-font-weight);\n  line-height: var(--pggm-form-field-description-line-height);\n  color: var(--pggm-form-field-description-color);\n}\n.pggm-fieldset--disabled #DescriptionContainer ::slotted(*) {\n  color: var(--pggm-form-field-label-disabled-color);\n}\n.pggm-fieldset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  row-gap: var(--pggm-text-input-row-gap);\n}\n#ErrorsContainer slot {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n#LabelsContainer,\n#FieldsContainer slot {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-column-gap: var(--pggm-text-input-row-gap);\n  -moz-column-gap: var(--pggm-text-input-row-gap);\n  column-gap: var(--pggm-text-input-row-gap);\n  row-gap: var(--pggm-text-input-row-gap);\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n#LabelsContainer ::slotted(label[is="pggm-label"]:not([disabled])) {\n  color: var(--pggm-form-field-label-color) !important;\n}\n:host(:has([disabled])) #LabelsContainer ::slotted(*) {\n  color: var(--pggm-form-field-disabled-label-color);\n}\n';

// ../packages/fieldset/src/fieldset.tsx
var _fieldsObserver, _PGGMFieldset_instances, allFieldsDisabled_get, updateLabels_fn, removeAllFieldsObserver_fn, updateFieldsObservers_fn, _onSlotChange2;
var PGGMFieldset = class extends CustomElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PGGMFieldset_instances);
    __privateAdd(this, _fieldsObserver, /* @__PURE__ */ new Map());
    __privateAdd(this, _onSlotChange2, (e) => {
      var _a4;
      const slotName = (_a4 = e.target) == null ? void 0 : _a4.name;
      if (slotName === "") {
        __privateMethod(this, _PGGMFieldset_instances, updateFieldsObservers_fn).call(this);
      }
    });
  }
  render() {
    return /* @__PURE__ */ Maquette.h(
      "div",
      {
        classes: {
          "pggm-fieldset": true,
          "pggm-fieldset--disabled": __privateGet(this, _PGGMFieldset_instances, allFieldsDisabled_get)
        }
      },
      /* @__PURE__ */ Maquette.h("div", null, /* @__PURE__ */ Maquette.h("div", { key: "labels", id: "LabelsContainer" }, /* @__PURE__ */ Maquette.h("slot", { name: "label" })), /* @__PURE__ */ Maquette.h("div", { key: "description", id: "DescriptionContainer" }, /* @__PURE__ */ Maquette.h("slot", { name: "description" })), !__privateGet(this, _PGGMFieldset_instances, allFieldsDisabled_get) && /* @__PURE__ */ Maquette.h("div", { key: "error", id: "ErrorsContainer" }, /* @__PURE__ */ Maquette.h("slot", { name: "error" }))),
      /* @__PURE__ */ Maquette.h("div", { key: "fields", id: "FieldsContainer" }, /* @__PURE__ */ Maquette.h("slot", null))
    );
  }
  connectedCallback() {
    super.connectedCallback();
    this.shadowRoot.addEventListener("slotchange", __privateGet(this, _onSlotChange2));
    __privateMethod(this, _PGGMFieldset_instances, updateFieldsObservers_fn).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    __privateMethod(this, _PGGMFieldset_instances, removeAllFieldsObserver_fn).call(this);
  }
};
_fieldsObserver = new WeakMap();
_PGGMFieldset_instances = new WeakSet();
allFieldsDisabled_get = function() {
  var _a4;
  return (_a4 = this.fieldsSlot) == null ? void 0 : _a4.assignedElements().every((e) => e.hasAttribute("disabled"));
};
updateLabels_fn = function() {
  const labels = Array.from(this.querySelectorAll("label[is='pggm-label']"));
  const idQuery = this.fieldsSlot.assignedElements().map((e) => "#" + e.id).join(", ");
  const allFields = this.querySelectorAll(idQuery);
  allFields.forEach((field) => {
    const label = labels.find((l) => l.getAttribute("for") === field.id);
    if (field.hasAttribute("disabled")) {
      label == null ? void 0 : label.setAttribute("disabled", "");
    } else {
      label.removeAttribute("disabled");
    }
  });
};
removeAllFieldsObserver_fn = function() {
  for (const [field, observer] of __privateGet(this, _fieldsObserver)) {
    observer.disconnect();
    __privateGet(this, _fieldsObserver).delete(field);
  }
};
updateFieldsObservers_fn = function() {
  if (!this.fieldsSlot) {
    return;
  }
  const fields = this.fieldsSlot.assignedElements();
  for (const field of fields) {
    if (!__privateGet(this, _fieldsObserver).has(field)) {
      const observer = new MutationObserver(() => {
        __privateMethod(this, _PGGMFieldset_instances, updateLabels_fn).call(this);
        this.scheduleRender();
      });
      observer.observe(field, { childList: false, attributes: true, attributeFilter: ["disabled"] });
      __privateGet(this, _fieldsObserver).set(field, observer);
    }
  }
  for (const [field, observer] of __privateGet(this, _fieldsObserver)) {
    if (!fields.includes(field)) {
      observer.disconnect();
      __privateGet(this, _fieldsObserver).delete(field);
    }
  }
  ;
};
_onSlotChange2 = new WeakMap();
PGGMFieldset.style = fieldset_default;
__decorateClass([
  Property({ type: "boolean", attribute: "disabled", reflect: true })
], PGGMFieldset.prototype, "disabled", 2);
__decorateClass([
  Query("#FieldsContainer slot")
], PGGMFieldset.prototype, "fieldsSlot", 2);
PGGMFieldset = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-fieldset"
  })
], PGGMFieldset);

// ../packages/file-upload/src/file-upload.css
var file_upload_default = '.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n:host {\n  display: block;\n  width: 100%;\n  --pggm-file-upload-row-gap: var(--pggm-form-field-label-row-gap);\n  --pggm-file-upload-label-row-gap: var(--pggm-form-field-label-row-gap);\n  --pggm-file-upload-label-color: var(--pggm-form-field-label-color);\n  --pggm-file-upload-label-font-family: var(--pggm-form-field-label-font-family);\n  --pggm-file-upload-label-font-weight: var(--pggm-form-field-label-font-weight);\n  --pggm-file-upload-label-disabled-color: var(--pggm-form-field-label-disabled-color);\n  --pggm-file-upload-label-optional-color: var(--pggm-form-field-label-optional-color);\n  --pggm-file-upload-label-optional-font-family: var(--pggm-form-field-label-optional-font-family);\n  --pggm-file-upload-label-optional-font-size: var(--pggm-form-field-label-optional-font-size);\n  --pggm-file-upload-label-optional-font-weight: var(--pggm-form-field-label-optional-font-weight);\n  --pggm-file-upload-label-optional-line-height: var(--pggm-form-field-label-optional-line-height);\n  --pggm-file-upload-description-color: var(--pggm-form-field-description-color);\n  --pggm-file-upload-description-font-family: var(--pggm-form-field-description-font-family);\n  --pggm-file-upload-description-font-size: var(--pggm-form-field-description-font-size);\n  --pggm-file-upload-description-font-weight: var(--pggm-form-field-description-font-weight);\n  --pggm-file-upload-description-line-height: var(--pggm-form-field-description-line-height);\n  --pggm-file-upload-file-item-color: var(--pggm-text-input-color);\n  --pggm-file-upload-file-item-background-color: var(--pggm-text-input-read-only-background-color);\n  --pggm-file-upload-file-item-border-width: var(--pggm-text-input-border-width);\n  --pggm-file-upload-file-item-border-color: var(--pggm-text-input-border-color);\n  --pggm-file-upload-file-item-font-family: var(--pggm-text-input-content-font-family);\n  --pggm-file-upload-file-item-font-size: var(--pggm-text-input-content-font-size);\n  --pggm-file-upload-file-item-font-weight: var(--pggm-text-input-content-font-weight);\n  --pggm-file-upload-file-item-height: calc( var(--pggm-text-input-padding-block-start) + var(--pggm-text-input-padding-block-end) + var(--pggm-text-input-content-font-size));\n  --pggm-file-upload-file-item-border-radius: var(--pggm-text-input-border-radius);\n  --pggm-file-upload-file-item-text-indent: var(--pggm-text-input-padding-inline-start);\n  --pggm-file-upload-file-item-invalid-border-color: var(--pggm-text-input-invalid-border-color);\n  --pggm-file-upload-file-item-invalid-color: var(--pggm-text-input-invalid-color);\n}\n.file-upload {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  row-gap: var(--pggm-file-upload-row-gap);\n}\n.file-upload__label {\n  color: var(--pggm-file-upload-label-color);\n  font-family: var(--pggm-file-upload-label-font-family);\n  font-weight: var(--pggm-file-upload-label-font-weight);\n}\n.file-upload__label-badge:after {\n  color: var(--pggm-file-upload-label-optional-color);\n  font-family: var(--pggm-file-upload-label-optional-font-family);\n  font-size: var(--pggm-file-upload-label-optional-font-size);\n  font-weight: var(--pggm-file-upload-label-optional-font-weight);\n  line-height: var(--pggm-file-upload-label-optional-line-height);\n  margin-left: var(--pggm-file-upload-label-row-gap);\n  content: "Optioneel";\n  content: var(--pggm-file-upload-optional-content, "Optioneel");\n}\n.file-upload__description {\n  font-family: var(--pggm-file-upload-description-font-family);\n  font-size: var(--pggm-file-upload-description-font-size);\n  font-weight: var(--pggm-file-upload-description-font-weight);\n  line-height: var(--pggm-file-upload-description-line-height);\n  color: var(--pggm-file-upload-description-color);\n}\n.file-upload__error {\n  display: none;\n  visibility: hidden;\n}\n.file-upload__error--has-error {\n  display: block;\n  visibility: visible;\n}\n.file-upload__dropzone {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  row-gap: var(--pggm-file-upload-row-gap);\n  border: calc(var(--pggm-text-input-border-width) * 2) dashed var(--pggm-text-input-border-color);\n  border-radius: var(--pggm-text-input-border-radius);\n  padding: var(--pggm-text-input-padding-block-start);\n  cursor: pointer;\n  -webkit-transition: border-color var(--transition-duration);\n  transition: border-color var(--transition-duration);\n}\n.file-upload__dropzone button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  background-color: transparent;\n  padding: 1.5em;\n  cursor: pointer;\n  font-family: var(--pggm-link-font-family);\n  font-size: var(--pggm-link-font-size);\n  font-weight: var(--pggm-link-font-weight);\n  line-height: var(--pggm-link-line-height);\n  color: var(--pggm-link-color);\n  text-decoration: underline;\n  -webkit-text-decoration: var(--pggm-link-text-decoration, underline);\n  text-decoration: var(--pggm-link-text-decoration, underline);\n  text-decoration-color: var(--pggm-link-text-decoration-color);\n  text-decoration-thickness: var(--pggm-link-text-decoration-thickness);\n  text-underline-offset: var(--pggm-link-text-underline-offset);\n}\n.file-upload__dropzone button:hover {\n  color: var(--pggm-link-color);\n  text-decoration: underline;\n  -webkit-text-decoration: var(--pggm-link-hover-text-decoration, underline);\n  text-decoration: var(--pggm-link-hover-text-decoration, underline);\n  text-decoration-color: var(--pggm-link-hover-text-decoration-color);\n}\n.file-upload__dropzone--dragover {\n  border-color: var(--pggm-link-hover-text-decoration-color);\n}\n.file-upload__file-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  row-gap: var(--pggm-file-upload-row-gap);\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.file-upload__file-list li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  row-gap: var(--pggm-file-upload-row-gap);\n}\n.file-upload__file-list .file-upload__file-item {\n  color: var( --pggm-file-upload-file-item-color);\n  background-color: var(--pggm-file-upload-file-item-background-color);\n  font-family: var(--pggm-file-upload-file-item-font-family);\n  font-size: var(--pggm-file-upload-file-item-font-size);\n  font-weight: var(--pggm-file-upload-file-item-font-weight);\n  height: var(--pggm-file-upload-file-item-height);\n  border-color: var(--pggm-file-upload-file-item-border-color);\n  border-width: var(--pggm-file-upload-file-item-border-width);\n  border-radius: var(--pggm-file-upload-file-item-border-radius);\n  border-style: solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  outline: none;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.file-upload__file-list .file-upload__file-item .filename {\n  text-indent: var(--pggm-file-upload-file-item-text-indent);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  max-width: calc(100% - 40px);\n}\n.file-upload__file-list .file-upload__file-item .file-delete-button {\n  fill: var( --pggm-file-upload-file-item-color);\n  width: 32px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.file-upload__file-list .file-upload__file-item .file-delete-button svg {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 24px;\n  height: 24px;\n}\n.file-upload__file-list .file-upload__file-item .file-delete-button.focus {\n  outline-offset: -2px;\n}\n.file-upload__file-list .file-upload__file-item:has(button:focus) {\n  outline-color: var(--pggm-file-upload-file-item-border-color);\n  outline-offset: 0;\n  outline-style: solid;\n  outline-width: 1px;\n}\n.file-upload__file-list .file-upload__file-item--error {\n  border-color: var(--pggm-file-upload-file-item-invalid-border-color);\n  color: var(--pggm-file-upload-file-item-invalid-color);\n}\n.file-upload.file-upload--disabled {\n  cursor: not-allowed;\n}\n.file-upload.file-upload--disabled .file-upload__label,\n.file-upload.file-upload--disabled .file-upload__label-badge:after,\n.file-upload.file-upload--disabled .file-upload__description {\n  color: var(--pggm-file-upload-label-disabled-color);\n}\n.file-upload__file-item--removing {\n  -webkit-animation: removeFileItem 0.3s forwards;\n  animation: removeFileItem 0.3s forwards;\n}\n@-webkit-keyframes removeFileItem {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    max-height: 100px;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    max-height: 0;\n    padding: 0;\n    margin: 0;\n  }\n}\n@keyframes removeFileItem {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    max-height: 100px;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    max-height: 0;\n    padding: 0;\n    margin: 0;\n  }\n}\n#AddFilePopoverMenu {\n  --calc--min-width: calc( var(--width) - (2 * var(--pggm-tooltip-padding-block-start)));\n  font-family: var(--pggm-tooltip-font-family);\n  font-weight: var(--pggm-tooltip-font-weight);\n  line-height: var(--pggm-tooltip-line-height);\n  outline: 0;\n  border: 0;\n  margin: 0;\n  list-style: none;\n  padding: var(--pggm-tooltip-padding-block-start);\n  color: var(--pggm-tooltip-color);\n  background-color: var(--pggm-tooltip-background-color);\n  position: absolute;\n  top: var(--y);\n  left: var(--x);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: unset;\n  min-width: var(--width, unset);\n  -webkit-box-shadow: var(--pggm-tooltip-box-shadow);\n  box-shadow: var(--pggm-tooltip-box-shadow);\n  border-radius: var(--pggm-tooltip-border-radius);\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  row-gap: 1em;\n}\n#AddFilePopoverMenu::-ms-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n#AddFilePopoverMenu::backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n#AddFilePopoverMenu a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n#AddFilePopoverMenu[popover] {\n  display: none;\n}\n#AddFilePopoverMenu[popover].\\:popover-open {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 90000;\n}\n#AddFilePopoverMenu[popover]:popover-open {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n';

// ../node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// ../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = (reference, floating, config) => __async(null, null, function* () {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(floating);
  let rects = yield platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = yield fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
      [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
    });
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? yield platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
});
function detectOverflow(state, options) {
  return __async(this, null, function* () {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(yield platform2.getClippingRect({
      element: ((_await$platform$isEle = yield platform2.isElement == null ? void 0 : platform2.isElement(element)) != null ? _await$platform$isEle : true) ? element : element.contextElement || (yield platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x,
      y,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = yield platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating);
    const offsetScale = (yield platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? (yield platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  });
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    fn(state) {
      return __async(this, null, function* () {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const _a5 = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true
        } = _a5, detectOverflowOptions = __objRest(_a5, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating);
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
            if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
            // overflows the main axis.
            overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      });
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
function convertValueToCoords(state, options) {
  return __async(this, null, function* () {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating);
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  });
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    fn(state) {
      return __async(this, null, function* () {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          y,
          placement,
          middlewareData
        } = state;
        const diffCoords = yield convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: __spreadProps(__spreadValues({}, diffCoords), {
            placement
          })
        };
      });
    }
  };
};

// ../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
var tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
var transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
var willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
var containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// ../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = function(data) {
  return __async(this, null, function* () {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = yield getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, yield getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  });
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
var offset2 = offset;
var flip2 = flip;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = __spreadValues({
    platform
  }, options);
  const platformWithCache = __spreadProps(__spreadValues({}, mergedOptions.platform), {
    _c: cache
  });
  return computePosition(reference, floating, __spreadProps(__spreadValues({}, mergedOptions), {
    platform: platformWithCache
  }));
};

// ../packages/file-upload/src/file-upload.tsx
var allButtonAppearance = ["primary", "secondary", "tertiary"];
var allModes = ["button", "dropzone", "both"];
function isIOS() {
  let platform2 = navigator == null ? void 0 : navigator.platform;
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(platform2);
}
var acceptArrayConverter = {
  fromAttribute: (value) => {
    if (!value) {
      return [];
    }
    return value.split(",").map((v) => v.trim()).filter((v) => v);
  },
  toAttribute: (value) => {
    if (!value || !value.join) {
      return "";
    }
    return value.join(", ");
  }
};
var _fileInput, _files, _PGGMFileUpload_instances, closeIcon_get, acceptImage_get, isCaptureSupported_get, formData_get, acceptFileByFileExtension_fn, acceptFileOnMimeType_fn, getFileError_fn, _inputIsChanging, _invalidEventIsTriggerd, _renderButtonMode, _renderDropzoneMode, _renderFileList, updateValidity_fn, _handleDragEvents, _handleFileRemoveAnimationEnd, _handleButtonClick, _handleFileInputChange, _handleDeleteFileButtonClick, _handleInvalidEventOnce;
var PGGMFileUpload = class extends CustomElement {
  constructor() {
    var _a4;
    super();
    __privateAdd(this, _PGGMFileUpload_instances);
    __privateAdd(this, _fileInput, null);
    __privateAdd(this, _files, []);
    this.focusGroupController = new FocusGroupController(this, {
      direction: "vertical",
      elements: () => Array.from(
        this.shadowRoot.querySelectorAll(
          ".file-upload__file-item button"
        )
      ),
      isFocusableElement: (el) => !this.disabled
    });
    __privateAdd(this, _inputIsChanging, false);
    __privateAdd(this, _invalidEventIsTriggerd, false);
    this.accept = [];
    this.butonAppearance = "secondary";
    this.disabled = false;
    this.maxSize = 0;
    this.mode = "both";
    this.multiple = false;
    this.required = false;
    __privateAdd(this, _renderButtonMode, () => {
      if (this.mode === "dropzone") {
        return null;
      }
      return /* @__PURE__ */ Maquette.h("div", null, /* @__PURE__ */ Maquette.h(
        "button",
        {
          disabled: this.disabled ? "disabled" : void 0,
          onclick: __privateGet(this, _handleButtonClick),
          is: "pggm-button",
          id: "AddFileButton",
          appearance: this.butonAppearance,
          afterCreate: () => __privateMethod(this, _PGGMFileUpload_instances, updateValidity_fn).call(this)
        },
        this.button ? this.button : "Bestand toevoegen"
      ));
    });
    __privateAdd(this, _renderDropzoneMode, () => {
      if (this.mode === "button") {
        return null;
      }
      return /* @__PURE__ */ Maquette.h(
        "div",
        {
          id: "Dropzone",
          class: "file-upload__dropzone",
          afterCreate: (div) => {
            ["dragenter", "dragover", "dragleave", "drop"].forEach(
              (eventName) => {
                div.addEventListener(eventName, __privateGet(this, _handleDragEvents));
              }
            );
          }
        },
        /* @__PURE__ */ Maquette.h(
          "button",
          {
            id: "DropzoneButton",
            afterCreate: () => {
              __privateMethod(this, _PGGMFileUpload_instances, updateValidity_fn).call(this);
            },
            disabled: this.disabled ? "disabled" : void 0,
            onclick: __privateGet(this, _handleButtonClick),
            class: "focus"
          },
          this.dropzoneLabel ? this.dropzoneLabel : "Sleep bestand(en) hierheen of klik om te uploaden"
        )
      );
    });
    __privateAdd(this, _renderFileList, () => {
      return /* @__PURE__ */ Maquette.h("ul", { class: "file-upload__file-list" }, __privateGet(this, _files).map((fileitem, idx) => {
        return /* @__PURE__ */ Maquette.h("li", { key: idx }, fileitem.error ? /* @__PURE__ */ Maquette.h(
          "pggm-error-message",
          {
            visible: "visible",
            afterCreate: () => __privateMethod(this, _PGGMFileUpload_instances, updateValidity_fn).call(this),
            afterRemoved: () => __privateMethod(this, _PGGMFileUpload_instances, updateValidity_fn).call(this)
          },
          fileitem.error
        ) : null, /* @__PURE__ */ Maquette.h(
          "div",
          {
            "data-index": `${idx}`,
            classes: {
              "file-upload__file-item": true,
              "file-upload__file-item--error": fileitem.error,
              "file-upload__file-item--removing": fileitem.removed
            },
            onanimationend: __privateGet(this, _handleFileRemoveAnimationEnd)
          },
          /* @__PURE__ */ Maquette.h("div", { class: "filename" }, fileitem.file.name),
          /* @__PURE__ */ Maquette.h(
            "button",
            {
              "data-index": `${idx}`,
              onclick: __privateGet(this, _handleDeleteFileButtonClick),
              class: "file-delete-button focus"
            },
            __privateGet(this, _PGGMFileUpload_instances, closeIcon_get),
            /* @__PURE__ */ Maquette.h("span", { class: "sr-only" }, "Bestand verwijderen")
          )
        ));
      }));
    });
    __privateAdd(this, _handleDragEvents, (e) => {
      const event = e;
      if (["dragenter", "dragover", "dragleave", "drop"].includes(event.type)) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (["dragenter", "dragover"].includes(event.type)) {
        this.shadowRoot.querySelector("#Dropzone").classList.add("file-upload__dropzone--dragover");
      }
      if (["dragleave", "drop"].includes(event.type)) {
        this.shadowRoot.querySelector("#Dropzone").classList.remove("file-upload__dropzone--dragover");
      }
      if (event.type === "drop") {
        Array.from(event.dataTransfer.files).forEach((file) => {
          __privateGet(this, _files).push({
            file,
            error: __privateMethod(this, _PGGMFileUpload_instances, getFileError_fn).call(this, file),
            removed: false
          });
        });
        this.internals.setFormValue(__privateGet(this, _PGGMFileUpload_instances, formData_get));
        __privateMethod(this, _PGGMFileUpload_instances, updateValidity_fn).call(this);
        this.scheduleRender();
      }
    });
    __privateAdd(this, _handleFileRemoveAnimationEnd, (e) => {
      if (e.animationName === "removeFileItem") {
        const idx = parseInt(e.target.dataset.index, 10);
        __privateGet(this, _files).splice(idx, 1);
        this.internals.setFormValue(__privateGet(this, _PGGMFileUpload_instances, formData_get));
        __privateMethod(this, _PGGMFileUpload_instances, updateValidity_fn).call(this);
        this.scheduleRender();
      }
    });
    __privateAdd(this, _handleButtonClick, (e) => {
      var _a4;
      if (__privateGet(this, _PGGMFileUpload_instances, isCaptureSupported_get)) {
        let popoverMode = true;
        if (popoverMode) {
          const target = e.target;
          this.popoverFileMenu.togglePopover();
          const button = target.closest("button");
          requestAnimationFrame(() => {
            computePosition2(button, this.popoverFileMenu, {
              placement: "bottom-start",
              strategy: "absolute",
              middleware: [flip2()]
            }).then(({ x, y }) => {
              const popoverMenuPadding = parseInt(getComputedStyle(this.popoverFileMenu).paddingLeft, 10) + parseInt(getComputedStyle(this.popoverFileMenu).paddingRight, 10);
              this.popoverFileMenu.style.setProperty("--x", `${x}px`);
              this.popoverFileMenu.style.setProperty("--y", `${y}px`);
              this.popoverFileMenu.style.setProperty(
                "--width",
                `${button.offsetWidth - popoverMenuPadding}px`
              );
            });
          });
          return;
        }
      }
      __privateGet(this, _fileInput).files = null;
      __privateGet(this, _fileInput).accept = this.accept.join(", ");
      (_a4 = __privateGet(this, _fileInput)) == null ? void 0 : _a4.click();
    });
    __privateAdd(this, _handleFileInputChange, (e) => {
      var _a4;
      if (__privateGet(this, _inputIsChanging)) {
        return;
      }
      __privateSet(this, _inputIsChanging, true);
      if (!this.multiple) {
        __privateSet(this, _files, []);
        this.internals.setFormValue(null);
      }
      Array.from((_a4 = __privateGet(this, _fileInput)) == null ? void 0 : _a4.files).forEach((file) => {
        __privateGet(this, _files).push({
          file,
          error: __privateMethod(this, _PGGMFileUpload_instances, getFileError_fn).call(this, file),
          removed: false
        });
      });
      this.internals.setFormValue(__privateGet(this, _PGGMFileUpload_instances, formData_get));
      __privateMethod(this, _PGGMFileUpload_instances, updateValidity_fn).call(this);
      this.scheduleRender();
      __privateGet(this, _fileInput).value = "";
      __privateSet(this, _inputIsChanging, false);
      requestAnimationFrame(() => {
        this.focusGroupController.updateElements();
      });
    });
    __privateAdd(this, _handleDeleteFileButtonClick, (e) => {
      const { target } = e;
      const button = target.closest("button");
      if (button) {
        requestAnimationFrame(() => {
          const index2 = parseInt(button.getAttribute("data-index"), 10);
          if (index2 > -1) {
            __privateGet(this, _files)[index2].removed = true;
            this.internals.setFormValue(__privateGet(this, _PGGMFileUpload_instances, formData_get));
            this.renderNow();
          }
        });
        this.focusGroupController.updateElements();
      }
    });
    __privateAdd(this, _handleInvalidEventOnce, () => {
      __privateSet(this, _invalidEventIsTriggerd, true);
      this.removeEventListener("invalid", __privateGet(this, _handleInvalidEventOnce));
      this.scheduleRender();
    });
    __privateSet(this, _fileInput, document.createElement("input"));
    __privateGet(this, _fileInput).type = "file";
    (_a4 = __privateGet(this, _fileInput)) == null ? void 0 : _a4.addEventListener("change", __privateGet(this, _handleFileInputChange));
    __privateGet(this, _fileInput).addEventListener("cancel", (e) => {
      this.scheduleRender();
    });
  }
  addFile(file) {
    if (!this.multiple) {
      __privateSet(this, _files, []);
      this.internals.setFormValue(null);
    }
    __privateGet(this, _files).push({ file, error: __privateMethod(this, _PGGMFileUpload_instances, getFileError_fn).call(this, file), removed: false });
    this.internals.setFormValue(__privateGet(this, _PGGMFileUpload_instances, formData_get));
    __privateMethod(this, _PGGMFileUpload_instances, updateValidity_fn).call(this);
    this.scheduleRender();
  }
  get files() {
    return __privateGet(this, _files).filter((item) => !item.removed).map((item) => item.file);
  }
  get willValidate() {
    if (this.hasAttribute("novalidate")) {
      return false;
    }
    if (this.required || this.files.length > 0) {
      return true;
    }
    return false;
  }
  get validity() {
    const state = {
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valid: true,
      valueMissing: false
    };
    if (this.required && this.files.length < 1) {
      state.valueMissing = true;
      state.valid = false;
    }
    if (__privateGet(this, _files).some((file) => file.error)) {
      state.badInput = true;
      state.valid = false;
    }
    if (this.maxFiles && this.files.length > this.maxFiles) {
      state.rangeOverflow = true;
      state.valid = false;
    }
    return state;
  }
  checkValidity() {
    return this.internals.checkValidity();
  }
  reportValidity() {
    return this.internals.reportValidity();
  }
  get value() {
    return this.files;
  }
  shouldUpdate(propertyName, oldValue, newValue) {
    if (newValue && propertyName === "button-appearance" && !allButtonAppearance.includes(newValue)) {
      console.warn(
        `Invalid button appearance: ${newValue}. Valid appearances are: ${allButtonAppearance.join(", ")}`
      );
      return false;
    }
    if (newValue && propertyName === "mode" && !allModes.includes(newValue)) {
      console.warn(
        `Invalid mode: ${newValue}. Valid modes are: ${allModes.join(", ")}`
      );
      return false;
    }
    return true;
  }
  updated(propertyName, oldValue, newValue) {
    if (propertyName === "multiple") {
      requestAnimationFrame(() => {
        __privateGet(this, _fileInput).multiple = this.multiple;
      });
    } else if (propertyName === "disabled") {
      requestAnimationFrame(() => {
        if (!newValue) {
          this.internals.setFormValue(null);
        } else {
          this.internals.setFormValue(__privateGet(this, _PGGMFileUpload_instances, formData_get));
        }
      });
    } else if (propertyName === "required" && newValue === true && this.addFileButton) {
      requestAnimationFrame(() => {
        __privateMethod(this, _PGGMFileUpload_instances, updateValidity_fn).call(this);
      });
    }
  }
  connectedCallback() {
    super.connectedCallback();
    !__privateGet(this, _invalidEventIsTriggerd) && this.addEventListener("invalid", __privateGet(this, _handleInvalidEventOnce));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (!__privateGet(this, _invalidEventIsTriggerd)) {
      __privateGet(this, _invalidEventIsTriggerd) && this.removeEventListener("invalid", __privateGet(this, _handleInvalidEventOnce));
    }
  }
  render() {
    return /* @__PURE__ */ Maquette.h(
      "div",
      {
        classes: {
          "file-upload": true,
          "file-upload--disabled": this.disabled
        }
      },
      /* @__PURE__ */ Maquette.h("div", { classes: { "file-upload__label": true } }, /* @__PURE__ */ Maquette.h("span", null, /* @__PURE__ */ Maquette.h("slot", { name: "label-title" }, "Bestanden uploaden")), this.required ? null : /* @__PURE__ */ Maquette.h("span", { class: "file-upload__label-badge" })),
      /* @__PURE__ */ Maquette.h("div", { classes: { "file-upload__description": true } }, /* @__PURE__ */ Maquette.h("slot", { name: "label-description" })),
      /* @__PURE__ */ Maquette.h(
        "div",
        {
          classes: {
            "file-upload__error": true,
            "file-upload__error--has-error": __privateGet(this, _invalidEventIsTriggerd) && this.internals.validity.valid === false
          }
        },
        /* @__PURE__ */ Maquette.h("slot", { name: "error" })
      ),
      __privateGet(this, _renderDropzoneMode).call(this),
      __privateGet(this, _renderButtonMode).call(this),
      /* @__PURE__ */ Maquette.h("ul", { popover: "auto", id: "AddFilePopoverMenu" }, /* @__PURE__ */ Maquette.h("li", null, /* @__PURE__ */ Maquette.h(
        "a",
        {
          is: "pggm-link",
          standalone: "standalone",
          class: "focus",
          href: "#",
          onclick: (e) => {
            e.preventDefault();
            __privateGet(this, _fileInput).accept = this.accept.join(", ");
            __privateGet(this, _fileInput).click();
            this.popoverFileMenu.togglePopover();
          }
        },
        this.menuFile ? this.menuFile : "Selecteer bestand(en)"
      )), /* @__PURE__ */ Maquette.h("li", null, /* @__PURE__ */ Maquette.h(
        "a",
        {
          is: "pggm-link",
          standalone: "standalone",
          class: "focus",
          href: "#",
          onclick: (e) => {
            e.preventDefault();
            __privateGet(this, _fileInput).setAttribute("capture", "environment");
            __privateGet(this, _fileInput).accept = "image/jpg";
            __privateGet(this, _fileInput).click();
            this.popoverFileMenu.togglePopover();
          }
        },
        this.menuCapture ? this.menuCapture : "Maak een foto"
      ))),
      __privateGet(this, _renderFileList).call(this)
    );
  }
};
_fileInput = new WeakMap();
_files = new WeakMap();
_PGGMFileUpload_instances = new WeakSet();
closeIcon_get = function() {
  return /* @__PURE__ */ Maquette.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, /* @__PURE__ */ Maquette.h(
    "path",
    {
      class: "file--close",
      "fill-rule": "evenodd",
      d: "M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z",
      "clip-rule": "evenodd"
    }
  ));
};
acceptImage_get = function() {
  if (this.accept.length < 1) {
    return true;
  }
  return this.accept.filter((a) => a.trim().toLocaleLowerCase() === ".jpg").length > 0;
};
isCaptureSupported_get = function() {
  return __privateGet(this, _PGGMFileUpload_instances, acceptImage_get) && "capture" in __privateGet(this, _fileInput) && !isIOS();
};
formData_get = function() {
  const formData = new FormData();
  this.files.forEach((file, idx) => {
    formData.append(this.getAttribute("name"), file);
  });
  return formData;
};
acceptFileByFileExtension_fn = function(extension) {
  if (!extension) {
    return false;
  }
  const acceptedFileExtenstions = this.accept.filter((a) => a.startsWith(".")).map((a) => a.slice(1));
  if (this.accept.length > 0) {
    return acceptedFileExtenstions.find(
      (a) => a.trim().toLocaleLowerCase() === extension
    ) ? true : false;
  }
  return true;
};
acceptFileOnMimeType_fn = function(mimeType) {
  if (!mimeType) {
    return false;
  }
  const acceptedMimeTypes = this.accept.filter((a) => a.indexOf("/") > -1);
  if (this.accept.length > 0) {
    let accept = acceptedMimeTypes.find(
      (a) => a.trim().toLocaleLowerCase() === mimeType
    );
    if (!accept) {
      accept = acceptedMimeTypes.find(
        (a) => a.trim().toLocaleLowerCase() === mimeType.split("/")[0] + "/*"
      );
    }
    return accept ? true : false;
  }
  return true;
};
getFileError_fn = function(file) {
  const fileExtension = file.name.split(".").slice(1).pop() || null;
  const isFileAccepted = __privateMethod(this, _PGGMFileUpload_instances, acceptFileByFileExtension_fn).call(this, fileExtension.toLowerCase()) || __privateMethod(this, _PGGMFileUpload_instances, acceptFileOnMimeType_fn).call(this, file.type);
  const acceptError = !isFileAccepted ? "Bestand is niet toegestaan" : null;
  if (acceptError) {
    return acceptError;
  }
  if (this.maxFileSize && file.size > this.maxFileSize) {
    return "Bestand is te groot";
  }
  return null;
};
_inputIsChanging = new WeakMap();
_invalidEventIsTriggerd = new WeakMap();
_renderButtonMode = new WeakMap();
_renderDropzoneMode = new WeakMap();
_renderFileList = new WeakMap();
updateValidity_fn = function() {
  const validity = this.validity;
  const buttonElement = this.mode === "button" ? this.addFileButton : this.dropzoneButton;
  if (validity.valid) {
    this.internals.setValidity(validity, "");
  } else if (validity.valueMissing) {
    this.internals.setValidity(
      validity,
      "Dit veld is verplicht",
      buttonElement
    );
  } else if (validity.badInput) {
    const invalidQuery = ".file-upload__file-item--error button";
    let firsInvalidFileItem = this.shadowRoot.querySelector(invalidQuery);
    const setValidityToFirstInvalidFileItem = (item) => {
      this.internals.setValidity(
        validity,
        "Bestand is niet toegestaan",
        item ? item : buttonElement
      );
    };
    setValidityToFirstInvalidFileItem(firsInvalidFileItem);
    if (!firsInvalidFileItem) {
      requestAnimationFrame(() => {
        firsInvalidFileItem = this.shadowRoot.querySelector(invalidQuery);
        setValidityToFirstInvalidFileItem(firsInvalidFileItem);
      });
    }
  } else if (validity.rangeOverflow) {
    this.internals.setValidity(
      validity,
      "Te veel bestanden geselecteerd",
      buttonElement
    );
  }
};
_handleDragEvents = new WeakMap();
_handleFileRemoveAnimationEnd = new WeakMap();
_handleButtonClick = new WeakMap();
_handleFileInputChange = new WeakMap();
_handleDeleteFileButtonClick = new WeakMap();
_handleInvalidEventOnce = new WeakMap();
PGGMFileUpload.formAssociated = true;
PGGMFileUpload.style = focus_default + file_upload_default;
__decorateClass([
  Property({
    type: "object",
    attribute: "accept",
    reflect: true,
    converter: acceptArrayConverter
  })
], PGGMFileUpload.prototype, "accept", 2);
__decorateClass([
  Query("#AddFileButton")
], PGGMFileUpload.prototype, "addFileButton", 2);
__decorateClass([
  Property({ type: "string", attribute: "button", reflect: true })
], PGGMFileUpload.prototype, "button", 2);
__decorateClass([
  Property({ type: "string", attribute: "button-appearance", reflect: true })
], PGGMFileUpload.prototype, "butonAppearance", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "disabled", reflect: true })
], PGGMFileUpload.prototype, "disabled", 2);
__decorateClass([
  Query("#DropzoneButton")
], PGGMFileUpload.prototype, "dropzoneButton", 2);
__decorateClass([
  Property({ type: "string", attribute: "dropzone-label", reflect: true })
], PGGMFileUpload.prototype, "dropzoneLabel", 2);
__decorateClass([
  Property({ type: "number", attribute: "max-file-size", reflect: true })
], PGGMFileUpload.prototype, "maxFileSize", 2);
__decorateClass([
  Property({ type: "number", attribute: "max-files", reflect: true })
], PGGMFileUpload.prototype, "maxFiles", 2);
__decorateClass([
  Property({ type: "number", attribute: "max-size", reflect: true })
], PGGMFileUpload.prototype, "maxSize", 2);
__decorateClass([
  Property({ type: "string", attribute: "menu-capture", reflect: true })
], PGGMFileUpload.prototype, "menuCapture", 2);
__decorateClass([
  Property({ type: "string", attribute: "menu-file", reflect: true })
], PGGMFileUpload.prototype, "menuFile", 2);
__decorateClass([
  Property({ type: "string", attribute: "mode", reflect: true })
], PGGMFileUpload.prototype, "mode", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "multiple", reflect: true })
], PGGMFileUpload.prototype, "multiple", 2);
__decorateClass([
  Query("#AddFilePopoverMenu")
], PGGMFileUpload.prototype, "popoverFileMenu", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "required", reflect: true })
], PGGMFileUpload.prototype, "required", 2);
PGGMFileUpload = __decorateClass([
  CustomElementConfig({ tagName: "pggm-file-upload" })
], PGGMFileUpload);

// ../packages/heading/src/heading.css
var heading_default = '[is=pggm-heading] {\n  --version: 1.0;\n}\nh1[is^=pggm-heading],\nh2[is^=pggm-heading],\nh3[is^=pggm-heading] h4[is^=pggm-heading] h5[is^=pggm-heading] {\n  all: revert;\n}\nh1[is^=pggm-heading]:not([size]) {\n  color: var(--pggm-heading-2xl-color);\n  font-family: var(--pggm-heading-2xl-font-family);\n  font-size: var(--pggm-heading-2xl-small-font-size);\n  font-weight: var(--pggm-heading-2xl-font-weight);\n  line-height: var(--pggm-heading-2xl-line-height);\n  margin: calc(var(--pggm-heading-2xl-small-font-size) / 2.985) 0;\n}\nh2[is^=pggm-heading]:not([size]) {\n  color: var(--pggm-heading-xl-color);\n  font-family: var(--pggm-heading-xl-font-family);\n  font-size: var(--pggm-heading-xl-small-font-size);\n  font-weight: var(--pggm-heading-xl-font-weight);\n  line-height: var(--pggm-heading-xl-line-height);\n  margin: calc(var(--pggm-heading-xl-small-font-size) / 1.8) 0;\n}\nh3[is^=pggm-heading]:not([size]) {\n  color: var(--pggm-heading-lg-color);\n  font-family: var(--pggm-heading-lg-font-family);\n  font-size: var(--pggm-heading-lg-small-font-size);\n  font-weight: var(--pggm-heading-lg-font-weight);\n  line-height: var(--pggm-heading-lg-line-height);\n  margin: calc(var(--pggm-heading-lg-small-font-size) / 1.7) 0;\n}\nh4[is^=pggm-heading]:not([size]) {\n  color: var(--pggm-heading-md-color);\n  font-family: var(--pggm-heading-md-font-family);\n  font-size: var(--pggm-heading-md-small-font-size);\n  font-weight: var(--pggm-heading-md-font-weight);\n  line-height: var(--pggm-heading-md-line-height);\n  margin: calc(var(--pggm-heading-md-small-font-size) / .751) 0;\n}\nh5[is^=pggm-heading]:not([size]) {\n  color: var(--pggm-heading-sm-color);\n  font-family: var(--pggm-heading-sm-font-family);\n  font-size: var(--pggm-heading-sm-small-font-size);\n  font-weight: var(--pggm-heading-sm-font-weight);\n  line-height: var(--pggm-heading-sm-line-height);\n  margin: calc(var(--pggm-heading-sm-small-font-size) / .497) 0;\n}\nh1[is^=pggm-heading][size="2xl"],\nh2[is^=pggm-heading][size="2xl"],\nh3[is^=pggm-heading][size="2xl"],\nh4[is^=pggm-heading][size="2xl"],\nh5[is^=pggm-heading][size="2xl"] {\n  color: var(--pggm-heading-2xl-color);\n  font-family: var(--pggm-heading-2xl-font-family);\n  font-size: var(--pggm-heading-2xl-small-font-size);\n  font-weight: var(--pggm-heading-2xl-font-weight);\n  line-height: var(--pggm-heading-2xl-line-height);\n  margin: calc(var(--pggm-heading-2xl-small-font-size) / 2.985) 0;\n}\nh1[is^=pggm-heading][size=xl],\nh2[is^=pggm-heading][size=xl],\nh3[is^=pggm-heading][size=xl],\nh4[is^=pggm-heading][size=xl],\nh5[is^=pggm-heading][size=xl] {\n  color: var(--pggm-heading-xl-color);\n  font-family: var(--pggm-heading-xl-font-family);\n  font-size: var(--pggm-heading-xl-small-font-size);\n  font-weight: var(--pggm-heading-xl-font-weight);\n  line-height: var(--pggm-heading-xl-line-height);\n  margin: calc(var(--pggm-heading-xl-small-font-size) / 1.8) 0;\n}\nh1[is^=pggm-heading][size=lg],\nh2[is^=pggm-heading][size=lg],\nh3[is^=pggm-heading][size=lg],\nh4[is^=pggm-heading][size=lg],\nh5[is^=pggm-heading][size=lg] {\n  color: var(--pggm-heading-lg-color);\n  font-family: var(--pggm-heading-lg-font-family);\n  font-size: var(--pggm-heading-lg-small-font-size);\n  font-weight: var(--pggm-heading-lg-font-weight);\n  line-height: var(--pggm-heading-lg-line-height);\n  margin: calc(var(--pggm-heading-lg-small-font-size) / 1.7) 0;\n}\nh1[is^=pggm-heading][size=md],\nh2[is^=pggm-heading][size=md],\nh3[is^=pggm-heading][size=md],\nh4[is^=pggm-heading][size=md],\nh5[is^=pggm-heading][size=md] {\n  color: var(--pggm-heading-md-color);\n  font-family: var(--pggm-heading-md-font-family);\n  font-size: var(--pggm-heading-md-small-font-size);\n  font-weight: var(--pggm-heading-md-font-weight);\n  line-height: var(--pggm-heading-md-line-height);\n  margin: calc(var(--pggm-heading-md-small-font-size) / .751) 0;\n}\nh1[is^=pggm-heading][size=sm],\nh2[is^=pggm-heading][size=sm],\nh3[is^=pggm-heading][size=sm],\nh4[is^=pggm-heading][size=sm],\nh5[is^=pggm-heading][size=sm] {\n  color: var(--pggm-heading-sm-color);\n  font-family: var(--pggm-heading-sm-font-family);\n  font-size: var(--pggm-heading-sm-small-font-size);\n  font-weight: var(--pggm-heading-sm-font-weight);\n  line-height: var(--pggm-heading-sm-line-height);\n  margin: calc(var(--pggm-heading-sm-small-font-size) / .497) 0;\n}\n@media (min-width: 768px) {\n  h1[is^=pggm-heading]:not([size]) {\n    font-size: var(--pggm-heading-2xl-large-font-size);\n    margin: calc(var(--pggm-heading-2xl-large-font-size) / 2.985) 0;\n  }\n  h2[is^=pggm-heading]:not([size]) {\n    font-size: var(--pggm-heading-xl-large-font-size);\n    margin: calc(var(--pggm-heading-xl-large-font-size) / 1.8) 0;\n  }\n  h3[is^=pggm-heading]:not([size]) {\n    font-size: var(--pggm-heading-lg-large-font-size);\n    margin: calc(var(--pggm-heading-lg-large-font-size) / 1.7) 0;\n  }\n  h4[is^=pggm-heading]:not([size]) {\n    font-size: var(--pggm-heading-md-large-font-size);\n    margin: calc(var(--pggm-heading-md-large-font-size) / .751) 0;\n  }\n  h5[is^=pggm-heading]:not([size]) {\n    font-size: var(--pggm-heading-sm-large-font-size);\n    margin: calc(var(--pggm-heading-sm-large-font-size) / .497) 0;\n  }\n  h1[is^=pggm-heading][size="2xl"],\n  h2[is^=pggm-heading][size="2xl"],\n  h3[is^=pggm-heading][size="2xl"],\n  h4[is^=pggm-heading][size="2xl"],\n  h5[is^=pggm-heading][size="2xl"] {\n    font-size: var(--pggm-heading-2xl-large-font-size);\n    margin: calc(var(--pggm-heading-2xl-large-font-size) / 2.985) 0;\n  }\n  h1[is^=pggm-heading][size=xl],\n  h2[is^=pggm-heading][size=xl],\n  h3[is^=pggm-heading][size=xl],\n  h4[is^=pggm-heading][size=xl],\n  h5[is^=pggm-heading][size=xl] {\n    font-size: var(--pggm-heading-xl-large-font-size);\n    margin: calc(var(--pggm-heading-xl-large-font-size) / 1.8) 0;\n  }\n  h1[is^=pggm-heading][size=lg],\n  h2[is^=pggm-heading][size=lg],\n  h3[is^=pggm-heading][size=lg],\n  h4[is^=pggm-heading][size=lg],\n  h5[is^=pggm-heading][size=lg] {\n    font-size: var(--pggm-heading-lg-large-font-size);\n    margin: calc(var(--pggm-heading-lg-large-font-size) / 1.7) 0;\n  }\n  h1[is^=pggm-heading][size=md],\n  h2[is^=pggm-heading][size=md],\n  h3[is^=pggm-heading][size=md],\n  h4[is^=pggm-heading][size=md],\n  h5[is^=pggm-heading][size=md] {\n    font-size: var(--pggm-heading-md-large-font-size);\n    margin: calc(var(--pggm-heading-md-large-font-size) / .751) 0;\n  }\n  h1[is^=pggm-heading][size=sm],\n  h2[is^=pggm-heading][size=sm],\n  h3[is^=pggm-heading][size=sm],\n  h4[is^=pggm-heading][size=sm],\n  h5[is^=pggm-heading][size=sm] {\n    font-size: var(--pggm-heading-sm-large-font-size);\n    margin: calc(var(--pggm-heading-sm-large-font-size) / .497) 0;\n  }\n}\n';

// ../packages/heading/src/heading.tsx
var PGGMHeading = class extends HTMLHeadingElement {
  connectedCallback() {
    addStyleToShadowRoot(this.getRootNode(), heading_default, PGGMHeading.TAG_NAME);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "size" && newValue !== null) {
      if (!PGGMHeading.availableSizes.includes(newValue)) {
        console.warn(`Invalid size value: ${newValue}. Available sizes are: ${PGGMHeading.availableSizes.join(", ")}`);
        return;
      }
    }
  }
};
PGGMHeading.TAG_NAME = "pggm-heading";
PGGMHeading.observedAttributes = ["size"];
PGGMHeading.availableSizes = ["2xl", "xl", "lg", "md", "sm"];
PGGMHeading = __decorateClass([
  CustomElementConfig({
    tagName: PGGMHeading.TAG_NAME + "-1",
    options: {
      extends: "h1"
    }
  })
], PGGMHeading);
for (let i = 2; i <= 5; i++) {
  customElements.define(`${PGGMHeading.TAG_NAME}-${i}`, PGGMHeading, { extends: `h${i}` });
}

// ../packages/input/src/input.css
var input_default = "input[is=pggm-input] {\n  --border-width-max: max( var(--pggm-text-input-border-width), var(--pggm-text-input-active-border-width), var(--pggm-text-input-invalid-border-width) );\n  --border-width-difference: 0px;\n  --padding-inline: calc( var(--pggm-text-input-padding-inline-start) + var(--pggm-text-input-padding-inline-end) );\n  all: unset;\n  display: block;\n  border-style: solid;\n  width: min(calc(100% - var(--padding-inline)), calc(var(--pggm-text-input-max-inline-size) - var(--padding-inline)));\n  font-family: var(--pggm-text-input-content-font-family);\n  font-weight: var(--pggm-text-input-content-font-weight);\n  font-size: var(--pggm-text-input-content-font-size);\n  line-height: var(--pggm-text-input-content-line-height);\n  border-color: var(--pggm-text-input-border-color);\n  outline: none;\n  border-radius: calc(var(--pggm-text-input-border-radius) - 0px);\n  border-radius: calc(var(--pggm-text-input-border-radius) - var(--border-width-difference));\n  border-width: var(--pggm-text-input-border-width);\n  margin: 0px;\n  margin: var(--border-width-difference);\n  color: var(--pggm-text-input-color);\n  padding-top: var(--pggm-text-input-padding-block-start);\n  padding-bottom: var(--pggm-text-input-padding-block-end);\n  padding-left: var(--pggm-text-input-padding-inline-start);\n  padding-right: var(--pggm-text-input-padding-inline-end);\n  height: var( --pggm-text-input-content-font-size );\n  -webkit-transition:\n    background-color var(--transition-duration),\n    border-color var(--transition-duration),\n    color var(--transition-duration);\n  transition:\n    background-color var(--transition-duration),\n    border-color var(--transition-duration),\n    color var(--transition-duration);\n}\ninput[is=pggm-input]:hover {\n  background-color: var(--pggm-text-input-hover-background-color);\n  border-color: var(--pggm-text-input-hover-border-color);\n  color: var(--pggm-text-input-hover-color);\n}\ninput[is=pggm-input]:focus:not([disabled]) {\n  --border-width-difference: calc( var(--pggm-text-input-border-width) - var(--pggm-text-input-active-border-width) );\n  background-color: var(--pggm-text-input-active-background-color);\n  border-color: var(--pggm-text-input-active-border-color);\n  color: var(--pggm-text-input-active-color);\n  border-width: var(--pggm-text-input-active-border-width);\n}\ninput[is=pggm-input][aria-invalid=true],\ninput[is=pggm-input]:user-invalid {\n  --border-width-difference: calc( var(--pggm-text-input-border-width) - var(--pggm-text-input-invalid-border-width) );\n  background-color: var(--pggm-text-input-invalid-background-color);\n  border-color: var(--pggm-text-input-invalid-border-color);\n  color: var(--pggm-text-input-invalid-color);\n  border-width: var(--pggm-text-input-invalid-border-width);\n}\ninput[is=pggm-input][disabled] {\n  cursor: not-allowed;\n  background-color: var(--pggm-text-input-disabled-background-color);\n  border-color: var(--pggm-text-input-disabled-border-color);\n  color: var(--pggm-text-input-disabled-color);\n}\ninput[is=pggm-input]:-moz-read-only,\ninput[is=pggm-input]:-moz-read-only:focus {\n  background-color: var(--pggm-text-input-read-only-background-color);\n  border-color: var(--pggm-text-input-read-only-border-color);\n  color: var(--pggm-text-input-read-only-color);\n}\ninput[is=pggm-input]:read-only,\ninput[is=pggm-input]:read-only:focus {\n  background-color: var(--pggm-text-input-read-only-background-color);\n  border-color: var(--pggm-text-input-read-only-border-color);\n  color: var(--pggm-text-input-read-only-color);\n}\ninput[is=pggm-input][type=image] {\n  all: unset;\n  cursor: pointer;\n}\n";

// ../packages/input/src/input-format/base.ts
var InputFormat = class {
  constructor(customInput) {
    this.customInput = customInput;
  }
  init() {
    const attributes = [...this.constructor.attributes, "value", "disabled", "readonly"];
    attributes.forEach((attr) => {
      const property = attr.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      if (this[property] !== this.customInput.getAttribute(attr)) {
        this[property] = this.customInput.getAttribute(attr);
      }
    });
    this.customInput.addEventListener("invalid", () => {
      this.customInput.inputElement.setAttribute("aria-invalid", "true");
    });
    this.customInput.inputElement.addEventListener("blur", () => {
      requestAnimationFrame(() => {
        this.customInput.inputElement.setAttribute("aria-invalid", this.customInput.internals.validity.valid ? "false" : "true");
      });
    });
  }
  connected() {
    const labelText = Array.from(this.customInput.internals.labels).map((label) => label.textContent).join(" ");
    this.customInput.inputElement.setAttribute("aria-label", labelText);
  }
  disconnected() {
  }
};

// ../packages/input/src/input-format/iban/iban.ts
var _required, _disabled, _formatIbanString, _IbanFormat_instances, checkValidity_fn2, _onInput, _onKeydown, _onBlur3, checkSyntax_fn, checkChecksum_fn, mod97_fn;
var IbanFormat = class extends InputFormat {
  constructor(customInput) {
    super(customInput);
    __privateAdd(this, _IbanFormat_instances);
    __privateAdd(this, _required, false);
    __privateAdd(this, _disabled, false);
    __privateAdd(this, _formatIbanString, (ibanString) => {
      if (!ibanString) {
        return "";
      }
      return ibanString.replace(/[^\dA-Za-z]/g, "").replace(/(.{4})/g, "$1 ").trim().toLocaleUpperCase();
    });
    __privateAdd(this, _onInput, (e) => {
      let position = this.inputElement.selectionStart;
      this.inputElement.value = __privateGet(this, _formatIbanString).call(this, this.inputElement.value);
      if (this.inputElement.value[position - 1] === " ") {
        position++;
      }
    });
    __privateAdd(this, _onKeydown, (e) => {
      if (e.key === "Enter") {
        __privateMethod(this, _IbanFormat_instances, checkValidity_fn2).call(this);
        if (this.internals.form && this.internals.form.checkValidity()) {
          this.internals.form.dispatchEvent(new Event("submit", { cancelable: true }));
        } else if (this.internals.form && !this.internals.form.checkValidity()) {
          this.internals.form.reportValidity();
        }
      }
    });
    __privateAdd(this, _onBlur3, (e) => {
      __privateMethod(this, _IbanFormat_instances, checkValidity_fn2).call(this);
    });
    this.inputElement = customInput.inputElement;
    this.internals = customInput.internals;
    this.inputElement.type = "text";
  }
  get value() {
    return this.inputElement.value.replace(/\s/g, "");
  }
  set value(value) {
    this.inputElement.value = __privateGet(this, _formatIbanString).call(this, value);
    __privateMethod(this, _IbanFormat_instances, checkValidity_fn2).call(this);
  }
  get required() {
    return __privateGet(this, _required);
  }
  set required(value) {
    if (__privateGet(this, _required) !== value) {
      __privateSet(this, _required, typeof value === "string");
    }
    __privateMethod(this, _IbanFormat_instances, checkValidity_fn2).call(this);
  }
  get disabled() {
    return __privateGet(this, _disabled);
  }
  set disabled(value) {
    if (typeof value === "string") {
      value = true;
    }
    __privateSet(this, _disabled, value);
    this.inputElement.disabled = value;
    this.internals.setFormValue(null);
    __privateMethod(this, _IbanFormat_instances, checkValidity_fn2).call(this);
  }
  get readonly() {
    return this.inputElement.readOnly;
  }
  set readonly(value) {
    if (typeof value === "string") {
      value = true;
    }
    this.inputElement.readOnly = value;
  }
  disconnected() {
    super.disconnected();
    this.inputElement.removeEventListener("input", __privateGet(this, _onInput));
    this.inputElement.removeEventListener("keydown", __privateGet(this, _onKeydown));
    this.inputElement.removeEventListener("blur", __privateGet(this, _onBlur3));
  }
  connected() {
    super.connected();
    this.inputElement.addEventListener("input", __privateGet(this, _onInput));
    this.inputElement.addEventListener("keydown", __privateGet(this, _onKeydown));
    this.inputElement.addEventListener("blur", __privateGet(this, _onBlur3));
  }
};
_required = new WeakMap();
_disabled = new WeakMap();
_formatIbanString = new WeakMap();
_IbanFormat_instances = new WeakSet();
checkValidity_fn2 = function() {
  if (this.required && this.inputElement.value.length < 1) {
    this.internals.setValidity(
      { valueMissing: true },
      "IBAN is required",
      this.inputElement
    );
    this.internals.setFormValue(null);
    return;
  }
  if (this.inputElement.value.length < 1) {
    this.internals.setValidity({}, "", this.inputElement);
    return;
  }
  const code = __privateMethod(this, _IbanFormat_instances, checkSyntax_fn).call(this);
  const isValid = code ? __privateMethod(this, _IbanFormat_instances, checkChecksum_fn).call(this, code) : false;
  if (isValid) {
    this.internals.setValidity({}, "", this.inputElement);
    this.internals.setFormValue(this.value);
  } else {
    this.internals.setValidity(
      { customError: true },
      "IBAN is not valid",
      this.inputElement
    );
    this.internals.setFormValue(null);
  }
};
_onInput = new WeakMap();
_onKeydown = new WeakMap();
_onBlur3 = new WeakMap();
checkSyntax_fn = function() {
  const value = this.inputElement.value.replace(/\s/g, "");
  const code = value.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/);
  if (!code) {
    return void 0;
  }
  return code;
};
checkChecksum_fn = function(code) {
  const digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, (letter) => {
    return (letter.charCodeAt(0) - 55).toString();
  });
  return __privateMethod(this, _IbanFormat_instances, mod97_fn).call(this, digits) === 1;
};
mod97_fn = function(s) {
  let checksum = parseInt(s.slice(0, 2), 10);
  let fragment;
  for (let offset3 = 2; offset3 < s.length; offset3 += 7) {
    fragment = String(checksum) + s.substring(offset3, offset3 + 7);
    checksum = parseInt(fragment, 10) % 97;
  }
  return checksum;
};
IbanFormat.attributes = ["required", "disabled"];

// ../node_modules/awesome-phonenumber/index-esm.mjs
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var awesomePhonenumber$1 = { exports: {} };
var lib$1 = { exports: {} };
var lib = lib$1.exports;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib$1.exports;
  hasRequiredLib = 1;
  (function(module) {
    (function() {
      var aa = this || self;
      function ba(a) {
        a.qa = void 0;
        a.oa = function() {
          return a.qa ? a.qa : a.qa = new a();
        };
      }
      function h(a, b) {
        function c() {
        }
        c.prototype = b.prototype;
        a.Fa = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
        a.La = function(d, e, f) {
          for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
          return b.prototype[e].apply(d, g);
        };
      }
      var da = class {
        constructor(a) {
          if (ca !== ca) throw Error("SafeUrl is not meant to be built directly");
          this.g = a;
        }
        toString() {
          return this.g.toString();
        }
      }, ca = {};
      new da("about:invalid#zClosurez");
      new da("about:blank");
      var ea = {};
      class fa {
        constructor() {
          if (ea !== ea) throw Error("SafeStyle is not meant to be built directly");
        }
        toString() {
          return "".toString();
        }
      }
      new fa();
      function ha(a) {
        var b = [];
        let c = 0;
        for (var d in a) b[c++] = a[d];
        return b;
      }
      var ia = {};
      class ja {
        constructor() {
          if (ia !== ia) throw Error("SafeStyleSheet is not meant to be built directly");
        }
        toString() {
          return "".toString();
        }
      }
      new ja();
      var ka = {};
      class la {
        constructor() {
          var a = aa.trustedTypes && aa.trustedTypes.emptyHTML || "";
          if (ka !== ka) throw Error("SafeHtml is not meant to be built directly");
          this.g = a;
        }
        toString() {
          return this.g.toString();
        }
      }
      new la();
      function ma(a, b) {
        this.h = a;
        this.g = {};
        for (a = 0; a < b.length; a++) {
          var c = b[a];
          this.g[c.g] = c;
        }
      }
      function na(a) {
        a = ha(a.g);
        a.sort(function(b, c) {
          return b.g - c.g;
        });
        return a;
      }
      function oa(a, b) {
        this.g = a;
        this.l = !!b.fa;
        this.h = b.i;
        this.s = b.type;
        this.o = false;
        switch (this.h) {
          case pa:
          case qa:
          case ra:
          case sa:
          case ta:
          case ua:
          case va:
            this.o = true;
        }
        this.j = b.defaultValue;
      }
      var va = 1, ua = 2, pa = 3, qa = 4, ra = 6, sa = 16, ta = 18;
      function l() {
        this.h = {};
        this.j = this.m().g;
        this.g = this.l = null;
      }
      l.prototype.has = function(a) {
        return m(this, a.g);
      };
      l.prototype.get = function(a, b) {
        return p(this, a.g, b);
      };
      l.prototype.set = function(a, b) {
        q(this, a.g, b);
      };
      l.prototype.add = function(a, b) {
        wa(this, a.g, b);
      };
      function xa(a, b) {
        for (var c = na(a.m()), d = 0; d < c.length; d++) {
          var e = c[d], f = e.g;
          if (m(b, f)) {
            a.g && delete a.g[e.g];
            var g = 11 == e.h || 10 == e.h;
            if (e.l) {
              e = r(b, f);
              for (var k = 0; k < e.length; k++) wa(a, f, g ? e[k].clone() : e[k]);
            } else e = t(b, f), g ? (g = t(a, f)) ? xa(g, e) : q(a, f, e.clone()) : q(a, f, e);
          }
        }
      }
      l.prototype.clone = function() {
        var a = new this.constructor();
        a != this && (a.h = {}, a.g && (a.g = {}), xa(a, this));
        return a;
      };
      function m(a, b) {
        return null != a.h[b];
      }
      function t(a, b) {
        var c = a.h[b];
        if (null == c) return null;
        if (a.l) {
          if (!(b in a.g)) {
            var d = a.l, e = a.j[b];
            if (null != c) if (e.l) {
              for (var f = [], g = 0; g < c.length; g++) f[g] = d.h(e, c[g]);
              c = f;
            } else c = d.h(e, c);
            return a.g[b] = c;
          }
          return a.g[b];
        }
        return c;
      }
      function p(a, b, c) {
        var d = t(a, b);
        return a.j[b].l ? d[c || 0] : d;
      }
      function u(a, b) {
        if (m(a, b)) a = p(a, b);
        else a: {
          a = a.j[b];
          if (void 0 === a.j) if (b = a.s, b === Boolean) a.j = false;
          else if (b === Number) a.j = 0;
          else if (b === String) a.j = a.o ? "0" : "";
          else {
            a = new b();
            break a;
          }
          a = a.j;
        }
        return a;
      }
      function r(a, b) {
        return t(a, b) || [];
      }
      function v(a, b) {
        return a.j[b].l ? m(a, b) ? a.h[b].length : 0 : m(a, b) ? 1 : 0;
      }
      function q(a, b, c) {
        a.h[b] = c;
        a.g && (a.g[b] = c);
      }
      function wa(a, b, c) {
        a.h[b] || (a.h[b] = []);
        a.h[b].push(c);
        a.g && delete a.g[b];
      }
      function x(a, b) {
        var c = [], d;
        for (d in b) 0 != d && c.push(new oa(d, b[d]));
        return new ma(a, c);
      }
      function ya() {
      }
      ya.prototype.g = function(a) {
        new a.h();
        throw Error("Unimplemented");
      };
      ya.prototype.h = function(a, b) {
        if (11 == a.h || 10 == a.h) return b instanceof l ? b : this.g(a.s.prototype.m(), b);
        if (14 == a.h) return "string" === typeof b && za.test(b) && (a = Number(b), 0 < a) ? a : b;
        if (!a.o) return b;
        a = a.s;
        if (a === String) {
          if ("number" === typeof b) return String(b);
        } else if (a === Number && "string" === typeof b && ("Infinity" === b || "-Infinity" === b || "NaN" === b || za.test(b))) return Number(b);
        return b;
      };
      var za = /^-?[0-9]+$/;
      function Aa() {
      }
      h(Aa, ya);
      Aa.prototype.g = function(a, b) {
        a = new a.h();
        a.l = this;
        a.h = b;
        a.g = {};
        return a;
      };
      function y() {
      }
      h(y, Aa);
      y.prototype.h = function(a, b) {
        return 8 == a.h ? !!b : ya.prototype.h.apply(this, arguments);
      };
      y.prototype.g = function(a, b) {
        return y.Fa.g.call(this, a, b);
      };
      function z(a, b) {
        null != a && this.g.apply(this, arguments);
      }
      z.prototype.h = "";
      z.prototype.set = function(a) {
        this.h = "" + a;
      };
      z.prototype.g = function(a, b, c) {
        this.h += String(a);
        if (null != b) for (let d = 1; d < arguments.length; d++) this.h += arguments[d];
        return this;
      };
      function A(a) {
        a.h = "";
      }
      z.prototype.toString = function() {
        return this.h;
      };
      function B() {
        l.call(this);
      }
      h(B, l);
      var Ba = null;
      function C() {
        l.call(this);
      }
      h(C, l);
      var Ca = null;
      function D() {
        l.call(this);
      }
      h(D, l);
      var Da = null;
      D.prototype.ha = function() {
        return p(this, 10);
      };
      B.prototype.m = function() {
        var a = Ba;
        a || (Ba = a = x(B, { 0: { name: "NumberFormat", ma: "i18n.phonenumbers.NumberFormat" }, 1: { name: "pattern", required: true, i: 9, type: String }, 2: { name: "format", required: true, i: 9, type: String }, 3: { name: "leading_digits_pattern", fa: true, i: 9, type: String }, 4: { name: "national_prefix_formatting_rule", i: 9, type: String }, 6: { name: "national_prefix_optional_when_formatting", i: 8, defaultValue: false, type: Boolean }, 5: { name: "domestic_carrier_code_formatting_rule", i: 9, type: String } }));
        return a;
      };
      B.m = B.prototype.m;
      C.prototype.m = function() {
        var a = Ca;
        a || (Ca = a = x(C, { 0: { name: "PhoneNumberDesc", ma: "i18n.phonenumbers.PhoneNumberDesc" }, 2: { name: "national_number_pattern", i: 9, type: String }, 9: { name: "possible_length", fa: true, i: 5, type: Number }, 10: { name: "possible_length_local_only", fa: true, i: 5, type: Number }, 6: { name: "example_number", i: 9, type: String } }));
        return a;
      };
      C.m = C.prototype.m;
      D.prototype.m = function() {
        var a = Da;
        a || (Da = a = x(D, {
          0: { name: "PhoneMetadata", ma: "i18n.phonenumbers.PhoneMetadata" },
          1: { name: "general_desc", i: 11, type: C },
          2: { name: "fixed_line", i: 11, type: C },
          3: { name: "mobile", i: 11, type: C },
          4: { name: "toll_free", i: 11, type: C },
          5: { name: "premium_rate", i: 11, type: C },
          6: { name: "shared_cost", i: 11, type: C },
          7: { name: "personal_number", i: 11, type: C },
          8: { name: "voip", i: 11, type: C },
          21: { name: "pager", i: 11, type: C },
          25: { name: "uan", i: 11, type: C },
          27: { name: "emergency", i: 11, type: C },
          28: { name: "voicemail", i: 11, type: C },
          29: { name: "short_code", i: 11, type: C },
          30: { name: "standard_rate", i: 11, type: C },
          31: { name: "carrier_specific", i: 11, type: C },
          33: { name: "sms_services", i: 11, type: C },
          24: { name: "no_international_dialling", i: 11, type: C },
          9: { name: "id", required: true, i: 9, type: String },
          10: { name: "country_code", i: 5, type: Number },
          11: { name: "international_prefix", i: 9, type: String },
          17: { name: "preferred_international_prefix", i: 9, type: String },
          12: { name: "national_prefix", i: 9, type: String },
          13: { name: "preferred_extn_prefix", i: 9, type: String },
          15: {
            name: "national_prefix_for_parsing",
            i: 9,
            type: String
          },
          16: { name: "national_prefix_transform_rule", i: 9, type: String },
          18: { name: "same_mobile_and_fixed_line_pattern", i: 8, defaultValue: false, type: Boolean },
          19: { name: "number_format", fa: true, i: 11, type: B },
          20: { name: "intl_number_format", fa: true, i: 11, type: B },
          22: { name: "main_country_for_code", i: 8, defaultValue: false, type: Boolean },
          23: { name: "leading_digits", i: 9, type: String }
        }));
        return a;
      };
      D.m = D.prototype.m;
      function E() {
        l.call(this);
      }
      h(E, l);
      var Ea = null;
      E.prototype.ha = function() {
        return p(this, 1);
      };
      var Fa = { Ka: 0, Ja: 1, Ia: 5, Ha: 10, Ga: 20 };
      E.prototype.m = function() {
        var a = Ea;
        a || (Ea = a = x(E, { 0: { name: "PhoneNumber", ma: "i18n.phonenumbers.PhoneNumber" }, 1: { name: "country_code", required: true, i: 5, type: Number }, 2: { name: "national_number", required: true, i: 4, type: Number }, 3: { name: "extension", i: 9, type: String }, 4: { name: "italian_leading_zero", i: 8, type: Boolean }, 8: { name: "number_of_leading_zeros", i: 5, defaultValue: 1, type: Number }, 5: { name: "raw_input", i: 9, type: String }, 6: { name: "country_code_source", i: 14, defaultValue: 0, type: Fa }, 7: {
          name: "preferred_domestic_carrier_code",
          i: 9,
          type: String
        } }));
        return a;
      };
      E.ctor = E;
      E.ctor.m = E.prototype.m;
      var F = {
        1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
        7: ["RU", "KZ"],
        20: ["EG"],
        27: ["ZA"],
        30: ["GR"],
        31: ["NL"],
        32: ["BE"],
        33: ["FR"],
        34: ["ES"],
        36: ["HU"],
        39: ["IT", "VA"],
        40: ["RO"],
        41: ["CH"],
        43: ["AT"],
        44: ["GB", "GG", "IM", "JE"],
        45: ["DK"],
        46: ["SE"],
        47: ["NO", "SJ"],
        48: ["PL"],
        49: ["DE"],
        51: ["PE"],
        52: ["MX"],
        53: ["CU"],
        54: ["AR"],
        55: ["BR"],
        56: ["CL"],
        57: ["CO"],
        58: ["VE"],
        60: ["MY"],
        61: ["AU", "CC", "CX"],
        62: ["ID"],
        63: ["PH"],
        64: ["NZ"],
        65: ["SG"],
        66: ["TH"],
        81: ["JP"],
        82: ["KR"],
        84: ["VN"],
        86: ["CN"],
        90: ["TR"],
        91: ["IN"],
        92: ["PK"],
        93: ["AF"],
        94: ["LK"],
        95: ["MM"],
        98: ["IR"],
        211: ["SS"],
        212: ["MA", "EH"],
        213: ["DZ"],
        216: ["TN"],
        218: ["LY"],
        220: ["GM"],
        221: ["SN"],
        222: ["MR"],
        223: ["ML"],
        224: ["GN"],
        225: ["CI"],
        226: ["BF"],
        227: ["NE"],
        228: ["TG"],
        229: ["BJ"],
        230: ["MU"],
        231: ["LR"],
        232: ["SL"],
        233: ["GH"],
        234: ["NG"],
        235: ["TD"],
        236: ["CF"],
        237: ["CM"],
        238: ["CV"],
        239: ["ST"],
        240: ["GQ"],
        241: ["GA"],
        242: ["CG"],
        243: ["CD"],
        244: ["AO"],
        245: ["GW"],
        246: ["IO"],
        247: ["AC"],
        248: ["SC"],
        249: ["SD"],
        250: ["RW"],
        251: ["ET"],
        252: ["SO"],
        253: ["DJ"],
        254: ["KE"],
        255: ["TZ"],
        256: ["UG"],
        257: ["BI"],
        258: ["MZ"],
        260: ["ZM"],
        261: ["MG"],
        262: ["RE", "YT"],
        263: ["ZW"],
        264: ["NA"],
        265: ["MW"],
        266: ["LS"],
        267: ["BW"],
        268: ["SZ"],
        269: ["KM"],
        290: ["SH", "TA"],
        291: ["ER"],
        297: ["AW"],
        298: ["FO"],
        299: ["GL"],
        350: ["GI"],
        351: ["PT"],
        352: ["LU"],
        353: ["IE"],
        354: ["IS"],
        355: ["AL"],
        356: ["MT"],
        357: ["CY"],
        358: ["FI", "AX"],
        359: ["BG"],
        370: ["LT"],
        371: ["LV"],
        372: ["EE"],
        373: ["MD"],
        374: ["AM"],
        375: ["BY"],
        376: ["AD"],
        377: ["MC"],
        378: ["SM"],
        380: ["UA"],
        381: ["RS"],
        382: ["ME"],
        383: ["XK"],
        385: ["HR"],
        386: ["SI"],
        387: ["BA"],
        389: ["MK"],
        420: ["CZ"],
        421: ["SK"],
        423: ["LI"],
        500: ["FK"],
        501: ["BZ"],
        502: ["GT"],
        503: ["SV"],
        504: ["HN"],
        505: ["NI"],
        506: ["CR"],
        507: ["PA"],
        508: ["PM"],
        509: ["HT"],
        590: ["GP", "BL", "MF"],
        591: ["BO"],
        592: ["GY"],
        593: ["EC"],
        594: ["GF"],
        595: ["PY"],
        596: ["MQ"],
        597: ["SR"],
        598: ["UY"],
        599: ["CW", "BQ"],
        670: ["TL"],
        672: ["NF"],
        673: ["BN"],
        674: ["NR"],
        675: ["PG"],
        676: ["TO"],
        677: ["SB"],
        678: ["VU"],
        679: ["FJ"],
        680: ["PW"],
        681: ["WF"],
        682: ["CK"],
        683: ["NU"],
        685: ["WS"],
        686: ["KI"],
        687: ["NC"],
        688: ["TV"],
        689: ["PF"],
        690: ["TK"],
        691: ["FM"],
        692: ["MH"],
        800: ["001"],
        808: ["001"],
        850: ["KP"],
        852: ["HK"],
        853: ["MO"],
        855: ["KH"],
        856: ["LA"],
        870: ["001"],
        878: ["001"],
        880: ["BD"],
        881: ["001"],
        882: ["001"],
        883: ["001"],
        886: ["TW"],
        888: ["001"],
        960: ["MV"],
        961: ["LB"],
        962: ["JO"],
        963: ["SY"],
        964: ["IQ"],
        965: ["KW"],
        966: ["SA"],
        967: ["YE"],
        968: ["OM"],
        970: ["PS"],
        971: ["AE"],
        972: ["IL"],
        973: ["BH"],
        974: ["QA"],
        975: ["BT"],
        976: ["MN"],
        977: ["NP"],
        979: ["001"],
        992: ["TJ"],
        993: ["TM"],
        994: ["AZ"],
        995: ["GE"],
        996: ["KG"],
        998: ["UZ"]
      }, Ga = {
        AC: [, [
          ,
          ,
          "(?:[01589]\\d|[46])\\d{4}",
          ,
          ,
          ,
          ,
          ,
          ,
          [5, 6]
        ], [, , "6[2-467]\\d{3}", , , , "62889", , , [5]], [, , "4\\d{4}", , , , "40123", , , [5]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "AC", 247, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "(?:0[1-9]|[1589]\\d)\\d{4}", , , , "542011", , , [6]], , , [, , , , , , , , , [-1]]],
        AD: [
          ,
          [, , "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", , , , , , , [6, 8, 9]],
          [, , "[78]\\d{5}", , , , "712345", , , [6]],
          [, , "690\\d{6}|[356]\\d{5}", , , , "312345", , , [6, 9]],
          [, , "180[02]\\d{4}", , , , "18001234", , , [8]],
          [, , "[19]\\d{5}", , , , "912345", , , [6]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "AD",
          376,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["1"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , "1800\\d{4}", , , , , , , [8]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        AE: [
          ,
          [, , "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", , , , , , , [5, 6, 7, 8, 9, 10, 11, 12]],
          [, , "[2-4679][2-8]\\d{6}", , , , "22345678", , , [8], [7]],
          [, , "5[024-68]\\d{7}", , , , "501234567", , , [9]],
          [, , "400\\d{6}|800\\d{2,9}", , , , "800123456"],
          [, , "900[02]\\d{5}", , , , "900234567", , , [9]],
          [, , "700[05]\\d{5}", , , , "700012345", , , [9]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "AE",
          971,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], [, "(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , "600[25]\\d{5}", , , , "600212345", , , [9]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        AF: [, [, , "[2-7]\\d{8}", , , , , , , [9], [7]], [
          ,
          ,
          "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}",
          ,
          ,
          ,
          "234567890",
          ,
          ,
          ,
          [7]
        ], [, , "7\\d{8}", , , , "701234567", , , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "AF", 93, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[1-9]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        AG: [
          ,
          [, , "(?:268|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]],
          [
            ,
            ,
            "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",
            ,
            ,
            ,
            "2684601234",
            ,
            ,
            ,
            [7]
          ],
          [, , "268(?:464|7(?:1[3-9]|[28]\\d|3[0246]|64|7[0-689]))\\d{4}", , , , "2684641234", , , , [7]],
          [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
          [, , "900[2-9]\\d{6}", , , , "9002123456"],
          [, , , , , , , , , [-1]],
          [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
          [, , "26848[01]\\d{4}", , , , "2684801234", , , , [7]],
          "AG",
          1,
          "011",
          "1",
          ,
          ,
          "([457]\\d{6})$|1",
          "268$1",
          ,
          ,
          ,
          ,
          [, , "26840[69]\\d{4}", , , , "2684061234", , , , [7]],
          ,
          "268",
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        AI: [, [, , "(?:264|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "264(?:292|4(?:6[12]|9[78]))\\d{4}", , , , "2644612345", , , , [7]], [, , "264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", , , , "2642351234", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [
          ,
          ,
          "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
          ,
          ,
          ,
          "5002345678"
        ], [, , , , , , , , , [-1]], "AI", 1, "011", "1", , , "([2457]\\d{6})$|1", "264$1", , , , , [, , "264724\\d{4}", , , , "2647241234", , , , [7]], , "264", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        AL: [, [, , "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", , , , , , , [6, 7, 8, 9], [5]], [, , "4505[0-2]\\d{3}|(?:[2358][16-9]\\d[2-9]|4410)\\d{4}|(?:[2358][2-5][2-9]|4(?:[2-57-9][2-9]|6\\d))\\d{5}", , , , "22345678", , , [8], [5, 6, 7]], [, , "6(?:[78][2-9]|9\\d)\\d{6}", , , , "672123456", , , [9]], [, , "800\\d{4}", , , , "8001234", , , [7]], [
          ,
          ,
          "900[1-9]\\d\\d",
          ,
          ,
          ,
          "900123",
          ,
          ,
          [6]
        ], [, , "808[1-9]\\d\\d", , , , "808123", , , [6]], [, , "700[2-9]\\d{4}", , , , "70021234", , , [8]], [, , , , , , , , , [-1]], "AL", 355, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        AM: [, [
          ,
          ,
          "(?:[1-489]\\d|55|60|77)\\d{6}",
          ,
          ,
          ,
          ,
          ,
          ,
          [8],
          [5, 6]
        ], [, , "(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}", , , , "10123456", , , , [5, 6]], [, , "(?:33|4[1349]|55|77|88|9[13-9])\\d{6}", , , , "77123456"], [, , "800\\d{5}", , , , "80012345"], [, , "90[016]\\d{5}", , , , "90012345"], [, , "80[1-4]\\d{5}", , , , "80112345"], [, , , , , , , , , [-1]], [, , "60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|9[0-2])\\d{4}", , , , "60271234"], "AM", 374, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], [
          ,
          "(\\d{3})(\\d{5})",
          "$1 $2",
          ["2|3[12]"],
          "(0$1)"
        ], [, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        AO: [
          ,
          [, , "[29]\\d{8}", , , , , , , [9]],
          [, , "2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}", , , , "222123456"],
          [, , "9[1-79]\\d{7}", , , , "923123456"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "AO",
          244,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        AR: [
          ,
          [, , "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", , , , , , , [10, 11], [6, 7, 8]],
          [
            ,
            ,
            "3(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|47[35]|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:657|9(?:54|66))|3(?:48[27]|7(?:55|77)|8(?:65|78)))[2-8]\\d{5}|(?:2(?:284|3(?:02|23)|477|622|920)|3(?:4(?:46|89|92)|541))[2-7]\\d{5}|(?:(?:11[1-8]|670)\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-8]|[25][4-6]|3[3-6]|84)|5(?:1[2-9]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-7]|3[4-6]|5[3-6]|7[2-6]|8[3-68])))\\d{6}|(?:2(?:2(?:62|81)|320|9(?:42|83))|3(?:329|4(?:62|7[16])|5(?:43|64)|7(?:18|5[17])))[2-6]\\d{5}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:257|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|64)|5(?:25|37|4[47]|71)|7(?:35|72)|825))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[035-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[14]|4[13]|5[468]|7[3-5]|8[26])|8(?:2[67]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",
            ,
            ,
            ,
            "1123456789",
            ,
            ,
            [10],
            [6, 7, 8]
          ],
          [
            ,
            ,
            "93(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|47[35]|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:657|9(?:54|66))|3(?:48[27]|7(?:55|77)|8(?:65|78)))[2-8]\\d{5}|9(?:2(?:284|3(?:02|23)|477|622|920)|3(?:4(?:46|89|92)|541))[2-7]\\d{5}|(?:675\\d|9(?:11[1-8]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-8]|[25][4-6]|3[3-6]|84)|5(?:1[2-9]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-7]|3[4-6]|5[3-6]|7[2-6]|8[3-68]))))\\d{6}|9(?:2(?:2(?:62|81)|320|9(?:42|83))|3(?:329|4(?:62|7[16])|5(?:43|64)|7(?:18|5[17])))[2-6]\\d{5}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:257|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|64)|5(?:25|37|4[47]|71)|7(?:35|72)|825))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[035-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[14]|4[13]|5[468]|7[3-5]|8[26])|8(?:2[67]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",
            ,
            ,
            ,
            "91123456789",
            ,
            ,
            ,
            [6, 7, 8]
          ],
          [, , "800\\d{7,8}", , , , "8001234567"],
          [, , "60[04579]\\d{7}", , , , "6001234567", , , [10]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "AR",
          54,
          "00",
          "0",
          ,
          ,
          "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
          "9$1",
          ,
          ,
          [[, "(\\d{3})", "$1", ["0|1(?:0[0-35-7]|1[02-5]|2[015]|3[47]|4[478])|911"]], [, "(\\d{2})(\\d{4})", "$1-$2", ["[1-9]"]], [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["[1-8]"]], [
            ,
            "(\\d{4})(\\d{2})(\\d{4})",
            "$1 $2-$3",
            [
              "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
              "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
              "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
              "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
            ],
            "0$1",
            ,
            1
          ], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1], [
            ,
            "(\\d)(\\d{4})(\\d{2})(\\d{4})",
            "$2 15-$3-$4",
            [
              "9(?:2[2-469]|3[3-578])",
              "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
              "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
              "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
              "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
            ],
            "0$1"
          ], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1"]],
          [
            [
              ,
              "(\\d{4})(\\d{2})(\\d{4})",
              "$1 $2-$3",
              [
                "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
                "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
                "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
              ],
              "0$1",
              ,
              1
            ],
            [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1],
            [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1],
            [, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", [
              "9(?:2[2-469]|3[3-578])",
              "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
              "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
              "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
              "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
            ]],
            [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["91"]],
            [, "(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
            [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9"]]
          ],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , "810\\d{7}", , , , , , , [10]],
          [, , "810\\d{7}", , , , "8101234567", , , [10]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        AS: [, [, , "(?:[58]\\d\\d|684|900)\\d{7}", , , , , , , [10], [7]], [, , "6846(?:22|33|44|55|77|88|9[19])\\d{4}", , , , "6846221234", , , , [7]], [, , "684(?:2(?:48|5[2468]|7[26])|7(?:3[13]|70|82))\\d{4}", , , , "6847331234", , , , [7]], [
          ,
          ,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          ,
          ,
          ,
          "8002123456"
        ], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "AS", 1, "011", "1", , , "([267]\\d{6})$|1", "684$1", , , , , [, , , , , , , , , [-1]], , "684", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        AT: [, [
          ,
          ,
          "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
          ,
          ,
          ,
          ,
          ,
          ,
          [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          [3]
        ], [, , "1(?:11\\d|[2-9]\\d{3,11})|(?:316|463)\\d{3,10}|648[34]\\d{3,9}|(?:51|66|73)2\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-7]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}", , , , "1234567890", , , , [3]], [
          ,
          ,
          "6(?:485|(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d)\\d{3,9}",
          ,
          ,
          ,
          "664123456",
          ,
          ,
          [7, 8, 9, 10, 11, 12, 13]
        ], [, , "800\\d{6,10}", , , , "800123456", , , [9, 10, 11, 12, 13]], [, , "(?:8[69][2-68]|9(?:0[01]|3[019]))\\d{6,10}", , , , "900123456", , , [9, 10, 11, 12, 13]], [, , "8(?:10|2[018])\\d{6,10}|828\\d{5}", , , , "810123456", , , [8, 9, 10, 11, 12, 13]], [, , , , , , , , , [-1]], [, , "5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}", , , , "780123456", , , [5, 6, 7, 8, 9, 10, 11, 12, 13]], "AT", 43, "00", "0", , , "0", , , , [[, "(\\d{4})", "$1", ["14"]], [, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], [
          ,
          "(\\d{2})(\\d{3,5})",
          "$1 $2",
          ["5[079]"],
          "0$1"
        ], [, "(\\d{6})", "$1", ["[18]"]], [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], [[, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], [
          ,
          "(\\d{2})(\\d{3,5})",
          "$1 $2",
          ["5[079]"],
          "0$1"
        ], [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        AU: [
          ,
          [
            ,
            ,
            "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
            ,
            ,
            ,
            ,
            ,
            ,
            [5, 6, 7, 8, 9, 10, 12]
          ],
          [
            ,
            ,
            "(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",
            ,
            ,
            ,
            "212345678",
            ,
            ,
            [9],
            [8]
          ],
          [, , "4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", , , , "412345678", , , [9]],
          [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
          [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
          [, , "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", , , , "1300123456", , , [6, 8, 10, 12]],
          [, , , , , , , , , [-1]],
          [, , "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", , , , "147101234", , , [9]],
          "AU",
          61,
          "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
          "0",
          ,
          ,
          "(183[12])|0",
          ,
          "0011",
          ,
          [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["13"]], [, "(\\d{3})(\\d{3})", "$1 $2", ["19"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["180", "1802"]], [, "(\\d{4})(\\d{3,4})", "$1 $2", ["19"]], [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "$CC ($1)"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]], [, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["130"]]],
          [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "$CC ($1)"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]],
          [, , "163\\d{2,6}", , , , "1631234", , , [5, 6, 7, 8, 9]],
          1,
          ,
          [, , "1(?:3(?:00\\d{5}|45[0-4])|802)\\d{3}|1[38]00\\d{6}|13\\d{4}", , , , , , , [6, 7, 8, 10, 12]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        AW: [
          ,
          [, , "(?:[25-79]\\d\\d|800)\\d{4}", , , , , , , [7]],
          [, , "5(?:2\\d|8[1-9])\\d{4}", , , , "5212345"],
          [, , "(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}", , , , "5601234"],
          [, , "800\\d{4}", , , , "8001234"],
          [, , "900\\d{4}", , , , "9001234"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "(?:28\\d|501)\\d{4}", , , , "5011234"],
          "AW",
          297,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        AX: [, [
          ,
          ,
          "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
          ,
          ,
          ,
          ,
          ,
          ,
          [5, 6, 7, 8, 9, 10, 11, 12]
        ], [, , "18[1-8]\\d{3,6}", , , , "181234567", , , [6, 7, 8, 9]], [, , "4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10]], [, , "800\\d{4,6}", , , , "800123456", , , [7, 8, 9]], [, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "AX", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", , , "0", , "00", , , , [, , , , , , , , , [-1]], , "18", [, , , , , , , , , [-1]], [
          ,
          ,
          "20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}",
          ,
          ,
          ,
          "10112345"
        ], , , [, , , , , , , , , [-1]]],
        AZ: [, [, , "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", , , , , , , [9], [7]], [, , "(?:2[12]428|3655[02])\\d{4}|(?:2(?:22[0-79]|63[0-28])|3654)\\d{5}|(?:(?:1[28]|46)\\d|2(?:[014-6]2|[23]3))\\d{6}", , , , "123123456", , , , [7]], [, , "36554\\d{4}|(?:[16]0|4[04]|5[015]|7[07]|99)\\d{7}", , , , "401234567"], [, , "88\\d{7}", , , , "881234567"], [, , "900200\\d{3}", , , , "900200123"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "AZ", 994, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[1-9]"]], [
          ,
          "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["90"],
          "0$1"
        ], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], [
          ,
          "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["[13-9]"],
          "0$1"
        ]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        BA: [
          ,
          [, , "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", , , , , , , [8, 9], [6]],
          [, , "(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", , , , "30212345", , , [8], [6]],
          [, , "6040\\d{5}|6(?:03|[1-356]|44|7\\d)\\d{6}", , , , "61123456"],
          [, , "8[08]\\d{6}", , , , "80123456", , , [8]],
          [, , "9[0246]\\d{6}", , , , "90123456", , , [8]],
          [, , "8[12]\\d{6}", , , , "82123456", , , [8]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "BA",
          387,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{3})", "$1-$2", ["[2-9]"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]],
          [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , "703[235]0\\d{3}|70(?:2[0-5]|3[0146]|[56]0)\\d{4}", , , , "70341234", , , [8]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        BB: [, [, , "(?:246|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "246521[0369]\\d{3}|246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}", , , , "2464123456", , , , [7]], [, , "246(?:(?:2(?:[3568]\\d|4[0-57-9])|3(?:5[2-9]|6[0-6])|4(?:46|5\\d)|69[5-7]|8(?:[2-5]\\d|83))\\d|52(?:1[147]|20))\\d{3}", , , , "2462501234", , , , [7]], [
          ,
          ,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          ,
          ,
          ,
          "8002123456"
        ], [, , "(?:246976|900[2-9]\\d\\d)\\d{4}", , , , "9002123456", , , , [7]], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , "24631\\d{5}", , , , "2463101234", , , , [7]], "BB", 1, "011", "1", , , "([2-9]\\d{6})$|1", "246$1", , , , , [, , , , , , , , , [-1]], , "246", [, , , , , , , , , [-1]], [
          ,
          ,
          "246(?:292|367|4(?:1[7-9]|3[01]|4[47-9]|67)|7(?:1[2-9]|2\\d|3[016]|53))\\d{4}",
          ,
          ,
          ,
          "2464301234",
          ,
          ,
          ,
          [7]
        ], , , [, , , , , , , , , [-1]]],
        BD: [, [, , "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", , , , , , , [6, 7, 8, 9, 10]], [
          ,
          ,
          "(?:4(?:31\\d\\d|423)|5222)\\d{3}(?:\\d{2})?|8332[6-9]\\d\\d|(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:3(?:42[47]|529|823)|4(?:027|525|65(?:28|8))|562|6257|7(?:1(?:5[3-5]|6[12]|7[156]|89)|22[589]56|32|42675|52(?:[25689](?:56|8)|[347]8)|71(?:6[1267]|75|89)|92374)|82(?:2[59]|32)56|9(?:03[23]56|23(?:256|373)|31|5(?:1|2[4589]56)))\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0136-9]|7[0-7]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|181|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|7(?:22[57-9]|42[56]|82[35])8|8(?:0[124-9]|2(?:181|2[02-4679]8)|4[12]|[5-7]2)|9(?:[04]2|2(?:2|328)|81))\\d{4}|(?:2(?:[23]\\d|[45])\\d\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:2[35]|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[35-79]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}",
          ,
          ,
          ,
          "27111234"
        ], [, , "(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}", , , , "1812345678", , , [10]], [, , "80[03]\\d{7}", , , , "8001234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "96(?:0[469]|1[0-47]|3[389]|43|6[69]|7[78])\\d{6}", , , , "9604123456", , , [10]], "BD", 880, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], [
          ,
          "(\\d{3})(\\d{3,7})",
          "$1-$2",
          ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],
          "0$1"
        ], [, "(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], [, "(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        BE: [, [, , "4\\d{8}|[1-9]\\d{7}", , , , , , , [8, 9]], [, , "80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}", , , , "12345678", , , [8]], [, , "4[5-9]\\d{7}", , , , "470123456", , , [9]], [, , "800[1-9]\\d{4}", , , , "80012345", , , [8]], [, , "(?:70(?:2[0-57]|3[04-7]|44|6[04-69]|7[0579])|90\\d\\d)\\d{4}", , , , "90012345", , , [8]], [
          ,
          ,
          "7879\\d{4}",
          ,
          ,
          ,
          "78791234",
          ,
          ,
          [8]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BE", 32, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "78(?:0[578]|1[014-8]|2[25]|3[15-8]|48|5[05]|60|7[06-8]|9\\d)\\d{4}", , , , "78102345", , , [8]], , , [, , , , , , , , , [-1]]],
        BF: [, [
          ,
          ,
          "[025-7]\\d{7}",
          ,
          ,
          ,
          ,
          ,
          ,
          [8]
        ], [, , "2(?:0(?:49|5[23]|6[5-7]|9[016-9])|4(?:4[569]|5[4-6]|6[5-7]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}", , , , "20491234"], [, , "(?:0[1-7]|5[0-8]|[67]\\d)\\d{6}", , , , "70123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BF", 226, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        BG: [, [, , "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", , , , , , , [
          6,
          7,
          8,
          9,
          12
        ], [4, 5]], [, , "2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}", , , , "2123456", , , [6, 7, 8], [4, 5]], [, , "(?:43[07-9]|99[69]\\d)\\d{5}|(?:8[7-9]|98)\\d{7}", , , , "43012345", , , [8, 9]], [, , "(?:00800\\d\\d|800)\\d{5}", , , , "80012345", , , [8, 12]], [, , "90\\d{6}", , , , "90123456", , , [8]], [, , "700\\d{5}", , , , "70012345", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BG", 359, "00", "0", , , "0", , , , [[, "(\\d{6})", "$1", ["1"]], [, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], [
          ,
          "(\\d{3})(\\d{4})",
          "$1 $2",
          ["43[1-6]|70[1-9]"],
          "0$1"
        ], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], [[, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], [
          ,
          "(\\d{3})(\\d{4})",
          "$1 $2",
          ["43[1-6]|70[1-9]"],
          "0$1"
        ], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        BH: [
          ,
          [
            ,
            ,
            "[136-9]\\d{7}",
            ,
            ,
            ,
            ,
            ,
            ,
            [8]
          ],
          [, , "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|55|7[7-9]|88)|9[69][69])|7(?:[07]\\d\\d|1(?:11|78)))\\d{4}", , , , "17001234"],
          [, , "(?:3(?:[0-79]\\d|8[0-57-9])\\d|6(?:3(?:00|33|6[16])|441|6(?:3[03-9]|[69]\\d|7[0-689])))\\d{4}", , , , "36001234"],
          [, , "8[02369]\\d{6}", , , , "80123456"],
          [, , "(?:87|9[0-8])\\d{6}", , , , "90123456"],
          [, , "84\\d{6}", , , , "84123456"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "BH",
          973,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        BI: [, [, , "(?:[267]\\d|31)\\d{6}", , , , , , , [8]], [, , "(?:22|31)\\d{6}", , , , "22201234"], [, , "64[0-2]\\d{5}|(?:29|[67][125-9])\\d{6}", , , , "79561234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BI", 257, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        BJ: [, [, , "(?:01\\d|[24-689])\\d{7}", , , , , , , [8, 10]], [
          ,
          ,
          "2090\\d{4}|(?:012\\d\\d|2(?:02|1[037]|2[45]|3[68]|4\\d))\\d{5}",
          ,
          ,
          ,
          "0120211234"
        ], [, , "(?:01(?:2[5-9]|[4-69]\\d)|4[0-8]|[56]\\d|9[013-9])\\d{6}", , , , "0195123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "857[58]\\d{4}", , , , "85751234", , , [8]], "BJ", 229, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "81\\d{6}", , , , "81123456", , , [8]], , , [, , , , , , , , , [-1]]],
        BL: [, [
          ,
          ,
          "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",
          ,
          ,
          ,
          ,
          ,
          ,
          [9]
        ], [, , "590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}", , , , "590271234"], [, , "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}", , , , "690001234"], [, , "80[0-5]\\d{6}", , , , "800012345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}", , , , "976012345"], "BL", 590, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        BM: [
          ,
          [, , "(?:441|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]],
          [
            ,
            ,
            "441(?:[46]\\d\\d|5(?:4\\d|60|89))\\d{4}",
            ,
            ,
            ,
            "4414123456",
            ,
            ,
            ,
            [7]
          ],
          [, , "441(?:[2378]\\d|5[0-39]|9[02])\\d{5}", , , , "4413701234", , , , [7]],
          [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
          [, , "900[2-9]\\d{6}", , , , "9002123456"],
          [, , , , , , , , , [-1]],
          [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
          [, , , , , , , , , [-1]],
          "BM",
          1,
          "011",
          "1",
          ,
          ,
          "([2-9]\\d{6})$|1",
          "441$1",
          ,
          ,
          ,
          ,
          [, , , , , , , , , [-1]],
          ,
          "441",
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        BN: [, [, , "[2-578]\\d{6}", , , , , , , [7]], [, , "22[0-7]\\d{4}|(?:2[013-9]|[34]\\d|5[0-25-9])\\d{5}", , , , "2345678"], [, , "(?:22[89]|[78]\\d\\d)\\d{4}", , , , "7123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "5[34]\\d{5}", , , , "5345678"], "BN", 673, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        BO: [, [
          ,
          ,
          "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}",
          ,
          ,
          ,
          ,
          ,
          ,
          [8, 9],
          [7]
        ], [, , "(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}", , , , "22123456", , , [8], [7]], [, , "[67]\\d{7}", , , , "71234567", , , [8]], [, , "8001[07]\\d{4}", , , , "800171234", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "50\\d{6}", , , , "50123456", , , [8], [7]], "BO", 591, "00(?:1\\d)?", "0", , , "0(1\\d)?", , , , [[
          ,
          "(\\d)(\\d{7})",
          "$1 $2",
          ["[235]|4[46]"],
          ,
          "0$CC $1"
        ], [, "(\\d{8})", "$1", ["[67]"], , "0$CC $1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"], , "0$CC $1"]], , [, , , , , , , , , [-1]], , , [, , "8001[07]\\d{4}", , , , , , , [9]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        BQ: [
          ,
          [, , "(?:[34]1|7\\d)\\d{5}", , , , , , , [7]],
          [, , "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|2[05]|50)\\d)\\d{3}", , , , "7151234"],
          [, , "(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}", , , , "3181234"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "BQ",
          599,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , , , , , , , , [-1]],
          ,
          "[347]",
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        BR: [, [, , "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", , , , , , , [8, 9, 10, 11]], [, , "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", , , , "1123456789", , , [10], [8]], [, , "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}", , , , "11961234567", , , [10, 11], [8, 9]], [, , "800\\d{6,7}", , , , "800123456", , , [9, 10]], [, , "[59]00\\d{6,7}", , , , "500123456", , , [9, 10]], [
          ,
          ,
          "(?:30[03]\\d{3}|4(?:0(?:0\\d|20)|370|864))\\d{4}|300\\d{5}",
          ,
          ,
          ,
          "40041234",
          ,
          ,
          [8, 10]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0", , , "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", , , [[, "(\\d{3,6})", "$1", ["1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])|321|610"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["[2-57]", "[2357]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]], [
          ,
          "(\\d{3})(\\d{2,3})(\\d{4})",
          "$1 $2 $3",
          ["(?:[358]|90)0"],
          "0$1"
        ], [, "(\\d{5})(\\d{4})", "$1-$2", ["9"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)", "0 $CC ($1)"], [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)", "0 $CC ($1)"]], [[, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], [, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], [
          ,
          "(\\d{2})(\\d{4})(\\d{4})",
          "$1 $2-$3",
          ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],
          "($1)",
          "0 $CC ($1)"
        ], [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)", "0 $CC ($1)"]], [, , , , , , , , , [-1]], , , [, , "(?:30[03]\\d{3}|4(?:0(?:0\\d|20)|864))\\d{4}|800\\d{6,7}|300\\d{5}", , , , , , , [8, 9, 10]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        BS: [, [, , "(?:242|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-5]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}", , , , "2423456789", , , , [7]], [
          ,
          ,
          "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|3[0-4]|[89]9))\\d{4}",
          ,
          ,
          ,
          "2423591234",
          ,
          ,
          ,
          [7]
        ], [, , "242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456", , , , [7]], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "BS", 1, "011", "1", , , "([3-8]\\d{6})$|1", "242$1", , , , , [, , , , , , , , , [-1]], , "242", [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], [, , "242225\\d{4}", , , , "2422250123"], , , [, , , , , , , , , [-1]]],
        BT: [
          ,
          [, , "[17]\\d{7}|[2-8]\\d{6}", , , , , , , [7, 8], [6]],
          [, , "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", , , , "2345678", , , [7], [6]],
          [, , "(?:1[67]|77)\\d{6}", , , , "17123456", , , [8]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "BT",
          975,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{3})", "$1 $2", ["[2-7]"]], [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]],
          [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        BW: [, [, , "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", , , , , , , [7, 8, 10]], [, , "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013]|81)|4(?:6[03]|7[1267]|9[0-5])|5(?:3[03489]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[013467]))\\d{4}", , , , "2401234", , , [7]], [
          ,
          ,
          "(?:321|7[1-8]\\d)\\d{5}",
          ,
          ,
          ,
          "71123456",
          ,
          ,
          [8]
        ], [, , "(?:0800|800\\d)\\d{6}", , , , "0800012345", , , [10]], [, , "90\\d{5}", , , , "9012345", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "79(?:1(?:[0-2]\\d|3[0-3])|2[0-7]\\d)\\d{3}", , , , "79101234", , , [8]], "BW", 267, "00", , , , , , , , [[, "(\\d{2})(\\d{5})", "$1 $2", ["90"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        BY: [, [, , "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", , , , , , , [6, 7, 8, 9, 10, 11], [5]], [, , "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", , , , "152450911", , , [9], [5, 6, 7]], [, , "(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}", , , , "294911911", , , [9]], [
          ,
          ,
          "800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}",
          ,
          ,
          ,
          "8011234567"
        ], [, , "(?:810|902)\\d{7}", , , , "9021234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "249\\d{6}", , , , "249123456", , , [9]], "BY", 375, "810", "8", , , "0|80?", , "8~10", , [[, "(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], [, "(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], [, "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], [
          ,
          "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2-$3-$4",
          ["1(?:[56]|7[467])|2[1-3]"],
          "8 0$1"
        ], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], , [, , , , , , , , , [-1]], , , [, , "800\\d{3,7}|(?:8(?:0[13]|10|20\\d)|902)\\d{7}"], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        BZ: [, [, , "(?:0800\\d|[2-8])\\d{6}", , , , , , , [7, 11]], [, , "(?:2(?:[02]\\d|36|[68]0)|[3-58](?:[02]\\d|[68]0)|7(?:[02]\\d|32|[68]0))\\d{4}", , , , "2221234", , , [7]], [, , "6[0-35-7]\\d{5}", , , , "6221234", , , [7]], [
          ,
          ,
          "0800\\d{7}",
          ,
          ,
          ,
          "08001234123",
          ,
          ,
          [11]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BZ", 501, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], [, "(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CA: [, [, , "[2-9]\\d{9}|3\\d{6}", , , , , , , [7, 10]], [
          ,
          ,
          "(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}",
          ,
          ,
          ,
          "5062345678",
          ,
          ,
          [10],
          [7]
        ], [, , "(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", , , , "5062345678", , , [10], [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456", , , [10]], [, , "900[2-9]\\d{6}", , , , "9002123456", , , [10]], [, , , , , , , , , [-1]], [
          ,
          ,
          "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}",
          ,
          ,
          ,
          "5219023456",
          ,
          ,
          [10]
        ], [, , "600[2-9]\\d{6}", , , , "6002012345", , , [10]], "CA", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "310\\d{4}", , , , "3101234", , , [7]], , , [, , , , , , , , , [-1]]],
        CC: [, [, , "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", , , , , , , [6, 7, 8, 9, 10, 12]], [, , "8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", , , , "891621234", , , [9], [8]], [
          ,
          ,
          "4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
          ,
          ,
          ,
          "412345678",
          ,
          ,
          [9]
        ], [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]], [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]], [, , "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", , , , "1300123456", , , [6, 8, 10, 12]], [, , , , , , , , , [-1]], [, , "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", , , , "147101234", , , [9]], "CC", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "([59]\\d{7})$|0", "8$1", "0011", , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CD: [, [
          ,
          ,
          "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}",
          ,
          ,
          ,
          ,
          ,
          ,
          [7, 8, 9, 10]
        ], [, , "(?:(?:12|573)\\d\\d|276)\\d{5}|[1-6]\\d{6}", , , , "1234567"], [, , "88\\d{5}|(?:8[0-69]|9[017-9])\\d{7}", , , , "991234567", , , [7, 9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CD", 243, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], [, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [
          ,
          "(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["[89]"],
          "0$1"
        ], [, "(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CF: [, [, , "(?:[27]\\d{3}|8776)\\d{4}", , , , , , , [8]], [, , "2[12]\\d{6}", , , , "21612345"], [, , "7[024-7]\\d{6}", , , , "70012345"], [, , , , , , , , , [-1]], [, , "8776\\d{4}", , , , "87761234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CF", 236, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CG: [, [, , "222\\d{6}|(?:0\\d|80)\\d{7}", , , , , , , [9]], [, , "222[1-589]\\d{5}", , , , "222123456"], [, , "026(?:1[0-5]|6[6-9])\\d{4}|0(?:[14-6]\\d\\d|2(?:40|5[5-8]|6[07-9]))\\d{5}", , , , "061234567"], [, , , , , , , , , [-1]], [, , "80[0-2]\\d{6}", , , , "800123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CG", 242, "00", , , , , , , , [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CH: [, [
          ,
          ,
          "8\\d{11}|[2-9]\\d{8}",
          ,
          ,
          ,
          ,
          ,
          ,
          [9, 12]
        ], [, , "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", , , , "212345678", , , [9]], [, , "(?:6[89]|7[235-9])\\d{7}", , , , "781234567", , , [9]], [, , "800\\d{6}", , , , "800123456", , , [9]], [, , "90[016]\\d{6}", , , , "900123456", , , [9]], [, , "84[0248]\\d{6}", , , , "840123456", , , [9]], [, , "878\\d{6}", , , , "878123456", , , [9]], [, , , , , , , , , [-1]], "CH", 41, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], [
          ,
          "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4 $5",
          ["8"],
          "0$1"
        ]], , [, , "74[0248]\\d{6}", , , , "740123456", , , [9]], , , [, , , , , , , , , [-1]], [, , "5[18]\\d{7}", , , , "581234567", , , [9]], , , [, , "860\\d{9}", , , , "860123456789", , , [12]]],
        CI: [, [, , "[02]\\d{9}", , , , , , , [10]], [, , "2(?:[15]\\d{3}|7(?:2(?:0[23]|1[2357]|2[245]|3[45]|4[3-5])|3(?:06|1[69]|[2-6]7)))\\d{5}", , , , "2123456789"], [, , "0[157]\\d{8}", , , , "0123456789"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CI", 225, "00", , , , , , , , [[
          ,
          "(\\d{2})(\\d{2})(\\d)(\\d{5})",
          "$1 $2 $3 $4",
          ["2"]
        ], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CK: [, [, , "[2-578]\\d{4}", , , , , , , [5]], [, , "(?:2\\d|3[13-7]|4[1-5])\\d{3}", , , , "21234"], [, , "[578]\\d{4}", , , , "71234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CK", 682, "00", , , , , , , , [[, "(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CL: [, [
          ,
          ,
          "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",
          ,
          ,
          ,
          ,
          ,
          ,
          [9, 10, 11]
        ], [, , "2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[03467]\\d|1[0-35-9]|2[1-9]|5[0-24-9]|8[0-3])|600)|646[59])|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}", , , , "221234567", , , [9]], [
          ,
          ,
          "2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[03467]\\d|1[0-35-9]|2[1-9]|5[0-24-9]|8[0-3])|600)|646[59])|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}",
          ,
          ,
          ,
          "221234567",
          ,
          ,
          [9]
        ], [, , "(?:123|8)00\\d{6}", , , , "800123456", , , [9, 11]], [, , , , , , , , , [-1]], [, , "600\\d{7,8}", , , , "6001234567", , , [10, 11]], [, , , , , , , , , [-1]], [, , "44\\d{7}", , , , "441234567", , , [9]], "CL", 56, "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", , , , , , , 1, [
          [, "(\\d{4})", "$1", ["1(?:[03-589]|21)|[29]0|78"]],
          [, "(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
          [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
          [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
          [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
          [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
          [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
          [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
          [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
        ], [[, "(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], [
          ,
          "(\\d{2})(\\d{3})(\\d{4})",
          "$1 $2 $3",
          ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],
          "($1)"
        ], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]], [, , , , , , , , , [-1]], , , [, , "600\\d{7,8}", , , , , , , [10, 11]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CM: [
          ,
          [, , "[26]\\d{8}|88\\d{6,7}", , , , , , , [8, 9]],
          [, , "2(?:22|33)\\d{6}", , , , "222123456", , , [9]],
          [, , "(?:24[23]|6(?:[25-9]\\d|40))\\d{6}", , , , "671234567", , , [9]],
          [, , "88\\d{6,7}", , , , "88012345"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "CM",
          237,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        CN: [, [, , "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", , , , , , , [7, 8, 9, 10, 11, 12], [5, 6]], [
          ,
          ,
          "(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|2(?:[02-57-9]\\d{3}|1(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))|(?:41[03]|8078|9(?:78|94))\\d\\d)\\d{5}|(?:10|2[0-57-9])(?:1(?:00|23)\\d\\d|95\\d{3,4})|(?:41[03]|9(?:78|94))(?:100\\d\\d|95\\d{3,4})|8078123|(?:43[35]|754|851)\\d{7,8}|(?:43[35]|754|851)(?:1(?:00\\d|23)\\d|95\\d{3,4})|(?:3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[13-9]\\d{6}|2(?:[0-24-9]\\d{5}|3\\d(?:\\d{4})?))|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[24-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[13-9]\\d{5}|2(?:[0-24-9]\\d{4}|3\\d(?:\\d{3})?))|9(?:[0-46-9]\\d{5}|5\\d{3,5}))",
          ,
          ,
          ,
          "1012345678",
          ,
          ,
          [7, 8, 9, 10, 11],
          [5, 6]
        ], [, , "1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|[59][0-35-9]|6[25-7]|7[0-35-8])\\d{8}", , , , "13123456789", , , [11]], [, , "(?:(?:10|21)8|8)00\\d{7}", , , , "8001234567", , , [10, 12]], [, , "16[08]\\d{5}", , , , "16812345", , , [8]], [
          ,
          ,
          "10(?:10\\d{4}|96\\d{3,4})|400\\d{7}|950\\d{7,8}|(?:2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",
          ,
          ,
          ,
          "4001234567",
          ,
          ,
          [7, 8, 9, 10, 11],
          [5, 6]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CN", 86, "00|1(?:[12]\\d|79)\\d\\d00", "0", , , "(1(?:[12]\\d|79)\\d\\d)|0", , "00", , [
          [, "(\\d{5,6})", "$1", ["1(?:00|2[13])|9[56]", "1(?:00|2(?:1|39))|9[56]", "1(?:00|2(?:1|395))|9[56]"]],
          [, "(\\d{5,6})", "$1", ["1(?:0|23)|781|[1-9]12", "1(?:0|23)|7812|[1-9]123", "1(?:0|23(?:[0-8]|9[0-46-9]))|78123|[1-9]123"]],
          [
            ,
            "(\\d{2})(\\d{5,6})",
            "$1 $2",
            [
              "(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]",
              "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1",
              "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12",
              "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123",
              "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"
            ],
            "0$1",
            "$CC $1"
          ],
          [, "(\\d{3})(\\d{4})", "$1 $2", [
            "[1-9]",
            "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])",
            "1(?:0(?:[02-8]|1(?:[013-9]|2[0-24-9])|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[02-8]|1(?:0[1-9]|[13-9]|2[0-24-9])|9[0-47-9])|6)|[3-9]",
            "1(?:0(?:[02-8]|1(?:[013-9]|2[0-24-9])|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[02-8]|1(?:0[1-9]|[13-9]|2[0-24-9])|9[0-47-9])|6)|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|1[03]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|8[1-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9]|78|94)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))(?:[02-9]|1(?:[013-9]|2[0-24-9]))",
            "1(?:0(?:[02-8]|1(?:[013-9]|2[0-24-9])|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[02-8]|1(?:0[1-9]|[13-9]|2[0-24-9])|9[0-47-9])|6)|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|1[03]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|8[1-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:0(?:[0-689]|7[0-79])|1[01459]|2[0-489]|[46]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9]|78|94)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))(?:[02-9]|1(?:[013-9]|2[0-24-9]))"
          ]],
          [, "(\\d{4})(\\d{4})", "$1 $2", ["16[08]"]],
          [
            ,
            "(\\d{3})(\\d{5,6})",
            "$1 $2",
            [
              "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
              "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
              "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
              "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"
            ],
            "0$1",
            "$CC $1"
          ],
          [, "(\\d{4})(\\d{4})", "$1 $2", [
            "[1-9]",
            "1(?:0(?:[02-8]|1[1-9]|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[0-8]|9[0-47-9])|6)|[3-9]",
            "1(?:0(?:[02-8]|1[1-9]|9[0-47-9])|[1-9])|26|3(?:[0268]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|8[1-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23][0-8])|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:33|85[23]9)[0-46-9]|(?:2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[0-8]|9[0-47-9])",
            "1(?:0[02-8]|[1-9])|2(?:[0-57-9][0-8]|6)|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23](?:[02-8]|1[1-9]|9[0-46-9]))|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:10|2[0-57-9])9[0-47-9]|(?:101|58|85[23]10)[1-9]|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"
          ]],
          [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
          [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", "$CC $1", 1],
          [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1],
          [
            ,
            "(\\d{3})(\\d{7,8})",
            "$1 $2",
            ["9"]
          ],
          [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1],
          [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1],
          [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"], , "$CC $1"],
          [, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", , 1]
        ], [[
          ,
          "(\\d{2})(\\d{5,6})",
          "$1 $2",
          [
            "(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]",
            "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1",
            "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12",
            "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123",
            "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"
          ],
          "0$1",
          "$CC $1"
        ], [
          ,
          "(\\d{3})(\\d{5,6})",
          "$1 $2",
          [
            "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
            "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
            "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
            "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"
          ],
          "0$1",
          "$CC $1"
        ], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1], [
          ,
          "(\\d{3})(\\d{7,8})",
          "$1 $2",
          ["9"]
        ], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"], , "$CC $1"], [, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", , 1]], [, , , , , , , , , [-1]], , , [, , "(?:(?:10|21)8|[48])00\\d{7}|950\\d{7,8}", , , , , , , [10, 11, 12]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CO: [, [, , "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", , , , , , , [8, 10, 11], [4, 7]], [
          ,
          ,
          "601055(?:[0-4]\\d|50)\\d\\d|6010(?:[0-4]\\d|5[0-4])\\d{4}|(?:46|60(?:[124-7][2-9]|8[1-9]))\\d{6}",
          ,
          ,
          ,
          "6012345678",
          ,
          ,
          [8, 10],
          [4, 7]
        ], [, , "333301[0-5]\\d{3}|3333(?:00|2[5-9]|[3-9]\\d)\\d{4}|(?:3(?:24[1-9]|3(?:00|3[0-24-9]))|9101)\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}", , , , "3211234567", , , [10]], [, , "1800\\d{7}", , , , "18001234567", , , [11]], [, , "(?:19(?:0[01]|4[78])|901)\\d{7}", , , , "19001234567", , , [10, 11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", , , "0([3579]|4(?:[14]4|56))?", , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["46"]], [
          ,
          "(\\d{3})(\\d{7})",
          "$1 $2",
          ["6|90"],
          "($1)",
          "0$CC $1"
        ], [, "(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"], , "0$CC $1"], [, "(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1"]], [[, "(\\d{4})(\\d{4})", "$1 $2", ["46"]], [, "(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)", "0$CC $1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"], , "0$CC $1"], [, "(\\d)(\\d{3})(\\d{7})", "$1 $2 $3", ["1"]]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CR: [, [, , "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", , , , , , , [8, 10]], [
          ,
          ,
          "210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}",
          ,
          ,
          ,
          "22123456",
          ,
          ,
          [8]
        ], [, , "(?:3005\\d|6500[01])\\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\\d{6}", , , , "83123456", , , [8]], [, , "800\\d{7}", , , , "8001234567", , , [10]], [, , "90[059]\\d{7}", , , , "9001234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:210[0-6]|4\\d{3}|5100)\\d{4}", , , , "40001234", , , [8]], "CR", 506, "00", , , , "(19(?:0[0-2468]|1[09]|20|66|77|99))", , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"], , "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"], , "$CC $1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , [, , , , , , , , , [-1]]],
        CU: [, [, , "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", , , , , , , [6, 7, 8, 10], [4, 5]], [, , "(?:3[23]|4[89])\\d{4,6}|(?:31|4[36]|8(?:0[25]|78)\\d)\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}", , , , "71234567", , , , [4, 5]], [, , "(?:5\\d|6[2-4])\\d{6}", , , , "51234567", , , [8]], [, , "800\\d{7}", , , , "8001234567", , , [10]], [, , , , , , , , , [-1]], [, , "807\\d{7}", , , , "8071234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CU", 53, "119", "0", , , "0", , , , [[, "(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], [
          ,
          "(\\d)(\\d{6,7})",
          "$1 $2",
          ["7"],
          "(0$1)"
        ], [, "(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CV: [, [, , "(?:[2-59]\\d\\d|800)\\d{4}", , , , , , , [7]], [, , "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}", , , , "2211234"], [, , "(?:36|5[1-389]|9\\d)\\d{5}", , , , "9911234"], [, , "800\\d{4}", , , , "8001234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:3[3-5]|4[356])\\d{5}", , , , "3401234"], "CV", 238, "0", , , , , , , , [[
          ,
          "(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3",
          ["[2-589]"]
        ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CW: [, [, , "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", , , , , , , [7, 8]], [, , "9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}", , , , "94351234"], [, , "953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}", , , , "95181234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "60[0-2]\\d{4}", , , , "6001234", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CW", 599, "00", , , , , , , , [[
          ,
          "(\\d{3})(\\d{4})",
          "$1 $2",
          ["[3467]"]
        ], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], , [, , "955\\d{5}", , , , "95581234", , , [8]], 1, "[69]", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CX: [, [, , "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", , , , , , , [6, 7, 8, 9, 10, 12]], [, , "8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", , , , "891641234", , , [9], [8]], [
          ,
          ,
          "4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
          ,
          ,
          ,
          "412345678",
          ,
          ,
          [9]
        ], [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]], [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]], [, , "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", , , , "1300123456", , , [6, 8, 10, 12]], [, , , , , , , , , [-1]], [, , "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", , , , "147101234", , , [9]], "CX", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "([59]\\d{7})$|0", "8$1", "0011", , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        CY: [, [
          ,
          ,
          "(?:[279]\\d|[58]0)\\d{6}",
          ,
          ,
          ,
          ,
          ,
          ,
          [8]
        ], [, , "2[2-6]\\d{6}", , , , "22345678"], [, , "9(?:10|[4-79]\\d)\\d{5}", , , , "96123456"], [, , "800\\d{5}", , , , "80001234"], [, , "90[09]\\d{5}", , , , "90012345"], [, , "80[1-9]\\d{5}", , , , "80112345"], [, , "700\\d{5}", , , , "70012345"], [, , , , , , , , , [-1]], "CY", 357, "00", , , , , , , , [[, "(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "(?:50|77)\\d{6}", , , , "77123456"], , , [, , , , , , , , , [-1]]],
        CZ: [, [, , "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", , , , , , , [9, 10, 11, 12]], [
          ,
          ,
          "(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}",
          ,
          ,
          ,
          "212345678",
          ,
          ,
          [9]
        ], [, , "(?:60[1-8]\\d|7(?:0(?:[2-5]\\d|60)|19[0-2]|[2379]\\d\\d))\\d{5}", , , , "601123456", , , [9]], [, , "800\\d{6}", , , , "800123456", , , [9]], [, , "9(?:0[05689]|76)\\d{6}", , , , "900123456", , , [9]], [, , "8[134]\\d{7}", , , , "811234567", , , [9]], [, , "70[01]\\d{6}", , , , "700123456", , , [9]], [, , "9[17]0\\d{6}", , , , "910123456", , , [9]], "CZ", 420, "00", , , , , , , , [
          [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
          [, "(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
          [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
          [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
        ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "9(?:5\\d|7[2-4])\\d{6}", , , , "972123456", , , [9]], , , [, , "9(?:3\\d{9}|6\\d{7,10})", , , , "93123456789"]],
        DE: [, [, , "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [2, 3]], [
          ,
          ,
          "32\\d{9,11}|49[1-6]\\d{10}|322\\d{6}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}",
          ,
          ,
          ,
          "30123456",
          ,
          ,
          [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          [2, 3, 4]
        ], [, , "1(?:(?:5(?:[0-25-9]\\d\\d|310)|76\\d\\d)\\d{6}|6[023]\\d{7,8})|17\\d{8}", , , , "15123456789", , , [10, 11]], [, , "800\\d{7,12}", , , , "8001234567890", , , [10, 11, 12, 13, 14, 15]], [, , "(?:137[7-9]|900(?:[135]|9\\d))\\d{6}", , , , "9001234567", , , [10, 11]], [, , "180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}", , , , "18012345", , , [7, 8, 9, 10, 11, 12, 13, 14]], [, , "700\\d{8}", , , , "70012345678", , , [11]], [, , , , , , , , , [-1]], "DE", 49, "00", "0", , , "0", , , , [
          [
            ,
            "(\\d{2})(\\d{3,13})",
            "$1 $2",
            ["3[02]|40|[68]9"],
            "0$1"
          ],
          [, "(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
          [
            ,
            "(\\d{4})(\\d{2,11})",
            "$1 $2",
            ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],
            "0$1"
          ],
          [, "(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
          [, "(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
          [, "(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
          [, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
          [, "(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
          [, "(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
          [, "(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
          [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
          [, "(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
          [, "(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
          [, "(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"],
          [, "(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
          [, "(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
          [, "(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
          [, "(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
        ], , [, , "16(?:4\\d{1,10}|[89]\\d{1,11})", , , , "16412345", , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], , , [, , , , , , , , , [-1]], [, , "18(?:1\\d{5,11}|[2-9]\\d{8})", , , , "18500123456", , , [8, 9, 10, 11, 12, 13, 14]], , , [
          ,
          ,
          "1(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d{7,8}|15(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)\\d{7}",
          ,
          ,
          ,
          "177991234567",
          ,
          ,
          [12, 13]
        ]],
        DJ: [, [, , "(?:2\\d|77)\\d{6}", , , , , , , [8]], [, , "2(?:1[2-5]|7[45])\\d{5}", , , , "21360003"], [, , "77\\d{6}", , , , "77831001"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "DJ", 253, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        DK: [, [, , "[2-9]\\d{7}", , , , , , , [8]], [
          ,
          ,
          "(?:2(?:[0-59][1-9]|[6-8]\\d)|3(?:[0-3][1-9]|4[13]|5[1-58]|6[1347-9]|7\\d|8[1-8]|9[1-79])|4(?:[0-25][1-9]|[34][2-9]|6[13-579]|7[13579]|8[1-47]|9[127])|5(?:[0-36][1-9]|4[146-9]|5[3-57-9]|7[568]|8[1-358]|9[1-69])|6(?:[0135][1-9]|2[1-68]|4[2-8]|6[1689]|[78]\\d|9[15689])|7(?:[0-69][1-9]|7[3-9]|8[147])|8(?:[16-9][1-9]|2[1-58])|9(?:[1-47-9][1-9]|6\\d))\\d{5}",
          ,
          ,
          ,
          "32123456"
        ], [, , "(?:2[6-8]|37|6[78]|96)\\d{6}|(?:2[0-59]|3[0-689]|[457]\\d|6[0-69]|8[126-9]|9[1-47-9])[1-9]\\d{5}", , , , "34412345"], [, , "80\\d{6}", , , , "80123456"], [, , "90\\d{6}", , , , "90123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "DK", 45, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        DM: [
          ,
          [, , "(?:[58]\\d\\d|767|900)\\d{7}", , , , , , , [10], [7]],
          [
            ,
            ,
            "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\\d{4}",
            ,
            ,
            ,
            "7674201234",
            ,
            ,
            ,
            [7]
          ],
          [, , "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-8]|70[1-6])\\d{4}", , , , "7672251234", , , , [7]],
          [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
          [, , "900[2-9]\\d{6}", , , , "9002123456"],
          [, , , , , , , , , [-1]],
          [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
          [, , , , , , , , , [-1]],
          "DM",
          1,
          "011",
          "1",
          ,
          ,
          "([2-7]\\d{6})$|1",
          "767$1",
          ,
          ,
          ,
          ,
          [, , , , , , , , , [-1]],
          ,
          "767",
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        DO: [
          ,
          [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]],
          [
            ,
            ,
            "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}",
            ,
            ,
            ,
            "8092345678",
            ,
            ,
            ,
            [7]
          ],
          [, , "8[024]9[2-9]\\d{6}", , , , "8092345678", , , , [7]],
          [, , "8(?:00(?:14|[2-9]\\d)|(?:33|44|55|66|77|88)[2-9]\\d)\\d{5}", , , , "8002123456"],
          [, , "900[2-9]\\d{6}", , , , "9002123456"],
          [, , , , , , , , , [-1]],
          [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
          [, , , , , , , , , [-1]],
          "DO",
          1,
          "011",
          "1",
          ,
          ,
          "1",
          ,
          ,
          ,
          ,
          ,
          [, , , , , , , , , [-1]],
          ,
          "8001|8[024]9",
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        DZ: [
          ,
          [, , "(?:[1-4]|[5-79]\\d|80)\\d{7}", , , , , , , [8, 9]],
          [, , "9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[013-689])\\d{6}", , , , "12345678"],
          [, , "(?:5(?:4[0-29]|5\\d|6[0-3])|6(?:[569]\\d|7[0-6])|7[7-9]\\d)\\d{6}", , , , "551234567", , , [9]],
          [, , "800\\d{6}", , , , "800123456", , , [9]],
          [, , "80[3-689]1\\d{5}", , , , "808123456", , , [9]],
          [, , "80[12]1\\d{5}", , , , "801123456", , , [9]],
          [, , , , , , , , , [-1]],
          [, , "98[23]\\d{6}", , , , "983123456", , , [9]],
          "DZ",
          213,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        EC: [, [, , "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", , , , , , , [8, 9, 10, 11], [7]], [, , "[2-7][2-7]\\d{6}", , , , "22123456", , , [8], [7]], [, , "964[0-2]\\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\\d)\\d{6}", , , , "991234567", , , [9]], [
          ,
          ,
          "1800\\d{7}|1[78]00\\d{6}",
          ,
          ,
          ,
          "18001234567",
          ,
          ,
          [10, 11]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "[2-7]890\\d{4}", , , , "28901234", , , [8]], "EC", 593, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-7]"]], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], [[, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-7]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        EE: [, [, , "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", , , , , , , [7, 8, 10]], [, , "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", , , , "3212345", , , [7]], [
          ,
          ,
          "(?:5\\d{5}|8(?:1(?:0(?:0(?:00|[178]\\d)|[3-9]\\d\\d)|(?:1(?:0[2-6]|1\\d)|(?:2[0-59]|[3-79]\\d)\\d)\\d)|2(?:0(?:0(?:00|4\\d)|(?:19|[2-7]\\d)\\d)|(?:(?:[124-69]\\d|3[5-9])\\d|7(?:[0-79]\\d|8[13-9])|8(?:[2-6]\\d|7[01]))\\d)|[349]\\d{4}))\\d\\d|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}",
          ,
          ,
          ,
          "51234567",
          ,
          ,
          [7, 8]
        ], [, , "800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}", , , , "80012345"], [, , "(?:40\\d\\d|900)\\d{4}", , , , "9001234", , , [7, 8]], [, , , , , , , , , [-1]], [, , "70[0-2]\\d{5}", , , , "70012345", , , [8]], [, , , , , , , , , [-1]], "EE", 372, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], [
          ,
          "(\\d{2})(\\d{2})(\\d{4})",
          "$1 $2 $3",
          ["7"]
        ], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]], , [, , , , , , , , , [-1]], , , [, , "800[2-9]\\d{3}", , , , , , , [7]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        EG: [
          ,
          [, , "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", , , , , , , [8, 9, 10], [6, 7]],
          [, , "13[23]\\d{6}|(?:15|57)\\d{6,7}|(?:2\\d|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\\d{7}", , , , "234567890", , , [8, 9], [6, 7]],
          [, , "1[0-25]\\d{8}", , , , "1001234567", , , [10]],
          [, , "800\\d{7}", , , , "8001234567", , , [10]],
          [, , "900\\d{7}", , , , "9001234567", , , [10]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "EG",
          20,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], [, "(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], [, "(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        EH: [
          ,
          [, , "[5-8]\\d{8}", , , , , , , [9]],
          [, , "528[89]\\d{5}", , , , "528812345"],
          [, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-467]|5[0-3]|8[0-5]))\\d{6}", , , , "650123456"],
          [, , "80[0-7]\\d{6}", , , , "801234567"],
          [, , "89\\d{7}", , , , "891234567"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}", , , , "592401234"],
          "EH",
          212,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          ,
          ,
          [, , , , , , , , , [-1]],
          ,
          "528[89]",
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        ER: [, [, , "[178]\\d{6}", , , , , , , [7], [6]], [, , "(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}", , , , "8370362", , , , [6]], [, , "(?:17[1-3]|7\\d\\d)\\d{4}", , , , "7123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "ER", 291, "00", "0", , , "0", , , , [[
          ,
          "(\\d)(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["[178]"],
          "0$1"
        ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        ES: [
          ,
          [, , "[5-9]\\d{8}", , , , , , , [9]],
          [, , "96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}", , , , "810123456"],
          [, , "(?:590[16]00\\d|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d|(?:6\\d|7[1-48])\\d{7}", , , , "612345678"],
          [, , "[89]00\\d{6}", , , , "800123456"],
          [, , "80[367]\\d{6}", , , , "803123456"],
          [, , "90[12]\\d{6}", , , , "901123456"],
          [, , "70\\d{7}", , , , "701234567"],
          [, , , , , , , , , [-1]],
          "ES",
          34,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{4})", "$1", ["905"]], [, "(\\d{6})", "$1", ["[79]9"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]],
          [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , "51\\d{7}", , , , "511234567"],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        ET: [, [
          ,
          ,
          "(?:11|[2-579]\\d)\\d{7}",
          ,
          ,
          ,
          ,
          ,
          ,
          [9],
          [7]
        ], [
          ,
          ,
          "11667[01]\\d{3}|(?:11(?:1(?:1[124]|2[2-7]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8]|7\\d)|5(?:1[578]|44|5[0-4])|6(?:1[578]|2[69]|39|4[5-7]|5[0-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:119|22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",
          ,
          ,
          ,
          "111112345",
          ,
          ,
          ,
          [7]
        ], [, , "700[1-9]\\d{5}|(?:7(?:0[1-9]|1[0-8]|22|77|86|99)|9\\d\\d)\\d{6}", , , , "911234567"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "ET", 251, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        FI: [
          ,
          [, , "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", , , , , , , [5, 6, 7, 8, 9, 10, 11, 12]],
          [
            ,
            ,
            "1[3-7][1-8]\\d{3,6}|(?:19[1-8]|[23568][1-8]\\d|9(?:00|[1-8]\\d))\\d{2,6}",
            ,
            ,
            ,
            "131234567",
            ,
            ,
            [5, 6, 7, 8, 9]
          ],
          [, , "4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10]],
          [, , "800\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
          [, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "FI",
          358,
          "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
          "0",
          ,
          ,
          "0",
          ,
          "00",
          ,
          [[, "(\\d{5})", "$1", ["75[12]"], "0$1"], [, "(\\d{5})", "$1", ["20[2-59]"], "0$1"], [, "(\\d{6})", "$1", ["11"]], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], [
            ,
            "(\\d{2})(\\d{4,8})",
            "$1 $2",
            ["[14]|2[09]|50|7[135]"],
            "0$1"
          ], [, "(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], [, "(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]],
          [[, "(\\d{5})", "$1", ["20[2-59]"], "0$1"], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], [, "(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], [, "(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], [, "(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]],
          [, , , , , , , , , [-1]],
          1,
          "1[03-79]|[2-9]",
          [, , "20(?:2[023]|9[89])\\d{1,6}|(?:60[12]\\d|7099)\\d{4,5}|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:[1-3]00|7(?:0[1-5]\\d\\d|5[03-9]))\\d{3,7}"],
          [, , "20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}", , , , "10112345"],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        FJ: [
          ,
          [, , "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", , , , , , , [7, 11]],
          [, , "603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}", , , , "3212345", , , [7]],
          [, , "(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", , , , "7012345", , , [7]],
          [, , "0800\\d{7}", , , , "08001234567", , , [11]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "FJ",
          679,
          "0(?:0|52)",
          ,
          ,
          ,
          ,
          ,
          "00",
          ,
          [[, "(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        FK: [, [, , "[2-7]\\d{4}", , , , , , , [5]], [, , "[2-47]\\d{4}", , , , "31234"], [, , "[56]\\d{4}", , , , "51234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "FK", 500, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        FM: [, [, , "(?:[39]\\d\\d|820)\\d{4}", , , , , , , [7]], [
          ,
          ,
          "31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-6]\\d)\\d)\\d{3}",
          ,
          ,
          ,
          "3201234"
        ], [, , "31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\\d)\\d)\\d{3}", , , , "3501234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "FM", 691, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        FO: [, [, , "[2-9]\\d{5}", , , , , , , [6]], [, , "(?:20|[34]\\d|8[19])\\d{4}", , , , "201234"], [, , "(?:[27][1-9]|5\\d|9[16])\\d{4}", , , , "211234"], [, , "80[257-9]\\d{3}", , , , "802123"], [
          ,
          ,
          "90(?:[13-5][15-7]|2[125-7]|9\\d)\\d\\d",
          ,
          ,
          ,
          "901123"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:6[0-36]|88)\\d{4}", , , , "601234"], "FO", 298, "00", , , , "(10(?:01|[12]0|88))", , , , [[, "(\\d{6})", "$1", ["[2-9]"], , "$CC $1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        FR: [, [, , "[1-9]\\d{8}", , , , , , , [9]], [, , "(?:26[013-9]|59[1-35-9])\\d{6}|(?:[13]\\d|2[0-57-9]|4[1-9]|5[0-8])\\d{7}", , , , "123456789"], [, , "(?:6(?:[0-24-8]\\d|3[0-8]|9[589])|7[3-9]\\d)\\d{6}", , , , "612345678"], [, , "80[0-5]\\d{6}", , , , "801234567"], [
          ,
          ,
          "836(?:0[0-36-9]|[1-9]\\d)\\d{4}|8(?:1[2-9]|2[2-47-9]|3[0-57-9]|[569]\\d|8[0-35-9])\\d{6}",
          ,
          ,
          ,
          "891123456"
        ], [, , "8(?:1[01]|2[0156]|4[024]|84)\\d{6}", , , , "884012345"], [, , , , , , , , , [-1]], [, , "9\\d{8}", , , , "912345678"], "FR", 33, "00", "0", , , "0", , , , [[, "(\\d{4})", "$1", ["10"]], [, "(\\d{3})(\\d{3})", "$1 $2", ["1"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , [, , , , , , , , , [-1]], [, , "80[6-9]\\d{6}", , , , "806123456"], , , [, , , , , , , , , [-1]]],
        GA: [, [, , "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", , , , , , , [7, 8]], [, , "[01]1\\d{6}", , , , "01441234", , , [8]], [, , "(?:(?:0[2-7]|7[467])\\d|6(?:0[0-4]|10|[256]\\d))\\d{5}|[2-7]\\d{6}", , , , "06031234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "GA", 241, "00", , , , "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1", , , [[, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], [
          ,
          "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["0"]
        ], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        GB: [, [, , "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", , , , , , , [7, 9, 10], [4, 5, 6, 8]], [
          ,
          ,
          "(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
          ,
          ,
          ,
          "1212345678",
          ,
          ,
          [9, 10],
          [4, 5, 6, 7, 8]
        ], [, , "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", , , , "7400123456", , , [10]], [, , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567"], [, , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", , , , "9012345678", , , [7, 10]], [, , , , , , , , , [-1]], [, , "70\\d{8}", , , , "7012345678", , , [10]], [
          ,
          ,
          "56\\d{8}",
          ,
          ,
          ,
          "5612345678",
          ,
          ,
          [10]
        ], "GB", 44, "00", "0", " x", , "0", , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], [, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], [, "(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [
          "[25]|7(?:0|6[02-9])",
          "[25]|7(?:0|6(?:[03-9]|2[356]))"
        ], "0$1"], [, "(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], , [, , "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", , , , "7640123456", , , [10]], 1, , [, , , , , , , , , [-1]], [, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]], , , [, , , , , , , , , [-1]]],
        GD: [, [, , "(?:473|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [
          ,
          ,
          "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-4]|5[59]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",
          ,
          ,
          ,
          "4732691234",
          ,
          ,
          ,
          [7]
        ], [, , "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|49|5[6-8])|5(?:2[01]|3[3-8])|901)\\d{4}", , , , "4734031234", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], "GD", 1, "011", "1", , , "([2-9]\\d{6})$|1", "473$1", , , , , [, , , , , , , , , [-1]], , "473", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        GE: [, [, , "(?:[3-57]\\d\\d|800)\\d{6}", , , , , , , [9], [6, 7]], [, , "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", , , , "322123456", , , , [6, 7]], [
          ,
          ,
          "5(?:(?:(?:0555|1(?:[17]77|555))[5-9]|757(?:7[7-9]|8[01]))\\d|22252[0-4])\\d\\d|5(?:0(?:0[17]0|505)|1(?:0[01]0|1(?:07|33|51))|2(?:0[02]0|2[25]2)|3(?:0[03]0|3[35]3)|(?:40[04]|900)0|5222)[0-4]\\d{3}|(?:5(?:0(?:0(?:0\\d|11|22|3[0-6]|44|5[05]|77|88|9[09])|(?:[14]\\d|77)\\d|22[02])|1(?:1(?:[03][01]|[124]\\d|5[2-6]|7[0-4])|4\\d\\d)|[23]555|4(?:4\\d\\d|555)|5(?:[0157-9]\\d\\d|200|333|444)|6[89]\\d\\d|7(?:[0147-9]\\d\\d|5(?:00|[57]5))|8(?:0(?:[018]\\d|2[0-4])|5(?:55|8[89])|8(?:55|88))|9(?:090|[1-35-9]\\d\\d))|790\\d\\d)\\d{4}",
          ,
          ,
          ,
          "555123456"
        ], [, , "800\\d{6}", , , , "800123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "70[67]\\d{6}", , , , "706123456"], "GE", 995, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , "70[67]\\d{6}"], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        GF: [, [
          ,
          ,
          "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}",
          ,
          ,
          ,
          ,
          ,
          ,
          [9]
        ], [, , "594(?:[02-49]\\d|1[0-5]|5[6-9]|6[0-3]|80)\\d{4}", , , , "594101234"], [, , "(?:694(?:[0-249]\\d|3[0-8])|7093[0-3])\\d{4}", , , , "694201234"], [, , "80[0-5]\\d{6}", , , , "800012345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "9(?:(?:396|76\\d)\\d|476[0-6])\\d{4}", , , , "976012345"], "GF", 594, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , [, , , , , , , , , [-1]]],
        GG: [
          ,
          [, , "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", , , , , , , [7, 9, 10], [6]],
          [, , "1481[25-9]\\d{5}", , , , "1481256789", , , [10], [6]],
          [, , "7(?:(?:781|839)\\d|911[17])\\d{5}", , , , "7781123456", , , [10]],
          [, , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567"],
          [, , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", , , , "9012345678", , , [7, 10]],
          [, , , , , , , , , [-1]],
          [, , "70\\d{8}", , , , "7012345678", , , [10]],
          [, , "56\\d{8}", , , , "5612345678", , , [10]],
          "GG",
          44,
          "00",
          "0",
          ,
          ,
          "([25-9]\\d{5})$|0",
          "1481$1",
          ,
          ,
          ,
          ,
          [, , "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", , , , "7640123456", , , [10]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        GH: [, [, , "(?:[235]\\d{3}|800)\\d{5}", , , , , , , [8, 9], [7]], [, , "3082[0-5]\\d{4}|3(?:0(?:[237]\\d|8[01])|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}", , , , "302345678", , , [9], [7]], [
          ,
          ,
          "(?:2(?:[0346-9]\\d|5[67])|5(?:[03-7]\\d|9[1-9]))\\d{6}",
          ,
          ,
          ,
          "231234567",
          ,
          ,
          [9]
        ], [, , "800\\d{5}", , , , "80012345", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "GH", 233, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[237]|8[0-2]"]], [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], [[, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], [, , , , , , , , , [-1]], , , [, , "800\\d{5}", , , , , , , [8]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        GI: [, [
          ,
          ,
          "(?:[25]\\d|60)\\d{6}",
          ,
          ,
          ,
          ,
          ,
          ,
          [8]
        ], [, , "2190[0-2]\\d{3}|2(?:0(?:[02]\\d|3[01])|16[24-9]|2[2-5]\\d)\\d{4}", , , , "20012345"], [, , "5251[0-4]\\d{3}|(?:5(?:[146-8]\\d\\d|250)|60(?:1[01]|6\\d))\\d{4}", , , , "57123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "GI", 350, "00", , , , , , , , [[, "(\\d{3})(\\d{5})", "$1 $2", ["2"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        GL: [, [, , "(?:19|[2-689]\\d|70)\\d{4}", , , , , , , [6]], [, , "(?:19|3[1-7]|[68][1-9]|70|9\\d)\\d{4}", , , , "321000"], [
          ,
          ,
          "[245]\\d{5}",
          ,
          ,
          ,
          "221234"
        ], [, , "80\\d{4}", , , , "801234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "3[89]\\d{4}", , , , "381234"], "GL", 299, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        GM: [
          ,
          [, , "[2-9]\\d{6}", , , , , , , [7]],
          [, , "(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:5(?:3\\d|4[0-7])|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", , , , "5661234"],
          [, , "(?:[23679]\\d|4[015]|5[0-489])\\d{5}", , , , "3012345"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "GM",
          220,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        GN: [
          ,
          [, , "722\\d{6}|(?:3|6\\d)\\d{7}", , , , , , , [8, 9]],
          [, , "3(?:0(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])|1\\d\\d)\\d{4}", , , , "30241234", , , [8]],
          [, , "6[0-356]\\d{7}", , , , "601123456", , , [9]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "722\\d{6}", , , , "722123456", , , [9]],
          "GN",
          224,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        GP: [, [, , "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", , , , , , , [9]], [, , "590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}", , , , "590201234"], [, , "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}", , , , "690001234"], [
          ,
          ,
          "80[0-5]\\d{6}",
          ,
          ,
          ,
          "800012345"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}", , , , "976012345"], "GP", 590, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        GQ: [, [, , "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", , , , , , , [9]], [, , "33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}", , , , "333091234"], [
          ,
          ,
          "(?:222|55\\d)\\d{6}",
          ,
          ,
          ,
          "222123456"
        ], [, , "80\\d[1-9]\\d{5}", , , , "800123456"], [, , "90\\d[1-9]\\d{5}", , , , "900123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "GQ", 240, "00", , , , , , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], [, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        GR: [, [, , "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", , , , , , , [10, 11, 12]], [
          ,
          ,
          "2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",
          ,
          ,
          ,
          "2123456789",
          ,
          ,
          [10]
        ], [, , "68[57-9]\\d{7}|(?:69|94)\\d{8}", , , , "6912345678", , , [10]], [, , "800\\d{7,9}", , , , "8001234567"], [, , "90[19]\\d{7}", , , , "9091234567", , , [10]], [, , "8(?:0[16]|12|[27]5|50)\\d{7}", , , , "8011234567", , , [10]], [, , "70\\d{8}", , , , "7012345678", , , [10]], [, , , , , , , , , [-1]], "GR", 30, "00", , , , , , , , [[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], [
          ,
          "(\\d{3})(\\d{3,4})(\\d{5})",
          "$1 $2 $3",
          ["8"]
        ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "5005000\\d{3}", , , , "5005000123", , , [10]], , , [, , , , , , , , , [-1]]],
        GT: [, [, , "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", , , , , , , [8, 11]], [, , "[267][2-9]\\d{6}", , , , "22456789", , , [8]], [, , "(?:[3-5]\\d\\d|80[0-4])\\d{5}", , , , "51234567", , , [8]], [, , "18[01]\\d{8}", , , , "18001112222", , , [11]], [, , "19\\d{9}", , , , "19001112222", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "GT", 502, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], [
          ,
          "(\\d{4})(\\d{3})(\\d{4})",
          "$1 $2 $3",
          ["1"]
        ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        GU: [, [, , "(?:[58]\\d\\d|671|900)\\d{7}", , , , , , , [10], [7]], [, , "671(?:2\\d\\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[478])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [7]], [
          ,
          ,
          "671(?:2\\d\\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[478])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",
          ,
          ,
          ,
          "6713001234",
          ,
          ,
          ,
          [7]
        ], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "GU", 1, "011", "1", , , "([2-9]\\d{6})$|1", "671$1", , 1, , , [, , , , , , , , , [-1]], , "671", [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , [, , , , , , , , , [-1]]],
        GW: [, [, , "[49]\\d{8}|4\\d{6}", , , , , , , [7, 9]], [, , "443\\d{6}", , , , "443201234", , , [9]], [, , "9(?:5\\d|6[569]|77)\\d{6}", , , , "955012345", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "40\\d{5}", , , , "4012345", , , [7]], "GW", 245, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["40"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        GY: [, [, , "(?:[2-8]\\d{3}|9008)\\d{3}", , , , , , , [7]], [
          ,
          ,
          "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|50[0-6]|77[1-57])\\d{4}",
          ,
          ,
          ,
          "2201234"
        ], [, , "(?:510|6\\d\\d|7(?:[0-5]\\d|6[01]))\\d{4}", , , , "6091234"], [, , "(?:289|8(?:00|6[28]|88|99))\\d{4}", , , , "2891234"], [, , "9008\\d{3}", , , , "9008123"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "515\\d{4}", , , , "5151234"], "GY", 592, "001", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        HK: [, [, , "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", , , , , , , [5, 6, 7, 8, 9, 11]], [
          ,
          ,
          "(?:2(?:[13-9]\\d|2[013-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[0-8]|[579]\\d|6[0-2]))|58(?:0[1-9]|1[2-9]))\\d{4}",
          ,
          ,
          ,
          "21234567",
          ,
          ,
          [8]
        ], [, , "(?:4(?:44[0-35-9]|6(?:1[0-79]|4[0-57-9]|6[0-4])|7(?:[26][0-5]|4[0-28]))|5(?:73[0-6]|95[0-8])|6(?:26[013-8]|66[0-3]|78[0-5])|70(?:7[1-8]|8[0-4])|84(?:4[0-2]|8[0-35-9])|9(?:29[013-9]|39[014-9]|59[0-4]|899))\\d{4}|(?:4(?:4[0-35-9]|6[02357-9]|7[015])|5(?:[1-59][0-46-9]|6[0-4689]|7[0-246-9])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|70[1-59]|84[0-39]|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}", , , , "51234567", , , [8]], [, , "800\\d{6}", , , , "800123456", , , [9]], [
          ,
          ,
          "900(?:[0-24-9]\\d{7}|3\\d{1,4})",
          ,
          ,
          ,
          "90012345678",
          ,
          ,
          [5, 6, 7, 8, 11]
        ], [, , , , , , , , , [-1]], [, , "8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}", , , , "81123456", , , [8]], [, , , , , , , , , [-1]], "HK", 852, "00(?:30|5[09]|[126-9]?)", , , , , , "00", , [[, "(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], , [
          ,
          ,
          "7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[0136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}",
          ,
          ,
          ,
          "71123456",
          ,
          ,
          [8]
        ], , , [, , , , , , , , , [-1]], [, , "30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", , , , "30161234", , , [8]], , , [, , , , , , , , , [-1]]],
        HN: [, [, , "8\\d{10}|[237-9]\\d{7}", , , , , , , [8, 11]], [
          ,
          ,
          "2(?:2(?:0[0-59]|1[1-9]|[23]\\d|4[02-7]|5[57]|6[245]|7[0135689]|8[01346-9]|9[0-2])|4(?:0[578]|2[3-59]|3[13-9]|4[0-68]|5[1-3589])|5(?:0[2357-9]|1[1-356]|4[03-5]|5\\d|6[014-69]|7[04]|80)|6(?:[056]\\d|17|2[067]|3[047]|4[0-378]|[78][0-8]|9[01])|7(?:0[5-79]|6[46-9]|7[02-9]|8[034]|91)|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}",
          ,
          ,
          ,
          "22123456",
          ,
          ,
          [8]
        ], [, , "[37-9]\\d{7}", , , , "91234567", , , [8]], [, , "8002\\d{7}", , , , "80021234567", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "HN", 504, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]]], [[, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]], [, , , , , , , , , [-1]], , , [, , "8002\\d{7}", , , , , , , [11]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        HR: [, [, , "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", , , , , , , [7, 8, 9], [6]], [
          ,
          ,
          "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",
          ,
          ,
          ,
          "12345678",
          ,
          ,
          [8, 9],
          [6, 7]
        ], [, , "9(?:(?:0[1-9]|[12589]\\d)\\d\\d|7(?:[0679]\\d\\d|5(?:[01]\\d|44|55|77|9[5-79])))\\d{4}|98\\d{6}", , , , "921234567", , , [8, 9]], [, , "80\\d{5,7}", , , , "800123456"], [, , "6[01459]\\d{6}|6[01]\\d{5}", , , , "6001234", , , [7, 8]], [, , , , , , , , , [-1]], [, , "7[45]\\d{6}", , , , "74123456", , , [8]], [, , , , , , , , , [-1]], "HR", 385, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], [, "(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], [
          ,
          "(\\d{2})(\\d{3})(\\d{3,4})",
          "$1 $2 $3",
          ["6|7[245]"],
          "0$1"
        ], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "62\\d{6,7}|72\\d{6}", , , , "62123456", , , [8, 9]], , , [, , , , , , , , , [-1]]],
        HT: [, [, , "(?:[2-489]\\d|55)\\d{6}", , , , , , , [8]], [, , "2(?:2\\d|5[1-5]|81|9[149])\\d{5}", , , , "22453300"], [, , "(?:[34]\\d|55)\\d{6}", , , , "34101234"], [, , "8\\d{7}", , , , "80012345"], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}", , , , "98901234"], "HT", 509, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        HU: [
          ,
          [, , "[235-7]\\d{8}|[1-9]\\d{7}", , , , , , , [8, 9], [6, 7]],
          [, , "(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}", , , , "12345678", , , [8], [6, 7]],
          [, , "(?:[257]0|3[01])\\d{7}", , , , "201234567", , , [9]],
          [, , "(?:[48]0\\d|680[29])\\d{5}", , , , "80123456"],
          [, , "9[01]\\d{6}", , , , "90123456", , , [8]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "21\\d{7}", , , , "211234567", , , [9]],
          "HU",
          36,
          "00",
          "06",
          ,
          ,
          "06",
          ,
          ,
          ,
          [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , "(?:[48]0\\d|680[29])\\d{5}"],
          [, , "38\\d{7}", , , , "381234567", , , [9]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        ID: [, [
          ,
          ,
          "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}",
          ,
          ,
          ,
          ,
          ,
          ,
          [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
          [5, 6]
        ], [
          ,
          ,
          "2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",
          ,
          ,
          ,
          "218350123",
          ,
          ,
          [7, 8, 9, 10, 11],
          [5, 6]
        ], [, , "8[1-35-9]\\d{7,10}", , , , "812345678", , , [9, 10, 11, 12]], [, , "00(?:1803\\d{5,11}|7803\\d{7})|(?:177\\d|800)\\d{5,7}", , , , "8001234567", , , [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]], [, , "809\\d{7}", , , , "8091234567", , , [10]], [, , "804\\d{7}", , , , "8041234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "ID", 62, "00[89]", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], [, "(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], [, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], [
          ,
          "(\\d{3})(\\d{5,8})",
          "$1 $2",
          ["[2-79]"],
          "(0$1)"
        ], [, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], [, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], [, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3 $4", ["001"]], [, "(\\d{2})(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], [
          ,
          "(\\d{2})(\\d{5,9})",
          "$1 $2",
          ["2[124]|[36]1"],
          "(0$1)"
        ], [, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], [, "(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], [, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], [, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], [, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], [, , , , , , , , , [-1]], , , [, , "001803\\d{5,11}|(?:007803\\d|8071)\\d{6}", , , , , , , [10, 11, 12, 13, 14, 15, 16, 17]], [
          ,
          ,
          "(?:1500|8071\\d{3})\\d{3}",
          ,
          ,
          ,
          "8071123456",
          ,
          ,
          [7, 10]
        ], , , [, , , , , , , , , [-1]]],
        IE: [, [, , "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", , , , , , , [7, 8, 9, 10], [5, 6]], [, , "(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8\\d)|5[23679]|6[4-6]|7[14]|9[04])\\d{7}", , , , "2212345", , , , [5, 6]], [, , "8(?:22|[35-9]\\d)\\d{6}", , , , "850123456", , , [9]], [, , "1800\\d{6}", , , , "1800123456", , , [10]], [
          ,
          ,
          "15(?:1[2-8]|[2-8]0|9[089])\\d{6}",
          ,
          ,
          ,
          "1520123456",
          ,
          ,
          [10]
        ], [, , "18[59]0\\d{6}", , , , "1850123456", , , [10]], [, , "700\\d{6}", , , , "700123456", , , [9]], [, , "76\\d{7}", , , , "761234567", , , [9]], "IE", 353, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], [, "(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], [, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], [
          ,
          "(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["81"],
          "(0$1)"
        ], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], [, "(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , "18[59]0\\d{6}", , , , , , , [10]], [, , "818\\d{6}", , , , "818123456", , , [9]], , , [, , "88210[1-9]\\d{4}|8(?:[35-79]5\\d\\d|8(?:[013-9]\\d\\d|2(?:[01][1-9]|[2-9]\\d)))\\d{5}", , , , "8551234567", , , [10]]],
        IL: [, [, , "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", , , , , , , [
          7,
          8,
          9,
          10,
          11,
          12
        ]], [, , "153\\d{8,9}|29[1-9]\\d{5}|(?:2[0-8]|[3489]\\d)\\d{6}", , , , "21234567", , , [8, 11, 12], [7]], [, , "55(?:4(?:[01]0|5[0-2])|57[0-289])\\d{4}|5(?:(?:[0-2][02-9]|[36]\\d|[49][2-9]|8[3-7])\\d|5(?:01|2\\d|3[0-3]|4[34]|5[0-25689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", , , , "502345678", , , [9]], [, , "1(?:255|80[019]\\d{3})\\d{3}", , , , "1800123456", , , [7, 10]], [, , "1212\\d{4}|1(?:200|9(?:0[0-2]|19))\\d{6}", , , , "1919123456", , , [8, 10]], [, , "1700\\d{6}", , , , "1700123456", , , [10]], [, , , , , , , , , [-1]], [
          ,
          ,
          "7(?:38(?:0\\d|5[0-3569]|88)|8(?:33|55|77|81)\\d)\\d{4}|7(?:18|2[23]|3[237]|47|6[258]|7\\d|82|9[2-9])\\d{6}",
          ,
          ,
          ,
          "771234567",
          ,
          ,
          [9]
        ], "IL", 972, "0(?:0|1[2-9])", "0", , , "0", , , , [[, "(\\d{4})(\\d{3})", "$1-$2", ["125"]], [, "(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], [, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], [, "(\\d{4})(\\d{6})", "$1-$2", ["159"]], [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], [, "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], , [, , , , , , , , , [-1]], , , [
          ,
          ,
          "1700\\d{6}",
          ,
          ,
          ,
          ,
          ,
          ,
          [10]
        ], [, , "1599\\d{6}", , , , "1599123456", , , [10]], , , [, , "151\\d{8,9}", , , , "15112340000", , , [11, 12]]],
        IM: [
          ,
          [, , "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", , , , , , , [10], [6]],
          [, , "1624(?:230|[5-8]\\d\\d)\\d{3}", , , , "1624756789", , , , [6]],
          [, , "76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}", , , , "7924123456"],
          [, , "808162\\d{4}", , , , "8081624567"],
          [, , "8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}", , , , "9016247890"],
          [, , , , , , , , , [-1]],
          [, , "70\\d{8}", , , , "7012345678"],
          [, , "56\\d{8}", , , , "5612345678"],
          "IM",
          44,
          "00",
          "0",
          ,
          ,
          "([25-8]\\d{5})$|0",
          "1624$1",
          ,
          ,
          ,
          ,
          [, , , , , , , , , [-1]],
          ,
          "74576|(?:16|7[56])24",
          [, , , , , , , , , [-1]],
          [, , "3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}", , , , "5512345678"],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        IN: [, [, , "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", , , , , , , [8, 9, 10, 11, 12, 13], [6, 7]], [
          ,
          ,
          "2717(?:[2-7]\\d|95)\\d{4}|(?:271[0-689]|782[0-6])[2-7]\\d{5}|(?:170[24]|2(?:(?:[02][2-79]|90)\\d|80[13468])|(?:3(?:23|80)|683|79[1-7])\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:11|33|4[04]|80)[2-7]\\d{7}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[3-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1245]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[089])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}",
          ,
          ,
          ,
          "7410410123",
          ,
          ,
          [10],
          [6, 7, 8]
        ], [
          ,
          ,
          "(?:61279|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\\d{5}|(?:6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\\d|7[02-8])\\d{5}|(?:6(?:[09]\\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\\d\\d)\\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|8[124-6])\\d|7(?:[235689]\\d|4[0189]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]|881))[0189]\\d{5}",
          ,
          ,
          ,
          "8123456789",
          ,
          ,
          [10]
        ], [, , "000800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))", , , , "1800123456"], [, , "186[12]\\d{9}", , , , "1861123456789", , , [13]], [, , "1860\\d{7}", , , , "18603451234", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "IN", 91, "00", "0", , , "0", , , , [[, "(\\d{7})", "$1", ["575"]], [, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], , , 1], [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], , , 1], [
          ,
          "(\\d{3})(\\d{3})(\\d{4})",
          "$1 $2 $3",
          ["140"],
          ,
          ,
          1
        ], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", , 1], [
          ,
          "(\\d{3})(\\d{3})(\\d{4})",
          "$1 $2 $3",
          [
            "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
            "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
            "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"
          ],
          "0$1",
          ,
          1
        ], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [
          "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
          "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
          "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"
        ], "0$1", , 1], [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", , 1], [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], , , 1], [
          ,
          "(\\d{3})(\\d{3})(\\d{3})(\\d{4})",
          "$1 $2 $3 $4",
          ["0"]
        ], [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], , , 1]], [[, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], , , 1], [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], , , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], , , 1], [
          ,
          "(\\d{2})(\\d{4})(\\d{4})",
          "$1 $2 $3",
          ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],
          "0$1",
          ,
          1
        ], [
          ,
          "(\\d{3})(\\d{3})(\\d{4})",
          "$1 $2 $3",
          [
            "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
            "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
            "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"
          ],
          "0$1",
          ,
          1
        ], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [
          "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
          "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
          "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"
        ], "0$1", , 1], [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", , 1], [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], , , 1], [
          ,
          "(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3 $4",
          ["18"],
          ,
          ,
          1
        ]], [, , , , , , , , , [-1]], , , [, , "1(?:600\\d{6}|800\\d{4,9})|(?:000800|18(?:03\\d\\d|6(?:0|[12]\\d\\d)))\\d{7}"], [, , "140\\d{7}", , , , "1409305260", , , [10]], , , [, , , , , , , , , [-1]]],
        IO: [, [, , "3\\d{6}", , , , , , , [7]], [, , "37\\d{5}", , , , "3709100"], [, , "38\\d{5}", , , , "3801234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "IO", 246, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["3"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        IQ: [, [
          ,
          ,
          "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
          ,
          ,
          ,
          ,
          ,
          ,
          [8, 9, 10],
          [6, 7]
        ], [, , "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", , , , "12345678", , , [8, 9], [6, 7]], [, , "7[3-9]\\d{8}", , , , "7912345678", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "IQ", 964, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        IR: [
          ,
          [, , "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", , , , , , , [4, 5, 6, 7, 10], [8]],
          [, , "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|(?:12\\d|30[0-2])\\d|2(?:121|[2689]0\\d)|4(?:111|40\\d))\\d{4}", , , , "2123456789", , , [6, 7, 10], [4, 5, 8]],
          [, , "9(?:(?:0(?:[0-35]\\d|4[4-6])|(?:[13]\\d|2[0-3])\\d)\\d|9(?:[0-46]\\d\\d|5[15]0|8(?:[12]\\d|88)|9(?:0[0-3]|[19]\\d|21|69|77|8[7-9])))\\d{5}", , , , "9123456789", , , [10]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "IR",
          98,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d{4,5})", "$1", ["96"], "0$1"], [, "(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , "9(?:4440\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))", , , , , , , [4, 5, 10]],
          [
            ,
            ,
            "96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])",
            ,
            ,
            ,
            "9601",
            ,
            ,
            [4, 5]
          ],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        IS: [, [, , "(?:38\\d|[4-9])\\d{6}", , , , , , , [7, 9]], [, , "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-24589]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|872)\\d{4}", , , , "4101234", , , [7]], [, , "(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[026-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[238]))\\d{4}", , , , "6111234"], [, , "80[0-8]\\d{4}", , , , "8001234", , , [7]], [
          ,
          ,
          "90(?:0\\d|1[5-79]|2[015-79]|3[135-79]|4[125-7]|5[25-79]|7[1-37]|8[0-35-7])\\d{3}",
          ,
          ,
          ,
          "9001234",
          ,
          ,
          [7]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "49[0-24-79]\\d{4}", , , , "4921234", , , [7]], "IS", 354, "00|1(?:0(?:01|[12]0)|100)", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "809\\d{4}", , , , "8091234", , , [7]], , , [, , "(?:689|8(?:7[18]|80)|95[48])\\d{4}", , , , "6891234", , , [7]]],
        IT: [, [, , "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", , , , , , , [6, 7, 8, 9, 10, 11, 12]], [
          ,
          ,
          "0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",
          ,
          ,
          ,
          "0212345678",
          ,
          ,
          [6, 7, 8, 9, 10, 11]
        ], [, , "3[2-9]\\d{7,8}|(?:31|43)\\d{8}", , , , "3123456789", , , [9, 10]], [, , "80(?:0\\d{3}|3)\\d{3}", , , , "800123456", , , [6, 9]], [, , "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", , , , "899123456", , , [6, 8, 9, 10]], [, , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [6, 9]], [, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]], [, , "55\\d{8}", , , , "5512345678", , , [10]], "IT", 39, "00", , , , , , , , [
          [, "(\\d{4,5})", "$1", ["1(?:0|9[246])", "1(?:0|9(?:2[2-9]|[46]))"]],
          [, "(\\d{6})", "$1", ["1(?:1|92)"]],
          [, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
          [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
          [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
          [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]],
          [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
          [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]],
          [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
          [, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
          [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
          [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
        ], [[, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], [
          ,
          "(\\d{3})(\\d{3})(\\d{3,4})",
          "$1 $2 $3",
          ["1(?:44|[679])|[378]|43"]
        ], [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], [, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], [, , , , , , , , , [-1]], 1, , [, , "848\\d{6}", , , , , , , [9]], [, , , , , , , , , [-1]], , , [, , "3[2-8]\\d{9,10}", , , , "33101234501", , , [11, 12]]],
        JE: [, [, , "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", , , , , , , [10], [6]], [, , "1534[0-24-8]\\d{5}", , , , "1534456789", , , , [6]], [
          ,
          ,
          "7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}",
          ,
          ,
          ,
          "7797712345"
        ], [, , "80(?:07(?:35|81)|8901)\\d{4}", , , , "8007354567"], [, , "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}", , , , "9018105678"], [, , , , , , , , , [-1]], [, , "701511\\d{4}", , , , "7015115678"], [, , "56\\d{8}", , , , "5612345678"], "JE", 44, "00", "0", , , "([0-24-8]\\d{5})$|0", "1534$1", , , , , [, , "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", , , , "7640123456"], , , [, , , , , , , , , [-1]], [
          ,
          ,
          "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",
          ,
          ,
          ,
          "5512345678"
        ], , , [, , , , , , , , , [-1]]],
        JM: [, [, , "(?:[58]\\d\\d|658|900)\\d{7}", , , , , , , [10], [7]], [, , "8766060\\d{3}|(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:52[35]|6(?:0[1-3579]|1[0235-9]|[23]\\d|40|5[06]|6[2-589]|7[0-25-9]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}", , , , "8765230123", , , , [7]], [
          ,
          ,
          "(?:658295|876(?:2(?:0[1-9]|[13-9]\\d|2[013-9])|[348]\\d\\d|5(?:0[1-9]|[1-9]\\d)|6(?:4[89]|6[67])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}",
          ,
          ,
          ,
          "8762101234",
          ,
          ,
          ,
          [7]
        ], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "JM", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "658|876", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        JO: [, [, , "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", , , , , , , [8, 9]], [
          ,
          ,
          "87(?:000|90[01])\\d{3}|(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[5-7][023])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:20|7[078]|99))\\d{4}",
          ,
          ,
          ,
          "62001234",
          ,
          ,
          [8]
        ], [, , "7(?:[78][0-25-9]|9\\d)\\d{6}", , , , "790123456", , , [9]], [, , "80\\d{6}", , , , "80012345", , , [8]], [, , "9\\d{7}", , , , "90012345", , , [8]], [, , "85\\d{6}", , , , "85012345", , , [8]], [, , "70\\d{7}", , , , "700123456", , , [9]], [, , , , , , , , , [-1]], "JO", 962, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], , [
          ,
          ,
          "74(?:66|77)\\d{5}",
          ,
          ,
          ,
          "746612345",
          ,
          ,
          [9]
        ], , , [, , , , , , , , , [-1]], [, , "8(?:10|8\\d)\\d{5}", , , , "88101234", , , [8]], , , [, , , , , , , , , [-1]]],
        JP: [, [, , "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", , , , , , , [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]], [, , "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}", , , , "312345678", , , [9]], [
          ,
          ,
          "[7-9]0[1-9]\\d{7}",
          ,
          ,
          ,
          "9012345678",
          ,
          ,
          [10]
        ], [, , "00777(?:[01]|5\\d)\\d\\d|(?:00(?:7778|882[1245])|(?:120|800\\d)\\d\\d)\\d{4}|00(?:37|66|78)\\d{6,13}", , , , "120123456"], [, , "990\\d{6}", , , , "990123456", , , [9]], [, , , , , , , , , [-1]], [, , "60\\d{7}", , , , "601234567", , , [9]], [, , "50[1-9]\\d{7}", , , , "5012345678", , , [10]], "JP", 81, "010", "0", , , "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1", , , [[, "(\\d{4})(\\d{4})", "$1-$2", ["007", "0077", "00777", "00777[01]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], [
          ,
          "(\\d{4})(\\d)(\\d{4})",
          "$1-$2-$3",
          ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],
          "0$1"
        ], [
          ,
          "(\\d{2})(\\d{3})(\\d{4})",
          "$1-$2-$3",
          ["60"],
          "0$1"
        ], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], [
          ,
          "(\\d{2})(\\d{3})(\\d{4})",
          "$1-$2-$3",
          [
            "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
            "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
            "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"
          ],
          "0$1"
        ], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], [, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["007", "0077"]], [, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["008"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["0"]], [, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["0"]], [, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["0"]], [
          ,
          "(\\d{4})(\\d{6})(\\d{6,7})",
          "$1-$2-$3",
          ["0"]
        ]], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], [
          ,
          "(\\d{4})(\\d)(\\d{4})",
          "$1-$2-$3",
          ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],
          "0$1"
        ], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], [
          ,
          "(\\d{2})(\\d{3})(\\d{4})",
          "$1-$2-$3",
          [
            "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
            "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
            "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"
          ],
          "0$1"
        ], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], [, , "20\\d{8}", , , , "2012345678", , , [10]], , , [, , "00(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d|00(?:37|66|78)\\d{6,13}"], [, , "570\\d{6}", , , , "570123456", , , [9]], , , [, , , , , , , , , [-1]]],
        KE: [, [, , "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", , , , , , , [7, 8, 9, 10]], [
          ,
          ,
          "(?:4[245]|5[1-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|66)\\d{6,7}",
          ,
          ,
          ,
          "202012345",
          ,
          ,
          [7, 8, 9]
        ], [, , "(?:1(?:0[0-8]|1[0-7]|2[014]|30)|7\\d\\d)\\d{6}", , , , "712123456", , , [9]], [, , "800[02-8]\\d{5,6}", , , , "800223456", , , [9, 10]], [, , "900[02-9]\\d{5}", , , , "900223456", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "KE", 254, "000", "0", , , "0", , , , [[, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        KG: [, [
          ,
          ,
          "8\\d{9}|[235-9]\\d{8}",
          ,
          ,
          ,
          ,
          ,
          ,
          [9, 10],
          [5, 6]
        ], [, , "312(?:5[0-79]\\d|9(?:[0-689]\\d|7[0-24-9]))\\d{3}|(?:3(?:1(?:2[0-46-8]|3[1-9]|47|[56]\\d)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", , , , "312123456", , , [9], [5, 6]], [, , "312(?:58\\d|973)\\d{3}|(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|600|7(?:[07]\\d|55)|88[08]|9(?:12|9[05-9]))\\d{6}", , , , "700123456", , , [9]], [, , "800\\d{6,7}", , , , "800123456"], [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "KG", 996, "00", "0", , , "0", , , , [[, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], [, "(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        KH: [
          ,
          [, , "1\\d{9}|[1-9]\\d{7,8}", , , , , , , [8, 9, 10], [6, 7]],
          [
            ,
            ,
            "23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})",
            ,
            ,
            ,
            "23756789",
            ,
            ,
            [8, 9],
            [6, 7]
          ],
          [, , "(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}", , , , "91234567", , , [8, 9]],
          [, , "1800(?:1\\d|2[019])\\d{4}", , , , "1800123456", , , [10]],
          [, , "1900(?:1\\d|2[09])\\d{4}", , , , "1900123456", , , [10]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "KH",
          855,
          "00[14-9]",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        KI: [, [, , "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", , , , , , , [5, 8]], [, , "(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}", , , , "31234"], [
          ,
          ,
          "(?:6200[01]|7(?:310[1-9]|5(?:02[03-9]|12[0-47-9]|22[0-7]|[34](?:0[1-9]|8[02-9])|50[1-9])))\\d{3}|(?:63\\d\\d|7(?:(?:[0146-9]\\d|2[0-689])\\d|3(?:[02-9]\\d|1[1-9])|5(?:[0-2][013-9]|[34][1-79]|5[1-9]|[6-9]\\d)))\\d{4}",
          ,
          ,
          ,
          "72001234",
          ,
          ,
          [8]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "30(?:0[01]\\d\\d|12(?:11|20))\\d\\d", , , , "30010000", , , [8]], "KI", 686, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        KM: [, [, , "[3478]\\d{6}", , , , , , , [7], [4]], [, , "7[4-7]\\d{5}", , , , "7712345", , , , [4]], [, , "[34]\\d{6}", , , , "3212345"], [, , , , , , , , , [-1]], [, , "8\\d{6}", , , , "8001234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "KM", 269, "00", , , , , , , , [[
          ,
          "(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3",
          ["[3478]"]
        ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        KN: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "869(?:2(?:29|36)|302|4(?:6[015-9]|70)|56[5-7])\\d{4}", , , , "8692361234", , , , [7]], [, , "869(?:48[89]|55[6-8]|66\\d|76[02-7])\\d{4}", , , , "8697652917", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [
          ,
          ,
          "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
          ,
          ,
          ,
          "5002345678"
        ], [, , , , , , , , , [-1]], "KN", 1, "011", "1", , , "([2-7]\\d{6})$|1", "869$1", , , , , [, , , , , , , , , [-1]], , "869", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        KP: [, [, , "85\\d{6}|(?:19\\d|[2-7])\\d{7}", , , , , , , [8, 10], [6, 7]], [, , "(?:(?:195|2)\\d|3[19]|4[159]|5[37]|6[17]|7[39]|85)\\d{6}", , , , "21234567", , , , [6, 7]], [, , "19[1-3]\\d{7}", , , , "1921234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "KP", 850, "00|99", "0", , , "0", , , , [[
          ,
          "(\\d{2})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["8"],
          "0$1"
        ], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , "238[02-9]\\d{4}|2(?:[0-24-9]\\d|3[0-79])\\d{5}", , , , , , , [8]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        KR: [, [, , "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", , , , , , , [5, 6, 8, 9, 10, 11, 12, 13, 14], [3, 4, 7]], [
          ,
          ,
          "(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}",
          ,
          ,
          ,
          "22123456",
          ,
          ,
          [5, 6, 8, 9, 10],
          [3, 4, 7]
        ], [, , "1(?:05(?:[0-8]\\d|9[0-6])|22[13]\\d)\\d{4,5}|1(?:0[0-46-9]|[16-9]\\d|2[013-9])\\d{6,7}", , , , "1020000000", , , [9, 10]], [, , "00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|[38]0)\\d{7}", , , , "801234567", , , [9, 11, 12, 13, 14]], [, , "60[2-9]\\d{6}", , , , "602345678", , , [9]], [, , , , , , , , , [-1]], [, , "50\\d{8,9}", , , , "5012345678", , , [10, 11]], [, , "70\\d{8}", , , , "7012345678", , , [10]], "KR", 82, "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "0", , , "0(8(?:[1-46-8]|5\\d\\d))?", , , , [[
          ,
          "(\\d{5})",
          "$1",
          ["1[016-9]1", "1[016-9]11", "1[016-9]114"],
          "0$1"
        ], [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"], [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]], [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"], [, "(\\d{5})(\\d{3})(\\d{3})", "$1 $2 $3", ["003", "0030"]], [
          ,
          "(\\d{2})(\\d{5})(\\d{4})",
          "$1-$2-$3",
          ["5"],
          "0$1",
          "0$CC-$1"
        ], [, "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0"]], [, "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], [
          [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
          [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]],
          [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"],
          [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1", "0$CC-$1"],
          [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"],
          [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"],
          [, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"]
        ], [, , "15\\d{7,8}", , , , "1523456789", , , [9, 10]], , , [, , "00(?:3(?:08\\d{6,7}|68\\d{7})|798\\d{7,9})", , , , , , , [11, 12, 13, 14]], [, , "1(?:5(?:22|33|44|66|77|88|99)|6(?:[07]0|44|6[0168]|88)|8(?:00|33|55|77|99))\\d{4}", , , , "15441234", , , [8]], , , [, , , , , , , , , [-1]]],
        KW: [, [, , "18\\d{5}|(?:[2569]\\d|41)\\d{6}", , , , , , , [7, 8]], [, , "2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}", , , , "22345678", , , [8]], [
          ,
          ,
          "(?:41\\d\\d|5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25])|7(?:55|77)|88[58])|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|1(?:00|11|6[16])|2[26]2|3[36]3|4[46]4|7(?:0[013-9]|[67]\\d)|8[68]8|9(?:[069]\\d|3[039]))|9(?:(?:[04679]\\d|8[057-9])\\d|1(?:1[01]|99)|2(?:00|2\\d)|3(?:00|3[03])|5(?:00|5\\d)))\\d{4}",
          ,
          ,
          ,
          "50012345",
          ,
          ,
          [8]
        ], [, , "18\\d{5}", , , , "1801234", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "KW", 965, "00", , , , , , , , [[, "(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], [, "(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        KY: [, [, , "(?:345|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [
          ,
          ,
          "345(?:2(?:22|3[23]|44|66)|333|444|6(?:23|38|40)|7(?:30|4[35-79]|6[6-9]|77)|8(?:00|1[45]|4[89]|88)|9(?:14|4[035-9]))\\d{4}",
          ,
          ,
          ,
          "3452221234",
          ,
          ,
          ,
          [7]
        ], [, , "345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|82[56]|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}", , , , "3453231234", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"], [, , "(?:345976|900[2-9]\\d\\d)\\d{4}", , , , "9002345678"], [, , , , , , , , , [-1]], [
          ,
          ,
          "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
          ,
          ,
          ,
          "5002345678"
        ], [, , , , , , , , , [-1]], "KY", 1, "011", "1", , , "([2-9]\\d{6})$|1", "345$1", , , , , [, , , , , , , , , [-1]], , "345", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        KZ: [, [, , "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", , , , , , , [10, 14], [5, 6, 7]], [
          ,
          ,
          "(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9]|97)|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]|59))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}",
          ,
          ,
          ,
          "7123456789",
          ,
          ,
          [10],
          [5, 6, 7]
        ], [, , "7(?:0[0-25-8]|47|6[0-4]|7[15-8]|85)\\d{7}", , , , "7710009998", , , [10]], [, , "8(?:00|108\\d{3})\\d{7}", , , , "8001234567"], [, , "809\\d{7}", , , , "8091234567", , , [10]], [, , , , , , , , , [-1]], [, , "808\\d{7}", , , , "8081234567", , , [10]], [, , "751\\d{7}", , , , "7511234567", , , [10]], "KZ", 7, "810", "8", , , "8", , "8~10", , , , [, , , , , , , , , [-1]], , "33|7", [, , "751\\d{7}", , , , , , , [10]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        LA: [, [, , "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", , , , , , , [8, 9, 10], [6]], [
          ,
          ,
          "(?:2[13]|[35-7][14]|41|8[1468])\\d{6}",
          ,
          ,
          ,
          "21212862",
          ,
          ,
          [8],
          [6]
        ], [, , "208[78]\\d{6}|(?:20[23579]|30[24])\\d{7}", , , , "2023123456", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LA", 856, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[0135-9]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "30[0135-9]\\d{6}", , , , "301234567", , , [9]], , , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        LB: [, [, , "[27-9]\\d{7}|[13-9]\\d{6}", , , , , , , [7, 8]], [, , "7(?:62|8[0-6]|9[04-9])\\d{4}|(?:[14-69]\\d|2(?:[14-69]\\d|[78][1-9])|7[2-57]|8[02-9])\\d{5}", , , , "1123456"], [, , "787\\d{4}|(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3]))\\d{5}", , , , "71123456"], [, , , , , , , , , [-1]], [, , "9[01]\\d{6}", , , , "90123456", , , [8]], [, , "80\\d{6}", , , , "80123456", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LB", 961, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], [
          ,
          "(\\d{2})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["[27-9]"]
        ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        LC: [, [, , "(?:[58]\\d\\d|758|900)\\d{7}", , , , , , , [10], [7]], [, , "758(?:234|4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|(?:63|75)8)\\d{4}", , , , "7584305678", , , , [7]], [, , "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[0-3])|812)\\d{4}", , , , "7582845678", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [
          ,
          ,
          "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
          ,
          ,
          ,
          "5002345678"
        ], [, , , , , , , , , [-1]], "LC", 1, "011", "1", , , "([2-8]\\d{6})$|1", "758$1", , , , , [, , , , , , , , , [-1]], , "758", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        LI: [, [, , "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", , , , , , , [7, 9]], [, , "(?:2(?:01|1[27]|2[02]|3\\d|6[02-578]|96)|3(?:[24]0|33|7[0135-7]|8[048]|9[0269]))\\d{4}", , , , "2345678", , , [7]], [, , "(?:6(?:(?:4[5-9]|5[0-469])\\d|6(?:[024-6]\\d|[17]0|3[7-9]))\\d|7(?:[37-9]\\d|42|56))\\d{4}", , , , "660234567"], [, , "8002[28]\\d\\d|80(?:05\\d|9)\\d{4}", , , , "8002222"], [
          ,
          ,
          "90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d",
          ,
          ,
          ,
          "9002222",
          ,
          ,
          [7]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LI", 423, "00", "0", , , "(1001)|0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"], , "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"], , "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "870(?:28|87)\\d\\d", , , , "8702812", , , [7]], , , [, , "697(?:42|56|[78]\\d)\\d{4}", , , , "697861234", , , [9]]],
        LK: [
          ,
          [, , "[1-9]\\d{8}", , , , , , , [9], [7]],
          [, , "(?:12[2-9]|602|8[12]\\d|9(?:1\\d|22|9[245]))\\d{6}|(?:11|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}", , , , "112345678", , , , [7]],
          [, , "7(?:[0-25-8]\\d|4[0-4])\\d{6}", , , , "712345678"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "LK",
          94,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , "1973\\d{5}", , , , "197312345"],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        LR: [, [, , "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", , , , , , , [7, 8, 9]], [, , "2\\d{7}", , , , "21234567", , , [8]], [, , "(?:(?:(?:22|33)0|555|(?:77|88)\\d)\\d|4(?:240|[67]))\\d{5}|[56]\\d{6}", , , , "770123456", , , [7, 9]], [, , , , , , , , , [-1]], [, , "332(?:02|[34]\\d)\\d{4}", , , , "332021234", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LR", 231, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], [
          ,
          "(\\d{2})(\\d{3})(\\d{4})",
          "$1 $2 $3",
          ["[2-578]"],
          "0$1"
        ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        LS: [, [, , "(?:[256]\\d\\d|800)\\d{5}", , , , , , , [8]], [, , "2\\d{7}", , , , "22123456"], [, , "[56]\\d{7}", , , , "50123456"], [, , "800[1256]\\d{4}", , , , "80021234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LS", 266, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        LT: [
          ,
          [, , "(?:[3469]\\d|52|[78]0)\\d{6}", , , , , , , [8]],
          [
            ,
            ,
            "(?:3[1478]|4[124-6]|52)\\d{6}",
            ,
            ,
            ,
            "31234567"
          ],
          [, , "6\\d{7}", , , , "61234567"],
          [, , "80[02]\\d{5}", , , , "80012345"],
          [, , "9(?:0[0239]|10)\\d{5}", , , , "90012345"],
          [, , "808\\d{5}", , , , "80812345"],
          [, , "70[05]\\d{5}", , , , "70012345"],
          [, , "[89]01\\d{5}", , , , "80123456"],
          "LT",
          370,
          "00",
          "0",
          ,
          ,
          "[08]",
          ,
          ,
          ,
          [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", , 1], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", , 1], [, "(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", , 1], [, "(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", , 1]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , "70[67]\\d{5}", , , , "70712345"],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        LU: [, [, , "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11]], [, , "(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}", , , , "27123456"], [, , "6(?:[269][18]|5[1568]|7[189]|81)\\d{6}", , , , "628123456", , , [9]], [, , "800\\d{5}", , , , "80012345", , , [8]], [, , "90[015]\\d{5}", , , , "90012345", , , [8]], [, , "801\\d{5}", , , , "80112345", , , [8]], [, , , , , , , , , [-1]], [
          ,
          ,
          "20(?:1\\d{5}|[2-689]\\d{1,7})",
          ,
          ,
          ,
          "20201234",
          ,
          ,
          [4, 5, 6, 7, 8, 9, 10]
        ], "LU", 352, "00", , , , "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", , , , [[, "(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"], , "$CC $1"], [
          ,
          "(\\d{3})(\\d{2})(\\d{3})",
          "$1 $2 $3",
          ["80[01]|90[015]"],
          ,
          "$CC $1"
        ], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"], , "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"], , "$CC $1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        LV: [, [, , "(?:[268]\\d|90)\\d{6}", , , , , , , [8]], [
          ,
          ,
          "6\\d{7}",
          ,
          ,
          ,
          "63123456"
        ], [, , "2333[0-8]\\d{3}|2(?:[0-24-9]\\d\\d|3(?:0[07]|[14-9]\\d|2[02-9]|3[0-24-9]))\\d{4}", , , , "21234567"], [, , "80\\d{6}", , , , "80123456"], [, , "90\\d{6}", , , , "90123456"], [, , "81\\d{6}", , , , "81123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LV", 371, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        LY: [, [, , "[2-9]\\d{8}", , , , , , , [9], [7]], [
          ,
          ,
          "(?:2(?:0[56]|[1-6]\\d|7[124579]|8[124])|3(?:1\\d|2[2356])|4(?:[17]\\d|2[1-357]|5[2-4]|8[124])|5(?:[1347]\\d|2[1-469]|5[13-5]|8[1-4])|6(?:[1-479]\\d|5[2-57]|8[1-5])|7(?:[13]\\d|2[13-79])|8(?:[124]\\d|5[124]|84))\\d{6}",
          ,
          ,
          ,
          "212345678",
          ,
          ,
          ,
          [7]
        ], [, , "9[1-6]\\d{7}", , , , "912345678"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LY", 218, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        MA: [, [, , "[5-8]\\d{8}", , , , , , , [9]], [, , "5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}", , , , "520123456"], [
          ,
          ,
          "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-467]|5[0-3]|8[0-5]))\\d{6}",
          ,
          ,
          ,
          "650123456"
        ], [, , "80[0-7]\\d{6}", , , , "801234567"], [, , "89\\d{7}", , , , "891234567"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}", , , , "592401234"], "MA", 212, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], [, "(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], [, "(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], [, "(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        MC: [, [, , "(?:[3489]|6\\d)\\d{7}", , , , , , , [8, 9]], [, , "(?:870|9[2-47-9]\\d)\\d{5}", , , , "99123456", , , [8]], [, , "4(?:[469]\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}", , , , "612345678"], [, , "(?:800|90\\d)\\d{5}", , , , "90123456", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "MC", 377, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["87"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], [
          ,
          "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4 $5",
          ["6"],
          "0$1"
        ]], [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], [, , , , , , , , , [-1]], , , [, , "8[07]0\\d{5}", , , , , , , [8]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        MD: [, [, , "(?:[235-7]\\d|[89]0)\\d{6}", , , , , , , [8]], [, , "(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}", , , , "22212345"], [, , "562\\d{5}|(?:6\\d|7[16-9])\\d{6}", , , , "62112345"], [, , "800\\d{5}", , , , "80012345"], [
          ,
          ,
          "90[056]\\d{5}",
          ,
          ,
          ,
          "90012345"
        ], [, , "808\\d{5}", , , , "80812345"], [, , , , , , , , , [-1]], [, , "3[08]\\d{6}", , , , "30123456"], "MD", 373, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "803\\d{5}", , , , "80312345"], , , [, , , , , , , , , [-1]]],
        ME: [, [, , "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", , , , , , , [8, 9], [6]], [
          ,
          ,
          "(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:0[2467]|1[24-7]|2[2-467]))\\d{5}",
          ,
          ,
          ,
          "30234567",
          ,
          ,
          [8],
          [6]
        ], [, , "6(?:[07-9]\\d|3[024]|6[0-25])\\d{5}", , , , "67622901", , , [8]], [, , "80(?:[0-2578]|9\\d)\\d{5}", , , , "80080002"], [, , "9(?:4[1568]|5[178])\\d{5}", , , , "94515151", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "78[1-49]\\d{5}", , , , "78108780", , , [8]], "ME", 382, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "77[1-9]\\d{5}", , , , "77273012", , , [8]], , , [, , , , , , , , , [-1]]],
        MF: [
          ,
          [, , "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", , , , , , , [9]],
          [, , "590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}", , , , "590271234"],
          [, , "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}", , , , "690001234"],
          [, , "80[0-5]\\d{6}", , , , "800012345"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}", , , , "976012345"],
          "MF",
          590,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          ,
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        MG: [, [, , "[23]\\d{8}", , , , , , , [9], [7]], [
          ,
          ,
          "2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[356]|8[268]|9[2457])\\d{5}",
          ,
          ,
          ,
          "202123456",
          ,
          ,
          ,
          [7]
        ], [, , "3[2-47-9]\\d{7}", , , , "321234567"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "22\\d{7}", , , , "221234567"], "MG", 261, "00", "0", , , "([24-9]\\d{6})$|0", "20$1", , , [[, "(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        MH: [
          ,
          [, , "329\\d{4}|(?:[256]\\d|45)\\d{5}", , , , , , , [7]],
          [, , "(?:247|528|625)\\d{4}", , , , "2471234"],
          [, , "(?:(?:23|54)5|329|45[35-8])\\d{4}", , , , "2351234"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "635\\d{4}", , , , "6351234"],
          "MH",
          692,
          "011",
          "1",
          ,
          ,
          "1",
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        MK: [, [, , "[2-578]\\d{7}", , , , , , , [8], [6, 7]], [, , "(?:(?:2(?:62|77)0|3444)\\d|4[56]440)\\d{3}|(?:34|4[357])700\\d{3}|(?:2(?:[0-3]\\d|5[0-578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}", , , , "22012345", , , , [6, 7]], [
          ,
          ,
          "7(?:3555|(?:474|9[019]7)7)\\d{3}|7(?:[0-25-8]\\d\\d|3(?:[1-478]\\d|6[01])|4(?:2\\d|60|7[01578])|9(?:[2-4]\\d|5[01]|7[015]))\\d{4}",
          ,
          ,
          ,
          "72345678"
        ], [, , "800\\d{5}", , , , "80012345"], [, , "5\\d{7}", , , , "50012345"], [, , "8(?:0[1-9]|[1-9]\\d)\\d{5}", , , , "80123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "MK", 389, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        ML: [, [, , "[24-9]\\d{7}", , , , , , , [8]], [
          ,
          ,
          "2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-59]))\\d{5}",
          ,
          ,
          ,
          "20212345"
        ], [, , "2(?:0(?:01|79)|17\\d)\\d{4}|(?:5[01]|[679]\\d|8[2-59])\\d{6}", , , , "65012345"], [, , "80\\d{6}", , , , "80012345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "ML", 223, "00", , , , , , , , [[, "(\\d{4})", "$1", ["67[057-9]|74[045]", "67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]], [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]], [, , , , , , , , , [-1]], , , [, , "80\\d{6}"], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        MM: [
          ,
          [, , "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", , , , , , , [6, 7, 8, 9, 10], [5]],
          [
            ,
            ,
            "(?:1(?:(?:12|[28]\\d|3[56]|7[3-6]|9[0-6])\\d|4(?:2[29]|7[0-2]|83)|6)|2(?:2(?:00|8[34])|4(?:0\\d|22|7[0-2]|83)|51\\d\\d)|4(?:2(?:2\\d\\d|48[013])|3(?:20\\d|4(?:70|83)|56)|420\\d|5(?:2\\d|470))|6(?:0(?:[23]|88\\d)|(?:124|[56]2\\d)\\d|2472|3(?:20\\d|470)|4(?:2[04]\\d|472)|7(?:3\\d\\d|4[67]0|8(?:[01459]\\d|8))))\\d{4}|5(?:2(?:2\\d{5,6}|47[02]\\d{4})|(?:3472|4(?:2(?:1|86)|470)|522\\d|6(?:20\\d|483)|7(?:20\\d|48[01])|8(?:20\\d|47[02])|9(?:20\\d|470))\\d{4})|7(?:(?:0470|4(?:25\\d|470)|5(?:202|470|96\\d))\\d{4}|1(?:20\\d{4,5}|4(?:70|83)\\d{4}))|8(?:1(?:2\\d{5,6}|4(?:10|7[01]\\d)\\d{3})|2(?:2\\d{5,6}|(?:320|490\\d)\\d{3})|(?:3(?:2\\d\\d|470)|4[24-7]|5(?:(?:2\\d|51)\\d|4(?:[1-35-9]\\d|4[0-57-9]))|6[23])\\d{4})|(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4])|8(?:1[2-689]|2[2-8]|(?:[35]2|64)\\d))\\d{4}|25\\d{5,6}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:3[24]|5[245]))\\d{4}",
            ,
            ,
            ,
            "1234567",
            ,
            ,
            [6, 7, 8, 9],
            [5]
          ],
          [, , "(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6\\d|8[89]|9[4-8])\\d|7(?:3|40|[5-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6])\\d)\\d{4}|9[69]1\\d{6}|9(?:[68]\\d|9[089])\\d{5}", , , , "92123456", , , [7, 8, 9, 10]],
          [, , "80080(?:0[1-9]|2\\d)\\d{3}", , , , "8008001234", , , [10]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "1333\\d{4}", , , , "13331234", , , [8]],
          "MM",
          95,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], [
            ,
            "(\\d{2})(\\d{2})(\\d{3})",
            "$1 $2 $3",
            ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"],
            "0$1"
          ], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], [, "(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], [
            ,
            "(\\d)(\\d{5})(\\d{4})",
            "$1 $2 $3",
            ["9"],
            "0$1"
          ]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        MN: [
          ,
          [, , "[12]\\d{7,9}|[5-9]\\d{7}", , , , , , , [8, 9, 10], [4, 5, 6]],
          [, , "[12]2[1-3]\\d{5,6}|(?:(?:[12](?:1|27)|5[368])\\d\\d|7(?:0(?:[0-5]\\d|7[078]|80)|128))\\d{4}|[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}", , , , "53123456", , , , [4, 5, 6]],
          [, , "(?:83[01]|92[039])\\d{5}|(?:5[05]|6[069]|72|8[015689]|9[013-9])\\d{6}", , , , "88123456", , , [8]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "712[0-79]\\d{4}|7(?:1[013-9]|[5-9]\\d)\\d{5}", , , , "75123456", , , [8]],
          "MN",
          976,
          "001",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], [, "(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], [, "(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], [, "(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        MO: [, [
          ,
          ,
          "0800\\d{3}|(?:28|[68]\\d)\\d{6}",
          ,
          ,
          ,
          ,
          ,
          ,
          [7, 8]
        ], [, , "(?:28[2-9]|8(?:11|[2-57-9]\\d))\\d{5}", , , , "28212345", , , [8]], [, , "6800[0-79]\\d{3}|6(?:[235]\\d\\d|6(?:0[0-5]|[1-9]\\d)|8(?:0[1-9]|[14-8]\\d|2[5-9]|[39][0-4]))\\d{4}", , , , "66123456", , , [8]], [, , "0800\\d{3}", , , , "0800501", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "MO", 853, "00", , , , , , , , [[, "(\\d{4})(\\d{3})", "$1 $2", ["0"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        MP: [, [
          ,
          ,
          "[58]\\d{9}|(?:67|90)0\\d{7}",
          ,
          ,
          ,
          ,
          ,
          ,
          [10],
          [7]
        ], [, , "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [7]], [, , "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [
          ,
          ,
          "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
          ,
          ,
          ,
          "5002345678"
        ], [, , , , , , , , , [-1]], "MP", 1, "011", "1", , , "([2-9]\\d{6})$|1", "670$1", , 1, , , [, , , , , , , , , [-1]], , "670", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        MQ: [, [, , "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", , , , , , , [9]], [, , "(?:596(?:[03-7]\\d|1[05]|2[7-9]|8[0-39]|9[04-9])|80[6-9]\\d\\d|9(?:477[6-9]|767[4589]))\\d{4}", , , , "596301234"], [, , "(?:69[67]\\d\\d|7091[0-3])\\d{4}", , , , "696201234"], [, , "80[0-5]\\d{6}", , , , "800012345"], [, , "8[129]\\d{7}", , , , "810123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
          ,
          ,
          "9(?:397[0-3]|477[0-5]|76(?:6\\d|7[0-367]))\\d{4}",
          ,
          ,
          ,
          "976612345"
        ], "MQ", 596, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        MR: [
          ,
          [, , "(?:[2-4]\\d\\d|800)\\d{5}", , , , , , , [8]],
          [, , "(?:25[08]|35\\d|45[1-7])\\d{5}", , , , "35123456"],
          [, , "[2-4][0-46-9]\\d{6}", , , , "22123456"],
          [, , "800\\d{5}", , , , "80012345"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "MR",
          222,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        MS: [, [, , "(?:[58]\\d\\d|664|900)\\d{7}", , , , , , , [10], [7]], [, , "6644(?:1[0-3]|91)\\d{4}", , , , "6644912345", , , , [7]], [, , "664(?:3(?:49|9[1-6])|49[2-6])\\d{4}", , , , "6644923456", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [
          ,
          ,
          "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
          ,
          ,
          ,
          "5002345678"
        ], [, , , , , , , , , [-1]], "MS", 1, "011", "1", , , "([34]\\d{6})$|1", "664$1", , , , , [, , , , , , , , , [-1]], , "664", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        MT: [, [, , "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", , , , , , , [8]], [, , "20(?:3[1-4]|6[059])\\d{4}|2(?:0[19]|[1-357]\\d|60)\\d{5}", , , , "21001234"], [, , "(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}", , , , "96961234"], [, , "800(?:02|[3467]\\d)\\d{3}", , , , "80071234"], [
          ,
          ,
          "5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}",
          ,
          ,
          ,
          "50037123"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "3550\\d{4}", , , , "35501234"], "MT", 356, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]], , [, , "7117\\d{4}", , , , "71171234"], , , [, , , , , , , , , [-1]], [, , "501\\d{5}", , , , "50112345"], , , [, , , , , , , , , [-1]]],
        MU: [, [, , "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", , , , , , , [7, 8, 10]], [, , "(?:2(?:[0346-8]\\d|1[0-8])|4(?:[013568]\\d|2[4-8]|71|90)|54(?:[3-5]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}", , , , "54480123", , , [7, 8]], [
          ,
          ,
          "5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|(?:5(?:2[5-9]|4[3-689]|[57]\\d|8[0-689]|9[0-8])|7(?:0[0-6]|3[013]))\\d{5}",
          ,
          ,
          ,
          "52512345",
          ,
          ,
          [8]
        ], [, , "802\\d{7}|80[0-2]\\d{4}", , , , "8001234", , , [7, 10]], [, , "30\\d{5}", , , , "3012345", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "3(?:20|9\\d)\\d{4}", , , , "3201234", , , [7]], "MU", 230, "0(?:0|[24-7]0|3[03])", , , , , , "020", , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], [, "(\\d{5})(\\d{5})", "$1 $2", ["8"]]], , [, , "219\\d{4}", , , , "2190123", , , [7]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        MV: [, [, , "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", , , , , , , [
          7,
          10
        ]], [, , "(?:3(?:0[0-4]|3[0-59])|6(?:[58][024689]|6[024-68]|7[02468]))\\d{4}", , , , "6701234", , , [7]], [, , "(?:46[46]|[79]\\d\\d)\\d{4}", , , , "7712345", , , [7]], [, , "800\\d{7}", , , , "8001234567", , , [10]], [, , "900\\d{7}", , , , "9001234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "MV", 960, "0(?:0|19)", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "4(?:0[01]|50)\\d{4}", , , , "4001234", , , [7]], , , [, , , , , , , , , [-1]]],
        MW: [
          ,
          [, , "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", , , , , , , [7, 9]],
          [, , "(?:1[2-9]|2[12]\\d\\d)\\d{5}", , , , "1234567"],
          [, , "111\\d{6}|(?:31|77|[89][89])\\d{7}", , , , "991234567", , , [9]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "MW",
          265,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        MX: [
          ,
          [, , "[2-9]\\d{9}", , , , , , , [10], [7, 8]],
          [
            ,
            ,
            "(?:2(?:0[01]|2\\d|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[267][1-9]|3[1-8]|[45]\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-36-9]|6[0-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1346][1-9]|[27]\\d|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[0-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69]\\d|7[12]|8[1-8]))\\d{7}",
            ,
            ,
            ,
            "2001234567",
            ,
            ,
            ,
            [7, 8]
          ],
          [, , "(?:2(?:2\\d|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[267][1-9]|3[1-8]|[45]\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-36-9]|6[0-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1346][1-9]|[27]\\d|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[0-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69]\\d|7[12]|8[1-8]))\\d{7}", , , , "2221234567", , , , [7, 8]],
          [, , "8(?:00|88)\\d{7}", , , , "8001234567"],
          [, , "900\\d{7}", , , , "9001234567"],
          [, , "300\\d{7}", , , , "3001234567"],
          [, , "500\\d{7}", , , , "5001234567"],
          [, , , , , , , , , [-1]],
          "MX",
          52,
          "0[09]",
          ,
          ,
          ,
          ,
          ,
          "00",
          ,
          [[, "(\\d{5})", "$1", ["53"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]],
          [[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        MY: [, [
          ,
          ,
          "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
          ,
          ,
          ,
          ,
          ,
          ,
          [8, 9, 10],
          [6, 7]
        ], [, , "4270\\d{4}|(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}", , , , "323856789", , , [8, 9], [6, 7]], [
          ,
          ,
          "1(?:1888[689]|4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:[0-4]\\d|5[0-7]))|(?:[269]\\d|[37][1-9]|4[235-9])\\d|5(?:31|9\\d\\d)|8(?:1[23]|[236]\\d|4[06]|5(?:46|[7-9])|7[016-9]|8[01]|9[0-8]))\\d{5}",
          ,
          ,
          ,
          "123456789",
          ,
          ,
          [9, 10]
        ], [, , "1[378]00\\d{6}", , , , "1300123456", , , [10]], [, , "1600\\d{6}", , , , "1600123456", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "15(?:4(?:6[0-4]\\d|8(?:0[125]|[17]\\d|21|3[01]|4[01589]|5[014]|6[02]))|6(?:32[0-6]|78\\d))\\d{4}", , , , "1546012345", , , [10]], "MY", 60, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], [
          ,
          "(\\d)(\\d{4})(\\d{4})",
          "$1-$2 $3",
          ["3"],
          "0$1"
        ], [, "(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        MZ: [
          ,
          [, , "(?:2|8\\d)\\d{7}", , , , , , , [8, 9]],
          [, , "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", , , , "21123456", , , [8]],
          [, , "8[2-79]\\d{7}", , , , "821234567", , , [9]],
          [, , "800\\d{6}", , , , "800123456", , , [9]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "MZ",
          258,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        NA: [, [, , "[68]\\d{7,8}", , , , , , , [8, 9]], [
          ,
          ,
          "64426\\d{3}|6(?:1(?:2[2-7]|3[01378]|4[0-4])|254|32[0237]|4(?:27|41|5[25])|52[236-8]|626|7(?:2[2-4]|30))\\d{4,5}|6(?:1(?:(?:0\\d|2[0189]|3[24-69]|4[5-9])\\d|17|69|7[014])|2(?:17|5[0-36-8]|69|70)|3(?:17|2[14-689]|34|6[289]|7[01]|81)|4(?:17|2[0-2]|4[06]|5[0137]|69|7[01])|5(?:17|2[0459]|69|7[01])|6(?:17|25|38|42|69|7[01])|7(?:17|2[569]|3[13]|6[89]|7[01]))\\d{4}",
          ,
          ,
          ,
          "61221234"
        ], [, , "(?:60|8[1245])\\d{7}", , , , "811234567", , , [9]], [, , "80\\d{7}", , , , "800123456", , , [9]], [, , "8701\\d{5}", , , , "870123456", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "8(?:3\\d\\d|86)\\d{5}", , , , "88612345"], "NA", 264, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , [, , , , , , , , , [-1]]],
        NC: [, [, , "(?:050|[2-57-9]\\d\\d)\\d{3}", , , , , , , [6]], [, , "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", , , , "201234"], [, , "(?:[579]\\d|8[0-79])\\d{4}", , , , "751234"], [, , "050\\d{3}", , , , "050012"], [, , "36\\d{4}", , , , "366711"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NC", 687, "00", , , , , , , , [[, "(\\d{3})", "$1", ["5[6-8]"]], [, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]], [[, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        NE: [, [, , "[027-9]\\d{7}", , , , , , , [8]], [, , "2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}", , , , "20201234"], [, , "(?:23|7[0467]|[89]\\d)\\d{6}", , , , "93123456"], [, , "08\\d{6}", , , , "08123456"], [, , "09\\d{6}", , , , "09123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NE", 227, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , [, , , , , , , , , [-1]]],
        NF: [, [, , "[13]\\d{5}", , , , , , , [6], [5]], [, , "(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}", , , , "106609", , , , [5]], [, , "(?:14|3[58])\\d{4}", , , , "381234", , , , [5]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NF", 672, "00", , , , "([0-258]\\d{4})$", "3$1", , , [[, "(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], [, "(\\d)(\\d{5})", "$1 $2", ["[13]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        NG: [, [, , "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", , , , , , , [
          10,
          11,
          12,
          13,
          14
        ], [6, 7]], [, , "20(?:[1259]\\d|3[013-9]|4[1-8]|6[024-689]|7[1-79]|8[2-9])\\d{6}", , , , "2033123456", , , [10], [6, 7]], [, , "(?:702[0-24-9]|819[01])\\d{6}|(?:7(?:0[13-9]|[12]\\d)|8(?:0[1-9]|1[0-8])|9(?:0[1-9]|1[1-6]))\\d{7}", , , , "8021234567", , , [10]], [, , "800\\d{7,11}", , , , "80017591759"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NG", 234, "009", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], [
          ,
          "(\\d{4})(\\d{2})(\\d{4})",
          "$1 $2 $3",
          ["2"],
          "0$1"
        ], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], [, "(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "700\\d{7,11}", , , , "7001234567"], , , [, , , , , , , , , [-1]]],
        NI: [, [, , "(?:1800|[25-8]\\d{3})\\d{4}", , , , , , , [8]], [, , "2\\d{7}", , , , "21234567"], [, , "(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}", , , , "81234567"], [, , "1800\\d{4}", , , , "18001234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], "NI", 505, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        NL: [, [, , "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", , , , , , , [5, 6, 7, 8, 9, 10, 11]], [
          ,
          ,
          "(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}",
          ,
          ,
          ,
          "101234567",
          ,
          ,
          [9]
        ], [, , "(?:6[1-58]|970\\d)\\d{7}", , , , "612345678", , , [9, 11]], [, , "800\\d{4,7}", , , , "8001234", , , [7, 8, 9, 10]], [, , "90[069]\\d{4,7}", , , , "9061234", , , [7, 8, 9, 10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:85|91)\\d{7}", , , , "851234567", , , [9]], "NL", 31, "00", "0", , , "0", , , , [[, "(\\d{4})", "$1", ["1[238]|[34]"]], [, "(\\d{2})(\\d{3,4})", "$1 $2", ["14"]], [, "(\\d{6})", "$1", ["1"]], [, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], [
          ,
          "(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
          "0$1"
        ], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], [[, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], [
          ,
          "(\\d{3})(\\d{3})(\\d{5})",
          "$1 $2 $3",
          ["9"],
          "0$1"
        ]], [, , "66\\d{7}", , , , "662345678", , , [9]], , , [, , "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)\\d", , , , , , , [5, 6]], [, , "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d", , , , "14020", , , [5, 6, 9]], , , [, , , , , , , , , [-1]]],
        NO: [, [, , "(?:0|[2-9]\\d{3})\\d{4}", , , , , , , [5, 8]], [, , "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", , , , "21234567", , , [8]], [
          ,
          ,
          "(?:4[015-8]|9\\d)\\d{6}",
          ,
          ,
          ,
          "40612345",
          ,
          ,
          [8]
        ], [, , "80[01]\\d{5}", , , , "80012345", , , [8]], [, , "82[09]\\d{5}", , , , "82012345", , , [8]], [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]], [, , "880\\d{5}", , , , "88012345", , , [8]], [, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "NO", 47, "00", , , , , , , , [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], , [, , , , , , , , , [-1]], 1, "[02-689]|7[0-8]", [, , , , , , , , , [-1]], [, , "(?:0[235-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", , , , "02000"], , , [
          ,
          ,
          "81[23]\\d{5}",
          ,
          ,
          ,
          "81212345",
          ,
          ,
          [8]
        ]],
        NP: [, [, , "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", , , , , , , [8, 10, 11], [6, 7]], [, , "(?:1[0-6]\\d|99[02-6])\\d{5}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-7])[2-6]\\d{5}", , , , "14567890", , , [8], [6, 7]], [, , "9(?:00|6[0-3]|7[024-6]|8[0-24-68])\\d{7}", , , , "9841234567", , , [10]], [, , "1(?:66001|800\\d\\d)\\d{5}", , , , "16600101234", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NP", 977, "00", "0", , , "0", , , , [[, "(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], [
          ,
          "(\\d{2})(\\d{6})",
          "$1-$2",
          ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],
          "0$1"
        ], [, "(\\d{3})(\\d{7})", "$1-$2", ["9"]], [, "(\\d{4})(\\d{2})(\\d{5})", "$1-$2-$3", ["1"]]], [[, "(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], [, "(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], [, "(\\d{3})(\\d{7})", "$1-$2", ["9"]]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        NR: [, [, , "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", , , , , , , [7]], [, , "444\\d{4}", , , , "4441234"], [
          ,
          ,
          "(?:222|55[3-9]|666|777|8\\d\\d|999)\\d{4}",
          ,
          ,
          ,
          "5551234"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NR", 674, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        NU: [
          ,
          [, , "(?:[4-7]|888\\d)\\d{3}", , , , , , , [4, 7]],
          [, , "[47]\\d{3}", , , , "7012", , , [4]],
          [, , "(?:[56]|888[1-9])\\d{3}", , , , "8884012"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "NU",
          683,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{4})", "$1 $2", ["8"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        NZ: [
          ,
          [, , "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", , , , , , , [5, 6, 7, 8, 9, 10]],
          [, , "240\\d{5}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}", , , , "32345678", , , [8], [7]],
          [, , "2(?:[0-27-9]\\d|6)\\d{6,7}|2(?:1\\d|75)\\d{5}", , , , "211234567", , , [8, 9, 10]],
          [, , "508\\d{6,7}|80\\d{6,8}", , , , "800123456", , , [8, 9, 10]],
          [, , "(?:1[13-57-9]\\d{5}|50(?:0[08]|30|66|77|88))\\d{3}|90\\d{6,8}", , , , "900123456", , , [7, 8, 9, 10]],
          [, , , , , , , , , [-1]],
          [, , "70\\d{7}", , , , "701234567", , , [9]],
          [, , , , , , , , , [-1]],
          "NZ",
          64,
          "0(?:0|161)",
          "0",
          ,
          ,
          "0",
          ,
          "00",
          ,
          [[, "(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], [
            ,
            "(\\d{2})(\\d{3})(\\d{3,5})",
            "$1 $2 $3",
            ["2(?:[169]|7[0-35-9])|7"],
            "0$1"
          ]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , "8(?:1[16-9]|22|3\\d|4[045]|5[459]|6[235-9]|7[0-3579]|90)\\d{2,7}", , , , "83012378"],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        OM: [, [, , "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", , , , , , , [7, 8, 9]], [, , "2[1-6]\\d{6}", , , , "23123456", , , [8]], [, , "(?:1505|90[1-9]\\d)\\d{4}|(?:7[126-9]|9[1-9])\\d{6}", , , , "92123456", , , [8]], [, , "8007\\d{4,5}|(?:500|800[05])\\d{4}", , , , "80071234"], [, , "900\\d{5}", , , , "90012345", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "OM", 968, "00", , , , , , , , [[
          ,
          "(\\d{3})(\\d{4,6})",
          "$1 $2",
          ["[58]"]
        ], [, "(\\d{2})(\\d{6})", "$1 $2", ["2"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        PA: [, [, , "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", , , , , , , [7, 8, 10, 11]], [
          ,
          ,
          "(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|6[058]|7[0167]|8[2358]|9[1389])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[02-9])|3(?:[07-9]\\d|1[0-7]|2[0-5]|33|4[0-79]|5[0-35]|6[068])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[0156]|7[0-24-9]|8[5-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}",
          ,
          ,
          ,
          "2001234",
          ,
          ,
          [7]
        ], [, , "(?:1[16]1|21[89]|6\\d{3}|8(?:1[01]|7[23]))\\d{4}", , , , "61234567", , , [7, 8]], [, , "800\\d{4,5}|(?:00800|800\\d)\\d{6}", , , , "8001234"], [, , "(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}", , , , "8601234", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "PA", 507, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        PE: [, [
          ,
          ,
          "(?:[14-8]|9\\d)\\d{7}",
          ,
          ,
          ,
          ,
          ,
          ,
          [8, 9],
          [6, 7]
        ], [, , "(?:(?:(?:4[34]|5[14])[0-8]|687)\\d|7(?:173|(?:3[0-8]|55)\\d)|8(?:10[05689]|6(?:0[06-9]|1[6-9]|29)|7(?:0[0569]|[56]0)))\\d{4}|(?:1[0-8]|4[12]|5[236]|6[1-7]|7[246]|8[2-4])\\d{6}", , , , "11234567", , , [8], [6, 7]], [, , "9\\d{8}", , , , "912345678", , , [9]], [, , "800\\d{5}", , , , "80012345", , , [8]], [, , "805\\d{5}", , , , "80512345", , , [8]], [, , "801\\d{5}", , , , "80112345", , , [8]], [, , "80[24]\\d{5}", , , , "80212345", , , [8]], [, , , , , , , , , [-1]], "PE", 51, "00|19(?:1[124]|77|90)00", "0", " Anexo ", , "0", , "00", , [[
          ,
          "(\\d{3})(\\d{5})",
          "$1 $2",
          ["80"],
          "(0$1)"
        ], [, "(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        PF: [
          ,
          [, , "4\\d{5}(?:\\d{2})?|8\\d{7,8}", , , , , , , [6, 8, 9]],
          [, , "4(?:0[4-689]|9[4-68])\\d{5}", , , , "40412345", , , [8]],
          [, , "8[7-9]\\d{6}", , , , "87123456", , , [8]],
          [, , "80[0-5]\\d{6}", , , , "800012345", , , [9]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "499\\d{5}", , , , "49901234", , , [8]],
          "PF",
          689,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , "44\\d{4}", , , , , , , [6]],
          [, , "44\\d{4}", , , , "440123", , , [6]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        PG: [, [, , "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", , , , , , , [7, 8]], [, , "(?:(?:3[0-2]|4[257]|5[34]|9[78])\\d|64[1-9]|85[02-46-9])\\d{4}", , , , "3123456", , , [7]], [, , "(?:7\\d|8[1-38])\\d{6}", , , , "70123456", , , [8]], [
          ,
          ,
          "180\\d{4}",
          ,
          ,
          ,
          "1801234",
          ,
          ,
          [7]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "2(?:0[0-57]|7[568])\\d{4}", , , , "2751234", , , [7]], "PG", 675, "00|140[1-3]", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], , [, , "27[01]\\d{4}", , , , "2700123", , , [7]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        PH: [, [, , "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", , , , , , , [6, 8, 9, 10, 11, 12, 13], [4, 5, 7]], [
          ,
          ,
          "(?:(?:2[3-8]|3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|(?:2|8[2-8]\\d\\d)\\d{5}",
          ,
          ,
          ,
          "232345678",
          ,
          ,
          [6, 8, 9, 10],
          [4, 5, 7]
        ], [, , "(?:8(?:1[37]|9[5-8])|9(?:0[5-9]|1[0-24-9]|[235-7]\\d|4[2-9]|8[135-9]|9[1-9]))\\d{7}", , , , "9051234567", , , [10]], [, , "1800\\d{7,9}", , , , "180012345678", , , [11, 12, 13]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "PH", 63, "00", "0", , , "0", , , , [[, "(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], [
          ,
          "(\\d{4})(\\d{4,6})",
          "$1 $2",
          ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],
          "(0$1)"
        ], [, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        PK: [, [
          ,
          ,
          "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
          ,
          ,
          ,
          ,
          ,
          ,
          [8, 9, 10, 11, 12],
          [5, 6, 7]
        ], [, , "(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6,7}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}", , , , "2123456789", , , [9, 10], [5, 6, 7, 8]], [, , "3(?:[0-247]\\d|3[0-79]|55|64)\\d{7}", , , , "3012345678", , , [10]], [, , "800\\d{5}(?:\\d{3})?", , , , "80012345", , , [8, 11]], [, , "900\\d{5}", , , , "90012345", , , [8]], [, , , , , , , , , [-1]], [
          ,
          ,
          "122\\d{6}",
          ,
          ,
          ,
          "122044444",
          ,
          ,
          [9]
        ], [, , , , , , , , , [-1]], "PK", 92, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], [, "(\\d{4})(\\d{5})", "$1 $2", ["1"]], [
          ,
          "(\\d{3})(\\d{6,7})",
          "$1 $2",
          ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],
          "(0$1)"
        ], [, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], [, "(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [
          ,
          ,
          "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",
          ,
          ,
          ,
          "21111825888",
          ,
          ,
          [11, 12]
        ], , , [, , , , , , , , , [-1]]],
        PL: [, [, , "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", , , , , , , [6, 7, 8, 9, 10]], [, , "47\\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))", , , , "123456789", , , [7, 9]], [, , "2131[89]\\d{4}|21(?:1[013-5]|2\\d|3[2-9])\\d{5}|(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", , , , "512345678", , , [9]], [, , "800\\d{6,7}", , , , "800123456", , , [9, 10]], [, , "70[01346-8]\\d{6}", , , , "701234567", , , [9]], [
          ,
          ,
          "801\\d{6}",
          ,
          ,
          ,
          "801234567",
          ,
          ,
          [9]
        ], [, , , , , , , , , [-1]], [, , "39\\d{7}", , , , "391234567", , , [9]], "PL", 48, "00", , , , , , , , [
          [, "(\\d{5})", "$1", ["19"]],
          [, "(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
          [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
          [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
          [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
          [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
          [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
        ], , [, , "64\\d{4,7}", , , , "641234567", , , [6, 7, 8, 9]], , , [, , , , , , , , , [-1]], [, , "804\\d{6}", , , , "804123456", , , [9]], , , [, , , , , , , , , [-1]]],
        PM: [, [, , "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", , , , , , , [6, 9]], [, , "(?:4[1-35-9]|5[0-47-9]|80[6-9]\\d\\d)\\d{4}", , , , "430123"], [, , "(?:4[02-489]|5[02-9]|708(?:4[0-5]|5[0-6]))\\d{4}", , , , "551234"], [, , "80[0-5]\\d{6}", , , , "800012345", , , [9]], [
          ,
          ,
          "8[129]\\d{7}",
          ,
          ,
          ,
          "810123456",
          ,
          ,
          [9]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "PM", 508, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        PR: [, [, , "(?:[589]\\d\\d|787)\\d{7}", , , , , , , [10], [7]], [, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]], [, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]], [
          ,
          ,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          ,
          ,
          ,
          "8002345678"
        ], [, , "900[2-9]\\d{6}", , , , "9002345678"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "PR", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , "787|939", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        PS: [, [
          ,
          ,
          "[2489]2\\d{6}|(?:1\\d|5)\\d{8}",
          ,
          ,
          ,
          ,
          ,
          ,
          [8, 9, 10],
          [7]
        ], [, , "(?:22[2-47-9]|42[45]|82[014-68]|92[3569])\\d{5}", , , , "22234567", , , [8], [7]], [, , "5[69]\\d{7}", , , , "599123456", , , [9]], [, , "1800\\d{6}", , , , "1800123456", , , [10]], [, , , , , , , , , [-1]], [, , "1700\\d{6}", , , , "1700123456", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "PS", 970, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        PT: [
          ,
          [, , "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", , , , , , , [9]],
          [, , "2(?:[12]\\d|3[1-689]|4[1-59]|[57][1-9]|6[1-35689]|8[1-69]|9[1256])\\d{6}", , , , "212345678"],
          [, , "6(?:[06]92(?:30|9\\d)|[35]92(?:[049]\\d|3[034]))\\d{3}|(?:(?:16|6[0356])93|9(?:[1-36]\\d\\d|480))\\d{5}", , , , "912345678"],
          [, , "80[02]\\d{6}", , , , "800123456"],
          [, , "(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}", , , , "760123456"],
          [, , "80(?:8\\d|9[1579])\\d{5}", , , , "808123456"],
          [, , "884[0-4689]\\d{5}", , , , "884123456"],
          [, , "30\\d{7}", , , , "301234567"],
          "PT",
          351,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]],
          ,
          [, , "6(?:222\\d|8988)\\d{4}", , , , "622212345"],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , "70(?:38[01]|596|(?:7\\d|8[17])\\d)\\d{4}", , , , "707123456"],
          ,
          ,
          [, , "600\\d{6}|6[06]92(?:0\\d|3[349]|49)\\d{3}", , , , "600110000"]
        ],
        PW: [, [, , "(?:[24-8]\\d\\d|345|900)\\d{4}", , , , , , , [7]], [, , "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}", , , , "2771234"], [
          ,
          ,
          "(?:(?:46|83)[0-5]|(?:6[2-4689]|78)0)\\d{4}|(?:45|77|88)\\d{5}",
          ,
          ,
          ,
          "6201234"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "PW", 680, "01[12]", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        PY: [, [, , "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", , , , , , , [6, 7, 8, 9, 10, 11], [5]], [
          ,
          ,
          "(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|[4-68]\\d|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51|[67]\\d)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-8])|7(?:4[0-4]|5\\d|6[1-578]|75|8[0-8])|858)\\d{5,6}",
          ,
          ,
          ,
          "212345678",
          ,
          ,
          [7, 8, 9],
          [5, 6]
        ], [, , "9(?:51|6[129]|7[1-6]|8[1-7]|9[1-5])\\d{6}", , , , "961456789", , , [9]], [, , "9800\\d{5,7}", , , , "98000123456", , , [9, 10, 11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "8700[0-4]\\d{4}", , , , "870012345", , , [9]], "PY", 595, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], [, "(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], [, "(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], [
          ,
          "(\\d{2})(\\d{3})(\\d{3,4})",
          "$1 $2 $3",
          ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],
          "(0$1)"
        ], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], [, "(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "[2-9]0\\d{4,7}", , , , "201234567", , , [6, 7, 8, 9]], , , [, , , , , , , , , [-1]]],
        QA: [, [, , "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", , , , , , , [7, 8, 9, 11]], [
          ,
          ,
          "4(?:1111|2022)\\d{3}|4(?:[04]\\d\\d|14[0-6]|999)\\d{4}",
          ,
          ,
          ,
          "44123456",
          ,
          ,
          [8]
        ], [, , "[35-7]\\d{7}", , , , "33123456", , , [8]], [, , "800\\d{4}|(?:0080[01]|800)\\d{6}", , , , "8001234", , , [7, 9, 11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "QA", 974, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]], , [, , "2[16]\\d{5}", , , , "2123456", , , [7]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        RE: [, [, , "709\\d{6}|(?:26|[689]\\d)\\d{7}", , , , , , , [9]], [, , "26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}", , , , "262161234"], [
          ,
          ,
          "(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}",
          ,
          ,
          ,
          "692123456"
        ], [, , "80\\d{7}", , , , "801234567"], [, , "89[1-37-9]\\d{6}", , , , "891123456"], [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", , , , "810123456"], [, , , , , , , , , [-1]], [, , "9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}", , , , "939901234"], "RE", 262, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        RO: [, [, , "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", , , , , , , [6, 9]], [
          ,
          ,
          "[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d",
          ,
          ,
          ,
          "211234567"
        ], [, , "(?:630|702)0\\d{5}|(?:6(?:00|2\\d)|7(?:0[013-9]|1[0-3]|[2-7]\\d|8[03-8]|9[0-39]))\\d{6}", , , , "712034567", , , [9]], [, , "800\\d{6}", , , , "800123456", , , [9]], [, , "90[0136]\\d{6}", , , , "900123456", , , [9]], [, , "801\\d{6}", , , , "801123456", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "RO", 40, "00", "0", " int ", , "0", , , , [[, "(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], [, "(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], [
          ,
          "(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["[236-9]"],
          "0$1"
        ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "(?:37\\d|80[578])\\d{6}", , , , "372123456", , , [9]], , , [, , , , , , , , , [-1]]],
        RS: [, [, , "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", , , , , , , [6, 7, 8, 9, 10, 11, 12], [4, 5]], [, , "(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}", , , , "10234567", , , [7, 8, 9, 10, 11, 12], [4, 5, 6]], [, , "6(?:[0-689]|7\\d)\\d{6,7}", , , , "601234567", , , [8, 9, 10]], [
          ,
          ,
          "800\\d{3,9}",
          ,
          ,
          ,
          "80012345"
        ], [, , "(?:78\\d|90[0169])\\d{3,7}", , , , "90012345", , , [6, 7, 8, 9, 10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "RS", 381, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], [, "(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "7[06]\\d{4,10}", , , , "700123456"], , , [, , , , , , , , , [-1]]],
        RU: [, [, , "8\\d{13}|[347-9]\\d{9}", , , , , , , [10, 14], [7]], [
          ,
          ,
          "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",
          ,
          ,
          ,
          "3011234567",
          ,
          ,
          [10],
          [7]
        ], [, , "9\\d{9}", , , , "9123456789", , , [10]], [, , "8(?:0[04]|108\\d{3})\\d{7}", , , , "8001234567"], [, , "80[39]\\d{7}", , , , "8091234567", , , [10]], [, , , , , , , , , [-1]], [, , "808\\d{7}", , , , "8081234567", , , [10]], [, , , , , , , , , [-1]], "RU", 7, "810", "8", , , "8", , "8~10", , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[0-79]"]], [
          ,
          "(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],
          "8 ($1)",
          ,
          1
        ], [, "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1], [
          ,
          "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2-$3-$4",
          ["[349]|8(?:[02-7]|1[1-8])"],
          "8 ($1)",
          ,
          1
        ], [, "(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], [[, "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", , 1], [
          ,
          "(\\d{5})(\\d)(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],
          "8 ($1)",
          ,
          1
        ], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", , 1], [, "(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], [, , , , , , , , , [-1]], 1, "3[04-689]|[489]", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        RW: [, [, , "(?:06|[27]\\d\\d|[89]00)\\d{6}", , , , , , , [8, 9]], [, , "(?:06|2[23568]\\d)\\d{6}", , , , "250123456"], [, , "7[237-9]\\d{7}", , , , "720123456", , , [9]], [, , "800\\d{6}", , , , "800123456", , , [9]], [
          ,
          ,
          "900\\d{6}",
          ,
          ,
          ,
          "900123456",
          ,
          ,
          [9]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "RW", 250, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        SA: [, [, , "92\\d{7}|(?:[15]|8\\d)\\d{8}", , , , , , , [9, 10], [7]], [, , "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", , , , "112345678", , , [9], [7]], [
          ,
          ,
          "579[01]\\d{5}|5(?:[013-689]\\d|7[0-8])\\d{6}",
          ,
          ,
          ,
          "512345678",
          ,
          ,
          [9]
        ], [, , "800\\d{7}", , , , "8001234567", , , [10]], [, , "925\\d{6}", , , , "925012345", , , [9]], [, , "920\\d{6}", , , , "920012345", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SA", 966, "00", "0", , , "0", , , , [[, "(\\d{4})(\\d{5})", "$1 $2", ["9"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [
          ,
          ,
          "811\\d{7}",
          ,
          ,
          ,
          "8110123456",
          ,
          ,
          [10]
        ], , , [, , , , , , , , , [-1]]],
        SB: [, [, , "[6-9]\\d{6}|[1-6]\\d{4}", , , , , , , [5, 7]], [, , "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", , , , "40123", , , [5]], [, , "48\\d{3}|(?:(?:6[89]|7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}", , , , "7421234"], [, , "1[38]\\d{3}", , , , "18123", , , [5]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "5[12]\\d{3}", , , , "51123", , , [5]], "SB", 677, "0[01]", , , , , , , , [[, "(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]], , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        SC: [, [, , "(?:[2489]\\d|64)\\d{5}", , , , , , , [7]], [, , "4[2-46]\\d{5}", , , , "4217123"], [, , "2[125-8]\\d{5}", , , , "2510123"], [, , "800[08]\\d{3}", , , , "8000000"], [, , "85\\d{5}", , , , "8512345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "971\\d{4}|(?:64|95)\\d{5}", , , , "6412345"], "SC", 248, "010|0[0-2]", , , , , , "00", , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        SD: [, [, , "[19]\\d{8}", , , , , , , [9]], [
          ,
          ,
          "1(?:5\\d|8[35-7])\\d{6}",
          ,
          ,
          ,
          "153123456"
        ], [, , "(?:1[0-2]|9[0-3569])\\d{7}", , , , "911231234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SD", 249, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        SE: [, [, , "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", , , , , , , [6, 7, 8, 9, 10, 12]], [
          ,
          ,
          "(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d|90[1-9])\\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}",
          ,
          ,
          ,
          "8123456",
          ,
          ,
          [7, 8, 9]
        ], [, , "7[02369]\\d{7}", , , , "701234567", , , [9]], [, , "20\\d{4,7}", , , , "20123456", , , [6, 7, 8, 9]], [, , "649\\d{6}|99[1-59]\\d{4}(?:\\d{3})?|9(?:00|39|44)[1-8]\\d{3,6}", , , , "9001234567", , , [7, 8, 9, 10]], [, , "77[0-7]\\d{6}", , , , "771234567", , , [9]], [, , "75[1-8]\\d{6}", , , , "751234567", , , [9]], [, , , , , , , , , [-1]], "SE", 46, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1"], [, "(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1"], [
          ,
          "(\\d{2})(\\d{3})(\\d{2})",
          "$1-$2 $3",
          ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
          "0$1"
        ], [, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"], [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1"], [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1"], [
          ,
          "(\\d)(\\d{3})(\\d{3})(\\d{2})",
          "$1-$2 $3 $4",
          ["8"],
          "0$1"
        ], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1"]], [[, "(\\d{2})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["9(?:00|39|44|9)"]], [, "(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]], [
          ,
          "(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["8"]
        ], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]], [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1 $2 $3", ["9(?:00|39|44)"]], [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["10|7"]], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["8"]], [
          ,
          "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]
        ], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9"]], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]], [, , "74[02-9]\\d{6}", , , , "740123456", , , [9]], , , [, , , , , , , , , [-1]], [, , "10[1-8]\\d{6}", , , , "102345678", , , [9]], , , [, , "(?:25[245]|67[3-68])\\d{9}", , , , "254123456789", , , [12]]],
        SG: [, [, , "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", , , , , , , [8, 10, 11]], [
          ,
          ,
          "662[0-24-9]\\d{4}|6(?:[0-578]\\d|6[013-57-9]|9[0-35-9])\\d{5}",
          ,
          ,
          ,
          "61234567",
          ,
          ,
          [8]
        ], [, , "8970\\d{4}|(?:8(?:0[1-9]|[1-8]\\d|9[0-6])|9[0-8]\\d)\\d{5}", , , , "81234567", , , [8]], [, , "(?:18|8)00\\d{7}", , , , "18001234567", , , [10, 11]], [, , "1900\\d{7}", , , , "19001234567", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:3[12]\\d|666)\\d{5}", , , , "31234567", , , [8]], "SG", 65, "0[0-3]\\d", , , , , , , , [[, "(\\d{4,5})", "$1", ["1[013-9]|77", "1(?:[013-8]|9(?:0[1-9]|[1-9]))|77"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], [
          ,
          "(\\d{4})(\\d{4})(\\d{3})",
          "$1 $2 $3",
          ["7"]
        ], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], [[, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], [, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "7000\\d{7}", , , , "70001234567", , , [11]], , , [, , , , , , , , , [-1]]],
        SH: [
          ,
          [, , "(?:[256]\\d|8)\\d{3}", , , , , , , [4, 5]],
          [, , "2(?:[0-57-9]\\d|6[4-9])\\d\\d", , , , "22158"],
          [, , "[56]\\d{4}", , , , "51234", , , [5]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "262\\d\\d", , , , "26212", , , [5]],
          "SH",
          290,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , , , , , , , , [-1]],
          1,
          "[256]",
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        SI: [
          ,
          [, , "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", , , , , , , [5, 6, 7, 8]],
          [, , "(?:[1-357][2-8]|4[24-8])\\d{6}", , , , "12345678", , , [8], [7]],
          [, , "65(?:[178]\\d|5[56]|6[01])\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}", , , , "31234567", , , [8]],
          [, , "80\\d{4,6}", , , , "80123456", , , [6, 7, 8]],
          [, , "89[1-3]\\d{2,5}|90\\d{4,6}", , , , "90123456"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "(?:59\\d\\d|8(?:1(?:[67]\\d|8[0-589])|2(?:0\\d|2[0-37-9]|8[0-2489])|3[389]\\d))\\d{4}", , , , "59012345", , , [8]],
          "SI",
          386,
          "00|10(?:22|66|88|99)",
          "0",
          ,
          ,
          "0",
          ,
          "00",
          ,
          [[, "(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        SJ: [, [
          ,
          ,
          "0\\d{4}|(?:[489]\\d|79)\\d{6}",
          ,
          ,
          ,
          ,
          ,
          ,
          [5, 8]
        ], [, , "79\\d{6}", , , , "79123456", , , [8]], [, , "(?:4[015-8]|9\\d)\\d{6}", , , , "41234567", , , [8]], [, , "80[01]\\d{5}", , , , "80012345", , , [8]], [, , "82[09]\\d{5}", , , , "82012345", , , [8]], [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]], [, , "880\\d{5}", , , , "88012345", , , [8]], [, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "SJ", 47, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "79", [, , , , , , , , , [-1]], [, , "(?:0[235-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", , , , "02000"], , , [, , "81[23]\\d{5}", , , , "81212345", , , [8]]],
        SK: [, [
          ,
          ,
          "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
          ,
          ,
          ,
          ,
          ,
          ,
          [6, 7, 9]
        ], [, , "(?:2(?:16|[2-9]\\d{3})|(?:(?:[3-5][1-8]\\d|819)\\d|601[1-5])\\d)\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d", , , , "221234567"], [, , "909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\\d)\\d{6}", , , , "912123456", , , [9]], [, , "800\\d{6}", , , , "800123456", , , [9]], [, , "9(?:00|[78]\\d)\\d{6}", , , , "900123456", , , [9]], [, , "8[5-9]\\d{7}", , , , "850123456", , , [9]], [, , , , , , , , , [-1]], [, , "6(?:02|5[0-4]|9[0-6])\\d{6}", , , , "690123456", , , [9]], "SK", 421, "00", "0", , , "0", , , , [[
          ,
          "(\\d)(\\d{2})(\\d{3,4})",
          "$1 $2 $3",
          ["21"],
          "0$1"
        ], [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], [, "(\\d{4})(\\d{3})", "$1 $2", ["909", "9090"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], [[, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], [
          ,
          "(\\d)(\\d{3})(\\d{3})(\\d{2})",
          "$1/$2 $3 $4",
          ["2"],
          "0$1"
        ], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], [, , "9090\\d{3}", , , , "9090123", , , [7]], , , [, , "9090\\d{3}|(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}", , , , , , , [7, 9]], [, , "96\\d{7}", , , , "961234567", , , [9]], , , [, , , , , , , , , [-1]]],
        SL: [, [, , "(?:[237-9]\\d|66)\\d{6}", , , , , , , [8], [6]], [, , "22[2-4][2-9]\\d{4}", , , , "22221234", , , , [6]], [, , "(?:25|3[0-5]|66|7[1-9]|8[08]|9[09])\\d{6}", , , , "25123456"], [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SL", 232, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        SM: [
          ,
          [, , "(?:0549|[5-7]\\d)\\d{6}", , , , , , , [8, 10], [6]],
          [, , "0549(?:8[0157-9]|9\\d)\\d{4}", , , , "0549886377", , , [10], [6]],
          [, , "6[16]\\d{6}", , , , "66661212", , , [8]],
          [, , , , , , , , , [-1]],
          [, , "7[178]\\d{6}", , , , "71123456", , , [8]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "5[158]\\d{6}", , , , "58001110", , , [8]],
          "SM",
          378,
          "00",
          ,
          ,
          ,
          "([89]\\d{5})$",
          "0549$1",
          ,
          ,
          [[, "(\\d{6})", "$1", ["[89]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]],
          [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        SN: [, [, , "(?:[378]\\d|93)\\d{7}", , , , , , , [9]], [, , "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}", , , , "301012345"], [
          ,
          ,
          "7(?:(?:[06-8]\\d|[19]0|21)\\d|5(?:0[01]|[19]0|2[25]|3[356]|[4-7]\\d|8[35]))\\d{5}",
          ,
          ,
          ,
          "701234567"
        ], [, , "800\\d{6}", , , , "800123456"], [, , "88[4689]\\d{6}", , , , "884123456"], [, , "81[02468]\\d{6}", , , , "810123456"], [, , , , , , , , , [-1]], [, , "(?:3(?:392|9[01]\\d)\\d|93(?:3[13]0|929))\\d{4}", , , , "933301234"], "SN", 221, "00", , , , , , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        SO: [, [, , "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", , , , , , , [6, 7, 8, 9]], [
          ,
          ,
          "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|5[57-9])\\d{5}|(?:[134]\\d|8[125])\\d{4}",
          ,
          ,
          ,
          "4012345",
          ,
          ,
          [6, 7]
        ], [, , "(?:(?:15|(?:3[59]|4[89]|6\\d|7[679]|8[08])\\d|9(?:0\\d|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:[67]\\d\\d|904)\\d{5}", , , , "71123456", , , [7, 8, 9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SO", 252, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], [, "(\\d{6})", "$1", ["[134]"]], [, "(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], [
          ,
          "(\\d)(\\d{7})",
          "$1 $2",
          ["(?:2|90)4|[67]"]
        ], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], [, "(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        SR: [, [, , "(?:[2-5]|68|[78]\\d)\\d{5}", , , , , , , [6, 7]], [, , "(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}", , , , "211234"], [, , "(?:7[124-7]|8[1-9])\\d{5}", , , , "7412345", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "56\\d{4}", , , , "561234", , , [6]], "SR", 597, "00", , , , , , , , [[
          ,
          "(\\d{2})(\\d{2})(\\d{2})",
          "$1-$2-$3",
          ["56"]
        ], [, "(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], [, "(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        SS: [, [, , "[19]\\d{8}", , , , , , , [9]], [, , "1[89]\\d{7}", , , , "181234567"], [, , "(?:12|9[1257-9])\\d{7}", , , , "977123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SS", 211, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        ST: [, [, , "(?:22|9\\d)\\d{5}", , , , , , , [7]], [, , "22\\d{5}", , , , "2221234"], [, , "900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}", , , , "9812345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "ST", 239, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        SV: [, [, , "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", , , , , , , [7, 8, 11]], [
          ,
          ,
          "2(?:79(?:0[0347-9]|[1-9]\\d)|89(?:0[024589]|[1-9]\\d))\\d{3}|2(?:[1-69]\\d|[78][0-8])\\d{5}",
          ,
          ,
          ,
          "21234567",
          ,
          ,
          [8]
        ], [, , "[67]\\d{7}", , , , "70123456", , , [8]], [, , "800\\d{8}|80[01]\\d{4}", , , , "8001234", , , [7, 11]], [, , "900\\d{4}(?:\\d{4})?", , , , "9001234", , , [7, 11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SV", 503, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        SX: [
          ,
          [, , "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]],
          [
            ,
            ,
            "7215(?:4[2-8]|8[239]|9[056])\\d{4}",
            ,
            ,
            ,
            "7215425678",
            ,
            ,
            ,
            [7]
          ],
          [, , "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", , , , "7215205678", , , , [7]],
          [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
          [, , "900[2-9]\\d{6}", , , , "9002123456"],
          [, , , , , , , , , [-1]],
          [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
          [, , , , , , , , , [-1]],
          "SX",
          1,
          "011",
          "1",
          ,
          ,
          "(5\\d{6})$|1",
          "721$1",
          ,
          ,
          ,
          ,
          [, , , , , , , , , [-1]],
          ,
          "721",
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        SY: [, [, , "[1-39]\\d{8}|[1-5]\\d{7}", , , , , , , [8, 9], [6, 7]], [, , "21\\d{6,7}|(?:1(?:[14]\\d|[2356])|2[235]|3(?:[13]\\d|4)|4[134]|5[1-3])\\d{6}", , , , "112345678", , , , [6, 7]], [, , "9[1-9]\\d{7}", , , , "944567890", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SY", 963, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", , 1], [
          ,
          "(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["9"],
          "0$1",
          ,
          1
        ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        SZ: [, [, , "0800\\d{4}|(?:[237]\\d|900)\\d{6}", , , , , , , [8, 9]], [, , "[23][2-5]\\d{6}", , , , "22171234", , , [8]], [, , "7[6-9]\\d{6}", , , , "76123456", , , [8]], [, , "0800\\d{4}", , , , "08001234", , , [8]], [, , "900\\d{6}", , , , "900012345", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "70\\d{6}", , , , "70012345", , , [8]], "SZ", 268, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], [, "(\\d{5})(\\d{4})", "$1 $2", ["9"]]], , [, , , , , , , , , [-1]], , , [
          ,
          ,
          "0800\\d{4}",
          ,
          ,
          ,
          ,
          ,
          ,
          [8]
        ], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TA: [, [, , "8\\d{3}", , , , , , , [4]], [, , "8\\d{3}", , , , "8999"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TA", 290, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "8", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TC: [, [, , "(?:[58]\\d\\d|649|900)\\d{7}", , , , , , , [10], [7]], [, , "649(?:266|712|9(?:4\\d|50))\\d{4}", , , , "6497121234", , , , [7]], [, , "649(?:2(?:3[129]|4[1-79])|3\\d\\d|4[34][1-3])\\d{4}", , , , "6492311234", , , , [7]], [
          ,
          ,
          "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
          ,
          ,
          ,
          "8002345678"
        ], [, , "900[2-9]\\d{6}", , , , "9002345678"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , "649(?:71[01]|966)\\d{4}", , , , "6497101234", , , , [7]], "TC", 1, "011", "1", , , "([2-479]\\d{6})$|1", "649$1", , , , , [, , , , , , , , , [-1]], , "649", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TD: [, [, , "(?:22|[689]\\d|77)\\d{6}", , , , , , , [8]], [, , "22(?:[37-9]0|5[0-5]|6[89])\\d{4}", , , , "22501234"], [, , "(?:[69]\\d|77|8[56])\\d{6}", , , , "63012345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TD", 235, "00|16", , , , , , "00", , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TG: [, [, , "[279]\\d{7}", , , , , , , [8]], [, , "2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}", , , , "22212345"], [
          ,
          ,
          "(?:7[0-29]|9[0-36-9])\\d{6}",
          ,
          ,
          ,
          "90112345"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TG", 228, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TH: [, [, , "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", , , , , , , [8, 9, 10, 13]], [, , "(?:1[0689]|2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", , , , "21234567", , , [8]], [, , "67(?:1[0-8]|2[4-7])\\d{5}|(?:14|6[1-6]|[89]\\d)\\d{7}", , , , "812345678", , , [9]], [
          ,
          ,
          "(?:001800\\d|1800)\\d{6}",
          ,
          ,
          ,
          "1800123456",
          ,
          ,
          [10, 13]
        ], [, , "1900\\d{6}", , , , "1900123456", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "6[08]\\d{7}", , , , "601234567", , , [9]], "TH", 66, "00[1-9]", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TJ: [
          ,
          [, , "[0-57-9]\\d{8}", , , , , , , [9], [3, 5, 6, 7]],
          [
            ,
            ,
            "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",
            ,
            ,
            ,
            "372123456",
            ,
            ,
            ,
            [3, 5, 6, 7]
          ],
          [, , "(?:33[03-9]|4(?:1[18]|4[02-479])|81[1-9])\\d{6}|(?:[09]\\d|1[0-27-9]|2[0-27]|[34]0|5[05]|7[01578]|8[078])\\d{7}", , , , "917123456"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "TJ",
          992,
          "810",
          ,
          ,
          ,
          ,
          ,
          "8~10",
          ,
          [[, "(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], [, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        TK: [, [, , "[2-47]\\d{3,6}", , , , , , , [4, 5, 6, 7]], [, , "(?:2[2-4]|[34]\\d)\\d{2,5}", , , , "3101"], [, , "7[2-4]\\d{2,5}", , , , "7290"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TK", 690, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TL: [, [, , "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", , , , , , , [7, 8]], [, , "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", , , , "2112345", , , [7]], [
          ,
          ,
          "7[2-8]\\d{6}",
          ,
          ,
          ,
          "77212345",
          ,
          ,
          [8]
        ], [, , "80\\d{5}", , , , "8012345", , , [7]], [, , "90\\d{5}", , , , "9012345", , , [7]], [, , , , , , , , , [-1]], [, , "70\\d{5}", , , , "7012345", , , [7]], [, , , , , , , , , [-1]], "TL", 670, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["7"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TM: [, [, , "(?:[1-6]\\d|71)\\d{6}", , , , , , , [8]], [, , "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", , , , "12345678"], [
          ,
          ,
          "(?:6\\d|71)\\d{6}",
          ,
          ,
          ,
          "66123456"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TM", 993, "810", "8", , , "8", , "8~10", , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TN: [, [, , "[2-57-9]\\d{7}", , , , , , , [8]], [, , "81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}", , , , "30010123"], [
          ,
          ,
          "3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-8])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}",
          ,
          ,
          ,
          "20123456"
        ], [, , "8010\\d{4}", , , , "80101234"], [, , "88\\d{6}", , , , "88123456"], [, , "8[12]10\\d{4}", , , , "81101234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TN", 216, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TO: [, [, , "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", , , , , , , [5, 7]], [, , "(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}", , , , "20123", , , [5]], [
          ,
          ,
          "(?:5(?:4[0-5]|5[4-6])|6(?:[09]\\d|3[02]|8[15-9])|(?:7\\d|8[46-9])\\d|999)\\d{4}",
          ,
          ,
          ,
          "7715123",
          ,
          ,
          [7]
        ], [, , "0800\\d{3}", , , , "0800222", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "55[0-37-9]\\d{4}", , , , "5510123", , , [7]], "TO", 676, "00", , , , , , , , [[, "(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], [, "(\\d{4})(\\d{3})", "$1 $2", ["0"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TR: [, [, , "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", , , , , , , [7, 10, 12, 13]], [
          ,
          ,
          "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",
          ,
          ,
          ,
          "2123456789",
          ,
          ,
          [10]
        ], [, , "561(?:011|61\\d)\\d{4}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}", , , , "5012345678", , , [10]], [, , "8(?:00\\d{7}(?:\\d{2,3})?|11\\d{7})", , , , "8001234567", , , [10, 12, 13]], [, , "(?:8[89]8|900)\\d{7}", , , , "9001234567", , , [10]], [, , , , , , , , , [-1]], [, , "592(?:21[12]|461)\\d{4}", , , , "5922121234", , , [10]], [, , "850\\d{7}", , , , "8500123456", , , [10]], "TR", 90, "00", "0", , , "0", , , , [
          [, "(\\d{3})(\\d)(\\d{3})", "$1 $2 $3", ["444"], , , 1],
          [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", , 1],
          [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", , 1],
          [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", , 1],
          [, "(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", , 1]
        ], [[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", , 1], [
          ,
          "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["[24][1-8]|3[1-9]"],
          "(0$1)",
          ,
          1
        ], [, "(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", , 1]], [, , "512\\d{7}", , , , "5123456789", , , [10]], , , [, , "(?:444|811\\d{3})\\d{4}", , , , , , , [7, 10]], [, , "444\\d{4}", , , , "4441444", , , [7]], , , [, , , , , , , , , [-1]]],
        TT: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "868(?:2(?:01|1[5-9]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", , , , "8682211234", , , , [7]], [
          ,
          ,
          "868(?:(?:2[5-9]|3\\d)\\d|4(?:3[0-6]|[6-9]\\d)|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}",
          ,
          ,
          ,
          "8682911234",
          ,
          ,
          ,
          [7]
        ], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"], [, , "900[2-9]\\d{6}", , , , "9002345678"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "TT", 1, "011", "1", , , "([2-46-8]\\d{6})$|1", "868$1", , , , , [, , , , , , , , , [-1]], , "868", [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , [, , "868619\\d{4}", , , , "8686191234", , , , [7]]],
        TV: [, [, , "(?:2|7\\d\\d|90)\\d{4}", , , , , , , [5, 6, 7]], [, , "2[02-9]\\d{3}", , , , "20123", , , [5]], [, , "(?:7[01]\\d|90)\\d{4}", , , , "901234", , , [6, 7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TV", 688, "00", , , , , , , , [[, "(\\d{2})(\\d{3})", "$1 $2", ["2"]], [, "(\\d{2})(\\d{4})", "$1 $2", ["90"]], [, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        TW: [, [
          ,
          ,
          "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
          ,
          ,
          ,
          ,
          ,
          ,
          [7, 8, 9, 10, 11]
        ], [
          ,
          ,
          "(?:2[2-8]\\d|370|55[01]|7[1-9])\\d{6}|4(?:(?:0(?:0[1-9]|[2-48]\\d)|1[023]\\d)\\d{4,5}|(?:[239]\\d\\d|4(?:0[56]|12|49))\\d{5})|6(?:[01]\\d{7}|4(?:0[56]|12|24|4[09])\\d{4,5})|8(?:(?:2(?:3\\d|4[0-269]|[578]0|66)|36[24-9]|90\\d\\d)\\d{4}|4(?:0[56]|12|24|4[09])\\d{4,5})|(?:2(?:2(?:0\\d\\d|4(?:0[68]|[249]0|3[0-467]|5[0-25-9]|6[0235689]))|(?:3(?:[09]\\d|1[0-4])|(?:4\\d|5[0-49]|6[0-29]|7[0-5])\\d)\\d)|(?:(?:3[2-9]|5[2-8]|6[0-35-79]|8[7-9])\\d\\d|4(?:2(?:[089]\\d|7[1-9])|(?:3[0-4]|[78]\\d|9[01])\\d))\\d)\\d{3}",
          ,
          ,
          ,
          "221234567",
          ,
          ,
          [8, 9]
        ], [, , "(?:40001[0-2]|9[0-8]\\d{4})\\d{3}", , , , "912345678", , , [9]], [, , "80[0-79]\\d{6}|800\\d{5}", , , , "800123456", , , [8, 9]], [, , "20(?:[013-9]\\d\\d|2)\\d{4}", , , , "203123456", , , [7, 9]], [, , , , , , , , , [-1]], [, , "99\\d{7}", , , , "990123456", , , [9]], [, , "7010(?:[0-2679]\\d|3[0-7]|8[0-5])\\d{5}|70\\d{8}", , , , "7012345678", , , [10, 11]], "TW", 886, "0(?:0[25-79]|19)", "0", "#", , "0", , , , [[, "(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], [
          ,
          "(\\d)(\\d{3,4})(\\d{4})",
          "$1 $2 $3",
          ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],
          "0$1"
        ], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "50[0-46-9]\\d{6}", , , , "500123456", , , [9]], , , [, , , , , , , , , [-1]]],
        TZ: [
          ,
          [, , "(?:[25-8]\\d|41|90)\\d{7}", , , , , , , [9]],
          [, , "2[2-8]\\d{7}", , , , "222345678"],
          [, , "(?:6[125-9]|7[13-9])\\d{7}", , , , "621234567"],
          [, , "80[08]\\d{6}", , , , "800123456"],
          [, , "90\\d{7}", , , , "900123456"],
          [, , "8(?:40|6[01])\\d{6}", , , , "840123456"],
          [, , , , , , , , , [-1]],
          [, , "41\\d{7}", , , , "412345678"],
          "TZ",
          255,
          "00[056]",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["5"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , "(?:8(?:[04]0|6[01])|90\\d)\\d{6}"],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        UA: [, [, , "[89]\\d{9}|[3-9]\\d{8}", , , , , , , [9, 10], [5, 6, 7]], [
          ,
          ,
          "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",
          ,
          ,
          ,
          "311234567",
          ,
          ,
          [9],
          [5, 6, 7]
        ], [, , "790\\d{6}|(?:39|50|6[36-8]|7[1-357]|9[1-9])\\d{7}", , , , "501234567", , , [9]], [, , "800[1-8]\\d{5,6}", , , , "800123456"], [, , "900[239]\\d{5,6}", , , , "900212345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "89[1-579]\\d{6}", , , , "891234567", , , [9]], "UA", 380, "00", "0", , , "0", , "0~0", , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], [
          ,
          "(\\d{4})(\\d{5})",
          "$1 $2",
          ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],
          "0$1"
        ], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        UG: [, [, , "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", , , , , , , [9], [5, 6, 7]], [
          ,
          ,
          "20(?:(?:240|30[67])\\d|6(?:00[0-2]|30[0-4]))\\d{3}|(?:20(?:[017]\\d|2[5-9]|3[1-4]|5[0-4]|6[15-9])|[34]\\d{3})\\d{5}",
          ,
          ,
          ,
          "312345678",
          ,
          ,
          ,
          [5, 6, 7]
        ], [, , "72[48]0\\d{5}|7(?:[015-8]\\d|2[067]|36|4[0-8]|9[089])\\d{6}", , , , "712345678"], [, , "800[1-3]\\d{5}", , , , "800123456"], [, , "90[1-3]\\d{6}", , , , "901123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "UG", 256, "00[057]", "0", , , "0", , , , [[, "(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        US: [, [
          ,
          ,
          "[2-9]\\d{9}|3\\d{6}",
          ,
          ,
          ,
          ,
          ,
          ,
          [10],
          [7]
        ], [
          ,
          ,
          "(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[0-468]))\\d{4}|(?:2742|305[3-9]|472[247-9]|505[2-57-9]|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
          ,
          ,
          ,
          "2015550123",
          ,
          ,
          ,
          [7]
        ], [
          ,
          ,
          "(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[0-468]))\\d{4}|(?:2742|305[3-9]|472[247-9]|505[2-57-9]|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
          ,
          ,
          ,
          "2015550123",
          ,
          ,
          ,
          [7]
        ], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"], [, , "900[2-9]\\d{6}", , , , "9002345678"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , "305209\\d{4}", , , , "3052090123", , , , [7]], "US", 1, "011", "1", , , "1", , , 1, [
          [, "(\\d{3})(\\d{4})", "$1-$2", ["310"], , , 1],
          [, "(\\d{3})(\\d{4})", "$1-$2", ["[24-9]|3(?:[02-9]|1[1-9])"]],
          [, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], , , 1]
        ], [[, "(\\d{3})(\\d{4})", "$1-$2", ["310"], , , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-9]"]]], [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        UY: [, [, , "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", , , , , , , [6, 7, 8, 9, 10, 11, 12, 13]], [, , "(?:1(?:770|9(?:20|[89]7))|(?:2\\d|4[2-7])\\d\\d)\\d{4}", , , , "21231234", , , [8], [7]], [, , "9[1-9]\\d{6}", , , , "94231234", , , [8]], [
          ,
          ,
          "0004\\d{2,9}|(?:405|80[05])\\d{4}",
          ,
          ,
          ,
          "8001234"
        ], [, , "90[0-8]\\d{4}", , , , "9001234", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "UY", 598, "0(?:0|1[3-9]\\d)", "0", " int. ", , "0", , "00", , [[, "(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], [, "(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        UZ: [, [, , "(?:20|33|[5-9]\\d)\\d{7}", , , , , , , [9]], [, , "(?:55\\d\\d|6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|[69]\\d\\d|7(?:[23]\\d|7[69]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|[168]\\d\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|9(?:22|5[1-9])))\\d{5}", , , , "669050123"], [
          ,
          ,
          "(?:(?:[25]0|33|8[78]|9[0-57-9])\\d{3}|6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079])))|7(?:[07]\\d{3}|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07]))))\\d{4}",
          ,
          ,
          ,
          "912345678"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "UZ", 998, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        VA: [, [, , "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", , , , , , , [6, 7, 8, 9, 10, 11, 12]], [, , "06698\\d{1,6}", , , , "0669812345", , , [6, 7, 8, 9, 10, 11]], [, , "3[1-9]\\d{8}|3[2-9]\\d{7}", , , , "3123456789", , , [9, 10]], [
          ,
          ,
          "80(?:0\\d{3}|3)\\d{3}",
          ,
          ,
          ,
          "800123456",
          ,
          ,
          [6, 9]
        ], [, , "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", , , , "899123456", , , [6, 8, 9, 10]], [, , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [6, 9]], [, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]], [, , "55\\d{8}", , , , "5512345678", , , [10]], "VA", 39, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "06698", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , "3[2-8]\\d{9,10}", , , , "33101234501", , , [11, 12]]],
        VC: [
          ,
          [, , "(?:[58]\\d\\d|784|900)\\d{7}", , , , , , , [10], [7]],
          [, , "784(?:266|3(?:6[6-9]|7\\d|8[0-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", , , , "7842661234", , , , [7]],
          [, , "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\\d{4}", , , , "7844301234", , , , [7]],
          [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
          [, , "900[2-9]\\d{6}", , , , "9002345678"],
          [, , , , , , , , , [-1]],
          [
            ,
            ,
            "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
            ,
            ,
            ,
            "5002345678"
          ],
          [, , "78451[0-2]\\d{4}", , , , "7845101234", , , , [7]],
          "VC",
          1,
          "011",
          "1",
          ,
          ,
          "([2-7]\\d{6})$|1",
          "784$1",
          ,
          ,
          ,
          ,
          [, , , , , , , , , [-1]],
          ,
          "784",
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        VE: [
          ,
          [, , "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", , , , , , , [10], [7]],
          [, , "(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|[4-6]00)\\d{7}", , , , "2121234567", , , , [7]],
          [, , "4(?:1[24-8]|2[246])\\d{7}", , , , "4121234567"],
          [, , "800\\d{7}", , , , "8001234567"],
          [, , "90[01]\\d{7}", , , , "9001234567"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "VE",
          58,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1", "$CC $1"]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , "501\\d{7}", , , , "5010123456", , , , [7]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        VG: [, [, , "(?:284|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}", , , , "2842291234", , , , [7]], [, , "284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|9[69])|5(?:4[0-7]|68|9[69]))\\d{4}", , , , "2843001234", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"], [
          ,
          ,
          "900[2-9]\\d{6}",
          ,
          ,
          ,
          "9002345678"
        ], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "VG", 1, "011", "1", , , "([2-578]\\d{6})$|1", "284$1", , , , , [, , , , , , , , , [-1]], , "284", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        VI: [, [, , "[58]\\d{9}|(?:34|90)0\\d{7}", , , , , , , [10], [7]], [
          ,
          ,
          "340(?:2(?:0\\d|10|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}",
          ,
          ,
          ,
          "3406421234",
          ,
          ,
          ,
          [7]
        ], [, , "340(?:2(?:0\\d|10|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"], [, , "900[2-9]\\d{6}", , , , "9002345678"], [, , , , , , , , , [-1]], [
          ,
          ,
          "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
          ,
          ,
          ,
          "5002345678"
        ], [, , , , , , , , , [-1]], "VI", 1, "011", "1", , , "([2-9]\\d{6})$|1", "340$1", , 1, , , [, , , , , , , , , [-1]], , "340", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        VN: [, [, , "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", , , , , , , [7, 8, 9, 10]], [, , "2(?:0[3-9]|1[0-689]|2[0-25-9]|[38][2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|9[0-4679])\\d{7}", , , , "2101234567", , , [10]], [, , "(?:5(?:2[238]|59)|89[6-9]|99[013-9])\\d{6}|(?:3\\d|5[1689]|7[06-9]|8[1-8]|9[0-8])\\d{7}", , , , "912345678", , , [9]], [
          ,
          ,
          "1800\\d{4,6}|12(?:0[13]|28)\\d{4}",
          ,
          ,
          ,
          "1800123456",
          ,
          ,
          [8, 9, 10]
        ], [, , "1900\\d{4,6}", , , , "1900123456", , , [8, 9, 10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "672\\d{6}", , , , "672012345", , , [9]], "VN", 84, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[17]99"], "0$1", , 1], [, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", , 1], [, "(\\d{3})(\\d{4,5})", "$1 $2", ["69"], "0$1", , 1], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], , , 1], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", , 1], [
          ,
          "(\\d{2})(\\d{4})(\\d{4})",
          "$1 $2 $3",
          ["2[48]"],
          "0$1",
          ,
          1
        ], [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", , 1]], [[, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", , 1], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], , , 1], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", , 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", , 1], [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", , 1]], [, , , , , , , , , [-1]], , , [, , "[17]99\\d{4}|69\\d{5,6}", , , , , , , [7, 8]], [
          ,
          ,
          "(?:[17]99|80\\d)\\d{4}|69\\d{5,6}",
          ,
          ,
          ,
          "1992000",
          ,
          ,
          [7, 8]
        ], , , [, , , , , , , , , [-1]]],
        VU: [
          ,
          [, , "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", , , , , , , [5, 7]],
          [, , "(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}", , , , "22123", , , [5]],
          [, , "(?:[58]\\d|7[013-7])\\d{5}", , , , "5912345", , , [7]],
          [, , "81[18]\\d\\d", , , , "81123", , , [5]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "9(?:0[1-9]|1[01])\\d{4}", , , , "9010123", , , [7]],
          "VU",
          678,
          "00",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , "(?:3[03]|900\\d)\\d{3}", , , , "30123"],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        WF: [, [, , "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", , , , , , , [6, 9]], [, , "72\\d{4}", , , , "721234", , , [6]], [, , "(?:72|8[23])\\d{4}", , , , "821234", , , [6]], [, , "80[0-5]\\d{6}", , , , "800012345", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "9[23]\\d{4}", , , , "921234", , , [6]], "WF", 681, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , "[48]0\\d{4}", , , , "401234", , , [6]]],
        WS: [
          ,
          [, , "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", , , , , , , [5, 6, 7, 10]],
          [, , "6[1-9]\\d{3}|(?:[2-5]|60)\\d{4}", , , , "22123", , , [5, 6]],
          [, , "(?:7[1-35-7]|8(?:[3-7]|9\\d{3}))\\d{5}", , , , "7212345", , , [7, 10]],
          [, , "800\\d{3}", , , , "800123", , , [6]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "WS",
          685,
          "0",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [[, "(\\d{5})", "$1", ["[2-5]|6[1-9]"]], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], [, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        XK: [
          ,
          [, , "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", , , , , , , [8, 9, 10, 11, 12]],
          [, , "38\\d{6,10}|(?:2[89]|39)(?:0\\d{5,6}|[1-9]\\d{5})", , , , "28012345"],
          [, , "4[3-9]\\d{6}", , , , "43201234", , , [8]],
          [, , "800\\d{5}", , , , "80001234", , , [8]],
          [, , "900\\d{5}", , , , "90001234", , , [8]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "XK",
          383,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          [[, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], [
            ,
            "(\\d{2})(\\d{7,10})",
            "$1 $2",
            ["3"],
            "0$1"
          ]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        YE: [, [, , "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", , , , , , , [7, 8, 9], [6]], [, , "78[0-7]\\d{4}|17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-6])\\d{5}", , , , "1234567", , , [7, 8], [6]], [, , "7[01378]\\d{7}", , , , "712345678", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "YE", 967, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], [
          ,
          "(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["7"],
          "0$1"
        ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        YT: [
          ,
          [, , "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", , , , , , , [9]],
          [, , "269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}", , , , "269601234"],
          [, , "(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}", , , , "639012345"],
          [, , "80\\d{7}", , , , "801234567"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "9(?:(?:39|47)8[01]|769\\d)\\d{4}", , , , "939801234"],
          "YT",
          262,
          "00",
          "0",
          ,
          ,
          "0",
          ,
          ,
          ,
          ,
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        ZA: [, [, , "[1-79]\\d{8}|8\\d{4,9}", , , , , , , [5, 6, 7, 8, 9, 10]], [, , "(?:2(?:0330|4302)|52087)0\\d{3}|(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", , , , "101234567", , , [9]], [
          ,
          ,
          "(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:50[0-2]|6\\d\\d|7(?:[0-46-9]\\d|5[0-4]))\\d\\d|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}",
          ,
          ,
          ,
          "711234567",
          ,
          ,
          [5, 6, 7, 8, 9]
        ], [, , "80\\d{7}", , , , "801234567", , , [9]], [, , "(?:86[2-9]|9[0-2]\\d)\\d{6}", , , , "862345678", , , [9]], [, , "860\\d{6}", , , , "860123456", , , [9]], [, , , , , , , , , [-1]], [, , "87(?:08[0-589]|15[0-79]|28[0-4]|31[1-9])\\d{4}|87(?:[02][0-79]|1[0-46-9]|3[02-9]|[4-9]\\d)\\d{5}", , , , "871234567", , , [9]], "ZA", 27, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], [
          ,
          "(\\d{2})(\\d{3})(\\d{4})",
          "$1 $2 $3",
          ["[1-9]"],
          "0$1"
        ], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "861\\d{6,7}", , , , "861123456", , , [9, 10]], , , [, , , , , , , , , [-1]]],
        ZM: [, [, , "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", , , , , , , [9], [6]], [, , "21[1-8]\\d{6}", , , , "211234567", , , , [6]], [, , "(?:[59][5-8]|7[5-9])\\d{7}", , , , "955123456"], [, , "800\\d{6}", , , , "800123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "63\\d{7}", , , , "630123456"], "ZM", 260, "00", "0", , , "0", , , , [
          [, "(\\d{3})(\\d{3})", "$1 $2", ["[1-9]"]],
          [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
          [, "(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]
        ], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        ZW: [, [, , "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", , , , , , , [5, 6, 7, 8, 9, 10], [3, 4]], [
          ,
          ,
          "(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}",
          ,
          ,
          ,
          "1312345",
          ,
          ,
          ,
          [3, 4]
        ], [, , "7(?:[1278]\\d|3[1-9])\\d{6}", , , , "712345678", , , [9]], [, , "80(?:[01]\\d|20|8[0-8])\\d{3}", , , , "8001234", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "86(?:1[12]|22|30|44|55|77|8[368])\\d{6}", , , , "8686123456", , , [10]], "ZW", 263, "00", "0", , , "0", , , , [
          [, "(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
          [, "(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
          [, "(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
          [, "(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
          [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
          [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
          [, "(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
          [
            ,
            "(\\d{2})(\\d{3,5})",
            "$1 $2",
            ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],
            "0$1"
          ],
          [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
          [, "(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
        ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        800: [
          ,
          [, , "(?:00|[1-9]\\d)\\d{6}", , , , , , , [8]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , "(?:00|[1-9]\\d)\\d{6}", , , , "12345678"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          "001",
          800,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          1,
          [[, "(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]],
          ,
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          ,
          [, , , , , , , , , [-1]]
        ],
        808: [, [, , "[1-9]\\d{7}", , , , , , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "[1-9]\\d{7}", , , , "12345678"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "001", 808, , , , , , , , 1, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        870: [, [, , "7\\d{11}|[235-7]\\d{8}", , , , , , , [9, 12]], [, , , , , , , , , [-1]], [, , "(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}", , , , "301234567"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
          ,
          ,
          "2\\d{8}",
          ,
          ,
          ,
          "201234567",
          ,
          ,
          [9]
        ], "001", 870, , , , , , , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        878: [, [, , "10\\d{10}", , , , , , , [12]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "10\\d{10}", , , , "101234567890"], "001", 878, , , , , , , , 1, [[, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        881: [, [
          ,
          ,
          "6\\d{9}|[0-36-9]\\d{8}",
          ,
          ,
          ,
          ,
          ,
          ,
          [9, 10]
        ], [, , , , , , , , , [-1]], [, , "6\\d{9}|[0-36-9]\\d{8}", , , , "612345678"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "001", 881, , , , , , , , , [[, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], [, "(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        882: [, [, , "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", , , , , , , [7, 8, 9, 10, 11, 12]], [, , , , , , , , , [-1]], [
          ,
          ,
          "342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",
          ,
          ,
          ,
          "3421234",
          ,
          ,
          [7, 8, 9, 10, 12]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}", , , , "390123456789"], "001", 882, , , , , , , , , [[, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], [, "(\\d{2})(\\d{6})", "$1 $2", ["49"]], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], [, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], [
          ,
          "(\\d{2})(\\d{3,4})(\\d{4})",
          "$1 $2 $3",
          ["16"]
        ], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], [, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , "348[57]\\d{7}", , , , "34851234567", , , [11]]],
        883: [, [, , "(?:[1-4]\\d|51)\\d{6,10}", , , , , , , [8, 9, 10, 11, 12]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
          ,
          ,
          "(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}",
          ,
          ,
          ,
          "510012345"
        ], "001", 883, , , , , , , , 1, [[, "(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], [, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
        888: [, [, , "\\d{11}", , , , , , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "001", 888, , , , , , , , 1, [[, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "\\d{11}", , , , "12345678901"], , , [, , , , , , , , , [-1]]],
        979: [, [, , "[1359]\\d{8}", , , , , , , [9], [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "[1359]\\d{8}", , , , "123456789", , , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "001", 979, , , , , , , , 1, [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]]
      };
      function G() {
        this.g = {};
      }
      ba(G);
      var Ha = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", "\uFF10": "0", "\uFF11": "1", "\uFF12": "2", "\uFF13": "3", "\uFF14": "4", "\uFF15": "5", "\uFF16": "6", "\uFF17": "7", "\uFF18": "8", "\uFF19": "9", "\u0660": "0", "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u06F0": "0", "\u06F1": "1", "\u06F2": "2", "\u06F3": "3", "\u06F4": "4", "\u06F5": "5", "\u06F6": "6", "\u06F7": "7", "\u06F8": "8", "\u06F9": "9" }, Ia = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "+": "+",
        "*": "*",
        "#": "#"
      }, Ja = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "\uFF10": "0",
        "\uFF11": "1",
        "\uFF12": "2",
        "\uFF13": "3",
        "\uFF14": "4",
        "\uFF15": "5",
        "\uFF16": "6",
        "\uFF17": "7",
        "\uFF18": "8",
        "\uFF19": "9",
        "\u0660": "0",
        "\u0661": "1",
        "\u0662": "2",
        "\u0663": "3",
        "\u0664": "4",
        "\u0665": "5",
        "\u0666": "6",
        "\u0667": "7",
        "\u0668": "8",
        "\u0669": "9",
        "\u06F0": "0",
        "\u06F1": "1",
        "\u06F2": "2",
        "\u06F3": "3",
        "\u06F4": "4",
        "\u06F5": "5",
        "\u06F6": "6",
        "\u06F7": "7",
        "\u06F8": "8",
        "\u06F9": "9",
        A: "2",
        B: "2",
        C: "2",
        D: "3",
        E: "3",
        F: "3",
        G: "4",
        H: "4",
        I: "4",
        J: "5",
        K: "5",
        L: "5",
        M: "6",
        N: "6",
        O: "6",
        P: "7",
        Q: "7",
        R: "7",
        S: "7",
        T: "8",
        U: "8",
        V: "8",
        W: "9",
        X: "9",
        Y: "9",
        Z: "9"
      }, Ka = /[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/, La = RegExp("[+\uFF0B]+"), H = RegExp("^[+\uFF0B]+"), Ma = RegExp("([0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9])"), Na = RegExp("[+\uFF0B0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]"), Oa = /[\\\/] *x/, Pa = RegExp("[^0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9A-Za-z#]+$"), Qa = /(?:.*?[A-Za-z]){3}.*/, Ra = RegExp("^\\+([0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]|[\\-\\.\\(\\)]?)*[0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]([0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]|[\\-\\.\\(\\)]?)*$"), Sa = RegExp("^([A-Za-z0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]+((\\-)*[A-Za-z0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9])*\\.)*[A-Za-z]+((\\-)*[A-Za-z0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9])*\\.?$");
      function I(a) {
        return "([0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]{1," + a + "})";
      }
      function Ta() {
        return ";ext=" + I("20") + "|[ \xA0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)[:\\.\uFF0E]?[ \xA0\\t,-]*" + (I("20") + "#?|[ \xA0\\t,]*(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)[:\\.\uFF0E]?[ \xA0\\t,-]*") + (I("9") + "#?|[- ]+") + (I("6") + "#|[ \xA0\\t]*(?:,{2}|;)[:\\.\uFF0E]?[ \xA0\\t,-]*") + (I("15") + "#?|[ \xA0\\t]*(?:,)+[:\\.\uFF0E]?[ \xA0\\t,-]*") + (I("9") + "#?");
      }
      var Ua = new RegExp("(?:" + Ta() + ")$", "i"), Va = new RegExp("^[0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]{2}$|^[+\uFF0B]*(?:[-x\u2010-\u2015\u2212\u30FC\uFF0D-\uFF0F \xA0\xAD\u200B\u2060\u3000()\uFF08\uFF09\uFF3B\uFF3D.\\[\\]/~\u2053\u223C\uFF5E*]*[0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]){3,}[-x\u2010-\u2015\u2212\u30FC\uFF0D-\uFF0F \xA0\xAD\u200B\u2060\u3000()\uFF08\uFF09\uFF3B\uFF3D.\\[\\]/~\u2053\u223C\uFF5E*A-Za-z0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]*(?:" + Ta() + ")?$", "i"), Wa = /(\$\d)/, Xa = /^\(?\$1\)?$/;
      function Ya(a) {
        return 2 > a.length ? false : J(Va, a);
      }
      function Za(a) {
        return J(Qa, a) ? $a(a, Ja) : $a(a, Ha);
      }
      function ab(a) {
        var b = Za(a.toString());
        A(a);
        a.g(b);
      }
      function bb() {
        return Object.keys(Ga).filter(function(a) {
          return isNaN(a);
        });
      }
      function cb() {
        return Object.keys(Ga).filter(function(a) {
          return !isNaN(a);
        }).map(function(a) {
          return parseInt(a, 10);
        });
      }
      function db() {
        var a = Object.keys(F);
        return [...cb(), ...a.map(function(b) {
          return parseInt(b, 10);
        })];
      }
      function $a(a, b) {
        for (var c = new z(), d, e = a.length, f = 0; f < e; ++f) d = a.charAt(f), d = b[d.toUpperCase()], null != d && c.g(d);
        return c.toString();
      }
      function fb(a) {
        return 0 == a.length || Xa.test(a);
      }
      function K(a) {
        return null != a && isNaN(a) && a.toUpperCase() in Ga;
      }
      G.prototype.format = function(a, b) {
        if (0 == p(a, 2) && m(a, 5)) {
          var c = u(a, 5);
          if (0 < c.length) return c;
        }
        c = u(a, 1);
        var d = L(a);
        if (0 == b) return gb(c, 0, d, "");
        if (!(c in F)) return d;
        var e = M(this, c, N(c));
        a = hb(a, e, b);
        d = ib(d, e, b);
        return gb(c, b, d, a);
      };
      function M(a, b, c) {
        return "001" == c ? O(a, "" + b) : O(a, c);
      }
      function jb(a, b) {
        var c = P;
        if (!K(b)) return c.format(a, 1);
        var d = u(a, 1), e = L(a);
        if (!(d in F)) return e;
        if (1 == d) {
          if (null != b && F[1].includes(b.toUpperCase())) return d + " " + c.format(a, 2);
        } else if (d == Q(c, b)) return c.format(a, 2);
        var f = O(c, b), g = u(f, 11);
        b = "";
        m(f, 17) ? b = u(f, 17) : J(Ka, g) && (b = g);
        c = M(c, d, N(d));
        e = ib(e, c, 1);
        a = hb(a, c, 1);
        return 0 < b.length ? b + " " + d + " " + e + a : gb(d, 1, e, a);
      }
      function L(a) {
        if (!m(a, 2)) return "";
        var b = "" + p(a, 2);
        return m(a, 4) && p(a, 4) && 0 < u(a, 8) ? Array(u(a, 8) + 1).join("0") + b : b;
      }
      function gb(a, b, c, d) {
        switch (b) {
          case 0:
            return "+" + a + c + d;
          case 1:
            return "+" + a + " " + c + d;
          case 3:
            return "tel:+" + a + "-" + c + d;
          default:
            return c + d;
        }
      }
      function ib(a, b, c) {
        b = 0 == r(b, 20).length || 2 == c ? r(b, 19) : r(b, 20);
        a: {
          for (var d, e = b.length, f = 0; f < e; ++f) {
            d = b[f];
            var g = v(d, 3);
            if (0 == g || 0 == a.search(p(d, 3, g - 1))) {
              if (g = new RegExp(p(d, 1)), J(g, a)) {
                b = d;
                break a;
              }
            }
          }
          b = null;
        }
        null == b ? c = a : (e = b, b = u(e, 2), d = new RegExp(p(e, 1)), u(e, 5), e = u(e, 4), a = 2 == c && null != e && 0 < e.length ? a.replace(d, b.replace(Wa, e)) : a.replace(d, b), 3 == c && (a = a.replace(RegExp("^[-x\u2010-\u2015\u2212\u30FC\uFF0D-\uFF0F \xA0\xAD\u200B\u2060\u3000()\uFF08\uFF09\uFF3B\uFF3D.\\[\\]/~\u2053\u223C\uFF5E]+"), ""), a = a.replace(RegExp("[-x\u2010-\u2015\u2212\u30FC\uFF0D-\uFF0F \xA0\xAD\u200B\u2060\u3000()\uFF08\uFF09\uFF3B\uFF3D.\\[\\]/~\u2053\u223C\uFF5E]+", "g"), "-")), c = a);
        return c;
      }
      function kb(a, b) {
        var c = P;
        if (!K(a)) return null;
        b = lb(O(c, a), b);
        try {
          if (m(b, 6)) {
            var d = p(b, 6);
            return mb(c, d, a);
          }
        } catch (e) {
        }
        return null;
      }
      function hb(a, b, c) {
        return m(a, 3) && 0 != p(a, 3).length ? 3 == c ? ";ext=" + p(a, 3) : m(b, 13) ? p(b, 13) + u(a, 3) : " ext. " + u(a, 3) : "";
      }
      function lb(a, b) {
        switch (b) {
          case 4:
            return p(a, 5);
          case 3:
            return p(a, 4);
          case 1:
            return p(a, 3);
          case 0:
          case 2:
            return p(a, 2);
          case 5:
            return p(a, 6);
          case 6:
            return p(a, 8);
          case 7:
            return p(a, 7);
          case 8:
            return p(a, 21);
          case 9:
            return p(a, 25);
          case 10:
            return p(a, 28);
          default:
            return p(a, 1);
        }
      }
      function nb(a, b) {
        return R(a, p(b, 1)) ? R(a, p(b, 5)) ? 4 : R(a, p(b, 4)) ? 3 : R(a, p(b, 6)) ? 5 : R(a, p(b, 8)) ? 6 : R(a, p(b, 7)) ? 7 : R(a, p(b, 21)) ? 8 : R(a, p(b, 25)) ? 9 : R(a, p(b, 28)) ? 10 : R(a, p(b, 2)) ? p(b, 18) || R(a, p(b, 3)) ? 2 : 0 : !p(b, 18) && R(a, p(b, 3)) ? 1 : -1 : -1;
      }
      function O(a, b) {
        if (null == b) return null;
        b = b.toUpperCase();
        var c = a.g[b];
        if (null == c) {
          c = Ga[b];
          if (null == c) return null;
          c = new y().g(D.m(), c);
          a.g[b] = c;
        }
        return c;
      }
      function R(a, b) {
        var c = a.length;
        return 0 < v(b, 9) && -1 == r(b, 9).indexOf(c) ? false : J(u(b, 2), a);
      }
      function ob(a) {
        var b = P, c = T(b, a);
        var d = u(a, 1);
        var e = M(b, d, c);
        null == e || "001" != c && d != Q(b, c) ? e = false : (a = L(a), e = -1 != nb(a, e));
        return e;
      }
      function T(a, b) {
        if (null == b) return null;
        var c = u(b, 1);
        c = F[c];
        if (null == c) a = null;
        else if (1 == c.length) a = c[0];
        else a: {
          b = L(b);
          for (var d, e = c.length, f = 0; f < e; f++) {
            d = c[f];
            var g = O(a, d);
            if (m(g, 23)) {
              if (0 == b.search(p(g, 23))) {
                a = d;
                break a;
              }
            } else if (-1 != nb(b, g)) {
              a = d;
              break a;
            }
          }
          a = null;
        }
        return a;
      }
      function N(a) {
        a = F[a];
        return null == a ? "ZZ" : a[0];
      }
      function Q(a, b) {
        a = O(a, b);
        if (null == a) throw Error("Invalid region code: " + b);
        return u(a, 10);
      }
      function pb(a) {
        a = qb(a);
        return 0 == a || 4 == a;
      }
      function rb(a, b, c, d) {
        var e = lb(c, d), f = 0 == v(e, 9) ? r(p(c, 1), 9) : r(e, 9);
        e = r(e, 10);
        if (-1 == f[0]) return 5;
        b = b.length;
        if (-1 < e.indexOf(b)) return 4;
        c = f[0];
        return c == b ? 0 : c > b ? 2 : f[f.length - 1] < b ? 3 : -1 < f.indexOf(b, 1) ? 0 : 5;
      }
      function qb(a) {
        var b = P, c = L(a);
        a = u(a, 1);
        if (!(a in F)) return 1;
        a = M(b, a, N(a));
        return rb(b, c, a, -1);
      }
      function sb(a, b) {
        a = a.toString();
        if (0 == a.length || "0" == a.charAt(0)) return 0;
        for (var c, d = a.length, e = 1; 3 >= e && e <= d; ++e) if (c = parseInt(a.substring(0, e), 10), c in F) return b.g(a.substring(e)), c;
        return 0;
      }
      function tb(a, b, c, d, e) {
        if (0 == b.length) return 0;
        b = new z(b);
        var f;
        null != c && (f = p(c, 11));
        null == f && (f = "NonMatch");
        var g = b.toString();
        if (0 == g.length) f = 20;
        else if (H.test(g)) g = g.replace(H, ""), A(b), b.g(Za(g)), f = 1;
        else {
          g = new RegExp(f);
          ab(b);
          f = b.toString();
          if (0 == f.search(g)) {
            g = f.match(g)[0].length;
            var k = f.substring(g).match(Ma);
            k && null != k[1] && 0 < k[1].length && "0" == $a(k[1], Ha) ? f = false : (A(b), b.g(f.substring(g)), f = true);
          } else f = false;
          f = f ? 5 : 20;
        }
        if (20 != f) {
          if (2 >= b.h.length) throw Error("Phone number too short after IDD");
          a = sb(
            b,
            d
          );
          if (0 != a) return q(e, 1, a), a;
          throw Error("Invalid country calling code");
        }
        if (null != c && (f = u(c, 10), g = "" + f, k = b.toString(), 0 == k.lastIndexOf(g, 0) && (g = new z(k.substring(g.length)), k = p(c, 1), k = new RegExp(u(k, 2)), ub(g, c, null), g = g.toString(), !J(k, b.toString()) && J(k, g) || 3 == rb(a, b.toString(), c, -1)))) return d.g(g), q(e, 1, f), f;
        q(e, 1, 0);
        return 0;
      }
      function ub(a, b, c) {
        var d = a.toString(), e = d.length, f = p(b, 15);
        if (0 != e && null != f && 0 != f.length) {
          var g = new RegExp("^(?:" + f + ")");
          if (e = g.exec(d)) {
            f = new RegExp(u(p(b, 1), 2));
            var k = J(f, d), n = e.length - 1;
            b = p(b, 16);
            if (null == b || 0 == b.length || null == e[n] || 0 == e[n].length) {
              if (!k || J(f, d.substring(e[0].length))) null != c && 0 < n && null != e[n] && c.g(e[1]), a.set(d.substring(e[0].length));
            } else if (d = d.replace(g, b), !k || J(f, d)) null != c && 0 < n && c.g(e[1]), a.set(d);
          }
        }
      }
      function mb(a, b, c) {
        if (null == b) throw Error("The string supplied did not seem to be a phone number");
        if (250 < b.length) throw Error("The string supplied is too long to be a phone number");
        var d = new z();
        var e = b.indexOf(";phone-context=");
        if (-1 === e) e = null;
        else if (e += 15, e >= b.length) e = "";
        else {
          var f = b.indexOf(";", e);
          e = -1 !== f ? b.substring(e, f) : b.substring(e);
        }
        var g = e;
        null == g ? f = true : 0 === g.length ? f = false : (f = Ra.exec(g), g = Sa.exec(g), f = null !== f || null !== g);
        if (!f) throw Error("The string supplied did not seem to be a phone number");
        null != e ? ("+" === e.charAt(0) && d.g(e), e = b.indexOf("tel:"), d.g(b.substring(0 <= e ? e + 4 : 0, b.indexOf(";phone-context=")))) : (e = d.g, b = null != b ? b : "", f = b.search(Na), 0 <= f ? (b = b.substring(f), b = b.replace(Pa, ""), f = b.search(Oa), 0 <= f && (b = b.substring(0, f))) : b = "", e.call(d, b));
        b = d.toString();
        e = b.indexOf(";isub=");
        0 < e && (A(d), d.g(b.substring(0, e)));
        if (!Ya(d.toString())) throw Error("The string supplied did not seem to be a phone number");
        b = d.toString();
        if (!(K(c) || null != b && 0 < b.length && H.test(b))) throw Error("Invalid country calling code");
        b = new E();
        a: {
          e = d.toString();
          f = e.search(Ua);
          if (0 <= f && Ya(e.substring(0, f))) {
            g = e.match(Ua);
            for (var k = g.length, n = 1; n < k; ++n) if (null != g[n] && 0 < g[n].length) {
              A(d);
              d.g(e.substring(0, f));
              e = g[n];
              break a;
            }
          }
          e = "";
        }
        0 < e.length && q(b, 3, e);
        f = O(a, c);
        e = new z();
        g = 0;
        k = d.toString();
        try {
          g = tb(a, k, f, e, b);
        } catch (w) {
          if ("Invalid country calling code" == w.message && H.test(k)) {
            if (k = k.replace(H, ""), g = tb(a, k, f, e, b), 0 == g) throw w;
          } else throw w;
        }
        0 != g ? (d = N(g), d != c && (f = M(a, g, d))) : (ab(d), e.g(d.toString()), null != c && (g = u(f, 10), q(b, 1, g)));
        if (2 > e.h.length) throw Error("The string supplied is too short to be a phone number");
        null != f && (c = new z(e.toString()), ub(c, f, new z()), a = rb(a, c.toString(), f, -1), 2 != a && 4 != a && 5 != a && (e = c));
        a = e.toString();
        c = a.length;
        if (2 > c) throw Error("The string supplied is too short to be a phone number");
        if (17 < c) throw Error("The string supplied is too long to be a phone number");
        if (1 < a.length && "0" == a.charAt(0)) {
          q(b, 4, true);
          for (c = 1; c < a.length - 1 && "0" == a.charAt(c); ) c++;
          1 != c && q(b, 8, c);
        }
        q(b, 2, parseInt(a, 10));
        return b;
      }
      G.prototype.ia = function(a) {
        var b = O(this, T(this, a));
        if (null == b) return true;
        a = L(a);
        return !R(a, p(b, 24));
      };
      function J(a, b) {
        return (a = b.match(new RegExp("^(?:" + ("string" == typeof a ? a : a.source) + ")$", "i"))) && a[0].length == b.length ? true : false;
      }
      function vb(a) {
        this.ja = RegExp("\u2008");
        this.ka = "";
        this.$ = new z();
        this.da = "";
        this.s = new z();
        this.ba = new z();
        this.u = true;
        this.ea = this.ca = this.na = false;
        this.pa = G.oa();
        this.aa = 0;
        this.h = new z();
        this.ga = false;
        this.o = "";
        this.g = new z();
        this.j = [];
        this.la = a;
        this.xa = this.l = wb(this, this.la);
      }
      var xb = new D();
      q(xb, 11, "NA");
      var yb = RegExp("^[-x\u2010-\u2015\u2212\u30FC\uFF0D-\uFF0F \xA0\xAD\u200B\u2060\u3000()\uFF08\uFF09\uFF3B\uFF3D.\\[\\]/~\u2053\u223C\uFF5E]*\\$1[-x\u2010-\u2015\u2212\u30FC\uFF0D-\uFF0F \xA0\xAD\u200B\u2060\u3000()\uFF08\uFF09\uFF3B\uFF3D.\\[\\]/~\u2053\u223C\uFF5E]*(\\$\\d[-x\u2010-\u2015\u2212\u30FC\uFF0D-\uFF0F \xA0\xAD\u200B\u2060\u3000()\uFF08\uFF09\uFF3B\uFF3D.\\[\\]/~\u2053\u223C\uFF5E]*)*$"), zb = /[- ]/;
      function wb(a, b) {
        b = K(b) ? Q(a.pa, b) : 0;
        a = O(a.pa, N(b));
        return null != a ? a : xb;
      }
      function Ab(a) {
        for (var b = a.j.length, c = 0; c < b; ++c) {
          var d = a.j[c], e = u(d, 1);
          if (a.da == e) return false;
          var f = a;
          var g = d, k = u(g, 1);
          A(f.$);
          var n = f;
          g = u(g, 2);
          var w = "999999999999999".match(k)[0];
          w.length < n.g.h.length ? n = "" : (n = w.replace(new RegExp(k, "g"), g), n = n.replace(RegExp("9", "g"), "\u2008"));
          0 < n.length ? (f.$.g(n), f = true) : f = false;
          if (f) return a.da = e, a.ga = zb.test(p(d, 4)), a.aa = 0, true;
        }
        return a.u = false;
      }
      function Bb(a, b) {
        for (var c = [], d = b.length - 3, e = a.j.length, f = 0; f < e; ++f) {
          var g = a.j[f];
          0 == v(g, 3) ? c.push(a.j[f]) : (g = p(g, 3, Math.min(d, v(g, 3) - 1)), 0 == b.search(g) && c.push(a.j[f]));
        }
        a.j = c;
      }
      function Cb(a, b) {
        a.s.g(b);
        var c = b;
        Ma.test(c) || 1 == a.s.h.length && La.test(c) ? ("+" == b ? (c = b, a.ba.g(b)) : (c = Ha[b], a.ba.g(c), a.g.g(c)), b = c) : (a.u = false, a.na = true);
        if (!a.u) {
          if (!a.na) {
            if (Db(a)) {
              if (Eb(a)) return Fb(a);
            } else if (0 < a.o.length && (b = a.g.toString(), A(a.g), a.g.g(a.o), a.g.g(b), b = a.h.toString(), c = b.lastIndexOf(a.o), A(a.h), a.h.g(b.substring(0, c))), a.o != Gb(a)) return a.h.g(" "), Fb(a);
          }
          return a.s.toString();
        }
        switch (a.ba.h.length) {
          case 0:
          case 1:
          case 2:
            return a.s.toString();
          case 3:
            if (Db(a)) a.ea = true;
            else return a.o = Gb(a), Hb(a);
          default:
            if (a.ea) return Eb(a) && (a.ea = false), a.h.toString() + a.g.toString();
            if (0 < a.j.length) {
              b = Ib(a, b);
              c = Jb(a);
              if (0 < c.length) return c;
              Bb(a, a.g.toString());
              return Ab(a) ? Kb(a) : a.u ? Lb(a, b) : a.s.toString();
            }
            return Hb(a);
        }
      }
      function Fb(a) {
        a.u = true;
        a.ea = false;
        a.j = [];
        a.aa = 0;
        A(a.$);
        a.da = "";
        return Hb(a);
      }
      function Jb(a) {
        for (var b = a.g.toString(), c = a.j.length, d = 0; d < c; ++d) {
          var e = a.j[d], f = u(e, 1);
          if (new RegExp("^(?:" + f + ")$").test(b) && (a.ga = zb.test(p(e, 4)), e = b.replace(new RegExp(f, "g"), p(e, 2)), e = Lb(a, e), $a(e, Ia) == a.ba)) return e;
        }
        return "";
      }
      function Lb(a, b) {
        var c = a.h.h.length;
        return a.ga && 0 < c && " " != a.h.toString().charAt(c - 1) ? a.h + " " + b : a.h + b;
      }
      function Hb(a) {
        var b = a.g.toString();
        if (3 <= b.length) {
          for (var c = a.ca && 0 == a.o.length && 0 < v(a.l, 20) ? r(a.l, 20) : r(a.l, 19), d = c.length, e = 0; e < d; ++e) {
            var f = c[e];
            0 < a.o.length && fb(u(f, 4)) && !p(f, 6) && !m(f, 5) || (0 != a.o.length || a.ca || fb(u(f, 4)) || p(f, 6)) && yb.test(u(f, 2)) && a.j.push(f);
          }
          Bb(a, b);
          b = Jb(a);
          return 0 < b.length ? b : Ab(a) ? Kb(a) : a.s.toString();
        }
        return Lb(a, b);
      }
      function Kb(a) {
        var b = a.g.toString(), c = b.length;
        if (0 < c) {
          for (var d = "", e = 0; e < c; e++) d = Ib(a, b.charAt(e));
          return a.u ? Lb(a, d) : a.s.toString();
        }
        return a.h.toString();
      }
      function Gb(a) {
        var b = a.g.toString(), c = 0;
        if (1 != a.l.ha()) var d = false;
        else d = a.g.toString(), d = "1" == d.charAt(0) && "0" != d.charAt(1) && "1" != d.charAt(1);
        d ? (c = 1, a.h.g("1").g(" "), a.ca = true) : m(a.l, 15) && (d = new RegExp("^(?:" + p(a.l, 15) + ")"), d = b.match(d), null != d && null != d[0] && 0 < d[0].length && (a.ca = true, c = d[0].length, a.h.g(b.substring(0, c))));
        A(a.g);
        a.g.g(b.substring(c));
        return b.substring(0, c);
      }
      function Db(a) {
        var b = a.ba.toString(), c = new RegExp("^(?:\\+|" + p(a.l, 11) + ")");
        c = b.match(c);
        return null != c && null != c[0] && 0 < c[0].length ? (a.ca = true, c = c[0].length, A(a.g), a.g.g(b.substring(c)), A(a.h), a.h.g(b.substring(0, c)), "+" != b.charAt(0) && a.h.g(" "), true) : false;
      }
      function Eb(a) {
        if (0 == a.g.h.length) return false;
        var b = new z(), c = sb(a.g, b);
        if (0 == c) return false;
        A(a.g);
        a.g.g(b.toString());
        b = N(c);
        "001" == b ? a.l = O(a.pa, "" + c) : b != a.la && (a.l = wb(a, b));
        a.h.g("" + c).g(" ");
        a.o = "";
        return true;
      }
      function Ib(a, b) {
        var c = a.$.toString();
        if (0 <= c.substring(a.aa).search(a.ja)) {
          var d = c.search(a.ja);
          b = c.replace(a.ja, b);
          A(a.$);
          a.$.g(b);
          a.aa = d;
          return b.substring(0, a.aa + 1);
        }
        1 == a.j.length && (a.u = false);
        a.da = "";
        return a.s.toString();
      }
      var Mb = {
        AC: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|99)", , , , "911"], [, , , , , , , , , [-1]], , , , "AC", , , , , , , , , , , , , , , , , , [, , "9(?:11|99)", , , , "911"], , [, , "9(?:11|99)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        AD: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[0268]", , , , "110"], [, , , , , , , , , [-1]], , , , "AD", , , , , , , , , , , , , , , , , , [, , "11[0268]", , , , "110"], , [, , "11[0268]", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        AE: [
          ,
          [, , "[149]\\d{2,3}", , , , , , , [3, 4]],
          ,
          ,
          [, , "112|99[7-9]", , , , "112", , , [3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "AE",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "112|99[7-9]", , , , "112", , , [3]],
          ,
          [, , "112|445[16]|99[7-9]", , , , "112"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , "445\\d", , , , "4450", , , [4]]
        ],
        AF: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "1(?:0[02]|19)", , , , "100", , , [3]], [, , , , , , , , , [-1]], , , , "AF", , , , , , , , , , , , , , , , , , [, , "1(?:0[02]|19)", , , , "100", , , [3]], , [, , "1(?:0[02]|19)|40404", , , , "100"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
        AG: [
          ,
          [, , "[19]\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "9(?:11|88|99)", , , , "911"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "AG",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "9(?:11|99)", , , , "911"],
          ,
          [, , "176|9(?:11|88|99)", , , , "176"],
          [, , , , , , , , , [-1]],
          [, , "176", , , , "176"],
          ,
          [, , "176", , , , "176"]
        ],
        AI: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "AI", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "176|9(?:11|88)", , , , "176"], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
        AL: [
          ,
          [, , "[15]\\d{2,5}", , , , , , , [3, 4, 5, 6]],
          ,
          ,
          [, , "1(?:1(?:2|6[01]\\d\\d)|2[7-9]|3[15]|41)", , , , "112", , , [3, 6]],
          [, , "5\\d{4}", , , , "50000", , , [5]],
          ,
          ,
          ,
          "AL",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:12|2[7-9])", , , , "112", , , [3]],
          ,
          [, , "1(?:1(?:6(?:000|1(?:06|11|23))|8\\d\\d)|65\\d|89[12])|5\\d{4}|1(?:[1349]\\d|2[2-9])", , , , "110"],
          [, , , , , , , , , [-1]],
          [, , "123", , , , "123", , , [3]],
          ,
          [, , "131|5\\d{4}", , , , "131", , , [3, 5]]
        ],
        AM: [, [, , "[148]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "10[1-3]", , , , "101", , , [3]], [, , , , , , , , , [-1]], , , , "AM", , , , , , , , , , , , , , , , , , [, , "10[1-3]", , , , "101", , , [3]], , [, , "(?:1|8[1-7])\\d\\d|40404", , , , "100"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
        AO: [, [
          ,
          ,
          "1\\d\\d",
          ,
          ,
          ,
          ,
          ,
          ,
          [3]
        ], , , [, , "11[235]", , , , "112"], [, , , , , , , , , [-1]], , , , "AO", , , , , , , , , , , , , , , , , , [, , "11[235]", , , , "112"], , [, , "11[235]", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        AR: [, [, , "[01389]\\d{1,4}", , , , , , , [2, 3, 4, 5]], , , [, , "000|1(?:0[0-35-7]|1[0245]|2[015]|3[47]|4[478]|9)|911", , , , "19", , , [2, 3]], [, , , , , , , , , [-1]], , , , "AR", , , , , , , , , , , , , , , , , , [, , "10[017]|911", , , , "100", , , [3]], , [, , "000|1(?:0[0-35-7]|1[02-5]|2[015]|3[47]|4[478]|9)|3372|89338|911", , , , "19"], [, , , , , , , , , [-1]], [, , "893\\d\\d", , , , "89300", , , [5]], , [
          ,
          ,
          "(?:337|893\\d)\\d",
          ,
          ,
          ,
          "3370",
          ,
          ,
          [4, 5]
        ]],
        AS: [, [, , "[49]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "9(?:11|88)", , , , "911", , , [3]], [, , , , , , , , , [-1]], , , , "AS", , , , , , , , , , , , , , , , , , [, , "911", , , , "911", , , [3]], , [, , "40404|9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
        AT: [, [, , "[1268]\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]], , , [, , "1(?:12|2[0238]|3[03]|4[0-247])|1(?:16\\d\\d|4[58])\\d", , , , "112"], [, , , , , , , , , [-1]], , , , "AT", , , , , , , , , , , , , , , , , , [, , "1(?:[12]2|33|44)", , , , "112", , , [3]], , [
          ,
          ,
          "1(?:1(?:2|6(?:00[06]|1(?:17|23)))|2[0238]|3[03]|4(?:[0-247]|5[05]|84))|(?:220|61|8108[1-3])0",
          ,
          ,
          ,
          "112"
        ], [, , , , , , , , , [-1]], [, , "(?:220|810\\d\\d)\\d|610", , , , "610"], , [, , , , , , , , , [-1]]],
        AU: [, [, , "[0-27]\\d{2,7}", , , , , , , [3, 4, 5, 6, 7, 8]], , , [, , "000|1(?:06|12|258885|55\\d)|733", , , , "000", , , [3, 4, 7]], [, , "1(?:2(?:34|456)|9\\d{4,6})", , , , "1234", , , [4, 5, 6, 7, 8]], , , , "AU", , , , , , , , , , , , , , , , , , [, , "000|1(?:06|12)", , , , "000", , , [3]], , [, , "000|1(?:06|1(?:00|2|9[46])|2(?:014[1-3]|[23]\\d|(?:4|5\\d)\\d{2,3}|68[689]|72(?:20|3\\d\\d)|8(?:[013-9]\\d|2))|555|9\\d{4,6})|225|7(?:33|67)", , , , "000"], [
          ,
          ,
          "1(?:1[09]\\d|24733)|225|767",
          ,
          ,
          ,
          "225",
          ,
          ,
          [3, 4, 6]
        ], [, , "1(?:258885|55\\d)", , , , "1550", , , [4, 7]], , [, , "19\\d{4,6}", , , , "190000", , , [6, 7, 8]]],
        AW: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "100|911", , , , "100"], [, , , , , , , , , [-1]], , , , "AW", , , , , , , , , , , , , , , , , , [, , "100|911", , , , "100"], , [, , "1(?:00|18|76)|91[13]", , , , "100"], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
        AX: [, [, , "[17]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "112", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "AX", , , , , , , , , , , , , , , , , , [, , "112", , , , "112", , , [3]], , [, , "112|75[12]\\d\\d", , , , "112"], [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , [, , , , , , , , , [-1]]],
        AZ: [, [, , "[148]\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:0[1-3]|12)", , , , "101", , , [3]], [, , , , , , , , , [-1]], , , , "AZ", , , , , , , , , , , , , , , , , , [, , "1(?:0[1-3]|12)", , , , "101", , , [3]], , [, , "1(?:0[1-3]|12)|(?:404|880)0", , , , "101"], [, , , , , , , , , [-1]], [, , "(?:404|880)\\d", , , , "4040", , , [4]], , [, , "(?:404|880)\\d", , , , "4040", , , [4]]],
        BA: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:16\\d{3}|2[2-4])", , , , "122", , , [3, 6]], [, , , , , , , , , [-1]], , , , "BA", , , , , , , , , , , , , , , , , , [, , "12[2-4]", , , , "122", , , [3]], , [
          ,
          ,
          "1(?:16(?:00[06]|1(?:1[17]|23))|2(?:0[0-7]|[2-5]|6[0-26])|(?:[3-5]|7\\d)\\d\\d)|1(?:18|2[78])\\d\\d?",
          ,
          ,
          ,
          "122"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        BB: [, [, , "[2-689]\\d\\d", , , , , , , [3]], , , [, , "988|[2359]11", , , , "211"], [, , , , , , , , , [-1]], , , , "BB", , , , , , , , , , , , , , , , , , [, , "[2359]11", , , , "211"], , [, , "988|[2-689]11", , , , "211"], [, , , , , , , , , [-1]], [, , "[468]11", , , , "411"], , [, , , , , , , , , [-1]]],
        BD: [, [, , "[1579]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "10[0-26]|[19]99", , , , "100", , , [3]], [, , , , , , , , , [-1]], , , , "BD", , , , , , , , , , , , , , , , , , [, , "10[0-2]|[19]99", , , , "100", , , [3]], , [
          ,
          ,
          "1(?:0(?:[0-369]|5[1-4]|7[0-4]|8[0-29])|1[16-9]|2(?:[134]|2[0-5])|3(?:1\\d?|6[3-6])|5[2-9])|5012|786|9594|[19]99|1(?:0(?:50|6\\d)|33|4(?:0|1\\d))\\d",
          ,
          ,
          ,
          "100"
        ], [, , , , , , , , , [-1]], [, , "1(?:11|2[13])|(?:501|959)\\d|786", , , , "111", , , [3, 4]], , [, , "959\\d", , , , "9590", , , [4]]],
        BE: [, [, , "[1-9]\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]], , , [, , "1(?:0[0-35-8]|1[0269]|7(?:12|77)|813)|(?:116|8)\\d{3}", , , , "100"], [, , "1(?:2[03]|40)4|(?:1(?:[24]1|3[01])|[2-79]\\d\\d)\\d", , , , "1204", , , [4]], , , , "BE", , , , , , , , , , , , , , , , , , [, , "1(?:0[01]|12)", , , , "100", , , [3]], , [
          ,
          ,
          "1(?:0[0-8]|16117|2(?:12|3[0-24])|313|414|5(?:1[05]|5[15]|66|95)|6(?:1[167]|36|6[16])|7(?:[07][017]|1[27-9]|22|33|65)|81[39])|[2-9]\\d{3}|11[02679]|1(?:1600|45)0|1(?:[2-4]9|78)9|1[2-4]0[47]",
          ,
          ,
          ,
          "100"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "[2-9]\\d{3}", , , , "2000", , , [4]]],
        BF: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], , , , "BF", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17"], , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        BG: [, [, , "1\\d\\d(?:\\d{3})?", , , , , , , [3, 6]], , , [, , "1(?:1(?:2|6\\d{3})|50|6[06])", , , , "112"], [, , , , , , , , , [-1]], , , , "BG", , , , , , , , , , , , , , , , , , [, , "1(?:12|50|6[06])", , , , "112", , , [3]], , [, , "1(?:1(?:2|6(?:000|111))|50|6[06])", , , , "112"], [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , [, , , , , , , , , [-1]]],
        BH: [, [, , "[0189]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "(?:0[167]|81)\\d{3}|[19]99", , , , "199"], [, , "9[148]\\d{3}", , , , "91000", , , [5]], , , , "BH", , , , , , , , , , , , , , , , , , [, , "[19]99", , , , "199", , , [3]], , [, , "1(?:[02]\\d|12|4[01]|51|8[18]|9[169])|99[02489]|(?:0[167]|8[158]|9[148])\\d{3}", , , , "100"], [, , , , , , , , , [-1]], [, , "0[67]\\d{3}|88000|98555", , , , "06000", , , [5]], , [, , "88000|98555", , , , "88000", , , [5]]],
        BI: [
          ,
          [, , "[16-9]\\d{2,3}", , , , , , , [3, 4]],
          ,
          ,
          [, , "11[237]|611", , , , "112", , , [3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "BI",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "11[237]", , , , "112", , , [3]],
          ,
          [, , "1(?:1\\d|5[2-9]|6[0-256])|611|7(?:10|77|979)|8[28]8|900", , , , "110"],
          [, , , , , , , , , [-1]],
          [, , "611|7(?:10|77)|888|900", , , , "611", , , [3]],
          ,
          [, , "(?:71|90)0", , , , "710", , , [3]]
        ],
        BJ: [, [, , "[17]\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[246-8]|3[68]|6[06])|7[3-5]\\d\\d", , , , "112"], [, , , , , , , , , [-1]], , , , "BJ", , , , , , , , , , , , , , , , , , [, , "11[246-8]", , , , "112", , , [3]], , [, , "1(?:05|1[24-8]|2[02-5]|3[126-8]|5[05]|6[06]|89)|7[0-5]\\d\\d", , , , "105"], [, , , , , , , , , [-1]], [, , "12[02-5]", , , , "120", , , [3]], , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        BL: [, [, , "1\\d", , , , , , , [2]], , , [, , "18", , , , "18"], [, , , , , , , , , [-1]], , , , "BL", , , , , , , , , , , , , , , , , , [, , "18", , , , "18"], , [, , "18", , , , "18"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        BM: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "BM", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "176|9(?:11|88)", , , , "176"], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
        BN: [
          ,
          [, , "9\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "99[135]", , , , "991"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "BN",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "99[135]", , , , "991"],
          ,
          [, , "99[135]", , , , "991"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        BO: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "11[089]", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "BO", , , , , , , , , , , , , , , , , , [, , "11[089]", , , , "110", , , [3]], , [, , "11[089]|40404", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
        BQ: [
          ,
          [, , "[19]\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "112|911", , , , "112"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "BQ",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "112|911", , , , "112"],
          ,
          [, , "1(?:12|76)|911", , , , "112"],
          [, , , , , , , , , [-1]],
          [, , "176", , , , "176"],
          ,
          [, , "176", , , , "176"]
        ],
        BR: [, [, , "[1-69]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:00|12|28|8[015]|9[0-47-9])|4(?:57|82\\d)|911", , , , "100", , , [3, 4]], [, , , , , , , , , [-1]], , , , "BR", , , , , , , , , , , , , , , , , , [, , "1(?:12|28|9[023])|911", , , , "112", , , [3]], , [
          ,
          ,
          "1(?:0(?:[02]|3(?:1[2-579]|2[13-9]|3[124-9]|4[1-3578]|5[1-468]|6[139]|8[149]|9[168])|5[0-35-9]|6(?:0|1[0-35-8]?|2[0145]|3[0137]?|4[37-9]?|5[0-35]|6[016]?|7[137]?|8[5-8]|9[1359]))|1[25-8]|2[357-9]|3[024-68]|4[12568]|5\\d|6[0-8]|8[015]|9[0-47-9])|2(?:7(?:330|878)|85959?)|(?:32|91)1|4(?:0404?|57|828)|55555|6(?:0\\d{4}|10000)|(?:133|411)[12]",
          ,
          ,
          ,
          "100"
        ], [, , "102|273\\d\\d|321", , , , "102", , , [3, 5]], [, , "151|(?:278|555)\\d\\d|4(?:04\\d\\d?|11\\d|57)", , , , "151", , , [3, 4, 5]], , [, , "285\\d{2,3}|321|40404|(?:27[38]\\d|482)\\d|6(?:0\\d|10)\\d{3}", , , , "321"]],
        BS: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:1[19]|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "BS", , , , , , , , , , , , , , , , , , [, , "91[19]", , , , "911"], , [, , "9(?:1[19]|88)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        BT: [
          ,
          [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]],
          ,
          ,
          [, , "11[023]", , , , "110", , , [3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "BT",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "11[023]", , , , "110", , , [3]],
          ,
          [, , "11[0-6]|40404", , , , "110"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , "404\\d\\d", , , , "40400", , , [5]]
        ],
        BW: [, [, , "[19]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "9(?:11|9[7-9])", , , , "911", , , [3]], [, , , , , , , , , [-1]], , , , "BW", , , , , , , , , , , , , , , , , , [, , "9(?:11|9[7-9])", , , , "911", , , [3]], , [, , "1(?:1[26]|3123)|9(?:1[14]|9[1-57-9])", , , , "112"], [, , , , , , , , , [-1]], [, , "131\\d\\d", , , , "13100", , , [5]], , [, , "131\\d\\d", , , , "13100", , , [5]]],
        BY: [
          ,
          [, , "1\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "1(?:0[1-3]|12)", , , , "101"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "BY",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:0[1-3]|12)", , , , "101"],
          ,
          [, , "1(?:0[1-79]|1[246]|35|5[1-35]|6[89]|7[5-7]|8[58]|9[1-7])", , , , "101"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        BZ: [, [, , "9\\d\\d?", , , , , , , [2, 3]], , , [, , "9(?:0|11|22|66|77|9[09])", , , , "90"], [, , , , , , , , , [-1]], , , , "BZ", , , , , , , , , , , , , , , , , , [, , "9(?:0|11|90)", , , , "90"], , [, , "9(?:0|11|22|66|77|9[09])", , , , "90"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        CA: [, [, , "[1-9]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [
          ,
          ,
          "112|988|[29]11",
          ,
          ,
          ,
          "112",
          ,
          ,
          [3]
        ], [, , , , , , , , , [-1]], , , , "CA", , , , , , , , , , , , , , , , , , [, , "112|911", , , , "112", , , [3]], , [, , "[1-35-9]\\d{4,5}|112|[2-8]11|9(?:11|88)", , , , "112"], [, , , , , , , , , [-1]], [, , "[235-7]11", , , , "211", , , [3]], , [, , "[1-35-9]\\d{4,5}", , , , "10000", , , [5, 6]]],
        CC: [, [, , "[01]\\d\\d", , , , , , , [3]], , , [, , "000|112", , , , "000"], [, , , , , , , , , [-1]], , , , "CC", , , , , , , , , , , , , , , , , , [, , "000|112", , , , "000"], , [, , "000|112", , , , "000"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        CD: [
          ,
          [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]],
          ,
          ,
          [, , "1(?:1[348]|77|88)", , , , "113", , , [3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "CD",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:1[348]|77|88)", , , , "113", , , [3]],
          ,
          [, , "1(?:1[348]|23|77|88)|40404", , , , "113"],
          [, , , , , , , , , [-1]],
          [, , "404\\d\\d", , , , "40400", , , [5]],
          ,
          [, , "404\\d\\d", , , , "40400", , , [5]]
        ],
        CF: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[78]|22\\d)", , , , "117"], [, , , , , , , , , [-1]], , , , "CF", , , , , , , , , , , , , , , , , , [, , "1(?:1[78]|220)", , , , "117"], , [, , "1(?:1[478]|220)", , , , "114"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        CG: [
          ,
          [, , "1\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "11[178]", , , , "111"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "CG",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "11[78]", , , , "117"],
          ,
          [, , "11[126-8]", , , , "111"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        CH: [, [, , "[1-9]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:1(?:[278]|6\\d{3})|4[47])|5200", , , , "112", , , [3, 4, 6]], [, , "1(?:14|8[0-2589])\\d|543|83111", , , , "543", , , [3, 4, 5]], , , , "CH", , , , , , , , , , , , , , , , , , [, , "1(?:1[278]|44)", , , , "112", , , [3]], , [, , "1(?:0[78]\\d\\d|1(?:[278]|45|6(?:000|111))|4(?:[03-57]|1[0145])|6(?:00|[1-46])|8(?:02|1[189]|[25]0|7|8[08]|99))|[2-9]\\d{2,4}", , , , "112"], [
          ,
          ,
          "1(?:4[035]|6[1-46])|1(?:41|60)\\d",
          ,
          ,
          ,
          "140",
          ,
          ,
          [3, 4]
        ], [, , "5(?:200|35)", , , , "535", , , [3, 4]], , [, , "[2-9]\\d{2,4}", , , , "200", , , [3, 4, 5]]],
        CI: [, [, , "[14]\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[01]|[78]0)", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "CI", , , , , , , , , , , , , , , , , , [, , "1(?:1[01]|[78]0)", , , , "110", , , [3]], , [, , "1(?:1[01]|[78]0)|4443", , , , "110"], [, , , , , , , , , [-1]], [, , "444\\d", , , , "4440", , , [4]], , [, , "444\\d", , , , "4440", , , [4]]],
        CK: [
          ,
          [, , "9\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "99[689]", , , , "996"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "CK",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "99[689]", , , , "996"],
          ,
          [, , "99[689]", , , , "996"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        CL: [, [, , "[1-9]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:213|3[1-3])|434\\d|911", , , , "131", , , [3, 4]], [, , "1(?:211|3(?:13|[348]0|5[01]))|(?:1(?:[05]6|[48]1|9[18])|2(?:01\\d|[23]2|77|88)|3(?:0[59]|13|3[279]|66)|4(?:[12]4|36\\d|4[017]|55)|5(?:00|41\\d|5[67]|99)|6(?:07\\d|13|22|3[06]|50|69)|787|8(?:[01]1|[48]8)|9(?:01|[12]0|33))\\d", , , , "1060", , , [4, 5]], , , , "CL", , , , , , , , , , , , , , , , , , [, , "13[1-3]|911", , , , "131", , , [3]], , [
          ,
          ,
          "1(?:00|21[13]|3(?:13|[348]0|5[01])|4(?:0[02-6]|17|[379])|818|919)|2(?:0(?:01|122)|22[47]|323|777|882)|3(?:0(?:51|99)|132|3(?:29|[37]7)|665)|43656|5(?:(?:00|415)4|5(?:66|77)|995)|6(?:131|222|366|699)|7878|8(?:011|11[28]|482|889)|9(?:01|1)1|13\\d|4(?:[13]42|243|4(?:02|15|77)|554)|(?:1(?:[05]6|98)|339|6(?:07|[35])0|9(?:[12]0|33))0",
          ,
          ,
          ,
          "100"
        ], [, , "(?:200|333)\\d", , , , "2000", , , [4]], [, , , , , , , , , [-1]], , [, , "13(?:13|[348]0|5[01])|(?:1(?:[05]6|[28]1|4[01]|9[18])|2(?:0(?:0|1\\d)|[23]2|77|88)|3(?:0[59]|13|3[2379]|66)|436\\d|5(?:00|41\\d|5[67]|99)|6(?:07\\d|13|22|3[06]|50|69)|787|8(?:[01]1|[48]8)|9(?:01|[12]0|33))\\d|4(?:[1-3]4|4[017]|55)\\d", , , , "1060", , , [4, 5]]],
        CM: [, [, , "[18]\\d{1,3}", , , , , , , [2, 3, 4]], , , [, , "1(?:1[37]|[37])", , , , "13", , , [2, 3]], [, , , , , , , , , [-1]], , , , "CM", , , , , , , , , , , , , , , , , , [, , "1(?:1[37]|[37])", , , , "13", , , [2, 3]], , [
          ,
          ,
          "1(?:1[37]|[37])|8711",
          ,
          ,
          ,
          "13"
        ], [, , , , , , , , , [-1]], [, , "871\\d", , , , "8710", , , [4]], , [, , "871\\d", , , , "8710", , , [4]]],
        CN: [, [, , "[19]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:1[09]|2(?:[02]|1\\d\\d|395))", , , , "110", , , [3, 5]], [, , , , , , , , , [-1]], , , , "CN", , , , , , , , , , , , , , , , , , [, , "1(?:1[09]|20)", , , , "110", , , [3]], , [, , "1(?:00|1[0249]|2395|6[08])|9[56]\\d{3,4}|12[023]|1(?:0(?:[0-26]\\d|8)|21\\d)\\d", , , , "100"], [, , "1(?:0(?:[0-26]\\d|8)\\d|1[24]|23|6[08])|9[56]\\d{3,4}|100", , , , "100"], [, , , , , , , , , [-1]], , [, , "12110", , , , "12110", , , [5]]],
        CO: [, [
          ,
          ,
          "[1-589]\\d\\d(?:\\d{2,3})?",
          ,
          ,
          ,
          ,
          ,
          ,
          [3, 5, 6]
        ], , , [, , "1(?:1[29]|23|32|56)", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "CO", , , , , , , , , , , , , , , , , , [, , "1(?:1[29]|23|32|56)", , , , "112", , , [3]], , [, , "1(?:06|1[2-9]|2[35-7]|3[27]|4[467]|5[36]|6[4-7]|95)|(?:29002|39003)9|40404|5930\\d\\d|85432|(?:[2359][57]|8(?:7|9\\d))\\d{3}", , , , "106"], [, , , , , , , , , [-1]], [, , "(?:40|85)4\\d\\d", , , , "40400", , , [5]], , [, , "(?:40|85)4\\d\\d", , , , "40400", , , [5]]],
        CR: [, [, , "[1359]\\d{2,3}", , , , , , , [3, 4]], , , [, , "112|911", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "CR", , , , , , , , , , , , , , , , , , [
          ,
          ,
          "112|911",
          ,
          ,
          ,
          "112",
          ,
          ,
          [3]
        ], , [, , "1(?:0(?:00|15|2[2-4679])|1(?:1[0-35-9]|2|37|[46]6|7[57]|8[79]|9[0-379])|2(?:00|[12]2|34|55)|3(?:21|33)|4(?:0[06]|1[4-6])|5(?:15|5[15])|693|7(?:00|1[7-9]|2[02]|[67]7)|975)|3855|5(?:0(?:30|49)|510)|911", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "(?:385|5(?:0[34]|51))\\d", , , , "3850", , , [4]]],
        CU: [, [, , "[12]\\d\\d(?:\\d{3,4})?", , , , , , , [3, 6, 7]], , , [, , "10[4-7]|(?:116|204\\d)\\d{3}", , , , "104"], [, , , , , , , , , [-1]], , , , "CU", , , , , , , , , , , , , , , , , , [, , "10[4-6]", , , , "104", , , [3]], , [
          ,
          ,
          "1(?:0[4-7]|1(?:6111|8)|40)|2045252",
          ,
          ,
          ,
          "104"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        CV: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "13[0-2]", , , , "130"], [, , , , , , , , , [-1]], , , , "CV", , , , , , , , , , , , , , , , , , [, , "13[0-2]", , , , "130"], , [, , "13[0-2]", , , , "130"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        CW: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "112|911", , , , "112"], [, , , , , , , , , [-1]], , , , "CW", , , , , , , , , , , , , , , , , , [, , "112|911", , , , "112"], , [, , "1(?:12|76)|911", , , , "112"], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
        CX: [, [, , "[01]\\d\\d", , , , , , , [3]], , , [
          ,
          ,
          "000|112",
          ,
          ,
          ,
          "000"
        ], [, , , , , , , , , [-1]], , , , "CX", , , , , , , , , , , , , , , , , , [, , "000|112", , , , "000"], , [, , "000|112", , , , "000"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        CY: [, [, , "1\\d\\d(?:\\d{3})?", , , , , , , [3, 6]], , , [, , "1(?:1(?:2|6\\d{3})|99)", , , , "112"], [, , , , , , , , , [-1]], , , , "CY", , , , , , , , , , , , , , , , , , [, , "1(?:12|99)", , , , "112", , , [3]], , [, , "1(?:1(?:2|6(?:000|111))|99)", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        CZ: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:1(?:2|6(?:00[06]|1(?:11|23)))|5\\d)", , , , "112", , , [3, 6]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , , "CZ", , , , , , , , , , , , , , , , , , [, , "1(?:12|5\\d)", , , , "112", , , [3]], , [, , "1(?:1(?:2|8\\d)|(?:2|3\\d)\\d{2,3}|5\\d|99)|1(?:16|4)\\d{3}", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        DE: [, [, , "[13]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:[02]|6\\d{3})", , , , "110", , , [3, 6]], [, , , , , , , , , [-1]], , , , "DE", , , , , , , , , , , , , , , , , , [, , "11[02]", , , , "110", , , [3]], , [, , "11(?:[025]|6(?:00[06]|1(?:1[167]|23))|800\\d)|3311|118\\d\\d", , , , "110"], [, , , , , , , , , [-1]], [, , "331\\d", , , , "3310", , , [4]], , [, , , , , , , , , [-1]]],
        DJ: [, [
          ,
          ,
          "1\\d",
          ,
          ,
          ,
          ,
          ,
          ,
          [2]
        ], , , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], , , , "DJ", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17"], , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        DK: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:[24]|6\\d{3})", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "DK", , , , , , , , , , , , , , , , , , [, , "11[24]", , , , "112", , , [3]], , [, , "1(?:1(?:[248]|6(?:00[06]|111))|619[0-2]|8(?:01|1[0238]|28|30|5[13]|8[18]))", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        DM: [, [, , "[39]\\d\\d", , , , , , , [3]], , , [
          ,
          ,
          "333|9(?:11|88|99)",
          ,
          ,
          ,
          "333"
        ], [, , , , , , , , , [-1]], , , , "DM", , , , , , , , , , , , , , , , , , [, , "333|9(?:11|99)", , , , "333"], , [, , "333|9(?:11|88|99)", , , , "333"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        DO: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "112|9(?:11|88)", , , , "112"], [, , , , , , , , , [-1]], , , , "DO", , , , , , , , , , , , , , , , , , [, , "112|911", , , , "112"], , [, , "112|9(?:11|88)", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        DZ: [, [, , "[17]\\d{1,3}", , , , , , , [2, 3, 4]], , , [, , "1(?:12|[47]|54\\d)", , , , "14"], [, , , , , , , , , [-1]], , , , "DZ", , , , , , , , , , , , , , , , , , [
          ,
          ,
          "1(?:12|[47])",
          ,
          ,
          ,
          "14",
          ,
          ,
          [2, 3]
        ], , [, , "1(?:055|12|[47]|548)|730", , , , "14"], [, , , , , , , , , [-1]], [, , "730", , , , "730", , , [3]], , [, , "730", , , , "730", , , [3]]],
        EC: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "1(?:0[12]|12)|911", , , , "101"], [, , , , , , , , , [-1]], , , , "EC", , , , , , , , , , , , , , , , , , [, , "1(?:0[12]|12)|911", , , , "101"], , [, , "1(?:0[12]|12)|911", , , , "101"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        EE: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [
          ,
          ,
          "1(?:1(?:[02]|6\\d{3})|2(?:05|28)|3(?:014|3(?:21|5\\d?)|660)|492|5(?:1[03]|410|501)|6(?:112|333|644)|7(?:012|127|89)|8(?:10|8[57])|9(?:0[134]|14))",
          ,
          ,
          ,
          "110"
        ], [
          ,
          ,
          "1(?:18(?:00|[12458]\\d?)|2(?:0(?:[02-46-8]\\d?|1[0-36])|1(?:[0-4]\\d?|6[06])|2(?:[0-4]\\d?|5[25])|[367]|4(?:0[04]|[12]\\d?|4[24]|54)|55[12457])|3(?:0(?:[02]\\d?|1[13578]|3[356])|1[1347]|2[02-5]|3(?:[01347]\\d?|2[023]|88)|4(?:[35]\\d?|4[34])|5(?:3[134]|5[035])|666)|4(?:2(?:00|4\\d?)|4(?:0[01358]|1[024]|50|7\\d?)|900)|5(?:0[0-35]|1(?:[1267]\\d?|5[0-7]|82)|2(?:[014-6]\\d?|22)|330|4(?:[35]\\d?|44)|5(?:00|[1-69]\\d?)|9(?:[159]\\d?|[38]0|77))|6(?:1(?:00|1[19]|[35-9]\\d?)|2(?:2[26]|[68]\\d?)|3(?:22|36|6[36])|5|6(?:[0-359]\\d?|6[0-26])|7(?:00|55|7\\d?|8[89])|9(?:00|1\\d?|69))|7(?:0(?:[023]\\d?|1[0578])|1(?:00|2[034]|[4-9]\\d?)|2(?:[07]\\d?|20|44)|7(?:[0-57]\\d?|9[79])|8(?:0[08]|2\\d?|8[0178])|9(?:00|97))|8(?:1[127]|8[1268]|9[269])|9(?:0(?:[02]\\d?|69|9[0269])|1[1-3689]|21))",
          ,
          ,
          ,
          "123",
          ,
          ,
          [3, 4, 5]
        ], , , , "EE", , , , , , , , , , , , , , , , , , [, , "11[02]", , , , "110", , , [3]], , [, , "1(?:1(?:[02-579]|6(?:000|111)|8(?:[09]\\d|[1-8]))|2[36-9]|3[7-9]|4[05-7]|5[6-8]|6[05]|7[3-6]|8[02-7]|9[3-9])|1(?:2[0-245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[0-2])\\d\\d?", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [
          ,
          ,
          "1(?:18[1258]|2(?:0(?:1[036]|[46]\\d?)|166|21|4(?:0[04]|1\\d?|5[47])|[67])|3(?:0(?:1[13-578]|2\\d?|3[56])|1[15]|2[045]|3(?:[13]\\d?|2[13])|43|5(?:00|3[34]|53))|44(?:0[0135]|14|50|7\\d?)|5(?:05|1(?:[12]\\d?|5[1246]|8[12])|2(?:[01]\\d?|22)|3(?:00|3[03])|4(?:15|5\\d?)|500|9(?:5\\d?|77|80))|6(?:1[35-8]|226|3(?:22|3[36]|66)|644|7(?:00|7\\d?|89)|9(?:00|69))|7(?:01[258]|1(?:00|[15]\\d?)|2(?:44|7\\d?)|8(?:00|87|9\\d?))|8(?:1[128]|8[56]|9(?:[26]\\d?|77))|90(?:2\\d?|69|92))",
          ,
          ,
          ,
          "126",
          ,
          ,
          [3, 4, 5]
        ]],
        EG: [, [, , "[13]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "1(?:2[23]|80)", , , , "122", , , [3]], [, , , , , , , , , [-1]], , , , "EG", , , , , , , , , , , , , , , , , , [, , "1(?:2[23]|80)", , , , "122", , , [3]], , [, , "1(?:2[23]|[679]\\d{3}|80)|34400", , , , "122"], [, , , , , , , , , [-1]], [, , "344\\d\\d", , , , "34400", , , [5]], , [, , "344\\d\\d", , , , "34400", , , [5]]],
        EH: [
          ,
          [, , "1\\d\\d?", , , , , , , [2, 3]],
          ,
          ,
          [, , "1(?:[59]|77)", , , , "15"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "EH",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:[59]|77)", , , , "15"],
          ,
          [, , "1(?:[59]|77)", , , , "15"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        ER: [, [, , "[12]\\d\\d(?:\\d{3})?", , , , , , , [3, 6]], , , [, , "11[2-46]|(?:12[47]|20[12])\\d{3}", , , , "112"], [, , , , , , , , , [-1]], , , , "ER", , , , , , , , , , , , , , , , , , [, , "1(?:1[2-46]|24422)|20(?:1(?:606|917)|2914)|(?:1277|2020)99", , , , "112"], , [, , "1(?:1[2-6]|24422)|20(?:1(?:606|917)|2914)|(?:1277|2020)99", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        ES: [, [, , "[0-379]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "0(?:16|6[57]|8[58])|1(?:006|12|[3-7]\\d\\d)|(?:116|20\\d)\\d{3}", , , , "016", , , [3, 4, 6]], [
          ,
          ,
          "[12]2\\d{1,4}|90(?:5\\d|7)|(?:118|2(?:[357]\\d|80)|3[357]\\d)\\d\\d|[79]9[57]\\d{3}",
          ,
          ,
          ,
          "120"
        ], , , , "ES", , , , , , , , , , , , , , , , , , [, , "08[58]|112", , , , "085", , , [3]], , [, , "0(?:1[0-26]|6[0-257]|8[058]|9[12])|1(?:0[03-57]\\d{1,3}|1(?:2|6(?:000|111)|8\\d\\d)|2\\d{1,4}|[3-9]\\d\\d)|2(?:2\\d{1,4}|80\\d\\d)|90(?:5[124578]|7)|1(?:3[34]|77)|(?:2[01]\\d|[79]9[57])\\d{3}|[23][357]\\d{3}", , , , "010"], [, , "0(?:[16][0-2]|80|9[12])|21\\d{4}", , , , "010", , , [3, 6]], [, , "1(?:3[34]|77)|[12]2\\d{1,4}", , , , "120"], , [, , "(?:2[0-2]\\d|3[357]|[79]9[57])\\d{3}|2(?:[2357]\\d|80)\\d\\d", , , , "22000", , , [5, 6]]],
        ET: [, [
          ,
          ,
          "9\\d\\d?",
          ,
          ,
          ,
          ,
          ,
          ,
          [2, 3]
        ], , , [, , "9(?:07|11?|2|39?|9[17])", , , , "91"], [, , , , , , , , , [-1]], , , , "ET", , , , , , , , , , , , , , , , , , [, , "9(?:11?|2|39?|9[17])", , , , "91"], , [, , "9(?:07|11?|2|39?|45|9[17])", , , , "91"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        FI: [
          ,
          [, , "[17]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]],
          ,
          ,
          [, , "11(?:2|6\\d{3})", , , , "112", , , [3, 6]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "FI",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "112", , , , "112", , , [3]],
          ,
          [, , "11(?:2|6(?:00[06]|1(?:1[17]|23)))|(?:1[2-8]\\d|75[12])\\d\\d", , , , "112"],
          [, , "1[2-8]\\d{3}", , , , "12000", , , [5]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        FJ: [, [, , "[0-579]\\d(?:\\d(?:\\d{2})?)?", , , , , , , [2, 3, 5]], , , [, , "91[17]", , , , "911", , , [3]], [, , , , , , , , , [-1]], , , , "FJ", , , , , , , , , , , , , , , , , , [, , "91[17]", , , , "911", , , [3]], , [, , "0(?:1[34]|8[1-4])|1(?:0[1-3]|[25]9)|2[289]|30|40404|91[137]|[45]4|75", , , , "22"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
        FK: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "FK", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "1\\d\\d|999", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        FM: [, [, , "[39]\\d\\d(?:\\d{3})?", , , , , , , [3, 6]], , , [, , "320\\d{3}|911", , , , "911"], [, , , , , , , , , [-1]], , , , "FM", , , , , , , , , , , , , , , , , , [, , "(?:32022|91)1", , , , "911"], , [, , "(?:32022|91)1", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        FO: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[24]|81\\d)", , , , "112"], [, , , , , , , , , [-1]], , , , "FO", , , , , , , , , , , , , , , , , , [, , "11[24]", , , , "112", , , [3]], , [, , "1(?:1[248]|819)|1(?:4[124]|71|8[7-9])\\d", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        FR: [, [
          ,
          ,
          "[1-8]\\d{1,5}",
          ,
          ,
          ,
          ,
          ,
          ,
          [2, 3, 4, 5, 6]
        ], , , [, , "1(?:1[02459]|[578]|9[167])|224|(?:3370|74)0|(?:116\\d|3[01])\\d\\d", , , , "15"], [, , "(?:1(?:0|18\\d)|366|[4-8]\\d\\d)\\d\\d|3[2-9]\\d\\d", , , , "1000", , , [4, 5, 6]], , , , "FR", , , , , , , , , , , , , , , , , , [, , "1(?:12|[578])", , , , "15", , , [2, 3]], , [, , "1(?:0\\d\\d|1(?:[02459]|6(?:000|111)|8\\d{3})|[578]|9[167])|2(?:0(?:00|2)0|24)|[3-8]\\d{4}|3\\d{3}|6(?:1[14]|34)|7(?:0[06]|22|40)", , , , "15"], [, , "202\\d|6(?:1[14]|34)|70[06]", , , , "611", , , [3, 4]], [
          ,
          ,
          "118777|224|6(?:1[14]|34)|7(?:0[06]|22|40)|20(?:0\\d|2)\\d",
          ,
          ,
          ,
          "224",
          ,
          ,
          [3, 4, 5, 6]
        ], , [, , "114|[3-8]\\d{4}", , , , "114", , , [3, 5]]],
        GA: [, [, , "1\\d(?:\\d{2})?", , , , , , , [2, 4]], , , [, , "18|1(?:3\\d|73)\\d", , , , "18"], [, , , , , , , , , [-1]], , , , "GA", , , , , , , , , , , , , , , , , , [, , "1(?:3\\d\\d|730|8)", , , , "18"], , [, , "1(?:3\\d\\d|730|8)", , , , "18"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        GB: [, [, , "[1-46-9]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:05|1(?:[29]|6\\d{3})|7[56]\\d|8000)|2(?:20\\d|48)|4444|999", , , , "105"], [, , , , , , , , , [-1]], , , , "GB", , , , , , , , , , , , , , , , , , [, , "112|999", , , , "112", , , [3]], , [
          ,
          ,
          "1(?:0[015]|1(?:[129]|6(?:000|1(?:11|23))|8\\d{3})|2(?:[1-3]|50)|33|4(?:1|7\\d)|571|7(?:0\\d|[56]0)|800\\d|9[15])|2(?:0202|1300|2(?:02|11)|3(?:02|336|45)|4(?:25|8))|3[13]3|4(?:0[02]|35[01]|44[45]|5\\d)|(?:[68]\\d|7[089])\\d{3}|15\\d|2[02]2|650|789|9(?:01|99)",
          ,
          ,
          ,
          "100"
        ], [, , , , , , , , , [-1]], [, , "1(?:(?:25|7[56])\\d|571)|2(?:02(?:\\d{2})?|[13]3\\d\\d|48)|4444|901", , , , "202", , , [3, 4, 5]], , [, , "(?:125|2(?:020|13\\d)|(?:7[089]|8[01])\\d\\d)\\d", , , , "1250", , , [4, 5]]],
        GD: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "GD", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "176|9(?:11|88)", , , , "176"], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
        GE: [, [, , "[014]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "0(?:11|33)|11[1-3]|[01]22", , , , "011", , , [3]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , , "GE", , , , , , , , , , , , , , , , , , [, , "0(?:11|33)|11[1-3]|[01]22", , , , "011", , , [3]], , [, , "0(?:11|33)|11[1-3]|40404|[01]22", , , , "011"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
        GF: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], , , , "GF", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15"], , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        GG: [
          ,
          [, , "[19]\\d{2,5}", , , , , , , [3, 4, 5, 6]],
          ,
          ,
          [, , "112|999", , , , "112", , , [3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "GG",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "112|999", , , , "112", , , [3]],
          ,
          [, , "1(?:0[01]|1[12]|23|41|55|9[05])|999|1(?:1[68]\\d\\d|47|800)\\d", , , , "100"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        GH: [, [, , "[14589]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "19[1-3]|999", , , , "191", , , [3]], [, , , , , , , , , [-1]], , , , "GH", , , , , , , , , , , , , , , , , , [, , "19[1-3]|999", , , , "191", , , [3]], , [, , "19[1-3]|40404|(?:54|83)00|999", , , , "191"], [, , , , , , , , , [-1]], [, , "404\\d\\d|(?:54|83)0\\d", , , , "5400", , , [4, 5]], , [, , "404\\d\\d|(?:54|83)0\\d", , , , "5400", , , [4, 5]]],
        GI: [, [
          ,
          ,
          "[158]\\d{2,5}",
          ,
          ,
          ,
          ,
          ,
          ,
          [3, 4, 5, 6]
        ], , , [, , "1(?:00|1[25]|23|4(?:1|7\\d)|5[15]|9[02-49])|555|(?:116\\d|80)\\d\\d", , , , "100", , , [3, 4, 6]], [, , "8[1-69]\\d\\d", , , , "8100", , , [4]], , , , "GI", , , , , , , , , , , , , , , , , , [, , "1(?:12|9[09])", , , , "112", , , [3]], , [, , "1(?:00|1(?:[25]|6(?:00[06]|1(?:1[17]|23))|8\\d\\d)|23|4(?:1|7[014])|5[015]|9[02-49])|555|8[0-79]\\d\\d|8(?:00|4[0-2]|8[0-589])", , , , "100"], [, , "150|87\\d\\d", , , , "150", , , [3, 4]], [, , "1(?:00|1(?:5|8\\d\\d)|23|51|9[2-4])|555|8(?:00|4[0-2]|8[0-589])", , , , "100", , , [3, 5]], , [, , , , , , , , , [-1]]],
        GL: [, [
          ,
          ,
          "1\\d\\d",
          ,
          ,
          ,
          ,
          ,
          ,
          [3]
        ], , , [, , "112", , , , "112"], [, , , , , , , , , [-1]], , , , "GL", , , , , , , , , , , , , , , , , , [, , "112", , , , "112"], , [, , "1[1-8]\\d", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        GM: [, [, , "1\\d\\d?", , , , , , , [2, 3]], , , [, , "1(?:1[6-8]|[6-8])", , , , "16"], [, , , , , , , , , [-1]], , , , "GM", , , , , , , , , , , , , , , , , , [, , "1(?:1[6-8]|[6-8])", , , , "16"], , [, , "1(?:1[6-8]|[6-8])", , , , "16"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        GN: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , , "GN", , , , , , , , , , , , , , , , , , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , [, , "12\\d|40404", , , , "120"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
        GP: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], , , , "GP", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15"], , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        GR: [, [, , "1\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "1(?:0[089]|1(?:2|6\\d{3})|66|99)", , , , "100", , , [3, 6]], [, , , , , , , , , [-1]], , , , "GR", , , , , , , , , , , , , , , , , , [, , "1(?:00|12|66|99)", , , , "100", , , [3]], , [
          ,
          ,
          "1(?:0[089]|1(?:2|320|6(?:000|1(?:1[17]|23)))|(?:389|9)9|66)",
          ,
          ,
          ,
          "100"
        ], [, , "113\\d\\d", , , , "11300", , , [5]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        GT: [, [, , "[14]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:10|2[03])", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "GT", , , , , , , , , , , , , , , , , , [, , "1(?:10|2[03])", , , , "110", , , [3]], , [, , "110|40404|1(?:2|[57]\\d)\\d", , , , "110"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
        GU: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "GU", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "9(?:11|88)", , , , "911"], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        GW: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[378]", , , , "113"], [, , , , , , , , , [-1]], , , , "GW", , , , , , , , , , , , , , , , , , [, , "11[378]", , , , "113"], , [, , "11[378]", , , , "113"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        GY: [, [, , "[019]\\d{2,3}", , , , , , , [3, 4]], , , [, , "91[1-3]", , , , "911", , , [3]], [, , , , , , , , , [-1]], , , , "GY", , , , , , , , , , , , , , , , , , [, , "91[1-3]", , , , "911", , , [3]], , [, , "0(?:02|(?:17|80)1|444|7(?:[67]7|9)|9(?:0[78]|[2-47]))|1(?:443|5[568])|91[1-3]", , , , "002"], [, , , , , , , , , [-1]], [
          ,
          ,
          "144\\d",
          ,
          ,
          ,
          "1440",
          ,
          ,
          [4]
        ], , [, , "144\\d", , , , "1440", , , [4]]],
        HK: [
          ,
          [, , "[19]\\d{2,6}", , , , , , , [3, 4, 5, 6, 7]],
          ,
          ,
          [, , "112|99[29]", , , , "112", , , [3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "HK",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "112|99[29]", , , , "112", , , [3]],
          ,
          [, , "1(?:0(?:(?:[0136]\\d|2[14])\\d{0,3}|8[138])|12|2(?:[0-3]\\d{0,4}|(?:58|8[13])\\d{0,3})|7(?:[135-9]\\d{0,4}|219\\d{0,2})|8(?:0(?:(?:[13]|60\\d)\\d|8)|1(?:0\\d|[2-8])|2(?:0[5-9]|(?:18|2)2|3|8[128])|(?:(?:3[0-689]\\d|7(?:2[1-389]|8[0235-9]|93))\\d|8)\\d|50[138]|6(?:1(?:11|86)|8)))|99[29]|10[0139]", , , , "100"],
          [, , , , , , , , , [-1]],
          [, , "109|1(?:08|85\\d)\\d", , , , "109", , , [3, 4, 5]],
          ,
          [, , "992", , , , "992", , , [3]]
        ],
        HN: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "199", , , , "199", , , [3]], [, , , , , , , , , [-1]], , , , "HN", , , , , , , , , , , , , , , , , , [, , "199", , , , "199", , , [3]], , [, , "199|40404", , , , "199"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
        HR: [, [, , "[016-9]\\d{1,5}", , , , , , , [2, 3, 4, 5, 6]], , , [, , "1(?:12|9[2-4])|9[34]|1(?:16\\d|39)\\d\\d", , , , "93", , , [2, 3, 5, 6]], [, , "06\\d|(?:118|[6-8]\\d{3})\\d\\d", , , , "060", , , [
          3,
          5,
          6
        ]], , , , "HR", , , , , , , , , , , , , , , , , , [, , "1(?:12|9[2-4])|9[34]", , , , "93", , , [2, 3]], , [, , "(?:06|[6-8]\\d{4})\\d|1(?:1(?:2|6(?:00[06]|1(?:1[17]|23))|8\\d\\d)|3977|9(?:[2-5]|87))|9[34]", , , , "93"], [, , , , , , , , , [-1]], [, , "139\\d\\d", , , , "13900", , , [5]], , [, , "139\\d\\d", , , , "13900", , , [5]]],
        HT: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "11[48]", , , , "114", , , [3]], [, , , , , , , , , [-1]], , , , "HT", , , , , , , , , , , , , , , , , , [, , "11[48]", , , , "114", , , [3]], , [, , "11[48]|40404", , , , "114"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [
          ,
          ,
          "404\\d\\d",
          ,
          ,
          ,
          "40400",
          ,
          ,
          [5]
        ]],
        HU: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:0[457]|12|4[0-4]\\d)|1(?:16\\d|37|45)\\d\\d", , , , "104"], [, , , , , , , , , [-1]], , , , "HU", , , , , , , , , , , , , , , , , , [, , "1(?:0[457]|12)", , , , "104", , , [3]], , [, , "1(?:0[457]|1(?:2|6(?:000|1(?:11|23))|800)|2(?:0[0-4]|1[013489]|2[0-5]|3[0-46]|4[0-24-68]|5[0-2568]|6[06]|7[0-25-7]|8[028]|9[08])|37(?:00|37|7[07])|4(?:0[0-5]|1[013-8]|2[034]|3[23]|4[02-9]|5(?:00|41|67))|777|8(?:1[27-9]|2[04]|40|[589]))", , , , "104"], [, , , , , , , , , [-1]], [
          ,
          ,
          "1(?:4[0-4]|77)\\d|1(?:18|2|45)\\d\\d",
          ,
          ,
          ,
          "1200",
          ,
          ,
          [4, 5]
        ], , [, , "184\\d", , , , "1840", , , [4]]],
        ID: [, [, , "[178]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "11[02389]", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "ID", , , , , , , , , , , , , , , , , , [, , "11[02389]", , , , "110", , , [3]], , [, , "1(?:1[02389]|40\\d\\d|50264)|71400|89887", , , , "110"], [, , , , , , , , , [-1]], [, , "(?:714|898)\\d\\d", , , , "71400", , , [5]], , [, , "714\\d\\d", , , , "71400", , , [5]]],
        IE: [, [, , "[159]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:2|6\\d{3})|999", , , , "112", , , [3, 6]], [, , "5[37]\\d{3}", , , , "53000", , , [5]], , , , "IE", , , , , , , , , , , , , , , , , , [
          ,
          ,
          "112|999",
          ,
          ,
          ,
          "112",
          ,
          ,
          [3]
        ], , [, , "11(?:2|6(?:00[06]|1(?:1[17]|23)))|999|(?:1(?:18|9)|5[0137]\\d)\\d\\d", , , , "112"], [, , "51\\d{3}", , , , "51000", , , [5]], [, , "51210", , , , "51210", , , [5]], , [, , "51210|(?:118|5[037]\\d)\\d\\d", , , , "11800", , , [5]]],
        IL: [, [, , "[12]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:0[0-2]|12)", , , , "100", , , [3]], [, , , , , , , , , [-1]], , , , "IL", , , , , , , , , , , , , , , , , , [, , "1(?:0[0-2]|12)", , , , "100", , , [3]], , [, , "1(?:0[0-2]|1(?:[013-9]\\d|2)|[2-9]\\d\\d)|2407|(?:104|27)00", , , , "100"], [, , , , , , , , , [-1]], [
          ,
          ,
          "104\\d\\d",
          ,
          ,
          ,
          "10400",
          ,
          ,
          [5]
        ], , [, , "104\\d\\d", , , , "10400", , , [5]]],
        IM: [, [, , "[189]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "999", , , , "999", , , [3]], [, , , , , , , , , [-1]], , , , "IM", , , , , , , , , , , , , , , , , , [, , "999", , , , "999", , , [3]], , [, , "1\\d\\d(?:\\d{3})?|8(?:6444|9887)|999", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "8(?:64|98)\\d\\d", , , , "86400", , , [5]]],
        IN: [, [, , "[12578]\\d{2,8}", , , , , , , [3, 4, 5, 6, 7, 8, 9]], , , [
          ,
          ,
          "1(?:0[0-248]|1[289]|21|[39][89]|4[01]|6(?:1|6\\d?)|8[12])|777|800|1[05]5\\d|1(?:07|51|94)\\d\\d?|(?:1(?:[05]5\\d|70)\\d|261)\\d|1(?:0[369]|10|29|3[126]|9[0-256])\\d",
          ,
          ,
          ,
          "100",
          ,
          ,
          [3, 4, 5, 6]
        ], [, , "11[67]\\d{4}|56161561", , , , "1160000", , , [7, 8]], , , , "IN", , , , , , , , , , , , , , , , , , [, , "1(?:0[0-28]|12|298)|2611", , , , "100", , , [3, 4]], , [
          ,
          ,
          "1(?:0(?:[0-248]|3[39]|5(?:010|6)|6[3468]|7(?:[01357]|[28]0?|4[01])|9[0135-9])|1(?:00|[289])|2(?:1|98)|3(?:11|2[0-2]|63|[89])|4[01]|5(?:1(?:0[0-36]|[127])|54)|6(?:1|6[01]?)|7000|8[12]|9(?:0[013-59]|12|25|4[4-9]\\d?|50|6[1347]|[89]))|2611|5(?:0(?:0(?:0\\d|1|20?)|325|5[2-79]\\d{3,5})|1(?:234|555|717|818|96[49])|2(?:0(?:0[01]|[14]0)|151|555|666|888|9(?:06|99\\d?))|3(?:0[01]0|131|553|(?:66|77)6)|(?:464|55[05])\\d{1,3}|6(?:070|3[68]|43)|717\\d)|777|800|5(?:05(?:0|1\\d)|221|3(?:03|3[23]))\\d{1,4}|5(?:(?:04|88)0|2(?:2[0267]|3[16])|4(?:1[04]|20|3[02])|5(?:3[16]|67)|6(?:06|[67]\\d)|787|9(?:64|90))\\d\\d?|(?:1(?:05[79]|(?:1[67][0-2]|802)\\d|55[23])\\d|5(?:(?:00(?:0\\d|1)|(?:304|616)\\d\\d)\\d|1(?:0[12]|4[2-4])|2(?:2[3589]|3(?:1\\d{3}|2)|4[04]|7[78])|4(?:[02]4|32\\d{4}|4[04]|99)|5(?:1[25]|[36]5|4[45]|93)|7(?:(?:17\\d|57)\\d\\d|[27]7|88)|8(?:3[4-69]|4[01]|5[58]|88(?:8\\d\\d|9)|99)|9(?:0(?:0|2\\d{3})|55|6[67]|77|88)))\\d",
          ,
          ,
          ,
          "100"
        ], [, , "5(?:14(?:2[5-9]|[34]\\d)|757555)", , , , "51425", , , [5, 7]], [, , "1(?:(?:1[67]\\d\\d|70)\\d\\d|55330|909)|5(?:300\\d|6161(?:17[89]|561))|1(?:[19][89]|21|4[01])", , , , "118", , , [3, 4, 5, 6, 7, 8]], , [, , "1(?:39|90[019])|5(?:14(?:2[5-9]|[34]\\d)|6161(?:17[89]|561)|757555)", , , , "139", , , [3, 4, 5, 7, 8]]],
        IQ: [, [, , "[1479]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:0[04]|15|22)", , , , "100", , , [3]], [, , , , , , , , , [-1]], , , , "IQ", , , , , , , , , , , , , , , , , , [, , "1(?:0[04]|15|22)", , , , "100", , , [3]], , [, , "1(?:0[04]|15|22)|4432|71117|9988", , , , "100"], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], [, , "(?:443|711\\d|998)\\d", , , , "4430", , , [4, 5]], , [, , "(?:443|711\\d|998)\\d", , , , "4430", , , [4, 5]]],
        IR: [, [, , "[129]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:1[0-68]|2[0-59]|9[0-579])|911", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "IR", , , , , , , , , , , , , , , , , , [, , "1(?:1[025]|25)|911", , , , "110", , , [3]], , [
          ,
          ,
          "1(?:1[0-68]|2[0-59]|3[346-8]|4(?:[0147]|[289]0)|5(?:0[14]|1[02479]|2[0-3]|39|[49]0|65)|6(?:[16]6|[27]|90)|8(?:03|1[18]|22|3[37]|4[28]|88|99)|9[0-579])|20(?:[09]0|1(?:[038]|1[079]|26|9[69])|2[01])|9(?:11|9(?:0009|90))",
          ,
          ,
          ,
          "110"
        ], [, , "1(?:5[0-469]|8[0-489])\\d", , , , "1500", , , [4]], [, , "(?:1(?:5[0-469]|8[0-489])|99(?:0\\d\\d|9))\\d", , , , "1500", , , [4, 6]], , [, , "990\\d{3}", , , , "990000", , , [6]]],
        IS: [, [, , "1\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]], , , [, , "1(?:12|71\\d)", , , , "112", , , [3, 4]], [, , , , , , , , , [-1]], , , , "IS", , , , , , , , , , , , , , , , , , [, , "112", , , , "112", , , [3]], , [, , "1(?:1(?:[28]|61(?:16|23))|4(?:00|1[145]|4[0146])|55|7(?:00|17|7[07-9])|8(?:[02]0|1[16-9]|88)|900)", , , , "112"], [, , , , , , , , , [-1]], [, , "14(?:0\\d|41)", , , , "1400", , , [4]], , [
          ,
          ,
          "1(?:415|90\\d)",
          ,
          ,
          ,
          "1415",
          ,
          ,
          [4]
        ]],
        IT: [
          ,
          [, , "[14]\\d{2,6}", , , , , , , [3, 4, 5, 6, 7]],
          ,
          ,
          [, , "1(?:1(?:[2358]|6\\d{3})|87)", , , , "112", , , [3, 6]],
          [, , "(?:12|4(?:[478](?:[0-4]|[5-9]\\d\\d)|55))\\d\\d", , , , "1200", , , [4, 5, 7]],
          ,
          ,
          ,
          "IT",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "11[2358]", , , , "112", , , [3]],
          ,
          [, , "1(?:0\\d{2,3}|1(?:[2-57-9]|6(?:000|111))|3[39]|4(?:82|9\\d{1,3})|5(?:00|1[58]|2[25]|3[03]|44|[59])|60|8[67]|9(?:[01]|2[2-9]|4\\d|696))|4(?:2323|5045)|(?:1(?:2|92[01])|4(?:3(?:[01]|[45]\\d\\d)|[478](?:[0-4]|[5-9]\\d\\d)|55))\\d\\d", , , , "112"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , "4(?:3(?:[01]|[45]\\d\\d)|[478](?:[0-4]|[5-9]\\d\\d)|5[05])\\d\\d", , , , "43000", , , [5, 7]]
        ],
        JE: [, [, , "[129]\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]], , , [, , "112|999", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "JE", , , , , , , , , , , , , , , , , , [, , "112|999", , , , "112", , , [3]], , [, , "1(?:00|1(?:2|8\\d{3})|23|4(?:[14]|28|7\\d)|5\\d|7(?:0[12]|[128]|35?)|808|9[0135])|23[2-4]|999", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        JM: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "11[029]|9(?:11|88)", , , , "110"], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , , , "JM", , , , , , , , , , , , , , , , , , [, , "11[029]|911", , , , "110"], , [, , "1(?:1[029]|76)|9(?:11|88)", , , , "110"], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
        JO: [, [, , "[19]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "1(?:0[235]|1[2-6]|9[127])|911", , , , "102", , , [3]], [, , "9[0-4689]\\d{3}", , , , "90000", , , [5]], , , , "JO", , , , , , , , , , , , , , , , , , [, , "1(?:12|9[127])|911", , , , "112", , , [3]], , [, , "1(?:0[2359]|1[0-68]|9[0-24-79])|9[0-4689]\\d{3}|911", , , , "102"], [, , , , , , , , , [-1]], [, , "9[0-4689]\\d{3}", , , , "90000", , , [5]], , [
          ,
          ,
          "9[0-4689]\\d{3}",
          ,
          ,
          ,
          "90000",
          ,
          ,
          [5]
        ]],
        JP: [, [, , "[01]\\d\\d(?:\\d{7})?", , , , , , , [3, 10]], , , [, , "11[089]", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "JP", , , , , , , , , , , , , , , , , , [, , "11[09]", , , , "110", , , [3]], , [, , "000[259]\\d{6}|1(?:0[24]|1[089]|44|89)", , , , "102"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "000[259]\\d{6}", , , , "0002000000", , , [10]]],
        KE: [, [, , "[1-9]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:1(?:[246]|9\\d)|5(?:01|2[127]|6[26]\\d))|999", , , , "112"], [, , "909\\d\\d", , , , "90900", , , [5]], , , , "KE", , , , , , , , , , , , , , , , , , [, , "11[24]|999", , , , "112", , , [3]], , [
          ,
          ,
          "1(?:0(?:[07-9]|1[0-25]|400)|1(?:[024-6]|9[0-579])|2[1-3]|3[01]|4[14]|5(?:[01][01]|2[0-24-79]|33|4[05]|5[59]|6(?:00|29|6[67]))|(?:6[035]\\d|[78])\\d|9(?:[02-9]\\d\\d|19))|(?:(?:2[0-79]|[37][0-29]|4[0-4]|6[2357]|8\\d)\\d|5(?:[0-7]\\d|99))\\d\\d|9(?:09\\d\\d|99)|8988",
          ,
          ,
          ,
          "100"
        ], [, , , , , , , , , [-1]], [, , "1(?:(?:04|6[35])\\d\\d|3[01]|4[14]|5(?:1\\d|2[25]))|(?:(?:2[0-79]|[37][0-29]|4[0-4]|6[2357]|8\\d)\\d|5(?:[0-7]\\d|99)|909)\\d\\d|898\\d", , , , "130"], , [, , "1(?:(?:04|6[035])\\d\\d|4[14]|5(?:01|55|6[26]\\d))|40404|8988|909\\d\\d", , , , "141"]],
        KG: [, [, , "[14]\\d{2,3}", , , , , , , [3, 4]], , , [, , "10[1-3]", , , , "101", , , [3]], [, , , , , , , , , [-1]], , , , "KG", , , , , , , , , , , , , , , , , , [, , "10[1-3]", , , , "101", , , [3]], , [, , "10[1-3]|4040", , , , "101"], [, , , , , , , , , [-1]], [, , "404\\d", , , , "4040", , , [4]], , [
          ,
          ,
          "404\\d",
          ,
          ,
          ,
          "4040",
          ,
          ,
          [4]
        ]],
        KH: [, [, , "[146]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "11[7-9]|666", , , , "117", , , [3]], [, , , , , , , , , [-1]], , , , "KH", , , , , , , , , , , , , , , , , , [, , "11[7-9]|666", , , , "117", , , [3]], , [, , "11[7-9]|40404|666", , , , "117"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
        KI: [, [, , "[179]\\d{2,3}", , , , , , , [3, 4]], , , [, , "19[2-5]|99[2-4]", , , , "192", , , [3]], [, , , , , , , , , [-1]], , , , "KI", , , , , , , , , , , , , , , , , , [, , "19[2-5]|99[2-4]", , , , "192", , , [3]], , [, , "1(?:05[0-259]|88|9[2-5])|777|99[2-4]|10[0-8]", , , , "100"], [
          ,
          ,
          "103",
          ,
          ,
          ,
          "103",
          ,
          ,
          [3]
        ], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        KM: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], , , , "KM", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17"], , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        KN: [, [, , "[39]\\d\\d", , , , , , , [3]], , , [, , "333|9(?:11|88|99)", , , , "333"], [, , , , , , , , , [-1]], , , , "KN", , , , , , , , , , , , , , , , , , [, , "333|9(?:11|99)", , , , "333"], , [, , "333|9(?:11|88|99)", , , , "333"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        KP: [, [, , "[18]\\d\\d", , , , , , , [3]], , , [
          ,
          ,
          "11[29]|819",
          ,
          ,
          ,
          "112"
        ], [, , , , , , , , , [-1]], , , , "KP", , , , , , , , , , , , , , , , , , [, , "11[29]|819", , , , "112"], , [, , "11[29]|819", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        KR: [, [, , "1\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:1[27-9]|28|330|82)", , , , "112", , , [3, 4]], [, , , , , , , , , [-1]], , , , "KR", , , , , , , , , , , , , , , , , , [, , "11[29]", , , , "112", , , [3]], , [, , "1(?:[016-9]114|3(?:0[01]|2|3[0-35-9]|45?|5[057]|6[569]|7[79]|8[2589]|9[0189]))|1(?:0[015]|1\\d|2[01357-9]|41|8[28])", , , , "100"], [, , , , , , , , , [-1]], [
          ,
          ,
          "1(?:0[01]|1[4-6]|41)|1(?:[06-9]1\\d|111)\\d",
          ,
          ,
          ,
          "100",
          ,
          ,
          [3, 5]
        ], , [, , , , , , , , , [-1]]],
        KW: [, [, , "[18]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "112", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "KW", , , , , , , , , , , , , , , , , , [, , "112", , , , "112", , , [3]], , [, , "1[0-7]\\d|89887", , , , "100"], [, , , , , , , , , [-1]], [, , "898\\d\\d", , , , "89800", , , [5]], , [, , , , , , , , , [-1]]],
        KY: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "KY", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        KZ: [, [, , "[1-4]\\d{2,4}", , , , , , , [
          3,
          4,
          5
        ]], , , [, , "1(?:0[1-3]|12)|212\\d", , , , "101", , , [3, 4]], [, , , , , , , , , [-1]], , , , "KZ", , , , , , , , , , , , , , , , , , [, , "1(?:0[1-3]|12)", , , , "101", , , [3]], , [, , "1(?:0[1-4]|12)|2121|(?:3040|404)0", , , , "101"], [, , , , , , , , , [-1]], [, , "(?:304\\d|404)\\d", , , , "4040", , , [4, 5]], , [, , "(?:304\\d|404)\\d", , , , "4040", , , [4, 5]]],
        LA: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "19[015]", , , , "190"], [, , , , , , , , , [-1]], , , , "LA", , , , , , , , , , , , , , , , , , [, , "19[015]", , , , "190"], , [, , "19[015]", , , , "190"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        LB: [
          ,
          [, , "[19]\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "1(?:12|40|75)|999", , , , "112"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "LB",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:12|40|75)|999", , , , "112"],
          ,
          [, , "1(?:12|40|75)|999", , , , "112"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        LC: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], , , , "LC", , , , , , , , , , , , , , , , , , [, , "9(?:11|99)", , , , "911"], , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        LI: [
          ,
          [, , "1\\d{2,3}", , , , , , , [3, 4]],
          ,
          ,
          [, , "1(?:1[278]|44)", , , , "112", , , [3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "LI",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:1[278]|44)", , , , "112", , , [3]],
          ,
          [, , "1(?:1(?:[278]|45)|4[3-57]|50|75|81[18])", , , , "112"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        LK: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "11[02689]", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "LK", , , , , , , , , , , , , , , , , , [, , "11[02689]", , , , "110", , , [3]], , [, , "1(?:1[024-9]|3(?:00|1[2-49]|2[23]|3[1-3]|44|5[07]|[67]9|88|9[039])|9(?:0[0-2589]|1[0-357-9]|2[0-25689]|3[0389]|4[0489]|5[014-69]|6[0-2689]|7[03579]|8[02457-9]|9[0-2569]))", , , , "110"], [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , [, , , , , , , , , [-1]]],
        LR: [, [, , "[3489]\\d{2,3}", , , , , , , [3, 4]], , , [, , "355|911", , , , "355", , , [3]], [, , , , , , , , , [-1]], , , , "LR", , , , , , , , , , , , , , , , , , [, , "355|911", , , , "355", , , [3]], , [, , "355|4040|8(?:400|933)|911", , , , "355"], [, , , , , , , , , [-1]], [, , "(?:404|8(?:40|93))\\d", , , , "4040", , , [4]], , [, , "(?:404|8(?:40|93))\\d", , , , "4040", , , [4]]],
        LS: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[257]", , , , "112"], [, , , , , , , , , [-1]], , , , "LS", , , , , , , , , , , , , , , , , , [, , "11[257]", , , , "112"], , [, , "11[257]", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        LT: [, [, , "[01]\\d(?:\\d(?:\\d{3})?)?", , , , , , , [2, 3, 6]], , , [, , "0(?:11?|22?|33?)|1(?:0[1-3]|1(?:2|6111))|116(?:0\\d|12)\\d", , , , "01"], [, , , , , , , , , [-1]], , , , "LT", , , , , , , , , , , , , , , , , , [, , "0(?:11?|22?|33?)|1(?:0[1-3]|12)", , , , "01", , , [2, 3]], , [, , "0(?:11?|22?|33?)|1(?:0[1-3]|1(?:[27-9]|6(?:000|1(?:1[17]|23))))", , , , "01"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        LU: [
          ,
          [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]],
          ,
          ,
          [, , "11(?:[23]|6\\d{3})", , , , "112", , , [3, 6]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "LU",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "11[23]", , , , "112", , , [3]],
          ,
          [, , "11(?:[23]|6(?:000|111))|1(?:18|[25]\\d|3)\\d\\d", , , , "112"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        LV: [, [, , "[018]\\d{1,5}", , , , , , , [2, 3, 4, 5, 6]], , , [, , "0[1-3]|11(?:[023]|6\\d{3})", , , , "01", , , [2, 3, 6]], [, , "1180|821\\d\\d", , , , "1180", , , [4, 5]], , , , "LV", , , , , , , , , , , , , , , , , , [, , "0[1-3]|11[023]", , , , "01", , , [2, 3]], , [, , "0[1-4]|1(?:1(?:[02-4]|6(?:000|111)|8[0189])|(?:5|65)5|77)|821[57]4", , , , "01"], [, , "1181", , , , "1181", , , [4]], [, , "165\\d", , , , "1650", , , [4]], , [, , , , , , , , , [-1]]],
        LY: [, [, , "1\\d\\d", , , , , , , [3]], , , [
          ,
          ,
          "19[013]",
          ,
          ,
          ,
          "190"
        ], [, , , , , , , , , [-1]], , , , "LY", , , , , , , , , , , , , , , , , , [, , "19[013]", , , , "190"], , [, , "19[013]", , , , "190"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        MA: [, [, , "1\\d\\d?", , , , , , , [2, 3]], , , [, , "1(?:[59]|77)", , , , "15"], [, , , , , , , , , [-1]], , , , "MA", , , , , , , , , , , , , , , , , , [, , "1(?:[59]|77)", , , , "15"], , [, , "1(?:[59]|77)", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        MC: [, [, , "1\\d\\d?", , , , , , , [2, 3]], , , [, , "1(?:12|[578])", , , , "15"], [, , , , , , , , , [-1]], , , , "MC", , , , , , , , , , , , , , , , , , [, , "1(?:12|[578])", , , , "15"], , [
          ,
          ,
          "1(?:12|41|[578])",
          ,
          ,
          ,
          "15"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        MD: [, [, , "[19]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:2|6(?:000|1(?:11|2\\d)))|90[1-3]", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "MD", , , , , , , , , , , , , , , , , , [, , "112|90[1-3]", , , , "112", , , [3]], , [, , "1(?:1(?:2|6(?:00[06]|1(?:1[17]|23))|8\\d\\d?|99)|90[04-9])|90[1-3]|1(?:4\\d\\d|6[0-389]|9[1-4])\\d", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        ME: [
          ,
          [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]],
          ,
          ,
          [, , "1(?:12|2[2-4])", , , , "112", , , [3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "ME",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:12|2[2-4])", , , , "112", , , [3]],
          ,
          [, , "1(?:1(?:(?:[013-57-9]|6\\d\\d)\\d|2)|[249]\\d{3}|5999|8(?:0[089]|1[0-8]|888))|1(?:[02-5]\\d\\d|60[06]|700)|12\\d", , , , "112"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        MF: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], , , , "MF", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15"], , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        MG: [
          ,
          [, , "1\\d\\d?", , , , , , , [2, 3]],
          ,
          ,
          [, , "1(?:1[78]|[78])", , , , "17"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "MG",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:1[78]|[78])", , , , "17"],
          ,
          [, , "1(?:1[78]|[78])", , , , "17"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        MH: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "911", , , , "911"], [, , , , , , , , , [-1]], , , , "MH", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "911", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        MK: [, [, , "1\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]], , , [, , "1(?:1(?:2|6\\d{3})|9[2-4])", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "MK", , , , , , , , , , , , , , , , , , [, , "1(?:12|9[2-4])", , , , "112", , , [3]], , [
          ,
          ,
          "1(?:1(?:2|8\\d)|3\\d|9[2-4])|1(?:16|2\\d)\\d{3}",
          ,
          ,
          ,
          "112"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        ML: [, [, , "[136-8]\\d{1,4}", , , , , , , [2, 3, 4, 5]], , , [, , "1[578]|(?:352|67)00|7402|(?:677|744|8000)\\d", , , , "15", , , [2, 4, 5]], [, , "(?:12|800)2\\d|3(?:52(?:11|2[02]|3[04-6]|99)|7574)", , , , "1220", , , [4, 5]], , , , "ML", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15", , , [2]], , [, , "1(?:1(?:[013-9]\\d|2)|2(?:1[02-469]|2[13])|[578])|350(?:35|57)|67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)|800[0-2][12]|3(?:52|[67]\\d)\\d\\d", , , , "15"], [
          ,
          ,
          "37(?:433|575)|7400|8001\\d",
          ,
          ,
          ,
          "7400",
          ,
          ,
          [4, 5]
        ], [, , "3503\\d|(?:3[67]\\d|800)\\d\\d", , , , "35030", , , [5]], , [, , "374(?:0[24-9]|[1-9]\\d)|7400|3(?:6\\d|75)\\d\\d", , , , "7400", , , [4, 5]]],
        MM: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "199", , , , "199"], [, , , , , , , , , [-1]], , , , "MM", , , , , , , , , , , , , , , , , , [, , "199", , , , "199"], , [, , "199", , , , "199"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        MN: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "10[0-35]", , , , "100"], [, , , , , , , , , [-1]], , , , "MN", , , , , , , , , , , , , , , , , , [, , "10[0-35]", , , , "100"], , [, , "10[0-35]", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        MO: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "MO", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "999", , , , "999"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        MP: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "MP", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        MQ: [, [, , "[13]\\d(?:\\d(?:\\d(?:\\d{2})?)?)?", , , , , , , [2, 3, 4, 6]], , , [, , "1(?:12|[578])|3[01]\\d\\d", , , , "15", , , [2, 3, 4]], [
          ,
          ,
          "3[2469]\\d\\d",
          ,
          ,
          ,
          "3200",
          ,
          ,
          [4]
        ], , , , "MQ", , , , , , , , , , , , , , , , , , [, , "1(?:12|[578])", , , , "15", , , [2, 3]], , [, , "1(?:12|[578])|(?:118[02-9]|3[0-2469])\\d\\d", , , , "15"], [, , "118\\d{3}", , , , "118000", , , [6]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        MR: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], , , , "MR", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17"], , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        MS: [
          ,
          [, , "[29]\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "9(?:11|88|99)", , , , "911"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "MS",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "9(?:11|99)", , , , "911"],
          ,
          [, , "211|9(?:11|88|99)", , , , "211"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        MT: [, [, , "1\\d\\d(?:\\d{3})?", , , , , , , [3, 6]], , , [, , "11(?:2|6\\d{3})", , , , "112"], [, , , , , , , , , [-1]], , , , "MT", , , , , , , , , , , , , , , , , , [, , "112", , , , "112", , , [3]], , [, , "11(?:2|6(?:000|1(?:11|23)))", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        MU: [
          ,
          [, , "[189]\\d{2,4}", , , , , , , [3, 4, 5]],
          ,
          ,
          [, , "11[45]|99[59]", , , , "114", , , [3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "MU",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "11[45]|99[59]", , , , "114", , , [3]],
          ,
          [, , "1\\d{2,4}|(?:8\\d\\d|99)\\d", , , , "100"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        MV: [, [, , "[14]\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:02|1[89])", , , , "102", , , [3]], [, , , , , , , , , [-1]], , , , "MV", , , , , , , , , , , , , , , , , , [, , "1(?:02|1[89])", , , , "102", , , [3]], , [, , "1(?:[0-37-9]|[4-6]\\d)\\d|4040|1[45]1", , , , "100"], [, , , , , , , , , [-1]], [, , "1[45]1", , , , "141", , , [3]], , [, , , , , , , , , [-1]]],
        MW: [, [, , "[189]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "199|99[7-9]", , , , "199", , , [3]], [, , , , , , , , , [-1]], , , , "MW", , , , , , , , , , , , , , , , , , [
          ,
          ,
          "199|99[7-9]",
          ,
          ,
          ,
          "199",
          ,
          ,
          [3]
        ], , [, , "199|80400|99[7-9]", , , , "199"], [, , , , , , , , , [-1]], [, , "804\\d\\d", , , , "80400", , , [5]], , [, , "804\\d\\d", , , , "80400", , , [5]]],
        MX: [, [, , "[0579]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "0(?:6[0568]|80)|911", , , , "060", , , [3]], [, , "(?:530\\d|776)\\d", , , , "7760", , , [4, 5]], , , , "MX", , , , , , , , , , , , , , , , , , [, , "0(?:6[0568]|80)|911", , , , "060", , , [3]], , [, , "0[1-9]\\d|53053|7766|911", , , , "010"], [, , , , , , , , , [-1]], [, , "0(?:[249]0|[35][01])", , , , "020", , , [3]], , [, , , , , , , , , [-1]]],
        MY: [, [, , "[1369]\\d{2,4}", , , , , , , [3, 4, 5]], , , [
          ,
          ,
          "112|999",
          ,
          ,
          ,
          "112",
          ,
          ,
          [3]
        ], [, , , , , , , , , [-1]], , , , "MY", , , , , , , , , , , , , , , , , , [, , "112|999", , , , "112", , , [3]], , [, , "1(?:0[01348]|1(?:[02]|1[128]|311)|2(?:0[125]|[13-6]|2\\d{0,2})|(?:3[1-35-79]|7[45])\\d\\d?|5(?:454|5\\d\\d?|77|888|999?)|8(?:18?|2|8[18])|9(?:[124]\\d?|68|71|9[0679]))|66628|99[1-469]|13[5-7]|(?:1(?:0[569]|309|5[12]|7[136-9]|9[03])|3[23679]\\d\\d)\\d", , , , "100"], [, , "666\\d\\d", , , , "66600", , , [5]], [, , , , , , , , , [-1]], , [, , "(?:3[23679]\\d|666)\\d\\d", , , , "32000", , , [5]]],
        MZ: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [
          ,
          ,
          "1(?:1[79]|9[78])",
          ,
          ,
          ,
          "117",
          ,
          ,
          [3]
        ], [, , , , , , , , , [-1]], , , , "MZ", , , , , , , , , , , , , , , , , , [, , "1(?:1[79]|9[78])", , , , "117", , , [3]], , [, , "1(?:[02-5]\\d\\d|1[79]|9[78])", , , , "117"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        NA: [, [, , "[19]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "10111", , , , "10111", , , [5]], [, , , , , , , , , [-1]], , , , "NA", , , , , , , , , , , , , , , , , , [, , "10111", , , , "10111", , , [5]], , [, , "(?:10|93)111|(?:1\\d|9)\\d\\d", , , , "900"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        NC: [, [, , "[135]\\d{1,3}", , , , , , , [2, 3, 4]], , , [
          ,
          ,
          "1(?:0(?:00|1[23]|3[0-2]|8\\d)|[5-8])|363\\d|577",
          ,
          ,
          ,
          "15"
        ], [, , , , , , , , , [-1]], , , , "NC", , , , , , , , , , , , , , , , , , [, , "1[5-8]", , , , "15", , , [2]], , [, , "1(?:0(?:0[06]|1[02-46]|20|3[0-25]|42|5[058]|77|88)|[5-8])|3631|5[6-8]\\d", , , , "15"], [, , "5(?:67|88)", , , , "567", , , [3]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        NE: [
          ,
          [, , "[1-3578]\\d(?:\\d(?:\\d{3})?)?", , , , , , , [2, 3, 6]],
          ,
          ,
          [, , "1(?:18|[578])|723\\d{3}", , , , "15"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "NE",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:18|[578])|723141", , , , "15"],
          ,
          [, , "1(?:0[01]|1[128]|2[034]|3[013]|[46]0|55?|[78])|222|333|555|723141|888", , , , "15"],
          [, , , , , , , , , [-1]],
          [, , "1(?:0[01]|1[12]|2[034]|3[013]|[46]0|55)|222|333|555|888", , , , "100", , , [3]],
          ,
          [, , , , , , , , , [-1]]
        ],
        NF: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|55|77)", , , , "911"], [, , , , , , , , , [-1]], , , , "NF", , , , , , , , , , , , , , , , , , [, , "9(?:11|55|77)", , , , "911"], , [, , "9(?:11|55|77)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        NG: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "199", , , , "199", , , [3]], [, , , , , , , , , [-1]], , , , "NG", , , , , , , , , , , , , , , , , , [, , "199", , , , "199", , , [3]], , [, , "199|40700", , , , "199"], [, , , , , , , , , [-1]], [
          ,
          ,
          "407\\d\\d",
          ,
          ,
          ,
          "40700",
          ,
          ,
          [5]
        ], , [, , "407\\d\\d", , , , "40700", , , [5]]],
        NI: [, [, , "[12467]\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[58]|2[08])|737\\d", , , , "115"], [, , , , , , , , , [-1]], , , , "NI", , , , , , , , , , , , , , , , , , [, , "1(?:1[58]|2[08])", , , , "115", , , [3]], , [, , "1(?:1[58]|200)|4878|7(?:010|373)|12[0158]|(?:19|[267]1)00", , , , "115"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        NL: [, [, , "[1349]\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]], , , [, , "11(?:2|6\\d{3})|911", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "NL", , , , , , , , , , , , , , , , , , [
          ,
          ,
          "112|911",
          ,
          ,
          ,
          "112",
          ,
          ,
          [3]
        ], , [, , "1(?:1(?:2|6(?:00[06]|1(?:11|23)))|2(?:0[0-4]|3[34]|44)|3[03-9]\\d|400|8(?:[02-9]\\d|1[0-79]))|[34]000|911", , , , "112"], [, , , , , , , , , [-1]], [, , "120\\d", , , , "1200", , , [4]], , [, , "[34]00\\d", , , , "3000", , , [4]]],
        NO: [, [, , "[01]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:[023]|6\\d{3})", , , , "110", , , [3, 6]], [, , , , , , , , , [-1]], , , , "NO", , , , , , , , , , , , , , , , , , [, , "11[023]", , , , "110", , , [3]], , [, , "04\\d{3}|1(?:1(?:[0239]|61(?:1[17]|23))|2[048]|4(?:12|[59])|7[57]|8\\d\\d|90)", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [
          ,
          ,
          "04\\d{3}",
          ,
          ,
          ,
          "04000",
          ,
          ,
          [5]
        ]],
        NP: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:0[0-36]|12)|1(?:09|11)\\d", , , , "100"], [, , , , , , , , , [-1]], , , , "NP", , , , , , , , , , , , , , , , , , [, , "1(?:0[0-3]|12)", , , , "100", , , [3]], , [, , "1(?:0(?:[0-36]|98)|1(?:1[1-4]|2))", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        NR: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[0-2]", , , , "110"], [, , , , , , , , , [-1]], , , , "NR", , , , , , , , , , , , , , , , , , [, , "11[0-2]", , , , "110"], , [, , "1(?:1[0-2]|23|92)", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        NU: [, [
          ,
          ,
          "[019]\\d\\d",
          ,
          ,
          ,
          ,
          ,
          ,
          [3]
        ], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "NU", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "01[05]|101|999", , , , "010"], [, , , , , , , , , [-1]], [, , "010", , , , "010"], , [, , , , , , , , , [-1]]],
        NZ: [, [, , "\\d{3,4}", , , , , , , [3, 4]], , , [, , "111", , , , "111", , , [3]], [, , "018", , , , "018", , , [3]], , , , "NZ", , , , , , , , , , , , , , , , , , [, , "111", , , , "111", , , [3]], , [, , "018|1(?:(?:1|37)1|(?:23|94)4|7[03]7)|[2-57-9]\\d{2,3}|6(?:161|26[0-3]|742)", , , , "018"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [
          ,
          ,
          "018|(?:1(?:23|37|7[03]|94)|6(?:[12]6|74))\\d|[2-57-9]\\d{2,3}",
          ,
          ,
          ,
          "018"
        ]],
        OM: [, [, , "[19]\\d{3}", , , , , , , [4]], , , [, , "1444|999\\d", , , , "1444"], [, , , , , , , , , [-1]], , , , "OM", , , , , , , , , , , , , , , , , , [, , "1444|9999", , , , "1444"], , [, , "1(?:111|222|4(?:4[0-5]|50|66|7[7-9])|51[0-8])|9999|1(?:2[3-5]|3[0-2]|50)\\d", , , , "1111"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        PA: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "911", , , , "911"], [, , , , , , , , , [-1]], , , , "PA", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "10[2-4]|911", , , , "102"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        PE: [
          ,
          [, , "1\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "1(?:05|1[67])", , , , "105"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "PE",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:05|1[67])", , , , "105"],
          ,
          [, , "1(?:05|1[67])", , , , "105"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        PF: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], , , , "PF", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15"], , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        PG: [, [, , "[01]\\d{2,6}", , , , , , , [3, 4, 5, 6, 7]], , , [, , "000|11[01]", , , , "000", , , [3]], [, , , , , , , , , [-1]], , , , "PG", , , , , , , , , , , , , , , , , , [
          ,
          ,
          "000|11[01]",
          ,
          ,
          ,
          "000",
          ,
          ,
          [3]
        ], , [, , "000|1(?:1[01]|5\\d\\d|6\\d{2,5})", , , , "000"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "16\\d{2,5}", , , , "1600", , , [4, 5, 6, 7]]],
        PH: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "11[27]|911", , , , "112"], [, , , , , , , , , [-1]], , , , "PH", , , , , , , , , , , , , , , , , , [, , "11[27]|911", , , , "112"], , [, , "11[27]|911", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        PK: [, [, , "1\\d{1,3}", , , , , , , [2, 3, 4]], , , [, , "1(?:1(?:2\\d?|5)|[56])", , , , "15"], [, , , , , , , , , [-1]], , , , "PK", , , , , , , , , , , , , , , , , , [, , "1(?:1(?:22?|5)|[56])", , , , "15"], , [
          ,
          ,
          "1(?:122|3[014]|[56])|11[2457-9]",
          ,
          ,
          ,
          "15"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        PL: [, [, , "[19]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "11(?:2|6\\d{3})|99[7-9]", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "PL", , , , , , , , , , , , , , , , , , [, , "112|99[7-9]", , , , "112", , , [3]], , [, , "1(?:1(?:2|61(?:11|23)|891[23])|9\\d{3})|9(?:8[4-7]|9[1-9])|11[68]000", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        PM: [, [, , "[13]\\d(?:\\d\\d(?:\\d{2})?)?", , , , , , , [2, 4, 6]], , , [, , "1[578]|3(?:0\\d|1[689])\\d", , , , "15", , , [2, 4]], [
          ,
          ,
          "3[2469]\\d\\d",
          ,
          ,
          ,
          "3200",
          ,
          ,
          [4]
        ], , , , "PM", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15", , , [2]], , [, , "1[578]|31(?:03|[689]\\d)|(?:118[02-9]|3[02469])\\d\\d", , , , "15"], [, , "118\\d{3}", , , , "118000", , , [6]], [, , "310\\d", , , , "3100", , , [4]], , [, , , , , , , , , [-1]]],
        PR: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "PR", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        PS: [
          ,
          [, , "1\\d{2,3}", , , , , , , [3, 4]],
          ,
          ,
          [, , "1(?:0[0-2]|66)", , , , "100", , , [3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "PS",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "10[0-2]", , , , "100", , , [3]],
          ,
          [, , "1(?:0[0-2]|122|44|66|99)", , , , "100"],
          [, , , , , , , , , [-1]],
          [, , "112\\d", , , , "1120", , , [4]],
          ,
          [, , , , , , , , , [-1]]
        ],
        PT: [
          ,
          [, , "1\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]],
          ,
          ,
          [, , "11[257]|1(?:16\\d\\d|5[1589]|8[279])\\d", , , , "112"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "PT",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "11[25]", , , , "112", , , [3]],
          ,
          [, , "1(?:0(?:45|5[01])|1(?:[2578]|600[06])|4(?:1[45]|4)|583|6(?:1[0236]|3[02]|9[169]))|1(?:1611|59)1|1[068]78|1[08]9[16]|1(?:0[1-38]|40|5[15]|6[258]|82)0", , , , "112"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        PW: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "911", , , , "911"], [, , , , , , , , , [-1]], , , , "PW", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "911", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        PY: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "128|911", , , , "128"], [, , , , , , , , , [-1]], , , , "PY", , , , , , , , , , , , , , , , , , [, , "128|911", , , , "128"], , [, , "1[1-9]\\d|911", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        QA: [, [, , "[129]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "99\\d", , , , "990", , , [3]], [
          ,
          ,
          "900",
          ,
          ,
          ,
          "900",
          ,
          ,
          [3]
        ], , , , "QA", , , , , , , , , , , , , , , , , , [, , "999", , , , "999", , , [3]], , [, , "9(?:00|[19]\\d)|(?:1|20|9[27]\\d)\\d\\d", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        RE: [, [, , "1\\d\\d?", , , , , , , [2, 3]], , , [, , "1(?:12|[578])", , , , "15"], [, , , , , , , , , [-1]], , , , "RE", , , , , , , , , , , , , , , , , , [, , "1(?:12|[578])", , , , "15"], , [, , "1(?:12|[578])", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        RO: [, [, , "[18]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:2|6\\d{3})", , , , "112", , , [3, 6]], [
          ,
          ,
          "(?:1(?:18[39]|[24])|8[48])\\d\\d",
          ,
          ,
          ,
          "1200",
          ,
          ,
          [4, 6]
        ], , , , "RO", , , , , , , , , , , , , , , , , , [, , "112", , , , "112", , , [3]], , [, , "1(?:1(?:2|6(?:000|1(?:11|23))|8(?:(?:01|8[18])1|119|[23]00|932))|[24]\\d\\d|9(?:0(?:00|19)|1[19]|21|3[02]|5[178]))|8[48]\\d\\d", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "(?:1[24]|8[48])\\d\\d", , , , "1200", , , [4]]],
        RS: [
          ,
          [, , "[19]\\d{1,5}", , , , , , , [2, 3, 4, 5, 6]],
          ,
          ,
          [, , "112|9[2-4]", , , , "92", , , [2, 3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "RS",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "112|9[2-4]", , , , "92", , , [2, 3]],
          ,
          [, , "1[189]\\d{1,4}|9[2-4]", , , , "92"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        RU: [, [, , "[01]\\d\\d?", , , , , , , [2, 3]], , , [, , "112|(?:0|10)[1-3]", , , , "01"], [, , , , , , , , , [-1]], , , , "RU", , , , , , , , , , , , , , , , , , [, , "112|(?:0|10)[1-3]", , , , "01"], , [, , "112|(?:0|10)[1-4]", , , , "01"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        RW: [, [, , "[14]\\d\\d", , , , , , , [3]], , , [, , "11[1245]", , , , "111"], [, , , , , , , , , [-1]], , , , "RW", , , , , , , , , , , , , , , , , , [, , "11[12]", , , , "111"], , [, , "1(?:0[0-2]|1[0-24-6]|2[13]|70|99)|456", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        SA: [, [, , "[19]\\d{2,5}", , , , , , , [
          3,
          4,
          5,
          6
        ]], , , [, , "11(?:2|6\\d{3})|9(?:11|37|9[7-9])", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "SA", , , , , , , , , , , , , , , , , , [, , "112|9(?:11|9[79])", , , , "112", , , [3]], , [, , "1(?:1(?:00|2|6111)|410|9(?:00|1[89]|9(?:099|22|9[0-3])))|9(?:0[24-79]|11|3[379]|40|66|8[5-9]|9[02-9])", , , , "112"], [, , "141\\d", , , , "1410", , , [4]], [, , "1(?:10|41)\\d|90[24679]", , , , "902", , , [3, 4]], , [, , , , , , , , , [-1]]],
        SB: [, [, , "[127-9]\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "SB", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [
          ,
          ,
          "1(?:[02]\\d|1[12]|[35][01]|[49][1-9]|6[2-9]|7[7-9]|8[0-8])|269|777|835|9(?:[01]1|22|33|55|77|88|99)",
          ,
          ,
          ,
          "100"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        SC: [, [, , "[19]\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[1468]|60)|999", , , , "111", , , [3]], [, , , , , , , , , [-1]], , , , "SC", , , , , , , , , , , , , , , , , , [, , "999", , , , "999", , , [3]], , [, , "1(?:[06]\\d|1[0-246-8]|2[0-8]|3[13]|4[0-2]|5[15]|7[124-6]|8[158]|9[015])|9(?:6\\d\\d|99)", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        SD: [
          ,
          [, , "9\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "999", , , , "999"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "SD",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "999", , , , "999"],
          ,
          [, , "999", , , , "999"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        SE: [, [, , "[1-37-9]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:2|(?:3|6\\d)\\d\\d|414|77)|900\\d\\d", , , , "112"], [, , "11811[89]|72\\d{3}", , , , "72000", , , [5, 6]], , , , "SE", , , , , , , , , , , , , , , , , , [, , "112|90000", , , , "112", , , [3, 5]], , [, , "11(?:[25]|313|6(?:00[06]|1(?:1[17]|23))|7[0-8])|2(?:2[02358]|33|4[01]|50|6[1-4])|32[13]|8(?:22|88)|9(?:0(?:00|51)0|12)|(?:11(?:4|8[02-46-9])|7\\d\\d|90[2-4])\\d\\d|(?:118|90)1(?:[02-9]\\d|1[013-9])", , , , "112"], [, , , , , , , , , [-1]], [
          ,
          ,
          "2(?:2[02358]|33|4[01]|50|6[1-4])|32[13]|8(?:22|88)|912",
          ,
          ,
          ,
          "220",
          ,
          ,
          [3]
        ], , [, , "7\\d{4}", , , , "70000", , , [5]]],
        SG: [, [, , "[179]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "99[359]", , , , "993", , , [3]], [, , , , , , , , , [-1]], , , , "SG", , , , , , , , , , , , , , , , , , [, , "99[359]", , , , "993", , , [3]], , [, , "1(?:(?:[01368]\\d|44)\\d|[57]\\d{2,3}|9(?:0[1-9]|[1-9]\\d))|77222|99[02-9]|100", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "772\\d\\d", , , , "77200", , , [5]]],
        SH: [, [, , "[129]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "9(?:11|99)", , , , "911", , , [3]], [, , , , , , , , , [-1]], , , , "SH", , , , , , , , , , , , , , , , , , [, , "9(?:11|99)", , , , "911", , , [3]], , [
          ,
          ,
          "1\\d{2,3}|26[01]\\d\\d|9(?:11|99)",
          ,
          ,
          ,
          "100"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        SI: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:(?:0|6\\d)\\d\\d|[23]|8\\d\\d?)", , , , "112"], [, , , , , , , , , [-1]], , , , "SI", , , , , , , , , , , , , , , , , , [, , "11[23]", , , , "112", , , [3]], , [, , "1(?:1(?:00[146]|[23]|6(?:000|1(?:11|23))|8(?:[08]|99))|9(?:059|1(?:0[12]|16)|5|70|87|9(?:00|[149])))|19(?:08|81)[09]", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        SJ: [, [, , "[01]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [
          ,
          ,
          "11[023]",
          ,
          ,
          ,
          "110",
          ,
          ,
          [3]
        ], [, , , , , , , , , [-1]], , , , "SJ", , , , , , , , , , , , , , , , , , [, , "11[023]", , , , "110", , , [3]], , [, , "04\\d{3}|11[023]", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "04\\d{3}", , , , "04000", , , [5]]],
        SK: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:1(?:2|6\\d{3})|5[058])", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "SK", , , , , , , , , , , , , , , , , , [, , "1(?:12|5[058])", , , , "112", , , [3]], , [, , "1(?:1(?:2|6(?:000|111)|8[0-8])|[248]\\d{3}|5[0589])", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        SL: [, [
          ,
          ,
          "[069]\\d\\d(?:\\d{2})?",
          ,
          ,
          ,
          ,
          ,
          ,
          [3, 5]
        ], , , [, , "(?:01|99)9", , , , "019", , , [3]], [, , , , , , , , , [-1]], , , , "SL", , , , , , , , , , , , , , , , , , [, , "(?:01|99)9", , , , "019", , , [3]], , [, , "(?:01|99)9|60400", , , , "019"], [, , , , , , , , , [-1]], [, , "604\\d\\d", , , , "60400", , , [5]], , [, , "604\\d\\d", , , , "60400", , , [5]]],
        SM: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[358]", , , , "113"], [, , , , , , , , , [-1]], , , , "SM", , , , , , , , , , , , , , , , , , [, , "11[358]", , , , "113"], , [, , "11[358]", , , , "113"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        SN: [, [, , "[12]\\d{1,5}", , , , , , , [2, 3, 4, 5, 6]], , , [
          ,
          ,
          "1(?:515|[78])|2(?:00|1)\\d{3}",
          ,
          ,
          ,
          "17",
          ,
          ,
          [2, 4, 5, 6]
        ], [, , "2(?:0[246]|[468])\\d{3}", , , , "24000", , , [5, 6]], , , , "SN", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17", , , [2]], , [, , "1(?:1[69]|(?:[246]\\d|51)\\d)|2(?:0[0-246]|[12468])\\d{3}|1[278]", , , , "12"], [, , "2(?:01|2)\\d{3}", , , , "22000", , , [5, 6]], [, , "1[46]\\d\\d", , , , "1400", , , [4]], , [, , "2[468]\\d{3}", , , , "24000", , , [5]]],
        SO: [, [, , "[57-9]\\d\\d", , , , , , , [3]], , , [, , "555|888|999", , , , "555"], [, , , , , , , , , [-1]], , , , "SO", , , , , , , , , , , , , , , , , , [, , "555|888|999", , , , "555"], , [, , "555|777|888|999", , , , "555"], [, , , , , , , , , [-1]], [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ], , [, , , , , , , , , [-1]]],
        SR: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "115", , , , "115", , , [3]], [, , , , , , , , , [-1]], , , , "SR", , , , , , , , , , , , , , , , , , [, , "115", , , , "115", , , [3]], , [, , "1\\d{2,3}", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        SS: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "SS", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "999", , , , "999"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        ST: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "112", , , , "112"], [, , , , , , , , , [-1]], , , , "ST", , , , , , , , , , , , , , , , , , [
          ,
          ,
          "112",
          ,
          ,
          ,
          "112"
        ], , [, , "112", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        SV: [, [, , "[149]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "116\\d{3}|911", , , , "911", , , [3, 6]], [, , , , , , , , , [-1]], , , , "SV", , , , , , , , , , , , , , , , , , [, , "91[13]", , , , "911", , , [3]], , [, , "1(?:1(?:2|6111)|2[136-8]|3[0-6]|9[05])|40404|9(?:1\\d|29)", , , , "112"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
        SX: [
          ,
          [, , "9\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "9(?:19|88)", , , , "919"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "SX",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "919", , , , "919"],
          ,
          [, , "9(?:19|88)", , , , "919"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        SY: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[023]", , , , "110"], [, , , , , , , , , [-1]], , , , "SY", , , , , , , , , , , , , , , , , , [, , "11[023]", , , , "110"], , [, , "11[023]", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        SZ: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "SZ", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "999", , , , "999"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        TC: [, [, , "9\\d\\d", , , , , , , [3]], , , [
          ,
          ,
          "9(?:11|88|99)",
          ,
          ,
          ,
          "911"
        ], [, , , , , , , , , [-1]], , , , "TC", , , , , , , , , , , , , , , , , , [, , "9(?:11|99)", , , , "911"], , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        TD: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], , , , "TD", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17"], , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        TG: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[78]|7[127])", , , , "117", , , [3]], [, , , , , , , , , [-1]], , , , "TG", , , , , , , , , , , , , , , , , , [
          ,
          ,
          "1(?:1[78]|7[127])",
          ,
          ,
          ,
          "117",
          ,
          ,
          [3]
        ], , [, , "1(?:011|1[078]|7[127])", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        TH: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1(?:00|2[03]|3[3479]|7[67]|9[0246])|578|6(?:44|6[79]|88|9[16])|88\\d|9[19])|1[15]55", , , , "191"], [, , "1(?:113|2[23]\\d|5(?:09|56))", , , , "1113", , , [4]], , , , "TH", , , , , , , , , , , , , , , , , , [, , "1(?:669|9[19])", , , , "191"], , [
          ,
          ,
          "1(?:0[0-2]|1(?:0[03]|1[1-35]|2[0358]|3[03-79]|4[02-489]|5[04-9]|6[04-79]|7[03-9]|8[027-9]|9[02-9])|2(?:22|3[89]|66)|3(?:18|2[23]|3[013]|5[56]|6[45]|73)|477|5(?:0\\d|4[0-37-9]|5[1-8]|6[01679]|7[12568]|8[0-24589]|9[013589])|6(?:0[0-29]|2[03]|4[3-6]|6[1-9]|7[0257-9]|8[0158]|9[014-9])|7(?:[14]9|7[27]|90)|888|9[19])",
          ,
          ,
          ,
          "100"
        ], [, , "1(?:1(?:03|1[15]|2[58]|3[056]|4[02-49]|5[046-9]|7[03-589]|9[57-9])|5(?:0[0-8]|4[0-378]|5[1-478]|7[156])|6(?:20|4[356]|6[1-68]|7[057-9]|8[015]|9[0457-9]))|1(?:1[68]|26|3[1-35]|5[689]|60|7[17])\\d", , , , "1103", , , [4]], [, , "114[89]", , , , "1148", , , [4]], , [, , , , , , , , , [-1]]],
        TJ: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "1(?:0[1-3]|12)", , , , "101"], [, , , , , , , , , [-1]], , , , "TJ", , , , , , , , , , , , , , , , , , [, , "1(?:0[1-3]|12)", , , , "101"], , [, , "1(?:0[1-3]|12)", , , , "101"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        TL: [, [
          ,
          ,
          "1\\d\\d",
          ,
          ,
          ,
          ,
          ,
          ,
          [3]
        ], , , [, , "11[25]", , , , "112"], [, , , , , , , , , [-1]], , , , "TL", , , , , , , , , , , , , , , , , , [, , "11[25]", , , , "112"], , [, , "1(?:0[02]|1[25]|2[0138]|72|9[07])", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        TM: [, [, , "0\\d", , , , , , , [2]], , , [, , "0[1-49]", , , , "01"], [, , , , , , , , , [-1]], , , , "TM", , , , , , , , , , , , , , , , , , [, , "0[1-3]", , , , "01"], , [, , "0[1-49]", , , , "01"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        TN: [
          ,
          [, , "1\\d\\d", , , , , , , [3]],
          ,
          ,
          [, , "19[078]", , , , "190"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "TN",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "19[078]", , , , "190"],
          ,
          [, , "19[078]", , , , "190"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        TO: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|22|33|99)", , , , "911"], [, , , , , , , , , [-1]], , , , "TO", , , , , , , , , , , , , , , , , , [, , "9(?:11|22|33|99)", , , , "911"], , [, , "9(?:11|22|33|99)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        TR: [, [, , "[1-9]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:1[02]|22|3[126]|4[04]|5[15-9]|6[18]|77|83)", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "TR", , , , , , , , , , , , , , , , , , [, , "1(?:1[02]|55)", , , , "110", , , [3]], , [
          ,
          ,
          "1(?:1(?:[02-79]|8(?:1[018]|2[0245]|3[2-4]|42|5[058]|6[06]|7[07]|8[01389]|9[089]))|3(?:37|[58]6|65)|471|5(?:07|78)|6(?:[02]6|99)|8(?:63|95))|2(?:077|268|4(?:17|23)|5(?:7[26]|82)|6[14]4|8\\d\\d|9(?:30|89))|3(?:0(?:05|72)|353|4(?:06|30|64)|502|674|747|851|9(?:1[29]|60))|4(?:0(?:25|3[12]|[47]2)|3(?:3[13]|[89]1)|439|5(?:43|55)|717|832)|5(?:145|290|[4-6]\\d\\d|772|833|9(?:[06]1|92))|6(?:236|6(?:12|39|8[59])|769)|7890|8(?:688|7(?:28|65)|85[06])|9(?:159|290)|1[2-9]\\d",
          ,
          ,
          ,
          "110"
        ], [, , "(?:285|542)0", , , , "2850", , , [4]], [, , , , , , , , , [-1]], , [, , "1(?:3(?:37|[58]6|65)|4(?:4|71)|5(?:07|78)|6(?:[02]6|99)|8(?:3|63|95))|(?:2(?:07|26|4[12]|5[78]|6[14]|8\\d|9[38])|3(?:0[07]|[38]5|4[036]|50|67|74|9[16])|4(?:0[2-47]|3[389]|[48]3|5[45]|71)|5(?:14|29|[4-6]\\d|77|83|9[069])|6(?:23|6[138]|76)|789|8(?:68|7[26]|85)|9(?:15|29))\\d", , , , "144", , , [3, 4]]],
        TT: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:88|9[09])", , , , "988"], [, , , , , , , , , [-1]], , , , "TT", , , , , , , , , , , , , , , , , , [, , "99[09]", , , , "990"], , [
          ,
          ,
          "9(?:88|9[09])",
          ,
          ,
          ,
          "988"
        ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        TV: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "911", , , , "911"], [, , , , , , , , , [-1]], , , , "TV", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "1\\d\\d|911", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        TW: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "11[0289]|1(?:81|92)\\d", , , , "110"], [, , "10[56]", , , , "105", , , [3]], , , , "TW", , , , , , , , , , , , , , , , , , [, , "11[029]", , , , "110", , , [3]], , [
          ,
          ,
          "1(?:0[04-6]|1[0237-9]|3[389]|6[05-8]|7[07]|8(?:0|11)|9(?:19|22|5[057]|68|8[05]|9[15689]))",
          ,
          ,
          ,
          "100"
        ], [, , "1(?:65|9(?:1\\d|50|85|98))", , , , "165"], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        TZ: [, [, , "[149]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "1(?:1[0-79]|9[09])|999", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "TZ", , , , , , , , , , , , , , , , , , [, , "11[0-245]|999", , , , "110", , , [3]], , [, , "1(?:1\\d|9[09])|46400|999", , , , "110"], [, , , , , , , , , [-1]], [, , "464\\d\\d", , , , "46400", , , [5]], , [, , "464\\d\\d", , , , "46400", , , [5]]],
        UA: [
          ,
          [, , "[189]\\d{2,5}", , , , , , , [3, 4, 5, 6]],
          ,
          ,
          [, , "1(?:0[1-3]|1(?:2|6\\d{3}))", , , , "101", , , [3, 6]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "UA",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:0[1-3]|12)", , , , "101", , , [3]],
          ,
          [, , "1(?:0[1-49]|1(?:2|6(?:000|1(?:11|23))|8\\d\\d?)|(?:[278]|5\\d)\\d)|[89]00\\d\\d?|151|1(?:06|4\\d|6)\\d\\d", , , , "101"],
          [, , , , , , , , , [-1]],
          [, , "(?:118|[89]00)\\d\\d?", , , , "1180", , , [4, 5]],
          ,
          [, , , , , , , , , [-1]]
        ],
        UG: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "UG", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "999", , , , "999"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        US: [, [, , "[1-9]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [
          ,
          ,
          "112|611|9(?:11|33|88)",
          ,
          ,
          ,
          "112",
          ,
          ,
          [3]
        ], [, , "24280|(?:381|968)35|4(?:3355|7553|8221)|5(?:(?:489|934)2|5928)|72078|(?:323|960)40|(?:276|414)63|(?:2(?:520|744)|7390|9968)9|(?:693|732|976)88|(?:3(?:556|825)|5294|8623|9729)4|(?:3378|4136|7642|8961|9979)6|(?:4(?:6(?:15|32)|827)|(?:591|720)8|9529)7", , , , "24280", , , [5]], , , , "US", , , , , , , , , , , , , , , , , , [, , "112|911", , , , "112", , , [3]], , [, , "11(?:2|5[1-47]|[68]\\d|7[0-57]|98)|[2-9]\\d{3,5}|[2-8]11|9(?:11|33|88)", , , , "112"], [
          ,
          ,
          "2(?:3333|(?:4224|7562|900)2|56447|6688)|3(?:1010|2665|7404)|40404|560560|6(?:0060|22639|5246|7622)|7(?:0701|3822|4666)|8(?:(?:3825|7226)5|4816)|99099",
          ,
          ,
          ,
          "23333",
          ,
          ,
          [5, 6]
        ], [, , "336\\d\\d|[2-9]\\d{3}|[2356]11", , , , "211", , , [3, 4, 5]], , [, , "[2-9]\\d{4,5}", , , , "20000", , , [5, 6]]],
        UY: [, [, , "[129]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "128|911", , , , "128", , , [3]], [, , , , , , , , , [-1]], , , , "UY", , , , , , , , , , , , , , , , , , [, , "128|911", , , , "128", , , [3]], , [, , "1(?:0[4-9]|1[2368]|2[0-3568]|787|997\\d?)|21997|911", , , , "104"], [, , "178\\d", , , , "1780", , , [4]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        UZ: [
          ,
          [, , "[04]\\d(?:\\d(?:\\d{2})?)?", , , , , , , [2, 3, 5]],
          ,
          ,
          [, , "0(?:0[1-3]|[1-3]|50)", , , , "01", , , [2, 3]],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "UZ",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "0(?:0[1-3]|[1-3]|50)", , , , "01", , , [2, 3]],
          ,
          [, , "0(?:0[1-3]|[1-3]|50)|45400", , , , "01"],
          [, , , , , , , , , [-1]],
          [, , "454\\d\\d", , , , "45400", , , [5]],
          ,
          [, , "454\\d\\d", , , , "45400", , , [5]]
        ],
        VA: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[2358]", , , , "112"], [, , , , , , , , , [-1]], , , , "VA", , , , , , , , , , , , , , , , , , [, , "11[2358]", , , , "112"], , [, , "11[2358]", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        VC: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], , , , "VC", , , , , , , , , , , , , , , , , , [
          ,
          ,
          "9(?:11|99)",
          ,
          ,
          ,
          "911"
        ], , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        VE: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "1(?:12|71)|911", , , , "112"], [, , , , , , , , , [-1]], , , , "VE", , , , , , , , , , , , , , , , , , [, , "1(?:12|71)|911", , , , "112"], , [, , "1(?:12|71)|911", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        VG: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], , , , "VG", , , , , , , , , , , , , , , , , , [, , "9(?:11|99)", , , , "911"], , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        VI: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "VI", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        VN: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[3-5]", , , , "113"], [, , , , , , , , , [-1]], , , , "VN", , , , , , , , , , , , , , , , , , [, , "11[3-5]", , , , "113"], , [, , "11[3-5]", , , , "113"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        VU: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "112", , , , "112"], [, , , , , , , , , [-1]], , , , "VU", , , , , , , , , , , , , , , , , , [
          ,
          ,
          "112",
          ,
          ,
          ,
          "112"
        ], , [, , "112", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        WF: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], , , , "WF", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15"], , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        WS: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "9(?:11|9[4-69])", , , , "911"], [, , , , , , , , , [-1]], , , , "WS", , , , , , , , , , , , , , , , , , [, , "9(?:11|9[4-69])", , , , "911"], , [, , "1(?:1[12]|2[0-6]|[39]0)|9(?:11|9[4-79])", , , , "111"], [, , , , , , , , , [-1]], [, , "12[0-6]", , , , "120"], , [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [-1]
        ]],
        XK: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "1(?:12|9[2-4])", , , , "112"], [, , , , , , , , , [-1]], , , , "XK", , , , , , , , , , , , , , , , , , [, , "1(?:12|9[2-4])", , , , "112"], , [, , "1(?:12|9[2-4])", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        YE: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "19[1459]", , , , "191"], [, , , , , , , , , [-1]], , , , "YE", , , , , , , , , , , , , , , , , , [, , "19[1459]", , , , "191"], , [, , "19[1459]", , , , "191"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        YT: [
          ,
          [, , "1\\d\\d?", , , , , , , [2, 3]],
          ,
          ,
          [, , "1(?:12|5)", , , , "15"],
          [, , , , , , , , , [-1]],
          ,
          ,
          ,
          "YT",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:12|5)", , , , "15"],
          ,
          [, , "1(?:12|5)", , , , "15"],
          [, , , , , , , , , [-1]],
          [, , , , , , , , , [-1]],
          ,
          [, , , , , , , , , [-1]]
        ],
        ZA: [
          ,
          [, , "[134]\\d{2,4}", , , , , , , [3, 4, 5]],
          ,
          ,
          [, , "1(?:01\\d\\d|12)", , , , "112", , , [3, 5]],
          [, , "41(?:348|851)", , , , "41348", , , [5]],
          ,
          ,
          ,
          "ZA",
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          [, , "1(?:01(?:11|77)|12)", , , , "112", , , [3, 5]],
          ,
          [, , "1(?:0(?:1(?:11|77)|20|7)|1[12]|77(?:3[237]|[45]7|6[279]|9[26]))|[34]\\d{4}", , , , "107"],
          [, , "3(?:078[23]|7(?:064|567)|8126)|4(?:394[16]|7751|8837)|4[23]699", , , , "30782", , , [5]],
          [, , "111", , , , "111", , , [3]],
          ,
          [, , "[34]\\d{4}", , , , "30000", , , [5]]
        ],
        ZM: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "112|99[139]", , , , "112"], [, , , , , , , , , [-1]], , , , "ZM", , , , , , , , , , , , , , , , , , [, , "112|99[139]", , , , "112"], , [, , "112|99[139]", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
        ZW: [, [, , "[139]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "112|9(?:5[023]|61|9[3-59])", , , , "112", , , [3]], [, , "3[013-57-9]\\d{3}", , , , "30000", , , [5]], , , , "ZW", , , , , , , , , , , , , , , , , , [, , "112|99[3-59]", , , , "112", , , [3]], , [
          ,
          ,
          "11[2469]|3[013-57-9]\\d{3}|9(?:5[023]|6[0-25]|9[3-59])",
          ,
          ,
          ,
          "112"
        ], [, , , , , , , , , [-1]], [, , "114|9(?:5[023]|6[0-25])", , , , "114", , , [3]], , [, , , , , , , , , [-1]]]
      };
      function Nb() {
        this.g = {};
      }
      ba(Nb);
      function Ob(a) {
        return (a = F[a]) ? a : [];
      }
      function Pb(a, b) {
        var c = Qb, d = Ob(u(a, 1));
        if (null == b || !d.includes(b)) return false;
        b = Rb(c, b);
        if (!b) return false;
        a = Sb(a);
        c = p(b, 1);
        if (!Tb(a, c)) return false;
        b = p(b, 29);
        return Tb(a, b);
      }
      function Ub(a, b) {
        var c = Qb;
        if (0 === b.length) return null;
        if (1 === b.length) return b[0];
        a = Sb(a);
        for (var d = 0; d < b.length; d++) {
          var e = b[d], f = Rb(c, e);
          if (f && Tb(a, p(f, 29))) return e;
        }
        return null;
      }
      function Rb(a, b) {
        if (!b) return null;
        b = b.toUpperCase();
        var c = a.g[b];
        if (null == c) {
          c = Mb[b];
          if (null == c) return null;
          c = new y().g(D.m(), c);
          a.g[b] = c;
        }
        return c;
      }
      function Sb(a) {
        if (!m(a, 2)) return "";
        var b = "" + p(a, 2);
        return m(a, 4) && p(a, 4) && 0 < u(a, 8) ? Array(u(a, 8) + 1).join("0") + b : b;
      }
      function Tb(a, b) {
        return 0 < r(b, 9).length && !r(b, 9).includes(a.length) ? false : J(u(b, 2), a.toString());
      }
      var P = G.oa(), Qb = Nb.oa();
      function Vb(a) {
        var b = P, c = T(b, a);
        b = M(b, u(a, 1), c);
        null == b ? a = -1 : (a = L(a), a = nb(a, b));
        switch (a) {
          case 0:
            return "fixed-line";
          case 2:
            return "fixed-line-or-mobile";
          case 1:
            return "mobile";
          case 8:
            return "pager";
          case 7:
            return "personal-number";
          case 4:
            return "premium-rate";
          case 5:
            return "shared-cost";
          case 3:
            return "toll-free";
          case 9:
            return "uan";
          case 6:
            return "voip";
          default:
          case -1:
            return "unknown";
        }
      }
      function Wb(a) {
        switch (a) {
          case "fixed-line":
            return 0;
          case "fixed-line-or-mobile":
            return 2;
          case "mobile":
            return 1;
          case "pager":
            return 8;
          case "personal-number":
            return 7;
          case "premium-rate":
            return 4;
          case "shared-cost":
            return 5;
          case "toll-free":
            return 3;
          case "uan":
            return 9;
          case "voip":
            return 6;
          default:
          case "unknown":
            return -1;
        }
      }
      function Xb(a) {
        try {
          switch (qb(a)) {
            case 0:
              return "is-possible";
            case 1:
              return "invalid-country-code";
            case 3:
              return "too-long";
            case 2:
              return "too-short";
          }
          if (pb(a)) return "is-possible";
        } catch (b) {
        }
        return "unknown";
      }
      function Yb(a, b) {
        if ("+" !== a.charAt(0) && "00" !== a.slice(0, 2)) return { parsed: c, v: d };
        try {
          var c = mb(P, a, b);
        } catch (e) {
        }
        if (c) {
          var d = T(P, c);
          if (null != d && "ZZ" !== d) return { parsed: c, v: d };
        }
        for (b = 1; 4 > b; ++b) {
          d = void 0;
          if (a.length < b + 1) return { parsed: c, v: d };
          d = N(a.substring(1, b + 1));
          if ("ZZ" !== d) return { v: d };
        }
        return { parsed: c, v: void 0 };
      }
      var Zb;
      a: {
        try {
          Zb = /* @__PURE__ */ new WeakMap();
          break a;
        } catch (a) {
        }
        Zb = void 0;
      }
      var $b = Zb;
      function U() {
        throw Error("Internal error");
      }
      var V = ["PhoneNumber$$module$src$index"], W = aa;
      V[0] in W || "undefined" == typeof W.execScript || W.execScript("var " + V[0]);
      for (var X; V.length && (X = V.shift()); ) V.length || void 0 === U ? W[X] && W[X] !== Object.prototype[X] ? W = W[X] : W = W[X] = {} : W[X] = U;
      var ac = Object.freeze({ valid: false, possible: false, possibility: "invalid-country-code" });
      function bc(a, b) {
        var c = null == b ? void 0 : b.regionCode;
        if ("string" === typeof a) var d = false;
        else try {
          ob(a), d = true;
        } catch (f) {
          d = false;
        }
        if (!d && "string" !== typeof a) throw Error("Invalid phone number, expected a string");
        if (!d && "object" !== typeof b && "undefined" !== typeof b) throw Error(`Invalid options, expected object, got ${typeof b}. This may be because of not yet upgraded code.`);
        if (!d && null != c && "string" !== typeof c) throw Error(`Invalid region code, expected a string, got ${typeof c} ${c}`);
        b = null;
        d ? (b = a, c = T(P, b), a = P.format(b, 2)) : (a = a.trim(), c && "+" === a.charAt(0) && (c = null), c && "+" !== a.charAt(0) && "00" !== a.slice(0, 2) || ({ v: c = null, parsed: b } = Yb(a, c)));
        if (!d) {
          if (c) {
            var e = cc(c);
            if (0 === e) return Object.assign({}, ac, c ? { regionCode: c } : {});
          } else return ac;
          try {
            b || (b = mb(P, a, c));
          } catch (f) {
            return Object.assign({}, ac, c ? { regionCode: c } : {}, { error: f });
          }
        }
        return { ra: b, ta: e, Da: a, v: c };
      }
      function Y(a) {
        return function() {
          let b;
          b || (b = a());
          return b;
        };
      }
      function dc(a, b) {
        a = bc(a, b);
        if (!a.ra) return a;
        let c, d, e;
        ({ ra: d, ta: e, Da: a, v: c } = a);
        a = Object.defineProperties(/* @__PURE__ */ Object.create(null), { input: { configurable: false, enumerable: true, value: a }, international: { configurable: false, enumerable: true, get: Y(() => P.format(d, 1)) }, national: { configurable: false, enumerable: true, get: Y(() => P.format(d, 2)) }, e164: { configurable: false, enumerable: true, get: Y(() => P.format(d, 0)) }, rfc3966: { configurable: false, enumerable: true, get: Y(() => P.format(d, 3)) }, significant: { configurable: false, enumerable: true, get: Y(() => L(d)) } });
        b = Vb(d);
        var f = ob(d);
        let g = pb(d);
        f || g || (g = false);
        a = Object.defineProperties(/* @__PURE__ */ Object.create(null), { number: { configurable: false, enumerable: true, value: a }, regionCode: { configurable: false, enumerable: true, value: c }, valid: { configurable: false, enumerable: true, value: f }, possible: { configurable: true, enumerable: true, value: g }, possibility: { configurable: true, enumerable: true, get: Y(() => Xb(d)) }, shortValid: { configurable: false, enumerable: true, get: Y(() => {
          var k = d, n = Ob(u(k, 1)), w = Ub(k, n);
          return 1 < n.length && null != w ? true : Pb(k, w);
        }) }, shortPossible: {
          configurable: false,
          enumerable: true,
          get: Y(() => {
            a: {
              var k = d;
              var n = Ob(u(k, 1));
              k = Sb(k).length;
              for (var w = 0; w < n.length; w++) {
                var S = Rb(Qb, n[w]);
                if (S && r(p(S, 1), 9).includes(k)) {
                  n = true;
                  break a;
                }
              }
              n = false;
            }
            return n;
          })
        }, type: { configurable: false, enumerable: true, value: b }, typeIsMobile: { configurable: false, enumerable: true, value: "mobile" === b || "fixed-line-or-mobile" === b }, typeIsFixedLine: { configurable: false, enumerable: true, value: "fixed-line" === b || "fixed-line-or-mobile" === b }, canBeInternationallyDialled: { configurable: false, enumerable: true, get: Y(() => P.ia(d)) }, countryCode: {
          configurable: false,
          enumerable: true,
          get: Y(() => {
            let k;
            return null != (k = e) ? k : K(c) ? Q(P, c) : 0;
          })
        } });
        $b && $b.set(a, d);
        return a;
      }
      U.parse = dc;
      function cc(a) {
        return K(a) ? Q(P, a) : 0;
      }
      U.getCountryCodeForRegionCode = cc;
      U.getRegionCodeForCountryCode = function(a) {
        return N(a);
      };
      U.findNumbers = function(a, b) {
        var c = null == b ? void 0 : b.defaultRegionCode;
        var d;
        var e = null != (d = null == b ? void 0 : b.leniency) ? d : "valid";
        var f;
        b = null != (f = null == b ? void 0 : b.maxTries) ? f : Number.MAX_SAFE_INTEGER;
        f = /([0-9]+(?: [0-9]+)*)/g;
        d = [];
        for (let k = 0; k < b; ++k) {
          var g = f.exec(a);
          if (!g) break;
          let n = g.index;
          g = g.index + g[1].length;
          0 < n && "+" === a.charAt(n - 1) && --n;
          var w = a.slice(n, g), S = dc(w, { regionCode: c });
          (S.valid || "possible" === e && S.possible) && d.push({ text: w, phoneNumber: S, start: n, end: g });
        }
        return d;
      };
      function ec(a) {
        var b = {};
        return a.filter((c) => {
          if (b.hasOwnProperty(c)) return false;
          b[c] = 1;
          return true;
        });
      }
      U.getSupportedRegionCodes = function() {
        return ec(bb());
      };
      U.getSupportedCallingCodes = function() {
        return ec(db());
      };
      U.getExample = function(a, b) {
        var c;
        b ? c = kb(a, Wb(b)) : c = kb(a, 0);
        return dc(c, a);
      };
      U.getAsYouType = function(a) {
        return new Z(a);
      };
      U.getNumberFrom = function(a, b) {
        try {
          a: {
            if ($b) {
              var e = $b.get(a);
              if (e) {
                var c = e;
                break a;
              }
            }
            let d;
            c = bc(null == a ? void 0 : null == (d = a.number) ? void 0 : d.international).ra;
          }
          return { valid: true, number: jb(c, b) };
        } catch (d) {
          return { valid: false, error: d };
        }
      };
      U.prototype.toJSON = function() {
        return this.g;
      };
      U.prototype.toJSON = U.prototype.toJSON;
      U.prototype.ia = function() {
        return this.g.canBeInternationallyDialled;
      };
      U.prototype.canBeInternationallyDialled = U.prototype.ia;
      U.prototype.Ba = function() {
        return this.g.valid;
      };
      U.prototype.isValid = U.prototype.Ba;
      U.prototype.Aa = function() {
        return this.g.possible;
      };
      U.prototype.isPossible = U.prototype.Aa;
      U.prototype.getType = function() {
        return this.g.type;
      };
      U.prototype.getType = U.prototype.getType;
      U.prototype.za = function() {
        return "mobile" === this.g.type || "fixed-line-or-mobile" === this.g.type;
      };
      U.prototype.isMobile = U.prototype.za;
      U.prototype.ya = function() {
        return "fixed-line" === this.g.type || "fixed-line-or-mobile" === this.g.type;
      };
      U.prototype.isFixedLine = U.prototype.ya;
      U.prototype.ua = function(a) {
        return this.g.number[null == a ? "e164" : a];
      };
      U.prototype.getNumber = U.prototype.ua;
      U.prototype.wa = function() {
        return this.g.regionCode;
      };
      U.prototype.getRegionCode = U.prototype.wa;
      U.prototype.ha = function() {
        return cc(this.g.regionCode);
      };
      U.prototype.getCountryCode = U.prototype.ha;
      function Z(a) {
        this.l = a;
        this.j = new vb(a);
        this.g = this.h = "";
      }
      Z.prototype.sa = function(a) {
        this.h += a;
        var b = this.j;
        b.ka = Cb(b, a);
        return this.g = b.ka;
      };
      Z.prototype.addChar = Z.prototype.sa;
      Z.prototype.Ca = function() {
        return this.g;
      };
      Z.prototype.number = Z.prototype.Ca;
      Z.prototype.Ea = function() {
        return "" === this.h ? this.g : this.reset(this.h.slice(0, this.h.length - 1));
      };
      Z.prototype.removeChar = Z.prototype.Ea;
      Z.prototype.reset = function(a) {
        var b = this.j;
        b.ka = "";
        A(b.s);
        A(b.ba);
        A(b.$);
        b.aa = 0;
        b.da = "";
        A(b.h);
        b.o = "";
        A(b.g);
        b.u = true;
        b.na = false;
        b.ca = false;
        b.ea = false;
        b.j = [];
        b.ga = false;
        b.l != b.xa && (b.l = wb(b, b.la));
        this.g = this.h = "";
        if (a) {
          b = 0;
          for (var c = a.length; b < c; ++b) this.sa(a.charAt(b));
        }
        return this.g;
      };
      Z.prototype.reset = Z.prototype.reset;
      Z.prototype.va = function() {
        return dc(this.g, { regionCode: this.l });
      };
      Z.prototype.getPhoneNumber = Z.prototype.va;
    }).call(
      module.exports || typeof globalThis !== "undefined" && globalThis || typeof commonjsGlobal !== "undefined" && commonjsGlobal || typeof window !== "undefined" && window || typeof self !== "undefined" && self || lib
    );
  })(lib$1);
  return lib$1.exports;
}
var awesomePhonenumber = awesomePhonenumber$1.exports;
var hasRequiredAwesomePhonenumber;
function requireAwesomePhonenumber() {
  if (hasRequiredAwesomePhonenumber) return awesomePhonenumber$1.exports;
  hasRequiredAwesomePhonenumber = 1;
  (function(module) {
    const exportedName = "PhoneNumber$$module$src$index";
    module.exports = requireLib()[exportedName] || (typeof globalThis !== "undefined" && globalThis || typeof commonjsGlobal !== "undefined" && commonjsGlobal || typeof window !== "undefined" && window || typeof self !== "undefined" && self || awesomePhonenumber)[exportedName];
    Object.defineProperty(
      module.exports,
      "__esModule",
      {
        value: true
      }
    );
    module.exports.parsePhoneNumber = (...args) => {
      try {
        return module.exports.parse(...args);
      } catch (error) {
        return {
          valid: false,
          possible: false,
          possibility: "invalid",
          error
        };
      }
    };
    module.exports.getCountryCodeForRegionCode = module.exports.getCountryCodeForRegionCode;
    module.exports.getRegionCodeForCountryCode = module.exports.getRegionCodeForCountryCode;
    module.exports.getSupportedCallingCodes = module.exports.getSupportedCallingCodes;
    module.exports.getSupportedRegionCodes = module.exports.getSupportedRegionCodes;
    module.exports.getExample = module.exports.getExample;
    module.exports.getAsYouType = module.exports.getAsYouType;
    module.exports.getNumberFrom = module.exports.getNumberFrom;
    module.exports.findNumbers = module.exports.findNumbers;
  })(awesomePhonenumber$1);
  return awesomePhonenumber$1.exports;
}
var awesomePhonenumberExports = requireAwesomePhonenumber();
var index = /* @__PURE__ */ getDefaultExportFromCjs(awesomePhonenumberExports);
var {
  AsYouType,
  getCountryCodeForRegionCode,
  getRegionCodeForCountryCode,
  getSupportedCallingCodes,
  getSupportedRegionCodes,
  findNumbers,
  getExample,
  getAsYouType,
  getNumberFrom,
  parsePhoneNumber
} = index;

// ../packages/input/src/input-format/phone/countries.ts
var allCountries = [
  ["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)", "af", "93"],
  ["Albania (Shqip\xEBri)", "al", "355"],
  ["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)", "dz", "213"],
  ["American Samoa", "as", "1", 5, ["684"]],
  ["Andorra", "ad", "376"],
  ["Angola", "ao", "244"],
  ["Anguilla", "ai", "1", 6, ["264"]],
  ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
  ["Argentina", "ar", "54"],
  ["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)", "am", "374"],
  ["Aruba", "aw", "297"],
  ["Ascension Island", "ac", "247"],
  ["Australia", "au", "61", 0],
  ["Austria (\xD6sterreich)", "at", "43"],
  ["Azerbaijan (Az\u0259rbaycan)", "az", "994"],
  ["Bahamas", "bs", "1", 8, ["242"]],
  ["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)", "bh", "973"],
  ["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)", "bd", "880"],
  ["Barbados", "bb", "1", 9, ["246"]],
  ["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)", "by", "375"],
  ["Belgium (Belgi\xEB)", "be", "32"],
  ["Belize", "bz", "501"],
  ["Benin (B\xE9nin)", "bj", "229"],
  ["Bermuda", "bm", "1", 10, ["441"]],
  ["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)", "bt", "975"],
  ["Bolivia", "bo", "591"],
  ["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)", "ba", "387"],
  ["Botswana", "bw", "267"],
  ["Brazil (Brasil)", "br", "55"],
  ["British Indian Ocean Territory", "io", "246"],
  ["British Virgin Islands", "vg", "1", 11, ["284"]],
  ["Brunei", "bn", "673"],
  ["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)", "bg", "359"],
  ["Burkina Faso", "bf", "226"],
  ["Burundi (Uburundi)", "bi", "257"],
  ["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)", "kh", "855"],
  ["Cameroon (Cameroun)", "cm", "237"],
  [
    "Canada",
    "ca",
    "1",
    1,
    [
      "204",
      "226",
      "236",
      "249",
      "250",
      "263",
      "289",
      "306",
      "343",
      "354",
      "365",
      "367",
      "368",
      "382",
      "387",
      "403",
      "416",
      "418",
      "428",
      "431",
      "437",
      "438",
      "450",
      "584",
      "468",
      "474",
      "506",
      "514",
      "519",
      "548",
      "579",
      "581",
      "584",
      "587",
      "604",
      "613",
      "639",
      "647",
      "672",
      "683",
      "705",
      "709",
      "742",
      "753",
      "778",
      "780",
      "782",
      "807",
      "819",
      "825",
      "867",
      "873",
      "902",
      "905"
    ]
  ],
  ["Cape Verde (Kabu Verdi)", "cv", "238"],
  ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
  ["Cayman Islands", "ky", "1", 12, ["345"]],
  ["Central African Republic (R\xE9publique centrafricaine)", "cf", "236"],
  ["Chad (Tchad)", "td", "235"],
  ["Chile", "cl", "56"],
  ["China (\u4E2D\u56FD)", "cn", "86"],
  ["Christmas Island", "cx", "61", 2, ["89164"]],
  ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
  ["Colombia", "co", "57"],
  ["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)", "km", "269"],
  ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
  ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
  ["Cook Islands", "ck", "682"],
  ["Costa Rica", "cr", "506"],
  ["C\xF4te d\u2019Ivoire", "ci", "225"],
  ["Croatia (Hrvatska)", "hr", "385"],
  ["Cuba", "cu", "53"],
  ["Cura\xE7ao", "cw", "599", 0],
  ["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)", "cy", "357"],
  ["Czech Republic (\u010Cesk\xE1 republika)", "cz", "420"],
  ["Denmark (Danmark)", "dk", "45"],
  ["Djibouti", "dj", "253"],
  ["Dominica", "dm", "1", 13, ["767"]],
  [
    "Dominican Republic (Rep\xFAblica Dominicana)",
    "do",
    "1",
    2,
    ["809", "829", "849"]
  ],
  ["Ecuador", "ec", "593"],
  ["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)", "eg", "20"],
  ["El Salvador", "sv", "503"],
  ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
  ["Eritrea", "er", "291"],
  ["Estonia (Eesti)", "ee", "372"],
  ["Eswatini", "sz", "268"],
  ["Ethiopia", "et", "251"],
  ["Falkland Islands (Islas Malvinas)", "fk", "500"],
  ["Faroe Islands (F\xF8royar)", "fo", "298"],
  ["Fiji", "fj", "679"],
  ["Finland (Suomi)", "fi", "358", 0],
  ["France", "fr", "33"],
  ["French Guiana (Guyane fran\xE7aise)", "gf", "594"],
  ["French Polynesia (Polyn\xE9sie fran\xE7aise)", "pf", "689"],
  ["Gabon", "ga", "241"],
  ["Gambia", "gm", "220"],
  ["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)", "ge", "995"],
  ["Germany (Deutschland)", "de", "49"],
  ["Ghana (Gaana)", "gh", "233"],
  ["Gibraltar", "gi", "350"],
  ["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)", "gr", "30"],
  ["Greenland (Kalaallit Nunaat)", "gl", "299"],
  ["Grenada", "gd", "1", 14, ["473"]],
  ["Guadeloupe", "gp", "590", 0],
  ["Guam", "gu", "1", 15, ["671"]],
  ["Guatemala", "gt", "502"],
  ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
  ["Guinea (Guin\xE9e)", "gn", "224"],
  ["Guinea-Bissau (Guin\xE9 Bissau)", "gw", "245"],
  ["Guyana", "gy", "592"],
  ["Haiti", "ht", "509"],
  ["Honduras", "hn", "504"],
  ["Hong Kong (\u9999\u6E2F)", "hk", "852"],
  ["Hungary (Magyarorsz\xE1g)", "hu", "36"],
  ["Iceland (\xCDsland)", "is", "354"],
  ["India (\u092D\u093E\u0930\u0924)", "in", "91"],
  ["Indonesia", "id", "62"],
  ["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)", "ir", "98"],
  ["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)", "iq", "964"],
  ["Ireland", "ie", "353"],
  ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
  ["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)", "il", "972"],
  ["Italy (Italia)", "it", "39", 0],
  ["Jamaica", "jm", "1", 4, ["876", "658"]],
  ["Japan (\u65E5\u672C)", "jp", "81"],
  ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
  ["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)", "jo", "962"],
  ["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)", "kz", "7", 1, ["33", "7"]],
  ["Kenya", "ke", "254"],
  ["Kiribati", "ki", "686"],
  ["Kosovo", "xk", "383"],
  ["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)", "kw", "965"],
  ["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)", "kg", "996"],
  ["Laos (\u0EA5\u0EB2\u0EA7)", "la", "856"],
  ["Latvia (Latvija)", "lv", "371"],
  ["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)", "lb", "961"],
  ["Lesotho", "ls", "266"],
  ["Liberia", "lr", "231"],
  ["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)", "ly", "218"],
  ["Liechtenstein", "li", "423"],
  ["Lithuania (Lietuva)", "lt", "370"],
  ["Luxembourg", "lu", "352"],
  ["Macau (\u6FB3\u9580)", "mo", "853"],
  ["Madagascar (Madagasikara)", "mg", "261"],
  ["Malawi", "mw", "265"],
  ["Malaysia", "my", "60"],
  ["Maldives", "mv", "960"],
  ["Mali", "ml", "223"],
  ["Malta", "mt", "356"],
  ["Marshall Islands", "mh", "692"],
  ["Martinique", "mq", "596"],
  ["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)", "mr", "222"],
  ["Mauritius (Moris)", "mu", "230"],
  ["Mayotte", "yt", "262", 1, ["269", "639"]],
  ["Mexico (M\xE9xico)", "mx", "52"],
  ["Micronesia", "fm", "691"],
  ["Moldova (Republica Moldova)", "md", "373"],
  ["Monaco", "mc", "377"],
  ["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)", "mn", "976"],
  ["Montenegro (Crna Gora)", "me", "382"],
  ["Montserrat", "ms", "1", 16, ["664"]],
  ["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)", "ma", "212", 0],
  ["Mozambique (Mo\xE7ambique)", "mz", "258"],
  ["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)", "mm", "95"],
  ["Namibia (Namibi\xEB)", "na", "264"],
  ["Nauru", "nr", "674"],
  ["Nepal (\u0928\u0947\u092A\u093E\u0932)", "np", "977"],
  ["Netherlands (Nederland)", "nl", "31"],
  ["New Caledonia (Nouvelle-Cal\xE9donie)", "nc", "687"],
  ["New Zealand", "nz", "64"],
  ["Nicaragua", "ni", "505"],
  ["Niger (Nijar)", "ne", "227"],
  ["Nigeria", "ng", "234"],
  ["Niue", "nu", "683"],
  ["Norfolk Island", "nf", "672"],
  ["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)", "kp", "850"],
  ["North Macedonia (\u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)", "mk", "389"],
  ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
  ["Norway (Norge)", "no", "47", 0],
  ["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)", "om", "968"],
  ["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)", "pk", "92"],
  ["Palau", "pw", "680"],
  ["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)", "ps", "970"],
  ["Panama (Panam\xE1)", "pa", "507"],
  ["Papua New Guinea", "pg", "675"],
  ["Paraguay", "py", "595"],
  ["Peru (Per\xFA)", "pe", "51"],
  ["Philippines", "ph", "63"],
  ["Poland (Polska)", "pl", "48"],
  ["Portugal", "pt", "351"],
  ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
  ["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)", "qa", "974"],
  ["R\xE9union (La R\xE9union)", "re", "262", 0],
  ["Romania (Rom\xE2nia)", "ro", "40"],
  ["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)", "ru", "7", 0],
  ["Rwanda", "rw", "250"],
  ["Saint Barth\xE9lemy", "bl", "590", 1],
  ["Saint Helena", "sh", "290"],
  ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
  ["Saint Lucia", "lc", "1", 19, ["758"]],
  ["Saint Martin (Saint-Martin (partie fran\xE7aise))", "mf", "590", 2],
  ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
  ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
  ["Samoa", "ws", "685"],
  ["San Marino", "sm", "378"],
  ["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)", "st", "239"],
  ["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)", "sa", "966"],
  ["Senegal (S\xE9n\xE9gal)", "sn", "221"],
  ["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)", "rs", "381"],
  ["Seychelles", "sc", "248"],
  ["Sierra Leone", "sl", "232"],
  ["Singapore", "sg", "65"],
  ["Sint Maarten", "sx", "1", 21, ["721"]],
  ["Slovakia (Slovensko)", "sk", "421"],
  ["Slovenia (Slovenija)", "si", "386"],
  ["Solomon Islands", "sb", "677"],
  ["Somalia (Soomaaliya)", "so", "252"],
  ["South Africa", "za", "27"],
  ["South Korea (\uB300\uD55C\uBBFC\uAD6D)", "kr", "82"],
  ["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)", "ss", "211"],
  ["Spain (Espa\xF1a)", "es", "34"],
  ["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)", "lk", "94"],
  ["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)", "sd", "249"],
  ["Suriname", "sr", "597"],
  ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
  ["Sweden (Sverige)", "se", "46"],
  ["Switzerland (Schweiz)", "ch", "41"],
  ["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)", "sy", "963"],
  ["Taiwan (\u53F0\u7063)", "tw", "886"],
  ["Tajikistan", "tj", "992"],
  ["Tanzania", "tz", "255"],
  ["Thailand (\u0E44\u0E17\u0E22)", "th", "66"],
  ["Timor-Leste", "tl", "670"],
  ["Togo", "tg", "228"],
  ["Tokelau", "tk", "690"],
  ["Tonga", "to", "676"],
  ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
  ["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)", "tn", "216"],
  ["Turkey (T\xFCrkiye)", "tr", "90"],
  ["Turkmenistan", "tm", "993"],
  ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
  ["Tuvalu", "tv", "688"],
  ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
  ["Uganda", "ug", "256"],
  ["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)", "ua", "380"],
  ["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)", "ae", "971"],
  ["United Kingdom", "gb", "44", 0],
  ["United States", "us", "1", 0],
  ["Uruguay", "uy", "598"],
  ["Uzbekistan (O\u02BBzbekiston)", "uz", "998"],
  ["Vanuatu", "vu", "678"],
  ["Vatican City (Citt\xE0 del Vaticano)", "va", "39", 1, ["06698"]],
  ["Venezuela", "ve", "58"],
  ["Vietnam (Vi\u1EC7t Nam)", "vn", "84"],
  ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
  ["Western Sahara (\u202B\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629\u202C\u200E)", "eh", "212", 1, ["5288", "5289"]],
  ["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)", "ye", "967"],
  ["Zambia", "zm", "260"],
  ["Zimbabwe", "zw", "263"],
  ["\xC5land Islands", "ax", "358", 1, ["18"]]
].map((c) => {
  return {
    name: c[0].toString(),
    code: c[1].toString().toUpperCase()
  };
});

// ../packages/input/src/input-format/phone/phone.css
var phone_default = "button.flag {\n  width: 22px;\n  height: 15px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  display: inline-block;\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  z-index: 9;\n  cursor: pointer;\n  background-image: url(data:image/png;base64,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);\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n.flag-ad {\n  background-position: 0 0.413223%;\n}\n.flag-ae {\n  background-position: 0 0.826446%;\n}\n.flag-af {\n  background-position: 0 1.239669%;\n}\n.flag-ag {\n  background-position: 0 1.652893%;\n}\n.flag-ai {\n  background-position: 0 2.066116%;\n}\n.flag-al {\n  background-position: 0 2.479339%;\n}\n.flag-am {\n  background-position: 0 2.892562%;\n}\n.flag-an {\n  background-position: 0 3.305785%;\n}\n.flag-ao {\n  background-position: 0 3.719008%;\n}\n.flag-aq {\n  background-position: 0 4.132231%;\n}\n.flag-ar {\n  background-position: 0 4.545455%;\n}\n.flag-as {\n  background-position: 0 4.958678%;\n}\n.flag-at {\n  background-position: 0 5.371901%;\n}\n.flag-au {\n  background-position: 0 5.785124%;\n}\n.flag-aw {\n  background-position: 0 6.198347%;\n}\n.flag-az {\n  background-position: 0 6.61157%;\n}\n.flag-ba {\n  background-position: 0 7.024793%;\n}\n.flag-bb {\n  background-position: 0 7.438017%;\n}\n.flag-bd {\n  background-position: 0 7.85124%;\n}\n.flag-be {\n  background-position: 0 8.264463%;\n}\n.flag-bf {\n  background-position: 0 8.677686%;\n}\n.flag-bg {\n  background-position: 0 9.090909%;\n}\n.flag-bh {\n  background-position: 0 9.504132%;\n}\n.flag-bi {\n  background-position: 0 9.917355%;\n}\n.flag-bj {\n  background-position: 0 10.330579%;\n}\n.flag-bm {\n  background-position: 0 10.743802%;\n}\n.flag-bn {\n  background-position: 0 11.157025%;\n}\n.flag-bo {\n  background-position: 0 11.570248%;\n}\n.flag-br {\n  background-position: 0 11.983471%;\n}\n.flag-bs {\n  background-position: 0 12.396694%;\n}\n.flag-bt {\n  background-position: 0 12.809917%;\n}\n.flag-bv {\n  background-position: 0 13.22314%;\n}\n.flag-bw {\n  background-position: 0 13.636364%;\n}\n.flag-by {\n  background-position: 0 14.049587%;\n}\n.flag-bz {\n  background-position: 0 14.46281%;\n}\n.flag-ca {\n  background-position: 0 14.876033%;\n}\n.flag-cc {\n  background-position: 0 15.289256%;\n}\n.flag-cd {\n  background-position: 0 15.702479%;\n}\n.flag-cf {\n  background-position: 0 16.115702%;\n}\n.flag-cg {\n  background-position: 0 16.528926%;\n}\n.flag-ch {\n  background-position: 0 16.942149%;\n}\n.flag-ci {\n  background-position: 0 17.355372%;\n}\n.flag-ck {\n  background-position: 0 17.768595%;\n}\n.flag-cl {\n  background-position: 0 18.181818%;\n}\n.flag-cm {\n  background-position: 0 18.595041%;\n}\n.flag-cn {\n  background-position: 0 19.008264%;\n}\n.flag-co {\n  background-position: 0 19.421488%;\n}\n.flag-cr {\n  background-position: 0 19.834711%;\n}\n.flag-cu {\n  background-position: 0 20.247934%;\n}\n.flag-cv {\n  background-position: 0 20.661157%;\n}\n.flag-cx {\n  background-position: 0 21.07438%;\n}\n.flag-cy {\n  background-position: 0 21.487603%;\n}\n.flag-cz {\n  background-position: 0 21.900826%;\n}\n.flag-de {\n  background-position: 0 22.31405%;\n}\n.flag-dj {\n  background-position: 0 22.727273%;\n}\n.flag-dk {\n  background-position: 0 23.140496%;\n}\n.flag-dm {\n  background-position: 0 23.553719%;\n}\n.flag-do {\n  background-position: 0 23.966942%;\n}\n.flag-dz {\n  background-position: 0 24.380165%;\n}\n.flag-ec {\n  background-position: 0 24.793388%;\n}\n.flag-ee {\n  background-position: 0 25.206612%;\n}\n.flag-eg {\n  background-position: 0 25.619835%;\n}\n.flag-eh {\n  background-position: 0 26.033058%;\n}\n.flag-er {\n  background-position: 0 26.446281%;\n}\n.flag-es {\n  background-position: 0 26.859504%;\n}\n.flag-et {\n  background-position: 0 27.272727%;\n}\n.flag-fi {\n  background-position: 0 27.68595%;\n}\n.flag-fj {\n  background-position: 0 28.099174%;\n}\n.flag-fk {\n  background-position: 0 28.512397%;\n}\n.flag-fm {\n  background-position: 0 28.92562%;\n}\n.flag-fo {\n  background-position: 0 29.338843%;\n}\n.flag-fr {\n  background-position: 0 29.752066%;\n}\n.flag-ga {\n  background-position: 0 30.165289%;\n}\n.flag-gd {\n  background-position: 0 30.578512%;\n}\n.flag-ge {\n  background-position: 0 30.991736%;\n}\n.flag-gf {\n  background-position: 0 31.404959%;\n}\n.flag-gh {\n  background-position: 0 31.818182%;\n}\n.flag-gi {\n  background-position: 0 32.231405%;\n}\n.flag-gl {\n  background-position: 0 32.644628%;\n}\n.flag-gm {\n  background-position: 0 33.057851%;\n}\n.flag-gn {\n  background-position: 0 33.471074%;\n}\n.flag-gp {\n  background-position: 0 33.884298%;\n}\n.flag-gq {\n  background-position: 0 34.297521%;\n}\n.flag-gr {\n  background-position: 0 34.710744%;\n}\n.flag-gs {\n  background-position: 0 35.123967%;\n}\n.flag-gt {\n  background-position: 0 35.53719%;\n}\n.flag-gu {\n  background-position: 0 35.950413%;\n}\n.flag-gw {\n  background-position: 0 36.363636%;\n}\n.flag-gy {\n  background-position: 0 36.77686%;\n}\n.flag-hk {\n  background-position: 0 37.190083%;\n}\n.flag-hm {\n  background-position: 0 37.603306%;\n}\n.flag-hn {\n  background-position: 0 38.016529%;\n}\n.flag-hr {\n  background-position: 0 38.429752%;\n}\n.flag-ht {\n  background-position: 0 38.842975%;\n}\n.flag-hu {\n  background-position: 0 39.256198%;\n}\n.flag-id {\n  background-position: 0 39.669421%;\n}\n.flag-ie {\n  background-position: 0 40.082645%;\n}\n.flag-il {\n  background-position: 0 40.495868%;\n}\n.flag-in {\n  background-position: 0 40.909091%;\n}\n.flag-io {\n  background-position: 0 41.322314%;\n}\n.flag-iq {\n  background-position: 0 41.735537%;\n}\n.flag-ir {\n  background-position: 0 42.14876%;\n}\n.flag-is {\n  background-position: 0 42.561983%;\n}\n.flag-it {\n  background-position: 0 42.975207%;\n}\n.flag-jm {\n  background-position: 0 43.38843%;\n}\n.flag-jo {\n  background-position: 0 43.801653%;\n}\n.flag-jp {\n  background-position: 0 44.214876%;\n}\n.flag-ke {\n  background-position: 0 44.628099%;\n}\n.flag-kg {\n  background-position: 0 45.041322%;\n}\n.flag-kh {\n  background-position: 0 45.454545%;\n}\n.flag-ki {\n  background-position: 0 45.867769%;\n}\n.flag-km {\n  background-position: 0 46.280992%;\n}\n.flag-kn {\n  background-position: 0 46.694215%;\n}\n.flag-kp {\n  background-position: 0 47.107438%;\n}\n.flag-kr {\n  background-position: 0 47.520661%;\n}\n.flag-kw {\n  background-position: 0 47.933884%;\n}\n.flag-ky {\n  background-position: 0 48.347107%;\n}\n.flag-kz {\n  background-position: 0 48.760331%;\n}\n.flag-la {\n  background-position: 0 49.173554%;\n}\n.flag-lb {\n  background-position: 0 49.586777%;\n}\n.flag-lc {\n  background-position: 0 50%;\n}\n.flag-li {\n  background-position: 0 50.413223%;\n}\n.flag-lk {\n  background-position: 0 50.826446%;\n}\n.flag-lr {\n  background-position: 0 51.239669%;\n}\n.flag-ls {\n  background-position: 0 51.652893%;\n}\n.flag-lt {\n  background-position: 0 52.066116%;\n}\n.flag-lu {\n  background-position: 0 52.479339%;\n}\n.flag-lv {\n  background-position: 0 52.892562%;\n}\n.flag-ly {\n  background-position: 0 53.305785%;\n}\n.flag-ma {\n  background-position: 0 53.719008%;\n}\n.flag-mc {\n  background-position: 0 54.132231%;\n}\n.flag-md {\n  background-position: 0 54.545455%;\n}\n.flag-me {\n  background-position: 0 54.958678%;\n}\n.flag-mg {\n  background-position: 0 55.371901%;\n}\n.flag-mh {\n  background-position: 0 55.785124%;\n}\n.flag-mk {\n  background-position: 0 56.198347%;\n}\n.flag-ml {\n  background-position: 0 56.61157%;\n}\n.flag-mm {\n  background-position: 0 57.024793%;\n}\n.flag-mn {\n  background-position: 0 57.438017%;\n}\n.flag-mo {\n  background-position: 0 57.85124%;\n}\n.flag-mp {\n  background-position: 0 58.264463%;\n}\n.flag-mq {\n  background-position: 0 58.677686%;\n}\n.flag-mr {\n  background-position: 0 59.090909%;\n}\n.flag-ms {\n  background-position: 0 59.504132%;\n}\n.flag-mt {\n  background-position: 0 59.917355%;\n}\n.flag-mu {\n  background-position: 0 60.330579%;\n}\n.flag-mv {\n  background-position: 0 60.743802%;\n}\n.flag-mw {\n  background-position: 0 61.157025%;\n}\n.flag-mx {\n  background-position: 0 61.570248%;\n}\n.flag-my {\n  background-position: 0 61.983471%;\n}\n.flag-mz {\n  background-position: 0 62.396694%;\n}\n.flag-na {\n  background-position: 0 62.809917%;\n}\n.flag-nc {\n  background-position: 0 63.22314%;\n}\n.flag-ne {\n  background-position: 0 63.636364%;\n}\n.flag-nf {\n  background-position: 0 64.049587%;\n}\n.flag-ng {\n  background-position: 0 64.46281%;\n}\n.flag-ni {\n  background-position: 0 64.876033%;\n}\n.flag-nl {\n  background-position: 0 65.289256%;\n}\n.flag-no {\n  background-position: 0 65.702479%;\n}\n.flag-np {\n  background-position: 0 66.115702%;\n}\n.flag-nr {\n  background-position: 0 66.528926%;\n}\n.flag-nu {\n  background-position: 0 66.942149%;\n}\n.flag-nz {\n  background-position: 0 67.355372%;\n}\n.flag-om {\n  background-position: 0 67.768595%;\n}\n.flag-pa {\n  background-position: 0 68.181818%;\n}\n.flag-pe {\n  background-position: 0 68.595041%;\n}\n.flag-pf {\n  background-position: 0 69.008264%;\n}\n.flag-pg {\n  background-position: 0 69.421488%;\n}\n.flag-ph {\n  background-position: 0 69.834711%;\n}\n.flag-pk {\n  background-position: 0 70.247934%;\n}\n.flag-pl {\n  background-position: 0 70.661157%;\n}\n.flag-pm {\n  background-position: 0 71.07438%;\n}\n.flag-pn {\n  background-position: 0 71.487603%;\n}\n.flag-pr {\n  background-position: 0 71.900826%;\n}\n.flag-pt {\n  background-position: 0 72.31405%;\n}\n.flag-pw {\n  background-position: 0 72.727273%;\n}\n.flag-py {\n  background-position: 0 73.140496%;\n}\n.flag-qa {\n  background-position: 0 73.553719%;\n}\n.flag-re {\n  background-position: 0 73.966942%;\n}\n.flag-ro {\n  background-position: 0 74.380165%;\n}\n.flag-rs {\n  background-position: 0 74.793388%;\n}\n.flag-ru {\n  background-position: 0 75.206612%;\n}\n.flag-rw {\n  background-position: 0 75.619835%;\n}\n.flag-sa {\n  background-position: 0 76.033058%;\n}\n.flag-sb {\n  background-position: 0 76.446281%;\n}\n.flag-sc {\n  background-position: 0 76.859504%;\n}\n.flag-sd {\n  background-position: 0 77.272727%;\n}\n.flag-se {\n  background-position: 0 77.68595%;\n}\n.flag-sg {\n  background-position: 0 78.099174%;\n}\n.flag-sh {\n  background-position: 0 78.512397%;\n}\n.flag-si {\n  background-position: 0 78.92562%;\n}\n.flag-sj {\n  background-position: 0 79.338843%;\n}\n.flag-sk {\n  background-position: 0 79.752066%;\n}\n.flag-sl {\n  background-position: 0 80.165289%;\n}\n.flag-sm {\n  background-position: 0 80.578512%;\n}\n.flag-sn {\n  background-position: 0 80.991736%;\n}\n.flag-so {\n  background-position: 0 81.404959%;\n}\n.flag-sr {\n  background-position: 0 81.818182%;\n}\n.flag-ss {\n  background-position: 0 82.231405%;\n}\n.flag-st {\n  background-position: 0 82.644628%;\n}\n.flag-sv {\n  background-position: 0 83.057851%;\n}\n.flag-sy {\n  background-position: 0 83.471074%;\n}\n.flag-sz {\n  background-position: 0 83.884298%;\n}\n.flag-tc {\n  background-position: 0 84.297521%;\n}\n.flag-td {\n  background-position: 0 84.710744%;\n}\n.flag-tf {\n  background-position: 0 85.123967%;\n}\n.flag-tg {\n  background-position: 0 85.53719%;\n}\n.flag-th {\n  background-position: 0 85.950413%;\n}\n.flag-tj {\n  background-position: 0 86.363636%;\n}\n.flag-tk {\n  background-position: 0 86.77686%;\n}\n.flag-tl {\n  background-position: 0 87.190083%;\n}\n.flag-tm {\n  background-position: 0 87.603306%;\n}\n.flag-tn {\n  background-position: 0 88.016529%;\n}\n.flag-to {\n  background-position: 0 88.429752%;\n}\n.flag-tp {\n  background-position: 0 88.842975%;\n}\n.flag-tr {\n  background-position: 0 89.256198%;\n}\n.flag-tt {\n  background-position: 0 89.669421%;\n}\n.flag-tv {\n  background-position: 0 90.082645%;\n}\n.flag-tw {\n  background-position: 0 90.495868%;\n}\n.flag-ty {\n  background-position: 0 90.909091%;\n}\n.flag-tz {\n  background-position: 0 91.322314%;\n}\n.flag-ua {\n  background-position: 0 91.735537%;\n}\n.flag-ug {\n  background-position: 0 92.14876%;\n}\n.flag-gb,\n.flag-uk {\n  background-position: 0 92.561983%;\n}\n.flag-um {\n  background-position: 0 92.975207%;\n}\n.flag-us {\n  background-position: 0 93.38843%;\n}\n.flag-uy {\n  background-position: 0 93.801653%;\n}\n.flag-uz {\n  background-position: 0 94.214876%;\n}\n.flag-va {\n  background-position: 0 94.628099%;\n}\n.flag-vc {\n  background-position: 0 95.041322%;\n}\n.flag-ve {\n  background-position: 0 95.454545%;\n}\n.flag-vg {\n  background-position: 0 95.867769%;\n}\n.flag-vi {\n  background-position: 0 96.280992%;\n}\n.flag-vn {\n  background-position: 0 96.694215%;\n}\n.flag-vu {\n  background-position: 0 97.107438%;\n}\n.flag-wf {\n  background-position: 0 97.520661%;\n}\n.flag-ws {\n  background-position: 0 97.933884%;\n}\n.flag-ye {\n  background-position: 0 98.347107%;\n}\n.flag-za {\n  background-position: 0 98.760331%;\n}\n.flag-zm {\n  background-position: 0 99.173554%;\n}\n.flag-zr {\n  background-position: 0 99.586777%;\n}\n.flag-zw {\n  background-position: 0 100%;\n}\n";

// ../packages/input/src/input-format/phone/phone-dropdown.css
var phone_dropdown_default = ":host {\n  display: none;\n  visibility: hidden;\n  margin: 0;\n  padding: 0;\n}\n:host([open]) {\n  display: block;\n  visibility: visible;\n}\n.phone-dropdown {\n  position: absolute;\n  left: auto;\n  left: initial;\n  left: var(--phone-dropdown-left, unset);\n  top: auto;\n  top: initial;\n  top: var(--phone-dropdown-top, unset);\n  height: 190px;\n  min-width: 150px;\n  min-width: var(--phone-dropdown-width, 150px);\n  margin: 0 !important;\n  -webkit-box-shadow: var(--pggm-tooltip-box-shadow);\n  box-shadow: var(--pggm-tooltip-box-shadow);\n  color: var(--pggm-tooltip-color);\n  background-color: var(--pggm-tooltip-background-color);\n  border: 0 !important;\n  border-radius: var(--pggm-tooltip-border-radius);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  overflow-y: auto;\n}\n.phone-dropdown-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.phone-dropdown-list li {\n  padding: 0;\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.phone-dropdown-list li button {\n  color: var(--pggm-form-control-color);\n  font-family: var(--pggm-document-font-family);\n  font-weight: var(--pggm-document-font-weight);\n  line-height: var(--pggm-document-line-height);\n  font-size: var(--pggm-document-font-size);\n  cursor: pointer;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 1em;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 0;\n  background-color: transparent;\n  padding: 0;\n  flex: 1;\n  padding: .8em .5em;\n  margin: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  border-radius: var(--pggm-focus-border-radius);\n}\n.phone-dropdown-list li button:focus {\n  outline: var(--pggm-focus-outline-width) solid blue;\n  outline: var(--pggm-focus-outline-width) var(--pggm-focus-outline-style, solid) var(--pggm-focus-outline-color, blue);\n  outline-offset: 0;\n}\n[popover].\\:popover-open {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 90000;\n}\n";

// ../packages/input/src/input-format/phone/phone-dropdown.tsx
var csvConverter = {
  fromAttribute: (value) => {
    if (!value) {
      return [];
    }
    return value.split(",").map((v) => v.trim()).filter((v) => v);
  },
  toAttribute: (value) => {
    if (!value || !value.join) {
      return "";
    }
    return value.join(", ");
  }
};
var _queryTimer, _query, _focusGroupController5;
var PGGMPhoneDropdown = class extends CustomElement {
  constructor() {
    super();
    __privateAdd(this, _queryTimer);
    __privateAdd(this, _query, "");
    this.topCountries = [];
    this.searchForCountry = (query) => {
      for (let i = 0; i < this.countries.length; i++) {
        if (this.countries[i].name.toLowerCase().startsWith(query)) {
          const btn = this.shadowRoot.querySelector(
            `button[data-country="${this.countries[i].code}"]`
          );
          if (btn) {
            __privateGet(this, _focusGroupController5).focusElement(btn);
          }
          break;
        }
      }
    };
    __privateAdd(this, _focusGroupController5);
    __privateSet(this, _focusGroupController5, new FocusGroupController(this, {
      elements: () => this.items,
      direction: "vertical",
      isFocusableElement: () => true
    }));
  }
  get items() {
    return Array.from(this.shadowRoot.querySelectorAll("button")) || [];
  }
  get countries() {
    const topCountries = [];
    this.topCountries.forEach((countryCode) => {
      const country = allCountries.find(
        (country2) => country2.code === countryCode.toUpperCase()
      );
      if (country) {
        topCountries.push(country);
      }
    });
    return topCountries.concat(allCountries);
  }
  show() {
    this.setAttribute("open", "");
    const wait = new Promise((resolve) => {
      const waitForElement = () => {
        const dropdown = this.shadowRoot && this.shadowRoot.querySelector(".phone-dropdown");
        if (dropdown) {
          resolve(dropdown);
        }
        setTimeout(waitForElement, 30);
      };
      waitForElement();
    });
    wait.then((dropdown) => {
      __privateGet(this, _focusGroupController5).updateElements();
      dropdown.showPopover();
      requestAnimationFrame(() => {
        dropdown.style.setProperty(
          "--phone-dropdown-width",
          this.phoneFormat.inputElement.clientWidth + "px"
        );
        requestAnimationFrame(() => {
          computePosition2(this.phoneFormat.inputElement, dropdown, {
            placement: "bottom-start",
            strategy: "absolute",
            middleware: [flip2()]
          }).then(({ x, y }) => {
            dropdown.style.setProperty("--phone-dropdown-left", x + "px");
            dropdown.style.setProperty("--phone-dropdown-top", y + "px");
            const btn = this.shadowRoot.querySelector("button");
            __privateGet(this, _focusGroupController5).focusElement(btn);
          });
        });
      });
    });
  }
  hide() {
    this.removeAttribute("open");
    this.phoneDropdownElement.hidePopover();
  }
  render() {
    return /* @__PURE__ */ Maquette.h("div", { class: "phone-dropdown", popover: "auto", on: {
      toggle: (e) => {
        if (e.newState === "open") {
          this.setAttribute("open", "");
        } else {
          this.removeAttribute("open");
        }
      },
      keydown: (e) => {
        if (/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
          if (__privateGet(this, _queryTimer)) {
            clearTimeout(__privateGet(this, _queryTimer));
          }
          __privateSet(this, _query, __privateGet(this, _query) + e.key.toLowerCase());
          this.searchForCountry(__privateGet(this, _query));
          __privateSet(this, _queryTimer, setTimeout(() => {
            __privateSet(this, _query, "");
          }, 1e3));
        }
      }
    } }, /* @__PURE__ */ Maquette.h("ul", { class: "phone-dropdown-list" }, this.countries.map((country, idx) => {
      return /* @__PURE__ */ Maquette.h("li", { key: idx.toString() }, /* @__PURE__ */ Maquette.h("button", { "data-country": country.code, onclick: () => {
        this.phoneFormat.selectedCountry = country.code;
        this.phoneFormat.inputElement.focus();
      } }, /* @__PURE__ */ Maquette.h("span", { class: "flag" }), /* @__PURE__ */ Maquette.h("span", { class: "country-name" }, country.name)));
    })));
  }
  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0;
    this.addEventListener("focus", () => {
      requestAnimationFrame(() => {
        var _a4, _b;
        (_b = (_a4 = this.shadowRoot) == null ? void 0 : _a4.querySelector("button")) == null ? void 0 : _b.focus();
      });
    });
    this.addEventListener("blur", () => {
      this.phoneFormat.inputElement.focus();
      requestAnimationFrame(() => {
        this.hide();
      });
    });
  }
};
_queryTimer = new WeakMap();
_query = new WeakMap();
_focusGroupController5 = new WeakMap();
PGGMPhoneDropdown.style = phone_dropdown_default;
__decorateClass([
  Query(".phone-dropdown")
], PGGMPhoneDropdown.prototype, "phoneDropdownElement", 2);
__decorateClass([
  Property({ type: "object", attribute: "top-countries", converter: csvConverter })
], PGGMPhoneDropdown.prototype, "topCountries", 2);
PGGMPhoneDropdown = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-phone-dropdown"
  })
], PGGMPhoneDropdown);

// ../packages/input/src/input-format/phone/phone.ts
customElements.whenDefined("pggm-input-phone").then(() => {
  customElements.get("pggm-input-phone").parsePhoneNumber = parsePhoneNumber;
});
var _disabled2, _dropdown, _flagElement, _initialCountry, _phoneNumberType, _required2, _selectedCountry, _topCountries, _countryLabel, _PhoneFormat_instances, createFlagElement_fn, updatePlaceholder_fn, addEventListeners_fn2, removeEventListeners_fn, checkValidity_fn3, showDropdown_fn, hideDropdown_fn, _onBlur4, _onChange, _onKeydown2;
var PhoneFormat = class extends InputFormat {
  constructor(customInput) {
    super(customInput);
    __privateAdd(this, _PhoneFormat_instances);
    __privateAdd(this, _disabled2, false);
    __privateAdd(this, _dropdown);
    __privateAdd(this, _flagElement);
    __privateAdd(this, _initialCountry, "NL");
    __privateAdd(this, _phoneNumberType, "any");
    __privateAdd(this, _required2, false);
    __privateAdd(this, _selectedCountry, "NL");
    __privateAdd(this, _topCountries, "");
    __privateAdd(this, _countryLabel);
    __privateAdd(this, _onBlur4, (e) => {
      this.value = this.inputElement.value;
      __privateMethod(this, _PhoneFormat_instances, checkValidity_fn3).call(this);
    });
    __privateAdd(this, _onChange, (e) => {
      if (this.inputElement.value === "") {
        __privateMethod(this, _PhoneFormat_instances, checkValidity_fn3).call(this);
        return;
      }
      let p = parsePhoneNumber(this.inputElement.value);
      if (p.regionCode) {
        this.selectedCountry = p.regionCode;
        this.inputElement.value = p.number.national;
        this.internals.setFormValue(p.number.e164 || this.inputElement.value);
        __privateMethod(this, _PhoneFormat_instances, checkValidity_fn3).call(this);
        return;
      }
      p = parsePhoneNumber(this.inputElement.value, {
        regionCode: this.selectedCountry.toUpperCase()
      });
      this.selectedCountry = p.regionCode;
      this.inputElement.value = p.number.national ? p.number.national : this.inputElement.value;
      this.value = p.number.e164 || this.inputElement.value;
      this.internals.setFormValue(this.value);
      __privateMethod(this, _PhoneFormat_instances, checkValidity_fn3).call(this);
    });
    __privateAdd(this, _onKeydown2, (e) => {
      if (this.inputElement.readOnly || this.inputElement.disabled) {
        return;
      }
      const result = /\d/.test(e.key);
      if (e.ctrlKey || e.metaKey) {
        return;
      }
      if (e.key === "ArrowDown") {
        __privateMethod(this, _PhoneFormat_instances, showDropdown_fn).call(this);
        return;
      }
      if (e.key === "ArrowUp") {
        __privateMethod(this, _PhoneFormat_instances, hideDropdown_fn).call(this);
        return;
      }
      const allwKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
        "Shift",
        "Escape",
        "Home",
        "End",
        " ",
        "+",
        "(",
        ")",
        "-"
      ];
      if (allwKeys.indexOf(e.key) > -1) {
        return;
      }
      if (e.key === "Enter") {
        this.value = this.inputElement.value;
        __privateMethod(this, _PhoneFormat_instances, checkValidity_fn3).call(this);
        if (this.internals.form && this.internals.form.checkValidity()) {
          this.internals.form.dispatchEvent(new Event("submit", { cancelable: true }));
        } else if (this.internals.form && !this.internals.form.checkValidity()) {
          this.internals.form.reportValidity();
        }
        return;
      }
      if (!result) {
        e.preventDefault();
      }
    });
    customInput;
    this.inputElement = customInput.inputElement;
    this.internals = customInput.internals;
    this.inputElement.type = "text";
    this.inputElement.setAttribute("inputmode", "tel");
  }
  get readonly() {
    return this.inputElement.readOnly;
  }
  set readonly(value) {
    if (typeof value === "string") {
      value = true;
    }
    this.inputElement.readOnly = value;
  }
  get required() {
    return __privateGet(this, _required2);
  }
  set required(value) {
    if (__privateGet(this, _required2) !== value) {
      __privateSet(this, _required2, typeof value === "string");
    }
    __privateMethod(this, _PhoneFormat_instances, checkValidity_fn3).call(this);
  }
  get disabled() {
    return __privateGet(this, _disabled2);
  }
  set disabled(value) {
    if (typeof value === "string") {
      value = true;
    }
    __privateSet(this, _disabled2, value);
    this.inputElement.disabled = value;
    this.internals.setFormValue(null);
    __privateMethod(this, _PhoneFormat_instances, checkValidity_fn3).call(this);
  }
  get topCountries() {
    return __privateGet(this, _topCountries);
  }
  set topCountries(value) {
    var _a4;
    __privateSet(this, _topCountries, value);
    (_a4 = __privateGet(this, _dropdown)) == null ? void 0 : _a4.setAttribute("top-countries", value);
  }
  get initialCountry() {
    return __privateGet(this, _initialCountry);
  }
  set initialCountry(value) {
    if (__privateGet(this, _initialCountry) !== value) {
      __privateSet(this, _initialCountry, value);
    }
    if (!this.value || this.value === "") {
      this.selectedCountry = value;
    }
  }
  get selectedCountry() {
    return __privateGet(this, _selectedCountry) || __privateGet(this, _initialCountry) || "NL";
  }
  set selectedCountry(value) {
    if (this.selectedCountry !== value) {
      __privateSet(this, _selectedCountry, value);
      __privateMethod(this, _PhoneFormat_instances, updatePlaceholder_fn).call(this);
      if (!__privateGet(this, _flagElement)) {
        __privateMethod(this, _PhoneFormat_instances, createFlagElement_fn).call(this);
      }
      __privateGet(this, _flagElement).setAttribute("class", "flag flag-" + this.selectedCountry.toLowerCase());
      __privateGet(this, _flagElement).title = allCountries.find((c) => c.code === this.selectedCountry).name;
    }
  }
  get phoneNumberType() {
    return __privateGet(this, _phoneNumberType);
  }
  set phoneNumberType(value) {
    if (!value) {
      value = "any";
    }
    const posibleValues = ["fixed-line", "fixed-line-or-mobile", "mobile", "any"];
    if (posibleValues.indexOf(value) === -1) {
      console.error(
        `Invalid value for phone-number-type attribute. Allowed values are ${posibleValues.join(", ")}`
      );
    }
    if (__privateGet(this, _phoneNumberType) !== value) {
      __privateSet(this, _phoneNumberType, value);
      __privateMethod(this, _PhoneFormat_instances, updatePlaceholder_fn).call(this);
      __privateMethod(this, _PhoneFormat_instances, checkValidity_fn3).call(this);
    }
  }
  get value() {
    var _a4;
    const parsed = parsePhoneNumber(this.inputElement.value, {
      regionCode: this.selectedCountry.toUpperCase()
    });
    return ((_a4 = parsed.number) == null ? void 0 : _a4.e164) || this.inputElement.value;
  }
  set value(value) {
    var _a4, _b;
    if (!value) {
      value = "";
    }
    let parsed = parsePhoneNumber(value);
    if ((_a4 = parsed.number) == null ? void 0 : _a4.national) {
      this.inputElement.value = parsed.number.national;
    } else {
      this.inputElement.value = value;
    }
    if (parsed.regionCode) {
      this.selectedCountry = parsed.regionCode;
    }
    parsed = parsePhoneNumber(value, { regionCode: this.selectedCountry.toUpperCase() });
    const val = ((_b = parsed.number) == null ? void 0 : _b.e164) || value;
    this.internals.setFormValue(val);
    __privateMethod(this, _PhoneFormat_instances, checkValidity_fn3).call(this);
  }
  get countryLabel() {
    return __privateGet(this, _countryLabel) || "Select your country";
  }
  set countryLabel(value) {
    __privateSet(this, _countryLabel, value);
    if (__privateGet(this, _flagElement)) {
      __privateGet(this, _flagElement).title = value ? value : "";
    }
  }
  connected() {
    super.connected();
    if (__privateGet(this, _dropdown)) {
      this.customInput.shadowRoot.appendChild(__privateGet(this, _dropdown));
    }
    if (!__privateGet(this, _flagElement)) {
      __privateMethod(this, _PhoneFormat_instances, createFlagElement_fn).call(this);
    }
    __privateMethod(this, _PhoneFormat_instances, addEventListeners_fn2).call(this);
  }
  disconnected() {
    super.disconnected();
    if (__privateGet(this, _dropdown)) {
      __privateGet(this, _dropdown).remove();
    }
    __privateMethod(this, _PhoneFormat_instances, removeEventListeners_fn).call(this);
  }
};
_disabled2 = new WeakMap();
_dropdown = new WeakMap();
_flagElement = new WeakMap();
_initialCountry = new WeakMap();
_phoneNumberType = new WeakMap();
_required2 = new WeakMap();
_selectedCountry = new WeakMap();
_topCountries = new WeakMap();
_countryLabel = new WeakMap();
_PhoneFormat_instances = new WeakSet();
createFlagElement_fn = function() {
  this.inputElement.style.textIndent = "32px";
  __privateSet(this, _flagElement, document.createElement("button"));
  addStyleToShadowRoot(this.customInput.shadowRoot, phone_default, "pggm-input-phone-flag");
  __privateGet(this, _flagElement).setAttribute("class", "flag flag-" + this.selectedCountry.toLowerCase());
  __privateGet(this, _flagElement).title = this.countryLabel ? this.countryLabel : "";
  this.customInput.shadowRoot.prepend(__privateGet(this, _flagElement), this.inputElement);
  __privateGet(this, _flagElement).addEventListener("click", () => {
    __privateMethod(this, _PhoneFormat_instances, showDropdown_fn).call(this);
  });
};
updatePlaceholder_fn = function() {
  let type = this.phoneNumberType;
  if (type === "any") {
    type = "fixed-line-or-mobile";
  }
  if (!__privateGet(this, _selectedCountry) || __privateGet(this, _selectedCountry).length < 2) {
    return;
  }
  this.inputElement.placeholder = getExample(
    this.selectedCountry,
    type
  ).number.national;
};
addEventListeners_fn2 = function() {
  this.inputElement.addEventListener("keydown", __privateGet(this, _onKeydown2));
  this.inputElement.addEventListener("blur", __privateGet(this, _onBlur4));
  this.inputElement.addEventListener("change", __privateGet(this, _onChange));
};
removeEventListeners_fn = function() {
  this.inputElement.removeEventListener("keydown", __privateGet(this, _onKeydown2));
  this.inputElement.removeEventListener("blur", __privateGet(this, _onBlur4));
  this.inputElement.removeEventListener("change", __privateGet(this, _onChange));
};
checkValidity_fn3 = function() {
  const setValid = () => {
    this.internals.setValidity({});
    this.internals.setFormValue(this.value);
    if (this.internals.states.has("--invalid")) {
      this.internals.states.delete("--invalid");
    }
  };
  if (this.disabled) {
    setValid();
    return;
  }
  if (!this.required && this.inputElement.value.length < 1) {
    setValid();
    return;
  }
  if (this.required && this.inputElement.value.length < 1) {
    this.internals.setValidity(
      { valueMissing: true },
      "Phone number is required",
      this.inputElement
    );
    this.internals.states.add("--invalid");
    return;
  }
  if (this.phoneNumberType === "any") {
    setValid();
    return;
  }
  const parsed = parsePhoneNumber(this.inputElement.value, {
    regionCode: this.selectedCountry.toUpperCase()
  });
  if (parsed.type && parsed.type === "mobile" && this.phoneNumberType === "mobile") {
    setValid();
    return;
  }
  if (parsed.type && parsed.type === "mobile" && this.phoneNumberType === "fixed-line-or-mobile") {
    setValid();
    return;
  }
  if (parsed.type && parsed.type === "fixed-line" && this.phoneNumberType === "fixed-line") {
    setValid();
    return;
  }
  if (parsed.type && parsed.type === "fixed-line" && this.phoneNumberType === "fixed-line-or-mobile") {
    setValid();
    return;
  }
  if (parsed.type && parsed.type === "fixed-line-or-mobile") {
    setValid();
    return;
  }
  this.internals.setValidity(
    { typeMismatch: true },
    "Invalid phone number type",
    this.inputElement
  );
  this.internals.states.add("--invalid");
};
showDropdown_fn = function() {
  if (!__privateGet(this, _dropdown)) {
    __privateSet(this, _dropdown, document.createElement("pggm-phone-dropdown"));
    __privateGet(this, _dropdown).phoneFormat = this;
    const shadowRoot = this.inputElement.getRootNode();
    shadowRoot.appendChild(__privateGet(this, _dropdown));
  }
  __privateGet(this, _dropdown).setAttribute("selected-country", this.selectedCountry);
  __privateGet(this, _dropdown).setAttribute("top-countries", this.topCountries);
  __privateGet(this, _dropdown).show();
};
hideDropdown_fn = function() {
  var _a4;
  (_a4 = __privateGet(this, _dropdown)) == null ? void 0 : _a4.hide();
};
_onBlur4 = new WeakMap();
_onChange = new WeakMap();
_onKeydown2 = new WeakMap();
PhoneFormat.attributes = [
  "initial-country",
  "top-countries",
  "phone-number-type",
  "required",
  "disabled",
  "country-label"
];

// ../packages/input/src/input-format/date/date-dropdown.css
var date_dropdown_default = "pggm-date-dropdown {\n  display: none;\n  visibility: hidden;\n}\npggm-date-dropdown[open] {\n  left: 0;\n  left: var(--date-dropdown-left, 0);\n  top: 0;\n  top: var(--date-dropdown-top, 0);\n  display: block;\n  visibility: visible;\n  position: absolute;\n  z-index: 9999;\n}\npggm-calendar {\n  -webkit-box-shadow: var(--pggm-tooltip-box-shadow);\n  box-shadow: var(--pggm-tooltip-box-shadow);\n  color: var(--pggm-tooltip-color);\n  background-color: var(--pggm-tooltip-background-color);\n  border: 0 !important;\n  border-radius: var(--pggm-tooltip-border-radius);\n}\n";

// ../packages/input/src/input-format/date/date-dropdown.tsx
var _calendarElement, _returnFocusElement, _calendarChange, _PGGMDateDropdown_instances, positionDropDown_fn, _onWindowClick, _onKeyDown3;
var PGGMDateDropdown = class extends CustomElement {
  constructor() {
    super();
    __privateAdd(this, _PGGMDateDropdown_instances);
    __privateAdd(this, _calendarElement);
    __privateAdd(this, _returnFocusElement, null);
    __privateAdd(this, _calendarChange, (e) => {
      if (this.dateFormat.period === true && !Array.isArray(e.detail.value)) {
        return;
      }
      if (this.dateFormat.period === true && Array.isArray(e.detail.value)) {
        this.dateFormat.value = e.detail.value.join(",");
      } else {
        this.dateFormat.value = e.detail.value;
      }
      this.dateFormat.inputElement.focus({ preventScroll: true });
      this.hide();
    });
    __privateAdd(this, _onWindowClick, (e) => {
      const clickInCalendar = e.composedPath().map((el) => el.nodeName).includes("PGGM-CALENDAR");
      if (!clickInCalendar) {
        this.hide();
      }
    });
    __privateAdd(this, _onKeyDown3, (e) => {
      if (e.key === "Escape") {
        this.hide();
      }
    });
    __privateSet(this, _calendarElement, Maquette.dom.create(/* @__PURE__ */ Maquette.h("pggm-calendar", null)).domNode);
    __privateGet(this, _calendarElement).addEventListener("calendarDateChange", __privateGet(this, _calendarChange));
    this.appendChild(__privateGet(this, _calendarElement));
  }
  connectedCallback() {
    super.connectedCallback();
    addStyleToShadowRoot(this.getRootNode(), date_dropdown_default, PGGMDateDropdown.TAG_NAME);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("click", __privateGet(this, _onWindowClick));
  }
  show(returnFocus) {
    __privateSet(this, _returnFocusElement, returnFocus);
    const isPeriod = this.dateFormat.period;
    if (isPeriod) {
      __privateGet(this, _calendarElement).setAttribute("type", "period");
      if (typeof this.dateFormat.value === "string") {
        const [start, end] = this.dateFormat.value.split(",");
        const isStartADate = customElements.get("pggm-calendar").parseDate(start);
        const isEndADate = customElements.get("pggm-calendar").parseDate(end);
        if (isStartADate && isEndADate) {
          __privateGet(this, _calendarElement).value = [start, end];
        }
      }
      this.setAttribute("open", "");
    } else {
      __privateGet(this, _calendarElement).setAttribute("type", "date");
      const isValueADate = customElements.get("pggm-calendar").parseDate(
        this.dateFormat.value
      );
      if (isValueADate) {
        __privateGet(this, _calendarElement).value = this.dateFormat.value;
      }
      this.setAttribute("open", "");
    }
    const displayDate = customElements.get("pggm-calendar").parseDate(this.dateFormat.value);
    __privateGet(this, _calendarElement).displayDate = displayDate || /* @__PURE__ */ new Date();
    if (this.dateFormat.lang) {
      __privateGet(this, _calendarElement).setAttribute("lang", this.dateFormat.lang);
    } else {
      this.removeAttribute("lang");
    }
    __privateGet(this, _calendarElement).minDate = customElements.get("pggm-calendar").parseDate(this.dateFormat.min);
    if (__privateGet(this, _calendarElement).minDate && __privateGet(this, _calendarElement).minDate > __privateGet(this, _calendarElement).displayDate) {
      __privateGet(this, _calendarElement).displayDate = __privateGet(this, _calendarElement).minDate;
    }
    __privateGet(this, _calendarElement).maxDate = customElements.get("pggm-calendar").parseDate(this.dateFormat.max);
    __privateMethod(this, _PGGMDateDropdown_instances, positionDropDown_fn).call(this);
    __privateGet(this, _calendarElement).focus({ preventScroll: true });
    window.addEventListener("keydown", __privateGet(this, _onKeyDown3));
    window.addEventListener("click", __privateGet(this, _onWindowClick));
  }
  hide() {
    var _a4;
    this.removeAttribute("open");
    (_a4 = __privateGet(this, _returnFocusElement)) == null ? void 0 : _a4.focus({ preventScroll: true });
    window.removeEventListener("click", __privateGet(this, _onWindowClick));
    window.removeEventListener("keydown", __privateGet(this, _onKeyDown3));
  }
};
_calendarElement = new WeakMap();
_returnFocusElement = new WeakMap();
_calendarChange = new WeakMap();
_PGGMDateDropdown_instances = new WeakSet();
positionDropDown_fn = function() {
  requestAnimationFrame(() => {
    computePosition2(this.dateFormat.inputElement, this, {
      placement: "bottom-end",
      strategy: "fixed",
      middleware: [flip2()]
    }).then(({ x, y }) => {
      this.style.setProperty("--date-dropdown-left", x + "px");
      this.style.setProperty("--date-dropdown-top", y + "px");
    });
  });
};
_onWindowClick = new WeakMap();
_onKeyDown3 = new WeakMap();
PGGMDateDropdown.TAG_NAME = "pggm-date-dropdown";
PGGMDateDropdown = __decorateClass([
  CustomElementConfig({
    tagName: PGGMDateDropdown.TAG_NAME
  })
], PGGMDateDropdown);

// ../packages/input/src/input-format/date/date.css
var date_default = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n.pggm-input-date-trigger {\n  position: absolute;\n  right: 16px;\n  background-color: transparent;\n  border: none;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  z-index: 9;\n  cursor: pointer;\n  color: var(--pggm-text-input-color);\n}\n.pggm-input-date-trigger:disabled {\n  cursor: not-allowed;\n}\n.pggm-input-date-trigger--first {\n  right: calc(50% + 16px);\n}\n";

// ../packages/input/src/input-format/date/date.ts
var _triggerElement, _dateDropdown, _value, _isPeriod, _secondTriggerElement, _ariaAttrObserver, _ariaAttributes, _DateFormat_instances, syncAriaAttr_fn, _required3, _disabled3, _min, _max, _format, _onPeriodInputChange, _onInputChange, checkValidity_fn4, checkValidityPeriod_fn;
var DateFormat = class extends InputFormat {
  constructor(customInput) {
    super(customInput);
    __privateAdd(this, _DateFormat_instances);
    __privateAdd(this, _triggerElement);
    __privateAdd(this, _dateDropdown);
    __privateAdd(this, _value, null);
    __privateAdd(this, _isPeriod, null);
    __privateAdd(this, _secondTriggerElement);
    __privateAdd(this, _ariaAttrObserver);
    __privateAdd(this, _ariaAttributes, ["aria-invalid", "aria-label"]);
    __privateAdd(this, _required3, false);
    __privateAdd(this, _disabled3, false);
    __privateAdd(this, _min, null);
    __privateAdd(this, _max, null);
    __privateAdd(this, _format);
    __privateAdd(this, _onPeriodInputChange, (e) => {
      const endValue = this.valueFromdisplayFormat(this.inputEndDateElement.value);
      const value = this.valueFromdisplayFormat(this.inputElement.value);
      let dates = [value, endValue].map((value2) => customElements.get("pggm-calendar").parseDate(value2));
      if (dates.some((date) => !date)) {
        this.value = `${dates[0] ? value : this.inputElement.value},${dates[1] ? endValue : this.inputEndDateElement.value}`;
        return;
      }
      dates = dates.sort((a, b) => a.valueOf() - b.valueOf());
      this.value = dates.map((date) => customElements.get("pggm-calendar").dateToYYYY_MM_DD(date)).join(",");
    });
    __privateAdd(this, _onInputChange, (e) => {
      if (__privateGet(this, _isPeriod)) {
        return __privateGet(this, _onPeriodInputChange).call(this, e);
      }
      const rawValue = this.inputElement.value;
      const value = this.valueFromdisplayFormat(this.inputElement.value);
      if (value === "") {
        this.value = rawValue;
        return;
      }
      this.value = value;
    });
    this.inputElement = customInput.inputElement;
    this.internals = customInput.internals;
    this.inputEndDateElement = document.createElement("input", { is: "pggm-input" });
    __privateSet(this, _triggerElement, document.createElement("button"));
    __privateGet(this, _triggerElement).setAttribute("aria-label", "Open date picker");
    __privateGet(this, _triggerElement).type = "button";
    __privateGet(this, _triggerElement).classList.add("pggm-input-date-trigger", "focus");
    __privateGet(this, _triggerElement).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M16 2c.183 0 .355.05.502.135l.033.02c.28.177.465.49.465.845v1h1a3 3 0 0 1 2.995 2.824L21 7v12a3 3 0 0 1-2.824 2.995L18 22H6a3 3 0 0 1-2.995-2.824L3 19V7a3 3 0 0 1 2.824-2.995L6 4h1V3a1 1 0 0 1 .514-.874l.093-.046.066-.025.1-.029.107-.019L8 2q.083 0 .161.013l.122.029.04.012.06.023c.328.135.568.44.61.806L9 3v1h6V3a1 1 0 0 1 1-1m3 7H5v9.625c0 .705.386 1.286.883 1.366L6 20h12c.513 0 .936-.53.993-1.215l.007-.16z"/>
        <path d="M9.015 13a1 1 0 0 1-1 1 1.001 1.001 0 1 1-.005-2c.557 0 1.005.448 1.005 1M13.015 13a1 1 0 0 1-1 1 1.001 1.001 0 1 1-.005-2c.557 0 1.005.448 1.005 1M17.02 13a1 1 0 0 1-1 1 1.001 1.001 0 1 1-.005-2c.557 0 1.005.448 1.005 1M12.02 15a1 1 0 0 1 0 2 1.001 1.001 0 1 1-.005-2zM9.015 16a1 1 0 0 1-1 1 1.001 1.001 0 1 1-.005-2c.557 0 1.005.448 1.005 1"/>
      </svg>`;
    __privateSet(this, _dateDropdown, new PGGMDateDropdown());
    __privateGet(this, _dateDropdown).dateFormat = this;
    __privateGet(this, _triggerElement).addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      __privateGet(this, _dateDropdown).show();
    });
    __privateSet(this, _secondTriggerElement, __privateGet(this, _triggerElement).cloneNode(true));
    __privateGet(this, _secondTriggerElement).classList.add("pggm-input-date-trigger--first");
    __privateGet(this, _secondTriggerElement).addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      __privateGet(this, _dateDropdown).show(this.inputEndDateElement);
    });
    addStyleToShadowRoot(this.customInput.shadowRoot, date_default, "pggm-input-date-trigger");
    this.customInput.shadowRoot.appendChild(__privateGet(this, _dateDropdown));
    this.inputElement.type = "text";
    this.inputElement.addEventListener("change", __privateGet(this, _onInputChange));
    this.inputEndDateElement.addEventListener("change", __privateGet(this, _onInputChange));
    __privateSet(this, _format, "dd-mm-yyyy");
    if (this.customInput.hasAttribute("value")) {
      __privateSet(this, _value, this.customInput.getAttribute("value"));
    } else {
      __privateSet(this, _value, "");
    }
    requestAnimationFrame(() => {
      this.customInput.shadowRoot.appendChild(__privateGet(this, _triggerElement));
      this.value = __privateGet(this, _value);
    });
    __privateMethod(this, _DateFormat_instances, syncAriaAttr_fn).call(this);
  }
  get period() {
    return __privateGet(this, _isPeriod);
  }
  set period(value) {
    if (__privateGet(this, _isPeriod) !== value) {
      __privateSet(this, _isPeriod, typeof value === "string");
      if (__privateGet(this, _isPeriod)) {
        this.customInput.shadowRoot.appendChild(this.inputEndDateElement);
        this.customInput.shadowRoot.insertBefore(__privateGet(this, _secondTriggerElement), this.inputEndDateElement);
      } else {
        this.inputEndDateElement.remove();
        __privateGet(this, _secondTriggerElement).remove();
      }
    }
  }
  get lang() {
    return this.customInput.getAttribute("lang");
  }
  set lang(value) {
    if (value) {
      this.customInput.setAttribute("lang", value);
    } else {
      this.customInput.removeAttribute("lang");
    }
  }
  get value() {
    return __privateGet(this, _value);
  }
  set value(value) {
    const dispatchEvent = __privateGet(this, _value) !== value && this.internals.states.has("--initDone");
    this.internals.states.add("--initDone");
    __privateSet(this, _value, value);
    const updateValue = () => {
      this.customInput.setAttribute("value", value);
      this.internals.setFormValue(value);
      __privateMethod(this, _DateFormat_instances, checkValidity_fn4).call(this);
      if (dispatchEvent) {
        this.customInput.dispatchEvent(new Event("change", { bubbles: true }));
      }
    };
    if (__privateGet(this, _isPeriod)) {
      if (value) {
        const [begin, end] = value.split(",");
        this.inputElement.value = this.valueTodisplayFormat(begin);
        this.inputEndDateElement.value = this.valueTodisplayFormat(end);
        updateValue();
      }
    } else {
      const displayValue = this.valueTodisplayFormat(value);
      if (displayValue !== "") {
        this.inputElement.value = this.valueTodisplayFormat(value);
      }
      updateValue();
    }
  }
  get required() {
    return __privateGet(this, _required3);
  }
  set required(value) {
    if (__privateGet(this, _required3) !== value) {
      __privateSet(this, _required3, typeof value === "string");
    }
    __privateMethod(this, _DateFormat_instances, checkValidity_fn4).call(this);
  }
  get disabled() {
    return __privateGet(this, _disabled3);
  }
  set disabled(value) {
    if (typeof value === "string") {
      value = true;
    }
    __privateSet(this, _disabled3, value);
    this.inputElement.disabled = value;
    __privateGet(this, _triggerElement).disabled = value;
    this.internals.setFormValue(null);
    __privateMethod(this, _DateFormat_instances, checkValidity_fn4).call(this);
  }
  get min() {
    return __privateGet(this, _min);
  }
  set min(value) {
    __privateSet(this, _min, value);
    __privateMethod(this, _DateFormat_instances, checkValidity_fn4).call(this);
  }
  get max() {
    return __privateGet(this, _max);
  }
  set max(value) {
    __privateSet(this, _max, value);
    __privateMethod(this, _DateFormat_instances, checkValidity_fn4).call(this);
  }
  valueTodisplayFormat(value) {
    if (!value) {
      return "";
    }
    const [year, month, day] = value.split("-");
    if (!year || !month || !day) {
      return "";
    }
    const frmt = this.format || "dd-mm-yyyy";
    return frmt.replace("yyyy", year).replace("mm", month).replace("dd", day);
  }
  valueFromdisplayFormat(value) {
    const frmt = this.format || "dd-mm-yyyy";
    const frmtArray = frmt.split("-");
    const valueArray = value.split("-");
    if (frmtArray.length !== 3 || valueArray.length !== 3) {
      return "";
    }
    const year = valueArray[frmtArray.indexOf("yyyy")];
    const month = valueArray[frmtArray.indexOf("mm")];
    const day = valueArray[frmtArray.indexOf("dd")];
    const paddedMonth = month.padStart(2, "0");
    const paddedDay = day.padStart(2, "0");
    return `${year}-${paddedMonth}-${paddedDay}`;
  }
  get format() {
    return __privateGet(this, _format) || "dd-mm-yyyy";
  }
  set format(value) {
    __privateSet(this, _format, value);
    this.inputElement.value = this.valueTodisplayFormat(this.value);
    __privateMethod(this, _DateFormat_instances, checkValidity_fn4).call(this);
  }
  get readonly() {
    return this.inputElement.readOnly;
  }
  set readonly(value) {
    if (typeof value === "string") {
      value = true;
    }
    this.inputElement.readOnly = value;
  }
  connected() {
    super.connected();
    __privateGet(this, _ariaAttrObserver).observe(this.inputElement, { attributes: true, attributeFilter: __privateGet(this, _ariaAttributes) });
  }
  disconnected() {
    super.disconnected();
    __privateGet(this, _ariaAttrObserver).disconnect();
  }
};
_triggerElement = new WeakMap();
_dateDropdown = new WeakMap();
_value = new WeakMap();
_isPeriod = new WeakMap();
_secondTriggerElement = new WeakMap();
_ariaAttrObserver = new WeakMap();
_ariaAttributes = new WeakMap();
_DateFormat_instances = new WeakSet();
syncAriaAttr_fn = function() {
  __privateSet(this, _ariaAttrObserver, new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "aria-invalid") {
        this.inputEndDateElement.setAttribute("aria-invalid", this.inputElement.getAttribute("aria-invalid"));
      } else if (mutation.attributeName === "aria-label") {
        this.inputEndDateElement.setAttribute("aria-label", this.inputElement.getAttribute("aria-label"));
      }
    });
  }));
};
_required3 = new WeakMap();
_disabled3 = new WeakMap();
_min = new WeakMap();
_max = new WeakMap();
_format = new WeakMap();
_onPeriodInputChange = new WeakMap();
_onInputChange = new WeakMap();
checkValidity_fn4 = function() {
  this.internals.setValidity({});
  if (this.period) {
    __privateMethod(this, _DateFormat_instances, checkValidityPeriod_fn).call(this);
    return;
  }
  if (this.required && this.inputElement.value.length < 1) {
    this.internals.setValidity(
      { valueMissing: true },
      "Date is required",
      this.inputElement
    );
    this.internals.setFormValue(null);
    return;
  }
  if (!this.required && this.inputElement.value.length < 1) {
    return;
  }
  const dateValue = customElements.get("pggm-calendar").parseDate(this.value);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(this.value) || !dateValue) {
    this.internals.setValidity(
      { typeMismatch: true },
      "Date is not valid",
      this.inputElement
    );
    this.internals.setFormValue(null);
    return;
  }
  const minDate = customElements.get("pggm-calendar").parseDate(this.min);
  const maxDate = customElements.get("pggm-calendar").parseDate(this.max);
  if (this.min && dateValue < minDate) {
    this.internals.setValidity(
      { rangeUnderflow: true },
      "Date is too early",
      this.inputElement
    );
    this.internals.setFormValue(null);
    return;
  }
  if (this.max && dateValue > maxDate) {
    this.internals.setValidity(
      { rangeOverflow: true },
      "Date is too late",
      this.inputElement
    );
    this.internals.setFormValue(null);
    return;
  }
};
checkValidityPeriod_fn = function() {
  let dates = [null, null];
  if (this.value) {
    const [begin, end] = this.value.split(",");
    dates = [begin, end].map((value) => {
      const dateValue = customElements.get("pggm-calendar").parseDate(value);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !dateValue) {
        return null;
      }
      return dateValue;
    });
  }
  if (!this.required && dates.every((date) => !date)) {
    this.internals.setFormValue("");
    return;
  }
  if (dates.some((date) => !date)) {
    this.internals.setValidity(
      { typeMismatch: true },
      "Date is not valid",
      this.inputElement
    );
    this.internals.setFormValue(null);
    return;
  }
  if (this.required && dates.some((date) => !date)) {
    this.internals.setValidity(
      { valueMissing: true },
      "Date is required",
      this.inputElement
    );
    this.internals.setFormValue(null);
    return;
  }
  if (!this.required && dates.every((date) => !date)) {
    this.internals.setFormValue(null);
    return;
  }
  const minDate = customElements.get("pggm-calendar").parseDate(this.min);
  const maxDate = customElements.get("pggm-calendar").parseDate(this.max);
  dates = dates.sort((a, b) => a - b);
  if (this.min && dates[0] < minDate) {
    this.internals.setValidity(
      { rangeUnderflow: true },
      "Date is too early",
      this.inputElement
    );
    this.internals.setFormValue(null);
    return;
  }
  if (this.max && dates[1] > maxDate) {
    this.internals.setValidity(
      { rangeOverflow: true },
      "Date is too late",
      this.inputElement
    );
    this.internals.setFormValue(null);
    return;
  }
};
DateFormat.attributes = ["required", "format", "min", "max", "period", "lang", "period"];

// ../packages/input/src/input.tsx
var PGGMInput = class extends HTMLInputElement {
  connectedCallback() {
    addStyleToShadowRoot(this.getRootNode(), input_default, PGGMInput.TAG_NAME);
  }
};
PGGMInput.observedAttributes = ["input-format"];
PGGMInput.TAG_NAME = "pggm-input";
PGGMInput = __decorateClass([
  CustomElementConfig({
    tagName: PGGMInput.TAG_NAME,
    options: {
      extends: "input"
    }
  })
], PGGMInput);
var CustomInput = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open", delegatesFocus: true });
    this.internals = this.attachInternals();
  }
};
var inputFormats = {
  iban: IbanFormat,
  phone: PhoneFormat,
  date: DateFormat
};
var customInputElements = [];
var createElementConstructor = (formater) => {
  var _a4, _inputFormat, _initDone;
  const observedAttributes = [...inputFormats[formater].prototype.constructor.attributes, "value", "disabled", "readonly"];
  const cls = (_a4 = class extends CustomInput {
    constructor() {
      super();
      __privateAdd(this, _inputFormat);
      __privateAdd(this, _initDone, false);
      addStyleToShadowRoot(this.shadowRoot, `
        :host {
          max-width: var(--pggm-text-input-max-inline-size);
          width: 100%;
          display: inline-flex;
          position: relative;
        }
      `, this.tagName);
      this.inputElement = document.createElement("input", { is: PGGMInput.TAG_NAME });
      __privateSet(this, _inputFormat, new inputFormats[formater](this));
      this.shadowRoot.appendChild(this.inputElement);
    }
    connectedCallback() {
      var _a5;
      if (!__privateGet(this, _initDone)) {
        __privateSet(this, _initDone, true);
        __privateGet(this, _inputFormat).init();
      }
      (_a5 = __privateGet(this, _inputFormat)) == null ? void 0 : _a5.connected();
    }
    disconnectedCallback() {
      var _a5;
      (_a5 = __privateGet(this, _inputFormat)) == null ? void 0 : _a5.disconnected();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      const property = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      if (__privateGet(this, _inputFormat) && __privateGet(this, _inputFormat)[property] !== newValue) {
        __privateGet(this, _inputFormat)[property] = newValue;
      }
    }
    reportValidity() {
      return this.internals.reportValidity();
    }
    checkValidity() {
      return this.internals.checkValidity();
    }
    get validity() {
      return this.internals.validity;
    }
    get value() {
      return __privateGet(this, _inputFormat).value;
    }
    set value(value) {
      if (__privateGet(this, _inputFormat).value) {
        __privateGet(this, _inputFormat).value = value;
      } else {
        this.setAttribute("value", value);
      }
    }
  }, _inputFormat = new WeakMap(), _initDone = new WeakMap(), _a4.formAssociated = true, _a4.observedAttributes = observedAttributes, _a4.component = inputFormats[formater], _a4);
  customInputElements.push({ cls, formater });
  return cls;
};
for (const format in inputFormats) {
  customElements.define(PGGMInput.TAG_NAME + "-" + format, createElementConstructor(format));
}
var _a;
var PGGMInputIban = (_a = customInputElements.find((component) => component.formater === "iban")) == null ? void 0 : _a.cls;
var _a2;
var PGGMInputPhone = (_a2 = customInputElements.find((component) => component.formater === "phone")) == null ? void 0 : _a2.cls;
var _a3;
var PGGMInputDate = (_a3 = customInputElements.find((component) => component.formater === "date")) == null ? void 0 : _a3.cls;

// ../packages/label/src/label.css
var label_default = "label[is=pggm-label] {\n  display: grid;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  grid-template-columns: auto auto;\n  grid-row-gap: var(--pggm-form-field-label-row-gap);\n  row-gap: var(--pggm-form-field-label-row-gap);\n  grid-column-gap: var(--pggm-form-field-label-column-gap);\n  -webkit-column-gap: var(--pggm-form-field-label-column-gap);\n  -moz-column-gap: var(--pggm-form-field-label-column-gap);\n  column-gap: var(--pggm-form-field-label-column-gap);\n  color: var(--pggm-form-field-label-color);\n  font-family: var(--pggm-form-field-label-font-family);\n  font-weight: var(--pggm-form-field-label-font-weight);\n  margin-bottom: var(--pggm-form-field-label-margin-block-end, var(--pggm-space-row-xs));\n  -webkit-box-align: baseline;\n  -ms-flex-align: baseline;\n  align-items: baseline;\n  line-height: 1.5;\n  line-height: var(--pggm-form-field-label-line-height, 1.5);\n}\nlabel[is=pggm-label] > :first-child {\n  margin-right: calc(var(--pggm-form-field-label-column-gap) - 0.25em);\n}\nlabel[is=pggm-label] .pggm-label__optional {\n  color: var(--pggm-form-field-label-optional-color);\n  font-family: var(--pggm-form-field-label-optional-font-family);\n  font-size: var(--pggm-form-field-label-optional-font-size);\n  font-weight: var(--pggm-form-field-label-optional-font-weight);\n  line-height: var(--pggm-form-field-label-optional-line-height);\n}\nlabel[is=pggm-label] .pggm-label__description {\n  display: block;\n  margin: 0;\n  font-family: var(--pggm-form-field-description-font-family);\n  font-size: var(--pggm-form-field-description-font-size);\n  font-weight: var(--pggm-form-field-description-font-weight);\n  line-height: var(--pggm-form-field-description-line-height);\n  color: var(--pggm-form-field-description-color);\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\nlabel[is=pggm-label]:has(~ *:disabled),\nlabel[is=pggm-label]:has(~ *:disabled) .pggm-label__description,\nlabel[is=pggm-label]:has(~ *:disabled) .pggm-label__optional {\n  color: var(--pggm-form-field-label-disabled-color);\n}\n";

// ../packages/label/src/label.tsx
var PGGMLabel = class extends HTMLLabelElement {
  connectedCallback() {
    addStyleToShadowRoot(this.getRootNode(), label_default, PGGMLabel.TAG_NAME);
  }
};
PGGMLabel.TAG_NAME = "pggm-label";
PGGMLabel = __decorateClass([
  CustomElementConfig({
    tagName: PGGMLabel.TAG_NAME,
    options: {
      extends: "label"
    }
  })
], PGGMLabel);

// ../packages/link/src/link.css
var link_default = "a[is=pggm-link] {\n  all: unset;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-family: var(--pggm-link-font-family);\n  font-size: var(--pggm-link-font-size);\n  font-weight: var(--pggm-link-font-weight);\n  line-height: var(--pggm-link-line-height);\n  color: var(--pggm-link-color);\n  text-decoration: underline;\n  -webkit-text-decoration: var(--pggm-link-text-decoration, underline);\n  text-decoration: var(--pggm-link-text-decoration, underline);\n  text-decoration-color: var(--pggm-link-text-decoration-color);\n  text-decoration-thickness: var(--pggm-link-text-decoration-thickness);\n  text-underline-offset: var(--pggm-link-text-underline-offset);\n  gap: var(--pggm-link-column-gap);\n  cursor: pointer;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\na[is=pggm-link]:focus:not([disabled]),\na[is=pggm-link]:focus-visible {\n  outline: var(--pggm-focus-outline-width) solid blue;\n  outline: var(--pggm-focus-outline-width) var(--pggm-focus-outline-style, solid) var(--pggm-focus-outline-color, blue);\n  outline-offset: var(--pggm-focus-outline-offset);\n  border-radius: var(--pggm-focus-border-radius);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\na[is=pggm-link]:focus:not(:focus-visible) {\n  outline: 0;\n}\na[is=pggm-link][standalone] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.pggm-link__icon svg,\n.pggm-link__icon {\n  width: var(--pggm-link-icon-size);\n  height: var(--pggm-link-icon-size);\n  display: block;\n  color: #008055;\n  color: var(--pggm-link-icon-color, #008055);\n}\na[is=pggm-link]:hover,\na[is=pggm-link]:visited:hover {\n  color: var(--pggm-link-hover-color);\n  text-decoration: underline;\n  -webkit-text-decoration: var(--pggm-link-hover-text-decoration, underline);\n  text-decoration: var(--pggm-link-hover-text-decoration, underline);\n  text-decoration-color: var(--pggm-link-hover-text-decoration-color);\n}\na[is=pggm-link]:active,\na[is=pggm-link]:visited:active {\n  color: var(--pggm-link-active-color);\n  text-decoration: underline;\n  -webkit-text-decoration: var(--pggm-link-active-text-decoration, underline);\n  text-decoration: var(--pggm-link-active-text-decoration, underline);\n  text-decoration-color: var(--pggm-link-active-text-decoration-color);\n}\na[is=pggm-link]:visited {\n  color: var(--pggm-link-visited-color);\n}\na[is=pggm-link]:visited .pggm-link__icon svg {\n  stroke: var(--pggm-link-visited-icon-color);\n}\na[is=pggm-link][standalone]:not(:last-of-type) {\n  margin-bottom: var(--pggm-link-standalone-margin-block-end, var(--pggm-space-block-sm));\n}\na[is=pggm-link][standalone] {\n  color: #393a3c;\n  color: var(--pggm-link-standalone-color, #393a3c);\n  font-weight: 600;\n  font-weight: var(--pggm-link-standalone-font-weight, 600);\n  text-decoration: none;\n  -webkit-text-decoration: var(--pggm-link-standalone-text-decoration, none);\n  text-decoration: var(--pggm-link-standalone-text-decoration, none);\n  text-decoration-color: var(--pggm-link-standalone-text-decoration-color);\n  text-decoration-thickness: var(--pggm-link-standalone-text-decoration-thickness);\n  text-underline-offset: var(--pggm-link-standalone-text-underline-offset);\n}\na[is=pggm-link][standalone]:hover,\na[is=pggm-link][standalone]:visited:hover {\n  color: #008055;\n  color: var(--pggm-link-standalone-hover-color, #008055);\n  text-decoration: underline;\n  -webkit-text-decoration: var(--pggm-link-standalone-hover-text-decoration, underline);\n  text-decoration: var(--pggm-link-standalone-hover-text-decoration, underline);\n  text-decoration-color: var(--pggm-link-standalone-hover-text-decoration-color);\n}\na[is=pggm-link][standalone]:active,\na[is=pggm-link][standalone]:visited:active {\n  color: var(--pggm-link-standalone-active-color);\n  text-decoration: underline;\n  -webkit-text-decoration: var(--pggm-link-standalone-active-text-decoration, underline);\n  text-decoration: var(--pggm-link-standalone-active-text-decoration, underline);\n  text-decoration-color: var(--pggm-link-standalone-active-text-decoration-color);\n}\na[is=pggm-link][standalone] .pggm-link__icon svg,\na[is=pggm-link][standalone] .pggm-link__icon {\n  width: var(--pggm-link-standalone-icon-size);\n  height: var(--pggm-link-standalone-icon-size);\n  display: block;\n  color: #008055;\n  color: var(--pggm-link-standalone-icon-color, #008055);\n}\na[is=pggm-link][standalone]:visited {\n  color: #393a3c;\n  color: var(--pggm-link-standalone-visited-color, #393a3c);\n}\na[is=pggm-link][standalone]:visited .pggm-link__icon svg {\n  stroke: #008055;\n  stroke: var(--pggm-link-standalone-visited-icon-color, #008055);\n}\n";

// ../packages/link/src/link.tsx
var _addIcon;
var PGGMLink = class extends HTMLAnchorElement {
  constructor() {
    super(...arguments);
    this.onStandaloneChange = () => {
      let icon = this.querySelector(".pggm-link__icon");
      if (this.hasAttribute("standalone")) {
        if (icon) {
          return;
        }
        __privateGet(this, _addIcon).call(this);
      } else if (icon) {
        this.removeChild(icon);
      }
    };
    __privateAdd(this, _addIcon, () => {
      const icon = document.createElement("pggm-icon");
      icon.className = "pggm-link__icon";
      icon.setAttribute("icon", "chevron-right");
      icon.setAttribute("outline", "true");
      this.prepend(icon);
    });
  }
  connectedCallback() {
    addStyleToShadowRoot(this.getRootNode(), link_default, PGGMLink.TAG_NAME);
    if (this.hasAttribute("standalone")) {
      __privateGet(this, _addIcon).call(this);
    }
  }
  attributeChangedCallback(attributeName) {
    if (attributeName === "standalone") {
      this.onStandaloneChange();
    }
  }
};
_addIcon = new WeakMap();
PGGMLink.TAG_NAME = "pggm-link";
PGGMLink.observedAttributes = ["standalone"];
PGGMLink = __decorateClass([
  CustomElementConfig({
    tagName: PGGMLink.TAG_NAME,
    options: {
      extends: "a"
    }
  })
], PGGMLink);

// ../packages/radio/src/radio.css
var radio_default = ":host {\n  outline: 0;\n}\n.pggm-radio {\n  --transition-duration: var(--pggm-motion-duration-xs);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  cursor: pointer;\n  color: var(--pggm-radio-option-label-color);\n  font-family: var(--pggm-radio-option-label-font-family);\n  font-size: var(--pggm-radio-option-label-font-size);\n  font-weight: var(--pggm-radio-option-label-font-weight);\n  gap: var(--pggm-radio-option-column-gap);\n}\n.pggm-radio__input {\n  --border-width-max: max( var(--pggm-radio-border-width), var(--pggm-radio-active-border-width), var(--pggm-radio-invalid-border-width) );\n  --border-width-difference: 0;\n  --background-color: transparent;\n  --inset-distance: 0;\n  --border-width: var(--pggm-radio-border-width);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: inherit;\n  margin: 0;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 var(--pggm-radio-size);\n  flex: 0 0 var(--pggm-radio-size);\n  border-radius: var(--pggm-radio-border-radius);\n  border-style: solid;\n  border-color: var(--pggm-radio-border-color);\n  border-width: var(--border-width);\n  height: var(--pggm-radio-size);\n  width: var(--pggm-radio-size);\n  -webkit-box-shadow: inset 0 0 0 0 transparent;\n  box-shadow: inset 0 0 0 0 transparent;\n  -webkit-box-shadow: inset 0 0 0 var(--inset-distance) var(--background-color);\n  box-shadow: inset 0 0 0 var(--inset-distance) var(--background-color);\n  -webkit-transition:\n    background-color var(--transition-duration),\n    border-color var(--transition-duration),\n    -webkit-box-shadow calc(var(--transition-duration) * 2);\n  transition:\n    background-color var(--transition-duration),\n    border-color var(--transition-duration),\n    -webkit-box-shadow calc(var(--transition-duration) * 2);\n  transition:\n    background-color var(--transition-duration),\n    border-color var(--transition-duration),\n    box-shadow calc(var(--transition-duration) * 2);\n  transition:\n    background-color var(--transition-duration),\n    border-color var(--transition-duration),\n    box-shadow calc(var(--transition-duration) * 2),\n    -webkit-box-shadow calc(var(--transition-duration) * 2);\n}\n.pggm-radio--disabled,\n.pggm-radio--disabled .description {\n  cursor: not-allowed;\n  color: var(--pggm-radio-option-label-disabled-color);\n}\n.pggm-radio--disabled .pggm-radio__input {\n  --border-width: var( --pggm-radio-disabled-border-width, var(--pggm-radio-border-width) );\n  background-color: var(--pggm-radio-disabled-background-color);\n  border-color: var(--pggm-radio-disabled-border-color);\n}\n.pggm-radio--error:not(.pggm-radio--disabled) .pggm-radio__input {\n  --border-width: var( --pggm-radio-invalid-border-width, var(--pggm-radio-border-width) );\n  border-color: var(--pggm-radio-invalid-border-color);\n}\n.pggm-radio:not(.pggm-radio--disabled):not(.pggm-radio--error):hover .pggm-radio__input {\n  --border-width: var( --pggm-radio-hover-border-width, var(--pggm-radio-border-width) );\n  background-color: var(--pggm-radio-hover-background-color);\n  border-color: var(--pggm-radio-hover-border-color);\n}\n.pggm-radio:not(.pggm-radio--disabled):not(.pggm-radio--error):active .pggm-radio__input {\n  --border-width: var( --pggm-radio-active-border-width, var(--pggm-radio-border-width) );\n  background-color: var(--pggm-radio-active-background-color);\n  border-color: var(--pggm-radio-active-border-color);\n}\n.pggm-radio__input:checked {\n  --border-width: var( --pggm-radio-checked-border-width, var(--pggm-radio-border-width) );\n  --inset-distance: calc( ( var(--pggm-radio-size) - var(--pggm-radio-dot-size) - var(--border-width) ) / 2 );\n  --background-color: var(--pggm-radio-checked-background-color);\n  border-color: var(--pggm-radio-checked-border-color);\n}\n.pggm-radio--disabled .pggm-radio__input:checked {\n  --border-width: var( --pggm-radio-checked-disabled-border-width, var(--pggm-radio-border-width) );\n  --background-color: var(--pggm-radio-checked-disabled-background-color);\n  border-color: var(--pggm-radio-checked-disabled-border-color);\n}\n.pggm-radio--error:not(.pggm-radio--disabled) .pggm-radio__input:checked {\n  --border-width: var( --pggm-radio-checked-invalid-border-width, var(--pggm-radio-border-width) );\n  --background-color: var(--pggm-radio-checked-invalid-background-color);\n  border-color: var(--pggm-radio-checked-invalid-border-color);\n}\n.pggm-radio:not(.pggm-radio--disabled):not(.pggm-radio--error):hover .pggm-radio__input:checked {\n  --border-width: var( --pggm-radio-checked-hover-border-width, var(--pggm-radio-border-width) );\n  --background-color: var(--pggm-radio-checked-hover-background-color);\n  border-color: var(--pggm-radio-checked-hover-border-color);\n}\n.pggm-radio:not(.pggm-radio--disabled):not(.pggm-radio--error):active .pggm-radio__input:checked {\n  --border-width: var( --pggm-radio-checked-active-border-width, var(--pggm-radio-border-width) );\n  --background-color: var(--pggm-radio-checked-active-background-color);\n  border-color: var(--pggm-radio-checked-active-border-color);\n}\n.description {\n  display: block;\n  margin: 0;\n  font-family: var(--pggm-form-field-description-font-family);\n  font-size: var(--pggm-form-field-description-font-size);\n  font-weight: var(--pggm-form-field-description-font-weight);\n  line-height: var(--pggm-form-field-description-line-height);\n  color: var(--pggm-form-field-description-color);\n}\n:host(:focus-visible) input {\n  outline: var(--pggm-focus-outline-width) solid blue;\n  outline: var(--pggm-focus-outline-width) var(--pggm-focus-outline-style, solid) var(--pggm-focus-outline-color, blue);\n  outline-offset: var(--pggm-focus-outline-offset);\n}\n";

// ../packages/radio/src/radio.tsx
var _onClick3, _onKeyDown4;
var PGGMRadio = class extends CustomElement {
  constructor() {
    super();
    this.disabled = false;
    this.render = () => {
      return /* @__PURE__ */ Maquette.h("div", { classes: {
        "pggm-radio": true,
        "pggm-radio--disabled": this.disabled
      } }, /* @__PURE__ */ Maquette.h(
        "input",
        {
          "aria-labelledby": "RadioLabel",
          tabindex: "-1",
          class: "focus pggm-radio__input",
          type: "radio",
          disabled: this.disabled ? "" : false,
          checked: this.checked ? "" : false,
          onchange: (e) => {
            e.stopImmediatePropagation();
            e.stopPropagation();
          }
        }
      ), /* @__PURE__ */ Maquette.h("span", { id: "RadioLabel", class: "pggm-radio__label" }, /* @__PURE__ */ Maquette.h("slot", null), /* @__PURE__ */ Maquette.h("slot", { name: "description", class: "description" })));
    };
    __privateAdd(this, _onClick3, () => {
      const rootNode = this.getRootNode();
      rootNode == null ? void 0 : rootNode.querySelectorAll(
        `${PGGMRadio.TAG_NAME}[name="${this.name}"]`
      ).forEach((radio) => {
        if (radio.checked && radio !== this) {
          radio.checked = false;
        }
      });
      this.checked = true;
    });
    __privateAdd(this, _onKeyDown4, (e) => {
      if (e.key === " ") {
        e.preventDefault();
        __privateGet(this, _onClick3).call(this);
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const rootNode = this.getRootNode();
        const radios = Array.from(
          rootNode.querySelectorAll(
            `${PGGMRadio.TAG_NAME}[name="${this.name}"]:not([disabled])`
          )
        );
        const shouldCheckNextRadio = e.key === "ArrowDown" || e.key === "ArrowRight";
        const currentIndex = radios.indexOf(this);
        const nextIndex = (currentIndex + (shouldCheckNextRadio ? 1 : -1) + radios.length) % radios.length;
        radios[nextIndex].focus();
        this.checked = false;
        radios[nextIndex].checked = true;
      }
    });
    this.internals.ariaChecked = "false";
    this.internals.role = "radio";
    this.checked = false;
  }
  updated(propertyName, oldValue, newValue) {
    const value = this.value || null;
    if (propertyName === "checked") {
      this.internals.ariaChecked = this.checked ? "true" : "false";
      this.dispatchEvent(
        new Event("change", { bubbles: true, composed: true })
      );
    }
    if (propertyName === "disabled") {
      requestAnimationFrame(() => {
        this.tabIndex = this.disabled ? -1 : 0;
      });
      this.internals.ariaDisabled = this.disabled ? "true" : "false";
    }
    this.internals.setFormValue(this.checked ? value : null);
  }
  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = this.disabled ? -1 : 0;
    this.internals.ariaDisabled = this.disabled ? "true" : "false";
    this.addEventListener("click", __privateGet(this, _onClick3));
    this.addEventListener("keydown", __privateGet(this, _onKeyDown4));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", __privateGet(this, _onClick3));
    this.removeEventListener("keydown", __privateGet(this, _onKeyDown4));
  }
};
_onClick3 = new WeakMap();
_onKeyDown4 = new WeakMap();
PGGMRadio.style = radio_default;
PGGMRadio.formAssociated = true;
PGGMRadio.TAG_NAME = "pggm-radio";
__decorateClass([
  Property({ type: "boolean", attribute: "disabled", reflect: true })
], PGGMRadio.prototype, "disabled", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "checked", reflect: true })
], PGGMRadio.prototype, "checked", 2);
__decorateClass([
  Property({ type: "string", attribute: "name", reflect: true })
], PGGMRadio.prototype, "name", 2);
__decorateClass([
  Property({ type: "string", attribute: "value", reflect: true })
], PGGMRadio.prototype, "value", 2);
PGGMRadio = __decorateClass([
  CustomElementConfig({
    tagName: PGGMRadio.TAG_NAME
  })
], PGGMRadio);

// ../packages/radio-group/src/radio-group.css
var radio_group_default = ".pggm-radio-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  gap: var(--pggm-radio-group-row-gap);\n}\n.pggm-radio-group__options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  gap: var(--pggm-radio-group-row-gap);\n}\n:host([horizontal]) .pggm-radio-group__options {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  gap: calc(var(--pggm-radio-group-row-gap) * 2);\n}\n#GroupOptions ::slotted(:not(pggm-radio)) {\n  display: none;\n  visibility: hidden;\n}\n";

// ../packages/radio-group/src/radio-group.tsx
var _slotChange2, _updatedDisabled2;
var PGGMRadioGroup = class extends CustomElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _slotChange2, (e) => {
      const slot = e.target;
      const nodes = slot.assignedNodes();
      const label = nodes.filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent.trim()).join(" ");
      if (label && label.length > 0) {
        this.label = label;
      }
      nodes.filter((node) => node.nodeType === Node.TEXT_NODE).forEach((node) => {
        var _a4;
        return (_a4 = node.parentElement) == null ? void 0 : _a4.removeChild(node);
      });
    });
    __privateAdd(this, _updatedDisabled2, (disabled) => {
      this.querySelectorAll("pggm-radio").forEach((radio) => {
        radio.disabled = disabled;
      });
    });
  }
  updated(propertyName, oldValue, newValue) {
    if (propertyName === "disabled") {
      __privateGet(this, _updatedDisabled2).call(this, newValue);
    }
  }
  render() {
    return /* @__PURE__ */ Maquette.h(
      "div",
      {
        classes: {
          "pggm-radio-group": true,
          "pggm-radio-group--error": this.errorMessage,
          "pggm-radio-group--readonly": this.readonly,
          "pggm-radio-group--disabled": this.disabled
        }
      },
      /* @__PURE__ */ Maquette.h("label", { is: "pggm-label", for: this.id ? this.id : null }, this.label, /* @__PURE__ */ Maquette.h("p", { class: "pggm-label__description" }, /* @__PURE__ */ Maquette.h("slot", { slot: "description", name: "description" }))),
      this.errorMessage && /* @__PURE__ */ Maquette.h("pggm-error", null, /* @__PURE__ */ Maquette.h("slot", { name: "error" }, this.errorMessage)),
      /* @__PURE__ */ Maquette.h("div", { id: "GroupOptions", class: "pggm-radio-group__options" }, /* @__PURE__ */ Maquette.h("slot", { on: {
        slotchange: __privateGet(this, _slotChange2)
      } }))
    );
  }
};
_slotChange2 = new WeakMap();
_updatedDisabled2 = new WeakMap();
PGGMRadioGroup.style = radio_group_default;
__decorateClass([
  Property({ type: "string", attribute: "error-message", reflect: true })
], PGGMRadioGroup.prototype, "errorMessage", 2);
__decorateClass([
  Property({ type: "string", attribute: "label", reflect: true })
], PGGMRadioGroup.prototype, "label", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "readonly", reflect: true })
], PGGMRadioGroup.prototype, "readonly", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "disabled", reflect: true })
], PGGMRadioGroup.prototype, "disabled", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "required", reflect: true })
], PGGMRadioGroup.prototype, "required", 2);
PGGMRadioGroup = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-radio-group"
  })
], PGGMRadioGroup);

// ../packages/select/src/select.css
var select_default = "[is=pggm-select] {\n  --transition-duration: var(--pggm-motion-duration-xs, 0s);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  --padding-inline: calc( var(--pggm-select-padding-inline-start) + var(--pggm-select-padding-inline-end) );\n  --border-difference: calc( var(--pggm-select-border-width) - var(--pggm-select-active-border-width) );\n  background-color: var(--pggm-select-background-color);\n  border-width: var(--pggm-select-border-width);\n  border-color: var(--pggm-select-border-color);\n  border-radius: var(--pggm-select-border-radius);\n  padding-left: var(--pggm-select-padding-inline-start);\n  padding-right: calc(var(--pggm-select-icon-size) + var(--pggm-select-padding-inline-end));\n  width: 100%;\n  max-width: var(--pggm-select-max-inline-size);\n  padding-top: var(--pggm-select-padding-block-start);\n  padding-bottom: var(--pggm-select-padding-block-end);\n  font-family: var(--pggm-select-font-family);\n  color: var(--pggm-select-color);\n  cursor: pointer;\n  cursor: var(--pggm-select-cursor, pointer);\n  font-size: var(--pggm-select-font-size);\n  line-height: var(--pggm-select-line-height);\n  margin: 0;\n  display: block;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n  background-image: url(data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCiAgY2xhc3M9Imljb24gaWNvbi10YWJsZXIgaWNvbnMtdGFibGVyLW91dGxpbmUgaWNvbi10YWJsZXItY2hldnJvbi1kb3duIgo+CiAgPHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTYgOWw2IDZsNiAtNiIgLz4KPC9zdmc+);\n  background-position: right var(--pggm-select-padding-inline-end) center;\n  background-size: var(--pggm-select-icon-size);\n  -webkit-transition:\n    background-color 0s,\n    border-color 0s,\n    color 0s;\n  transition:\n    background-color 0s,\n    border-color 0s,\n    color 0s;\n  -webkit-transition:\n    background-color var(--transition-duration),\n    border-color var(--transition-duration),\n    color var(--transition-duration);\n  transition:\n    background-color var(--transition-duration),\n    border-color var(--transition-duration),\n    color var(--transition-duration);\n  outline: none;\n}\n[is=pggm-select]:hover {\n  background-color: var(--pggm-select-hover-background-color);\n  border-color: var(--pggm-select-hover-border-color);\n  color: var(--pggm-select-hover-color);\n}\n[is=pggm-select]:focus,\n[is=pggm-select]:focus-visible,\n[is=pggm-select]:focus-within {\n  background-color: var(--pggm-select-active-background-color);\n  border-color: var(--pggm-select-active-border-color);\n  color: var(--pggm-select-active-color);\n  border-width: var(--pggm-select-active-border-width);\n  padding-left: calc(var(--pggm-select-padding-inline-start) + var(--border-difference));\n  padding-right: calc(var(--pggm-select-icon-size) + var(--pggm-select-padding-inline-end) + var(--border-difference));\n  padding-top: calc(var(--pggm-select-padding-block-start) + var(--border-difference));\n  padding-bottom: calc(var(--pggm-select-padding-block-end) + var(--border-difference));\n  background-position: right calc(var(--pggm-select-padding-inline-end) + var(--border-difference)) center;\n}\n[is=pggm-select]:user-invalid {\n  background-color: var(--pggm-select-invalid-background-color);\n  border-color: var(--pggm-select-invalid-border-color);\n  color: var(--pggm-select-invalid-color);\n  border-width: var(--pggm-select-invalid-border-width);\n  margin: 0;\n}\n[is=pggm-select][multiple] {\n  background-image: none;\n  padding-right: var(--pggm-select-padding-inline-end);\n}\n[is=pggm-select]:disabled {\n  cursor: not-allowed;\n  background-color: var(--pggm-select-disabled-background-color);\n  border-color: var(--pggm-select-disabled-border-color);\n  color: var(--pggm-select-disabled-color);\n}\n";

// ../packages/select/src/select.tsx
var PGGMSelect = class extends HTMLSelectElement {
  connectedCallback() {
    addStyleToShadowRoot(this.getRootNode(), select_default, PGGMSelect.TAG_NAME);
  }
};
PGGMSelect.TAG_NAME = "pggm-select";
PGGMSelect = __decorateClass([
  CustomElementConfig({
    tagName: PGGMSelect.TAG_NAME,
    options: {
      extends: "select"
    }
  })
], PGGMSelect);

// ../packages/switch/src/switch.css
var switch_default = ":host {\n  display: inline-block;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  cursor: pointer;\n}\n:host([disabled]) {\n  cursor: not-allowed;\n}\n:host(:focus) {\n  outline: 0;\n}\n.pggm-switch--container {\n  height: 28px;\n  width: 56px;\n  border-radius: 54px;\n  background-color: #969696;\n  background-color: var(--pggm-switch-background-color, #969696);\n  outline: none;\n  -webkit-transition: background-color 0.2s;\n  transition: background-color 0.2s;\n}\n.pggm-switch--knob {\n  position: absolute;\n  height: 24px;\n  width: 24px;\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.6);\n  background-color: var( --pggm-switch-unchecked-color, rgba(255, 255, 255, 0.6) );\n  border-radius: 48px;\n  -webkit-transform: translate(2px, 2px);\n  transform: translate(2px, 2px);\n  -webkit-transition: background-color 0.4s, -webkit-transform 0.2s;\n  transition: background-color 0.4s, -webkit-transform 0.2s;\n  transition: transform 0.2s, background-color 0.4s;\n  transition:\n    transform 0.2s,\n    background-color 0.4s,\n    -webkit-transform 0.2s;\n}\n.pggm-switch--container__checked .pggm-switch--knob {\n  -webkit-transform: translate(30px, 2px);\n  transform: translate(30px, 2px);\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var(--pggm-switch-checked-color, rgba(255, 255, 255, 1));\n}\n.pggm-switch--container__checked {\n  background-color: hsl(160, 100%, 33%);\n  background-color: var( --pggm-switch-checked-background-color, hsl(160, 100%, 33%) );\n}\n:host(:not([disabled])) .pggm-switch--container:focus .pggm-switch--knob {\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var( --pggm-switch-unchecked-focus-color, rgba(255, 255, 255, 1) );\n}\n.pggm-switch--container__checked:focus {\n  background-color: hsl(160, 100%, 24%);\n  background-color: var( --pggm-switch-checked-focus-background-color, hsl(160, 100%, 24%) );\n}\n";

// ../packages/switch/src/switch.tsx
var _onClick4, _onKeydown3;
var PGGMSwitch = class extends CustomElement {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.disabled = false;
    this.label = "";
    __privateAdd(this, _onClick4, () => {
      if (this.disabled) return;
      this.toggle();
    });
    __privateAdd(this, _onKeydown3, (event) => {
      if (this.disabled) return;
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        this.toggle();
      } else if (event.key === "ArrowRight") {
        this.checked = true;
      } else if (event.key === "ArrowLeft") {
        this.checked = false;
      }
    });
  }
  render() {
    return /* @__PURE__ */ Maquette.h(
      "div",
      {
        classes: {
          "pggm-switch--container": true,
          "pggm-switch--container__checked": this.checked,
          "pggm-switch--container__disabled": this.disabled
        },
        tabindex: this.disabled ? "-1" : "0",
        role: "switch",
        "aria-checked": this.checked ? "true" : "false",
        "aria-disabled": this.disabled ? "true" : "false",
        "aria-label": this.label || "Switch",
        onclick: __privateGet(this, _onClick4),
        onkeydown: __privateGet(this, _onKeydown3)
      },
      /* @__PURE__ */ Maquette.h("div", { class: "pggm-switch--knob" }),
      /* @__PURE__ */ Maquette.h("slot", null)
    );
  }
  toggle() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent("change", { bubbles: true }));
  }
};
_onClick4 = new WeakMap();
_onKeydown3 = new WeakMap();
PGGMSwitch.style = switch_default;
PGGMSwitch.TAG_NAME = "pggm-switch";
__decorateClass([
  Property({ type: "boolean", attribute: "checked", reflect: true })
], PGGMSwitch.prototype, "checked", 2);
__decorateClass([
  Property({ type: "boolean", attribute: "disabled", reflect: true })
], PGGMSwitch.prototype, "disabled", 2);
__decorateClass([
  Property({ type: "string", attribute: "label" })
], PGGMSwitch.prototype, "label", 2);
PGGMSwitch = __decorateClass([
  CustomElementConfig({ tagName: PGGMSwitch.TAG_NAME })
], PGGMSwitch);

// ../packages/helpers/src/wait-for-selector.ts
function waitForSelector(elm, selector, timeout = 3e3) {
  return __async(this, null, function* () {
    return new Promise((resolve) => {
      const interval = 100;
      let elapsed = 0;
      const check = () => {
        const element = elm.querySelector(selector);
        if (element) {
          resolve(element);
        } else if (elapsed >= timeout) {
          resolve(null);
        } else {
          elapsed += interval;
          setTimeout(check, interval);
        }
      };
      check();
    });
  });
}

// ../packages/tab/src/tab-panel.css
var tab_panel_default = ":host([active]) {\n  display: block;\n}\n.tab-panel-content {\n  padding: 3rem 1.5rem 3rem 1.5rem;\n  padding: var(--pggm-tabs-panel-padding-block-start, 3rem) var( --pggm-tabs-panel-padding-inline-end, var(--pggm-tabs-unselected-padding-inline-end, 1.5rem) ) var(--pggm-tabs-panel-padding-block-end, 3rem) var( --pggm-tabs-panel-padding-inline-start, var(--pggm-tabs-unselected-padding-inline-start, 1.5rem) );\n}\n#TabPanelTitle {\n  display: none;\n  visibility: hidden;\n}\n";

// ../packages/tab/src/tab-panel.tsx
var _onAfterTabPanelCreate;
var PGGMTabPanel = class extends CustomElement {
  constructor() {
    super(...arguments);
    this.render = () => {
      return /* @__PURE__ */ Maquette.h("div", { class: "tab-panel-content", afterCreate: __privateGet(this, _onAfterTabPanelCreate) }, /* @__PURE__ */ Maquette.h("div", { hidden: true, id: "TitleContainer" }, /* @__PURE__ */ Maquette.h("slot", { class: "tabpanel--title-slot", name: "title" })), /* @__PURE__ */ Maquette.h("slot", null));
    };
    __privateAdd(this, _onAfterTabPanelCreate, () => {
      if (this.mutationObserver) {
        this.initTabPanel();
        return;
      }
      this.mutationObserver = new MutationObserver(this.mutationCallback);
      this.initTabPanel();
      this.setAttribute("aria-label", this.accessibilityLabel);
    });
    this.mutationCallback = (mutations) => {
      mutations.forEach((mutation) => {
        var _a4;
        let element = mutation.target;
        if (mutation.target.nodeType === this.TEXT_NODE) {
          element = mutation.target.parentElement;
        }
        if (element.getAttribute("slot") !== "title") {
          element = element.closest(`[slot="title"]`);
        }
        if (element) {
          (_a4 = this.tabElement) == null ? void 0 : _a4.updateTabPanel(this);
        }
      });
    };
  }
  connectedCallback() {
    return __async(this, null, function* () {
      __superGet(PGGMTabPanel.prototype, this, "connectedCallback").call(this);
      this.setAttribute("role", "tabpanel");
      if (!this.hasAttribute("tabindex")) {
        this.setAttribute("tabindex", "0");
      }
    });
  }
  initTabPanel() {
    var _a4;
    this.tabElement = this.closest("pggm-tab");
    this.mutationObserver.observe(this, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true
    });
    (_a4 = this.tabElement) == null ? void 0 : _a4.addTabPanel(this);
  }
  disconnectedCallback() {
    var _a4;
    super.disconnectedCallback();
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    (_a4 = this.tabElement) == null ? void 0 : _a4.removeTabPanel(this);
  }
  attributeChangedCallback() {
    var _a4;
    (_a4 = this.tabElement) == null ? void 0 : _a4.updateTabPanel(this);
  }
  getTabPanelTitleElement() {
    const tabTitleContent = this.shadowRoot.querySelector(".tabpanel--title-slot").assignedNodes();
    let tabTitleClone = tabTitleContent[0] && tabTitleContent[0].cloneNode(true);
    if (!tabTitleClone) {
      tabTitleClone = document.createElement("button");
      tabTitleClone.innerText = this.hasAttribute("title") ? this.getAttribute("title") : " - ";
    }
    tabTitleClone.removeAttribute("slot");
    if (tabTitleClone.tagName !== "BUTTON") {
      const innerText = tabTitleClone.innerText;
      tabTitleClone = document.createElement("button");
      tabTitleClone.innerText = innerText;
    }
    tabTitleClone.setAttribute("role", "tab");
    return tabTitleClone;
  }
  static get observedAttributes() {
    return ["title"];
  }
  get active() {
    return !this.hasAttribute("hidden") && this.hasAttribute("active");
  }
  set active(active) {
    if (!this.id || this.id === "") {
      return;
    }
    const pfzwTabElement = this.closest("pggm-tab");
    const ariaSelectedAttr = "aria-selected";
    if (active) {
      pfzwTabElement.tabPanels.forEach((tabPanel) => {
        if (tabPanel !== this) {
          tabPanel.setAttribute("hidden", "hidden");
          tabPanel.setAttribute(ariaSelectedAttr, "false");
          tabPanel.removeAttribute("active");
        }
        if (tabPanel.id) {
          waitForSelector(
            pfzwTabElement.shadowRoot,
            `[aria-controls="${tabPanel.id}"]`
          ).then((el) => {
            el.setAttribute(ariaSelectedAttr, "false");
            el.setAttribute("tabindex", "-1");
          });
        }
      });
      this.hidden = false;
      this.setAttribute("active", "active");
      this.setAttribute(ariaSelectedAttr, "true");
    } else {
      this.hidden = true;
      this.removeAttribute("active");
      this.setAttribute(ariaSelectedAttr, "false");
    }
    waitForSelector(
      pfzwTabElement.shadowRoot,
      `[aria-controls="${this.id}"]`
    ).then((el) => {
      el.setAttribute(ariaSelectedAttr, active ? "true" : "false");
      el.setAttribute("tabindex", active ? "0" : "-1");
    });
  }
  get accessibilityLabel() {
    var _a4;
    const tabTitleContent = this.shadowRoot.querySelector(".tabpanel--title-slot").assignedNodes();
    let label = ((_a4 = tabTitleContent[0]) == null ? void 0 : _a4.innerText) || "";
    if (label === "" && this.hasAttribute("title")) {
      label = this.getAttribute("title");
    }
    return label;
  }
};
_onAfterTabPanelCreate = new WeakMap();
PGGMTabPanel.style = tab_panel_default;
PGGMTabPanel = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-tab-panel"
  })
], PGGMTabPanel);

// ../packages/tab/src/tab.css
var tab_default = ':host {\n  display: block;\n}\n#TabsContainer {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.tabs--tabstrip {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  position: relative;\n  z-index: 2;\n  margin: 0 0 0 0;\n  margin: 0 var(--pggm-tabs-margin-inline-end, 0) 0 var(--pggm-tabs-margin-inline-start, 0);\n}\n.tabs--tabstrip-button {\n  width: 3rem;\n  width: var(--pggm-tabs-scrollable-width, 3rem);\n  height: 3rem;\n  height: var(--pggm-tabs-scrollable-height, 3rem);\n  border: none;\n  cursor: pointer;\n  background: transparent;\n  fill: #4149a8;\n  fill: var(--pggm-tabs-scrollable-icon-color, #4149a8);\n  margin-bottom: calc(0 + 0);\n  margin-bottom: calc(var(--pggm-focus-outline-offset, 0) + var(--pggm-focus-outline-width, 0));\n  position: relative;\n  z-index: 3;\n}\n.tabs--tabstrip-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 0 calc(-1 * (0 + 0));\n  margin: 0 calc(-1 * (var(--pggm-focus-outline-offset, 0) + var(--pggm-focus-outline-width, 0)));\n  padding: 0 calc(0 + 0) calc(0 + 0);\n  padding: 0 calc(var(--pggm-focus-outline-width, 0) + var(--pggm-focus-outline-offset, 0)) calc(var(--pggm-focus-outline-width, 0) + var(--pggm-focus-outline-offset, 0));\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.tabs--tabstrip-tabs {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n}\n#TabStrip {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  gap: 0.5rem;\n  gap: var(--pggm-tabs-panel-column-gap, 0.5rem);\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  min-height: calc(0 + 0 + 2px + (1rem * 1.5) + max(1rem, 0.75rem) + max(0.75rem, 1rem));\n  min-height: calc(var(--pggm-focus-outline-width, 0) + var(--pggm-focus-outline-offset, 0) + var(--pggm-tabs-selected-border-height, 2px) + (var(--pggm-tabs-font-size, 1rem) * var(--pggm-tabs-line-height, 1.5)) + max(var(--pggm-tabs-selected-padding-block-start, 1rem), var(--pggm-tabs-unselected-padding-block-start, 0.75rem)) + max(var(--pggm-tabs-unselected-padding-block-end, 0.75rem), var(--pggm-tabs-selected-padding-block-end, 1rem)));\n  margin: 0;\n  position: relative;\n  -webkit-transition: -webkit-transform 350ms ease;\n  transition: -webkit-transform 350ms ease;\n  transition: transform 350ms ease;\n  transition: transform 350ms ease, -webkit-transform 350ms ease;\n}\n#TabStrip > * {\n  background-color: #4149a8;\n  background-color: var(--pggm-tabs-unselected-background-color, #4149a8);\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-radius: var(--pggm-tabs-border-radius, 0.25rem) var(--pggm-tabs-border-radius, 0.25rem) 0 0;\n  font-family: var(--pggm-tabs-font-family);\n  font-weight: 700;\n  font-weight: var(--pggm-tabs-font-weight, 700);\n  line-height: 1.5;\n  line-height: var(--pggm-tabs-line-height, 1.5);\n  font-size: 1rem;\n  font-size: var(--pggm-tabs-font-size, 1rem);\n  color: #fff;\n  color: var(--pggm-tabs-unselected-color, #fff);\n  padding: 0.75rem 1.5rem 0.75rem 1.5rem;\n  padding: var(--pggm-tabs-unselected-padding-block-start, 0.75rem) var(--pggm-tabs-unselected-padding-inline-end, 1.5rem) var(--pggm-tabs-unselected-padding-block-end, 0.75rem) var(--pggm-tabs-unselected-padding-inline-start, 1.5rem);\n  display: block;\n  border: none;\n  cursor: pointer;\n  -webkit-transition: padding 350ms ease;\n  transition: padding 350ms ease;\n  white-space: nowrap;\n}\n#TabStrip > *:not([aria-selected=true]):hover {\n  background-color: #373e8f;\n  background-color: var(--pggm-tabs-unselected-hover-background-color, #373e8f);\n  color: #fff;\n  color: var(--pggm-tabs-unselected-hover-color, #fff);\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n  text-underline-offset: 0.25rem;\n}\n#TabStrip > *[aria-selected=true] {\n  background-color: #fff;\n  background-color: var(--pggm-tabs-selected-background-color, #fff);\n  color: #4149a8;\n  color: var(--pggm-tabs-selected-color, #4149a8);\n  padding-top: 1rem;\n  padding-top: var(--pggm-tabs-selected-padding-block-start, 1rem);\n  padding-bottom: 1rem;\n  padding-bottom: var(--pggm-tabs-selected-padding-block-end, 1rem);\n  border-top: 2px solid #4149a8;\n  border-top: var(--pggm-tabs-selected-border-height, 2px) solid var(--pggm-tabs-selected-border-color, #4149a8);\n}\n#TabStrip > *:focus-visible {\n  outline: var(--pggm-focus-outline-width) var(--pggm-focus-outline-style) var(--pggm-focus-outline-color);\n  outline-offset: var(--pggm-focus-outline-offset);\n}\n#Panels {\n  margin: calc(-1 * (0 + 0)) 0 0 0;\n  margin: calc(-1 * (var(--pggm-focus-outline-width, 0) + var(--pggm-focus-outline-offset, 0))) var(--pggm-tabs-margin-inline-end, 0) 0 var(--pggm-tabs-margin-inline-start, 0);\n  position: relative;\n  z-index: 1;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background: #fff;\n  background: var(--pggm-tabs-panel-background-color, #fff);\n}\n#Panels::before,\n#Panels::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  width: calc(100vw);\n  height: 100%;\n  background: #fff;\n  background: var(--pggm-tabs-panel-background-color, #fff);\n  z-index: 1;\n  left: 50%;\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n#Panels::after {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n  left: auto;\n  right: 50%;\n}\n#Panels ::slotted(*) {\n  position: relative;\n  z-index: 2;\n}\n#Panels ::slotted([aria-hidden="true"]) {\n  display: none !important;\n  visibility: hidden;\n}\n#Panels ::slotted(:focus-visible) {\n  display: block;\n  outline: var(--pggm-focus-outline-width) var(--pggm-focus-outline-style) var(--pggm-focus-outline-color);\n  outline-offset: var(--pggm-focus-outline-offset);\n}\n';

// ../packages/tab/src/tab.tsx
var id = 0;
var uniqueId = (prefix) => {
  id++;
  return prefix + id;
};
var _resizeTimout, _isReszing, _offset, _hashChangeEventHandler, _attachEventListeners, _detachEventListeners, _onTabPrevClick, _onTabNextClick, _focusOnActiveTab, _checkScrollPosition, _onResize, _resizeEventHandler, _showHideScrollIndicators, _scrollActiveTabIntoView, _scrollTabPanelTo, _onKeyDown5, _onTabsClick, _isPanelActive;
var PGGMTab = class extends CustomElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _resizeTimout);
    __privateAdd(this, _isReszing, false);
    __privateAdd(this, _offset, 0);
    this.render = () => {
      return /* @__PURE__ */ Maquette.h("div", null, /* @__PURE__ */ Maquette.h("div", { class: "tabs--tabstrip" }, /* @__PURE__ */ Maquette.h("button", { type: "button", class: "tabs--tabstrip-button tabs--tabstrip-button--prev", tabindex: "-1", hidden: true, "aria-label": "Previous tabs page" }, /* @__PURE__ */ Maquette.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "14", viewBox: "0 0 8 14" }, /* @__PURE__ */ Maquette.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" }))), /* @__PURE__ */ Maquette.h("div", { class: "tabs--tabstrip-wrapper" }, /* @__PURE__ */ Maquette.h("div", { class: "tabs--tabstrip-tabs" }, /* @__PURE__ */ Maquette.h("div", { id: "TabStrip", class: "tabs--tabstrip-tabs-inner", role: "tablist", "aria-label": "${this.description}", "aria-orientation": "horizontal" }))), /* @__PURE__ */ Maquette.h("button", { type: "button", class: "tabs--tabstrip-button tabs--tabstrip-button--next", tabindex: "-1", hidden: true, "aria-label": "Next tabs page" }, /* @__PURE__ */ Maquette.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "14", viewBox: "0 0 8 14" }, /* @__PURE__ */ Maquette.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" })))), /* @__PURE__ */ Maquette.h("div", { id: "Panels", class: "tabs-pannels" }, /* @__PURE__ */ Maquette.h("slot", { class: "tabs--panels-slot" })));
    };
    __privateAdd(this, _hashChangeEventHandler, (e) => {
      const hash = document.location.hash.substring(1);
      const tab = this.setActiveTab(hash, true);
      if (tab) {
        e.preventDefault();
      }
    });
    __privateAdd(this, _attachEventListeners, () => {
      this.addEventListener("keydown", __privateGet(this, _onKeyDown5));
      window.addEventListener("hashchange", __privateGet(this, _hashChangeEventHandler));
      window.addEventListener("resize", __privateGet(this, _resizeEventHandler));
      const tabStripPrev = this.shadowRoot.querySelector(
        ".tabs--tabstrip-button--prev"
      );
      const tabStripNext = this.shadowRoot.querySelector(
        ".tabs--tabstrip-button--next"
      );
      if (tabStripNext) {
        tabStripNext.addEventListener("click", __privateGet(this, _onTabNextClick));
      }
      if (tabStripPrev) {
        tabStripPrev.addEventListener("click", __privateGet(this, _onTabPrevClick));
      }
    });
    __privateAdd(this, _detachEventListeners, () => {
      this.removeEventListener("keydown", __privateGet(this, _onKeyDown5));
      window.removeEventListener("hashchange", __privateGet(this, _hashChangeEventHandler));
      window.removeEventListener("resize", __privateGet(this, _resizeEventHandler));
    });
    __privateAdd(this, _onTabPrevClick, () => {
      const tabProps = this.tabsPropperties;
      const nextOffset = __privateGet(this, _offset) + tabProps.width;
      __privateGet(this, _scrollTabPanelTo).call(this, nextOffset);
      __privateGet(this, _focusOnActiveTab).call(this);
    });
    __privateAdd(this, _onTabNextClick, () => {
      const tabProps = this.tabsPropperties;
      const nextOffset = __privateGet(this, _offset) - tabProps.width;
      __privateGet(this, _scrollTabPanelTo).call(this, nextOffset);
      __privateGet(this, _focusOnActiveTab).call(this);
    });
    __privateAdd(this, _focusOnActiveTab, () => {
      const activeTab = this.shadowRoot.querySelector(
        `[aria-controls="${this.tabPanels[this.selected].id}"]`
      );
      activeTab.focus();
    });
    __privateAdd(this, _checkScrollPosition, () => {
      __privateGet(this, _scrollTabPanelTo).call(this, __privateGet(this, _offset));
    });
    __privateAdd(this, _onResize, () => {
      __privateGet(this, _checkScrollPosition).call(this);
      __privateGet(this, _showHideScrollIndicators).call(this);
    });
    __privateAdd(this, _resizeEventHandler, () => {
      if (__privateGet(this, _resizeTimout)) {
        window.clearTimeout(__privateGet(this, _resizeTimout));
      }
      if (__privateGet(this, _isReszing)) {
        __privateSet(this, _resizeTimout, window.setTimeout(() => {
          __privateSet(this, _isReszing, false);
          __privateGet(this, _onResize).call(this);
        }, 200));
      } else {
        __privateSet(this, _isReszing, true);
        __privateGet(this, _onResize).call(this);
        __privateSet(this, _resizeTimout, window.setTimeout(() => {
          __privateSet(this, _isReszing, false);
        }, 200));
      }
    });
    __privateAdd(this, _showHideScrollIndicators, () => {
      const tabStripPrev = this.shadowRoot.querySelector(
        ".tabs--tabstrip-button--prev"
      );
      const tabStripNext = this.shadowRoot.querySelector(
        ".tabs--tabstrip-button--next"
      );
      if (tabStripPrev && tabStripNext) {
        tabStripNext.hidden = true;
        if (__privateGet(this, _offset) < 0) {
          tabStripPrev.hidden = false;
        } else {
          tabStripPrev.hidden = true;
        }
        const tabProps = this.tabsPropperties;
        if (tabProps.totalWidth > tabProps.width && __privateGet(this, _offset) > tabProps.maxOffset) {
          tabStripNext.hidden = false;
        } else {
          tabStripNext.hidden = true;
          const tabs = this.shadowRoot.querySelector("#TabStrip");
          tabs.style.transform = `translateX(${tabProps.maxOffset}px)`;
        }
      }
    });
    __privateAdd(this, _scrollActiveTabIntoView, (tab) => {
      if (!tab) {
        return;
      }
      const tabsProps = this.tabsPropperties;
      const tabRect = tab.getBoundingClientRect();
      const newLeft = -1 * (tabRect.left - tabsProps.left - __privateGet(this, _offset));
      __privateGet(this, _scrollTabPanelTo).call(this, newLeft);
    });
    __privateAdd(this, _scrollTabPanelTo, (offset3) => {
      const tabProps = this.tabsPropperties;
      let newOffset = offset3 > 0 ? 0 : offset3;
      if (newOffset < tabProps.maxOffset) {
        newOffset = tabProps.maxOffset;
      }
      __privateSet(this, _offset, Math.floor(newOffset));
      const tabs = this.shadowRoot.querySelector("#TabStrip");
      tabs.style.transform = `translateX(${__privateGet(this, _offset)}px)`;
      __privateGet(this, _showHideScrollIndicators).call(this);
    });
    __privateAdd(this, _onKeyDown5, (e) => {
      if (this.docOrShadowRoot.activeElement !== this) {
        return;
      }
      let idx;
      switch (e.code) {
        case "ArrowLeft":
          e.preventDefault();
          if (this.selected > 0) {
            idx = this.selected - 1;
            idx = idx < 0 ? this.tabPanels.length - 1 : idx;
          } else {
            idx = this.tabPanels.length - 1;
          }
          document.location.hash = this.tabPanels[idx].id;
          break;
        case "ArrowRight":
          e.preventDefault();
          idx = this.selected + 1;
          document.location.hash = this.tabPanels[idx % this.tabPanels.length].id;
          break;
        case "End":
          e.preventDefault();
          idx = this.tabPanels.length - 1;
          document.location.hash = this.tabPanels[idx].id;
          break;
        case "Home":
          e.preventDefault();
          idx = 0;
          document.location.hash = this.tabPanels[idx].id;
          break;
        default:
          break;
      }
    });
    __privateAdd(this, _onTabsClick, (e) => {
      let target = e.target;
      if (!target.hasAttribute("aria-controls")) {
        target = target.closest(`[aria-controls]`);
      }
      if (!target) {
        return;
      }
      const panel = [...this.tabPanels].find(
        (panel2) => panel2.id === target.getAttribute("aria-controls")
      );
      if (!panel) {
        return;
      }
      document.location.hash = panel.id;
    });
    __privateAdd(this, _isPanelActive, (tabPanel) => {
      const currentHash = document.location.hash.replace("#", "");
      const tabPanelIndex = [...this.tabPanels].findIndex((p) => tabPanel === p);
      const activeTabPanelIndex = [...this.tabPanels].findIndex(
        (p) => p.hasAttribute("active")
      );
      if (currentHash === tabPanel.id) {
        return true;
      }
      if (this.getAttribute("selected") === tabPanelIndex.toString()) {
        return true;
      }
      if (tabPanelIndex === activeTabPanelIndex) {
        return true;
      }
      if (!this.hasAttribute("selected") && activeTabPanelIndex === -1 && currentHash === "" && tabPanelIndex === 0) {
        return true;
      }
      return false;
    });
  }
  connectedCallback() {
    super.connectedCallback();
    __privateGet(this, _attachEventListeners).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    __privateGet(this, _detachEventListeners).call(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "selected") {
      this.selected = parseInt(newValue, 10);
    }
  }
  setActiveTab(tabId, focus = false) {
    if (!tabId) {
      return false;
    }
    const tabPanel = [...this.tabPanels].find((p) => p.id === tabId);
    if (tabPanel) {
      tabPanel.active = true;
      const tab = this.shadowRoot.querySelector(
        `[aria-controls="${tabId}"]`
      );
      __privateGet(this, _scrollActiveTabIntoView).call(this, tab);
      if (focus) {
        tab.focus();
      }
      this.dispatchEvent(new CustomEvent("tabchange", { detail: tabId }));
      return true;
    }
    return false;
  }
  addTabPanel(tabPanel) {
    if (!tabPanel.id || tabPanel.id === "") {
      tabPanel.id = uniqueId("TabPanel");
    }
    const strip = this.shadowRoot.querySelector("#TabStrip");
    const tabPanelIndex = [...this.tabPanels].findIndex((p) => tabPanel === p);
    const nextPanel = strip.childNodes.length >= tabPanelIndex + 1 ? strip.childNodes[tabPanelIndex + 1] : null;
    const tabTitleElement = tabPanel.getTabPanelTitleElement();
    tabTitleElement.setAttribute("aria-controls", tabPanel.id);
    if (nextPanel) {
      strip.insertBefore(tabTitleElement, nextPanel);
    } else {
      strip.appendChild(tabTitleElement);
    }
    tabTitleElement.addEventListener("click", __privateGet(this, _onTabsClick), {
      passive: true
    });
    tabPanel.active = __privateGet(this, _isPanelActive).call(this, tabPanel);
    __privateGet(this, _showHideScrollIndicators).call(this);
  }
  removeTabPanel(tabPanel) {
    var _a4;
    if (!tabPanel) {
      return;
    }
    const titleElement = this.shadowRoot.querySelector(
      `[aria-controls="${tabPanel.id}"]`
    );
    titleElement.removeEventListener("click", __privateGet(this, _onTabsClick));
    (_a4 = titleElement == null ? void 0 : titleElement.parentElement) == null ? void 0 : _a4.removeChild(titleElement);
    __privateGet(this, _showHideScrollIndicators).call(this);
  }
  updateTabPanel(tabPanel) {
    this.removeTabPanel(tabPanel);
    this.addTabPanel(tabPanel);
  }
  get tabPanels() {
    return this.querySelectorAll("pggm-tab-panel");
  }
  static get observedAttributes() {
    return ["selected"];
  }
  get docOrShadowRoot() {
    let returnNode = this;
    while (returnNode && (returnNode == null ? void 0 : returnNode.nodeType) !== Node.DOCUMENT_FRAGMENT_NODE) {
      returnNode = returnNode.parentNode;
    }
    return (returnNode == null ? void 0 : returnNode.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? returnNode : document;
  }
  get selected() {
    return [...this.tabPanels].findIndex(
      (panel) => !panel.hasAttribute("hidden")
    );
  }
  set selected(idx) {
    if (this.tabPanels.length > idx) {
      this.setActiveTab([...this.tabPanels][idx].id);
    }
  }
  get tabsPropperties() {
    const tabStripTabs = this.shadowRoot.querySelector(
      ".tabs--tabstrip-tabs"
    );
    const tabs = tabStripTabs.querySelectorAll("#TabStrip > *");
    const tabStripTabsRect = tabStripTabs.getBoundingClientRect();
    let total = 0;
    if (tabs.length > 0) {
      const first = tabs[0].getBoundingClientRect().left;
      const last = tabs[tabs.length - 1].getBoundingClientRect().right;
      total = last - first;
    }
    let maxOffset = Math.round(total - tabStripTabsRect.width);
    maxOffset = maxOffset < 0 ? 0 : -1 * maxOffset;
    return {
      left: tabStripTabsRect.left,
      maxOffset,
      totalWidth: total,
      width: tabStripTabsRect.width
    };
  }
  get description() {
    return this.getAttribute("description") || "";
  }
};
_resizeTimout = new WeakMap();
_isReszing = new WeakMap();
_offset = new WeakMap();
_hashChangeEventHandler = new WeakMap();
_attachEventListeners = new WeakMap();
_detachEventListeners = new WeakMap();
_onTabPrevClick = new WeakMap();
_onTabNextClick = new WeakMap();
_focusOnActiveTab = new WeakMap();
_checkScrollPosition = new WeakMap();
_onResize = new WeakMap();
_resizeEventHandler = new WeakMap();
_showHideScrollIndicators = new WeakMap();
_scrollActiveTabIntoView = new WeakMap();
_scrollTabPanelTo = new WeakMap();
_onKeyDown5 = new WeakMap();
_onTabsClick = new WeakMap();
_isPanelActive = new WeakMap();
PGGMTab.style = tab_default;
PGGMTab = __decorateClass([
  CustomElementConfig({
    tagName: "pggm-tab"
  })
], PGGMTab);

// ../packages/textarea/src/textarea.css
var textarea_default = "textarea[is=pggm-textarea] {\n  --pggm-textarea-border-width: var(--pggm-text-input-border-width);\n  --pggm-textarea-border-radius: var(--pggm-text-input-border-radius);\n  --pggm-textarea-active-border-width: var(--pggm-text-input-active-border-width);\n  --pggm-textarea-invalid-border-width: var(--pggm-text-input-invalid-border-width);\n  --pggm-textarea-padding-inline-start: var(--pggm-text-input-padding-inline-start);\n  --pggm-textarea-padding-inline-end: var(--pggm-text-input-padding-inline-end);\n  --pggm-textarea-max-inline-size: var(--pggm-text-input-max-inline-size);\n  --pggm-textarea-content-font-family: var(--pggm-text-input-content-font-family);\n  --pggm-textarea-content-font-weight: var(--pggm-text-input-content-font-weight);\n  --pggm-textarea-content-font-size: var(--pggm-text-input-content-font-size);\n  --pggm-textarea-content-line-height: 1.5;\n  --pggm-textarea-border-color: var(--pggm-text-input-border-color);\n  --pggm-textarea-border-width: var(--pggm-text-input-border-width);\n  --pggm-textarea-color: var(--pggm-text-input-color);\n  --pggm-textarea-padding-block-start: var(--pggm-text-input-padding-block-start);\n  --pggm-textarea-padding-block-end: var(--pggm-text-input-padding-block-end);\n  --pggm-textarea-hover-background-color: var(--pggm-text-input-hover-background-color);\n  --pggm-textarea-hover-border-color: var(--pggm-text-input-hover-border-color);\n  --pggm-textarea-hover-color: var(--pggm-text-input-hover-color);\n  --pggm-textarea-active-border-width: var(--pggm-text-input-active-border-width);\n  --pggm-textarea-active-background-color: var(--pggm-text-input-active-background-color);\n  --pggm-textarea-active-border-color: var(--pggm-text-input-active-border-color);\n  --pggm-textarea-active-color: var(--pggm-text-input-active-color);\n  --pggm-textarea-invalid-background-color: var(--pggm-text-input-invalid-background-color);\n  --pggm-textarea-invalid-border-color: var(--pggm-text-input-invalid-border-color);\n  --pggm-textarea-invalid-color: var(--pggm-text-input-invalid-color);\n  --pggm-textarea-disabled-background-color: var(--pggm-text-input-disabled-background-color);\n  --pggm-textarea-disabled-border-color: var(--pggm-text-input-disabled-border-color);\n  --pggm-textarea-disabled-color: var(--pggm-text-input-disabled-color);\n  --pggm-textarea-read-only-background-color: var(--pggm-text-input-read-only-background-color);\n  --pggm-textarea-read-only-border-color: var(--pggm-text-input-read-only-border-color);\n  --pggm-textarea-read-only-color: var(--pggm-text-input-read-only-color);\n  --border-width-max: max( var(--pggm-textarea-border-width), var(--pggm-textarea-active-border-width), var(--pggm-textarea-invalid-border-width) );\n  --border-width-difference: 0;\n  --padding-inline: calc( var(--pggm-textarea-padding-inline-start) + var(--pggm-textarea-padding-inline-end) );\n  all: unset;\n  display: block;\n  border-style: solid;\n  width: min(calc(100% - var(--padding-inline)), calc(var(--pggm-textarea-max-inline-size) - var(--padding-inline)));\n  font-family: var(--pggm-textarea-content-font-family);\n  font-weight: var(--pggm-textarea-content-font-weight);\n  font-size: var(--pggm-textarea-content-font-size);\n  line-height: 1.5;\n  line-height: var(--pggm-textarea-content-line-height);\n  border-color: var(--pggm-textarea-border-color);\n  outline: none;\n  border-radius: calc(var(--pggm-textarea-border-radius) - 0);\n  border-radius: calc(var(--pggm-textarea-border-radius) - var(--border-width-difference));\n  border-width: var(--pggm-textarea-border-width);\n  margin: 0;\n  margin: var(--border-width-difference);\n  color: var(--pggm-textarea-color);\n  padding-top: var(--pggm-textarea-padding-block-start);\n  padding-bottom: var(--pggm-textarea-padding-block-end);\n  padding-left: var(--pggm-textarea-padding-inline-start);\n  padding-right: var(--pggm-textarea-padding-inline-end);\n  -webkit-transition:\n    background-color var(--transition-duration),\n    border-color var(--transition-duration),\n    color var(--transition-duration);\n  transition:\n    background-color var(--transition-duration),\n    border-color var(--transition-duration),\n    color var(--transition-duration);\n  resize: both;\n}\ntextarea[is=pggm-textarea]:hover {\n  background-color: var(--pggm-textarea-hover-background-color);\n  border-color: var(--pggm-textarea-hover-border-color);\n  color: var(--pggm-textarea-hover-color);\n}\ntextarea[is=pggm-textarea]:focus:not([disabled]) {\n  --border-width-difference: calc( var(--pggm-textarea-border-width) - var(--pggm-textarea-active-border-width) );\n  background-color: var(--pggm-textarea-active-background-color);\n  border-color: var(--pggm-textarea-active-border-color);\n  color: var(--pggm-textarea-active-color);\n  border-width: var(--pggm-textarea-active-border-width);\n}\ntextarea[is=pggm-textarea][aria-invalid=true],\ntextarea[is=pggm-textarea]:user-invalid {\n  --border-width-difference: calc( var(--pggm-textarea-border-width) - var(--pggm-textarea-invalid-border-width) );\n  background-color: var(--pggm-textarea-invalid-background-color);\n  border-color: var(--pggm-textarea-invalid-border-color);\n  color: var(--pggm-textarea-invalid-color);\n  border-width: var(--pggm-textarea-invalid-border-width);\n}\ntextarea[is=pggm-textarea][disabled] {\n  cursor: not-allowed;\n  background-color: var(--pggm-textarea-disabled-background-color);\n  border-color: var(--pggm-textarea-disabled-border-color);\n  color: var(--pggm-textarea-disabled-color);\n}\ntextarea[is=pggm-textarea]:-moz-read-only,\ntextarea[is=pggm-textarea]:-moz-read-only:focus {\n  background-color: var(--pggm-textarea-read-only-background-color);\n  border-color: var(--pggm-textarea-read-only-border-color);\n  color: var(--pggm-textarea-read-only-color);\n}\ntextarea[is=pggm-textarea]:read-only,\ntextarea[is=pggm-textarea]:read-only:focus {\n  background-color: var(--pggm-textarea-read-only-background-color);\n  border-color: var(--pggm-textarea-read-only-border-color);\n  color: var(--pggm-textarea-read-only-color);\n}\n";

// ../packages/textarea/src/textarea.tsx
var PGGMTextArea = class extends HTMLTextAreaElement {
  connectedCallback() {
    addStyleToShadowRoot(this.getRootNode(), textarea_default, PGGMTextArea.TAG_NAME);
  }
};
PGGMTextArea.TAG_NAME = "pggm-textarea";
PGGMTextArea = __decorateClass([
  CustomElementConfig({
    tagName: PGGMTextArea.TAG_NAME,
    options: {
      extends: "textarea"
    }
  })
], PGGMTextArea);

// ../packages/tooltip/src/tooltip.css
var tooltip_default = ":host {\n  position: fixed;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  --_max-width: var(--pggm-tooltip-max-width, 364px);\n}\n.tooltip {\n  --tooltip-offset: var(--pggm-tooltip-offset, 16px);\n  opacity: 0;\n  font-family: var(--pggm-tooltip-font-family);\n  font-weight: var(--pggm-tooltip-font-weight);\n  line-height: var(--pggm-tooltip-line-height);\n  margin: 0;\n  -webkit-box-shadow: var(--pggm-tooltip-box-shadow);\n  box-shadow: var(--pggm-tooltip-box-shadow);\n  padding: var(--pggm-tooltip-padding-block-start) var(--pggm-tooltip-padding-inline-start) var(--pggm-tooltip-padding-block-end) var(--pggm-tooltip-padding-inline-end);\n  color: var(--pggm-tooltip-color);\n  background-color: var(--pggm-tooltip-background-color);\n  border: 0;\n  border-radius: var(--pggm-tooltip-border-radius);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: min(calc(100vw - 32px), var(--_max-width));\n  position: fixed;\n  left: var(--x);\n  top: var(--y);\n}\n[popover] {\n  display: none;\n}\n[popover].\\:popover-open {\n  display: block;\n}\n[popover]:popover-open {\n  display: block;\n}\n::slotted(:first-child) {\n  margin-top: 0;\n}\n::slotted(:last-child) {\n  margin-bottom: 0;\n}\n";

// ../packages/tooltip/src/tooltip.tsx
var _isMouseOver, _isFocused, _isMouseClick, _triggerElement2, __popoverElement, _PGGMTooltip_instances, findElement_fn, popoverElement_get, _onFocusHandler, _onBlurHandler, _onMouseenterHandler, _onMouseleaveHandler, _onClickHandler, _animateOpen;
var PGGMTooltip = class extends CustomElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _PGGMTooltip_instances);
    __privateAdd(this, _isMouseOver, false);
    __privateAdd(this, _isFocused, false);
    __privateAdd(this, _isMouseClick, false);
    __privateAdd(this, _triggerElement2, null);
    __privateAdd(this, __popoverElement, null);
    __privateAdd(this, _onFocusHandler, () => {
      __privateSet(this, _isFocused, true);
      setTimeout(() => {
        if (__privateGet(this, _isFocused)) {
          this.open = true;
        }
      }, 800);
    });
    __privateAdd(this, _onBlurHandler, () => {
      __privateSet(this, _isFocused, false);
      setTimeout(() => {
        if (!__privateGet(this, _isMouseOver) && !__privateGet(this, _isMouseClick) && !__privateGet(this, _isFocused)) {
          this.hide();
        }
      }, 1e3);
    });
    __privateAdd(this, _onMouseenterHandler, () => {
      __privateSet(this, _isMouseOver, true);
      setTimeout(() => {
        if (__privateGet(this, _isMouseOver)) {
          this.open = true;
        }
      }, 800);
    });
    __privateAdd(this, _onMouseleaveHandler, () => {
      __privateSet(this, _isMouseOver, false);
      setTimeout(() => {
        if (!__privateGet(this, _isMouseOver) && !__privateGet(this, _isMouseClick)) {
          this.hide();
        }
      }, 800);
    });
    __privateAdd(this, _onClickHandler, (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (__privateGet(this, _isMouseOver)) {
        requestAnimationFrame(() => {
          __privateSet(this, _isMouseOver, false);
          __privateSet(this, _isFocused, false);
          __privateSet(this, _isMouseClick, true);
          this.open = true;
        });
      } else {
        this.open = !this.open;
      }
    });
    this.show = () => __async(this, null, function* () {
      if (!__privateGet(this, __popoverElement)) {
        __privateSet(this, __popoverElement, yield __privateGet(this, _PGGMTooltip_instances, popoverElement_get));
      }
      __privateGet(this, __popoverElement).showPopover();
      if (!this.open) {
        this.open = true;
        __privateGet(this, _animateOpen).call(this);
      }
    });
    __privateAdd(this, _animateOpen, () => {
      const popoverElement = __privateGet(this, __popoverElement);
      const offsetValue = parseInt(getComputedStyle(popoverElement).getPropertyValue("--tooltip-offset"), 10);
      computePosition2(__privateGet(this, _triggerElement2), popoverElement, {
        placement: "top",
        strategy: "fixed",
        middleware: [flip2(), offset2(offsetValue)]
      }).then(({ x, y }) => {
        if (x < 0) {
          x = 0;
        }
        popoverElement.style.setProperty("--x", `${x}px`);
        popoverElement.style.setProperty("--y", `${y}px`);
        const openAnimation = popoverElement.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          {
            duration: 300,
            easing: "cubic-bezier(0.42, 0, 1, 1)"
          }
        );
        openAnimation.onfinish = () => {
          popoverElement.style.opacity = "1";
        };
      });
    });
    this.hide = () => __async(this, null, function* () {
      __privateSet(this, _isMouseClick, false);
      if (!__privateGet(this, __popoverElement)) {
        __privateSet(this, __popoverElement, yield __privateGet(this, _PGGMTooltip_instances, popoverElement_get));
      }
      __privateGet(this, __popoverElement).style.opacity = "0";
      __privateGet(this, __popoverElement).hidePopover();
      if (this.open) {
        this.open = false;
      }
    });
    this.onTooltipCreate = (e) => {
      e.setAttribute("popover", "");
      e.addEventListener("toggle", (e2) => {
        if (e2.newState === "closed") {
          this.open = false;
        } else if (e2.newState === "open") {
          this.open = true;
          __privateGet(this, _animateOpen).call(this);
        }
      });
    };
    this.render = () => {
      return /* @__PURE__ */ Maquette.h("div", { class: "tooltip", afterCreate: this.onTooltipCreate }, /* @__PURE__ */ Maquette.h("slot", null));
    };
  }
  get open() {
    return this.hasAttribute("open");
  }
  set open(value) {
    if (value) {
      if (!this.hasAttribute("open")) {
        this.setAttribute("open", "");
      }
      this.show();
    } else {
      if (this.hasAttribute("open")) {
        this.removeAttribute("open");
      }
      this.hide();
    }
  }
  get for() {
    return __privateGet(this, _triggerElement2);
  }
  set for(v) {
    var _a4, _b, _c;
    let value = v;
    if (typeof value === "string") {
      value = __privateMethod(this, _PGGMTooltip_instances, findElement_fn).call(this, value);
    }
    if (!this.id) {
      this.id = `Tooltip${Math.random().toString(36).slice(-6)}`;
    }
    if (__privateGet(this, _triggerElement2) === value) {
      return;
    }
    const prevElem = __privateGet(this, _triggerElement2);
    if (prevElem) {
      (_a4 = __privateGet(this, _triggerElement2)) == null ? void 0 : _a4.removeAttribute("popovertarget");
      prevElem.removeEventListener("click", __privateGet(this, _onClickHandler));
    }
    __privateSet(this, _triggerElement2, value);
    if (value) {
      (_b = __privateGet(this, _triggerElement2)) == null ? void 0 : _b.setAttribute("aria-describedby", this.id);
      (_c = __privateGet(this, _triggerElement2)) == null ? void 0 : _c.setAttribute("popovertarget", this.id);
      if (__privateGet(this, _triggerElement2)) {
        this.addEventHandlers(__privateGet(this, _triggerElement2));
      }
    }
  }
  addEventHandlers(elm) {
    elm.addEventListener("click", __privateGet(this, _onClickHandler));
    elm.addEventListener("focus", __privateGet(this, _onFocusHandler));
    elm.addEventListener("blur", __privateGet(this, _onBlurHandler));
    elm.addEventListener("mouseenter", __privateGet(this, _onMouseenterHandler));
    elm.addEventListener("mouseleave", __privateGet(this, _onMouseleaveHandler));
  }
  connectedCallback() {
    super.connectedCallback();
    requestAnimationFrame(() => {
      const forAttr = this.getAttribute("for");
      if (forAttr) {
        this.for = forAttr;
      }
      this.addEventListener("focus", __privateGet(this, _onFocusHandler));
      this.addEventListener("blur", __privateGet(this, _onBlurHandler));
      this.addEventListener("mouseenter", __privateGet(this, _onMouseenterHandler));
      this.addEventListener("mouseleave", __privateGet(this, _onMouseleaveHandler));
      window.addEventListener("scroll", this.hide);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("focus", __privateGet(this, _onFocusHandler));
    this.removeEventListener("blur", __privateGet(this, _onBlurHandler));
    this.removeEventListener("mouseenter", __privateGet(this, _onMouseenterHandler));
    this.removeEventListener("mouseleave", __privateGet(this, _onMouseleaveHandler));
    window.removeEventListener("scroll", this.hide);
  }
  onAttributeChange(name, oldValue, newValue) {
    if (name === "open") {
      this.open = newValue !== null;
    } else if (name === "for") {
      this.for = newValue;
    }
  }
};
_isMouseOver = new WeakMap();
_isFocused = new WeakMap();
_isMouseClick = new WeakMap();
_triggerElement2 = new WeakMap();
__popoverElement = new WeakMap();
_PGGMTooltip_instances = new WeakSet();
findElement_fn = function(id2) {
  const root = this.getRootNode();
  if (!root) {
    return null;
  }
  return root.querySelector(`#${id2}`);
};
popoverElement_get = function() {
  return new Promise((resolve) => {
    const waitForElement = () => {
      var _a4;
      const popoverElement = (_a4 = this.shadowRoot) == null ? void 0 : _a4.querySelector(".tooltip");
      if (popoverElement) {
        resolve(popoverElement);
      }
      setTimeout(waitForElement, 30);
    };
    waitForElement();
  });
};
_onFocusHandler = new WeakMap();
_onBlurHandler = new WeakMap();
_onMouseenterHandler = new WeakMap();
_onMouseleaveHandler = new WeakMap();
_onClickHandler = new WeakMap();
_animateOpen = new WeakMap();
PGGMTooltip.style = tooltip_default;
PGGMTooltip.observedAttributes = ["open", "for"];
PGGMTooltip = __decorateClass([
  CustomElementConfig({ tagName: "pggm-tooltip" })
], PGGMTooltip);

// ../packages/unordered-list/src/unordered-list.css
var unordered_list_default = "ul[is=pggm-unordered-list],\nul[is=pggm-unordered-list] > li {\n  all: revert;\n  padding: 0 0 0 1em;\n}\nul[is=pggm-unordered-list],\nul[is=pggm-unordered-list][marker=disc] {\n  list-style: disc outside;\n}\nul[is=pggm-unordered-list][marker=circle] {\n  list-style: circle outside;\n}\nul[is=pggm-unordered-list] > li::marker {\n  color: var(--pggm-unordered-list-marker-border-color);\n}\n";

// ../packages/unordered-list/src/unordered-list.tsx
var PGGMUnorderdList = class extends HTMLUListElement {
  connectedCallback() {
    return __async(this, null, function* () {
      addStyleToShadowRoot(
        this.getRootNode(),
        unordered_list_default,
        PGGMUnorderdList.TAG_NAME
      );
    });
  }
};
PGGMUnorderdList.TAG_NAME = "pggm-unordered-list";
PGGMUnorderdList = __decorateClass([
  CustomElementConfig({
    tagName: PGGMUnorderdList.TAG_NAME,
    options: {
      extends: "ul"
    }
  })
], PGGMUnorderdList);
export {
  PGGMAccordion,
  PGGMAlert,
  PGGMAnchorButton,
  PGGMButton,
  PGGMCalendar,
  PGGMCheckbox,
  PGGMCheckboxGroup,
  PGGMDialog,
  PGGMErrorMessage,
  PGGMFieldset,
  PGGMFileUpload,
  PGGMHeading,
  PGGMIcon,
  PGGMInput,
  PGGMLabel,
  PGGMLink,
  PGGMRadio,
  PGGMRadioGroup,
  PGGMSelect,
  PGGMSwitch,
  PGGMTab,
  PGGMTextArea,
  PGGMTooltip,
  PGGMUnorderdList
};
