<template>
	<div id="root">
		<fc-menu></fc-menu>
		<div class="fc-panel resources">
			<span>Titanium: {{titanium}} <b>---</b> Fuel: {{fuel}} <b>---</b> Energy: {{energy}}</span>
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
		get titanium(): number {
			return this.$store.state.resources.titanium
		}

		get fuel(): number {
			return this.$store.state.resources.fuel
		}

		get energy(): number {
			return this.$store.state.resources.energy
		}
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
