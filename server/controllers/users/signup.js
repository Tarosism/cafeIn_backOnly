const { User } = require("../../models");

module.exports = async (req, res) => {
  if (
    !req.body.email ||
    !req.body.userid ||
    !req.body.password ||
    !req.body.username
  ) {
    return res.status(422).send({ message: "모든 항목을 입력하세욤" });
  }

  const exEmail = await User.findOne({
    where: { email: req.body.email },
  });

  const exUserid = await User.findOne({
    where: { userid: req.body.userid },
  });

  if (exEmail)
    return res.status(403).send({ message: "이미 사용중인 이메일임" });
  if (exUserid)
    return res.status(403).send({ message: "이미 사용중인 아이디여요" });

  await User.create({
    email: req.body.email,
    userid: req.body.userid,
    password: req.body.password,
    username: req.body.username,
  });

  res.status(201).send({ message: "가입이 완료되었습니다요" });
};
