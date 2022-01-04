const { dislikes_hash_tag, post, click_dislike } = require("../../models");

module.exports = async (req, res) => {
  const clicked = await post.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: dislikes_hash_tag,
      },
    ],
  });

  const a = clicked.dislikes_hash_tags.filter(
    (fill) => fill.id === Number(req.params.hashid)
  );

  const tagId = a[0].id;

  const insertDislike = await click_dislike.findOne({
    where: { user_id: req.body.userId, post_id: req.params.id, like_id: tagId },
    defaults: {
      post_id: Number(req.params.id),
      user_id: req.body.userId,
      like_id: tagId,
    },
  });

  if (insertDislike) {
    const deleDislike = await click_dislike.destroy({
      where: {
        post_id: req.params.id,
        user_id: req.body.userId,
        like_id: tagId,
      },
    });
    res
      .status(200)
      .send({ data: deleDislike, message: "나쁜태그 좋아요 취소" });
  } else {
    const addDislike = await click_dislike.create({
      post_id: req.params.id,
      user_id: req.body.userId,
      like_id: tagId,
    });
    res.status(200).send({ data: addDislike, message: "나쁜태그 좋아요 추가" });
  }
};
