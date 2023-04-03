import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, request, params }) {
	const client = createClient({ fetch, request });

	try {
		const document = await client.getByUID('blog_post', params.slug);
		if (document) {
			return { document };
		}
	} catch (e) {
		console.error(e);
	}

	throw error(404, { message: 'Not found' });
}
