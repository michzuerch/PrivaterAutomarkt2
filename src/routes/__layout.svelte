<script>
	import '../styles/tailwind-output.css';
	import NavigationHeader from '../components/NavigationHeader.svelte';

	let darkMode = true;

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<main class="m-4 container mx-auto  {darkMode ? 'dark' : ''}">
	<NavigationHeader />
	<slot />
</main>
