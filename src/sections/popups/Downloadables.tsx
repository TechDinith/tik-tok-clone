import { FiMonitor } from "react-icons/fi";
import { IoPhonePortraitSharp } from "react-icons/io5";

const Downloadables = () => {
  return (
    <div className="">
      <div className="flex items-center mb-2">
        <span className="mr-2">
          <FiMonitor />
        </span>
        Get TikTok for Desktop
      </div>

      <div className="flex items-center">
        <span className="mr-2">
          <IoPhonePortraitSharp />
        </span>
        Get TikTok App
      </div>
    </div>
  );
};

export default Downloadables;
