<script>
	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
		console.log('showMenu:', showMenu);
	}
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<header class="text-gray-800 body-font bg-yellow-500">
	<div class="container mx-auto flex flex-wrap p-5 flex-row items-center">
		<a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
			<span class="mx-3 text-xl font-extrabold text-green-600 sm:text-red-600"
				>Privater Automarkt</span
			>
		</a>
		<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
			<a href="Gallery" class="mr-5 hover:text-gray-900">Gallerie</a>
			<a href="Location" class="mr-5 hover:text-gray-900">Standort</a>
			<a href="Impressum" class="mr-5 hover:text-gray-900">Impressum</a>
			<div on:click={toggleMenu} class="md:hidden flex items-center">
				<button>
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
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			<!-- Mobile menu -->
			<div class="{showMenu ? '' : 'hidden'} md:hidden" on:click={toggleMenu}>
				<a href="/" class="block py-2 px-4 text-sm hover:bg-gray-300">Home</a>
				<a href="/Playground" class="block py-2 px-4 text-sm hover:bg-gray-300">Playground</a>
				<a href="/Hero" class="block py-2 px-4 text-sm hover:bg-gray-300">Hero</a>
				<a href="/Directus" class="block py-2 px-4 text-sm hover:bg-gray-300">Directus</a>
			</div>

		</nav>

		<!-- 		<button
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
 -->
	</div>
</header>
