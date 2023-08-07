"use client"
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";


export default function Page({params}:any) {
  const supabase = useSupabaseClient;
  const [error, seterror] = useState()
  const [Resume, setResume] = useState()
  useEffect(() => {
    const fetchResume = async() => {
      const  {data, error} = await supabase.from('users').select(params.id)
      if(error) {
        console.log(error)
      }
      if(data){
        setResume(data)
        
      }
    }  
  }, [])
  
console.log(Resume)
  return (
    <div>
      {params.id}
    </div>
  )
}
