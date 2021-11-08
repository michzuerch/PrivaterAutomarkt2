<script>
	import '../styles/tailwind-output.css';
	import NavigationHeader from '../components/NavigationHeader.svelte';

	let darkMode = true;
</script>

<main class="m-4 container mx-auto  {darkMode ? 'dark' : ''}">
	<NavigationHeader />
	<slot />
</main>
