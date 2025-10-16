<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../app.css";
  import Navigation from "$lib/components/Navigation.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Navigation />
<main
  class="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16"
>
  {@render children?.()}
</main>
<footer class="border-t border-gray-200 mt-auto">
  <div class="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600 text-sm">
    <p>© 2025 Dion Pamungkas. Built with Svelte and Bun.</p>
  </div>
</footer>
