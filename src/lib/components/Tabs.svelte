<script lang="ts">
	export let tabs: { label: string; content: string }[];
	export let tabColor = '#000';
	let tabIndex = 0;
	$: content = tabs[tabIndex].content;
</script>

<div class="flex flex-col md:flex-row">
	<div
		class="relative mb-2 flex flex-col whitespace-nowrap"
		style="--tab-index:{tabIndex};--tab-color:{tabColor}"
	>
		{#each tabs as tab, i}
			<button
				aria-label={tab.label}
				class="flex h-10 items-center px-2 hover:bg-opacity-30"
				on:click={() => (tabIndex = i)}>{tab.label}</button
			>
		{/each}
		<div
			id="tab-indicator"
			class="absolute h-10 w-[2px] translate-x-0 translate-y-[calc(var(--tab-index)*2.5rem)] transition-transform"
		/>
	</div>
	<div class="mt-4 md:mt-0 md:pl-8">
		{@html content}
	</div>
</div>

<style>
	button:hover,
	#tab-indicator {
		background: var(--tab-color);
	}

	@media (hover: none) {
		button:hover {
			background: inherit;
		}
	}
</style>
