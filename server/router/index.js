const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.post("/signin", controllers.signin);

router.post("/signup", controllers.signup);

router.post("/signout", controllers.signout);

router.post("/deleteaccount", controllers.delete);

router.get("/userinfo", controllers.userinfo);

module.exports = router;
