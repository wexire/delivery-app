import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customer: {
      name: String,
      phone: String,
      email: String,
      address: String,
    },
    order: [
      {
        name: String,
        price: Number,
        quantity: Number,
        image: String,
      },
    ],
    totalPrice: Number,
  },
  { timestamps: true }
);

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel;
