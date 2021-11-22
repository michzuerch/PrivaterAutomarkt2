import HttpError from '$lib/HttpError';

export async function getAccessToken(fetch) {
	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	var raw = JSON.stringify({
		email: 'nico@nico.com',
		password: 'nico22'
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	const response = await fetch('http://localhost:8055/auth/login', requestOptions);
	const result = await response.json();
	/* Return result if successful
	 */
	if (response.ok) {
		return result;
	} else {
		/* Return HttpError if unsuccessful
		 */
		throw new HttpError(response, 'Could not retrieve access token at CMS.');
	}
}

export async function getArticleItems(fetch, token) {
	var myHeaders = new Headers();
	myHeaders.append('Authorization', `Bearer ${token}`);

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	const response = await fetch('http://localhost:8055/items/articles', requestOptions);
	const result = await response.json();

	console.log('fetch:', result);
	/* Return result if successful
	 */
	if (response.ok) {
		return result;
	} else {
		/* Return HttpError if unsuccessful
		 */
		throw new HttpError(response, 'Could not retrieve article items at CMS.');
	}
}

export async function getArticleItem(fetch, token, id) {
	var myHeaders = new Headers();
	myHeaders.append('Authorization', `Bearer ${token}`);

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	const response = await fetch(`http://localhost:8055/items/articles/${id}`, requestOptions);
	const result = await response.json();

	/* Return result if successful
	 */
	if (response.ok) {
		return result;
	} else {
		/* Return HttpError if unsuccessful
		 */
		throw new HttpError(response, 'Could not retrieve article item at CMS.');
	}
}
