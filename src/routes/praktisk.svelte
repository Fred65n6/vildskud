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
				<h3>- Suhmsgade 4,</h3>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.3697746614553!2d12.574020315880555!3d55.6825586805346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531a8bed4311%3A0xad6deac9c5e0135b!2sAnemonen!5e0!3m2!1sda!2sdk!4v1651039964389!5m2!1sda!2sdk"
					width="400"
					height="300"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
			<div class="">
				<h2>Christianshavn beboerhus</h2>
				<h3>- Dronningensgade 34</h3>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.01683046265!2d12.588830715880116!3d55.67130748053163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533f2644b35f%3A0x768bf0bbbb10929!2sChristianshavns%20Beboerhus!5e0!3m2!1sda!2sdk!4v1651040042926!5m2!1sda!2sdk"
					width="400"
					height="300"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
			<div class="">
				<h2>Zeppelin</h2>
				<h3>- Vesterbrogade 45</h3>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.9619003409794!2d12.553811815880136!3d55.67226268053194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525374cd319f05%3A0x8fe3a7e6d4fd02df!2sZeppelin!5e0!3m2!1sda!2sdk!4v1651040139629!5m2!1sda!2sdk"
					width="400"
					height="300"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
			<div class="">
				<h2>Xenon</h2>
				<h3>- Rådhusstræde</h3>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.7211251313156!2d12.572556515880322!3d55.676449480533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531164c15555%3A0x1d6dee26df01fa8a!2sXenon!5e0!3m2!1sda!2sdk!4v1651039604254!5m2!1sda!2sdk"
					width="400"
					height="300"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	</div>
</section>

<Footer />

<style>
	.container {
		position: static;
		z-index: 50;
	}
	.container_2 {
		padding-top: 4rem;
		position: static;
		z-index: 50;
	}

	.container_grid {
		display: grid;
		grid-template-columns: 1fr;
	}

	@media (min-width: 650px) {
		.container_grid {
			grid-template-columns: 1fr 1fr;
			gap: 100px;
		}
	}
</style>
