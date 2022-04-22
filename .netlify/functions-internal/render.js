const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["Billede_JUKS.jpg","billetter.svg","favicon.png","footer_logo.svg","hero_bg.svg","hero_logo.svg","mona-lisa-natten.jpg","panta-reje.jpg","robots.txt","skammer_du_dig_nu.jpg","social_icons.svg","svelte-welcome.png","svelte-welcome.webp","teater-tunge-tasker.jpg","vildskud_logo.svg","wish.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-1e38b51a.js","js":["start-1e38b51a.js","chunks/index-d0107eae.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
