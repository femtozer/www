<script lang="ts">
	import Background from '$lib/components/Background.svelte';
	import { Heart, Moon } from 'lucide-svelte';
	import '../app.css';
	import type { HomepageDocumentData } from '../types.d';

	export let data;
	let homepage: HomepageDocumentData = data.document.data;

	let dark = false;
	const toggleDark = () => {
		dark = !dark;
	};
	const primaryColor = homepage.primary_color || '#FFF';
	const secondaryColor = homepage.secondary_color || '#000';
	const lightGradientColors = ['#FFF', '#999', primaryColor, secondaryColor];
	const darkGradientColors = ['#222', '#444', primaryColor, secondaryColor];
</script>

<svelte:head>
	<title>{homepage.name}</title>
	<meta name="description" content={homepage.meta_description} />
	<link
		href="https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Background gradientColors={dark ? darkGradientColors : lightGradientColors} />

<div
	class:dark
	class="relative px-3 "
	style="--primary-color:{primaryColor}; --secondary-color:{secondaryColor}"
>
	<header>
		<button
			aria-label="Toggle dark theme"
			class="fixed right-4 top-4 z-10 text-white mix-blend-difference transition-transform duration-1000 hover:animate-[spin_3s_linear_infinite]"
			on:click={toggleDark}
		>
			<Moon fill={dark ? '#FFF' : null} />
		</button>
	</header>

	<main class="text-gray-800 dark:text-white">
		<slot />
	</main>

	<footer class="flex w-full items-center justify-center pb-2">
		<span class="text-xs text-white mix-blend-difference"
			>Built with <Heart class="mb-1 inline-block hover:animate-ping" size={15} /> by
			{homepage.name}</span
		>
	</footer>
</div>

<style>
	*::selection {
		background: var(--primary-color);
	}
</style>
