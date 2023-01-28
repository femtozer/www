<script lang="ts">
	export let label: string;
	export let href: string;
</script>

<a
	{href}
	target="_blank"
	rel="noreferrer"
	class="select-none rounded-xl border-[1px] border-gray-800 border-opacity-50 bg-white bg-opacity-10 p-1 text-sm shadow-[0] transition-shadow hover:bg-opacity-30 dark:border-white dark:bg-gray-800 dark:bg-opacity-10"
	>{label}</a
>

<style>
	a:hover {
		box-shadow: 10px 0px 20px 10px var(--primary-color), -10px 0px 20px 10px var(--secondary-color);
	}
</style>
