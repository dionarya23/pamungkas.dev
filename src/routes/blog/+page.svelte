<script lang="ts">
        import type { PageData } from './$types';

        const formatDate = (input: string) => {
                const date = new Date(input);
                return isNaN(date.getTime())
                        ? input
                        : date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        };

        let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
        <title>Blog | Dion Pamungkas</title>
        <meta name="description" content="Technical blog posts and articles" />
</svelte:head>

<div class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-black">Blog</h1>
        
        {#if data.posts.length === 0}
                <p class="text-gray-600">No blog posts yet. Check back soon!</p>
        {:else}
                <div class="space-y-6">
                        {#each data.posts as post}
                                <article class="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                        <a href={`/blog/${post.slug}`} class="block">
                                                <h2 class="text-2xl font-semibold mb-2 text-black hover:underline">
                                                        {post.title}
                                                </h2>
                                                <p class="text-sm text-gray-500 mb-3">{formatDate(post.date)}</p>
                                                <p class="text-gray-700 leading-relaxed">{post.excerpt}</p>
                                        </a>
                                </article>
                        {/each}
                </div>
        {/if}
</div>
