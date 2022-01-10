const { post, hash_tag } = require("../../models");
const { isAccessToken } = require("../modules/jwt");
const { failedResponse } = require("../modules/response");

module.exports = async (req, res) => {
  //클라는 3가지의 정보를 줌
  const { hashtag, category, type } = req.body;

  if (!hashtag) {
    return failedResponse(res, 400, "해시태그를 입력해주세요.");
  }
  //게시글 특정
  const selectedPost = await post.findOne({
    where: { id: req.params.postid },
  });
  //해시태그 테이블 안에 같은 해시태그가 있는지 (있으면 굳이 새로 생성 x하기 위해)
  const findHash = await hash_tag.findOne({
    where: { category, name: hashtag },
  });

  if (findHash) {
    //있으면 게시글에 이 해시태그가 달려있는지 확임함 (이거 안 하면 게시글간 분별 x)
    const equelPost = await selectedPost.getHash_tags();
    const filterPostId = equelPost.filter(
      (fill) =>
        fill.posts_hash_tags.post_id === Number(req.params.postid) &&
        fill.posts_hash_tags.hash_tag_id === findHash.id
    );
    //[] 이 나왔다는 건 관계설정이 안됐음을 의미함
    if (filterPostId.length === 0) {
      //고로 관계설정(join테이블에 값을 넣어줌)만 해줌
      const finishHash = await selectedPost.addHash_tag(findHash.id);
      return res.status(200).send({
        data: filterPostId,
        message: "존재하는 거니까 db에는 안 넣고 관계만 찍어줌",
      });
    }
    //여기가 문제. 관계설정까지 되어있다면 카운트만 늘려주고 싶은데...
    //advenced 느낌. 임시방편으로 '존재하니까 찾아서 좋아요를 누르세요' 라고 명령 가능
    return res
      .status(200)
      .send({ message: "이미 존재하는 해시태그입니다. 좋아요를 눌러보셔요" });
  }
  //위 조건에 안 걸렸다면 새 해시태그를 만들고 관계설정함
  const addHash = await hash_tag.create({
    type,
    name: hashtag,
    counts: 0,
    category,
  });

  const finishHash = await selectedPost.addHash_tag(addHash.id);

  res.status(200).send({ data: { addHash, finishHash } });
};
