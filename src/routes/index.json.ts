import type { Job } from '../types';

export async function get(): Promise<{ body: Job[] }> {
	const res = await fetch('https://userapi.alfred.is/api/v1/front-web/jobs?page=3&size=28');
	const data = await res.json();

	const jobs = data.jobs.map((job: Job) => {
		return {
			title: job.title,
			deadline: job.deadline,
			jobType: job.jobType,
			brand: { logo: job.brand.logo, name: job.brand.name },
			address: { subLocality: job.address.subLocality }
		};
	});

	return {
		body: jobs
	};
}
