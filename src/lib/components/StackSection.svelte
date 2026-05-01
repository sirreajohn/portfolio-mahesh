<script>
	import { onMount } from 'svelte';
	import data from "$lib/data/stack.json";

	let visible = $state(false);
	onMount(() => {
		setTimeout(() => visible = true, 100);
	});

	const { categories } = data;
</script>

<section id="stack" class="border-t border-border">
	<div class="grid grid-cols-1 lg:grid-cols-[0.25fr_1fr] min-h-screen">
		<!-- Section Label Column -->
		<div class="border-r border-border py-12 flex flex-col pt-24">
			{#if visible}
				<div class="anim-reveal delay-1 text-[10px] text-text-dim tracking-[0.3em] mb-2">// CAPABILITIES</div>
				<h2 class="anim-reveal delay-2 text-3xl lg:text-4xl font-bold tracking-tight">
					STACK<span class="text-accent animate-[blink_1s_step-end_infinite]">_</span>
				</h2>
				<div class="anim-reveal delay-3 mt-4 w-12 h-[1px] bg-accent"></div>
			{/if}
		</div>

		<!-- Stack Grid -->
		<div class="py-12 lg:py-20 flex flex-col justify-center">
			{#if visible}
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					{#each categories as category, ci}
						<div class="anim-fade-up border border-border p-5"
							style="animation-delay: {0.3 + ci * 0.15}s">
							<!-- Category header -->
							<div class="flex items-center gap-2 mb-4">
								<span class="text-[9px] text-accent tracking-widest">{category.prefix}</span>
								<span class="text-[9px] text-text-dim">│</span>
								<span class="text-xs font-bold tracking-wider">{category.label}</span>
							</div>

							<!-- Skill bars -->
							<div class="space-y-3">
								{#each category.items as item, i}
									<div class="group">
										<div class="flex items-center justify-between mb-1">
											<span class="text-[10px] text-text-muted tracking-wider group-hover:text-accent transition-colors duration-200">
												{item.name}
											</span>
											<span class="text-[9px] text-text-dim tabular-nums">{item.level}%</span>
										</div>
										<div class="h-[2px] bg-border relative overflow-hidden">
											<div class="absolute top-0 left-0 h-full bg-accent/60 transition-all duration-1000 ease-out"
												style="width: {visible ? item.level : 0}%; transition-delay: {0.5 + ci * 0.2 + i * 0.1}s">
											</div>
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/each}
				</div>

				<!-- Bottom note -->
				<div class="anim-reveal delay-10 mt-8 text-[10px] text-text-dim tracking-wider border-t border-border pt-4">
					// PROFICIENCY_LEVELS ARE SELF-ASSESSED — CALIBRATED AGAINST PRODUCTION USAGE
				</div>
			{/if}
		</div>
	</div>
</section>
