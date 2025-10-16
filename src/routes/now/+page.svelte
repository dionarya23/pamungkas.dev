<script lang="ts">
</script>

<svelte:head>
  <title>Now | Dion Pamungkas</title>
  <meta name="description" content="What I'm doing now" />
</svelte:head>

<div class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
  <div class="space-y-3">
    <h1 class="text-4xl md:text-5xl font-bold text-black">
      What I'm Doing Now
    </h1>
    <p class="text-gray-700">
      This is a
      <a
        href="https://nownownow.com/about"
        target="_blank"
        class="font-semibold hover:underline">now page</a
      >, inspired by
      <a
        href="https://sive.rs/nowff"
        target="_blank"
        class="font-semibold hover:underline">Derek Sivers</a
      >. A "Now" page is a space to share what I'm focusing on right now, not my
      past achievements or future plans, but the things currently shaping my
      work and life.
    </p>
  </div>

  <div class="space-y-6">
    <section class="rounded-lg p-1">
      <h2 class="text-2xl font-semibold mb-4">Current Projects</h2>
      <ol class="list-decimal list-inside space-y-2 text-gray-700">
        <li>
          Building a personal portfolio and blog using Svelte and Bun to
          experiment with fast, modern web frameworks.
        </li>
        <li>
          Exploring modern web development patterns such as reactive design and
          serverless architecture.
        </li>
        <li>
          Experimenting with AI model integration for creative and developer
          productivity tools.
        </li>
      </ol>
    </section>

    <section class="rounded-lg p-1">
      <h2 class="text-2xl font-semibold mb-4">Learning</h2>
      <ol class="list-decimal list-inside space-y-2 text-gray-700">
        <li>
          Learning Rust and exploring how low-level systems programming works.
        </li>
        <li>
          Studying system design and architecture to build more reliable apps.
        </li>
        <li>
          Getting into DevOps, especially Kubernetes and automation workflows.
        </li>
      </ol>
    </section>

    <section class="rounded-lg p-1">
      <h2 class="text-2xl font-semibold mb-4">Reading</h2>
      <p class="text-gray-700 leading-relaxed">
        Currently reading
        <a
          class="hover:underline"
          href="https://www.goodreads.com/book/show/36393774-laut-bercerita"
          target="_blank"><i>Laut Bercerita</i> by <b>Leila S. Chudori</b></a
        >, a powerful story about loss and resilience, and
        <a
          class="hover:underline"
          href="https://www.goodreads.com/book/show/12895326-dari-penjara-ke-penjara?ref=nav_sb_ss_1_17"
          target="_blank"><i>Dari Penjara ke Penjara</i> by <b>Tan Malaka</b></a
        >, exploring his political journey and ideas on independence. Also
        keeping up with articles on software engineering best practices and
        modern web trends.
      </p>
    </section>
  </div>

  <p class="mt-8 text-sm text-gray-500 italic">
    Last updated: October 15, 2025
  </p>
</div>
