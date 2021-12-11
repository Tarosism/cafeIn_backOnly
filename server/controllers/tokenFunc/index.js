require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(
      {
        userid: data.userid,
        username: data.username,
        email: data.email,
        password: data.password,
      },
      process.env.ACCESS_SECRET,
      {
        algorithm: "HS256",
        expiresIn: "1h",
      }
    );
  },
  sendAccessToken: (res, accessToken) => {
    res.cookie("jwt", accessToken, {
      sameSite: "none",
      httpOnly: true,
      secure: true,
    });
    res.json({ message: "로그인 성공" });
  },
  isAuthorized: (req) => {
    const data = verify(req, process.env.ACCESS_SECRET);
    return data;
  },
};
