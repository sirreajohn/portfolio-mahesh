<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import ExperienceCard from './ExperienceCard.svelte';

  gsap.registerPlugin(ScrollTrigger);

  let {
    experiences = [],
  } = $props();

  let headerEl;

  onMount(() => {
    gsap.fromTo(
      headerEl,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerEl,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
</script>

<section id="experience" class="flex items-center px-8 md:px-20 py-20 border-b border-gray-800">
  <div class="w-full">
    <div bind:this={headerEl} class="flex items-baseline justify-between mb-12">
      <div>
        <p class="text-gray-500 text-sm mb-3">~/dev $ cat experience.log</p>
        <h2 class="text-4xl md:text-5xl font-bold text-green-400">Experience</h2>
      </div>
      <span class="text-gray-600 text-sm hidden md:block">// {experiences.length} roles</span>
    </div>

    <div class="flex flex-col">
      {#each experiences as exp, i}
        <ExperienceCard {...exp} index={i} isLast={i === experiences.length - 1} />
      {/each}
    </div>
  </div>
</section>
