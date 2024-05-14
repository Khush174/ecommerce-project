const mongoose = require('mongoose');

async function connectToMongo() {
  await mongoose.connect(process.env.mongoURI).then(() => console.log("connected to Mongo Successfully")).catch(err => console.log(err)); 
}


module.exports = connectToMongo