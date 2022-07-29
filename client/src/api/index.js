import axios from "axios";

const url = "https://delivery-app3228.herokuapp.com";

export const fetchShops = () => axios.get(`${url}/shops`);
export const createOrder = (order) => axios.post(`${url}/orders`, order);
export const getUserOrders = (data) =>
  axios.get(`${url}/orders`, { params: data });
