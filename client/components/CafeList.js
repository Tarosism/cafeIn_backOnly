import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postCountAction } from "../reducer/post";

export default function CafeList({ location }) {
  const [list, setList] = useState(null);
  const [noPlace, setNoPlace] = useState(false);
  const [click, setClick] = useState(false); //리덕스로 바꾸기

  const state = useSelector((state) => state.postReducer);
  const { listCount } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    location &&
      axios
        .get(
          `https://localhost:8080/posts/cafe-list/${location}/lat/37.5662/long/127.0092/${listCount}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.data.length === 0) setNoPlace(true);
          setList(res.data.data);
          console.log(res.data.data);
        });
  }, [location, click]);

  const distanceConversion = (length, type) => {
    let result = length;
    if (length >= 1000) result = (result / 1000).toFixed(1) + "k";
    return result + type;
  };

  const aa = () => {
    setClick((prev) => !prev);
  };

  const callList = () => {
    dispatch(postCountAction());
    setClick((prev) => !prev);
  };

  const testHash = (data) => {
    console.log(data);
  };

  return (
    <>
      <button onClick={aa}>asdasd</button>
      {!list ? (
        <div>로딩즁</div>
      ) : noPlace ? (
        <div>{list.message}</div>
      ) : (
        list.map((fill) => {
          return (
            <>
              <Link href={`/cafeInfo/${fill.id}`}>
                <div style={{ cursor: "pointer" }}>
                  <img src="http://placeimg.com/640/480/any" />
                  <h4>{fill.title}</h4>
                  <div>{distanceConversion(fill.distance, "m")}</div>
                </div>
              </Link>
              <div>
                {fill.hash_tags
                  .filter((fill) => {
                    return fill.type === "positive";
                  })
                  .map((fill) => (
                    <span onClick={() => testHash(fill.category)}>
                      #{fill.category + fill.name}{" "}
                    </span>
                  ))}
              </div>
            </>
          );
        })
      )}
      <button onClick={callList}>목록 더 오기</button>
    </>
  );
}
