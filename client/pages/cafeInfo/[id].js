import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import proj4 from "proj4";
import LikeHashesComp from "../../components/LikeHashesComp";

export default function cafeInfo() {
  const router = useRouter();
  const { id } = router.query;

  const [cafeInfo, setCafeInfo] = useState(null);
  const [langLung, setLangLung] = useState([]);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    axios
      .get(`https://localhost:8080/posts/cafe-info/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setCafeInfo(res.data.data);
        setLangLung([
          Number(res.data.data.cafeInfo.lat.trim()),
          Number(res.data.data.cafeInfo.long.trim()),
        ]);
      });
  }, [clicked]);

  const clickHandle = () => {
    console.log(clicked);
    setClicked((prev) => !prev);
  };
  const grs80 =
    "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43";
  const wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs ";
  const toLat =
    langLung[0] !== undefined
      ? proj4(grs80, wgs84, langLung) //요거 상태로 뺴주면 되는데 왜 오류가 뜨니?
      : [0, 0]; //x, y순으로 적기 => 127 , 36 순으로 나옴
  const center = {
    lat: toLat[1],
    lng: toLat[0],
  };
  const containerStyle = {
    width: "500px",
    height: "500px",
  };
  return (
    <>
      {!cafeInfo ? (
        <div>로딩즁</div>
      ) : (
        <>
          <h1>{cafeInfo.cafeInfo.title}</h1>
          <div>
            <span>{cafeInfo.likeHashes.map((fill) => fill.name)} </span>
          </div>
          <p>주소: {cafeInfo.cafeInfo.location}</p>
          <img src={cafeInfo.cafeInfo.small_img} />
          <div>
            <div>
              <div>좋아요 해시태그 모음</div>
              {cafeInfo.likeHashes.map((fill) => {
                return (
                  <LikeHashesComp
                    cafeInfo={fill}
                    postId={id}
                    clickHandle={clickHandle}
                  />
                );
              })}
            </div>
            <div>
              <div>싫어요 해시태그 모음</div>
            </div>
          </div>

          <h2>지도오</h2>
          <div>
            {langLung[0] === 0 ? (
              <div>철거됨</div>
            ) : (
              <h3>지도자리</h3>
              // <LoadScript googleMapsApiKey="AIzaSyCQOOCGwW4h5R1FImc1IKrseUw_YklS6IU">
              //   <GoogleMap
              //     mapContainerStyle={containerStyle}
              //     center={center}
              //     zoom={15}
              //   >
              //     <Marker position={center} />
              //   </GoogleMap>
              // </LoadScript>
            )}
          </div>
          <h2>{id}번 포스트입니다요</h2>
        </>
      )}
    </>
  );
}
