<script>
	let currentTime = $state('');
	let scrollProgress = $state(0);
	let currentSection = $state('01 / 05');

	$effect(() => {
		const updateClock = () => {
			const now = new Date();
			currentTime = now.toLocaleTimeString('en-US', {
				hour12: false,
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			});
		};
		updateClock();
		const interval = setInterval(updateClock, 1000);

		const updateScroll = () => {
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			scrollProgress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;

			// Determine current section
			const sections = ['home', 'about', 'work', 'stack', 'contact'];
			for (let i = sections.length - 1; i >= 0; i--) {
				const el = document.getElementById(sections[i]);
				if (el && window.scrollY >= el.offsetTop - 200) {
					currentSection = `${String(i + 1).padStart(2, '0')} / ${String(sections.length).padStart(2, '0')}`;
					break;
				}
			}
		};
		window.addEventListener('scroll', updateScroll, { passive: true });

		return () => {
			clearInterval(interval);
			window.removeEventListener('scroll', updateScroll);
		};
	});
</script>

<footer class="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-bg/90 backdrop-blur-sm">
	<div class="flex items-center justify-between px-10 lg:px-16 xl:px-24 h-10 text-[10px] tracking-wider font-mono">
		<!-- Scroll Progress -->
		<div class="flex items-center gap-3 w-1/4">
			<span class="text-text-dim">SCROLL</span>
			<div class="w-16 h-[2px] bg-border-accent relative overflow-hidden">
				<div
					class="absolute top-0 left-0 h-full bg-accent transition-all duration-150"
					style="width: {scrollProgress}%"
				></div>
			</div>
			<span class="text-text-muted">{Math.round(scrollProgress)}%</span>
		</div>

		<!-- Page Counter -->
		<div class="flex items-center gap-4">
			<span class="text-text-dim">{currentSection}</span>
			<span class="text-text-dim">│</span>
			<span class="text-accent">system.ready();</span>
		</div>

		<!-- Live Clock -->
		<div class="flex items-center gap-2 w-1/4 justify-end">
			<span class="text-text-dim">UTC+5:30</span>
			<span class="text-text-dim">│</span>
			<span class="text-text-muted tabular-nums">{currentTime}</span>
			<span class="inline-block w-1.5 h-1.5 rounded-full bg-accent pulse-dot"></span>
		</div>
	</div>
</footer>
