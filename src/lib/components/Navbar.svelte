<script>
	import { page } from '$app/state';
	let { scrollY = 0 } = $props();

	const navItems = [
		{ id: "01", label: "HOME", href: "/" },
		{ id: "02", label: "ABOUT", href: "/about" },
		{ id: "03", label: "WORK", href: "/work" },
		{ id: "04", label: "STACK", href: "/stack" },
		{ id: "05", label: "CONTACT", href: "/contact" },
	];

	const activeSection = $derived(page.url.pathname);
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 h-16"
	style="background-color: rgba(13, 15, 14, {scrollY > 50 ? 0.95 : 0.7}); backdrop-filter: blur({scrollY > 50 ? 12 : 4}px);"
>
	<div class="flex items-center justify-between px-10 lg:px-16 xl:px-24 h-16">
		<!-- Logo -->
		<div class="anim-reveal-left delay-2 flex items-center gap-2">
			<span class="text-accent font-bold text-sm tracking-wider">&lt;/&gt;</span>
			<span class="text-text-dim text-[10px] hidden sm:inline">SYS.v1.0</span>
		</div>

		<!-- Nav Items -->
		<div class="flex items-center gap-2 sm:gap-6">
			{#each navItems as item, i}
				<a
					href={item.href}
					class="anim-fade-up text-[10px] tracking-widest transition-colors duration-200 hover:text-accent
						{activeSection === item.href ? 'text-accent' : 'text-text-muted'}"
					style="animation-delay: {0.3 + i * 0.1}s"
				>
					<span class="text-text-dim">{item.id}_</span>{item.label}
				</a>
			{/each}
		</div>

		<!-- Status Indicator -->
		<div class="anim-reveal-right delay-5 flex items-center gap-2 text-[10px] tracking-wider">
			<span class="inline-block w-2 h-2 rounded-full bg-accent pulse-dot"></span>
			<span class="text-text-muted hidden md:inline">AVAILABLE FOR WORK</span>
			<span class="text-text-muted md:hidden">AVAIL</span>
		</div>
	</div>
</nav>
