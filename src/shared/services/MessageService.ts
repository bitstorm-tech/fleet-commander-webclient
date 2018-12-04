import { Message } from "@/shared/Messages"

export interface MessageService {
	send(message: Message): void

	isConnected(): boolean
}
