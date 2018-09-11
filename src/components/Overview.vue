<template>
	<div id="root">
		<fc-menu></fc-menu>
		<div class="fc-panel resources">
			<span>Titanium: {{titaniumHarvested}} <b>---</b> Fuel: {{fuelHarvested}} <b>---</b> Energy: {{energyHarvested}}</span>
		</div>
	</div>
</template>

<script lang="ts">
	import fcMenu from '@/components/Menu.vue'
	import { Component, Vue } from 'vue-property-decorator'

	@Component({
		components: {
			fcMenu
		}
	})
	export default class Overview extends Vue {
		intervalRef: any
		titaniumHarvested = 0
		fuelHarvested = 0
		energyHarvested = 0

		created() {
			this.intervalRef = setInterval(() => {
				// if (rules) {
				//   this.titaniumHarvested += rules.TitaniumHarvester.perSecond[0];
				//   this.fuelHarvested += rules.FuelHarvester.perSecond[0];
				//   this.energyHarvested += rules.EnergyHarvester.perSecond[0];
				// }
				this.titaniumHarvested += 15
				this.fuelHarvested += 7
				this.energyHarvested += 5
			}, 2000)
		}

		// destroyed() {
		//   clearInterval(intervalRef);
		// }
	}
</script>

<style scoped>
	#root {
		display: flex;
		padding: 15px;
	}

	.resources {
		display: flex;
		width: 50%;
		flex-direction: column;
		padding: 15px;
		margin-left: 10px;
	}

	td {
		padding: 10px;
	}

	button {
		width: 200px;
	}
</style>
