import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  customer: {
    name: "",
    phone: "",
    email: "",
    address: "",
  },
  order: [],
  totalPrice: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState: initialValues,
  reducers: {
    setCustomer: (state, action) => {
      state.customer = action.payload;
    },
    countTotalPrice: (state) => {
      let price = 0;
      for (let item of state.order) {
        price += item.price * item.quantity;
      }
      state.totalPrice = price;
    },
    setOrder: (state, action) => {
      const item = state.order.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity += 1;
      } else {
        state.order = [...state.order, { ...action.payload, quantity: 1 }];
      }
    },
    incrementQuantity: (state, action) => {
      state.order.find((item) => item._id === action.payload._id).quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.order.find((item) => item._id === action.payload._id);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.order = state.order.filter(
          (item) => item._id !== action.payload._id
        );
      }
    },
  },
});

export const {
  setOrder,
  countTotalPrice,
  incrementQuantity,
  decrementQuantity,
  setCustomer,
} = orderSlice.actions;

export default orderSlice.reducer;
