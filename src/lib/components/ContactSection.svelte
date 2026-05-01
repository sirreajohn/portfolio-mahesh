<script>
	import { onMount } from 'svelte';
	import data from "$lib/data/contact.json";

	let visible = $state(false);
	let formStatus = $state('idle'); // idle | sending | sent | error

	onMount(() => {
		setTimeout(() => visible = true, 100);
	});

	const { contactChannels, availability, systemInfo } = data;

	function handleSubmit(e) {
		e.preventDefault();
		formStatus = 'sending';
		// Simulate send
		setTimeout(() => {
			formStatus = 'sent';
			setTimeout(() => { formStatus = 'idle'; }, 3000);
		}, 1500);
	}
</script>

<section id="contact" class="border-t border-border">
	<div class="grid grid-cols-1 lg:grid-cols-[0.25fr_1fr] min-h-screen">
		<!-- Section Label Column -->
		<div class="border-r border-border py-12 flex flex-col pt-24">
			{#if visible}
				<div class="anim-reveal delay-1 text-[10px] text-text-dim tracking-[0.3em] mb-2">// CONNECT</div>
				<h2 class="anim-reveal delay-2 text-3xl lg:text-4xl font-bold tracking-tight">
					CONTACT<span class="text-accent animate-[blink_1s_step-end_infinite]">_</span>
				</h2>
				<div class="anim-reveal delay-3 mt-4 w-12 h-[1px] bg-accent"></div>
				<p class="anim-reveal delay-4 mt-4 text-[10px] text-text-dim tracking-wider leading-relaxed">
					OPEN FOR<br/>COLLABORATIONS<br/>
					<span class="text-accent">& CONTRACTS</span>
				</p>
			{/if}
		</div>

		<!-- Contact Content -->
		<div class="py-12 lg:py-20 flex flex-col justify-center">
			{#if visible}
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
					<!-- Contact Form -->
					<div class="anim-fade-up delay-3">
						<div class="text-[10px] text-text-dim tracking-[0.3em] mb-4">// TRANSMIT_MESSAGE</div>
						<form onsubmit={handleSubmit} class="space-y-4">
							<div>
								<label for="contact-name" class="block text-[9px] text-text-dim tracking-widest mb-1.5">IDENTIFIER</label>
								<input
									id="contact-name"
									type="text"
									placeholder="YOUR_NAME"
									required
									class="w-full bg-transparent border border-border px-3 py-2 text-xs text-text
										placeholder:text-text-dim/40 focus:border-accent focus:outline-none
										transition-colors duration-200 font-mono"
								/>
							</div>
							<div>
								<label for="contact-email" class="block text-[9px] text-text-dim tracking-widest mb-1.5">EMAIL_ADDR</label>
								<input
									id="contact-email"
									type="email"
									placeholder="YOUR@EMAIL.COM"
									required
									class="w-full bg-transparent border border-border px-3 py-2 text-xs text-text
										placeholder:text-text-dim/40 focus:border-accent focus:outline-none
										transition-colors duration-200 font-mono"
								/>
							</div>
							<div>
								<label for="contact-subject" class="block text-[9px] text-text-dim tracking-widest mb-1.5">SUBJECT</label>
								<input
									id="contact-subject"
									type="text"
									placeholder="PROJECT_INQUIRY"
									class="w-full bg-transparent border border-border px-3 py-2 text-xs text-text
										placeholder:text-text-dim/40 focus:border-accent focus:outline-none
										transition-colors duration-200 font-mono"
								/>
							</div>
							<div>
								<label for="contact-message" class="block text-[9px] text-text-dim tracking-widest mb-1.5">PAYLOAD</label>
								<textarea
									id="contact-message"
									rows="5"
									placeholder="DESCRIBE YOUR PROJECT OR INQUIRY..."
									required
									class="w-full bg-transparent border border-border px-3 py-2 text-xs text-text
										placeholder:text-text-dim/40 focus:border-accent focus:outline-none
										transition-colors duration-200 resize-none font-mono"
								></textarea>
							</div>
							<button
								type="submit"
								disabled={formStatus === 'sending'}
								class="w-full border text-[10px] tracking-widest py-2.5 transition-all duration-300 font-mono
									{formStatus === 'sent'
										? 'border-accent bg-accent text-bg'
										: formStatus === 'sending'
										? 'border-border text-text-dim cursor-wait'
										: 'border-accent text-accent hover:bg-accent hover:text-bg'}"
							>
								{#if formStatus === 'idle'}
									TRANSMIT_MESSAGE →
								{:else if formStatus === 'sending'}
									TRANSMITTING...
								{:else if formStatus === 'sent'}
									✓ MESSAGE_DELIVERED
								{:else}
									✗ TRANSMISSION_FAILED — RETRY
								{/if}
							</button>
						</form>
					</div>

					<!-- Contact Channels -->
					<div class="anim-fade-up delay-5">
						<div class="text-[10px] text-text-dim tracking-[0.3em] mb-4">// DIRECT_CHANNELS</div>
						<div class="space-y-3">
							{#each contactChannels as channel, i}
								<a href={channel.href}
									target="_blank"
									rel="noopener noreferrer"
									class="anim-fade-up group flex items-center gap-4 border border-border p-4
										hover:border-accent/40 transition-all duration-300"
									style="animation-delay: {0.6 + i * 0.12}s"
								>
									<span class="text-[9px] text-accent tracking-widest w-10">{channel.prefix}</span>
									<span class="text-[9px] text-text-dim">│</span>
									<div class="flex-1">
										<div class="text-[9px] text-text-dim tracking-widest mb-0.5">{channel.label}</div>
										<div class="text-xs text-text-muted group-hover:text-accent transition-colors duration-200">
											{channel.value}
										</div>
									</div>
									<span class="text-text-dim group-hover:text-accent transition-colors text-xs">→</span>
								</a>
							{/each}
						</div>

						<!-- Availability Notice -->
						<div class="anim-reveal delay-10 mt-8 border border-border p-4">
							<div class="flex items-center gap-2 mb-2">
								<span class="inline-block w-2 h-2 rounded-full bg-accent pulse-dot"></span>
								<span class="text-[10px] text-accent tracking-widest">{availability.status}</span>
							</div>
							<p class="text-[10px] text-text-muted leading-relaxed">
								Response time: {availability.responseTime}. Preferred communication: {availability.preferredCommunication}.
								{availability.details}
							</p>
						</div>

						<!-- System Info -->
						<div class="anim-reveal delay-12 mt-4 text-[9px] text-text-dim tracking-wider space-y-1">
							<div>// TIMEZONE: {systemInfo.timezone}</div>
							<div>// LOCATION: {systemInfo.location}</div>
							<div>// RESPONSE_PROTOCOL: {systemInfo.protocol}</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<!-- Footer -->
	<div class="border-t border-border px-6 lg:px-10 py-6">
		<div class="flex flex-col lg:flex-row items-center justify-between gap-4 text-[9px] text-text-dim tracking-wider">
			<div class="flex items-center gap-2">
				<span class="text-accent">&lt;/&gt;</span>
				<span>MAHESH.DEV — SYSTEM INTERFACE v1.0</span>
			</div>
			<div>BUILT WITH SVELTEKIT + TAILWIND — DEPLOYED ON STATIC</div>
			<div>© {new Date().getFullYear()} — ALL RIGHTS RESERVED</div>
		</div>
	</div>
</section>
