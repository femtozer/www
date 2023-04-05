<script lang="ts">
	let card: HTMLElement;
	let glow: HTMLElement;

	let handleMove = (e: MouseEvent) => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const bounds = card.getBoundingClientRect();
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2
		};
		const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

		card.style.transform = `
            scale3d(1.02, 1.02, 1.02)
            rotate3d(
                ${center.y / 100},
                ${-center.x / 100},
                0,
                ${Math.log(distance) * 1.5}deg
            )
        `;

		glow.style.backgroundImage = `
            radial-gradient(
                circle at
                ${center.x * 2 + bounds.width / 2}px
                ${center.y * 2 + bounds.height / 2}px,
                #ffffff55,
                #0000000f
            )
        `;
	};

	let handleLeave = () => {
		card.style.transform = '';
		card.style.background = '';
	};
</script>

<div
	bind:this={card}
	on:mousemove={handleMove}
	on:mouseleave={handleLeave}
	class="w-full max-w-2xl rounded-xl border-0 border-neutral-800 border-opacity-70 bg-neutral-50 bg-opacity-30 p-6  shadow-md shadow-[rgb(0_0_0_/0.25)] backdrop-blur-xl transition duration-500 hover:shadow-2xl hover:duration-[0ms] dark:border-neutral-50 dark:border-opacity-70 dark:bg-neutral-800 dark:bg-opacity-30  dark:shadow-[rgb(255_255_255_/0.25)] md:shadow-2xl"
>
	<slot />
	<div
		bind:this={glow}
		class="pointer-events-none absolute left-0 top-0 h-full w-full rounded-xl bg-[radial-gradient(circle_at_50%_-20%,_#0000000f,_#ffffff22)] dark:bg-[radial-gradient(circle_at_50%_-20%,_#ffffff22,_#0000000f)]"
	/>
</div>
