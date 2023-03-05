import node from '@sveltejs/adapter-node';

const config = {
	kit: {
		adapter: node()
	},
	preprocess: {
		// ...
	},
	// specify the output directory for the build
	paths: {
		base: '/my-app',
		assets: '/my-app',
		ssr: 'functions',
		output: '__sapper__/build'
	}
};

export default config;
