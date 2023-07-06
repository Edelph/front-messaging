import { useState } from "react";
import { useSubscription } from "react-stomp-hooks";
import messageService from "./../../service/messageService";
import { useUserToTalk, userToTalk$ } from "./rxjs";
import { BehaviorSubject } from "rxjs";

export const messages$ = new BehaviorSubject([]);

export const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const user = useUserToTalk();

  useState((_) => {
    userToTalk$.subscribe(async (user) => {
      const resp = await messageService.getConversationWith(user?.codeClient);
      if (resp.status === 200) {
        messages$.next([...resp.data]);
      }
    });
    messages$.subscribe((messages) => setMessages(messages));
  }, []);

  useSubscription("messages/sendTo/all", (data) => {
    const message = JSON.parse(data.body);
    if (
      message.receiver === messageService.getSender() &&
      message.sender === user.codeClient
    ) {
      setMessages((messages) => [...messages, message]);
    }
  });

  return messages;
};
