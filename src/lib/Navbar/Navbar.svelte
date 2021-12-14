<script>
	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
		console.log('showMenu:', showMenu);
	}
</script>

<!-- Navbar goes here
 -->
<nav class="bg-yellow-400">
	<div class="max-w-6xl mx-auto">
		<div class="flex justify-between">
			<div class="flex space-x-4">
				<!-- Logo -->
				<div class="">
					<a href="/" class="flex items-center py-5 px-2 text-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 mr-1 text-black"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<circle cx="7" cy="17" r="2" />
							<circle cx="17" cy="17" r="2" />
							<path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
						</svg>
						<span class="font-bold">Privater Automarkt</span>
					</a>
				</div>
				<!-- Primary nav -->
				<div class="hidden md:flex items-center space-x-1">
					<a href="/Gallery" class="py-5 px-3 text-black hover:text-gray-700">Bildergallerie</a>
					<a href="/Location" class="py-5 px-3 text-black hover:text-gray-700">So finden Sie uns</a>
					<a href="/Impressum" class="py-5 px-3 text-black hover:text-gray-700">Impressum</a>
				</div>
			</div>
			<!-- Secondary nav -->
			<div class="hidden md:flex items-center space-x-1">
				<!--
				<a href="/Login" class="py-5 px-3 ">Login</a>
				<a
					href="/Signup"
					class="py-2 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300 hover:text-yellow-800 transition duration-300"
					>Signup</a
				>
				-->
			</div>
			<!-- Mobile button -->
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
		</div>
	</div>
	<!-- Mobile menu -->
	<div class="{showMenu ? '' : 'hidden'} md:hidden" on:click={toggleMenu}>
		<a href="/" class="block py-2 px-4 text-sm hover:bg-gray-300">Home</a>
		<a href="/Playground" class="block py-2 px-4 text-sm hover:bg-gray-300">Playground</a>
		<a href="/Hero" class="block py-2 px-4 text-sm hover:bg-gray-300">Hero</a>
		<a href="/Directus" class="block py-2 px-4 text-sm hover:bg-gray-300">Directus</a>
	</div>
</nav>
