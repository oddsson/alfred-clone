<script>
	import { cubicOut } from 'svelte/easing';

	import { slide, crossfade } from 'svelte/transition';
	let current = 0;
	export let runAnimation;

	const [send, receive] = crossfade({
		duration: 800
	});
</script>

{#if runAnimation}
	<header in:slide>
		<div class="inner-wrapper">
			<img src="../../static/alfred_icon.svg" alt="Alfred icon" />
			<nav>
				<div>
					<a href="/" class:selected={current === 0} on:click={() => (current = 0)}>Heim</a>
					{#if current === 0}
						<span out:send={{ key: 'up' }} in:receive={{ key: 'up' }} class="a">☝️</span>
					{/if}
				</div>
				<div>
					<a href="/um-alfred" class:selected={current === 1} on:click={() => (current = 1)}
						>Um Alfreð</a
					>
					{#if current === 1}
						<span out:send={{ key: 'up' }} in:receive={{ key: 'up' }} class="b">☝️</span>
					{/if}
				</div>
			</nav>
			<span role="img" label="shaka">🤙</span>
		</div>
	</header>
{/if}

<style>
	header {
		height: 80px;
		background-image: linear-gradient(90deg, #ff7200 0, #ff7200 100%);
		margin-bottom: 4rem;
	}

	header .inner-wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		justify-items: space-around;
		max-width: 1180px;
		margin: 0 auto;
		height: 100%;
	}

	header nav {
		display: flex;
		justify-content: center;
		transform: translateY(2px);
	}

	header nav div {
		position: relative;
	}

	header nav a {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		color: #fff;
		text-decoration: none;
	}

	header nav a.selected {
		font-weight: 700;
	}

	header nav span {
		position: absolute;
		left: 36%;
	}

	header nav div:first-child {
		margin-right: 40px;
	}

	header span[role='img'] {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		cursor: pointer;
		height: 100%;
		transform-origin: center;
	}

	header span[role='img']:hover {
		animation: shaka-brah 1.2s ease-in infinite forwards;
	}

	@keyframes shaka-brah {
		25% {
			transform: rotateZ(-30deg) scale(1.5);
		}
		50% {
			transform: rotateX(-50deg) rotateZ(-30deg) scale(1.5);
		}
		65% {
			transform: rotateX(50deg) rotateZ(-20deg) scale(1.5);
		}
		80% {
			transform: rotateX(0deg) rotateZ(-10deg) scale(1.5);
		}
		90% {
			transform: rotateZ(0deg) scale(1);
		}
	}
</style>
