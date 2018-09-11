import Vue from "vue"
import Vuex from "vuex"
import { Resources } from "@/shared/resources"
import { GameRules } from "@/shared/game-rules"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		errorMessage: "",
		resources: {},
		gameRules: {}
	},
	mutations: {
		setErrorMessage(state, errorMessage: string) {
			state.errorMessage = errorMessage
		},
		clearErrorMessage(state) {
			state.errorMessage = ""
		},
		updateResources(state, resources: Resources) {
			state.resources = resources
		},
		updateGameRules(state, gameRules: GameRules) {
			state.gameRules = gameRules
		}
	},
	actions: {}
})
