import { useState } from "react";
import { GrClose } from "react-icons/gr";

const PopUp = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <div className="flex items-center justify-center dark:bg-gray-700 dark:text-white">
      <div className="rounded-lg">
        <div className="flex justify-end">
          <div className="mr-3 mt-3">
            <button onClick={() => setIsOpen(false)}>
              <GrClose />
            </button>
          </div>
        </div>
        <div className="mt-1 px-6 pb-6">{children}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PopUp;
