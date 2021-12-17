<script>
	import '../styles/tailwind-output.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
