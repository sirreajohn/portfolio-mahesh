<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import { type Content, isFilled } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import ContentList from './ContentList.svelte';
	import ContentListCards from './ContentListCards.svelte';

	export let slice: Content.ContentIndexSlice;
	export let items: Content.BlogpostDocument[] | Content.ProjectDocument[];

	// this order is defined in prismic
	let contentOrder = slice.primary.contentorder.map(({ contentuid }) => contentuid);
	items.sort((a, b) => {
		let indexA = contentOrder.indexOf(a.uid);
		let indexB = contentOrder.indexOf(b.uid);

		// If UID is not found in uidOrder, assign Infinity for "random" order
		indexA = indexA === -1 ? Infinity : indexA;
		indexB = indexB === -1 ? Infinity : indexB;

		return indexA - indexB;
	});
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Heading size="xl" class="mb-8">
		{slice.primary.heading}
	</Heading>
	{#if isFilled.richText(slice.primary.description)}
		<div class="prose prose-xl prose-invert mb-10">
			<PrismicRichText field={slice.primary.description} />
		</div>
	{/if}

	<!-- variation - 1 -->
	<!-- <ContentList
		fallbackItemImage={slice.primary.fallbackimage}
		{items}
		viewMoreText={slice.primary.viewmoretext}
	/> -->

	<!-- variation - 2 -->
	<ContentListCards
		fallbackItemImage={slice.primary.fallbackimage}
		{items}
		viewMoreText={slice.primary.viewmoretext}
	/>
</Bounded>
