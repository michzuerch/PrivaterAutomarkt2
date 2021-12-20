<script context="module">
	import { getAccessToken, getArticleItems } from '$lib/loadHelper';
	import HttpError from '$lib/HttpError';
	export async function load({ page, fetch, session, context }) {
		let tokenResult;
		let articleItemsResult;
		try {
			tokenResult = await getAccessToken(fetch);
			articleItemsResult = await getArticleItems(fetch, tokenResult.data['access_token']);

			/* If successful, Pass props object to page.
			 */
			return {
				props: {
					articleItemsResult: articleItemsResult,
					tokenResult: tokenResult,
				},
			};
		} catch (error) {
			/* If unsuccessful, pass an object containing error and status to page.
			 */
			return {
				/* Since Error does not contain the status, we use HttpError.
				 */
				status: error instanceof HttpError ? error.response.status : 500,
				error: error,
			};
		}
	}
</script>

<script>
	/* Reference tokenResult prop returned above.
	 */
	export let tokenResult;
	export let articleItemsResult;
	console.log(tokenResult);
	console.log(articleItemsResult);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Our new index page</h1>

<nav>
	{#each articleItemsResult.data as item}
		<a href="{'/article/' + item.id.toString()}">{item.title}</a>
	{/each}
</nav>
