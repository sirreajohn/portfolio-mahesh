<script lang="ts">
	import { type ImageField, type KeyTextField, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	export let title: KeyTextField = 'test title';
	export let description: KeyTextField = 'lorem epsum';
	export let image: ImageField;
	export let viewmoretext;
	export let tags;
	export let post: Content.BlogpostDocument | Content.ProjectDocument;
</script>

<div class="rounded overflow-hidden shadow-lg border bg bg-slate-800/[0.35]">
	<PrismicImage field={image} />
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2">{title}</div>
		<p class="text-gray-700 text-base">
			{description}
		</p>
	</div>
	<div class="px-6 pt-2 pb-2">
		<div class="font-bold text-xl mb-2">Tech Used:</div>
		{#each tags as tag}
			<span
				class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
				>{tag}</span
			>
		{/each}
	</div>
	<div class="inline-block text-right w-full p-5">
		<PrismicLink document={post}>{viewmoretext}</PrismicLink>
	</div>
</div>
