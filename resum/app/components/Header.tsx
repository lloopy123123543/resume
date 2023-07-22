"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [UserIs, setUserIs] = useState(true);
  const [HeaderMenu, setHeaderMenu] = useState(false);
  return (
    <div className=" p-2 bg-sky-600 w-full mx-auto flex justify-between">
      <div>Logo</div>
      {UserIs ? (
        <div className="flex justify-center items-center gap-5">
          <Link href={"/sing_out"}>
            <div>Sign out</div>
          </Link>
          <Image
          alt="avatar"
            className="rounded-full cursor-pointer"
            src={"/images/avatarka.jpg"}
            height={46}
            width={46}
            onClick={() => {
              setHeaderMenu((prev) => !prev);
            }}
          ></Image>
          {HeaderMenu && (
            <div className="absolute mt-40 bg-white p-2 rounded-lg grid gap-3">
              <Link href={"/sus"}>
                <div>Lorem</div>
              </Link>
              <Link href={"/sus"}>
                <div>Lorem</div>
              </Link>
              <Link href={"/sus"}>
                <div>Lorem</div>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div>Sign in</div>
      )}
    </div>
  );
}
