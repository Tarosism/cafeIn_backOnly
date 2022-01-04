const express = require("express");
const router = express.Router();
const postsController = require("./posts");

router.use("/posts", postsController);

module.exports = router;
