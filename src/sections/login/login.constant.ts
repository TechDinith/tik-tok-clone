import {
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoTwitter,
  IoLogoApple,
  IoQrCodeOutline,
} from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

export const loginMethods = [
  {
    icon: IoQrCodeOutline,
    label: "Use QR code",
    bgColor: "bg-gray-800",
    hoverBgColor: "hover:bg-gray-700",
  },
  {
    icon: RxAvatar,
    label: "Use phone / email / username",
    bgColor: "bg-gray-800",
    hoverBgColor: "hover:bg-gray-700",
  },
  {
    icon: IoLogoFacebook,
    label: "Continue with Facebook",
    bgColor: "bg-blue-600",
    hoverBgColor: "hover:bg-blue-500",
  },
  {
    icon: IoLogoGoogle,
    label: "Continue with Google",
    bgColor: "bg-red-600",
    hoverBgColor: "hover:bg-red-500",
  },
  {
    icon: IoLogoTwitter,
    label: "Continue with Twitter",
    bgColor: "bg-blue-500",
    hoverBgColor: "hover:bg-blue-300",
  },
  {
    icon: IoLogoApple,
    label: "Continue with Apple",
    bgColor: "bg-black",
    hoverBgColor: "hover:bg-gray-900",
  },
];
