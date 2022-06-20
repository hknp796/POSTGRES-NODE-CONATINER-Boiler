import { Sequelize } from "sequelize";

import sequelize from "../utils/utils.database.js";

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

export default User;
