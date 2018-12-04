import { MessageService } from "@/shared/services/MessageService"
import { messageHandler } from "@/shared/MessageHandler"
import { Message } from "@/shared/Messages"


export class MessageServiceImpl implements MessageService {
	readonly socket: WebSocket

	constructor() {
		this.socket = new WebSocket("ws://localhost:8080/websocket")
		this.socket.onmessage = messageHandler
	}

	public send(message: Message) {
		if (this.isConnected()) {
			this.socket.send(JSON.stringify(message))
		} else {
			const interval = setInterval(() => {
				if (this.isConnected()) {
					clearInterval(interval)
					this.socket.send(JSON.stringify(message))
				} else {
					console.log("Connection not established yet, try to resend message soon")
				}
			}, 250)
		}
	}

	public isConnected(): boolean {
		return this.socket &&
			this.socket.readyState !== WebSocket.CLOSED &&
			this.socket.readyState !== WebSocket.CLOSING &&
			this.socket.readyState !== WebSocket.CONNECTING
	}
}
