<script context="module">
	import { getAccessToken } from '$lib/loadHelper';
	import HttpError from '$lib/HttpError';
	export async function load({ page, fetch, session, context }) {
		let tokenResult;
		try {
			tokenResult = await getAccessToken(fetch);
			/* If successful, Pass props object to page.
			 */
			return {
				props: {
					tokenResult: tokenResult
				}
			};
		} catch (error) {
			/* If unsuccessful, pass an object containing error and status to page.
			 */
			return {
				/* Since Error does not contain the status, we use HttpError.
				 */
				status: error instanceof HttpError ? error.response.status : 500,
				error: error
			};
		}
	}
</script>

<script>
	/* Reference tokenResult prop returned above.
	 */
	export let tokenResult;
	console.log(tokenResult);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Our new index page</h1>
