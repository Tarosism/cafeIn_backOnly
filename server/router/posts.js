const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get(
  "/cafe-list/:location/lat/:lat/long/:long/:lastid",
  controllers.cafe_list
);

router.get("/cafe-list/:id", controllers.cafe_list_likehash);

router.get("/cafe-info/:postid", controllers.cafe_info);

router.post("/add-hashtag/:postid", controllers.add_hashtag);

// router.post("/dislike-hashtag");

router.post("/hashtag-click", controllers.hashtag_click);

module.exports = router;
