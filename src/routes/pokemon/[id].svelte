<script context="module">
	//import { load } from 'svelte/internal';

	export async function load({ page }) {
		const id = page.params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();
		return {
			props: { pokeman }
		};
	}
</script>

<script>
	export let pokeman;
	const type = pokeman.types[0].type.name;
</script>

<h1>{pokeman.name}</h1>
<p>Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong></p>
<img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name} />
