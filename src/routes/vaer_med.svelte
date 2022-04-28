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
	<h1>Bliv en del af teamet</h1>
	<img class="absolute z-10 left-44 md:top-2/4 top-[180%] opacity-30" src="klat_5.svg" alt="" />
	<img class="absolute right-44 md:top-20 z-10 opacity-30" src="klat_6.svg" alt="" />
	<img class="absolute right-40 md:top-3/4 top-[120%] z-10 opacity-30" src="klat_4.svg" alt="" />
</section>
<section>
	<div class="container">
		<div class="left">
			<h2>Vil du være frivillig?</h2>
			<br />
			<p>
				Vildskud Festival er afhængig af, at der hvert år er en masse frivillige, der har lyst til
				at være med til at gøre festivalen til en god oplevelse for alle deltagende.
				<br /><br />
				Alle frivillige får mulighed for at se forestillingerne gratis, får mad under deres vagter og
				muligheden for at møde en masse teaternørder.
				<br /><br />
				Jobbet som frivillig består af 2 vagter på 3-4 timer. Der er et infomøde d. 1. august 2022.
				<br /><br />
				Vil du være frivillig, eller har du spørgsmål så skriv til: frivillig@vildskud.dk
			</p>
		</div>
		<div class="right">
			<h2>PR og SOME ansvarlig</h2>
			<br />
			<p>
				VILDSKUD festival søger PR og SOME ansvarlig – det kan blive dig! <br /><br /> Vi giver dig
				kunstnerisk frihed til at danne rammerne for festivalens visuelle udtryk! <br /> Du bliver
				en del af et stærkt kunstnerisk team, som brænder for scenekunsten og festiva- len!
				<br /><br /> Send os en mail på info@vildskud.dk og hør mere! <br /><br /> Rødderne – kom og
				vær med! <br /> <br /> Bag VILDSKUD står der hvert år et hold af frivillige arrangører.
				<br /><br /> Arrangørgruppen arbejder med en flad struktur og er altid åben for at få flere
				med. Sammensætningen af gruppen forandrer sig fra år til år og derfor forandrer måden hvorpå
				arbejdet med festivalen udføres sig også konstant. <br /><br /> Ønsker du at være en del af
				arrangørgruppen til Vildskud Festival 2020? Så send en motiveret ansøgning til
				info@vildskud.dk. Vi tager imod ansøgninger hele året, så tøv ikke med at kontakte os.
				<br /><br /> Som arrangør i Vildskud kan du få erfaring inden for: <br /><br /> Projektledelse,
				budgetplanlægning, pr-strategier på SoMe platforme, udfoldelse af pressemeddelelser, grafisk
				design af program og plakater, networking og samarbejde med professionelle scener i København.
				Planlægning og udvikling af Danmarks største festival for det scenekunstneriske vækstlag!
			</p>
		</div>
	</div>
</section>

<Footer />

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 50px;
		position: static;
		z-index: 50;
	}

	@media (min-width: 650px) {
		.container {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
