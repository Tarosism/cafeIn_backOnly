import Link from "next/link";
import React from "react";

export default function Hashtag({ text, textHandle }) {
  return (
    <div>
      {text.split(/(#[^\s#]+)/g).map((fill) => {
        if (fill.match(/(#[^\s#]+)/g))
          return (
            <Link href="/">
              <a>{fill}</a>
            </Link>
          );
        return fill;
      })}
    </div>
  );
}
