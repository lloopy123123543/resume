"use client";

import AuthModal from "@/app/components/AuthModal";
import Modal from "@/app/components/modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
    <AuthModal/>
    </>
  );
};
export default ModalProvider;
