import React, { useState } from "react";
import LoginNav from "../components/LoginNav";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../reducer/user";
import Router from "next/router";
import axios from "axios";
import Hashtag from "../components/Hashtag";

export default function userinfo() {
  const state = useSelector((state) => state.userReducer);
  const { me } = state;
  const dispatch = useDispatch();
  const logout = async () => {
    await axios.post("https://localhost:8080/signout", null, {
      withCredentials: true,
    });
    dispatch(logoutAction());
    Router.push("/");
  };

  const [text, setText] = useState("");
  const textHandle = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <LoginNav />
      <h2>반가워요 {me !== null ? me.username : ""}</h2>
      {/* 이렇게 안 하면 me가 null 됐을 때 못 찾아서 에러띄움 */}
      <div>이메일 {me !== null ? me.email : ""}</div>
      <sapn>
        <Hashtag text={text} />
      </sapn>
      <input value={text} type="text" onChange={(e) => textHandle(e)} />
      <br />
      <button onClick={logout}>로그아웃</button>
    </>
  );
}
