import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  postCountAction,
  postCountRestAction,
  postCategoryAction,
  postCountHashAction,
} from "../reducer/post";

export default function CafeList({ location }) {
  const [list, setList] = useState(null);
  const [noPlace, setNoPlace] = useState(false);
  const [click, setClick] = useState(false);

  const state = useSelector((state) => state.postReducer);
  const { listCount, category, countHash } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    location &&
      axios
        .get(
          `https://localhost:8080/posts/cafe-list/${location}/lat/37.5662/long/127.0092/${listCount}/${
            category && category
          }`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.data.length === 0) setNoPlace(true);
          dispatch(postCountHashAction(res.data.count));
          setList(res.data.data);
          console.log(res.data.a);
        });
  }, [location, click]);

  const distanceConversion = (length, type) => {
    let result = length;
    if (length >= 1000) result = (result / 1000).toFixed(1) + "k";
    return result + type;
  };

  const callList = () => {
    dispatch(postCountAction());

    setClick((prev) => !prev);
  };

  const hashSearch = (category) => {
    dispatch(postCategoryAction(category));
    axios
      .get(
        `https://localhost:8080/posts/cafe-list/${location}/lat/37.5662/long/127.0092/${listCount}/${category}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setList(res.data.data);
        dispatch(postCountHashAction(res.data.count));
      });
  };

  return (
    <>
      {!list ? (
        <div>로딩즁</div>
      ) : noPlace ? (
        <div>{list.message}</div>
      ) : (
        list.map((fill, idx) => {
          console.log(idx);
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
                {countHash &&
                  countHash[idx].map((fill) =>
                    fill.length === 0 ? (
                      ""
                    ) : (
                      <>
                        <span
                          onClick={() => hashSearch(fill.category)}
                          style={{ color: "blue", cursor: "pointer" }}
                        >
                          #{fill.category}
                        </span>
                        <span>{fill.name}</span>
                      </>
                    )
                  )}
              </div>
            </>
          );
        })
      )}
      <button onClick={callList}>목록 더 오기</button>
    </>
  );
}
