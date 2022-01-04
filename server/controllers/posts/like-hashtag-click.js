const { user, likes_hash_tag, post, click_like } = require("../../models");

module.exports = async (req, res) => {
  const clicked = await post.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: likes_hash_tag,
      },
    ],
  });

  const a = clicked.likes_hash_tags.filter(
    (fill) => fill.id === Number(req.params.hashid)
  );

  const tagId = a[0].id;

  const insertLike = await click_like.findOne({
    where: { user_id: req.body.userId, post_id: req.params.id, like_id: tagId },
    defaults: {
      post_id: Number(req.params.id),
      user_id: req.body.userId,
      like_id: tagId,
    },
  });

  if (insertLike) {
    const deleLike = await click_like.destroy({
      where: {
        post_id: Number(req.params.id),
        user_id: req.body.userId,
        like_id: tagId,
      },
    });
    res.status(200).send({ data: deleLike, message: "좋아태그 좋아요 취소" });
  } else {
    const addLike = await click_like.create({
      post_id: Number(req.params.id),
      user_id: req.body.userId,
      like_id: tagId,
    });
    res.status(200).send({ data: addLike, message: "좋아태그 좋아요 추가" });
  }
};
