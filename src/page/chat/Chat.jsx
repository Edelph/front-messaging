import React from "react";
import "./Chat.css";
import ListUser from "./listUser";
import FormMessage from "./formMessage";
import UserChat from "./userChat";
import TopBarChat from "./chat-top-bar";
import CreateGroupModal from "./modal-create-group";
import { StompSessionProvider } from "react-stomp-hooks";
import { API } from "../../service/util";

const Chat = () => {
  return (
    <StompSessionProvider url={API + "/ws"}>
      <div className="content d-lg-flex gap-1 p-1">
        <CreateGroupModal />
        <ListUser />
        <div className="user-chat w-100 overflow-hidden">
          <div className="chat-content d-lg-flex">
            <div className="w-100 overflow-hidden position-relative">
              <div className="position-relative">
                <TopBarChat />
                <UserChat />
                <FormMessage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StompSessionProvider>
  );
};

export default Chat;
