import Link from "next/link";

export default function LoginNav() {
  return (
    <>
      <div>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <Link href="/">
              <a>메인</a>
            </Link>
          </li>
          <li>
            <Link href="/userinfo">
              <a>내정보</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
