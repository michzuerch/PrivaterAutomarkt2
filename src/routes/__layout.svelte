<script>
	import '../styles/tailwind-output.css';
	import Darkmode from '$lib/Darkmode.svelte';
	import Navbar from '$lib/Navbar/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<!-- <header>
	<div
		class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-yellow-300"
	>
		<Burger />
		<Darkmode /> 
	</div>
</header>
 -->
<header><Navbar /></header>
<main>
	Main
	<slot />
</main>
<footer>Footer</footer>
<!-- <Footer />
 -->
