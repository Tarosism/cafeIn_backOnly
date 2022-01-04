const { post, click_like, click_dislike } = require("../../models");
const { isAccessToken } = require("../modules/jwt");

module.exports = async (req, res) => {
  const cafeInfo = await post.findOne({
    where: { id: req.params.id },
  });

  const likeHashes = await cafeInfo.getLikes_hash_tags();
  const dislikeHashes = await cafeInfo.getDislikes_hash_tags();

  const getLikehashId = await click_like.findAll({
    where: { post_id: req.params.id },
  });
  const click_like_model = getLikehashId.map((fill) => fill.like_id);

  likeHashes.map((fill) => {
    for (let i = 0; i < click_like_model.length; i++) {
      if (fill.id === click_like_model[i]) {
        fill.counts++;
      }
    }
  });

  const getDislikehashId = await click_dislike.findAll({
    where: { post_id: req.params.id },
  });
  const click_dislike_model = getDislikehashId.map((fill) => fill.like_id);

  dislikeHashes.map((fill) => {
    for (let i = 0; i < click_dislike_model.length; i++) {
      if (fill.id === click_dislike_model[i]) {
        fill.counts++;
      }
    }
  });

  return res
    .status(200)
    .send({ data: { cafeInfo, likeHashes, dislikeHashes } });
};
