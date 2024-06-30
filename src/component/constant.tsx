import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const SOCIAL_LINKS = [
  { id: 1, icon: <FaLinkedin /> },
  { id: 2, icon: <FaFacebookSquare /> },
  { id: 3, icon: <BsInstagram /> },
];

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
