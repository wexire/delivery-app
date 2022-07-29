import orderModel from "../models/order.js";

export const createOrder = async (req, res) => {
  try {
    const data = req.body;

    if (!data) {
      throw Error("Invalid data");
    }

    const order = await orderModel.create(data);

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const data = req.query;

    const orders = await orderModel.aggregate([
      {
        $match: {
          $and: [
            { "customer.email": data.email },
            { "customer.phone": data.phone },
          ],
        },
      },
    ]);

    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
