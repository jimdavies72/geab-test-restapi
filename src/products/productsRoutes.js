const { Router } = require("express");
const {
  addProduct,
  listProductsPrice,
  groupByType,
} = require("./productsControllers");
const productsRouter = Router();

productsRouter.post("/products", addProduct);
// using put as get doesnt allow use of req.body
productsRouter.put("/products/price", listProductsPrice);
productsRouter.put("/products/group", groupByType);

module.exports = productsRouter;
