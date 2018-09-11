export interface ShipRule {
	level: number
	hitPoints: number
	titaniumCost: number
	fuelCost: number
	harvestPerMinute: number
}

export interface GameRules {
	titaniumHarvester: ShipRule[]
	fuelHarvester: ShipRule[]
}
