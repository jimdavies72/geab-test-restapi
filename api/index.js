require("./db/connection");
const express = require("express");
const cors = require("cors");
const productsRouter = require("./products/productsRoutes");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use(productsRouter);

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
