<script lang="ts">
        import type { PageData } from './$types';

        const formatDate = (input: string) => {
                const date = new Date(input);
                return isNaN(date.getTime())
                        ? input
                        : date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
        };

        let { data } = $props<{ data: PageData }>();

        type Post = PageData['posts'][number];

        const groupPostsByYear = (posts: Post[]) => {
                if (!posts?.length) return [];

                const groups = new Map<string, Post[]>();

                for (const post of posts) {
                        const yearValue = new Date(post.date).getFullYear();
                        const key = Number.isNaN(yearValue) ? 'Other' : String(yearValue);
                        if (!groups.has(key)) {
                                groups.set(key, []);
                        }
                        groups.get(key)!.push(post);
                }

                return Array.from(groups.entries())
                        .map(([year, groupPosts]) => ({ year, posts: groupPosts }))
                        .sort((a, b) => {
                                const yearA = parseInt(a.year, 10);
                                const yearB = parseInt(b.year, 10);

                                if (Number.isNaN(yearA) && Number.isNaN(yearB)) return 0;
                                if (Number.isNaN(yearA)) return 1;
                                if (Number.isNaN(yearB)) return -1;
                                return yearB - yearA;
                        });
        };
</script>

<svelte:head>
        <title>Blog | Dion Pamungkas</title>
        <meta name="description" content="Technical blog posts and articles" />
</svelte:head>

<div class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
  <div class="space-y-3">
    <h1 class="text-4xl md:text-5xl font-bold text-black">Blog</h1>
    <p class="text-gray-700">
      Writing about programming, development, and the ideas behind the code.<br class="hidden sm:block" />
      Notes, experiments, and reflections from my journey as a developer.
    </p>
  </div>

  {#if !data.posts?.length}
    <p class="text-gray-600">No blog posts yet. Check back soon!</p>
  {:else}
    <div class="space-y-10">
      {#each groupPostsByYear(data.posts) as group (group.year)}
        <section class="space-y-6">
          <h2 class="text-xl font-semibold text-gray-900">{group.year}</h2>
          <div class="space-y-6">
            {#each group.posts as post (post.slug)}
              <article class="border border-gray-200 rounded-lg p-6 transition-shadow group hover:shadow-sm">
                <a href={`/blog/${post.slug}`} class="block">
                  <h3 class="text-2xl font-semibold mb-2 group-hover:underline text-black">
                    {post.title}
                  </h3>
                  <p class="text-sm text-gray-500 mb-3">
                    {formatDate(post.date)} • {post.readingMinutes} min read
                  </p>
                  <p class="text-gray-700 leading-relaxed">{post.excerpt}</p>
                </a>
              </article>
            {/each}
          </div>
        </section>
      {/each}
    </div>
  {/if}
</div>
