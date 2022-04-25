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
	<div class="container">
		<div>
			<h2>Skammer <span>du dig nu?</span></h2>
			<h3>Teater egotrip</h3>
			<br />
			<p>
				Den starter som en knude i maven. En lille hvisken i øret om, at du ikke er god nok. Du
				ryster det af dig, kigger dig selv i spejlet og siger til dig selv “hold kæft hvor det
				spiller det der”. Altså lige indtil den gør dig opmærksom på maven. Maven der buler ud over
				siden af buksekanten. Den siger du måske skal tænke over hvad du spiser, og hvor lidt du
				egentligt træner. Den siger også, at du skal huske at elske din krop som den er! Den siger
				til dig, at den godt kan forstå, at du er alene. At du ville have flere venner, hvis turde
				råbe PIK en gang imellem. Men, at du også snart skal se at blive voksen, at din
				kvart-livskrise er en stor kliché, og at du desuden bør til at tage telefonen, når din mor
				ringer! “Skammer du dig nu?” er en forestilling om at forsvinde ned i skammens dyb, for at
				opdage at man må se sin egen skam i øjnene for måske, bare et øjeblik, at slippe den helt.
				Tør du se din egen skam i øjnene?
			</p>
		</div>

		<div class="stk_1">
			<img src="skammer_du_dig_nu.webp" alt="skammer du dig" />
			<button>Køb billlet →</button>
		</div>
	</div>
</section>
<section>
	<div class="container_2">
		<div class="left">
			<h3>Idé, iscenesættelse og medvirkende:</h3>
			<p>Julie Lindhardt og Anna Jane Lund</p>
			<br />
			<h3>Dramaturg:</h3>
			<p>Katrine Matzen</p>
			<br />
			<h3>Tekniker og afvikler</h3>
			<p>Frederik Thorenfeldt Poulsen</p>
			<br />
			<h3>Med støtte fra:</h3>
			<p>DATS - Dansk Amatør Teater & Scenekunst & Snabslanten</p>
			<br />
			<h3>Tak til:</h3>
			<p>Korfuvej, Simon Hay, Henning Sprogøe, Agnes Jung og Christian Morling.</p>
		</div>
		<div class="right">
			<h3>VArighed:</h3>
			<p>50 minutter</p>
			<br />
			<h3>Venuer:</h3>
			<p>Christianshavns beboerhus</p>
			<br />
			<h3>Spilletider</h3>
			<ul>
				<li>- 3.august kl. 18:00</li>
				<li>- 4.august kl. 19:00</li>
				<li>- 5.august kl. 13:00</li>
				<li>- 6.august kl. 18:00</li>
				<li>- 7.august kl. 14:00</li>
			</ul>
			<br />
			<h3>Billetter:</h3>
			<p>Køb dine billetter <a class="underline" href="/">her</a></p>
		</div>
	</div>
</section>

<Footer />

<style>
	button:hover {
		transform: scale(1.1);
		transition: 0.5s;
		text-decoration: none;
	}

	.left {
		text-align: right;
		border-right: solid 2px black;
		padding-right: 2.5rem;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 50px;
		align-items: center;
	}

	.container_2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 50px;
		align-items: center;
	}

	img {
		width: 50%;
		padding: 0.5rem;
	}

	button {
		text-transform: uppercase;
		color: black;
		border: solid 2px black;
		border-radius: 40px/24px;
		padding: 0.5rem;
		margin: 1rem;
	}

	.stk_1 {
		display: grid;
		place-items: center;
		background-image: url('klat_4.svg');
		background-size: contain;
		background-repeat: no-repeat;
	}

	@media (min-width: 650px) {
		.container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 50px;
			align-items: center;
		}
	}
</style>
