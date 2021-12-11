module.exports = (req, res) => {
  res.clearCookie("jwt");
  res.status(205).send({ message: "로그아웃 되었습니다" });
};
