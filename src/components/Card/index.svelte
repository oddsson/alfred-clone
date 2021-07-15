<script>
	import { format } from 'date-fns';
	import { is } from 'date-fns/locale';
	export let title;
	export let deadline;
	export let jobType;
	export let brand;
	export let address;
</script>

<div class="card">
	<img src={brand.logo} alt={`Logo hjá ${brand.name}`} />
	<h2>{title}</h2>
	<p class="brand_name">{brand.name}</p>
	<div class="pill_container">
		<div class="pill address_sub_locality">{address.subLocality}</div>
		{#if deadline}
			<div class=" pill deadline">
				{`${format(new Date(deadline), `d. MMM`, { locale: is })}`}
			</div>
		{/if}
		<div class="pill job_title">
			{jobType === 'Full time'
				? 'Fullt starf'
				: jobType === 'Part time'
				? 'Hlutastarf'
				: jobType === 'Summer job'
				? 'Sumarstarf'
				: jobType === 'Temporary'
				? 'Tímabundið'
				: jobType}
		</div>
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-rows: 95px 1fr 1fr 3fr;
		row-gap: 0.5rem;
		max-height: 280px;
		border: 1px solid rgb(240, 240, 240);
		border-radius: 1rem;
		padding: 1rem;
		background-color: #fff;
		text-align: center;
	}

	.card h2 {
		text-align: center;
		margin-bottom: 0.5rem;
		margin-top: 0.5rem;
	}

	.card img {
		width: 100px;
		border: 1px solid rgb(240, 240, 240);
		border-radius: 0.75rem;
		padding: 0.625rem;
		margin: 0 auto;
	}

	.card .brand_name {
		color: #ff7200;
	}

	.card .pill_container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
		align-items: center;
		gap: 8px;
		width: 90%;
		text-align: center;
		margin: auto auto 0 auto;
		max-height: 80px;
	}

	.card .pill_container .pill {
		font-size: 12px;
		color: #848484;
		border: 1px solid rgb(240, 240, 240);
		border-radius: 4px;
		padding: 8px;
	}
</style>
