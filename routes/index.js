// const roueter = express.Router();
const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller"); //
console.log("router is loaded");
router.get("/", homeController.home);
router.use("/api", require("./api"));
module.exports = router; // sending it to main index.js file
