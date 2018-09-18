export interface Resources {
	titanium: number
	fuel: number
	energy: number
}

export function NewResources(): Resources {
	return {
		titanium: 0,
		fuel: 0,
		energy: 0
	}
}

export function AddResources(resources1: Resources, resources2: Resources): Resources {
	return {
		titanium: resources1.titanium + resources2.titanium,
		fuel: resources1.fuel + resources2.fuel,
		energy: resources1.energy + resources2.energy
	}
}
