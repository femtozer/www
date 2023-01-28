import dotenv from 'dotenv';
import type { Config } from 'prismic-ts-codegen';

dotenv.config({ path: '.env' });

const config: Config = {
	output: 'src/types.d.ts',
	repositoryName: process.env.VITE_PRISMIC_REPOSITORY,
	customTypesAPIToken: process.env.VITE_PRISMIC_TYPE_ACCESS_TOKEN,
	models: {
		fetchFromRepository: true
	}
};

export default config;
