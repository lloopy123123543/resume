"use client";

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
      <Modal
        title="testmodel"
        description="description"
        isOpen
        onChange={() => {}}
      >
        testChildren
      </Modal>
    </>
  );
};
export default ModalProvider;
