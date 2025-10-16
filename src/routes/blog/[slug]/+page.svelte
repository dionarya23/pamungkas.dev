<script lang="ts">
  import type { PageData } from "./$types";

  const formatDate = (input: string) => {
    const date = new Date(input);
    return isNaN(date.getTime())
      ? input
      : date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        });
  };

  let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
  <title>{data.post.title} | Dion Pamungkas</title>
  <meta name="description" content={data.post.excerpt} />
</svelte:head>

<article class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
  {#if data.post.image}
    <img
      src={data.post.image}
      alt={data.post.imageAlt ?? data.post.title}
      class="object-cover bg-center h-64 w-full rounded-lg"
      loading="lazy"
    />
  {/if}

  <h1 class="text-4xl md:text-5xl font-bold mb-4 text-black">
    {data.post.title}
  </h1>

  <p class="text-gray-500 mb-8">
    Written on {formatDate(data.post.date)} • {data.post.readingMinutes} min read
  </p>

  <div class="prose max-w-none">
    {@html data.post.content}
  </div>
</article>
