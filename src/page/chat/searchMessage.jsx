import React from "react";

const SearchMessage = ({ onChange }) => {
  const searchHandle = (e) => {
    e.preventDefault();
    if (onChange) onChange(e.target.value);
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
            strokeWidth="2"
            stroke-linecap="round"
            strokeLinejoin="round"
            className="feather feather-search icon-sm"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
          <div className="p-2">
            <div className="search-box">
              <input
                type="text"
                onChange={searchHandle}
                className="form-control bg-light border-light"
                placeholder="Search here..."
                id="searchMessage"
              />
              <i className="ri-search-2-line search-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default SearchMessage;
