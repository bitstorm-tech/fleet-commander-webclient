export interface Ships {
	titaniumHarvester: number
	fuelHarvester: number
}

export function NewShips(): Ships {
	return {
		titaniumHarvester: 0,
		fuelHarvester: 0
	}
}
