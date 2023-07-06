import React, { useEffect, useRef, useState } from "react";
import { messages$, useMessages } from "../state/message";
import messageService from "../../service/messageService";
import { userToTalk$ } from "../state/rxjs";
import { messages } from "./../state/message";

const FormMessage = () => {
  const input = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect((_) => {
    messages$.subscribe(async (messages) => setMessages([...messages]));
  }, []);

  const onSendMessage = (e) => {
    e.preventDefault();
    const message = input.current.value;
    const mssg = messageService.getMessage(
      message,
      userToTalk$.getValue().codeClient
    );
    messages$.next([...messages, mssg]);
    messageService
      .sendMessage(mssg)
      .then((resp) => {})
      .catch((err) => {
        messages$.next([...messages.pop()]);
      });

    input.current.value = "";
  };

  return (
    <div className="chat-input-section p-3 p-lg-4">
      <form id="chatinput-form" encType="multipart/form-data">
        <div className="row g-0 align-items-center">
          <div className="col-auto">
            <div className="chat-input-links me-2">
              <div className="links-list-item">
                <button
                  type="button"
                  className="btn btn-link text-decoration-none emoji-btn"
                  id="emoji-btn"
                >
                  <i className="bx bx-smile align-middle"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="chat-input-feedback">Please Enter a Message</div>
            <input
              ref={input}
              name="message"
              type="text"
              className="form-control chat-input bg-light border-light"
              id="chat-input"
              placeholder="Type your message..."
              autoComplete="off"
            />
          </div>
          <div className="col-auto">
            <div className="chat-input-links ms-2">
              <div className="links-list-item">
                <button
                  onClick={onSendMessage}
                  className="btn btn-success chat-send waves-effect waves-light"
                >
                  <i className="ri-send-plane-2-fill align-bottom"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormMessage;
