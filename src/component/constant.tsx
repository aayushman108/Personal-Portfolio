import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const SOCIAL_LINKS = [
  {
    id: 1,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/aayushman-sharma-a8abbb277",
  },
  {
    id: 2,
    icon: <FaFacebookSquare />,
    link: "https://www.facebook.com/aayush.maan.9461",
  },
  {
    id: 3,
    icon: <BsInstagram />,
    link: "https://www.instagram.com/aayushmaan912",
  },
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
