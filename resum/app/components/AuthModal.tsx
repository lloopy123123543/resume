"use client"
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import Modal from "./modal"
import {useEffect} from "react"
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useRouter } from 'next/navigation';


const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const {session} = useSessionContext();
    const { onClose, isOpen} = useAuthModal();

    useEffect(() => {
        if(session){
            router.refresh();
            onClose()
        }
    
    }, [session, router, onClose])
    
    const onChange = (open:boolean) => {
        if(!open){
            onClose();

        }
    }
    return (
        <Modal
        title = "Welcome back"
        description="Login to your account"
        isOpen = {isOpen}
        onChange={onChange}
        >
            <Auth
            supabaseClient={supabaseClient}
            providers={[]}
            magicLink
            appearance={{
                theme: ThemeSupa,
                variables:{
                    default:{
                        colors:{
                            
                            brand: '#FD7821',
                            brandAccent: '#F5AE33'
                        }
                    }
                }
            }}
            />
        </Modal>
    )
}
export default AuthModal