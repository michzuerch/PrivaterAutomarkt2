<script>
	import { Icon } from 'svelte-fontawesome';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

	const secretSauceRecipe = import.meta.env.VITE_SECRET_SAUCE_RECIPE;
</script>

<article>
	<h1>Import from env:{secretSauceRecipe}</h1>
	<Icon icon={faEnvelope} />

	<section>
		<h2>Card</h2>
		<div class="card bordered">
			<figure>
				<img src="https://picsum.photos/id/1005/400/250" alt="pic" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">
					Top image
					<div class="badge mx-2 badge-secondary">NEW</div>
				</h2>
				<p>
					Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus
					veritatis sed molestiae voluptates incidunt iure sapiente.
				</p>
				<div class="justify-end card-actions">
					<button class="btn btn-secondary">More info</button>
				</div>
			</div>
		</div>
		<h2>Carousel</h2>
		<div class="w-full carousel">
			<div id="item1" class="w-full pt-20 carousel-item">
				<img src="https://picsum.photos/id/500/800/300" class="w-full" alt="Carousel1" />
			</div>
			<div id="item2" class="w-full pt-20 carousel-item">
				<img src="https://picsum.photos/id/501/800/300" class="w-full" alt="Carousel2" />
			</div>
			<div id="item3" class="w-full pt-20 carousel-item">
				<img src="https://picsum.photos/id/502/800/300" class="w-full" alt="Carousel3" />
			</div>
			<div id="item4" class="w-full pt-20 carousel-item">
				<img src="https://picsum.photos/id/503/800/300" class="w-full" alt="Carousel4" />
			</div>
		</div>
		<div class="flex justify-center w-full py-4 space-x-2">
			<a href="/Playground#item1" class="btn btn-xs btn-circle">1</a>
			<a href="/Playground#item2" class="btn btn-xs btn-circle">2</a>
			<a href="/Playground#item3" class="btn btn-xs btn-circle">3</a>
			<a href="/Playground#item4" class="btn btn-xs btn-circle">4</a>
		</div>
	</section>
</article>
