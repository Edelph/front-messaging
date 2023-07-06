import axios from "axios";
import { API } from "./util";

class MessageService {
  getSender() {
    return JSON.parse(localStorage.getItem("connected"))?.codeClient;
  }

  getUrlForMe() {
    return API + "/messages/" + this.getSender();
  }

  getUrlNewUser() {
    return ``;
  }

  isMyMessage(message) {
    if (message.sender === this.getSender()) return true;
    return false;
  }

  sendMessage(message) {
    return axios.post(`${API}/sendMessage`, message);
  }

  getConversationWith(person) {
    return axios.post(`${API}/conversations`, {
      sender: this.getSender(),
      receiver: person,
    });
  }

  getMessage(content, to) {
    return {
      message: content,
      sender: this.getSender(),
      receiver: to,
    };
  }
}

const messageService = new MessageService();

export default messageService;
