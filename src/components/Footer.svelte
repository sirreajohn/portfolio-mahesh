<script>
  let {
    logo = "M/",
    status = "OPEN TO INTERESTING PROBLEMS",
    year = 2026,
    socials = [],
  } = $props();
</script>

<footer class="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-8 md:px-20 py-5 border-t border-gray-800 text-xs md:text-sm">
  <!-- Status Badge (Left) -->
  <div class="flex items-center gap-2.5 justify-self-center md:justify-self-start">
    <span class="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
    <span class="text-gray-400 tracking-wider text-xs">{status}</span>
  </div>

  <!-- Passive Social Links (Center) -->
  {#if socials.length}
    <div class="flex items-center gap-6 justify-self-center">
      {#each socials as social}
        <a
          href={social.href}
          target="_blank"
          rel="noreferrer"
          class="text-gray-500 hover:text-green-400 hover:scale-110 transition-all duration-200"
          title={social.label}
        >
          {#if social.icon}
            <img src={social.icon} alt={social.label} class="w-4 h-4 object-contain" />
          {:else}
            <span>{social.label}</span>
          {/if}
        </a>
      {/each}
    </div>
  {:else}
    <div></div>
  {/if}

  <!-- Brand & Year (Right) -->
  <div class="flex items-center gap-3 text-gray-500 justify-self-center md:justify-self-end">
    <span class="text-green-400 font-bold tracking-wider">{logo}</span>
    <span>&copy; {year}</span>
  </div>
</footer>
