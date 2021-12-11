const { User } = require("../../models");
const { isAuthorized } = require("../tokenFunc");

module.exports = async (req, res) => {
  if (req.cookies.jwt === undefined)
    res.send({ data: null, message: "로그인을 해야 해요" });

  const cookies = isAuthorized(req.cookies.jwt);

  const userInfo = await User.findOne({
    where: {
      userid: cookies.userid,
      email: cookies.email,
    },
    attributes: { exclude: ["password"] },
  });

  if (!userInfo) res.status(400).send({ message: "이건 무슨 오류냐" });
  res.status(200).send({ userInfo });
};
