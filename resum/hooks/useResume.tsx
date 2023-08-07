import { Subscription, UserDetails } from "@/types";
import { User } from "@supabase/auth-helpers-nextjs";
import {useSessionContext, useUser as useSupaUser} from "@supabase/auth-helpers-react";
import { createContext, useState, useEffect, useContext } from "react";


type ResumeContextType = {
    id: string;
    user_name: string;
    user_surname: string;
    user_information: string;
    user_id: string;
}