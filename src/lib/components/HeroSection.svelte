<script>
	import WorldMap from "./WorldMap.svelte";
	import data from "$lib/data/hero.json";

	const { techIcons, stackTags } = data;
</script>

<section id="home" class="min-h-[70vh] flex flex-col justify-center">
	<!-- Main 3-column grid -->
	<div class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_0.8fr] gap-0 h-full">
		<!-- LEFT COLUMN — Hero Text -->
		<div class="flex flex-col justify-center py-12 lg:py-0 border-r border-border">
			<!-- Prefix label -->
			<div
				class="anim-reveal delay-3 text-[10px] text-text-dim tracking-[0.3em] mb-6"
			>
				// INITIALIZE
			</div>

			<!-- Main heading -->
			<h1
				class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight mb-6"
			>
				<span class="anim-reveal delay-4 block text-text">FULL</span>
				<span class="anim-reveal delay-5 block text-text">STACK</span>
				<span class="anim-reveal delay-6 block text-accent"
					>DEV<span
						class="inline-block animate-[blink_1s_step-end_infinite] text-accent"
						>_</span
					></span
				>
			</h1>

			<!-- Subtitle -->
			<p
				class="anim-reveal delay-7 text-xs text-text-muted leading-relaxed max-w-xs mb-8"
			>
				Engineering robust, scalable systems<br />
				from interface to infrastructure.<br />
				<span class="text-text-dim"
					>Precision-driven. Performance-obsessed.</span
				>
			</p>

			<!-- CTA -->
			<div class="anim-reveal delay-8 flex flex-wrap gap-4 mb-12">
				<a
					href="/contact"
					class="inline-flex items-center gap-2 px-4 py-2 border border-accent text-accent text-[10px] tracking-widest
						hover:bg-accent hover:text-bg transition-all duration-300"
				>
					INITIATE_CONTACT
				</a>
				<a
					href="/work"
					class="inline-flex items-center gap-2 px-4 py-2 border border-border text-text-muted text-[10px] tracking-widest
						hover:border-accent hover:text-accent transition-all duration-300"
				>
					VIEW_WORK
				</a>
			</div>

			<!-- Tech icons row -->
			<div class="mt-10 flex gap-2 flex-wrap">
				{#each techIcons as icon, i}
					<div
						class="anim-scale-in w-10 h-10 border border-border flex items-center justify-center
						text-[9px] text-text-dim hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
						style="animation-delay: {1.0 + i * 0.08}s"
						title={icon.label}
					>
						{icon.name}
					</div>
				{/each}
			</div>
		</div>

		<!-- CENTER COLUMN — Hero Image -->
		<div
			class="relative flex items-center justify-center border-r border-border overflow-hidden"
		>
			<!-- CSS-generated dark abstract image -->
			<div
				class="anim-scale-in delay-5 relative w-full h-full min-h-[400px] lg:min-h-0"
			>
				<!-- Abstract gradient background -->
				<div
					class="absolute inset-0"
					style="background:
						radial-gradient(ellipse at 30% 40%, rgba(0, 255, 156, 0.06) 0%, transparent 60%),
						radial-gradient(ellipse at 70% 60%, rgba(0, 255, 156, 0.03) 0%, transparent 50%),
						radial-gradient(ellipse at 50% 50%, rgba(20, 24, 22, 1) 0%, rgba(13, 15, 14, 1) 100%);
					"
				>
					<!-- Grid pattern overlay -->
					<div
						class="absolute inset-0 opacity-[0.08]"
						style="background-image:
							linear-gradient(rgba(0, 255, 156, 0.3) 1px, transparent 1px),
							linear-gradient(90deg, rgba(0, 255, 156, 0.3) 1px, transparent 1px);
						background-size: 40px 40px;"
					></div>

					<!-- Diagonal lines -->
					<div
						class="absolute inset-0 opacity-[0.04]"
						style="background-image:
							repeating-linear-gradient(
								45deg,
								transparent,
								transparent 20px,
								rgba(0, 255, 156, 0.2) 20px,
								rgba(0, 255, 156, 0.2) 21px
							);"
					></div>

					<!-- Center glow -->
					<div
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
						style="background: radial-gradient(circle, rgba(0, 255, 156, 0.15), transparent 70%);"
					></div>

					<!-- Geometric shapes -->
					<div
						class="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/10 rotate-45"
					></div>
					<div
						class="absolute bottom-1/3 right-1/4 w-24 h-24 border border-accent/5 rotate-12"
					></div>
					<div
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-accent/[0.07] rounded-full"
					></div>
					<div
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-accent/[0.04] rounded-full"
					></div>
				</div>

				<!-- Corner HUD brackets -->
				<div
					class="absolute top-4 left-4 text-accent/50 text-lg leading-none font-light"
				>
					┌
				</div>
				<div
					class="absolute top-4 right-4 text-accent/50 text-lg leading-none font-light"
				>
					┐
				</div>
				<div
					class="absolute bottom-10 left-4 text-accent/50 text-lg leading-none font-light"
				>
					└
				</div>
				<div
					class="absolute bottom-10 right-4 text-accent/50 text-lg leading-none font-light"
				>
					┘
				</div>

				<!-- HUD data overlay -->
				<div
					class="absolute top-6 left-8 text-[9px] text-text-dim tracking-wider"
				>
					<div>RES: 1920x1080</div>
					<div class="mt-1">FPS: 60.00</div>
				</div>
				<div
					class="absolute top-6 right-8 text-[9px] text-text-dim tracking-wider text-right"
				>
					<div>RENDER: ACTIVE</div>
					<div class="mt-1 text-accent/60">■ ONLINE</div>
				</div>
			</div>

			<!-- Bottom metadata bar -->
			<div
				class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-bg/80 border-t border-border
				flex items-center justify-between text-[9px] text-text-dim tracking-wider backdrop-blur-sm"
			>
				<span>BASED IN EARTH</span>
				<span class="text-accent/60">●</span>
				<span>UTC+5:30</span>
				<span class="text-accent/60">●</span>
				<span>LAT 12.97°N</span>
			</div>
		</div>

		<!-- RIGHT COLUMN — Data Sidebar -->
		<div class="flex flex-col divide-y divide-border h-full overflow-y-auto scrollbar-none">
			<!-- STATUS Panel -->
			<div class="p-8 lg:p-10 anim-reveal-right delay-4">
				<div class="text-[10px] text-text-dim tracking-[0.3em] mb-4">
					// STATUS
				</div>
				<div class="flex items-center gap-3 mb-3">
					<span
						class="inline-block w-2.5 h-2.5 rounded-full bg-accent pulse-dot"
					></span>
					<span class="text-xs text-text">ONLINE — AVAILABLE</span>
				</div>
				<div class="space-y-2 text-[10px] text-text-muted">
					<div class="flex justify-between">
						<span class="text-text-dim">ROLE</span>
						<span>FULL_STACK_DEV</span>
					</div>
					<div class="flex justify-between">
						<span class="text-text-dim">EXP</span>
						<span>4+ YEARS</span>
					</div>
					<div class="flex justify-between">
						<span class="text-text-dim">MODE</span>
						<span class="text-accent">FREELANCE | CONTRACT</span>
					</div>
				</div>
			</div>

			<!-- STACK Panel -->
			<div class="p-8 lg:p-10 anim-reveal-right delay-6">
				<div class="text-[10px] text-text-dim tracking-[0.3em] mb-4">
					// STACK
				</div>
				<div class="flex flex-wrap gap-1.5">
					{#each stackTags as tag, i}
						<span
							class="anim-scale-in px-2 py-0.5 border border-border text-[9px] text-text-muted tracking-wider
							hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
							style="animation-delay: {0.8 + i * 0.05}s"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>

			<!-- LOCATE_ME Panel -->
			<div class="p-8 lg:p-10 flex-1 anim-reveal-right delay-8 relative overflow-hidden">
				<div class="text-[10px] text-text-dim tracking-[0.3em] mb-4">
					// LOCATE_ME
				</div>
				<WorldMap />
				<div
					class="mt-3 flex items-center justify-between text-[9px] text-text-dim"
				>
					<span>BANGALORE, IN</span>
					<span class="text-accent/60">12.97°N, 77.59°E</span>
				</div>
			</div>
		</div>
	</div>
</section>
