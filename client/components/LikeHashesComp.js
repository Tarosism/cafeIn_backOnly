import axios from "axios";
import React from "react";

export default function LikeHashesComp({ cafeInfo, postId, clickHandle }) {
  const addLike = () => {
    axios
      .post(
        `https://localhost:8080/posts//cafe-info/${postId}/click/like-hashtag/${cafeInfo.id}`,
        {
          userId: 1,
          //user state에서 id를 가져와주면 됨. 지금은 user관련을 다 날려서 1로 고정함
        },
        {
          "Content-Type": "applicaton/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.message);
        clickHandle();
      });
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={addLike}>
      {cafeInfo.name} {cafeInfo.counts}
    </div>
  );
}
