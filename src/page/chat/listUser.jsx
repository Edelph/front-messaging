import React, { useEffect } from "react";
import UserConnected from "./userConnected";
import SearchInput from "./search-input";
import User from "./user";
import { UseUsers, userToTalk$ } from "../state/rxjs";

const ListUser = () => {
  const users = UseUsers();

  return (
    <div className="chat-leftsidebar">
      <div className="px-4 pt-4 mb-4">
        {/* user connected */}
        <UserConnected />
        {/* search input */}
        <SearchInput />
      </div>

      <div className="chat-room-list ">
        <div className="simplebar-wrapper chat2">
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask persone">
            <div className="simplebar-offset chat3">
              <div
                className="simplebar-content-wrapper chat5"
                tabindex="0"
                role="region"
                aria-label="scrollable content"
              >
                <div className="simplebar-content chat6">
                  <div className="d-flex align-items-center px-4 mb-2">
                    <div className="flex-grow-1">
                      <h4 className="mb-0 fs-12 text-muted text-uppercase">
                        Direct Messages
                      </h4>
                    </div>
                  </div>

                  <div className="chat-message-list">
                    <ul
                      className="list-unstyled chat-list chat-user-list"
                      id="userList"
                    >
                      {users.map((user) => (
                        <User key={user.codeClient} user={user} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="simplebar-placeholder chat7"></div>
        </div>
        <div className="simplebar-track simplebar-horizontal chat8">
          <div className="simplebar-scrollbar chat9"></div>
        </div>
        <div className="simplebar-track simplebar-vertical chat10">
          <div className="simplebar-scrollbar chat11"></div>
        </div>
      </div>
    </div>
  );
};

export default ListUser;
