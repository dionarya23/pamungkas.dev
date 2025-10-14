<script lang="ts">
    import { page } from '$app/stores';

	let mobileMenuOpen = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/now', label: 'Now' }
	];
</script>

<nav class="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-between items-center h-16">
            <a href="/" class="text-xl font-bold text-black">
				Pamungkas.dev
			</a>

			<!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
                {#each links as link}
                    <a
                        href={link.href}
                        class="text-gray-700 hover:text-black transition-colors {$page.url.pathname === link.href ? 'font-semibold text-black' : ''}"
                    >
                        {link.label}
                    </a>
                {/each}
            </div>

            <!-- Mobile Menu Button -->
            <div class="flex md:hidden items-center space-x-4">
                <button
					onclick={() => mobileMenuOpen = !mobileMenuOpen}
					class="p-2"
					aria-label="Toggle menu"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden pb-4">
				{#each links as link}
                    <a
                        href={link.href}
                        onclick={() => mobileMenuOpen = false}
                        class="block py-2 text-gray-700 hover:text-black transition-colors {$page.url.pathname === link.href ? 'font-semibold text-black' : ''}"
                    >
						{link.label}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</nav>
