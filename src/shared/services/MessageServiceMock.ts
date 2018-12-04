import { MessageService } from "@/shared/services/MessageService"
import { Message, MessageType } from "@/shared/Messages"
import router from "@/Router"

export class MessageServiceMock implements MessageService {
	isConnected(): boolean {
		return true
	}

	send(message: Message): void {
		switch (message.type) {
			case MessageType.SignIn:
				router.push("/main")
				break
		}
	}
}
