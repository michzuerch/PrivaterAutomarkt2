<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	{
		(''); //Vite empty block sourcemap bug
	}

	let darkMode;
	let darkModeReady = false;

	onMount(() => {
		darkMode = document.documentElement.classList.contains('dark');
		darkModeReady = true;
	});
</script>

{#if darkModeReady}
	<span class="toggle mr-1 " in:fade="{{ duration: 800 }}">
		<input
			class="toggle"
			type="checkbox"
			id="toggle"
			bind:checked="{darkMode}"
			on:change="{() => document.documentElement.classList.toggle('dark')}"
		/>
		<label id="darkicon" title="Toggle dark mode" for="toggle" data-dark="{darkMode ? '\u{1F319}' : '\u{2600}'}"
		></label>
	</span>
{/if}
