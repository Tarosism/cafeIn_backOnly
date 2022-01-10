const { post, hash_tag, click_like } = require("../../models");

module.exports = async (req, res) => {
  const { lat, long, location, lastid } = req.params;

  const selectedPost = await post.findAll({
    where: { location },
    include: [
      {
        model: hash_tag,
      },
    ],
  });

  if (selectedPost.length === 0) {
    return res.status(201).send({
      data: [],
      message: "현재 서비스되고 있지 않은 지역입니다",
    });
  }
  //좌표간 거리를 1000m 단위로 나타냄
  const deg2rad = (deg) => deg * (Math.PI / 180);
  const R = 6371;
  const result = selectedPost.map((fill) => {
    const dLat = deg2rad(fill.lat - lat);
    const dLon = deg2rad(fill.long - long);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat)) *
        Math.cos(deg2rad(fill.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return Math.round(d * 1000);
  });

  selectedPost.map((fill, idx) => {
    fill.distance = result[idx];
  });

  //allPost를 만든 다음 거기에 distance를 넣는 것이기 때문에 order는 먹지 않는다
  const cafeList = selectedPost.sort((a, b) => a.distance - b.distance);
  //id는 뒤섞여있으니까 기준이 될 수 없고, 기준이 되는 건 distance라고 생각함
  // 삭제, 변형이 없다는 가정 하에 들어가야겠는데.. 어쩔 수 없음
  // 그렇다면 배열 속 5개를 먼저 던진다.
  // 그 다음 5개의 기준은? 먼저 던진 5개 중 마지막 게시글의 distance보다 큰 거 5개
  // 굳이 distance가 개입 할 필요 없이 갯수만 늘려준다면?
  const listUp = [];

  for (let i = 0; i < lastid; i++) {
    cafeList[i] && listUp.push(cafeList[i]);
  }

  // const positiveTag = listUp.hash_tags.filter(
  //   (fill) => fill.type === "positive"
  // );

  // const likeHases = allPost.map((fill) => fill.likes_hash_tags);

  // const getLikesCounts = await click_like.findAll({
  //   where: { post_id: cafeList.map((fill) => fill.id) },
  // });
  // const click_like_model = getLikesCounts.map((fill) => fill.like_id); //[1,2,3,3]

  // // a.map((fill) => {
  // //   for (let i = 0; i < click_like_model.length; i++) {
  // //     console.log(fill);
  // //     //if (fill.id === click_like_model[i]) fill.counts++;
  // //   }
  // // });
  // a.map(fill.map(fill.map));
  //해시태그들을 list에서 counts순으로 정렬하고 싶다. 3개만

  res.status(200).send({ data: listUp });
};
