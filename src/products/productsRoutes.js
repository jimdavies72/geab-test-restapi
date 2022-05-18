const { Router } = require("express");
const { addProduct } = require("./productsControllers");
const productsRouter = Router();

productsRouter.post("/products", addProduct);

module.exports = productsRouter;
