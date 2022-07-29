import * as api from "../api";

export const createOrder = async (order) => {
  try {
    const data = await api.createOrder(order);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserOrders = (data) => async (dispatch) => {
  try {
    const orders = await api.getUserOrders(data);

    dispatch({ type: "FETCH_USER", payload: orders });
  } catch (error) {
    console.log(error);
  }
};
