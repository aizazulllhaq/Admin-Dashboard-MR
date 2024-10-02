import Product from "../Models/Product.Model";
import ProductStat from "../Models/ProductState.Model";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithStat = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json({
      msg: "Products with stat",
      data: productsWithStat,
    });
  } catch (error) {
    res.status(404).json({
      msg: error.message,
    });
  }
};
