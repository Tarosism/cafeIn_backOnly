const { User } = require("../../models");

module.exports = async (req, res) => {
  //회원탈퇴의 조건? 비번 한 번 더 치세요
  const userInfo = await User.findOne({
    where: { email: req.body.email, password: req.body.password },
  });

  if (!userInfo)
    return res.status(404).send({ message: "너 피방 옆자리 탈퇴시키는 거지?" });

  const deleteAccount = await User.destroy({
    where: { email: userInfo.email, password: userInfo.password },
  });
  if (deleteAccount === 1) {
    res.clearCookie("jwt");
    res.status(201).send({ message: "그럼 안녕히가세요" });
  } else res.status(404).send({ message: "죽어도 못 보내" });
};
