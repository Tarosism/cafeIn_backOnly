import React, { useState } from "react";
import LoginNav from "../components/LoginNav";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../reducer/user";
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

  const [text, setText] = useState(""); //눈 피해
  const textHandle = (e) => {
    setText(e.target.value);
  };

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const oldPasswordHandle = (e) => {
    setOldPassword(e.target.value);
  };
  const newPasswordHandle = (e) => {
    setNewPassword(e.target.value);
  };

  const changePassword = async () => {
    axios
      .patch(
        "https://localhost:8080/mypage/password",
        {
          old_password: oldPassword,
          new_password: newPassword,
        },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch(loginAction(res.data));
        console.log(res.data);
      });
  };

  const deleteAccount = () => {
    axios
      .post(
        "https://localhost:8080/deleteaccount",
        {
          password: oldPassword,
        },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.message);
        dispatch(logoutAction());
        Router.push("/");
      })
      .catch((err) => console.log(err));
  };

  const check = () => {
    axios.get("https://localhost:8080/checkverify").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <LoginNav />
      <h2>반가워요 {me !== null ? me.userInfo.username : ""}</h2>
      {/* 이렇게 안 하면 me가 null 됐을 때 못 찾아서 에러띄움 */}
      <div>이메일 {me !== null ? me.userInfo.email : ""}</div>
      <h3>비밀번호 {me !== null ? me.userInfo.password : ""}</h3>
      <span>
        <Hashtag text={text} />
      </span>
      <span>이전비밀</span>
      <input
        value={oldPassword}
        type="text"
        onChange={(e) => oldPasswordHandle(e)}
      />
      <br />
      <span>새비밀</span>
      <input
        value={newPassword}
        type="text"
        onChange={(e) => newPasswordHandle(e)}
      />
      <button onClick={changePassword}>비번바꾸기</button>
      <br />
      {/* <input value={text} type="text" onChange={(e) => textHandle(e)} /> */}
      <br />
      <button onClick={logout}>로그아웃</button>
      <br />
      <button onClick={check}>쿠키보기</button>
      <br />

      <input
        type="text"
        value={oldPassword}
        onChange={(e) => oldPasswordHandle(e)}
      />
      <button onClick={deleteAccount}>계정삭제</button>
    </>
  );
}
