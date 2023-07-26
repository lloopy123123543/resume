"use client"
import { useRouter } from "next/router"
import { useUser } from "@/hooks/useUser";
import Profile from "../components/Profile";

export default function Page() {
  const {user, subscription} = useUser();
  console.log(user)

    return (
      <div>
        <Profile email = {user?.email}></Profile>
      </div>
    )
  }