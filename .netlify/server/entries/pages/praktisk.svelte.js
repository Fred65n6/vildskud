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
  default: () => Praktisk,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_8f0b34dd = require("../../chunks/index-8f0b34dd.js");
var import_Header_990198ac = require("../../chunks/Header-990198ac.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const Praktisk = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_8f0b34dd.v)(import_Header_990198ac.H, "Header").$$render($$result, {}, {}, {})}

${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<div class="${"content"}"><h1>Om os</h1>
</div>`;
});
