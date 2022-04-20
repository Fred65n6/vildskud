<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<main>
	<slot />
</main>

<footer>
	<p>Footer</p>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
