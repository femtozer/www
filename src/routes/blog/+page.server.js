import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	try {
		const documents = await client.getAllByType('blog_post');
		if (documents) {
			return { documents };
		}
	} catch (e) {
		console.error(e);
	}

	throw error(404, { message: 'Not found' });
}
