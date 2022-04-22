var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["Billede_JUKS.jpg", "billetter.svg", "favicon.png", "footer_logo.svg", "hero_bg.svg", "hero_logo.svg", "mona-lisa-natten.jpg", "panta-reje.jpg", "robots.txt", "skammer_du_dig_nu.jpg", "social_icons.svg", "svelte-welcome.png", "svelte-welcome.webp", "teater-tunge-tasker.jpg", "vildskud_logo.svg", "wish.jpg"]),
  mimeTypes: { ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".png": "image/png", ".txt": "text/plain", ".webp": "image/webp" },
  _: {
    entry: { "file": "start-9eae3311.js", "js": ["start-9eae3311.js", "chunks/index-f6c6bd2d.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "footer",
        pattern: /^\/footer\/?$/,
        names: [],
        types: [],
        path: "/footer",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "forestillinger",
        pattern: /^\/forestillinger\/?$/,
        names: [],
        types: [],
        path: "/forestillinger",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "om_os",
        pattern: /^\/om_os\/?$/,
        names: [],
        types: [],
        path: "/om_os",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "oversigt",
        pattern: /^\/oversigt\/?$/,
        names: [],
        types: [],
        path: "/oversigt",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "praktisk",
        pattern: /^\/praktisk\/?$/,
        names: [],
        types: [],
        path: "/praktisk",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "vaer_med",
        pattern: /^\/vaer_med\/?$/,
        names: [],
        types: [],
        path: "/vaer_med",
        shadow: null,
        a: [0, 8],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
