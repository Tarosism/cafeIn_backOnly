const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get("/cafe-list", controllers.cafe_list);

router.get("/cafe-list/:id", controllers.cafe_list_likehash);

router.get("/cafe-info/:id", controllers.cafe_info);

router.post("/like-hashtag/:id", controllers.like_hashtag);

router.post("/dislike-hashtag/:id", controllers.dislike_hashtag);

// router.post("/dislike-hashtag");

router.post(
  "/cafe-info/:id/click/like-hashtag/:hashid",
  controllers.like_hashtag_click
);
router.post(
  "/cafe-info/:id/click/dislike-hashtag/:hashid",
  controllers.dislike_hashtag_click
);
module.exports = router;
