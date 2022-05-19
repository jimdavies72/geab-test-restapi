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

exports.listProductsPrice = async (req, res) => {
  try {
    const products = await Products.find({}).sort({
      "price.value": req.body.sortOrder,
    });
    res.status(200).send({ products });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.groupByType = async (req, res) => {
  try {
    const groups = await Products.aggregate([
      // @TODO @FIXME sorting is not working correctly and showing unexpected behaviour.
      {
        $group: {
          _id: "$type",
          products: { $push: "$$ROOT" },
        },
      },
      {
        $sort: {
          _id: req.body.sortOrder,
          "products.price.value": req.body.sortOrder,
        },
      },
    ]);
    res.status(200).send({ groups });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
