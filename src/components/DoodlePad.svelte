<script>
  import { onMount } from "svelte";

  let { size = 16, maxWidth = "w-full max-w-xl xl:max-w-2xl" } = $props();

  let grid = $state([]);
  let isDrawing = $state(false);
  let drawMode = $state(true);
  let previousSize = $state(0);

  // Compact 16-bit presets
  const PRESETS = {
    invader: [
      0x0000, 0x1008, 0x0810, 0x1ff8, 0x36dc, 0x7ffe, 0x5ffa, 0x500a, 0x0cc0,
      0x1998, 0x300c, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000,
    ],
    heart: [
      0x0000, 0x0000, 0x0e70, 0x1ff8, 0x3ffc, 0x3ffc, 0x3ffc, 0x1ff8, 0x0ff0,
      0x07e0, 0x03c0, 0x0180, 0x0000, 0x0000, 0x0000, 0x0000,
    ],
    ghost: [
      0x0000, 0x03c0, 0x0ff0, 0x1ff8, 0x3bdc, 0x3bdc, 0x3ffc, 0x3ffc, 0x3ffc,
      0x3ffc, 0x3ffc, 0x36dc, 0x2492, 0x0000, 0x0000, 0x0000,
    ],
  };
  $effect(() => {
    if (size !== previousSize) {
      previousSize = size;
      loadRandomPreset();
    }
  });

  onMount(() => {
    loadRandomPreset();
  });

  function loadRandomPreset() {
    const keys = Object.keys(PRESETS);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    applyPreset(randomKey);
  }

  function startDraw(i) {
    isDrawing = true;
    drawMode = !grid[i];
    grid[i] = drawMode;
  }

  function onHover(i) {
    if (isDrawing) grid[i] = drawMode;
  }

  function applyPreset(name) {
    const preset = PRESETS[name];
    if (!preset) return;

    grid = Array.from({ length: size * size }, (_, index) => {
      const row = Math.floor(index / size);
      const col = index % size;
      const srcR = Math.min(15, Math.floor((row / size) * 16));
      const srcC = Math.min(15, Math.floor((col / size) * 16));
      return Boolean((preset[srcR] >> (15 - srcC)) & 1);
    });
  }
</script>

<svelte:window
  onmouseup={() => (isDrawing = false)}
  onmouseleave={() => (isDrawing = false)}
/>

<div
  class="border border-gray-800 rounded-2xl p-6 md:p-8 bg-gray-950/90 backdrop-blur-md w-full {maxWidth} select-none shadow-2xl"
>
  <!-- Top bar -->
  <div
    class="flex items-center justify-between pb-4 mb-5 border-b border-gray-800 text-xs md:text-sm font-mono"
  >
    <div class="flex items-center gap-2.5">
      <span
        class="inline-block w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"
      ></span>
      <span class="text-gray-300 tracking-wider">DOODLE.MATRIX</span>
    </div>
    <!-- <span class="text-gray-500">{size}x{size} DISPLAY</span> -->
  </div>

  <!-- Drawing grid -->
  <div
    class="grid gap-[2px] md:gap-[3px] p-3 md:p-4 bg-gray-900/80 rounded-xl border border-gray-800 touch-none shadow-inner"
    style="grid-template-columns: repeat({size}, minmax(0, 1fr));"
  >
    {#each grid as isLit, i}
      <button
        type="button"
        class="aspect-square w-full rounded-[1px] md:rounded-[2px] transition-colors duration-75 cursor-crosshair
          {isLit
          ? 'bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.85)]'
          : 'bg-gray-950 hover:bg-gray-800/60'}"
        onmousedown={() => startDraw(i)}
        onmouseenter={() => onHover(i)}
        aria-label="Pixel {i}"
      ></button>
    {/each}
  </div>

  <!-- Controls -->
  <div
    class="flex items-center justify-between mt-5 text-xs md:text-sm font-mono"
  >
    <div class="flex gap-2.5">
      <button
        onclick={() => applyPreset("invader")}
        class="px-3.5 py-1.5 border border-gray-800 rounded-lg bg-gray-900/40 text-gray-400 hover:text-green-400 hover:border-green-400/50 transition-colors"
        title="Invader"
      >
        👾
      </button>
      <button
        onclick={() => applyPreset("heart")}
        class="px-3.5 py-1.5 border border-gray-800 rounded-lg bg-gray-900/40 text-gray-400 hover:text-green-400 hover:border-green-400/50 transition-colors"
        title="Heart"
      >
        ♥
      </button>
      <button
        onclick={() => applyPreset("ghost")}
        class="px-3.5 py-1.5 border border-gray-800 rounded-lg bg-gray-900/40 text-gray-400 hover:text-green-400 hover:border-green-400/50 transition-colors"
        title="Ghost"
      >
        👻
      </button>
    </div>

    <div class="flex gap-2.5">
      <button
        onclick={() => (grid = grid.map((p) => !p))}
        class="px-4 py-1.5 border border-gray-800 rounded-lg bg-gray-900/40 text-gray-400 hover:text-green-400 hover:border-green-400/50 transition-colors"
      >
        Invert
      </button>
      <button
        onclick={() => (grid = Array(size * size).fill(false))}
        class="px-4 py-1.5 border border-gray-800 rounded-lg bg-gray-900/40 text-gray-400 hover:text-green-400 hover:border-green-400/50 transition-colors"
      >
        Clear
      </button>
    </div>
  </div>
</div>
