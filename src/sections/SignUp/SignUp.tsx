import { createElement } from "react";
import { signupMethods } from "./signup.constant";

export interface SignUpProps {
  onLogin: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center dark:text-white">
      <h1 className="mt-8 text-2xl font-bold">Sign Up for TikTok</h1>

      <div className="mt-8 flex flex-col justify-center gap-4 text-center">
        {signupMethods.map((button, index) => (
          <button
            key={index}
            className={`flex justify-center items-center px-4 py-2 space-x-2 rounded-lg ${button.bgColor} ${button.hoverBgColor}`}
          >
            {createElement(button.icon)}
            <span>{button.label}</span>
          </button>
        ))}
      </div>

      <p className="mt-8 text-xs">
        By continuing with an account located in <b>'Country'</b>, you <br />
        agree to our{" "}
        <a href="#" className="font-bold">
          Terms of Service
        </a>{" "}
        and acknowledge that you <br />
        have read our{" "}
        <a href="#" className="font-bold">
          Privacy Policy
        </a>
        .
      </p>

      <p className="mt-4">
        Don’t have an account?{" "}
        <a onClick={onLogin} className="font-bold text-pink-600 cursor-pointer">
          Log in
        </a>
      </p>
    </div>
  );
};

export default SignUp;
