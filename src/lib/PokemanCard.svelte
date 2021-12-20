<script>
	export let pokeman;
</script>

<!--
@component
Card component for a single pokeman.

- Sample for REST.
- Usage:
  ```tsx
  <PokemanCard {pokeman}>
		```
	-->
<a
	href="{`/pokemon/${pokeman.id}`}"
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
>
	<img class="h-40 w-40" src="{pokeman.image}" alt="{pokeman.name}" />
	<h2 class="text-2xl uppercase">{pokeman.id}. {pokeman.name}</h2>
</a>
