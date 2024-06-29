import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const BASIC_CONTACT_DETAILS = [
  {
    id: "mobile number",
    icon: <FaMobileButton size={16} />,
    content: "9810478691",
  },
  {
    id: "email",
    icon: <MdEmail size={18} />,
    content: "aayushmansharma108@gmail.com",
  },
];

export const NAV_LINKS = [
  // { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "portfolio", title: "Portfolio" },
  { id: "contact", title: "Contact" },
];
