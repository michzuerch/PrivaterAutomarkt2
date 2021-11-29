<script>
	import '../styles/tailwind-output.css';
	import Darkmode from '$lib/darkmode.svelte';
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />
<Darkmode />
<main>
	<div class="container bg-white dark:bg-black">
		<slot />
	</div>
</main>
