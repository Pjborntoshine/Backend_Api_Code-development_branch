const mongoose = require("mongoose");
const resturantSchema = new mongoose.Schema(
  {
    ResturantOwnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ResturantOwner",
    },
  },
  {
    timestamps: true, // this fild is for tracking created and udated time checking
  }
);
const Resturant = mongoose.model("Resturant", resturantSchema);
module.exports = Resturant;
