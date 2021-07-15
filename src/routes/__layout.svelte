<script>
	import { onMount } from 'svelte';
	import Header from '../components/Header/index.svelte';
	import Footer from '../components/Footer/index.svelte';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<a href="#main">Skip to content</a>

<Header runAnimation={ready} />

<main id="main">
	<slot />
</main>

<Footer />

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
		font-weight: 400;
		margin: 0;
		background-color: #f9f9f9;
	}

	:global(h1) {
		font-size: 16px;
		font-weight: 700;
	}

	:global(h2) {
		font-size: 1rem;
		font-weight: 500;
		margin: 0;
	}

	:global(p) {
		margin: 0;
	}

	a[href='#main'] {
		left: 50%;
		position: absolute;
		color: #fff;
		background: rgb(35, 184, 229);
		padding: 16px;
		transform: translateY(-200%);
		transition: transform 0.3s ease-out;
		outline: none;
		text-decoration: none;
		z-index: 1;
	}

	a[href='#main']:focus {
		transform: translateY(0);
	}

	main {
		margin: 0 auto;
		max-width: 1180px;
	}
</style>
