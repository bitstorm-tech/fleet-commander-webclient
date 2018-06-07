let messageType = 0;

export enum MessageType {
  Error = messageType++,
  SignUp = messageType++,
  SignIn = messageType++,
  SignOut = messageType++
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
