import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <>
      <br />
      <div className="ui fluid icon input focus">
        <input
          type="text"
          placeholder="Search movies title"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
