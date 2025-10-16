<script lang="ts">
  const programming_languages = ["JavaScript", "TypeScript", "Golang", "PHP"];
  const technologies = [
    "Kubernetes",
    "Tailwind CSS",
    "PostgreSQL",
    "Svelte",
    "Vue.js",
    "Node.js",
    "MySQL",
    "Redis",
    "Docker",
    "Git",
  ];
</script>

<svelte:head>
  <title>About | Dion Pamungkas Portfolio</title>
  <meta
    name="description"
    content="About Pamungkas - Background, skills, and experience"
  />
</svelte:head>

<div class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
  <h1 class="text-4xl md:text-5xl font-bold mb-6 text-black">About Me</h1>

  <div class="space-y-6">
    <section class="rounded-lg p-1">
      <h2 class="text-2xl font-semibold mb-4">Background</h2>
      <p class="text-gray-700 leading-relaxed">
        I'm Dion Pamungkas, a full-stack developer who enjoys building for the
        web. Over the past few years, I've worked on different kinds of products
        and learned to appreciate clean code, good design, and small details
        that make things feel right.
      </p>
    </section>

    <section class="rounded-lg p-1">
      <h2 class="text-2xl font-semibold mb-4">Skills</h2>

      <!-- Programming Languages -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2 text-gray-800">
          Programming Languages
        </h3>
        <div class="flex flex-wrap gap-2">
          {#each programming_languages as language}
            <span class="px-4 py-2 bg-black text-white rounded-full text-sm"
              >{language}</span
            >
          {/each}
        </div>
      </div>

      <!-- Frameworks & Technologies -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2 text-gray-800">
          Frameworks & Technologies
        </h3>
        <div class="flex flex-wrap gap-2">
          {#each technologies as tech}
            <span class="px-4 py-2 bg-black text-white rounded-full text-sm"
              >{tech}</span
            >
          {/each}
        </div>
      </div>
    </section>

    <section class="rounded-lg p-1">
      <h2 class="text-2xl font-semibold mb-4">Experience</h2>
      <p class="text-gray-700 leading-relaxed">
        I’ve worked with
        <a
          href="https://chameleon.co.id"
          target="_blank"
          class="font-semibold text-gray-800 hover:underline transition"
          >Chameleon Tech</a
        >,
        <a
          href="https://lifepack.id"
          target="_blank"
          class="font-semibold text-gray-800 hover:underline transition"
          >Lifepack.id</a
        >, and
        <a
          href="https://bahaso.com"
          target="_blank"
          class="font-semibold text-gray-800 hover:underline transition"
          >Bahaso.com</a
        >, making backend services, APIs, and features people use every day.
      </p>
      <p class="text-gray-700 leading-relaxed">
        Now I’m <strong>collaborating</strong> with
        <a
          href="https://president.ac.id"
          target="_blank"
          class="font-semibold text-gray-800 hover:underline transition"
          >President University</a
        >
        on internal tools, building, improving, and maintaining the systems behind
        the scenes.
      </p>
    </section>
  </div>
</div>
