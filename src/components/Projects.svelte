<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import ProjectCard from "./ProjectCard.svelte";

  gsap.registerPlugin(ScrollTrigger);

  let { projects = [] } = $props();

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
      },
    );
  });
</script>

<section
  id="projects"
  class="flex items-center px-8 md:px-20 py-20 border-b border-gray-800"
>
  <div class="w-full">
    <div bind:this={headerEl} class="flex items-baseline justify-between mb-12">
      <div>
        <p class="text-gray-500 text-sm mb-3">~/dev $ ls ./projects</p>
        <h2 class="text-4xl md:text-5xl font-bold text-green-400">Projects</h2>
      </div>
      <span class="text-gray-600 text-sm hidden md:block"
        >// {projects.length} projects</span
      >
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each projects as project, i}
        <ProjectCard {...project} index={i} />
      {/each}
    </div>
  </div>
</section>
