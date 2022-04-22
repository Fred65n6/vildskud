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
var import_index_8f0b34dd = require("./index-8f0b34dd.js");
const getStores = () => {
  const stores = (0, import_index_8f0b34dd.g)("__svelte__");
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
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-yl0lqc.svelte-yl0lqc.svelte-yl0lqc{width:100%;display:grid;place-items:center;padding-inline:2rem;height:3rem}ul.svelte-yl0lqc.svelte-yl0lqc.svelte-yl0lqc{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background-size:contain}.desktop-menu.svelte-yl0lqc li.svelte-yl0lqc.svelte-yl0lqc{position:relative;height:100%}nav.svelte-yl0lqc a.svelte-yl0lqc.svelte-yl0lqc{display:flex;height:100%;align-items:center;padding:0 2em;color:white;font-weight:400;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-yl0lqc.svelte-yl0lqc.svelte-yl0lqc:hover{color:black}.hamburger-menu.svelte-yl0lqc li.svelte-yl0lqc.svelte-yl0lqc{padding:1rem;color:black}#menu__toggle.svelte-yl0lqc.svelte-yl0lqc.svelte-yl0lqc{opacity:0}#menu__toggle.svelte-yl0lqc:checked~.menu__btn.svelte-yl0lqc>span.svelte-yl0lqc{transform:rotate(45deg)}#menu__toggle.svelte-yl0lqc:checked~.menu__btn.svelte-yl0lqc>span.svelte-yl0lqc::before{top:0;transform:rotate(0)}#menu__toggle.svelte-yl0lqc:checked~.menu__btn.svelte-yl0lqc>span.svelte-yl0lqc::after{top:0;transform:rotate(90deg)}#menu__toggle.svelte-yl0lqc:checked~.menu__box.svelte-yl0lqc.svelte-yl0lqc{visibility:visible;right:0}.menu__btn.svelte-yl0lqc.svelte-yl0lqc.svelte-yl0lqc{display:flex;align-items:center;position:fixed;top:10px;right:20px;width:26px;height:26px;cursor:pointer;z-index:1}.menu__btn.svelte-yl0lqc>span.svelte-yl0lqc.svelte-yl0lqc,.menu__btn.svelte-yl0lqc>span.svelte-yl0lqc.svelte-yl0lqc::before,.menu__btn.svelte-yl0lqc>span.svelte-yl0lqc.svelte-yl0lqc::after{display:block;position:absolute;width:100%;height:2.5px;border-radius:12px;background-color:#1c1c1c;transition-duration:0.25s}.menu__btn.svelte-yl0lqc>span.svelte-yl0lqc.svelte-yl0lqc::before{content:'';top:-8px}.menu__btn.svelte-yl0lqc>span.svelte-yl0lqc.svelte-yl0lqc::after{content:'';top:8px}.menu__box.svelte-yl0lqc.svelte-yl0lqc.svelte-yl0lqc{display:flex;flex-direction:column;position:fixed;visibility:hidden;top:0;right:-100%;width:100%;height:100%;margin:0;padding:80px 0;list-style:none;background-color:#8072a8;box-shadow:1px 0px 6px rgba(0, 0, 0, 0.2);transition-duration:0.25s}@media(max-width: 600px){.desktop-menu.svelte-yl0lqc.svelte-yl0lqc.svelte-yl0lqc{display:none}a.svelte-yl0lqc.svelte-yl0lqc.svelte-yl0lqc:hover{color:#b12222}}@media(min-width: 600px){.hamburger-menu.svelte-yl0lqc.svelte-yl0lqc.svelte-yl0lqc{display:none}}",
  map: null
};
const Header = (0, import_index_8f0b34dd.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_8f0b34dd.a)(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header><nav class="${"svelte-yl0lqc"}"><div class="${"desktop-menu svelte-yl0lqc"}"><ul class="${"svelte-yl0lqc"}"><li class="${["svelte-yl0lqc", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-yl0lqc"}">Hjem</a></li>
				<li class="${["svelte-yl0lqc", $page.url.pathname === "/forestillinger" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/forestillinger"}" class="${"svelte-yl0lqc"}">Forestillinger &amp; events</a></li>
				<li class="${["svelte-yl0lqc", $page.url.pathname === "/oversigt" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/oversigt"}" class="${"svelte-yl0lqc"}">Programoversigt</a></li>
				<li class="${["svelte-yl0lqc", $page.url.pathname === "/praktisk" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/praktisk"}" class="${"svelte-yl0lqc"}">Praktisk info</a></li>
				<li class="${["svelte-yl0lqc", $page.url.pathname === "/vaer_med" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/vaer_med"}" class="${"svelte-yl0lqc"}">V\xE6r med</a></li>
				<li class="${["svelte-yl0lqc", $page.url.pathname === "/om_os" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/om_os"}" class="${"svelte-yl0lqc"}">Om os</a></li></ul></div>
		<div class="${"hamburger-menu svelte-yl0lqc"}"><input id="${"menu__toggle"}" type="${"checkbox"}" class="${"svelte-yl0lqc"}">
			<label class="${"menu__btn svelte-yl0lqc"}" for="${"menu__toggle"}"><span class="${"svelte-yl0lqc"}"></span></label>

			<ul class="${"menu__box svelte-yl0lqc"}"><li class="${["svelte-yl0lqc", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-yl0lqc"}">Hjem</a></li>
				<li class="${["svelte-yl0lqc", $page.url.pathname === "/forestillinger" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/forestillinger"}" class="${"svelte-yl0lqc"}">Forestillinger &amp; events</a></li>
				<li class="${["svelte-yl0lqc", $page.url.pathname === "/oversigt" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/oversigt"}" class="${"svelte-yl0lqc"}">Programoversigt</a></li>
				<li class="${["svelte-yl0lqc", $page.url.pathname === "/praktisk" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/praktisk"}" class="${"svelte-yl0lqc"}">Praktisk info</a></li>
				<li class="${["svelte-yl0lqc", $page.url.pathname === "/vaer_med" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/vaer_med"}" class="${"svelte-yl0lqc"}">V\xE6r med</a></li>
				<li class="${["svelte-yl0lqc", $page.url.pathname === "/om_os" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/om_os"}" class="${"svelte-yl0lqc"}">Om os</a></li></ul></div></nav>
</header>`;
});
