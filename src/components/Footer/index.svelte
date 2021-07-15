<footer>
	<p>
		Búið til af <span role="img" label="love">❤️</span> og umhyggju af Ívari Oddssyni
	</p>
</footer>

<style>
	footer {
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 20vh;
		color: #fff;
		background: #333;
		margin-top: 6rem;
	}

	footer p span {
		display: inline-block;
		animation: heartbeat 1s ease-out infinite;
	}

	@keyframes heartbeat {
		0% {
			transform: scale(0.75);
		}
		20% {
			transform: scale(1);
		}
		40% {
			transform: scale(0.75);
		}
		60% {
			transform: scale(1);
		}
		80% {
			transform: scale(0.75);
		}
		100% {
			transform: scale(0.75);
		}
	}
</style>
