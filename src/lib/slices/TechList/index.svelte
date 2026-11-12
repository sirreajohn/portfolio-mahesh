<script lang="ts">
	import { onMount } from 'svelte';
	import { type Content } from '@prismicio/client';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import IconStar from '~icons/mingcute/ai-fill';
	import IconCode from '~icons/mingcute/code-fill';
	import SvelteMarkdown from 'svelte-markdown';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { HTML } from '@threlte/extras';

	gsap.registerPlugin(ScrollTrigger);

	let arrSize: number = 30;
	export let slice: Content.TechListSlice;

	let component: HTMLElement;
	const DefaultVariationScrollTrigger = () => {
		const prefersReducedMotion = window.matchMedia('(preferes-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) {
			return;
		}
		const t1 = gsap.timeline({
			scrollTrigger: {
				trigger: component,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 4
			}
		});

		t1.fromTo(
			'.tech-row',
			{
				x: (index) => {
					return index % 2 == 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400);
				}
			},
			{
				x: (index) => {
					return index % 2 == 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400);
				},
				ease: 'power1.inOut'
			}
		);
	};

	onMount(DefaultVariationScrollTrigger);
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="overflow-hidden"
	bind:this={component}
>
	<Bounded as="div">
		<Heading size="lg" class="mb-8" tag="h2">{slice.primary.heading}</Heading>
	</Bounded>
	{#if slice.variation === 'default'}
		<!-- this is slidy-slidy text variation -->
		{#each slice.primary.items as { tech_name, tech_color }}
			<div
				class="tech-row mb-8 flex items-center justify-center gap-6 text-slate-800"
				aria-label={tech_name || undefined}
			>
				{#each Array(arrSize) as _, index}
					<span
						class="tech-item text-2xl font-extrabold uppercase tracking-tighter"
						style="color: {index === Math.floor(arrSize / 2) && tech_color
							? tech_color
							: 'inherit'}"
					>
						{#if index === Math.floor(arrSize / 2)}
							{tech_name}
							<!-- <img class="w-px" src="https://skillicons.dev/icons?i=python" alt="" /> -->
						{/if}</span
					>
					<span class="text-3xl"><IconCode /></span>
				{/each}
			</div>
		{/each}
	{:else}
		<!-- this is tech icons variation -->
		<Bounded as="div">
			<div class="flex flex-row w-full flex-wrap justify-evenly">
				{#each slice.primary.items as { techlist }}
					<SvelteMarkdown source={techlist} />
				{/each}
			</div>
		</Bounded>
	{/if}
</section>
