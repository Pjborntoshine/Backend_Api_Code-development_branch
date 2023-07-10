const mongoose = require("mongoose");
const resturantOwnerSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },

    ownerEmail: {
      type: String,
      required: true,
      unique: true,
    },
    ownerPassword: {
      type: String,
      required: true,
    },
    ownerPhone: {
      type: String,
      required: true,
    },
    ownerUserID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // this fild is for tracking created and udated time checking
  }
);
const ResturantOwner = mongoose.model("ResturantOwner", resturantOwnerSchema);
module.exports = ResturantOwner;
