<script>
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "$lib/components/Navbar.svelte";
	import StatusBar from "$lib/components/StatusBar.svelte";

	let { children } = $props();
	let scrollY = $state(0);

	function handleScroll() {
		scrollY = window.scrollY;
	}
</script>

<svelte:window onscroll={handleScroll} />

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>MAHESH_ | SYSTEM INTERFACE</title>
	<meta
		name="description"
		content="Full-stack developer portfolio — engineering robust, scalable systems from interface to infrastructure."
	/>
</svelte:head>

<div class="noise-overlay scanlines">
	<Navbar {scrollY} />
	<main class="p-8 md:p-12 lg:p-16 xl:p-20">
		{@render children()}
	</main>
	<StatusBar />
</div>
