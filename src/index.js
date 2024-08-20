import { readFile } from 'fs';

export default {
	async fetch(request, env, ctx) {
		readFile();
		return new Response('Hello World!');
	},
};
