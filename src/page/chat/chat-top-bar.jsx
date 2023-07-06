import React, { useEffect } from "react";
import SearchMessage from "./searchMessage";
import InfoRight from "./infoRight";
import DropDownRight from "./dropRight";
import { useUserToTalk } from "../state/rxjs";

const TopBarChat = () => {
  const user = useUserToTalk();

  return (
    <div className="p-3 user-chat-topbar">
      <div className="row align-items-center">
        <div className="col-sm-4 col-8">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 d-block d-lg-none me-3">
              <a
                href="javascript: void(0);"
                className="user-chat-remove fs-18 p-1"
              >
                <i className="ri-arrow-left-s-line align-bottom"></i>
              </a>
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                  <img
                    src="assets/images/users/avatar-2.jpg"
                    className="rounded-circle avatar-xs"
                    alt=""
                  />
                  <span className="user-status"></span>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate mb-0 fs-16">
                    <a
                      className="text-reset username"
                      data-bs-toggle="offcanvas"
                      href="#userProfileCanvasExample"
                      aria-controls="userProfileCanvasExample"
                    >
                      {user?.nameClient + " " + user?.lastNameClient ||
                        user?.emailClient ||
                        user?.codeClient?.substring(0, 30)}
                    </a>
                  </h5>
                  <p className="text-truncate text-muted mb-0 userStatus">
                    <small className="fs-13">Online</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-4">
          <ul className="list-inline user-chat-nav text-end mb-0">
            <SearchMessage />
            <InfoRight />
            <DropDownRight />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBarChat;
