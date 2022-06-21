import { Sequelize } from "sequelize";

import sequelize from "../utils/utils.database.js";

const Product = sequelize.define("products", {
  //   id: {
  //     type: Sequelize.INTEGER,
  //     autoIncrement: true,
  //     allowNull: false,
  //     primaryKey: true,
  //   },
  //   username: {
  //     type: Sequelize.STRING,
  //     allowNull: false,
  //     unique: true,
  //   },
  //   email: {
  //     type: Sequelize.STRING,
  //     allowNull: false,
  //   },
  //   password: {
  //     type: Sequelize.STRING,
  //     allowNull: false,
  //   },
  // chnage schema here
});

export default Product;
