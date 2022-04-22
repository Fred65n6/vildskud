<script>
	import { page } from '$app/stores';
</script>

<footer>
	<div class="container">
		<div class="">
			<img class="w-32" src="footer_logo.svg" alt="logo" />
		</div>
		<div class="grid ">
			<h2>Arkiver</h2>
			<a href="/">Sæson 2019</a>
			<a href="/">Sæson 2020</a>
		</div>
	</div>

	<div class="container">
		<div class="">
			<h2>Kontakt</h2>
			<p>Kontakt os <a class="underline" href="/">her</a></p>
		</div>
		<div class="grid  ">
			<h2>Politker</h2>
			<a href="/">Privatlivspolitik</a>
			<a href="/">Cookiepolitik</a>
		</div>
	</div>

	<div class="container">
		<div class="">
			<h2>Vær social med os</h2>
			<p>
				Vil du gerne være den første til at høre, når der sker noget nyt for Vildskud? Så følg os på
				vores SoMe kanaler:
			</p>
			<br />

			<img class="w-52" src="social_icons.svg" alt="" />
		</div>
	</div>
</footer>

<style>
	footer {
		display: grid;
		justify-items: center;

		grid-template-columns: 1fr 1fr 1fr;
		gap: 40px;
		padding-block: 2rem;
		padding-inline: 10rem;
		width: 100%;
		border-top: solid 2px black;
	}

	.container {
		display: grid;
		gap: 20px;
	}

	@media (max-width: 650px) {
		footer {
			display: grid;
			grid-template-columns: 1fr;
			justify-items: center;
			padding-inline: 5rem;
		}
		.container {
			display: flex;
			gap: 50px;
		}
	}
</style>
