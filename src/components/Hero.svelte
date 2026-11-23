<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import DotGrid from "./DotGrid.svelte";

  gsap.registerPlugin(ScrollTrigger);

  let { children } = $props();
  let contentEl;

  onMount(() => {
    gsap.to(contentEl, {
      yPercent: -20,
      opacity: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: contentEl,
        start: "center 40%",
        end: "bottom top",
        scrub: true,
      },
    });
  });
</script>

<section
  class="relative flex items-center justify-evenly gap-20 px-6 md:px-16 py-16 border-b border-gray-800"
>
  <DotGrid />
  <div
    bind:this={contentEl}
    class="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full -translate-y-[10%]"
  >
    {@render children()}
  </div>
</section>
