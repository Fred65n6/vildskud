<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
	<nav>
		<div class="corner">
			<a href="/">
				<img src={logo} alt="SvelteKit" />
			</a>
		</div>
		<div class="desktop-menu">
			<ul>
				<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/om_os">Om os</a>
				</li>
			</ul>
		</div>
		<div class="hamburger-menu">
			<input id="menu__toggle" type="checkbox" />
			<label class="menu__btn" for="menu__toggle">
				<span />
			</label>

			<ul class="menu__box">
				<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/om_os">Om os</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

<!-- <script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import { onMount } from 'svelte';

	// Show mobile icon and display menu
	let showMobileMenu = false;

	// List of navigation items
	const navItems = [{ label: 'logo', href: '#' }];

	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Media match query handler
	const mediaQueryHandler = (each) => {
		// Reset mobile state
		if (!each.matches) {
			showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');

		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<header>
	<nav>
		<div class="inner">
			<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
				<div class="middle-line" />
			</div>
			<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
				{#each navItems as item}
					<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
					<li class:active={$page.url.pathname === '/about'}>
						<a sveltekit:prefetch href="/om_os">Om os</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: rgba(0, 0, 0, 0.8);
	}
	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
		position: static;
		z-index: 3;
	}

	.inner {
		padding-left: 20px;
		padding-right: 20px;
		margin: auto;
		box-sizing: border-box;
		display: flex;
		height: 100%;
	}

	.mobile-icon {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
	}

	.navbar-list.mobile {
		background-color: rgba(0, 0, 0, 0.8);
		position: fixed;
		display: block;
		height: calc(100% - 45px);
		bottom: 0;
		left: 0;
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
	}

	.navbar-list li:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
	}

	.navbar-list a {
		color: #fff;
		text-decoration: none;
		display: flex;
		height: 45px;
		align-items: center;
		padding: 0 10px;
		font-size: 13px;
	}

	@media only screen and (min-width: 767px) {
		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}

		.navbar-list a {
			display: inline-flex;
		}
	}
</style> -->
<style>
	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
		position: static;
		z-index: 3;
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		background-color: white;
		padding-inline: 2rem;
	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	.desktop-menu li {
		position: relative;
		height: 100%;
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	.hamburger-menu li {
		padding: 1rem;
	}

	#menu__toggle {
		opacity: 0;
	}

	#menu__toggle:checked ~ .menu__btn > span {
		transform: rotate(45deg);
	}
	#menu__toggle:checked ~ .menu__btn > span::before {
		top: 0;
		transform: rotate(0);
	}
	#menu__toggle:checked ~ .menu__btn > span::after {
		top: 0;
		transform: rotate(90deg);
	}
	#menu__toggle:checked ~ .menu__box {
		visibility: visible;
		right: 0;
	}

	.menu__btn {
		display: flex;
		align-items: center;
		position: fixed;
		top: 10px;
		right: 20px;

		width: 26px;
		height: 26px;

		cursor: pointer;
		z-index: 1;
	}

	.menu__btn > span,
	.menu__btn > span::before,
	.menu__btn > span::after {
		display: block;
		position: absolute;

		width: 100%;
		height: 2.5px;
		border-radius: 12px;

		background-color: #1c1c1c;

		transition-duration: 0.25s;
	}
	.menu__btn > span::before {
		content: '';
		top: -8px;
	}
	.menu__btn > span::after {
		content: '';
		top: 8px;
	}

	.menu__box {
		display: flex;
		flex-direction: column;
		position: absolute;
		visibility: hidden;
		top: 0;
		right: -100%;

		width: 50%;
		height: 100%;

		margin: 0;
		padding: 80px 0;

		list-style: none;

		background-color: white;
		box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);

		transition-duration: 0.25s;
	}

	@media (max-width: 600px) {
		.desktop-menu {
			display: none;
		}
	}

	@media (min-width: 600px) {
		.hamburger-menu {
			display: none;
		}
	}
</style>
