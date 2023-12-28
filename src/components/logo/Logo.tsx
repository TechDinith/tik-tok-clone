import React from "react";
import { FaTiktok } from "react-icons/fa6";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-row cursor-pointer">
      <div className="p-2 w-16 h-16">
        <div className="dark:text-cyan-300 absolute">
          <FaTiktok size={40} />
        </div>

        <div className="absolute translate-y-1 translate-x-px z-10">
          <FaTiktok size={40} />
        </div>

        <div className="dark:text-pink-400 absolute translate-y-2 translate-x-px">
          <FaTiktok size={40} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className=" text-4xl font-bold">TikTok</p>
      </div>
    </div>
  );
};

export default Logo;
