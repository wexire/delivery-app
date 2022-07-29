const reducer = (orders = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload;
    default:
      return orders;
  }
};

export default reducer;
