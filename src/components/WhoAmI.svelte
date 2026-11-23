<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let {
    name = "Mahesh_",
    title = "Software Engineer",
    buttons = [],
    socials = [],
  } = $props();

  let nameEl, titleEl, buttonsEl, socialsEl;

  const displayName = $derived(name.endsWith('_') ? name.slice(0, -1) : name);
  const hasUnderscore = $derived(name.endsWith('_'));

  onMount(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      nameEl,
      { opacity: 0, y: 30, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.85, delay: 0.1 }
    )
    .fromTo(
      titleEl,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.65 },
      "-=0.45"
    )
    .fromTo(
      buttonsEl,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.35"
    );

    if (socialsEl) {
      tl.fromTo(
        socialsEl,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );
    }
  });
</script>

<div class="flex flex-col gap-6 items-center text-center">
  <h1 bind:this={nameEl} class="text-6xl md:text-8xl font-bold text-green-400 leading-tight tracking-tight">
    {displayName}{#if hasUnderscore}<span class="inline-block animate-pulse text-green-400">_</span>{/if}
  </h1>
  <p bind:this={titleEl} class="text-gray-400 text-lg md:text-2xl tracking-wide">{title}</p>

  {#if buttons.length}
    <div bind:this={buttonsEl} class="flex gap-3 mt-4">
      {#each buttons as btn}
        <a
          href={btn.href}
          class="px-5 py-2.5 text-sm border rounded transition-all duration-200 active:scale-95
            {btn.primary
              ? 'bg-green-400 text-gray-950 border-green-400 hover:bg-green-300 hover:shadow-lg hover:shadow-green-400/20'
              : 'border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400 hover:shadow-lg hover:shadow-green-500/10'}"
        >
          {btn.label}
        </a>
      {/each}
    </div>
  {/if}

  {#if socials.length}
    <div bind:this={socialsEl} class="flex items-center gap-6 mt-2 text-gray-500">
      {#each socials as social}
        <a
          href={social.href}
          target="_blank"
          rel="noreferrer"
          class="hover:text-green-400 hover:scale-115 transition-all duration-200"
          title={social.label}
        >
          {#if social.icon === "github"}
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          {:else if social.icon === "linkedin"}
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24"/>
            </svg>
          {:else if social.icon === "mail" || social.icon === "email"}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          {:else}
            <span class="text-sm">↗</span>
          {/if}
        </a>
      {/each}
    </div>
  {/if}
</div>
