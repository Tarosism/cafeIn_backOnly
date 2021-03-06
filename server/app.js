require("dotenv").config();

const fs = require("fs");
const https = require("https");
const cors = require("cors");
const session = require("express-session");
const express = require("express");
const cookieParser = require("cookie-parser");
const { sequelize, post } = require("./models");
const yeoksam = require("./cafeJsonData/yeoksam.json");
const daechi = require("./cafeJsonData/daechi.json");

const Router = require("./router");

const app = express();
const PORT = process.env.PORT || 8080;

// sequelize
//   .query("SET FOREIGN_KEY_CHECKS = 0")
//   .then(() => sequelize.sync({ force: true }))
//   .then(() => sequelize.query("SET FOREIGN_KEY_CHECKS = 1"))
//   .then(() => console.log("DB연결 성공"));
sequelize.sync({ force: false }).then(() => console.log("DB연결 성공"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://localhost:3000", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use(cookieParser());
app.use("/", Router);

//요 아래 주석만 푸시면 됩니다요
// const data = [...yeoksam.documents, ...daechi.documents];
// const result = data.map((fill) => {
//   return {
//     title: fill.place_name,
//     tel: fill.phone,
//     adress: fill.address_name,
//     location: fill.address_name.split(" ")[2],
//     lat: fill.y,
//     long: fill.x,
//   };
// });
// const putIn = result.map(async (fill) => {
//   await post.create({
//     large_img: "http://placeimg.com/300/300/nature",
//     small_img: "http://placeimg.com/300/300/arch",
//     tel: fill.tel,
//     adress: fill.adress,
//     distance: null,
//     title: fill.title,
//     location: fill.location,
//     lat: fill.lat,
//     long: fill.long,
//   });
// });

if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const key = fs.readFileSync(__dirname + "/key.pem", "utf-8");
  const cert = fs.readFileSync(__dirname + "/cert.pem", "utf-8");
  const credentials = { key, cert };

  https
    .createServer(credentials, app)
    .listen(PORT, () => console.log(`${PORT}에서 실행 중`));
} else app.listen(PORT);
