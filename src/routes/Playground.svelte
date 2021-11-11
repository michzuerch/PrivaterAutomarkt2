<div class="m-5">
	<h2 class="mb-4 text-2xl text-green-700 font-bold">Buttons</h2>
	<button
		data-act-class="shadow-outline"
		data-set-theme=""
		class="bg-green-700 focus:outline-none m-1 rounded p-2">Default</button
	>
	<button
		data-act-class="shadow-outline"
		data-set-theme="dark"
		class="bg-green-700 focus:outline-none m-1 rounded p-2">Dark</button
	>
	<button
		data-act-class="shadow-outline"
		data-set-theme="black"
		class="bg-green-700 focus:outline-none m-1 rounded p-2">Black</button
	>
	<button
		data-act-class="shadow-outline"
		data-set-theme="🌸"
		class="bg-green-700 focus:outline-none m-1 rounded p-2">🌸 Pink</button
	>
	<button
		data-act-class="shadow-outline"
		data-set-theme="🐬"
		class="bg-green-700 focus:outline-none m-1 rounded p-2">🐬 Blue</button
	>
	<button
		data-act-class="shadow-outline"
		data-set-theme="🐤"
		class="bg-green-700 focus:outline-none m-1 rounded p-2">🐤 Yellow</button
	>
</div>

/* Theme chooser */
<div class="m-5">
	<h2 class="mb-4 text-2xl text-green-700 font-bold">Toggle</h2>
	🌞
	<div class="inline-block w-10">
		<span
			data-toggle-theme="dark"
			data-act-class="pl-4"
			class="border rounded-full border-green-700 flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0"
		>
			<span class="rounded-full w-3 h-3 m-1 bg-green-700" />
		</span>
	</div>
	🌚
</div>
<div class="m-5">
	<h2 class="mb-4 text-2xl text-green-700 font-bold">Select</h2>
	<select data-choose-theme class="focus:outline-none h-10 rounded-full px-3 border">
		<option value="">Default</option>
		<option value="dark">Dark</option>
		<option value="black">Black</option>
		<option value="🌸">🌸 Pink</option>
		<option value="🐬">🐬 Blue</option>
		<option value="🐤">🐤 Yellow</option>
	</select>
</div>

<div class="m-5 bg-white rounded p-5">
	<h2 class="mb-4 text-2xl text-bold">How to use:</h2>
	Github:<a class="text-blue-600" href="https://github.com/saadeghi/theme-change" target="_blank"
		>https://github.com/saadeghi/theme-change</a
	>
</div>

<h2>Card</h2>
<div class="card bordered">
	<figure>
		<img src="https://picsum.photos/id/1005/400/250" />
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
c
