import { marked } from 'marked';

type Frontmatter = Record<string, string>;

type ParsedPost = {
	slug: string;
	metadata: Frontmatter;
	markdown: string;
	html: string;
};

const postFiles = import.meta.glob('../posts/*.md', {
	as: 'raw',
	eager: true
}) as Record<string, string>;

const FRONTMATTER_REGEX = /^---\s*[\r\n]+([\s\S]*?)---\s*[\r\n]+([\s\S]*)$/;

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; content: string } {
	const match = raw.match(FRONTMATTER_REGEX);

	if (!match) {
		return { frontmatter: {}, content: raw.trim() };
	}

	const frontmatterBlock = match[1];
	const content = match[2].trim();
	const frontmatter: Frontmatter = {};

	for (const line of frontmatterBlock.split(/\r?\n/)) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#')) continue;
		const [key, ...rest] = trimmed.split(':');
		if (!key || rest.length === 0) continue;
		const value = rest.join(':').trim().replace(/^['"]|['"]$/g, '');
		frontmatter[key.trim()] = value;
	}

	return { frontmatter, content };
}

const parsedPosts: ParsedPost[] = Object.entries(postFiles).map(([path, raw]) => {
	const slug = path.split('/').pop()?.replace('.md', '') ?? path;
	const { frontmatter, content } = parseFrontmatter(raw);

	return {
		slug,
		metadata: frontmatter,
		markdown: content,
		html: marked.parse(content)
	};
});

parsedPosts.sort((a, b) => {
	const dateA = new Date(a.metadata.date ?? '').getTime();
	const dateB = new Date(b.metadata.date ?? '').getTime();
	return dateB - dateA;
});

export type PostSummary = {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
};

export type PostDetail = PostSummary & {
	content: string;
};

export function getAllPosts(): PostSummary[] {
	return parsedPosts.map((post) => ({
		slug: post.slug,
		title: post.metadata.title ?? post.slug,
		date: post.metadata.date ?? '',
		excerpt: post.metadata.excerpt ?? ''
	}));
}

export function getPostBySlug(slug: string): PostDetail | null {
	const post = parsedPosts.find((entry) => entry.slug === slug);

	if (!post) return null;

	return {
		slug: post.slug,
		title: post.metadata.title ?? post.slug,
		date: post.metadata.date ?? '',
		excerpt: post.metadata.excerpt ?? '',
		content: post.html
	};
}
