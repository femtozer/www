<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import type { BlogPostDocument } from '../../types';

	export let data;
	console.log(data);
	let blogPosts: BlogPostDocument[] = data.documents;
	let formatDate = (date: string | null) => (date ? new Date(date).toLocaleDateString() : '');
</script>

<div class="flex flex-col items-center pb-10 pt-5">
	{#each blogPosts as post}
		<div class="mb-10 max-w-4xl">
			<a href={'/blog/' + post.uid} aria-label={post.data.title}>
				<div class="text-sm sm:text-base">{formatDate(post.data.published_at)}</div>
				<div class="flex justify-between gap-6">
					<div>
						<h1 class="mb-3 text-lg sm:text-2xl">{post.data.title}</h1>
						<p class="hidden sm:block">{prismicH.asText(post.data.abstract)}</p>
					</div>
					<img
						alt={post.data.thumbnail.alt}
						src={prismicH.asImageSrc(post.data.thumbnail, { h: 256 })}
						class="h-24 w-auto max-w-none rounded-md object-cover sm:h-32 sm:w-32"
					/>
				</div>
			</a>
			<div class="hidden gap-3 sm:flex">
				{#each post.tags as tag}
					<span class="rounded-xl bg-neutral-200 px-2 py-[.1rem] dark:bg-neutral-600">{tag}</span>
				{/each}
			</div>
		</div>
	{/each}
</div>
