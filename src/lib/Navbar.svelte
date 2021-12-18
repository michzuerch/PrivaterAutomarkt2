<script>
	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
		console.log('showMenu:', showMenu);
	}
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<header class="text-gray-600 body-font bg-yellow-500">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
				/>
			</svg>
			<span class="ml-3 text-xl font-extrabold">Privater Automarkt</span>
		</a>
		<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
			<a class="mr-5 hover:text-gray-900">First Link</a>
			<a class="mr-5 hover:text-gray-900">Second Link</a>
			<a class="mr-5 hover:text-gray-900">Third Link</a>
			<a class="mr-5 hover:text-gray-900">Fourth Link</a>
		</nav>
		<button
			class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
			>Button
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-4 h-4 ml-1"
				viewBox="0 0 24 24"
			>
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</button>
	</div>
</header>
