import React, { useState } from "react";
import compteService from "../../service/countService";
import { users$ } from "../state/rxjs";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    setSearchValue(e.target.value);
    const resp = await compteService.getAllUsers(e.target.value);
    if (resp.status === 200) {
      const data = resp.data.filter(
        (user) => user.codeClient !== compteService.getStorage().codeClient
      );
      users$.next(data);
    }
  };
  return (
    <div className="search-box">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        className="form-control bg-light border-light"
        placeholder="Search here..."
      />
      <i className="ri-search-2-line search-icon"></i>
    </div>
  );
};

export default SearchInput;
