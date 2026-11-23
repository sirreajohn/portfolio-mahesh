<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let {
    name = "",
    description = "",
    tags = [],
    demo = "",
    source = "",
    icon = "",
    index = 0,
  } = $props();

  const number = $derived(String(index + 1).padStart(2, "0"));
  let cardEl = $state();

  onMount(() => {
    gsap.fromTo(
      cardEl,
      { opacity: 0, y: 35, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: (index % 3) * 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardEl,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
</script>

<div
  bind:this={cardEl}
  class="border border-gray-800 rounded-lg p-5 flex flex-col gap-4 hover:border-green-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 bg-gray-900/30"
>
  <div class="flex items-start justify-between">
    <div class="flex items-center gap-2">
      {#if icon}
        <img src={icon} alt="" class="w-4 h-4" />
      {:else}
        <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
      {/if}
      <h3 class="text-green-400 font-bold text-sm">{name}/</h3>
    </div>
    <span class="text-gray-600 text-xs">{number}</span>
  </div>

  <p class="text-gray-400 text-xs leading-relaxed flex-1">{description}</p>

  <div class="flex flex-wrap gap-1.5">
    {#each tags as tag}
      <span class="px-2 py-0.5 text-[11px] border border-gray-700 rounded text-gray-400">{tag}</span>
    {/each}
  </div>

  <div class="flex gap-4 pt-1 text-xs">
    {#if demo}
      <a href={demo} target="_blank" rel="noreferrer" class="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1">
        <span>↗</span> Demo
      </a>
    {/if}
    {#if source}
      <a href={source} target="_blank" rel="noreferrer" class="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        Source
      </a>
    {/if}
  </div>
</div>
