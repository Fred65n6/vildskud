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
  H: () => Header
});
module.exports = __toCommonJS(stdin_exports);
var import_index_3be38542 = require("./index-3be38542.js");
const getStores = () => {
  const stores = (0, import_index_3be38542.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo = "/_app/assets/svelte-logo-87df40b8.svg";
const css = {
  code: ".corner.svelte-1lc6q99.svelte-1lc6q99.svelte-1lc6q99{width:3em;height:3em}.corner.svelte-1lc6q99 a.svelte-1lc6q99.svelte-1lc6q99{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-1lc6q99 img.svelte-1lc6q99.svelte-1lc6q99{width:2em;height:2em;object-fit:contain;position:static;z-index:3}nav.svelte-1lc6q99.svelte-1lc6q99.svelte-1lc6q99{width:100%;display:flex;justify-content:space-between;background-color:white;padding-inline:2rem}ul.svelte-1lc6q99.svelte-1lc6q99.svelte-1lc6q99{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background-size:contain}.desktop-menu.svelte-1lc6q99 li.svelte-1lc6q99.svelte-1lc6q99{position:relative;height:100%}nav.svelte-1lc6q99 a.svelte-1lc6q99.svelte-1lc6q99{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1lc6q99.svelte-1lc6q99.svelte-1lc6q99:hover{color:var(--accent-color)}.hamburger-menu.svelte-1lc6q99 li.svelte-1lc6q99.svelte-1lc6q99{padding:1rem}#menu__toggle.svelte-1lc6q99.svelte-1lc6q99.svelte-1lc6q99{opacity:0}#menu__toggle.svelte-1lc6q99:checked~.menu__btn.svelte-1lc6q99>span.svelte-1lc6q99{transform:rotate(45deg)}#menu__toggle.svelte-1lc6q99:checked~.menu__btn.svelte-1lc6q99>span.svelte-1lc6q99::before{top:0;transform:rotate(0)}#menu__toggle.svelte-1lc6q99:checked~.menu__btn.svelte-1lc6q99>span.svelte-1lc6q99::after{top:0;transform:rotate(90deg)}#menu__toggle.svelte-1lc6q99:checked~.menu__box.svelte-1lc6q99.svelte-1lc6q99{visibility:visible;right:0}.menu__btn.svelte-1lc6q99.svelte-1lc6q99.svelte-1lc6q99{display:flex;align-items:center;position:absolute;top:10px;right:20px;width:26px;height:26px;cursor:pointer;z-index:1}.menu__btn.svelte-1lc6q99>span.svelte-1lc6q99.svelte-1lc6q99,.menu__btn.svelte-1lc6q99>span.svelte-1lc6q99.svelte-1lc6q99::before,.menu__btn.svelte-1lc6q99>span.svelte-1lc6q99.svelte-1lc6q99::after{display:block;position:absolute;width:100%;height:2.5px;border-radius:12px;background-color:#1c1c1c;transition-duration:0.25s}.menu__btn.svelte-1lc6q99>span.svelte-1lc6q99.svelte-1lc6q99::before{content:'';top:-8px}.menu__btn.svelte-1lc6q99>span.svelte-1lc6q99.svelte-1lc6q99::after{content:'';top:8px}.menu__box.svelte-1lc6q99.svelte-1lc6q99.svelte-1lc6q99{display:flex;flex-direction:column;position:fixed;visibility:hidden;top:0;right:-100%;width:100%;height:100%;margin:0;padding:80px 0;list-style:none;background-color:white;box-shadow:1px 0px 6px rgba(0, 0, 0, 0.2);transition-duration:0.25s}@media(max-width: 600px){.desktop-menu.svelte-1lc6q99.svelte-1lc6q99.svelte-1lc6q99{display:none}}@media(min-width: 600px){.hamburger-menu.svelte-1lc6q99.svelte-1lc6q99.svelte-1lc6q99{display:none}}",
  map: null
};
const Header = (0, import_index_3be38542.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_3be38542.a)(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header><nav class="${"svelte-1lc6q99"}"><div class="${"corner svelte-1lc6q99"}"><a href="${"/"}" class="${"svelte-1lc6q99"}"><img${(0, import_index_3be38542.b)("src", logo, 0)} alt="${"SvelteKit"}" class="${"svelte-1lc6q99"}"></a></div>
		<div class="${"desktop-menu svelte-1lc6q99"}"><ul class="${"svelte-1lc6q99"}"><li class="${["svelte-1lc6q99", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1lc6q99"}">Home</a></li>
				<li class="${["svelte-1lc6q99", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/om_os"}" class="${"svelte-1lc6q99"}">Om os</a></li></ul></div>
		<div class="${"hamburger-menu svelte-1lc6q99"}"><input id="${"menu__toggle"}" type="${"checkbox"}" class="${"svelte-1lc6q99"}">
			<label class="${"menu__btn svelte-1lc6q99"}" for="${"menu__toggle"}"><span class="${"svelte-1lc6q99"}"></span></label>

			<ul class="${"menu__box svelte-1lc6q99"}"><li class="${["svelte-1lc6q99", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1lc6q99"}">Home</a></li>
				<li class="${["svelte-1lc6q99", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/om_os"}" class="${"svelte-1lc6q99"}">Om os</a></li></ul></div></nav>
</header>`;
});
