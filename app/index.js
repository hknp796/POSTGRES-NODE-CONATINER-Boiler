import express from "express";
import sequelize from "./utils/utils.database.js";

import router from "./routes/route.user.js";

import Product from "./routes/route.product.js";

const app = express();

app.use("/users", router);

app.use("/product", Product);

(async () => {
  try {
    await sequelize.sync({
      force: false,
    });
    app.listen(process.env.EXTERNAL_PORT || 4000);
  } catch (error) {
    console.log(error);
  }
})();
