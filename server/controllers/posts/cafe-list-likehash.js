const { post, hash_tag } = require("../../models");
const { isAccessToken } = require("../modules/jwt");

module.exports = async (req, res) => {
  const { postid } = req.params;

  const selectedPost = await post.findAll({
    include: [
      {
        model: hash_tag,
        where: { id: postid },
      },
    ],
  });

  const findPostId = selectedPost.map((fill) => fill.id);

  const result = await post.findAll({
    where: { id: findPostId },
    include: [{ model: hash_tag }],
  });

  res.status(200).send({ data: { result, selectedPost } });
};
