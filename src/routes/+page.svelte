<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Link from '$lib/components/Link.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import * as prismicH from '@prismicio/helpers';
	import type * as prismicT from '@prismicio/types';
	import { Github, Linkedin, Mail, Twitter } from 'lucide-svelte';
	import type { HomepageDocumentData } from '../types.d';

	// https://prismic.io/docs/svelte-fetch-data#serverside-fetching-with-sveltekit
	export let data;
	let homepage: HomepageDocumentData = data.document.data;
	let tabs = homepage.work_experiences.map((we) => {
		return { label: we.company || '', content: prismicH.asHTML(we.experience) };
	});
	let getUrlFromPrismicLink = (link: prismicT.LinkField) =>
		(link as prismicT.FilledLinkToWebField).url;
	let socials = [
		{
			label: 'Mail',
			url: getUrlFromPrismicLink(homepage.mail),
			icon: Mail
		},
		{
			label: 'Twitter',
			url: getUrlFromPrismicLink(homepage.twitter),
			icon: Twitter
		},
		{
			label: 'Github',
			url: getUrlFromPrismicLink(homepage.github),
			icon: Github
		},
		{
			label: 'Linkedin',
			url: getUrlFromPrismicLink(homepage.linkedin),
			icon: Linkedin
		}
	];
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center">
	<div class="text-white mix-blend-difference selection:bg-transparent selection:text-gray-800">
		<div>Hi, my name is</div>
		<div class="font-hero text-4xl leading-normal  sm:text-5xl md:text-7xl">
			{homepage.name}
		</div>
		<div class="float-right">I'm a {homepage.role}</div>
	</div>
</div>
<div class="flex w-full flex-col items-center justify-center py-20 sm:min-h-screen">
	<Card>
		<h1>About me</h1>
		<div>
			{@html prismicH.asHTML(homepage.biography)}
		</div>
		<ul class="mt-2 grid sm:grid-cols-2">
			{#each homepage.technos as techno}
				<li class="before:mr-1 before:content-['▹']">
					<span class="mr-3">{techno.label}</span>
					{#if techno.certification && techno.certification_label}
						<Link
							label={techno.certification_label}
							href={getUrlFromPrismicLink(techno.certification)}
						/>
					{/if}
				</li>
			{/each}
		</ul>
	</Card>
</div>
<div class="flex w-full flex-col items-center justify-center py-20 sm:min-h-screen">
	<Card>
		<h1>Work</h1>
		<Tabs {tabs} tabColor={homepage.primary_color || '#000'} />
	</Card>
</div>
<div class="flex w-full flex-col items-center justify-center py-20 sm:min-h-screen">
	<Card>
		<h1>Contact</h1>
		<div id="social-grid" class="grid grid-cols-2 gap-6">
			{#each socials as social}
				<a
					aria-label={social.label}
					href={social.url}
					target="_blank"
					rel="noreferrer"
					class="flex h-40 items-center justify-center rounded-xl border-[1px] border-gray-800 border-opacity-30 shadow-md transition-shadow dark:border-white dark:border-opacity-30"
				>
					<svelte:component this={social.icon} size={48} strokeWidth={1} />
				</a>
			{/each}
		</div>
	</Card>
</div>

<style>
	li::before {
		color: var(--primary-color);
	}
	#social-grid > a:hover {
		box-shadow: 10px 0px 20px 10px var(--primary-color), -10px 0px 20px 10px var(--secondary-color);
	}
</style>
