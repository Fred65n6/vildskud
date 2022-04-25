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
	<h1 class="sticky z-50">Programoversigt</h1>
	<img class="absolute z-10 left-44 top-[80%] opacity-80 " src="klat_1.svg" alt="" />
	<img class="absolute right-[35%] top-[25%] z-10 opacity-80" src="klat_4.svg" alt="" />
	<img class="absolute right-40 top-[98%] z-10 opacity-80" src="klat_2.svg" alt="" />
</section>
<section class="container">
	<div class="left">
		<h2 class="font-bold">2/8</h2>

		<table>
			<tr>
				<td class="font-bold">18.00</td>
				<td>Skammer du dig nu?</td>
				<td>Christianshavns beboerhus</td>
			</tr>
			<tr>
				<td class="font-bold">18.30</td>
				<td>Mona Lisa Natten</td>
				<td>Anemonen</td>
			</tr>
			<tr>
				<td class="font-bold">20.15</td>
				<td>Stå ret, få ret</td>
				<td>Zeppelin</td>
			</tr>
			<tr>
				<td class="font-bold">20.15</td>
				<td>WISH</td>
				<td>Xenon-teaterhus</td>
			</tr>
		</table>
	</div>
</section>

<section class="md:grid md:grid-cols-2 container">
	<div class="left">
		<h2 class="font-bold">3/8</h2>

		<table>
			<tr>
				<td class="font-bold">18.00</td>
				<td>Skammer du dig nu?</td>
				<td>Christianshavns beboerhus</td>
			</tr>
			<tr>
				<td class="font-bold">18.30</td>
				<td>Mona Lisa Natten</td>
				<td>Anemonen</td>
			</tr>
			<tr>
				<td class="font-bold">20.15</td>
				<td>Stå ret, få ret</td>
				<td>Zeppelin</td>
			</tr>
			<tr>
				<td class="font-bold">20.15</td>
				<td>WISH</td>
				<td>Xenon-teaterhus</td>
			</tr>
		</table>
	</div>

	<div class="right">
		<h2 class="font-bold">4/8</h2>

		<table>
			<tr>
				<td class="font-bold">18.00</td>
				<td>Skammer du dig nu?</td>
				<td>Christianshavns beboerhus</td>
			</tr>
			<tr>
				<td class="font-bold">18.30</td>
				<td>Mona Lisa Natten</td>
				<td>Anemonen</td>
			</tr>
			<tr>
				<td class="font-bold">20.15</td>
				<td>Stå ret, få ret</td>
				<td>Zeppelin</td>
			</tr>
			<tr>
				<td class="font-bold">20.15</td>
				<td>WISH</td>
				<td>Xenon-teaterhus</td>
			</tr>
		</table>
	</div>
</section>

<section class="grid md:grid-cols-2 container">
	<div class="left">
		<h2 class="font-bold">5/8</h2>

		<table>
			<tr>
				<td class="font-bold">18.00</td>
				<td>Skammer du dig nu?</td>
				<td>Christianshavns beboerhus</td>
			</tr>
			<tr>
				<td class="font-bold">18.30</td>
				<td>Mona Lisa Natten</td>
				<td>Anemonen</td>
			</tr>
			<tr>
				<td class="font-bold">20.15</td>
				<td>Stå ret, få ret</td>
				<td>Zeppelin</td>
			</tr>
			<tr>
				<td class="font-bold">20.15</td>
				<td>WISH</td>
				<td>Xenon-teaterhus</td>
			</tr>
		</table>
	</div>

	<div class="right">
		<h2 class="font-bold">6/8</h2>

		<table>
			<tr>
				<td class="font-bold">18.00</td>
				<td>Skammer du dig nu?</td>
				<td>Christianshavns beboerhus</td>
			</tr>
			<tr>
				<td class="font-bold">18.30</td>
				<td>Mona Lisa Natten</td>
				<td>Anemonen</td>
			</tr>
			<tr>
				<td class="font-bold">20.15</td>
				<td>Stå ret, få ret</td>
				<td>Zeppelin</td>
			</tr>
			<tr>
				<td class="font-bold">20.15</td>
				<td>WISH</td>
				<td>Xenon-teaterhus</td>
			</tr>
		</table>
	</div>
</section>

<Footer />

<style>
	table {
		margin-block: 2rem;
		margin-inline: 1rem;
	}

	td {
		border-bottom: solid 2px black;
		padding: 0.5rem;
	}

	section {
		display: grid;
		place-items: center;
	}

	.container {
		position: static;
		z-index: 50;
	}

	@media (min-width: 600px) {
		.left {
			margin-right: 3rem;
			display: grid;
			place-items: center;
		}

		.right {
			display: grid;
			place-items: center;
		}

		table {
			width: 30rem;
		}
	}
</style>
