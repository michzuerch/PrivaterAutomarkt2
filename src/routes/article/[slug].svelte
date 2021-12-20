<script context="module">
	import { getAccessToken, getArticleItem } from '$lib/loadHelper';
	import HttpError from '$lib/HttpError';
	export async function load({ page, fetch, session, context }) {
		const pageId = parseInt(page.params.slug);
		let tokenResult;
		let articleItemResult;
		try {
			tokenResult = await getAccessToken(fetch);
			articleItemResult = await getArticleItem(fetch, tokenResult.data['access_token'], pageId);
			/* If successful, Pass props object to page.
			 */
			return {
				props: {
					articleItemResult: articleItemResult,
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
	export let articleItemResult;
</script>

<h2>{articleItemResult.data.title}</h2>
<div>{@html articleItemResult.data.text}</div>
