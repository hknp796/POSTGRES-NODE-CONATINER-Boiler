import express from "express";

import router from "./routes/route.dev.js";

const app = express();

app.get("/hello", (req, res) => {
  console.log("accessed");

  res.status(200).json({ title: "hello" });
});

app.use("/dev", router);

try {
  app.listen(process.env.EXTERNAL_PORT || 5000);
} catch (error) {
  console.log(error);
}
