export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return action.payload;
    case "DELETE_MOVIE":
      const filteredItems = state.data.filter(
        (item) => item.imdbID !== action.payload
      );
      return { ...state, data: filteredItems };

    default:
      return state;
  }
};
