<script>
  let { dotSize = 1, gap = 24, color = "rgba(74, 222, 128, 0.4)" } = $props();

  let container;
  let mouseX = $state(-1000);
  let mouseY = $state(-1000);

  function handleMouseMove(e) {
    const rect = container.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }

  function handleMouseLeave() {
    mouseX = -1000;
    mouseY = -1000;
  }
</script>

<div
  bind:this={container}
  onmousemove={handleMouseMove}
  onmouseleave={handleMouseLeave}
  class="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto"
>
  <!-- base dot grid covering full area, fading in bottom half -->
  <div
    class="absolute inset-0 w-full h-full"
    style="
      background-image: radial-gradient(circle, {color} {dotSize}px, transparent {dotSize}px);
      background-size: {gap}px {gap}px;
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 65%);
      -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 65%);
    "
  ></div>

  <!-- mouse glow layer -->
  <div
    class="absolute inset-0 w-full h-full"
    style="
      background-image: radial-gradient(circle, rgba(74, 222, 128, 0.9) {dotSize}px, transparent {dotSize}px);
      background-size: {gap}px {gap}px;
      mask-image: radial-gradient(circle 180px at {mouseX}px {mouseY}px, rgba(0,0,0,1) 0%, transparent 100%);
      -webkit-mask-image: radial-gradient(circle 180px at {mouseX}px {mouseY}px, rgba(0,0,0,1) 0%, transparent 100%);
    "
  ></div>
</div>
