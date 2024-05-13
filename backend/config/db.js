const mongoose = require('mongoose');


// const mongoURI = "mongodb://127.0.0.1:27017/Ecommerce"

async function connectToMongo() {
  await mongoose.connect(process.env.mongoURI).then(() => console.log("connected to Mongo Successfully")).catch(err => console.log(err)); 
}


module.exports = connectToMongo