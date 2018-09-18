export enum MessageType {
	Error = "error",
	SignUp = "sign_up",
	SignIn = "sign_in",
	SignOut = "sign_out",
	Resources = "resources",
	Ships = "ships",
	GameRules = "game_rules",
	MotherShip = "mother_ship",
	BuyShips = "buy_ships"
}

export enum ShipType {
	TitaniumHarvester = "titanium_harvester",
	FuelHarvester = "fuel_harvester"
}

export interface Message {
	type: MessageType,
	payload?: any
}
