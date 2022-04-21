<script context="module">
	export const prerender = true;
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<img src="vildskud_logo.svg" alt="logo" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
