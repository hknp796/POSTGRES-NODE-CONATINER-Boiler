import express from "express";
import cors from "cors";
import sequelize from "./utils/utils.database.js";
import product from "./routes/route.product.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/product", product);
// app.use("/users", router);

(async () => {
  try {
    await sequelize.sync({
      force: false,
    });
    app.listen(process.env.EXTERNAL_PORT || 5000);
  } catch (error) {
    console.log(error);
  }
})();
