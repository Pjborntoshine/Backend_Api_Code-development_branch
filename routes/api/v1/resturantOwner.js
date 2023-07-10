// this is similar to post rutes
const express = require("express");
const router = express.Router();
const passport = require("passport");
const resturantOwnerApi = require("../../../controllers/api/v1/ResturantOwner_Controller");
// router.get("/", resturantOwnerApi.createNewResturantOwner);
router.post("/create-new-owner", resturantOwnerApi.createNewResturantOwner);
router.post("/create-session", resturantOwnerApi.createsessionRestOwner);

// router.post("/addnewItem", resturantApi.addnewItem);

// authencating post requst after jwt token is generate
// router.delete(
//   "/:id",
//   passport.authenticate("jwt", { session: false }),
//   postApi.destroy
// ); // {session: false beacause at this time we dont want to generate session cookies and this will put authencation check
module.exports = router;
