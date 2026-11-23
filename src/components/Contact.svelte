<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import DoodlePad from "./DoodlePad.svelte";

  gsap.registerPlugin(ScrollTrigger);

  let {
    prompt = "~/dev $ contact",
    heading = "Contact",
    description = "Have a project, idea or just want to talk? Feel free to reach out.",
    email = "mahesh@example.com",
    socials = [],
    doodleSize = 16,
    doodleMaxWidth = "w-full max-w-xl xl:max-w-2xl",
  } = $props();

  let sectionEl, cardEl;
  let copied = $state(false);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }

  onMount(() => {
    gsap.fromTo(
      cardEl,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
</script>

<section
  id="contact"
  bind:this={sectionEl}
  class="flex items-center px-8 md:px-20 py-20 border-b border-gray-800"
>
  <div
    bind:this={cardEl}
    class="w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 xl:gap-16"
  >
    <!-- Left Column: Details & CTAs -->
    <div class="flex-1 max-w-xl w-full">
      <p class="text-gray-500 text-sm mb-3">{prompt}</p>
      <h2 class="text-4xl md:text-5xl font-bold text-green-400 mb-4">
        {heading}
      </h2>
      <p class="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
        {description}
      </p>

      <!-- Links / CTAs container -->
      <div class="flex flex-wrap items-center gap-4 text-sm md:text-base">
        <!-- Email CTA Pill -->
        <div
          class="flex items-center border border-gray-800 rounded-lg bg-gray-900/40 overflow-hidden hover:border-green-400/50 transition-colors"
        >
          <a
            href="mailto:{email}"
            class="flex items-center gap-2.5 px-4 py-2.5 text-green-400 hover:text-green-300 transition-colors"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span>{email}</span>
          </a>
          <button
            onclick={copyEmail}
            class="border-l border-gray-800 px-3 py-2.5 text-xs text-gray-500 hover:text-green-400 hover:bg-gray-800/40 transition-colors"
            title="Copy email to clipboard"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <!-- Social pills -->
        {#each socials as social}
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2.5 px-4 py-2.5 border border-gray-800 rounded-lg bg-gray-900/40 text-gray-400 hover:text-green-400 hover:border-green-400/50 hover:bg-gray-900/60 transition-all duration-200"
          >
            {#if social.icon === "github"}
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            {:else if social.icon === "linkedin"}
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24"
                />
              </svg>
            {:else}
              <span class="text-green-400">↗</span>
            {/if}
            <span>{social.label}</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Right Column: Interactive Doodle Pad -->
    <div class="flex-1 flex justify-center lg:justify-end w-full">
      <DoodlePad size={doodleSize} maxWidth={doodleMaxWidth} />
    </div>
  </div>
</section>
