import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./../actions/index";
import orderBy from "lodash/orderBy";

import BasicTable from "./Table";

const MoviesDetails = ({ searchTerm }) => {
  const [columnToSort, setColumnToSort] = useState("");
  const [sortDirection, setSortDirection] = useState("desc");

  const invertDirection = {
    asc: "desc",
    desc: "asc",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        dispatch(fetchMovies(searchTerm));
      }
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm, dispatch]);

  let movies = useSelector((state) => state.movies.data);

  console.log("state", movies);

  const handleSort = (columnName) => {
    setColumnToSort(columnName);
    setSortDirection(
      columnToSort === columnName ? invertDirection[sortDirection] : "asc"
    );
  };

  return (
    <div>
      {movies ? (
        <BasicTable
          movies={orderBy(movies, columnToSort, sortDirection)}
          handleSort={handleSort}
        />
      ) : (
        <h2>Go ahead, search a movie</h2>
      )}
    </div>
  );
};

export default MoviesDetails;
