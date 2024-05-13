const app = require('./app')
const cloudinary = require("cloudinary")
const connectToMongo = require("./config/db");


// handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });
  
//config
if (process.env.NODE_ENV !== "PRODUCTION") {
require('dotenv').config({path: "backend/config/.env"});
}

// connecting to database
connectToMongo();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
const server = app.listen(process.env.PORT,() => {

    console.log(`server is working on http://localhost: ${process.env.PORT}`)
});



//unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`error: ${err.message}`);
    console.log(`shutting down the server due to unhandled promise rejection`);

    server.close(() => {
        process.exit(1);
    });
});