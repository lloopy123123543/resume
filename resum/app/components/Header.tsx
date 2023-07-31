"use client";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Header() {
  const [HeaderMenu, setHeaderMenu] = useState(false);
  const AuthModal = useAuthModal()
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const {user, subscription} = useUser();

  const handleLogout = async () => {
    const {error } = await supabaseClient.auth.signOut();

    router.refresh();

    if(error) {
      console.log(error)
    }
  }
  return (
    <div className=" p-2 bg-sky-600 w-full mx-auto flex justify-between">
      <div className="container flex justify-between items-center w-full mx-auto">
      <div className="text-white font-semibold text-xl">Galera</div>
      {user ? (
        <div
         className="flex justify-center items-center gap-5">
            <div>{user.email}</div>
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
            <div
            className="cursor-pointer"
             onClick={() => handleLogout()}
            >Sign out</div>
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
        <div
        className="cursor-pointer hover:text-white"
        onClick={AuthModal.onOpen}
        >Sign in</div>
      )}
      </div>
    </div>
  );
}
