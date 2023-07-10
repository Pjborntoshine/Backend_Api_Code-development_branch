const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/codeial_dev");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erroe connecting to mongod"));
db.once("open", function () {
  console.log("connected to DB");
});
module.exports = db;
