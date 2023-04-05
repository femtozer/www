<script lang="ts">
	export let label: string;
	export let href: string;
</script>

<a
	{href}
	aria-label={label}
	rel="noreferrer"
	{...$$restProps}
	class="select-none rounded-xl border-[1px] border-neutral-800 border-opacity-50 bg-neutral-50 bg-opacity-10 py-1 px-3 text-sm shadow-[0] transition-shadow hover:bg-opacity-30 dark:border-neutral-50 dark:bg-neutral-800 dark:bg-opacity-10"
	><slot /></a
>

<style>
	a:hover {
		box-shadow: 10px 0px 20px 10px var(--primary-color), -10px 0px 20px 10px var(--secondary-color);
	}
</style>
