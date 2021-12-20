<script>
	import { pokemon } from '../stores/pokestore';
	import PokemanCard from '$lib/PokemanCard.svelte';

	let searchTerm = '';
	let filteredPokeman = [];

	$: {
		console.log(searchTerm);
		if (searchTerm) {
			filteredPokeman = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
			);
		} else {
			filteredPokeman = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>Pokemon</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Pokemon</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value="{searchTerm}"
	type="text"
	placeholder="Search pokeman"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokeman as pokeman}
		<PokemanCard pokeman="{pokeman}" />
	{/each}
</div>
