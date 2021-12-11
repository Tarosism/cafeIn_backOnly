import React from "react";
import LoginNav from "../components/LoginNav";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../reducer/user";
import Router from "next/router";

export default function userinfo() {
  const state = useSelector((state) => state.userReducer);
  const { me } = state;
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction({}));
    Router.push("/");
  };

  return (
    <>
      <LoginNav />
      <h2>반가워요 {me !== null ? me.username : ""}</h2>
      {/* 이렇게 안 하면 me가 null 됐을 때 못 찾아서 에러띄움 */}
      <div>이메일 {me !== null ? me.email : ""}</div>
      <button onClick={logout}>로그아웃</button>
    </>
  );
}
