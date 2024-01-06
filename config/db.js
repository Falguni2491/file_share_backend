const mongoose = require('mongoose');
require('dotenv').config();
function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useUnifiedTopology: true }, { useNewUrlParser: true });
    // const connection = mongoose.connections;

    mongoose.connection
  .once("open", () => console.log("Database connected"))
  .on("error", (error) => {
    console.log("Connection error", error);
  });

    // connection.once('open',()=> {
    //     console.log("db connected");
    // }).catch(err => {done
    //     console.log("conn failed");
    // })
} 

module.exports = connectDB;