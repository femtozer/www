<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import type { BlogPostDocumentData } from '../../../types';

	export let data;
	let blogPost: BlogPostDocumentData = data.document.data;

	let formatDate = (date: string | null) => (date ? new Date(date).toLocaleDateString() : '');
</script>

<div class="flex justify-center">
	<article class="max-w-4xl pt-5 pb-10">
		<div class="mb-2">{formatDate(blogPost.published_at)}</div>
		<div class="mb-10 font-hero text-2xl  leading-normal sm:text-3xl md:text-4xl">
			{blogPost.title}
		</div>
		<div>{@html prismicH.asHTML(blogPost.content)}</div>
	</article>
</div>

<style>
	:global(article h1) {
		font-size: x-large;
		margin-top: 3rem;
		margin-bottom: 0;
	}

	:global(article h2) {
		margin-top: 2rem;
		margin-bottom: 0;
	}

	/* image labels */
	:global(article h6) {
		margin-top: 10px;
		margin-bottom: 3rem;
		text-align: center;
		color: #888;
	}

	:global(article img) {
		margin-top: 3rem;
		margin-bottom: 0;
		border-radius: 0.375rem;
	}

	:global(article p) {
		margin-top: 0.8rem;
		margin-bottom: 0;
	}

	:global(article a) {
		text-decoration: underline;
	}
</style>
