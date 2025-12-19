// const mongoose = require("mongoose");
// module.exports = ()=>(mongoose.connect("mongodb+srv://Navneet_Chauhan:project12345@project.buvhm.mongodb.net/project"));

const mongoose = require("mongoose");

mongoose.set("strictQuery", false)

const connect = () => {
  return mongoose.connect(process.env.MONGODB_URI);
};

module.exports = connect;
