import * as prismic from '@prismicio/client';

const repoName = import.meta.env.VITE_PRISMIC_REPOSITORY;
const accessToken = import.meta.env.VITE_PRISMIC_ACCESS_TOKEN;

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
	{
		type: 'homepage',
		uid: 'homepage',
		path: '/'
	}
];

const createClient = ({ request, fetch } = {}) => {
	const clientOptions = {
		fetch,
		accessToken,
		routes
	};
	const client = prismic.createClient(repoName, clientOptions);

	if (request) {
		client.enableAutoPreviewsFromReq(request);
	}

	return client;
};

export default createClient;
