const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const errorMiddleware = require ("./middleware/error");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require('cors');

//config

if (process.env.NODE_ENV !== "PRODUCTION") {
    require('dotenv').config({path: "backend/config/.env"});
}

app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(fileUpload());

//route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use(cors());
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1/", order);
app.use("/api/v1", payment);

app.get("/hello-world",(req,res) => {
    return res.json("hello world")
})

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//middleware for error

app.use(errorMiddleware);



module.exports = app;