const { post, likes_hash_tag } = require("../../models");
const { isAccessToken } = require("../modules/jwt");
const { failedResponse } = require("../modules/response");

module.exports = async (req, res) => {
  // 클라이언트 요청 -> params에 게시물의 id, body에 like(좋아요 해시태그)를 담아 요청
  const hashtag = req.body.like;

  // 해시태그안의 내용이 아무것도 없이 전송하였을 경우, 서버단 예외처리
  if (!hashtag) {
    return failedResponse(res, 400, "해시태그를 입력해주세요.");
  }

  // 선택된 게시물(params로 전송한 id값의 게시물)을 (post)id 값으로 조회
  const selectedPost = await post.findOne({
    where: { id: req.params.id },
  });

  // 해시태그의 값은 DB에서는 중복이 될 수 없으나 서비스에서는 중복이 되어도 상관없다.
  // 그러므로 해시태그가 있으면 찾아서, 없으면 바로 DB에 등록(findOrCreate()) 후 클라이언트에게 전송
  const findHash = await likes_hash_tag.findOrCreate({
    where: { name: hashtag },
    defaults: {
      name: `#${hashtag}`,
      counts: 0,
    },
  });

  // 좋아요 해시태그가 DB에 등록이 되었고, 해시태그의 정보까지 조회
  const finishHash = await selectedPost.addLikes_hash_tags(findHash[0].id);

  // 성공코드 200과 등록된 해시태그 및 해시태그 정보를 클라이언트에게 전송
  res.status(200).send({ data: { findHash, finishHash } });
};
