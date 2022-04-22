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
  default: () => Routes,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_8f0b34dd = require("../../chunks/index-8f0b34dd.js");
var import_Header_990198ac = require("../../chunks/Header-990198ac.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "#hero.svelte-r2y29f.svelte-r2y29f{background-image:url('hero_bg.svg');width:100%;background-repeat:no-repeat;background-size:cover;display:grid;place-items:center;padding-bottom:2rem}.container.svelte-r2y29f.svelte-r2y29f{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}img.svelte-r2y29f.svelte-r2y29f{width:25rem;margin-block:5.5rem}.knapper.svelte-r2y29f.svelte-r2y29f{display:grid;gap:1rem;padding-bottom:1rem}a.svelte-r2y29f.svelte-r2y29f:hover{color:black}#hero.svelte-r2y29f button.svelte-r2y29f{color:white;border:solid 2px white}button.svelte-r2y29f.svelte-r2y29f{text-transform:uppercase;color:black;border:solid 2px black;border-radius:40px/24px;padding-block:0.5rem;width:20rem}@media(min-width: 650px){img.svelte-r2y29f.svelte-r2y29f{margin-block:7.4rem}.knapper.svelte-r2y29f.svelte-r2y29f{display:flex;padding-bottom:2rem}}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<div id="${"hero"}" class="${"svelte-r2y29f"}"><div class="${"container svelte-r2y29f"}">${(0, import_index_8f0b34dd.v)(import_Header_990198ac.H, "Header").$$render($$result, {}, {}, {})}
		<img src="${"hero_logo.svg"}" alt="${"logo"}" class="${"svelte-r2y29f"}">
		<div class="${"knapper svelte-r2y29f"}"><button class="${"svelte-r2y29f"}"><a sveltekit:prefetch href="${"forestillinger"}" class="${"svelte-r2y29f"}">Forestillinger &amp; events \u2192</a></button>
			<button class="${"svelte-r2y29f"}"><a sveltekit:prefetch href="${"forestillinger"}" class="${"svelte-r2y29f"}">Billetter \u2192</a></button></div>
		<p class="${"text-center text-white"}">2. - 3. - 4. - 5. - 6. <br>AUGUST 2020</p></div></div>

<section><h2>Forestillinger <span>&amp; events</span></h2>
	<div class="${"grid md:grid-cols-2 place-items-center"}"><div class="${""}"><img src="${"billetter.svg"}" alt="${""}" class="${"svelte-r2y29f"}"></div>
		<div class="${"grid place-items-center gap-16 px-12"}"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ut perspiciatis veritatis
				aliquid. Repellat quisquam ex commodi itaque expedita? Quod at, in totam facilis nesciunt
				sapiente voluptatibus, iste culpa voluptatum est iure dolores odit enim, earum
				exercitationem! Pariatur, veniam quos.
			</p>
			<button class="${"svelte-r2y29f"}"><a sveltekit:prefetch href="${"forestillinger"}" class="${"svelte-r2y29f"}">Billetter \u2192</a></button></div></div>
</section>`;
});
