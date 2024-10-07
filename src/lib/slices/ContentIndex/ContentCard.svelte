<script lang="ts">
	import {
		type ImageField,
		type KeyTextField,
		type Content,
		type LinkField
	} from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import Button from '$lib/components/Button.svelte';
	import IconArrow from '~icons/material-symbols/arrows-more-up-rounded';

	export let title: KeyTextField = 'test title';
	export let description: KeyTextField = 'lorem epsum';
	export let image: ImageField;
	export let viewmoretext;
	export let tags;
	export let link: LinkField;
</script>

<div
	class="col-span-1 h-full flex flex-col rounded overflow-hidden shadow-lg border bg bg-slate-800/[0.35]"
>
	<PrismicImage field={image} />
	<div class="px-6 py-4 flex-grow">
		<div class="font-bold text-xl mb-2">{title}</div>
		<p class="text-gray-700 text-base">
			{description}
		</p>
	</div>
	<div class="px-6 pt-2 pb-2">
		{#if tags.length != 0}
			<div class="font-bold text-xl mb-2">Tech Used:</div>

			{#each tags as tag}
				<span
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
					>{tag}</span
				>
			{/each}
		{/if}
	</div>
	<div class="inline-block w-full p-5">
		<PrismicLink field={link} class="flex flex-row justify-end">
			{viewmoretext}
			<IconArrow />
		</PrismicLink>
	</div>
</div>
