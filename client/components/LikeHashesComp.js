import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postListHashAction } from "../reducer/post";

export default function LikeHashesComp({
  positive,
  postId,
  clickHandle,
  userClickedHeart,
}) {
  const addLike = () => {
    axios
      .post(
        `https://localhost:8080/posts/hashtag-click`,
        {
          userId: 1,
          postId,
          hashId: positive.id,
          //user state에서 id를 가져와주면 됨. 지금은 user관련을 다 날려서 1로 고정함
        },
        {
          "Content-Type": "applicaton/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        clickHandle();
      });
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={addLike}>
      {positive.category}
      {positive.name} {positive.counts}{" "}
      {userClickedHeart &&
      userClickedHeart.findIndex((res) => res === positive.id) === -1
        ? "♡"
        : "♥"}
    </div>
  );
}
