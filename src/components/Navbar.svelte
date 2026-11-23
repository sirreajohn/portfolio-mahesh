<script>
  let { logo = "M/", links = [], cta = null } = $props();
</script>

<nav class="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-3.5 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md transition-all">
  <a href="/" class="text-green-400 font-bold text-lg tracking-wide hover:opacity-80 transition-opacity">{logo}</a>

  <div class="flex items-center gap-4 md:gap-7">
    <div class="flex items-center gap-4 md:gap-6">
      {#each links as link}
        <a
          href={link.href}
          class="text-gray-400 text-xs md:text-sm hover:text-green-400 transition-colors"
        >
          {link.label}
        </a>
      {/each}
    </div>

    {#if cta}
      <a
        href={cta.href}
        target={cta.href.startsWith("#") ? "_self" : "_blank"}
        rel="noreferrer"
        class="px-3.5 py-1.5 text-xs md:text-sm font-mono border border-green-400/80 text-green-400 rounded hover:bg-green-400 hover:text-gray-950 transition-all duration-200 shadow-[0_0_10px_rgba(74,222,128,0.15)] hover:shadow-[0_0_16px_rgba(74,222,128,0.4)]"
      >
        {cta.label}
      </a>
    {/if}
  </div>
</nav>
