import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postListHashAction } from "../reducer/post";

export default function LikeHashesComp({ negative, postId, clickHandle }) {
  const addLike = () => {
    axios
      .post(
        `https://localhost:8080/posts/hashtag-click`,
        {
          userId: 1,
          postId,
          hashId: negative.id,
          //user state에서 id를 가져와주면 됨. 지금은 user관련을 다 날려서 1로 고정함
        },
        {
          "Content-Type": "applicaton/json",
          withCredentials: true,
        }
      )
      .then(() => {
        clickHandle();
      });
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={addLike}>
      {negative.name} {negative.counts}
    </div>
  );
}
