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
	const result = await response.text();
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
