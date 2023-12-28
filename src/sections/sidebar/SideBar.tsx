import { FiChevronDown } from "react-icons/fi";
import { GrThreeDEffects } from "react-icons/gr";
import { sidebarLinks } from "./sidebar.constant";
import NavBar from "./NavBar";

const Sidebar: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col py-4">
      <NavBar />

      <p className="mb-3">
        Log in to follow creators, like videos, and view comments.
      </p>
      <div className="flex flex-col gap-6 my-4">
        <button className=" py-2 px-4 border dark:bg-gray-800 dark:hover:bg-transparent border-red-500 text-red-500 rounded">
          Log In
        </button>

        <button className="rounded-lg bg-gradient-to-r from-black via-blue-500 to-pink-500 text-white py-2">
          <div className="hover:scale-105 flex items-center justify-center gap-2">
            <GrThreeDEffects />
            <span>Create Effects</span>
          </div>
        </button>
      </div>

      <div className="flex flex-col space-y-2 mb-2 text-xs">
        {sidebarLinks.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`flex gap-2 ${groupIndex % 2 === 1 ? "mb-2" : ""}`}
          >
            {group.map((text, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                {text}
              </a>
            ))}
          </div>
        ))}

        <a href="#" className="text-gray-400 hover:text-white">
          Creator Portal
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Community Guidelines
        </a>
      </div>

      <div className="flex items-center mb-6 text-xs">
        <a
          href="#"
          className="flex items-center text-gray-400 hover:text-white"
        >
          See More
          <FiChevronDown className="ml-2" />
        </a>
      </div>

      <p className="mt-auto">© {currentYear} TikTok</p>
    </div>
  );
};

export default Sidebar;
