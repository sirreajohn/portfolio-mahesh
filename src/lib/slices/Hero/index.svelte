<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Scene from './Scene.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	export let slice: Content.HeroSlice;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(preferes-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) {
			gsap.to('.name-animatio', {
				opacity: 1
			});
			gsap.to('.job-title', {
				opacity: 1
			});
		}

		const timeline = gsap.timeline();
		timeline.fromTo(
			'.name-animation',
			{
				x: -100,
				opacity: 0,
				rotate: -10
			},
			{
				x: 0,
				rotate: 0,
				opacity: 1,
				ease: `elastic.out(1, 0.3)`,
				duration: 1,
				transformOrigin: `left top`,
				delay: 0.5,
				stagger: {
					each: 0.5,
					from: 'random'
				}
			}
		);
		timeline.fromTo(
			'.job-title',
			{
				y: 20,
				opacity: 0,
				scale: 1.2
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scale: 1,
				ease: `elastic.out(1, 0.3)`
			}
		);
	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="px-4 md:px-6"
>
	<div class="mx-auto w-full max-w-7xl">
		<div class="grid min-h-[65vh] grid-cols-1 items-center md:grid-cols-2">
			<div
				class="relative z-10 row-span-1 row-start-1 -my-10 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0"
			>
				<Scene></Scene>
			</div>
			<div class="col-start-1 md:row-start-1">
				<h1
					class="mb-2 md:mb-8 text-[clamp(3rem,20vmin,10rem)] font-extrabold leading-none tracking-tighter text-nowrap"
					aria-label={`${slice.primary.first_name} ${slice.primary.last_name}`}
				>
					<span class="block text-slate-400">
						<span class="name-animation inline-block opacity-100">{slice.primary.first_name}</span>
					</span>
					<span class="block text-slate-600 -mt-[.2em]">
						<span class="name-animation inline-block opacity-100">{slice.primary.last_name}</span>
					</span>
				</h1>
				<span
					class="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500
		bg-clip-text text-transparent text-2xl font-bold
		uppercase tracking-[.2em] md:text-4xl opacity-0"
				>
					{slice.primary.tagline}
				</span>
			</div>
		</div>
	</div>
</section>
