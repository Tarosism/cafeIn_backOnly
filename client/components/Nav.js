import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postLocationAction } from "../reducer/post";
import { userLocationAction } from "../reducer/user";

export default function Nav() {
  const state = useSelector((state) => state.postReducer);
  const { location } = state;
  const dispatch = useDispatch();

  const selectHandle = (e) => {
    dispatch(postLocationAction(e.target.value));
  };

  return (
    <>
      <div>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <form>
              <select onChange={(e) => selectHandle(e)} value={location}>
                <option value={"LA"}>LA</option>
                <option value={"대구"}>대구</option>
                <option value={"오사카"}>오사카</option>
                <option value={"대전에 있으면 좋겠당"}>
                  대전에 있으면 좋겠당
                </option>
              </select>
            </form>
          </li>
          <li>
            <Link href="/">
              <a>메인</a>
            </Link>
          </li>
          <li>
            <Link href="/signin">
              <a>로그인</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
