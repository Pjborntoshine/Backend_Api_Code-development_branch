const express = require("express");
const app = express();
const session = require("express-session");

const passport = require("passport");
const port = 8000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded());

// uses express route
const db = require("./config/mongoose");
const passportJWT = require("./config/passport-jwt-stragegy"); // importing JWT file form the given locatn
const MongoStore = require("connect-mongo")(session);

app.use(express.static("./assets"));

// used for session cookie

app.use(
  session({
    name: "codeial", // neme of the session cookei
    //TODO:change before deployment in production mode
    secret: "something", // when ever encryption happens there is a key to encode and decode and here we are usinf secrte to enceode and decode
    saveUninitialized: false, // whenever there is a request which is nt initilize i.e a session which is not initilize that also mean that the user has not logged in so in that case we don't need to store extra data in session cookie
    resave: false, // in resave if the identity is estiblished or some sort o data is present i.e session data do we need to re-write it? no we dont need to save again
    cookie: {
      // giving time limit after which our coookie will get expire
      maxAge: 1000 * 60 * 100,
    },
    // Mongostore is used to store the session cookie in the db
    store: new MongoStore(
      {
        mongooseConnection: db, // connecting to DB
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),

    // store: MongoStore.create(
    //     {

    //         mongooseConnection: 'mongodb://localhost/codeial_dev', // connecting to DB
    //         autoRemove:'disabled'
    //     },
    //     function(err){
    //         console.log(err || 'connect-mongodb setup ok')
    //     }
    // )
  })
);

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`server is running on port ${port}`);
});
