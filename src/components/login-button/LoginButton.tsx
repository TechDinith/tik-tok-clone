import { SignUpProps } from "../../sections/SignUp/SignUp";

const LoginButton: React.FC<SignUpProps> = ({ onLogin }) => {
  return (
    <button
      onClick={onLogin}
      className="px-8 py-2 bg-red-500 dark:text-white font-bold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
    >
      Log in
    </button>
  );
};

export default LoginButton;
