import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar: React.FC = () => {
  return (
    <div className="relative mx-auto w-2/6 lg:visible invisible">
      <div className="flex items-center pr-2 dark:bg-gray-500 rounded-full shadow-md w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pr-10 pl-8 placeholder:text-white  dark:bg-gray-500 dark:text-white rounded-full focus:outline-none"
        />
        <div className="p-2 border-l-2 border-gray-400 cursor-pointer">
          <FiSearch className="dark:text-white" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
