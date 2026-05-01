<script>
	import { onMount } from 'svelte';
	import data from "$lib/data/about.json";

	let visible = $state(false);
	onMount(() => {
		setTimeout(() => visible = true, 100);
	});

	const { metrics, timeline, bio } = data;
</script>

<section id="about" class="border-t border-border">
	<div class="grid grid-cols-1 lg:grid-cols-[0.25fr_1fr] min-h-screen">
		<!-- Section Label Column -->
		<div class="border-r border-border py-12 flex flex-col pt-24">
			{#if visible}
				<div class="anim-reveal delay-1 text-[10px] text-text-dim tracking-[0.3em] mb-2">// PROFILE</div>
				<h2 class="anim-reveal delay-2 text-3xl lg:text-4xl font-bold tracking-tight">
					ABOUT<span class="text-accent animate-[blink_1s_step-end_infinite]">_</span>
				</h2>
				<div class="anim-reveal delay-3 mt-4 w-12 h-[1px] bg-accent"></div>
			{/if}
		</div>

		<!-- Content Column -->
		<div class="py-12 lg:py-20 flex flex-col justify-center">
			{#if visible}
				<!-- Bio -->
				<div class="max-w-2xl mb-12">
					{#each bio as paragraph, i}
						<p class="anim-reveal text-sm text-text-muted leading-relaxed mb-4" 
							style="animation-delay: {0.3 + i * 0.1}s">
							{paragraph}
						</p>
					{/each}
				</div>

				<!-- Metrics Grid -->
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
					{#each metrics as metric, i}
						<div class="anim-fade-up border border-border p-4 hover:border-accent/30 transition-colors duration-300"
							style="animation-delay: {0.5 + i * 0.1}s">
							<div class="text-2xl lg:text-3xl font-bold text-accent mb-1">{metric.value}</div>
							<div class="text-[9px] text-text-dim tracking-widest">{metric.label}</div>
						</div>
					{/each}
				</div>

				<!-- Timeline -->
				<div class="anim-reveal delay-8">
					<div class="text-[10px] text-text-dim tracking-[0.3em] mb-4">// TIMELINE</div>
					<div class="space-y-3 border-l border-border pl-4">
						{#each timeline as entry, i}
							<div class="anim-fade-up relative" style="animation-delay: {0.9 + i * 0.15}s">
								<div class="absolute -left-[17px] top-1 w-2 h-2 border border-accent bg-bg"></div>
								<div class="flex gap-4 items-start">
									<span class="text-[10px] text-accent font-bold min-w-[40px]">{entry.year}</span>
									<span class="text-xs text-text-muted">{entry.event}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
