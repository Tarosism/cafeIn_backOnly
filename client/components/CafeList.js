import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CafeList() {
  const [list, setList] = useState(null);

  useEffect(() => {
    axios
      .get("https://localhost:8080/posts/cafe-list", {
        withCredentials: true,
      })
      .then((res) => {
        return setList(res.data.data);
      });
  }, []);

  return (
    <>
      {!list ? (
        <div>로딩즁</div>
      ) : (
        list.map((fill) => {
          return (
            <Link href={`/cafeInfo/${fill.id}`}>
              <div style={{ cursor: "pointer" }}>
                <img src="http://placeimg.com/640/480/any" />
                <h4>{fill.title}</h4>
                <div>{fill.likes_hash_tags.map((fill) => fill.name)}</div>
              </div>
            </Link>
          );
        })
      )}
    </>
  );
}
