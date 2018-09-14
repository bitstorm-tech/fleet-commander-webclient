export interface Login {
	name: string
	email: string
	password: string
}

export interface Resources {
	titanium: number
	fuel: number
	energy: number
}

export interface Ships {
	titaniumHarvester: number
	fuelHarvester: number
}

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

export function NewResources(): Resources {
	return {
		titanium: 0,
		fuel: 0,
		energy: 0
	}
}

export function NewShips(): Ships {
	return {
		titaniumHarvester: 0,
		fuelHarvester: 0
	}
}
