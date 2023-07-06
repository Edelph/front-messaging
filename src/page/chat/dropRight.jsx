import React from "react";
import { currentPage$ } from "./../state/rxjs";
import compteService from "./../../service/countService";

const DropDownRight = () => {
  const deconnectionHandle = async (e) => {
    e.preventDefault();
    const response = await compteService.logout();
    if (response.status === 200) {
      this.removeStorage();
      currentPage$.next("LOGIN");
    }
  };
  return (
    <li className="list-inline-item m-0">
      <div className="dropdown">
        <button
          className="btn btn-ghost-secondary btn-icon"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-more-vertical icon-sm"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
        <div className="dropdown-menu dropdown-menu-end">
          <span className="dropdown-item" style={{ cursor: "pointer" }}>
            <i className="ri-user-2-fill align-bottom text-muted me-2"></i>
            Voir profile
          </span>
          <span
            onClick={deconnectionHandle}
            className="dropdown-item"
            style={{ cursor: "pointer" }}
          >
            <i className="ri-mic-off-line align-bottom text-muted me-2"></i>
            Déconnection
          </span>
        </div>
      </div>
    </li>
  );
};

export default DropDownRight;
