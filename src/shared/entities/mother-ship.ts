export interface MotherShip {
	energyPerMinute: number
	titaniumPerMinute: number
	fuelPerMinute: number
}

export function NewMotherShip(): MotherShip {
	return {
		energyPerMinute: 0,
		titaniumPerMinute: 0,
		fuelPerMinute: 0
	}
}
