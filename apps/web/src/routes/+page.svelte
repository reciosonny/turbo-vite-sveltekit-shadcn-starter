<script lang="ts">
	import { Button } from '@repo/ui';
	import svelteLogo from '../assets/svelte.svg';
</script>

<main class="flex flex-col items-center justify-center p-4 gap-2" style="height: 100vh;">
	<div class="flex justify-center gap-6">
		<a href="https://svelte.dev" target="_blank" rel="noreferrer">
			<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
		</a>
		<a href="https://www.shadcn-svelte.com/" target="_blank" rel="noopener noreferrer" class="flex items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 256"
				class="h-12 w-12 rounded-lg bg-slate-900 p-2"
				><rect width="256" height="256" fill="none"></rect><line
					x1="208"
					y1="128"
					x2="128"
					y2="208"
					fill="none"
					stroke="#EB4F27"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="16"
				></line><line
					x1="192"
					y1="40"
					x2="40"
					y2="192"
					fill="none"
					stroke="#EB4F27"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="16"
				></line></svg
			>
		</a>
	</div>
	<h1
		class="lg:leading-[1.1 flex justify-center text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl"
	>
		Turborepo + SvelteKit + shadcn-svelte
	</h1>
	<p class="max-w-[750px] text-balance text-center text-lg text-muted-foreground sm:text-xl">
		Starter code that contains a monorepo setup with Vite, SvelteKit, and shadcn-svelte.
	</p>
	<Button href="https://github.com/reciosonny" target="_blank">Learn more</Button>
</main>

<style>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
</style>
