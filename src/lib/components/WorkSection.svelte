<script>
	import { onMount } from 'svelte';
	import data from "$lib/data/projects.json";

	let visible = $state(false);
	onMount(() => {
		setTimeout(() => visible = true, 100);
	});

	const { projects } = data;
</script>

<section id="work" class="border-t border-border">
	<div class="grid grid-cols-1 lg:grid-cols-[0.25fr_1fr] min-h-screen">
		<!-- Section Label Column -->
		<div class="border-r border-border py-12 flex flex-col pt-24">
			{#if visible}
				<div class="anim-reveal delay-1 text-[10px] text-text-dim tracking-[0.3em] mb-2">// OUTPUT</div>
				<h2 class="anim-reveal delay-2 text-3xl lg:text-4xl font-bold tracking-tight">
					WORK<span class="text-accent animate-[blink_1s_step-end_infinite]">_</span>
				</h2>
				<div class="anim-reveal delay-3 mt-4 w-12 h-[1px] bg-accent"></div>
				<p class="anim-reveal delay-4 mt-4 text-[10px] text-text-dim tracking-wider leading-relaxed">
					SELECTED<br/>PROJECTS<br/>
					<span class="text-accent">{projects.length} ENTRIES</span>
				</p>
			{/if}
		</div>

		<!-- Projects Grid -->
		<div class="py-12 lg:py-20 flex flex-col justify-center">
			{#if visible}
				<div class="space-y-4">
					{#each projects as project, i}
						<div
							class="anim-fade-up group border border-border p-5 lg:p-6
								hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
							style="animation-delay: {0.3 + i * 0.15}s"
						>
							<!-- Hover glow effect -->
							<div class="absolute inset-0 bg-gradient-to-r from-accent/[0.02] to-transparent
								opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							<div class="relative z-10">
								<!-- Top row -->
								<div class="flex items-start justify-between mb-3">
									<div class="flex items-center gap-3">
										<span class="text-[9px] text-text-dim tracking-wider">{project.id}</span>
										<span class="text-[9px] text-text-dim">│</span>
										<span class="text-[9px] text-text-dim tracking-wider">{project.type}</span>
									</div>
									<div class="flex items-center gap-2">
										<span class="text-[9px] text-text-dim">{project.year}</span>
										<span class="inline-block w-1.5 h-1.5 rounded-full
											{project.status === 'ACTIVE' ? 'bg-accent pulse-dot' :
											 project.status === 'OPEN_SOURCE' ? 'bg-blue-400' : 'bg-text-dim'}">
										</span>
										<span class="text-[9px] {project.status === 'ACTIVE' ? 'text-accent' : 'text-text-dim'} tracking-wider">
											{project.status}
										</span>
									</div>
								</div>

								<!-- Project name -->
								<h3 class="text-xl lg:text-2xl font-bold tracking-tight mb-2
									group-hover:text-accent transition-colors duration-300">
									{project.name}
								</h3>

								<!-- Description -->
								<p class="text-xs text-text-muted leading-relaxed mb-4 max-w-xl">
									{project.desc}
								</p>

								<!-- Stack tags -->
								<div class="flex flex-wrap gap-1.5">
									{#each project.stack as tech}
										<span class="px-2 py-0.5 border border-border text-[8px] text-text-dim tracking-widest
											group-hover:border-accent/20 transition-colors duration-300">
											{tech}
										</span>
									{/each}
								</div>
							</div>

							<!-- Corner markers -->
							<div class="absolute top-2 right-2 text-[10px] text-border-accent group-hover:text-accent/30 transition-colors">→</div>
						</div>
					{/each}
				</div>

				<!-- Footer note -->
				<div class="anim-reveal delay-10 mt-6 text-[10px] text-text-dim tracking-wider">
					// MORE PROJECTS AVAILABLE ON REQUEST — <a href="/contact" class="text-accent hover:underline">INITIATE_QUERY</a>
				</div>
			{/if}
		</div>
	</div>
</section>
