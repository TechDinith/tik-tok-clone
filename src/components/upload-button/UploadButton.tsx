import { FiPlus } from "react-icons/fi";

const UploadButton: React.FC = () => {
  return (
    <button className="flex items-center justify-center px-4 py-2 dark:bg-gray-500 dark:text-white hover:bg-gray-600 shadow-md">
      <div className="mr-2">
        <FiPlus />
      </div>
      Upload
    </button>
  );
};

export default UploadButton;
