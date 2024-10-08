import { model, Schema } from "mongoose";

const productStatSchema = new Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: {
      date: String,
      totalSales: Number,
      totalUnits: Number,
    },
  },
  {
    timestamps: true,
  }
);

const ProductStat = model("ProductStat", productStatSchema);

export default ProductStat;
