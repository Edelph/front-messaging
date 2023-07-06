import React, { useState } from "react";
import { setCurrentUser, useUserToTalk } from "../state/rxjs";

const User = ({ hasImg, user }) => {
  const currentUser = useUserToTalk();

  const [isUnreadMessage, setIsUnreadMessage] = useState(false);
  const [numberNewMessage, setNumberNewMessage] = useState(2);

  const renderPdp = () => {
    return hasImg ? (
      <img
        src="assets/images/users/avatar-3.jpg"
        className="rounded-circle img-fluid userprofile"
        alt=""
      />
    ) : (
      <div className="avatar-title rounded-circle bg-danger userprofile">C</div>
    );
  };

  return (
    <li
      key={user.codeClient}
      className={currentUser?.codeClient === user.codeClient ? "active" : ""}
      onClick={(e) => setCurrentUser(user)}
    >
      <a href="#" className="unread-msg-user">
        <div className="d-flex align-items-center" style={{ display: "flex" }}>
          <div
            className={`flex-shrink-0 chat-user-img align-self-center me-2 ms-0 ${
              user.onLine ? "online" : "away"
            }`}
          >
            <div className="avatar-xxs">{renderPdp()}</div>
            <span className="user-status"></span>
          </div>
          <div className="flex-grow-1 overflow-hidden">
            <p className="text-truncate mb-0">
              {user?.nameClient + " " + user?.lastNameClient ||
                user?.emailClient ||
                user?.codeClient?.substring(0, 10)}
            </p>
          </div>

          {numberNewMessage > 0 && (
            <div className="flex-shrink-0">
              <span className="badge badge-soft-dark rounded p-1">
                {numberNewMessage}
              </span>
            </div>
          )}
        </div>
      </a>
    </li>
  );
};

export default User;
