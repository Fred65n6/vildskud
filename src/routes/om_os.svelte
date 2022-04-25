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
	import Fotter from '../lib/footer.svelte';
	import Footer from '../lib/footer.svelte';
</script>

<Header />

<svelte:head>
	<title>About</title>
</svelte:head>

<section><h1>Festival for uafhængig scenekunst</h1></section>
<img class="absolute top-3/4 z-10 opacity-80 " src="klat_1.svg" alt="" />
<img class="absolute left-44 top-20 z-10 opacity-80" src="klat_2.svg" alt="" />
<img class="absolute left-9 top-50 z-10 opacity-80" src="klat_3.svg" alt="" />
<section>
	<div class="container">
		<div class="left">
			<h2>Vildskud festival - en fejring af vækstlaget</h2>
			<br />
			<p>
				Vildskuds mål er at give undergrunden i dansk scenekunst en platform med mulighed for at
				møde et bredt publikum, og på den måde skabe synlighed for vækstlaget. Desuden kan de
				deltagende scenekunstgrupper også møde hinanden på tværs af genrer og arbejdsmetoder med
				henblik på gensidig udvikling og læring. Vildskud støtter op om det uafhængige
				scenekunstmiljø ved at skabe rum for de udøvende scenekunstneres udvikling, og ved at være
				med til at holde miljøet fleksibelt, inkluderende og levende. På Vildskud er der plads til
				alle genre og formater. Vi stræber mod at skabe en åben og behagelig atmosfære, hvori
				uafhængige scenekunstgrupper kan eksperimentere i mødet med et engageret publikum.Vi støtter
				op om kunstnernes arbejde med at udvikle deres ideer fra proces til endelig forestilling.
				Vildskud giver plads til både kunstnere som ønsker at bruge Vildskud som springbræt til det
				professionelle scenekunstmiljø og til dem, som ønsker at bibeholde deres status som
				uafhængige scenekunstnere.
			</p>
		</div>
		<div class="right">
			<h2>Frivilligheden er grundlaget</h2>
			<br />
			<p>
				Vildskud er drevet 100% af frivillige kræfter! Bag festivalen står en engageret
				arrangørgruppe bestående af i år to projektledere og syv arrangører. Desuden bidrager ca. 20
				frivillige med deres hjælp til billetsalg, barvagter og gruppe-værtskab under festivalen, og
				sidst men ikke mindst står alle grupperne klar til festivalens start på baggrund af deres
				eget hårde arbejde.Vildskud er en platform for læring og eksperimenter. Arrangørgruppen
				nedsættes hvert efterår og er drevet af kærlighed til den uafhængige scenekunst. Gruppen
				består af mennesker med mange forskellige tilgange til scenekunsten, og vi arbejder sammen
				for at udvikle vores kompetencer inden for kommunikation, presse, teknik, planlægning,
				organisering og meget mere. Da arrangørgruppen er under konstant udvikling, og hvert år
				består af nye kræfter, er Vildskud også en foranderlig festival. Er du interesseret i at
				bidrage til formatet, og i at være frivillig, så skriv til os på info@vildskud.dk.
			</p>
		</div>
	</div>
</section>
<section>
	<div class="container">
		<div class="left">
			<h2>Vildskuds historie</h2>
			<br />
			<p>
				Den første Vildskud Festival blev afholdt i 2003, på baggrund af initiativ fra
				studentermedhjælperen i DATS – lands­forening for dramatisk virksomhed – og aktive
				scenekunstnere i undergrundsmiljøet. Alle ønskede de at kortlægge det lidt diffuse område
				‘independent-scenen’ og ud fra en fornemmelse af, at der rundt omkring i københavnske kældre
				og nedlagte fabrikslokaler voksede stærke kreative kræfter, blev kimen til Vildskud lagt. Et
				udpluk af kræfterne fra undergrunden satte sig sammen for at skabe et fællesskab, hvor
				aktørerne kunne mødes. I august ’03 blev Vildskud en realitet. I dag er Vildskud en del af
				TeaterHuset og har hjemme i Huset-KBH, hvor vi hvert år får sparring og støtte til at lave
				den bedst tænkelige festival.
			</p>
		</div>
		<div class="right">
			<h2>Sneskud</h2>
			<br />
			<p>
				Sneskud var Vildskuds lillesøster. Sneskud blev for første gang afholdt i februar 2012.
				Sneskud mindede på mange måder om Vildskud – en festival for undergrunden som ønsker at
				optræde for et publikum, møde hinanden og danne et netværk.
				<br />
				Sneskud var en mindre festival og strækkede sig over tre dage i januar/februar.
			</p>
		</div>
	</div>
</section>

<Footer />

<style>
	@media (min-width: 650px) {
		.container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 50px;
			padding-inline: 2rem;
			position: static;
			z-index: 50;
		}
	}

	h1 {
		position: static;
		z-index: 50;
	}

	.left {
		margin-bottom: 1rem;
	}
</style>
