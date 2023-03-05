import vercel from '@sveltejs/adapter-vercel';

const config = {
	preprocess: preprocess(),
	kit: {
		adapter: vercel(),
		target: '#svelte'
	}
};
