export type Job = {
	title: string;
	deadline: Date;
	jobType: string;
	brand: {
		logo: string;
		name: string;
	};
	address: {
		subLocality: string;
	};
};
