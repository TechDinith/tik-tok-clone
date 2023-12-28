import { RiTiktokLine } from "react-icons/ri";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-24 h-16">
        <RiTiktokLine className=" w-full h-full animate-tiktok-loader" />
      </div>
    </div>
  );
};

export default Loader;
