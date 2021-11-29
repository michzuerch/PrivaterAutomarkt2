<script>
	import '../styles/tailwind-output.css';
	import Darkmode from '$lib/darkmode.svelte';
	import Burger from '$lib/Navbar/Burger.svelte';
</script>

<main>
	<header>
		<h1>PA</h1>
		<Burger />
		<Darkmode />
	</header>
	<div class="container bg-white dark:bg-black">
		<slot />
	</div>
</main>
