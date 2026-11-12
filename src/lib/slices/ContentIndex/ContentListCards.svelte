<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import { type Content, type ImageField, type KeyTextField } from '@prismicio/client';
	import ContentCard from './ContentCard.svelte';
	import { gsap } from 'gsap';

	export let items: Content.BlogpostDocument[] | Content.ProjectDocument[];
	export let fallbackItemImage: ImageField;
	export let viewMoreText: KeyTextField = 'Read More';

	// onMount(() => {
	// 	gsap.from('.fade-card', {
	// 		opacity: 0,
	// 		y: 150,
	// 		duration: 2,
	// 		stagger: 0.2
	// 	});
	// });

	// force update this animation when data is "switched" between projects and blogs
	afterUpdate(() => {
		gsap.from('.fade-card', {
			opacity: 0,
			y: 150,
			duration: 2,
			stagger: 0.2
		});
	});
</script>

<div
	class="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
>
	{#each items as post, index (post.id + index)}
		<div class="fade-card">
			<ContentCard
				title={post.data.title}
				description={post.data.shortdescription}
				image={post.data.hoverimage || fallbackItemImage}
				viewmoretext={viewMoreText}
				tags={post.tags}
				link={post.data.link}
			/>
		</div>
	{/each}
</div>
