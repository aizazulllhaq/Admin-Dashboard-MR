import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose, { connect } from "mongoose";
import { MONGO_URL, PORT } from "./constant.js";
import clientRouter from "./routes/Client.Routes.js";
import generalRouter from "./routes/General.Routes.js";
import ManagementRouter from "./routes/Management.Routes.js";
import salesRouter from "./routes/Sales.Routes.js";
// import User from "./Models/User.Model.js";
// import Product from "./Models/Product.Model.js";
// import ProductStat from "./Models/ProductState.Model.js";
// import { dataProduct, dataProductStat } from "./Data/index.js";

// Configuration
dotenv.config({
  path: ".env",
});

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/client", clientRouter);
app.use("/general", generalRouter);
app.use("/management", ManagementRouter);
app.use("/sales", salesRouter);

// Mongoose Setup
connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `Server Port : ${PORT} , DB instance is : ${mongoose.connection.host}`
      )
    );
    // User.insertMany(dataUser)
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
  })
  .catch((err) => {
    console.log(`${err} did not connect`);
  });
