const Resturant = require("../../../models/Resturant");
module.exports.index = async function (req, res) {
  try {
    console.log("res", req);
    return res.json(200, {
      message: "connected successfully",
    });
  } catch (error) {
    console.log("error=>", error);
    return res.json(500, {
      message: "Internal server Error",
    });
  }
  //   let resturants = await Resturant.find({}) // awaited to this post to b completed
  //     .populate("user")
  //     .sort("-createdAt") // sorting ny using createdAt method in MongooseDb i.e nearest
  //     .populate({
  //       path: "comments",
  //       populate: {
  //         path: "user",
  //       },
  //     });

  //   return res.json(200, {
  //     message: "List of Post",
  //     posts: posts,
  //   }); // whe
};
module.exports.createNewMenu = async function (req, res) {
  // console.log("req", req.body);
  try {
    console.log("req---", req.body);
    return res.json(200, {
      message: "connected successfully",
    });
  } catch (error) {
    console.log("error=>", error);
    return res.json(500, {
      message: "Internal server Error",
    });
  }
};
