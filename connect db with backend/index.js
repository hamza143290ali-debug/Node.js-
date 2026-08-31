const express = require("express");
const app = express();
const connectDB = require("./DBConnection/index");
const router = require("./Routing/routing");
app.use(express.json());

connectDB();
app.use("/api/students", router);

app.listen(8005, () => {
  console.log("Server Running!");
});
