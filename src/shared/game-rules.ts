export interface ShipRule {
	hitPoints: number
	titaniumCost: number
	fuelCost: number
	harvestPerMinute: number
}

export interface GameRules {
	titaniumHarvester: ShipRule
	fuelHarvester: ShipRule
}

export function NewGameRules(): GameRules {
	return {
		titaniumHarvester: {
			hitPoints: 0,
			titaniumCost: 0,
			fuelCost: 0,
			harvestPerMinute: 0
		},
		fuelHarvester: {
			hitPoints: 0,
			titaniumCost: 0,
			fuelCost: 0,
			harvestPerMinute: 0
		}
	}
}
