import shopModel from "../models/shop.js";

export const getShops = async (req, res) => {
  try {
    const shops = await shopModel.find();

    if (!shops) {
      throw Error("No shops found");
    }

    res.status(200).json(shops);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
