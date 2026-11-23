<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let {
    company = "",
    role = "",
    duration = "",
    description = "",
    tags = [],
    icon = "",
    index = 0,
    isLast = false,
  } = $props();

  const number = String(index + 1).padStart(2, "0");
  let cardEl;

  onMount(() => {
    gsap.fromTo(
      cardEl,
      { opacity: 0, x: -35 },
      {
        opacity: 1,
        x: 0,
        duration: 0.65,
        delay: (index % 4) * 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardEl,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
</script>

<div bind:this={cardEl} class="flex gap-6 md:gap-8">
  <!-- timeline rail -->
  <div class="flex flex-col items-center shrink-0 w-10 md:w-14">
    <!-- dot -->
    <div class="w-3 h-3 rounded-full border-2 border-green-400 bg-gray-950 z-10 shrink-0"></div>
    <!-- line -->
    {#if !isLast}
      <div class="w-px flex-1 bg-gray-700"></div>
    {/if}
  </div>

  <!-- card -->
  <div class="border border-gray-800 rounded-lg p-5 md:p-6 flex-1 mb-4 hover:border-green-400/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 bg-gray-900/30">
    <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
      <div class="flex items-center gap-2">
        {#if icon}
          <img src={icon} alt="" class="w-5 h-5 rounded" />
        {/if}
        <h3 class="text-green-400 font-bold text-sm md:text-base">{role}</h3>
      </div>
      <span class="text-gray-600 text-xs">{number}</span>
    </div>
    <p class="text-gray-300 text-sm mb-1">{company}</p>
    <p class="text-gray-500 text-xs mb-3">{duration}</p>
    <p class="text-gray-400 text-xs md:text-sm leading-relaxed mb-3">{description}</p>
    <div class="flex flex-wrap gap-1.5">
      {#each tags as tag}
        <span class="px-2 py-0.5 text-[11px] border border-gray-700 rounded text-gray-400">{tag}</span>
      {/each}
    </div>
  </div>
</div>
