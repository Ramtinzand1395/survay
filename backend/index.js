const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const path = require("path");

 const connectDB = require("./config/db");
 
const app = express();

//* Load Config
dotEnv.config({ path: "./config/config.env" });

//* Database connection
connectDB();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", require("./routes/userRoutes"));

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Server Running On Port ${port}`)
);
