import { FaHome } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

export const SIDENAV_LINKS = [
  { id: "home", title: "Home", icon: <FaHome /> },
  { id: "about", title: "About", icon: <BiSolidUserDetail /> },
  { id: "portfolio", title: "Portfolio", icon: <FaProjectDiagram /> },
  { id: "contact", title: "Contact", icon: <MdContactMail /> },
];
