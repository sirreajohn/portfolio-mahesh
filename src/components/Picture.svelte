<script>
  let {
    src = "",
    alt = "portrait.jpg",
    caption = "(your photo here)",
  } = $props();
</script>

<div class="flex flex-col items-center gap-2">
  <div
    class="w-32 h-32 md:w-40 md:h-40 border border-gray-700 rounded flex items-center justify-center bg-gray-900"
  >
    {#if src}
      <img {src} {alt} class="w-full h-full object-cover rounded" />
    {:else}
      <svg
        class="w-12 h-12 md:w-16 md:h-16 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0116.5 0"
        />
      </svg>
    {/if}
  </div>
  <p class="text-gray-500 text-xs">{alt}</p>
  <p class="text-gray-600 text-xs">{caption}</p>
</div>
