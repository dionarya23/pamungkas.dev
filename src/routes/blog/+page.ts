import { getAllPosts } from '$lib/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		posts: getAllPosts()
	};
};
