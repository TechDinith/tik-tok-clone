import { FiCompass, FiHeart, FiHome, FiUser, FiVideo } from "react-icons/fi";

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  selected?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, selected = false }) => (
  <a
    href="#"
    className={`flex items-center py-2 px-4 ${
      selected ? "text-red-500" : "text-gray-400"
    } hover:text-white`}
  >
    {icon}
    <span className="ml-2">{text}</span>
    {text === "Explore" && (
      <span className="text-xs text-white font-bold border-2 border-red-600 rounded-xl px-1 py-[0.5px] ml-2 mt-1">
        NEW
      </span>
    )}
  </a>
);

const NavBar = () => {
  return (
    <div className="mb-6 text-xl">
      <NavItem icon={<FiHome />} text="For You" selected={true} />
      <NavItem icon={<FiHeart />} text="Following" />
      <NavItem icon={<FiCompass />} text="Explore" />
      <NavItem icon={<FiVideo />} text="LIVE" />
      <NavItem icon={<FiUser />} text="Profile" />
    </div>
  );
};

export default NavBar;
