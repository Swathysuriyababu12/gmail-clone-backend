const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");
const mail = require("./routes/mail");
const accountRoutes = require("./routes/account");

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/account", accountRoutes);
app.use("/email", mail);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
