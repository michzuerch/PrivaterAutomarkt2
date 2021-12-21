<script>
	let images = [
		{ title: '1', src: 'Autos/Gallery/1.jpg' },
		{ title: '2', src: 'Autos/Gallery/2.jpg' },
		{ title: '3', src: 'Autos/Gallery/3.jpg' },
		{ title: '4', src: 'Autos/Gallery/4.jpg' },
		{ title: '5', src: 'Autos/Gallery/5.jpg' },
		{ title: '6', src: 'Autos/Gallery/6.jpg' },
		{ title: '7', src: 'Autos/Gallery/7.jpg' },
		{ title: '8', src: 'Autos/Gallery/8.jpg' },
		{ title: '9', src: 'Autos/Gallery/9.jpg' },
		{ title: '10', src: 'Autos/Gallery/10.jpg' },
		{ title: '11', src: 'Autos/Gallery/11.jpg' },
		{ title: '12', src: 'Autos/Gallery/12.jpg' },
		{ title: '13', src: 'Autos/Gallery/13.jpg' },
		{ title: '14', src: 'Autos/Gallery/14.jpg' },
		{ title: '15', src: 'Autos/Gallery/15.jpg' },
		{ title: '16', src: 'Autos/Gallery/16.jpg' },
		{ title: '17', src: 'Autos/Gallery/17.jpg' },
		{ title: '18', src: 'Autos/Gallery/18.jpg' },
		{ title: '19', src: 'Autos/Gallery/19.jpg' },
		{ title: '20', src: 'Autos/Gallery/20.jpg' },
		{ title: '21', src: 'Autos/Gallery/21.jpg' },
	];

	/**
	 * Generates the link for the next picture.
	 * @param {number} id - Index of the picture in array images.
	 */
	function next(id) {
		let val = parseInt(id + 1);
		if (val > 21) val = 21;
		//console.log(`Next ${id}:${val}`);
		return val;
	}

	/**
	 * Generates the link for the previous picture.
	 * @param {number} id - Index of the picture in array images.
	 */
	function previous(id) {
		let val = parseInt(id - 1);
		if (val < 0) val = 0;
		//console.log(`Previous ${id}:${val}`);
		return val;
	}
</script>

<div class="max-w-fit carousel">
	{#each images as { title, src }, index}
		<div id="slide{index}" class="relative w-full pt-3 carousel-item">
			<img src="{src}" alt="{title}" class="mx-5 object-fill aspect-w-16 aspect-h-9" />
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide{previous(index)}" class="btn btn-circle">❮</a>
				<a href="#slide{next(index)}" class="btn btn-circle">❯</a>
			</div>
		</div>
	{/each}
</div>
