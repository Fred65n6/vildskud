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
  default: () => Om_os,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_3be38542 = require("../../chunks/index-3be38542.js");
var import_Header_d0125708 = require("../../chunks/Header-d0125708.js");
const browser = false;
const dev = false;
const hydrate = dev;
const router = browser;
const prerender = true;
const Om_os = (0, import_index_3be38542.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_3be38542.v)(import_Header_d0125708.H, "Header").$$render($$result, {}, {}, {})}

${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<div class="${"content"}"><h1>Om os</h1>
</div>`;
});
