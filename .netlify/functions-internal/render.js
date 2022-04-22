const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["Billede_JUKS.jpg","billetter.svg","favicon.png","footer_logo.svg","hero_bg.svg","hero_logo.svg","mona-lisa-natten.jpg","panta-reje.jpg","robots.txt","skammer_du_dig_nu.jpg","social_icons.svg","svelte-welcome.png","svelte-welcome.webp","teater-tunge-tasker.jpg","vildskud_logo.svg","wish.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-9eae3311.js","js":["start-9eae3311.js","chunks/index-f6c6bd2d.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "footer",
				pattern: /^\/footer\/?$/,
				names: [],
				types: [],
				path: "/footer",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
