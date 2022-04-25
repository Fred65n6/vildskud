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
	import Forestilling from './forestilling.svelte';
</script>

<Header />

<svelte:head>
	<title>About</title>
</svelte:head>

<section><h1 class="text-center">Forestillinger <span>& <br /> events</span></h1></section>

<section>
	<div class="container">
		<a sveltekit:prefetch href="forestilling">
			<div class="stk_1">
				<h2>Skammer <span>du dig nu?</span></h2>
				<p>-Tør du se din egen skam i øjnene?</p>
			</div>
		</a>

		<a sveltekit:prefetch href="forestilling">
			<div class="stk_2">
				<h2>WISH</h2>
				<p>-Tragikomisk danseteater, der sparker røv</p>
			</div>
		</a>

		<a sveltekit:prefetch href="forestilling">
			<div class="stk_3">
				<h2><span>Mona</span> Lisa NAtten</h2>
				<p>-Om mørke, søvnløshed, ensomhed og om at turde række ud.</p>
			</div>
		</a>

		<a sveltekit:prefetch href="forestilling">
			<div class="stk_4">
				<h2>et <span>surt</span> opstød</h2>
				<p>-Opdag alle de bitre afkroge af tilværelsen, der gør os til små grimme væsner</p>
			</div>
		</a>

		<a sveltekit:prefetch href="forestilling">
			<div class="stk_5">
				<h2><span>Alt</span> kører ik'</h2>
				<p>
					-Om at slutte fred med sit kaos, at tage sine konflikter ved hornene, se dem i øjnene og
					elske dem.
				</p>
			</div>
		</a>

		<a sveltekit:prefetch href="forestilling">
			<div class="stk_6">
				<h2>Maskeret</h2>
				<p>
					-Experience the many layers of the mask affecting our everyday lives; gender, movement,
					social interaction, voice and words.
				</p>
			</div>
		</a>

		<a sveltekit:prefetch href="forestilling">
			<div class="stk_7">
				<h2><span>Stå</span> ret <span>Få</span> ret</h2>
				<p>-Kan Mai, Katrine og Lulu beholde alle deres rettigheder, eller kan de leve uden?</p>
			</div>
		</a>
	</div>
</section>

<Footer />

<style>
	a:hover {
		transform: scale(1.1);
		transition: 0.5s;
		text-decoration: none;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 50px;
		align-items: center;
	}

	.stk_1 {
		width: 20rem;
		height: 20rem;
		text-align: center;
		background-image: url('../../static/klat_1.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 5rem;
	}

	.stk_2 {
		width: 20rem;
		height: 20rem;
		text-align: center;
		background-image: url('../../static/klat_2.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 5rem;
	}
	.stk_3 {
		width: 20rem;
		height: 20rem;
		text-align: center;
		background-image: url('../../static/klat_3.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 5rem;
	}

	.stk_4 {
		width: 20rem;
		height: 20rem;
		text-align: center;
		background-image: url('../../static/klat_4.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 5rem;
	}
	.stk_5 {
		width: 20rem;
		height: 20rem;
		text-align: center;
		background-image: url('../../static/klat_5.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 5rem;
	}
	.stk_6 {
		width: 20rem;
		height: 20rem;
		text-align: center;
		background-image: url('../../static/klat_6.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 5rem;
	}
	.stk_7 {
		width: 20rem;
		height: 20rem;
		text-align: center;
		background-image: url('../../static/klat_7.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 5rem;
	}

	@media (min-width: 650px) {
		.container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 50px;
			align-items: center;
		}
	}
</style>
