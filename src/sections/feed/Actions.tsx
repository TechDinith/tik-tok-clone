import { FiHeart, FiMessageCircle, FiBookmark, FiShare2 } from "react-icons/fi";
const Actions = () => {
  return (
    <div className="flex flex-col justify-end gap-5">
      <div className="flex flex-col items-center ">
        <FiHeart className="mr-2 cursor-pointer" size={30} fill="red" />
        <span>4.3M</span>
      </div>
      <div className="flex flex-col items-center ">
        <FiMessageCircle size={30} className="mr-2 cursor-pointer" />
        <span>14.5K</span>
      </div>
      <div className="flex flex-col items-center ">
        <FiBookmark className="mr-2 cursor-pointer" size={30} />
        <span>284K</span>
      </div>
      <div className="flex flex-col items-center ">
        <FiShare2 className="mr-2 cursor-pointer" size={30} />
        <span>104.3K</span>
      </div>
    </div>
  );
};

export default Actions;
