<template>
	<div id="root">
		<div id="content">
			<div class="fc-panel resources">
				<table>
					<tr>
						<th>Type</th>
						<th>Resources</th>
						<th>Resources Per Minute</th>
					</tr>
					<tr>
						<td>Titanium</td>
						<td>{{$store.state.resources.titanium}}</td>
						<td>{{titaniumPerMinute}}</td>
					</tr>
					<tr>
						<td>Fuel</td>
						<td>{{$store.state.resources.fuel}}</td>
						<td>{{fuelPerMinute}}</td>
					</tr>
					<tr>
						<td>Energy</td>
						<td>{{$store.state.resources.energy}}</td>
						<td>{{energyPerMinute}}</td>
					</tr>
				</table>
			</div>
			<div class="fc-panel resources">
				<table>
					<tr>
						<th>Type</th>
						<th>Ships</th>
					</tr>
					<tr>
						<td>Titanium Harvester</td>
						<td>{{$store.state.ships.titaniumHarvester}}</td>
					</tr>
					<tr>
						<td>Fuel Harvester</td>
						<td>{{$store.state.ships.fuelHarvester}}</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import fcMenu from "@/components/Menu.vue"
	import { Component, Vue } from "vue-property-decorator"

	@Component({
		components: {
			fcMenu
		}
	})
	export default class Overview extends Vue {
		get titaniumPerMinute(): number {
			return (
				this.$store.state.ships.titaniumHarvester *
				this.$store.state.gameRules.titaniumHarvester.harvestPerMinute
			)
		}

		get fuelPerMinute(): number {
			return (
				this.$store.state.ships.fuelHarvester *
				this.$store.state.gameRules.fuelHarvester.harvestPerMinute
			)
		}

		get energyPerMinute(): number {
			return this.$store.state.motherShip.titaniumPerMinute
		}
	}
</script>

<style scoped>
	#root {
		display: flex;
		position: absolute;
		padding: 15px;
		width: 100%;
		height: 100%;
	}

	#content {
		flex-direction: column;
		width: 100%;
	}

	.resources {
		flex-direction: column;
		padding: 15px;
		margin-left: 10px;
	}

	td,
	th {
		text-align: left;
	}

	button {
		width: 200px;
	}
</style>
