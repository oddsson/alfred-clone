<script context="module" lang="typescript">
	import type { Job } from 'src/types';

	export async function load({ fetch }) {
		const jobs = await fetch('index.json');
		const jobsJSON = await jobs.json();

		return { props: { jobs: jobsJSON } };
	}
</script>

<script lang="typescript">
	import Card from '../components/Card/index.svelte';
	export let jobs: Job[];

	let jobsState: Job[] = jobs;
</script>

<h1>{`Öll störf (${jobsState.length})`}</h1>

<div class="card-grid">
	{#each jobsState as job}
		<Card
			brand={job.brand}
			title={job.title}
			address={job.address}
			deadline={job.deadline}
			jobType={job.jobType}
		/>
	{/each}
</div>

<style>
	h1 {
		text-align: center;
		border-bottom: 1px solid #f4f4f4;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
	}
	.card-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 32px;
	}
</style>
