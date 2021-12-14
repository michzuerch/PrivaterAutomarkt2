<script>
	import '../styles/tailwind-output.css';
	import Navbar from '$lib/Navbar/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<header>
	<Navbar />
</header>

<slot />
<Footer />
