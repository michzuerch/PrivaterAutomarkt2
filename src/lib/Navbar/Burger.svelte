<script>
	import Hamburger from 'hamburger-menu-svelte';
	const menu_list = [
		{ name: 'Home', url: './' },
		{ name: 'Playground', url: 'Playground' },
		{ name: 'Hero', url: '/Hero' },
		{ name: 'Map', url: '/Hero' }
	];
</script>

<Hamburger {menu_list} left="true" buttonTopSize="100" />
