<template>
	<fc-menu></fc-menu>
</template>

<script lang="ts">
	import Vue from "vue"
	import Component from "vue-class-component"
	import fcMenu from "@/components/Menu.vue"

	@Component({
		components: {
			fcMenu
		}
	})
	export default class Main extends Vue {

	}
</script>
