import Vue from "vue"
import Vuex from "vuex"
import { GameRules, NewGameRules } from "@/shared/entities/game-rules"
import { NewResources, Resources } from "@/shared/entities/resources"
import { NewShips, Ships } from "@/shared/entities/ships"
import { MotherShip, NewMotherShip } from "@/shared/entities/mother-ship"
import { ResourcesManager } from "@/shared/services/resources-manager"

Vue.use(Vuex)

export interface State {
	errorMessage: string
	resources: Resources
	ships: Ships
	motherShip: MotherShip
	gameRules: GameRules
}

const INITIAL_STATE: State = {
	errorMessage: "",
	resources: NewResources(),
	ships: NewShips(),
	motherShip: NewMotherShip(),
	gameRules: NewGameRules()
}

const store = new Vuex.Store<State>({
	state: INITIAL_STATE,
	mutations: {
		updateErrorMessage(state: State, errorMessage: string) {
			state.errorMessage = errorMessage
		},
		updateResources(state: State, resources: Resources) {
			state.resources = resources
		},
		updateGameRules(state: State, gameRules: GameRules) {
			state.gameRules = gameRules
		},
		updateShips(state: State, ships: Ships) {
			state.ships = ships
		},
		updateMotherShip(state: State, motherShip: MotherShip) {
			state.motherShip = motherShip
		}
	},
	actions: {}
})

export default store

ResourcesManager.init(store, 2)
ResourcesManager.startCounting()
