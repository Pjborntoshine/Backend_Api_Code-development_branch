const ResturantOwner = require("../../../models/RestaurantOwner");
const jwt = require("jsonwebtoken");
/**
 * @description - method for creating onboarding new resturant owner
 * @returns
 */
module.exports.createNewResturantOwner = async function (req, res) {
  try {
    // console.log("req---", req.body);
    let resturantOwner = ResturantOwner.findOne({ ownerEmail: req.body.email });
    // not found or confirm passord  and password is matched
    if (!resturantOwner || req.body.password != req.body.cnfpassword) {
      return res.json(422, {
        // 422 is for invalid input
        message: "Invalid username or password",
      });
    }
    await ResturantOwner.create({
      ownerName: req.body.ownerName,
      ownerEmail: req.body.email,

      ownerPassword: req.body.password,

      ownerPhone: req.body.ownerPhone,
      ownerUserID: req.body.email + "" + req.body.ownerPhone,
    });
    return res.json(200, {
      message: "Resturant owner created successfully",
    });
  } catch (error) {
    console.log("error=>", error);
    return res.json(500, {
      message: "Internal server Error",
    });
  }
};
/**
 * @description - method for signing into the resturant accouuunt
 * @returns
 */
module.exports.createsessionRestOwner = async function (req, res) {
  try {
    console.log("req---", req.body);

    let resturantOwner = await ResturantOwner.findOne({
      ownerEmail: req.body.email,
    });
    console.log("resturantOwner", resturantOwner);
    // checking password is corercrt
    if (!resturantOwner || resturantOwner.ownerPassword != req.body.password) {
      return res.json(422, {
        // 422 is for invalid input
        message: "Invalid username or password",
      });
    }

    return res.json(200, {
      message: "Sign in successful, here is token ,please keep it safe",
      data: {
        token: jwt.sign(resturantOwner.toJSON(), "codeial", {
          expiresIn: 10000,
        }), // user.toJSON() this is the part which get encrypted
      },
    });
  } catch (error) {
    console.log("error=>", error);
    return res.json(500, {
      message: "Internal server Error",
    });
  }
};

/**
 * @description - method for destroying the session into the resturant accouuunt
 * @returns
 */
module.exports.destroysessionRestOwner = async function (req, res) {
  try {
  } catch (error) {
    console.log("error=>", error);
    return res.json(500, {
      message: "Internal server Error",
    });
  }
};
