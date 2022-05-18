const Products = require("./productsModel");

exports.addProduct = async (req, res) => {
  try {
    const newProduct = await Products.create(req.body);
    res.status(200).send({ products: newProduct });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
