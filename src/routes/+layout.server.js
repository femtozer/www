import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	try {
		const homepage = await client.getSingle('homepage');
		if (homepage) {
			return { homepage };
		}
	} catch (e) {
		console.error(e);
	}

	throw error(404, { message: 'Not found' });
}
