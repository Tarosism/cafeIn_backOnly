const { post, click_hashtag, hash_tag } = require("../../models");
const { isAccessToken } = require("../modules/jwt");

module.exports = async (req, res) => {
  const { postid } = req.params;

  const selectedPost = await post.findOne({
    where: { id: postid },
    include: [
      {
        model: hash_tag,
      },
    ],
  });

  const getHashtagId = await click_hashtag.findAll({
    where: { post_id: postid },
  });

  //selectedPost.hash_tags 의 fill 안에는 type이 있는 해시 id들
  //getHashtagId의 fill 안에는 like_id only
  //getHashtagId의 id갯수를 세서 표시하면..?
  // 하 씨발 이거 어떻게 푸냐 개같네
  const countsHashTags = getHashtagId.map((fill) => {
    return fill.like_id;
  });

  selectedPost.hash_tags.map((fill) => {
    for (let i = 0; i < countsHashTags.length; i++) {
      if (fill.id === countsHashTags[i]) fill.counts++;
    }
  });

  const positiveTag = selectedPost.hash_tags.filter(
    (fill) => fill.type === "positive"
  );
  const negativeTag = selectedPost.hash_tags.filter(
    (fill) => fill.type === "negative"
  );

  return res
    .status(200)
    .send({ data: { selectedPost, positiveTag, negativeTag } });
};
