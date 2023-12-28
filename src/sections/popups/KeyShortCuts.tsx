import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const KeyShortCuts = () => {
  return (
    <div>
      <h2 className=" text-md font-bold mb-4">
        Introducing keyboard shortcuts!
      </h2>

      <div className="flex items-center mb-2">
        <span className=" border-white border-2 mr-2 p-1">
          <FaArrowUp />
        </span>
        Go to previous video
      </div>

      <div className="flex items-center mb-2">
        <span className=" border-white border-2 mr-2 p-1">
          <FaArrowDown />
        </span>
        Go to next video
      </div>

      <div className="flex items-center mb-2">
        <span className=" border-white border-2 mr-2 py-0.5 px-2 font-bold">
          L
        </span>
        Like video
      </div>

      <div className="flex items-center">
        <span className=" border-white border-2 mr-2 py-0.5 px-1 font-bold">
          M
        </span>
        Mute / unmute video
      </div>
    </div>
  );
};

export default KeyShortCuts;
