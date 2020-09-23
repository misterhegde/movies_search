import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MoviesDetails from "./components/MoviesDetails";

const App = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (search) => {
    setSearch(search);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <MoviesDetails searchTerm={search} />
    </div>
  );
};

export default App;
