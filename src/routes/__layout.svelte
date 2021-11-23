<script>
	import '../styles/tailwind-output.css';
	import NavigationHeader from '../lib/NavigationHeader.svelte';
</script>

<NavigationHeader />
<main>
	<div class="bg-white dark:bg-black">
		<slot />
	</div>
</main>
