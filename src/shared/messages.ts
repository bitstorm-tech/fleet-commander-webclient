export enum MessageType {
  Error = 0,
  SignUp = 1,
  SignIn = 2,
  SignOut = 3,
  Correction = 4
}

export interface Message {
  type: number,
  payload?: any
}

export interface SignInPayload {
  email: string,
  password: string
}

export interface ErrorPayload {
  text: string
}

export interface CorrectionPayload {
  titanium: number,
  fuel: number,
  energy: number
}
