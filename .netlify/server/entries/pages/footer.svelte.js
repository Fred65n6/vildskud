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
  default: () => Footer
});
module.exports = __toCommonJS(stdin_exports);
var import_index_8f0b34dd = require("../../chunks/index-8f0b34dd.js");
var footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-kjspyr{display:grid;justify-items:center;grid-template-columns:1fr 1fr 1fr;gap:40px;padding-block:2rem;padding-inline:10rem;width:100%;border-top:solid 2px black}.container.svelte-kjspyr{display:grid;gap:20px}@media(max-width: 650px){footer.svelte-kjspyr{display:grid;grid-template-columns:1fr;justify-items:center;padding-inline:5rem}.container.svelte-kjspyr{display:flex;gap:50px}}",
  map: null
};
const Footer = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-kjspyr"}"><div class="${"container svelte-kjspyr"}"><div class="${""}"><img class="${"w-32"}" src="${"footer_logo.svg"}" alt="${"logo"}"></div>
		<div class="${"grid "}"><h2>Arkiver</h2>
			<a href="${"/*"}">S\xE6son 2019</a>
			<a href="${"/*"}">S\xE6son 2020</a></div></div>

	<div class="${"container svelte-kjspyr"}"><div class="${""}"><h2>Kontakt</h2>
			<p>Kontakt os <a class="${"underline"}" href="${"/*"}">her</a></p></div>
		<div class="${"grid "}"><h2>Politker</h2>
			<a href="${"/*"}">Privatlivspolitik</a>
			<a href="${"/*"}">Cookiepolitik</a></div></div>

	<div class="${"container svelte-kjspyr"}"><div class="${""}"><h2>V\xE6r social med os</h2>
			<p>Vil du gerne v\xE6re den f\xF8rste til at h\xF8re, n\xE5r der sker noget nyt for Vildskud? S\xE5 f\xF8lg os p\xE5
				vores SoMe kanaler:
			</p>
			<br>

			<img class="${"w-52"}" src="${"social_icons.svg"}" alt="${""}"></div></div>
</footer>`;
});
