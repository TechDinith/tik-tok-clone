import { FiHelpCircle, FiMoon } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import { TbLanguageHiragana } from "react-icons/tb";
import { FaRegKeyboard } from "react-icons/fa6";

const DropdownMenu: React.FC = () => {
  return (
    <div className="group">
      <button className="flex items-center p-2 rounded-md hover:bg-gray-500">
        <CiMenuKebab />
      </button>

      <div className="invisible group-hover:visible fixed ml-[-9rem] mt-5 w-48 dark:bg-gray-700 rounded-md shadow-lg">
        <button className="flex items-center p-2 hover:bg-gray-500">
          <TbLanguageHiragana className="mr-2" />
          English
        </button>

        <button className="flex items-center p-2 hover:bg-gray-500">
          <FiHelpCircle className="mr-2" />
          Feedback and Help
        </button>

        <button className="flex items-center p-2 hover:bg-gray-500">
          <FaRegKeyboard className="mr-2" />
          Keyboard Shortcuts
        </button>

        <div className="flex items-center p-2">
          <FiMoon className="mr-2" />
          <span className="mr-2">Dark Mode</span>
          <input
            className="mr-2 mt-1 h-3.5 w-8 appearance-none rounded-full after:absolute after:-mt-0.5 after:h-5  after:rounded-full after:bg-gray-300  checked:after:ml-[1.0625rem] checked:after:w-5 hover:cursor-pointer dark:bg-green-500 "
            type="checkbox"
            role="switch"
            checked
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
