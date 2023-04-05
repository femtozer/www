<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Background from '$lib/components/Background.svelte';
	import type * as prismicT from '@prismicio/types';
	import { Heart, Moon } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import type { HomepageDocumentData } from '../types';

	export let data;
	let homepage: HomepageDocumentData = data.homepage.data;

	let isHomepage: boolean;
	let additionalClasses: string;

	page.subscribe((value) => {
		isHomepage = value.route.id == '/';
		additionalClasses = isHomepage
			? 'bg-opacity-10 backdrop-blur-xl sm:bg-opacity-100 sm:backdrop-filter-none'
			: 'bg-opacity-10 backdrop-blur-xl';
	});

	let favicon: HTMLElement | null;
	let dark = false;

	if (browser) {
		dark = localStorage.theme === 'dark';
	}

	const toggleDark = () => {
		dark = !dark;
		favicon?.setAttribute('href', `favicon${dark ? '-dark' : ''}.png`);
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	};

	const primaryColor = homepage.primary_color || '#FFF';
	const secondaryColor = homepage.secondary_color || '#000';
	const lightGradientColors = ['#FFF', '#999', primaryColor, secondaryColor];
	const darkGradientColors = ['#222', '#444', primaryColor, secondaryColor];

	const getUrlFromPrismicLink = (link: prismicT.LinkField) =>
		(link as prismicT.FilledLinkToWebField).url;

	onMount(() => {
		favicon = document.getElementById('favicon');
	});
</script>

<svelte:head>
	<title>{homepage.name}</title>
	<meta name="description" content={homepage.meta_description} />
	<meta property="og:title" content={homepage.name} />
	<meta property="og:description" content={homepage.meta_description} />
	<meta property="og:url" content={getUrlFromPrismicLink(homepage.domain)} />
	<link
		href="https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if isHomepage}
	<Background gradientColors={dark ? darkGradientColors : lightGradientColors} />
{/if}

<div class:dark>
	<div
		class="relative flex min-h-screen flex-col text-neutral-800 dark:text-neutral-50"
		class:dark:bg-neutral-800={!isHomepage}
		class:bg-neutral-50={!isHomepage}
		style="--primary-color:{primaryColor}; --secondary-color:{secondaryColor}"
	>
		<header
			class="sticky top-0 z-10 flex w-full flex-row-reverse items-center justify-between p-3 backdrop-blur-xl sm:p-4 {additionalClasses}"
		>
			<div class="flex justify-center gap-4 align-middle">
				<a href={isHomepage ? '/blog' : '/'} class="hover:font-semibold"
					>{isHomepage ? 'Blog' : 'About'}</a
				>
				<button
					aria-label="Toggle dark theme"
					class="z-10 mix-blend-difference transition-transform duration-1000 hover:animate-[spin_3s_linear_infinite]"
					on:click={toggleDark}
				>
					<Moon />
				</button>
			</div>

			{#if !isHomepage}
				<a class="font-hero" href="/blog">{homepage.name}</a>
			{/if}
		</header>

		<main class="flex-grow px-3 sm:px-4 md:px-10 lg:px-16">
			<slot />
		</main>

		<footer class="mt-20 flex w-full items-center justify-center pb-2 sm:mt-0">
			<span class="text-xs text-neutral-50 mix-blend-difference selection:bg-transparent "
				>Built with <Heart class="mb-1 inline-block hover:animate-ping" size={15} /> by
				{homepage.name}</span
			>
		</footer>
	</div>
</div>

<style>
	:global(::selection) {
		background: var(--primary-color);
	}
</style>
