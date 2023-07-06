import React from "react";
import { useMessages } from "../state/message";
import MessageOut from "./messageOut";
import MessageIn from "./messageIn";
import messageService from "../../service/messageService";

const UserChat = () => {
  const messages = useMessages();
  return (
    <div className="position-relative" id="users-chat">
      <div className="chat-conversation p-3 p-lg-4" id="chat-conversation">
        <div className="simplebar-wrapper chat12">
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div className="simplebar-offset chat13">
              <div
                className="simplebar-content-wrapper chat16"
                tabindex="0"
                role="region"
                aria-label="scrollable content"
              >
                <div className="simplebar-content chat15">
                  <ul
                    className="list-unstyled chat-conversation-list"
                    id="users-conversation"
                  >
                    {/* message list */}
                    {messages.map((message, i) => {
                      if (messageService.isMyMessage(message))
                        return <MessageOut key={i} message={message} />;
                      return (
                        <MessageIn key={i} name={"other"} message={message} />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="simplebar-placeholder chat17"></div>
        </div>
        <div className="simplebar-track simplebar-horizontal chat18">
          <div className="simplebar-scrollbar chat19"></div>
        </div>
        <div className="simplebar-track simplebar-vertical chat20">
          <div className="simplebar-scrollbar chat21"></div>
        </div>
      </div>
      <div
        className="alert alert-warning alert-dismissible chat22 copyclipboard-alert px-4 fade show"
        id="copyClipBoard"
        role="alert"
      >
        Message copied
      </div>
    </div>
  );
};

export default UserChat;
