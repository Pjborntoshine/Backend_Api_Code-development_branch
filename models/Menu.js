const mongoose = require("mongoose");
const MenuSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    ResturantOwnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resturant",
      required: true,
    },
  },
  {
    timestamps: true, // this fild is for tracking created and udated time checking
  }
);
const Menu = mongoose.model("Menu", MenuSchema);
module.exports = Menu;
