import React, { ReactNode } from "react";
import { IoIosClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  width?: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  width = "1/2",
  onClose,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 dark:bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div
        className={`dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg w-${width} relative z-50`}
      >
        <div className="absolute top-4 right-4">
          <button
            className="dark:text-white dark:bg-gray-800 hover:bg-gray-500 hover:text-gray-900 p-2 rounded-full"
            onClick={onClose}
          >
            <IoIosClose size={30} />
          </button>
        </div>

        <div className="mt-8 z-50 px-10">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
