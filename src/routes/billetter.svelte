<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import Header from '../lib/header/Header_2.svelte';
	import Footer from '../lib/footer.svelte';
</script>

<Header />

<svelte:head>
	<title>About</title>
</svelte:head>

<section>
	<h1>billetter <span>og priser</span></h1>
	<div class="container">
		<div class="box">
			<img src="endags_billet.svg" alt="endags_billet" />
			<button>Køb billet →</button>
		</div>
		<div class="box">
			<img src="partout_billet.svg" alt="endags_billet" />
			<button>Køb billet →</button>
		</div>
	</div>
</section>

<Footer />

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
	}

	.box {
		display: grid;
		place-items: center;
		margin-block: 2rem;
	}

	button {
		text-transform: uppercase;
		color: black;
		border: solid 2px black;
		border-radius: 40px/24px;
		padding-block: 0.5rem;
		width: 20rem;
		margin: 2rem;
	}

	img {
		width: 50%;
	}

	@media (min-width: 650px) {
		.container {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
