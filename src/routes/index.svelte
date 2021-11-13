<script context="module">
	import { browser, dev } from '$app/env';

	export const prerender = true;
</script>

<article>
	<section class="container mx-auto px-6">
		<!-- hero section content goes here -->
		<div class="w-full lg:flex items-center">
			<div class="w-full lg:w-1/2">
				<!-- hero section description goes here -->

				<h2 class="text-md lg:text-2xl text-gray-600">Market Intelligence Solutions to</h2>
				<h1 class="text-5xl lg:text-6xl font-bold text-teal-600 mb-2 lg:mb-6">Win your market</h1>
				<p class="text-md lg:text-xl font-light text-gray-800 mb-8">
					Powerful analytics tools for your business. See the exact keywords for which your
					competitors rank in organic search and the amount of traffic driven by each of them.
				</p>
			</div>
			<div class="w-full lg:w-1/2 lg:pl-24">
				<!-- sign-up form goes here -->

				<form action="#" class="bg-gray-100 shadow-sm rounded-md p-8">
					<div class="mb-6">
						<label for="name" class="mb-3 block text-gray-700">Full name:</label>
						<input
							type="text"
							id="name"
							class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
							placeholder="John Doe"
							required
						/>
					</div>
					<div class="mb-6">
						<label for="email" class="mb-3 block text-gray-700">Email address:</label>
						<input
							type="email"
							id="email"
							class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
							placeholder="john.doe@company.com"
							required
						/>
					</div>
					<div class="mb-8">
						<label for="company_size" class="mb-3 block text-gray-700">Company size:</label>
						<select
							id="company_size"
							class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
							required
						>
							<option value="">Select an option</option>
							<option value="1">1-10</option>
							<option value="2">10-50</option>
							<option value="3">50-100</option>
							<option value="4">100+</option>
						</select>
					</div>
					<button
						type="submit"
						class="py-3 px-12 bg-teal-500 hover:bg-teal-600 mr-5 rounded-md text-white text-lg focus:outline-none w-full"
						>Request Demo</button
					>
				</form>
			</div>
		</div>

		Herzlich Willkommen! Gebrauchtwagen ab 500,- € ---Finanzierung ab 1000,- € Wir verkaufen auch
		Ihr Auto!!! Privat an Privat = günstig Öffnungszeiten: Montag – Freitag : 10.00 - 18.00 Uhr
		Samstag : 10.00 - 14.00 Uhr Manfred Schlett Herrenlandstr. 39 78315 Radolfzell Tel. +49 -
		(0)7732-942407 Fax. +49 - (0)7732-942408 email. info@billig-car.de Industriegebiet West,
		gegenüber KAWASAKI +AUTO BOSCH DIENST
	</section>
</article>
