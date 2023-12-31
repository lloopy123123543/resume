import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="bg-neutral-900/90
            backdrop-blur-sm
            fixed
            inset-0
            "
        />
              <Dialog.Content
        className="
        text-white
        fixed
        drop-shadow-md


        top-[50%]
        left-[50%]
        max-h-full
        h-full
        md:h-auto
        md:max-h-[85vh]
        w-full
        md:w-[90vw]
        md:max-w-[450px]
        translate-x-[-50%]
        translate-y-[-50%]
        rounded-md
        bg-white
        p-[25px]
        focus:outline-none
        "
      >
        <Dialog.Close asChild className="w-full flex justify-end">
            <button className="text-black font-bold border-none;">X</button>
        </Dialog.Close>
        <Dialog.Title
        className="text-[#F5AE33] text-xl text-center font-bold mt-2">{title}</Dialog.Title>
        <Dialog.Description className="text-slate-500 font-semibold text-center">{description}</Dialog.Description>
        <div className="text-center font-bold text-white">{children}</div>
      </Dialog.Content>
      </Dialog.Portal>

    </Dialog.Root>
  );
};

export default Modal;
