import { Store } from "vuex"
import { State } from "@/store"
import { AddResources, Resources } from "@/shared/entities/resources"
import Timer = NodeJS.Timer

export class ResourcesManager {
	readonly store: Store<State>
	readonly updateIntervalMs: number
	readonly timer: Timer

	constructor(store: Store<State>, updateIntervalSeconds: number = 1000) {
		this.store = store
		this.updateIntervalMs = updateIntervalSeconds
		this.timer = setInterval(
			() => this.updateResources(),
			this.updateIntervalMs
		)
	}

	public stopCounting() {
		clearInterval(this.timer)
	}

	private updateResources() {
		const newResources: Resources = {
			titanium: this.getTitanium(),
			fuel: this.getFuel(),
			energy: this.getEnergy()
		}

		this.store.commit("updateResources", AddResources(newResources, this.store.state.resources))
	}

	private getTitanium(): number {
		const titaniumPerMinuteMotherShip = this.store.state.motherShip.titaniumPerMinute
		const titaniumFromMotherShip = titaniumPerMinuteMotherShip * (this.updateIntervalMs / 60)
		const titaniumPerMinuteHarvester = this.store.state.gameRules.titaniumHarvester.harvestPerMinute
		const titaniumFromHarvester = this.store.state.ships.titaniumHarvester * titaniumPerMinuteHarvester * (this.updateIntervalMs / 60)

		return Math.floor(titaniumFromMotherShip + titaniumFromHarvester)
	}

	private getFuel(): number {
		const fuelPerMinuteMotherShip = this.store.state.motherShip.fuelPerMinute
		const fuelFromMotherShip = fuelPerMinuteMotherShip * (this.updateIntervalMs / 60)
		const fuelPerMinuteHarvester = this.store.state.gameRules.fuelHarvester.harvestPerMinute
		const fuelFromHarvester = this.store.state.ships.fuelHarvester * fuelPerMinuteHarvester * (this.updateIntervalMs / 60)

		return Math.floor(fuelFromMotherShip + fuelFromHarvester)
	}

	private getEnergy(): number {
		const energyPerMinuteMotherShip = this.store.state.motherShip.energyPerMinute
		const energyFromMotherShip = energyPerMinuteMotherShip * (this.updateIntervalMs / 60)

		return Math.floor(energyFromMotherShip)
	}
}
