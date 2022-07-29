import mongoose from "mongoose";
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  items: [
    {
      name: String,
      price: Number,
      image: String,
      shop: { type: Schema.Types.ObjectId, ref: "shops" },
    },
  ],
});

const shopModel = mongoose.model("shops", shopSchema);

export default shopModel;
