<template>
	<div id="root" class="fc-panel">
		<button @click="signOut">Overview</button>
		<button @click="signOut">Ships</button>
		<button @click="signOut">Mother Ship</button>
		<button @click="signOut">Map</button>
		<button @click="signOut">Sign out</button>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"

	@Component
	export default class Menu extends Vue {
		signOut() {
			this.$router.push("/")
		}
	}
</script>

<style scoped>
	#root {
		display: flex;
		flex-direction: column;
		width: 200px;
		height: 100%;
	}

	button {
		margin: 10px
	}
</style>
