<script lang="ts">
	import { onMount } from 'svelte';
	import { Gradient } from '../stripe-gradient';

	export let gradientColors: string[];
	let gradient: Gradient;

	$: cssStyle = gradientColors.map((el, i) => `--gradient-color-${i + 1}:${el}`).join(';');

	$: {
		if (gradient && gradientColors) {
			// eslint-disable-next-line
			(gradient as any).initGradient('#gradient-canvas');
		}
	}

	onMount(() => {
		gradient = new Gradient();
		// eslint-disable-next-line
		(gradient as any).initGradient('#gradient-canvas');
	});
</script>

<canvas id="gradient-canvas" class="fixed" style={cssStyle} />
