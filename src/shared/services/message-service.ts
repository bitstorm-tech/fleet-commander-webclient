import { Message, MessageType } from "../messages"
import { messageHandler } from "../message-handler"


export class MessageService {
	private static socket: WebSocket

	private static connect() {
		if (!this.isConnected() && !this.isConnecting()) {
			console.log("Connecting websocket to backend ...")
			this.socket = new WebSocket("ws://localhost:8080/websocket")
			this.socket.onmessage = messageHandler
		}
	}

	static sendSignIn(email: string, password: string) {
		const message: Message = {
			type: MessageType.SignIn,
			payload: {
				email,
				password
			}
		}

		this.send(message)
	}

	static sendSignUp(name: string, email: string, password: string) {
		const message: Message = {
			type: MessageType.SignUp,
			payload: {
				name,
				email,
				password
			}
		}

		this.send(message)
	}

	static send(message: Message) {
		if (this.isConnected()) {
			this.socket.send(JSON.stringify(message))
		} else {
			const interval = setInterval(() => {
				if (this.isConnected()) {
					clearInterval(interval)
					this.socket.send(JSON.stringify(message))
				} else {
					this.connect()
				}
			}, 250)
		}
	}

	static isConnected(): boolean {
		return this.socket && this.socket.readyState !== WebSocket.CLOSED && this.socket.readyState !== WebSocket.CLOSING
	}

	static isConnecting(): boolean {
		return this.socket && this.socket.readyState === WebSocket.CONNECTING
	}
}
