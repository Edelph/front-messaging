import React, { useEffect, useState } from "react";
import compteService from "../../service/countService";

const UserConnected = () => {
  const [userConnected, setUserConnected] = useState();

  useEffect((_) => {
    setUserConnected(compteService.getStorage());
  }, []);

  return (
    <div className="d-flex align-items-start user">
      <div className="flex-grow-1">
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
                {userConnected?.nameClient ||
                  userConnected?.emailClient ||
                  userConnected?.codeClient?.substring(0, 10)}
              </a>
            </h5>
            <p className="text-truncate text-muted mb-0 userStatus">
              <small className="fs-13">
                {userConnected?.lastNameClient || userConnected?.emailClient}
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <div
          data-bs-toggle="tooltip"
          data-bs-trigger="hover"
          data-bs-placement="bottom"
          title=""
          data-bs-original-title="Add Contact"
        >
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalgrid"
            className="btn btn-soft-success btn-sm"
          >
            <i className="ri-add-line align-bottom"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserConnected;
