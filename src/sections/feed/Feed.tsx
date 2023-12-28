import { FiMusic } from "react-icons/fi";
import videoSrc from "../../assets/videos/sea.mp4";
import ReactPlayer from "react-player";
import Actions from "./Actions";
import { tags } from "./feed.constants";

const Feed = () => {
  return (
    <div className="dark:bg-gray-900 w-2/3 dark:text-white rounded-xl">
      <div className="flex gap-4">
        <div className="flex">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-full w-12 h-12 mr-3"
          />
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Nature Lover</span>

                <button className="border cursor-pointer hover:bg-slate-800 border-red-500 text-red-500 font-bold rounded px-4 py-2">
                  Follow
                </button>
              </div>
              <div>
                <p>Sea</p>
                {tags.map((tag) => (
                  <span className="mr-1">{tag}</span>
                ))}
              </div>

              <div className="flex items-center mb-4">
                <FiMusic className="mr-2" /> <span>Echos - Sea Bells</span>
              </div>
            </div>

            <ReactPlayer height={477} width={267} controls url={videoSrc} />
          </div>
        </div>

        <Actions />
      </div>
    </div>
  );
};

export default Feed;
