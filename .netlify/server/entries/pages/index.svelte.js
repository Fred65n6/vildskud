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
var footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-kjspyr{display:grid;justify-items:center;grid-template-columns:1fr 1fr 1fr;gap:40px;padding-block:2rem;padding-inline:10rem;width:100%;border-top:solid 2px black}.container.svelte-kjspyr{display:grid;gap:20px}@media(max-width: 650px){footer.svelte-kjspyr{display:grid;grid-template-columns:1fr;justify-items:center;padding-inline:5rem}.container.svelte-kjspyr{display:flex;gap:50px}}",
  map: null
};
const Footer = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-kjspyr"}"><div class="${"container svelte-kjspyr"}"><div class="${""}"><img class="${"w-32"}" src="${"footer_logo.svg"}" alt="${"logo"}"></div>
		<div class="${"grid "}"><h2>Arkiver</h2>
			<a href="${"/"}">S\xE6son 2019</a>
			<a href="${"/"}">S\xE6son 2020</a></div></div>

	<div class="${"container svelte-kjspyr"}"><div class="${""}"><h2>Kontakt</h2>
			<p>Kontakt os <a class="${"underline"}" href="${"/"}">her</a></p></div>
		<div class="${"grid "}"><h2>Politker</h2>
			<a href="${"/"}">Privatlivspolitik</a>
			<a href="${"/"}">Cookiepolitik</a></div></div>

	<div class="${"container svelte-kjspyr"}"><div class="${""}"><h2>V\xE6r social med os</h2>
			<p>Vil du gerne v\xE6re den f\xF8rste til at h\xF8re, n\xE5r der sker noget nyt for Vildskud? S\xE5 f\xF8lg os p\xE5
				vores SoMe kanaler:
			</p>
			<br>

			<img class="${"w-52"}" src="${"social_icons.svg"}" alt="${""}"></div></div>
</footer>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "#hero.svelte-adzhzv.svelte-adzhzv{background-image:url('../../static/hero_bg.svg');background-image:url('hero_bg.svg');width:100%;background-repeat:no-repeat;background-size:cover;display:grid;place-items:center;padding-bottom:2rem}.container.svelte-adzhzv.svelte-adzhzv{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}img.svelte-adzhzv.svelte-adzhzv{width:25rem;margin-block:5.5rem}.knapper.svelte-adzhzv.svelte-adzhzv{display:grid;gap:1rem;padding-bottom:1rem}a.svelte-adzhzv.svelte-adzhzv:hover{color:black}#hero.svelte-adzhzv button.svelte-adzhzv{color:white;border:solid 2px white}button.svelte-adzhzv.svelte-adzhzv{text-transform:uppercase;color:black;border:solid 2px black;border-radius:40px/24px;padding-block:0.5rem;width:20rem}@media(min-width: 650px){img.svelte-adzhzv.svelte-adzhzv{margin-block:7.4rem}.knapper.svelte-adzhzv.svelte-adzhzv{display:flex;padding-bottom:2rem}}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<div id="${"hero"}" class="${"svelte-adzhzv"}"><div class="${"container svelte-adzhzv"}">${(0, import_index_8f0b34dd.v)(import_Header_990198ac.H, "Header").$$render($$result, {}, {}, {})}
		<img src="${"hero_logo.svg"}" alt="${"logo"}" class="${"svelte-adzhzv"}">
		<div class="${"knapper svelte-adzhzv"}"><button class="${"svelte-adzhzv"}"><a sveltekit:prefetch href="${"forestillinger"}" class="${"svelte-adzhzv"}">Forestillinger &amp; events \u2192</a></button>
			<button class="${"svelte-adzhzv"}"><a sveltekit:prefetch href="${"forestillinger"}" class="${"svelte-adzhzv"}">Billetter \u2192</a></button></div>
		<p class="${"text-center text-white"}">2. - 3. - 4. - 5. - 6. <br>AUGUST 2020</p></div></div>

<section><h2>Forestillinger <span>&amp; events</span></h2>
	<div class="${"grid md:grid-cols-2 place-items-center"}"><div class="${""}"><img src="${"billetter.svg"}" alt="${""}" class="${"svelte-adzhzv"}"></div>
		<div class="${"grid place-items-center gap-16 px-12"}"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ut perspiciatis veritatis
				aliquid. Repellat quisquam ex commodi itaque expedita? Quod at, in totam facilis nesciunt
				sapiente voluptatibus, iste culpa voluptatum est iure dolores odit enim, earum
				exercitationem! Pariatur, veniam quos.
			</p>
			<button class="${"svelte-adzhzv"}"><a sveltekit:prefetch href="${"forestillinger"}" class="${"svelte-adzhzv"}">Billetter \u2192</a></button></div></div></section>

${(0, import_index_8f0b34dd.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
