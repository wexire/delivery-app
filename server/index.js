import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import shopRoutes from "./routes/shops.js";
import orderRoutes from "./routes/orders.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.use("/shops", shopRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
