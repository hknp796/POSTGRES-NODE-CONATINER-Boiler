import User from "../models/users.js";



// const getAll = async (req, res) => {
//   try {
//     const ALL = await User.findAll();
//     return res.status(200).json(ALL);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// const getOne = (req, res) => {};

// const createOne = async (req, res) => {
//   try {
//     const USER_MODEL = {
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     };
//     try {
//       const user = await User.create(USER_MODEL);
//       return res.status(200).json(user);
//     } catch (error) {
//       return res.status(500).json(error);
//     }
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// const updateOne = (req, res) => {};

// const deleteOne = (req, res) => {};

export { getProducts };
