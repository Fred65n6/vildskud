var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_3be38542 = require("../../chunks/index-3be38542.js");
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-14ep2f2{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}@media(min-width: 480px){footer.svelte-14ep2f2{padding:40px 0}}",
  map: null
};
const _layout = (0, import_index_3be38542.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-14ep2f2"}"><p>Footer</p>
</footer>`;
});
