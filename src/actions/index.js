import jsonmock from "../api/JsonMock";

export const fetchMovies = (term) => {
  return async function (dispatch) {
    const result = await jsonmock.get("search/", { params: { Title: term } });

    dispatch({ type: "FETCH_MOVIE", payload: result.data });
  };
};

export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    payload: id,
  };
};
