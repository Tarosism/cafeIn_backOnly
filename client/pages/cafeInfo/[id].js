import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import LikeHashesComp from "../../components/LikeHashesComp";
import DisLikeHashesComp from "../../components/DisLikeHashesComp";

export default function cafeInfo() {
  const router = useRouter();
  const { id } = router.query;

  const [cafeInfo, setCafeInfo] = useState(null);
  const [positive, setPositive] = useState(null);
  const [negative, setNegative] = useState(null);
  const [userPick, setUserPick] = useState(null);
  const [langLung, setLangLung] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [tagName, setTagName] = useState("");
  const [category, setCategory] = useState("의자");

  useEffect(() => {
    !id
      ? ""
      : axios
          .get(`https://localhost:8080/posts/cafe-info/1/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            setCafeInfo(res.data.data.selectedPost);
            setPositive(res.data.data.positiveTag);
            setNegative(res.data.data.negativeTag);
            setUserPick(res.data.data.getHashtagUserId);
            setLangLung([
              Number(res.data.data.selectedPost.lat),
              Number(res.data.data.selectedPost.long),
            ]);
          });
  }, [clicked, id]);

  const clickHandle = () => {
    console.log(clicked);
    setClicked((prev) => !prev);
  };

  const center = {
    lat: langLung[0],
    lng: langLung[1], //지정 key가 lng임. long으로 만들면 에러뜸
  };

  const containerStyle = {
    width: "500px",
    height: "500px",
  };

  const addHashTag = (tagName, category) => {
    axios
      .post(
        `https://localhost:8080/posts/add-hashtag/${id}`,
        {
          hashtag: tagName,
          category: category,
          type: "positive",
        },
        {
          withCredentials: true,
          "Content-Type": "applicaton/json",
        }
      )
      .then((res) =>
        console.log(res.data.message ? res.data.message : "해시태그 등록 완료")
      );
  };

  const tagNameHandle = (e) => {
    setTagName(e.target.value);
  };

  const categoryHandle = (e) => {
    setCategory(e.target.value);
  };

  const userClickedHeart = userPick && userPick.map((fill) => fill.like_id);

  return (
    <>
      {!cafeInfo ? (
        <div>로딩즁</div>
      ) : (
        <>
          <h1>{cafeInfo.title}</h1>
          <div>
            <span>
              {positive &&
                positive.map((fill) => fill.category + fill.name + " ")}{" "}
            </span>
          </div>
          <p>주소: {cafeInfo.adress}</p>
          <p>전화번호 : {cafeInfo.tel}</p>
          <img src={cafeInfo.small_img} />
          <div>
            <div>
              <div>좋아요 해시태그 모음</div>
              {positive &&
                positive.map((fill) => {
                  return (
                    <LikeHashesComp
                      positive={fill}
                      postId={id}
                      clickHandle={clickHandle}
                      userClickedHeart={userClickedHeart}
                    />
                  );
                })}
            </div>
            <div>
              <div>싫어요 해시태그 모음</div>
              {negative &&
                negative.map((fill) => {
                  return (
                    <DisLikeHashesComp
                      negative={fill}
                      postId={id}
                      clickHandle={clickHandle}
                    />
                  );
                })}
            </div>
          </div>
          <div>
            <h3>좋아요 해시태그 입력</h3>
            <select onChange={(e) => categoryHandle(e)} value={category}>
              <option value={"의자"}>의자</option>
              <option value={"테이블"}>테이블</option>
              <option value={"가격"}>가격</option>
              <option value={"직원"}>직원</option>
            </select>
            <input
              type="text"
              value={tagName}
              onChange={(e) => tagNameHandle(e)}
            ></input>{" "}
            <button onClick={() => addHashTag(tagName, category)}>입력</button>
          </div>
          <div>
            <h3>싫어요 해시태그 입력</h3>
          </div>

          <h2>지도오</h2>
          <div>
            {langLung[0] === 0 ? (
              <div>철거됨</div>
            ) : (
              <>
                {/* <LoadScript googleMapsApiKey="AIzaSyCQOOCGwW4h5R1FImc1IKrseUw_YklS6IU">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={18}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript> */}
              </>
            )}
          </div>
          <h2>{id}번 포스트입니다요</h2>
        </>
      )}
    </>
  );
}
