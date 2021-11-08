<script>
	import '../styles/tailwind-output.css';
	import NavigationHeader from '../components/NavigationHeader.svelte';
</script>

<main class="m-4 container mx-auto">
	<NavigationHeader />
	<slot />
</main>
