<script>
	import '../styles/tailwind-output.css';
	import Darkmode from '$lib/Darkmode.svelte';
	import Burger from '$lib/Navbar/Burger.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<header>
	<div class="flex">
		<h1>PA</h1>
		<Burger />
		<Darkmode />
	</div>
</header>
<main>
	<div class="container">
		<slot />
	</div>
</main>
<Footer />
