import React from "react";

const InfoRight = () => {
  return (
    <li className="list-inline-item d-none d-lg-inline-block m-0">
      <button
        type="button"
        className="btn btn-ghost-secondary btn-icon"
        data-bs-toggle="offcanvas"
        data-bs-target="#userProfileCanvasExample"
        aria-controls="userProfileCanvasExample"
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
          className="feather feather-info icon-sm"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </button>
    </li>
  );
};

export default InfoRight;
