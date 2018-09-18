import { Store } from "vuex"
import { State } from "@/store"
import { AddResources, Resources } from "@/shared/entities/resources"
import Timer = NodeJS.Timer

export class ResourcesManager {
	static store: Store<State>
	static updateIntervalSeconds: number
	static updateInterval: Timer

	public static init(store: Store<State>, updateIntervalSeconds: number) {
		this.store = store
		this.updateIntervalSeconds = updateIntervalSeconds
	}

	static startCounting() {
		this.updateInterval = setInterval(
			() => ResourcesManager.updateResources(),
			this.updateIntervalSeconds * 1000
		)
	}

	static stopCounting() {
		clearInterval(this.updateInterval)
	}

	private static updateResources() {
		const newResources: Resources = {
			titanium: this.getTitanium(),
			fuel: this.getFuel(),
			energy: this.getEnergy()
		}

		this.store.commit("updateResources", AddResources(newResources, this.store.state.resources))
	}

	private static getTitanium(): number {
		const titaniumPerMinuteMotherShip = this.store.state.motherShip.titaniumPerMinute
		const titaniumFromMotherShip = titaniumPerMinuteMotherShip * (this.updateIntervalSeconds / 60)
		const titaniumPerMinuteHarvester = this.store.state.gameRules.titaniumHarvester.harvestPerMinute
		const titaniumFromHarvester = this.store.state.ships.titaniumHarvester * titaniumPerMinuteHarvester * (this.updateIntervalSeconds / 60)

		return Math.floor(titaniumFromMotherShip + titaniumFromHarvester)
	}

	private static getFuel(): number {
		const fuelPerMinuteMotherShip = this.store.state.motherShip.fuelPerMinute
		const fuelFromMotherShip = fuelPerMinuteMotherShip * (this.updateIntervalSeconds / 60)
		const fuelPerMinuteHarvester = this.store.state.gameRules.fuelHarvester.harvestPerMinute
		const fuelFromHarvester = this.store.state.ships.fuelHarvester * fuelPerMinuteHarvester * (this.updateIntervalSeconds / 60)

		return Math.floor(fuelFromMotherShip + fuelFromHarvester)
	}

	private static getEnergy(): number {
		const energyPerMinuteMotherShip = this.store.state.motherShip.energyPerMinute
		const energyFromMotherShip = energyPerMinuteMotherShip * (this.updateIntervalSeconds / 60)

		return Math.floor(energyFromMotherShip)
	}
}
