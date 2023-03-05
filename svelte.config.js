import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config */
const config = {
	kit: {
		// Specify the adapter you want to use
		adapter: vercel()
	}
};

export default config;
