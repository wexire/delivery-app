const reducer = (shops = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    default:
      return shops;
  }
};

export default reducer;
