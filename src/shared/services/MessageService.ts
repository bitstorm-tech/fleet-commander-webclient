import { Message } from "@/shared/messages"

export interface MessageService {
	send(message: Message): void

	isConnected(): boolean
}
