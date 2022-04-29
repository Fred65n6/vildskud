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
	<h1>FIND OS HER</h1>
	<img class="absolute z-10 left-44 top-[170%]  md:top-[80%] opacity-40 " src="klat_3.svg" alt="" />
	<img class="absolute right-[35%] top-[25%] z-10 opacity-40" src="klat_2.svg" alt="" />
	<img class="absolute right-40 md/top-[180%] top-[98%]  z-10 opacity-40" src="klat_7.svg" alt="" />

	<div class="container_2">
		<p>
			Du har købt en billet til Vildskud Festival eller er lige ved at købe en... men så opstår
			spørgsmålet: Hvor filan er det egentlig, at jeg kan se forestillingerne? Frygt ej! Herunder
			finder du al den info, som du har brug for for at finde frem til årets venues.
		</p>
		<br />
		<div class="container_grid">
			<div class="">
				<h2>Anemonen</h2>
				<h3>KBH K</h3>
				<p>
					- Anemonen er et Åbent Scenekunsthus i hjertet af København, der producerer scenekunst og
					lægger hus til de bedste gæstespil for børn og unge fra hele landet.
				</p>
				<div class="knapper">
					<a class="button" href="https://www.anemonen.dk/">Se hjemmesiden →</a>
					<a
						class="button"
						href="https://www.google.com/maps/dir//anemonen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4652531a8bed4311:0xad6deac9c5e0135b?sa=X&ved=2ahUKEwj0uu754Lb3AhUQQvEDHdFVBwkQ9Rd6BAg-EAU"
						>find på kort →</a
					>
				</div>
			</div>
			<div class="">
				<h2>Christianshavn beboerhus</h2>
				<h3>Christianshavn</h3>
				<p>
					- Beboerhuset er et samlingspunkt for folk på Christianshavn. Huset blivervet af
					frivillige, og huser en café, forskellige værksteder og øvelokaler.
				</p>

				<div class="knapper">
					<a class="button" href="https://www.beboerhus.dk/">Se hjemmesiden →</a>
					<a
						class="button"
						href="https://www.google.com/maps/dir//beboerhuset/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4652533f2644b35f:0x768bf0bbbb10929?sa=X&ved=2ahUKEwjTqqre4bb3AhXAQ_EDHT3PBoUQ9Rd6BAhJEAU"
						>Find på kort →</a
					>
				</div>
			</div>
			<div class="">
				<h2>Zeppelin bar</h2>
				<h3>VESTERBRO</h3>
				<p>
					- Zeppelin bar er et lille intimt spillested i hjertet af Vesterbro. Normalt ligger stedet
					scene til mange rockkoncerter i løbet af året og er kendt for sin intime atmosfære og
					dedikerede publikum.
				</p>
				<div class="knapper">
					<a class="button" href="http://zeppelincph.dk/forside/">Se hjemmesiden →</a>
					<a
						class="button"
						href="https://www.google.com/maps/dir//zeppelin+bar/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x46525374cd319f05:0x8fe3a7e6d4fd02df?sa=X&ved=2ahUKEwiG9JmB4rb3AhUESfEDHabQCvoQ9Rd6BAhEEAU"
						>Find på kort →</a
					>
				</div>
			</div>
			<div class="">
				<h2>Xenon & VOX</h2>
				<h3>KBH K</h3>
				<p>
					- Xenon og VOX er en del af Teaterhuset, som har til huse i HUSET KBH. HUSET er en
					københavnsk kulturinstitution, som igennem 50 år har lagt lokaler til utalige koncerter,
					forestillinger og kulturarrangementer
				</p>
				<div class="knapper">
					<a class="button" href="https://www.teater-huset.dk/">Se hjemmesiden →</a>
					<a
						class="button"
						href="https://www.google.com/maps/dir//xenon+k%C3%B8benhavn/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4652531164c15555:0x1d6dee26df01fa8a?sa=X&ved=2ahUKEwiw-r-V4rb3AhUYQ_EDHYZ3DzYQ9Rd6BAg-EAM"
						>Find på kort →</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<Footer />

<style>
	.knapper {
		margin-block: 2rem;
	}

	.container_2 {
		padding-top: 4rem;
		position: static;
		z-index: 50;
	}

	a {
		padding-inline: 1rem;
	}

	h2 {
		font-weight: 700;
	}
	.container_grid {
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
		text-align: center;
		gap: 100px;
	}

	@media (min-width: 650px) {
		.container_grid {
			padding-block: 4rem;
			grid-template-columns: 1fr 1fr;
			gap: 100px;
		}
	}
</style>
