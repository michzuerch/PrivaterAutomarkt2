<script>
	import Hero from '$lib/Hero.svelte';
	import Gallery from '$lib/Gallery.svelte';
	import Autos from './Autos.svelte';
</script>

<Hero />

<section class="py-16 bg-yellow-200 text-gray-800">
	<div class="flex items-stretch justify-around px-4 pt-9 space-x-3  mx-auto">
		<div class="card lg:card-side bg-yellow-100 shadow-lg">
			<div class="card-body">
				<h2 class="card-title">Finanzierung</h2>
				<p>
					Ihnen gefällt unser Preis-/ Leistungsangebot, aber der Kaufpreis überschreitet Ihr Budget
					? Daran soll Ihr Wunsch nach einem Fahrzeug nicht scheitern!
				</p>
				<p class="pt-2">
					Wir bieten Ihnen neben preiswerten Fahrzeugen auch zinsgünstige Kredite an. Es gibt auch
					keine langen Wartezeiten für die Kreditentscheidung.
				</p>
				<p class="pt-2">
					Nachdem die Kreditanfrage online abgeschickt wurde, liegt innerhalb weniger Minuten eine
					Entscheidung vor.
				</p>
			</div>
		</div>
		<div class="card lg:card-side bg-yellow-100 shadow-lg">
			<div class="card-body">
				<h2 class="card-title">Dienstleistungen</h2>
				<div>
					Unser Unternehmen vermittelt Gebrauchtwagen von Privat an Privat mit 27 jähriger
					Erfahrung. Der Vorteil darin ist der Käufer bekommt ein Fahrzeug das weitaus billiger
					angeboten wird als beim normalen Autohändler / Autoplatz / Autohaus. Wir verkaufen auch
					Ihr Autos.
					<ul class="list-disc pt-3">
						<li>Privat an Privat = günstig</li>
						<li>Vermittlung, An- und Verkauf</li>
						<li>Fachmännische Beratung bei Preisermittlung</li>
						<li>Garantie - Finanzierung - Versicherung></li>
						<li>Zulassungsservice, An.+ Ab.+ Ummeldung hres KFZ</li>
						<li>Zollnummer, Kurzzeitkennzeichen</li>
						<li>
							Versicherungsservice (Doppelkarten), Wena-Car Garantie für Gebrauchtfahrzeuge bis 24
							Monate
						</li>
						<li>Professionelle Beschilderung Ihres KFZ</li>
						<li>Probefahrt mit roter Nummer</li>
						<li>Partner - KFZ Werkstatt direkt vor Ort</li>
						<li>Tüv und ASU Service</li>
						<li>KFZ mit Bild im Internet bis zum Verkauf</li>
						<li>Verkaufsplatz ist eingezäunt / Videoüberwacht</li>
						<li>Beste Vermittlung durch 40 Jahre Erfahrung</li>
						<li>Professioneller Verkauf Ihres KFZ</li>
						<li>Inzahlungnahme Ihres Altautos</li>
						<li>Entsorgung Ihres Altautos</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="card lg:card-side bg-yellow-100 shadow-lg">
			<div class="card-body">
				<h2 class="card-title">Zulassung</h2>
				<p>
					Herzlichen Glückwunsch!<br />
					Vor der ersten Fahrt muss das Fahrzeug erst angemeldet werden. Eine reine, aber zeitaufwendige
					Formalität. Zeit, die Sie nicht haben? Kein Problem: Wir übernehmen Anmeldung, Ummeldung und
					Abmeldung Ihres Fahrzeug, egal wo Sie es gekauft haben. Zollnummer und Kurzzeitkennzeichen
					ebenfalls !
				</p>
			</div>
		</div>
	</div>
</section>
