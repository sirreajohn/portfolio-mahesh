<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let {
    bio = [],
    skills = [],
  } = $props();

  let headerEl, bioEl, skillsEl;

  onMount(() => {
    gsap.fromTo(
      headerEl,
      { opacity: 0, y: 25 },
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

    gsap.fromTo(
      bioEl,
      { opacity: 0, x: -35 },
      {
        opacity: 1,
        x: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bioEl,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      skillsEl,
      { opacity: 0, x: 35 },
      {
        opacity: 1,
        x: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsEl,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
</script>

<section id="about" class="flex items-center px-8 md:px-20 py-20 border-b border-gray-800">
  <div class="w-full">
    <div bind:this={headerEl} class="mb-12">
      <p class="text-gray-500 text-sm mb-3">~/dev $ cat about.txt</p>
      <h2 class="text-4xl md:text-5xl font-bold text-green-400">About</h2>
    </div>

    <div class="flex flex-col md:flex-row gap-16 md:gap-24">
      <!-- bio -->
      <div bind:this={bioEl} class="flex-1 flex flex-col gap-5">
        {#each bio as paragraph}
          <p class="text-gray-400 text-base md:text-lg leading-relaxed">{paragraph}</p>
        {/each}
      </div>

      <!-- skills -->
      <div bind:this={skillsEl} class="flex-1">
        <h3 class="text-gray-500 text-xs uppercase tracking-widest mb-6">Skills</h3>
        <table class="w-full text-base">
          <tbody>
            {#each skills as group}
              <tr class="border-b border-gray-800 last:border-0">
                <td class="py-3 pr-8 text-gray-500 whitespace-nowrap align-top">{group.category}</td>
                <td class="py-3">
                  <div class="flex flex-wrap gap-2.5">
                    {#each group.items as item}
                      <span class="px-3 py-1.5 text-sm border border-gray-700 rounded text-gray-300 hover:border-green-400/60 hover:text-green-300 hover:bg-green-950/20 transition-all duration-200 cursor-default">
                        {item}
                      </span>
                    {/each}
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
