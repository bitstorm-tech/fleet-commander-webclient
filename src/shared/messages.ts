export enum MessageType {
  Error = "error",
  SignUp = "sign_up",
  SignIn = "sign_in",
  SignOut = "sign_out",
  Correction = "correction",
  GameRules = "game_rules"
}

export interface Message {
  type: MessageType,
  payload?: any
}

export interface SignInPayload {
  email: string,
  password: string
}

export interface ErrorPayload {
  message: string
}

export interface CorrectionPayload {
  titanium: number,
  fuel: number,
  energy: number
}
