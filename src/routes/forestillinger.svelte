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

<section><h1 class="text-center">Forestillinger <span>& <br /> events</span></h1></section>

<section>
	<div class="filtersort">
		<form class="grid place-items-center pb-8">
			<div class="dropdown">
				<button class="dropbtn button">VÆLG DATO ▼</button>
				<div class="dropdown-content">
					<a href="/">2/8</a>
					<a href="/">3/8</a>
					<a href="/">4/8</a>
					<a href="/">5/8</a>
					<a href="/">6/8</a>
				</div>
			</div>
			<!-- <fieldset class="input-field flex gap-2" data-filter-group="dato">
				<div class="flex gap-8">
					<div class="grid place-items-center">
						<input type="checkbox" name="dato" value=".mandag" /><label>2/8</label>
					</div>
					<div class="grid place-items-center">
						<input type="radio" name="dato" value=".tirsdag" /><label>3/8</label>
					</div>
					<div class="grid place-items-center">
						<input type="radio" name="dato" value=".onsdag" /><label>4/8</label>
					</div>
					<div class="grid place-items-center">
						<input type="radio" name="dato" value=".torsdag" /><label>5/8</label>
					</div>
					<div class="grid place-items-center">
						<input type="radio" name="dato" value=".fredag" /><label>6/8</label>
					</div>
				</div>
			</fieldset> -->
		</form>
	</div>

	<div class="container">
		<article class="">
			<a sveltekit:prefetch href="forestilling">
				<div class="stk_1 ">
					<h2>Skammer <span>du dig nu?</span></h2>
					<h3>- Xenon</h3>
					<p>Tør du se din egen skam i øjnene?</p>
				</div>
			</a>
		</article>

		<article class="mix tirsdag">
			<a sveltekit:prefetch href="forestilling">
				<div class="stk_2">
					<h2>WISH</h2>
					<h3>- Chr. Beboerhus</h3>
					<p>Tragikomisk danseteater, der sparker røv</p>
				</div>
			</a>
		</article>

		<article class="mix onsdag">
			<a sveltekit:prefetch href="forestilling">
				<div class="stk_3">
					<h2><span>Mona</span> Lisa NAtten</h2>
					<h3>- Zeppelin</h3>
					<p>Om mørke, søvnløshed, ensomhed og om at turde række ud.</p>
				</div>
			</a>
		</article>

		<article class="mix torsdag">
			<a sveltekit:prefetch href="forestilling">
				<div class="stk_4">
					<h2>et <span>surt</span> opstød</h2>
					<h3>- VOX</h3>
					<p>Opdag alle de bitre afkroge af tilværelsen, der gør os til små grimme væsner</p>
				</div>
			</a>
		</article>

		<article class="mix fredag">
			<a sveltekit:prefetch href="forestilling">
				<div class="stk_5">
					<h2><span>Alt</span> kører ik'</h2>
					<h3>- Xenon</h3>
					<p>
						-Om at slutte fred med sit kaos, at tage sine konflikter ved hornene, se dem i øjnene og
						elske dem.
					</p>
				</div>
			</a>
		</article>

		<article class="mix mandag">
			<a sveltekit:prefetch href="forestilling">
				<div class="stk_6">
					<h2>Maskeret</h2>
					<h3>- Chr. Beboerhus</h3>
					<p>
						Experience the many layers of the mask affecting our everyday lives; gender, movement,
						social interaction, voice and words.
					</p>
				</div>
			</a>
		</article>

		<article class="mix tirsdag">
			<a sveltekit:prefetch href="forestilling">
				<div class="stk_7">
					<h2><span>Stå</span> ret <span>Få</span> ret</h2>
					<h3>- Zeppelin</h3>
					<p>Kan Mai, Katrine og Lulu beholde alle deres rettigheder, eller kan de leve uden?</p>
				</div>
			</a>
		</article>
	</div>
</section>

<Footer />

<style>
	.dropbtn {
		color: black;
		padding: 16px;
		font-size: 16px;
		border: none;
		cursor: pointer;
		border: solid 2px black;
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		text-align: center;
		background-color: #f9f9f9;
		min-width: 320px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		border-radius: 24px;
	}

	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		background-color: #f1f1f1;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.dropdown a:hover {
		text-decoration: underline;
	}

	article:hover {
		transform: scale(1.1);
		transition: 0.5s;
		text-decoration: none;
	}

	a:hover {
		text-decoration: none;
	}

	h2 {
		font-weight: 600;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 50px;
		align-items: center;
	}

	.stk_1 {
		width: 30rem;
		height: 30rem;
		text-align: center;
		background-image: url('../../static/stk_1.svg');
		/* background-image: url('stk_1.svg'); */
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 12rem;
	}

	.stk_2 {
		width: 30rem;
		height: 30rem;
		text-align: center;
		background-image: url('../../static/stk_2.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 12rem;
	}
	.stk_3 {
		width: 30rem;
		height: 30rem;
		text-align: center;
		background-image: url('../../static/stk_3.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 12rem;
	}

	.stk_4 {
		width: 30rem;
		height: 30rem;
		text-align: center;
		background-image: url('../../static/stk_4.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 12rem;
	}
	.stk_5 {
		width: 30rem;
		height: 30rem;
		text-align: center;
		background-image: url('../../static/stk_5.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 12rem;
	}
	.stk_6 {
		width: 30rem;
		height: 30rem;
		text-align: center;
		background-image: url('../../static/stk_6.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 12rem;
	}
	.stk_7 {
		width: 30rem;
		height: 30rem;
		text-align: center;
		background-image: url('../../static/stk_7.svg');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: 12rem;
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
