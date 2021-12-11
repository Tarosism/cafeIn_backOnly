const { User } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunc");

module.exports = async (req, res) => {
  const userInfo = await User.findOne({
    where: { userid: req.body.userid, password: req.body.password },
  });

  if (!userInfo)
    return res.status(404).send({ message: "아이디나 비밀번호를 확인해요" });
  else {
    const token = generateAccessToken(userInfo);
    sendAccessToken(res, token);
  }
};
