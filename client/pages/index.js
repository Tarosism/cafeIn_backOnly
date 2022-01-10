import React, { useState, useCallback, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginNav from "../components/LoginNav";
import Nav from "../components/Nav";
import CafeList from "../components/CafeList";
import axios from "axios";
import dynamic from "next/dynamic";
import { userLocationAction } from "../reducer/user";

export default function index() {
  const state = useSelector((state) => state.userReducer);
  const { me, isLoggedIn } = state;
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);

  const Nossr = dynamic(() => import("../components/Nav"), { ssr: false });
  //next에선 navigator가 안 먹음. 그래서 ssr 예외처리 하는 라이브러리 사용
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((res) =>
    //   dispatch(userLocationAction(res.coords.latitude, res.coords.longitude))
    // );
    //navigator는 이렇게 써주면 됨. 클라에서 손쉽게 사용자 위치 확인
    //했다 치고!
    console.log("네비요청감");
  }, []);
  useEffect(() => {
    // me &&
    //   axios
    //     .get(
    //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${me.lat},${me.long}&key=AIzaSyCQOOCGwW4h5R1FImc1IKrseUw_YklS6IU`,
    //       { withCredentials: false }
    //     )
    //     .then((res) =>
    //       setLocation(res.data.results[1].address_components[2].long_name)
    //     );
    setLocation("대치동");
    console.log("좌표요청감");
  }, []);
  //요청을 아끼는 방법은?? 이쪽은 더 생각해봐야곘네
  //여기까지 '구'를 뽑아오기.
  /*
res.data.results[1].address_components[2].long_name = 구
위에선 내 위치 기반인데 서구가 나옴. 정확도가?
 */

  return (
    <>
      {isLoggedIn ? <LoginNav /> : <Nossr />}
      <h1>카페를 선택해봐</h1>
      <CafeList location={location} />
      <br />
    </>
  );
}
