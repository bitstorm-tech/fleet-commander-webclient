import { ErrorPayload, Message, MessageType } from '@/shared/messages';
import router from '@/router';
import store from '@/store';


const messageHandler = (messageEvent: MessageEvent) => {
  console.log(messageEvent);
  const message: Message = JSON.parse(messageEvent.data);
  console.log(message);

  switch (message.type) {
    case MessageType.Error:
      const error = <ErrorPayload>message.payload;
      store.commit('setErrorText', error.text);
      break;

    case MessageType.SignIn:
    case MessageType.SignUp:
      router.push('/overview');
      break;
  }
};

export default class MessageService {
  private static socket: WebSocket;

  public static connect() {
    if (!this.isConnected() && !this.isConnecting()) {
      this.socket = new WebSocket('ws://localhost:8080/websocket');
      this.socket.onmessage = messageHandler;
    }
  }

  static sendSignIn(email: string, password: string) {
    const message: Message = {
      type: MessageType.SignIn,
      payload: {
        email,
        password
      }
    };

    this.send(message);
  }

  static sendSignUp(username: string, email: string, password: string) {
    const message: Message = {
      type: MessageType.SignUp,
      payload: {
        username,
        email,
        password
      }
    };

    this.send(message);
  }

  private static send(message: Message) {
    if (this.isConnected()) {
      this.socket.send(JSON.stringify(message));
    } else {
      const interval = setInterval(() => {
        if (this.isConnected()) {
          clearInterval(interval);
          this.socket.send(JSON.stringify(message));
        } else {
          this.connect();
        }
      }, 250);
    }
  }

  static isConnected(): boolean {
    return this.socket && this.socket.readyState !== WebSocket.CLOSED && this.socket.readyState !== WebSocket.CLOSING;
  }

  static isConnecting(): boolean {
    return this.socket && this.socket.readyState === WebSocket.CONNECTING;
  }
}

MessageService.connect();
