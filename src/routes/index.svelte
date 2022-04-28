<script context="module">
	export const prerender = true;
	import Header from '../lib/header/Header.svelte';
	import Footer from '../lib/footer.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div id="hero">
	<div class="container">
		<Header />
		<div class="image">
			<img src="hero_logo_2.svg" alt="logo" />
			<br />
			<p class="text-center text-red-700">2. - 3. - 4. - 5. - 6. <br />AUGUST 2020</p>
		</div>

		<br />
		<div class="knapper">
			<button><a sveltekit:prefetch href="forestillinger">Forestillinger & events →</a></button>
			<button><a sveltekit:prefetch href="billetter">Billetter →</a></button>
		</div>
	</div>
</div>

<section>
	<h2>Forestillinger <span>& events</span></h2>
	<div class="grid md:grid-cols-2 place-items-center">
		<div class="">
			<img src="billetter.svg" alt="" />
		</div>
		<div class="grid place-items-center gap-16 px-12">
			<p>
				Vildskud er Københavns festival for uafhængig scenekunst. Vær med, se med. Vildskud er for
				alle der er interesserede i at dyrke og støtte spirende og uafhængige scenekunstnere.
				Vildskud er Københavns festival for uafhængig scenekunst.
			</p>
			<button><a sveltekit:prefetch href="billetter">Billetter →</a></button>
		</div>
	</div>
</section>

<Footer />

<style>
	#hero {
		background-image: url('../../static/hero_bg_2.svg');
		background-image: url('hero_bg_2.svg');
		width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		display: grid;
		place-items: center;
		padding-bottom: 2rem;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.image {
		width: 17rem;
		margin-top: 9rem;
		margin-bottom: 5rem;
	}

	.knapper {
		display: grid;
		gap: 1rem;
		padding-bottom: 1rem;
	}

	a:hover {
		color: black;
	}

	#hero button {
		color: white;
		border: solid 2px white;
	}

	button {
		text-transform: uppercase;
		color: black;
		border: solid 2px black;
		border-radius: 40px/24px;
		padding-block: 0.5rem;
		width: 20rem;
	}

	@media (min-width: 650px) {
		.image {
			width: 25rem;
			margin-block: 5.5rem;
		}
		.knapper {
			display: flex;
			padding-bottom: 2rem;
		}
	}
</style>
