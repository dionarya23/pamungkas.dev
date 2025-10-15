<script lang="ts">
        const projects = [
        {
        icon: "💼",
        title: "Portfolio & Blog",
        badge: "New",
        description:
        "A modern portfolio and blog built with Svelte and Bun, focused on clean design and responsive layouts."
        },
        {
        icon: "🚀",
        title: "Web App",
        badge: "Active",
        description:
        "Building fast and scalable web applications using modern JavaScript frameworks."
        },
        {
        icon: "📱",
        title: "Mobile First",
        description:
        "Responsive designs that work beautifully on all devices, from mobile to desktop."
        },
        {
        icon: "🎨",
        title: "UI/UX Design",
        description:
        "Creating beautiful user interfaces with attention to detail and user experience."
        },
        {
        icon: "⚡",
        title: "Performance",
        description:
        "Optimizing web applications for speed and efficiency using latest technologies."
        },
        {
        icon: "🔧",
        title: "Open Source",
        description:
        "Contributing to open source projects and building tools for the developer community."
        }
        ];


</script>

<svelte:head>
        <title>Dion Pamungkas | Software Engineer</title>
        <meta name="description" content="Personal portfolio and blog of Pamungkas - Developer, writer, and creator" />
</svelte:head>

<div class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <!-- Header with Profile -->
        <header class="flex items-start justify-between gap-6 mb-16 md:gap-10">
                <div class="flex-1 pr-4">
                        <h1 class="text-4xl font-bold mb-2 text-black leading-tight">
                                <span class="block md:inline">Dion</span>
                                <span class="block md:inline md:ml-2">Pamungkas</span>
                        </h1>
                        <p class="text-gray-600 mb-6">Software Engineer</p>
                        
                        <!-- Social Links -->
                        <div class="flex gap-4 text-gray-600">
                                <a href="https://twitter.com/dionarya23" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors" aria-label="Twitter">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                </a>
                                <a href="https://github.com/dionarya23" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors" aria-label="GitHub">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                </a>
                                <a href="https://linkedin.com/in/dionarya" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors" aria-label="LinkedIn">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                </a>
                               
                                
                        </div>
                </div>

                <!-- Profile Picture -->
                 <img 
                        src="/image/dion-1.jpg" 
                        alt="Dion Pamungkas" 
                        class="w-24 h-24 rounded-2xl object-cover shadow-lg shrink-0"
                />
        </header>

        <!-- About Section -->
        <section class="mb-16">
                <h2 class="text-2xl font-bold mb-4">About</h2>
                <div class="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                                I'm a passionate developer building elegant solutions for the web. I write about development, design, and everything in between.
                        </p>
                        <p>
                                Hugely inspired by modern web technologies and clean design principles. I love creating meaningful digital experiences that make a difference.
                        </p>
                </div>
        </section>

        <!-- Portfolio Section -->
        <section>
                <div class="flex items-center justify-between mb-8">
                        <h2 class="text-2xl font-bold">Portfolio</h2>
                        <a href="/blog" class="px-4 py-2 border border-black text-black rounded-lg text-sm transition-colors flex items-center gap-2 hover:bg-black hover:text-white">
                                <span>📝</span>
                                <span>View Blog</span>
                        </a>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                         {#each projects as { icon, title, badge, description }}
                        <div class="border border-gray-200 rounded-lg p-6">
                        <div class="flex items-start gap-3 mb-3">
                        <span class="text-2xl">{icon}</span>
                        <div class="flex-1">
                                <h3 class="font-semibold flex items-center gap-2">
                                {title}
                                {#if badge}
                                <span class="text-xs px-2 py-0.5 bg-black text-white rounded">{badge}</span>
                                {/if}
                                </h3>
                        </div>
                        </div>
                        <p class="text-gray-600 text-sm">{description}</p>
                        </div>
                        {/each}

                       
                </div>
        </section>
</div>
