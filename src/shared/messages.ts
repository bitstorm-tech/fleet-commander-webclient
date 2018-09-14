export enum MessageType {
	Error = "error",
	SignUp = "sign_up",
	SignIn = "sign_in",
	SignOut = "sign_out",
	Resources = "resources",
	Ships = "ships",
	GameRules = "game_rules",
	MotherShip = "mother_ship"
}

export interface Message {
	type: MessageType,
	payload?: any
}

export interface ErrorPayload {
	message: string
}
