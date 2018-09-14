import { Message, MessageType } from "@/shared/messages"
import store from "@/store"
import router from "@/router"

export const messageHandler = (messageEvent: MessageEvent) => {
	const message: Message = JSON.parse(messageEvent.data)

	switch (message.type) {
		case MessageType.Error:
			const errorMessage = message.payload
			console.log("ERROR", errorMessage)
			store.commit("setErrorMessage", errorMessage)
			break

		case MessageType.SignIn:
		case MessageType.SignUp:
			router.push("/overview")
			break

		case MessageType.GameRules:
			store.commit("updateGameRules", message.payload)
			break

		case MessageType.Resources:
			store.commit("updateResources", message.payload)
			break

		case MessageType.Ships:
			store.commit("updateShips", message.payload)
			break

		case MessageType.MotherShip:
			store.commit("updateMotherShip", message.payload)
			break
	}
}
