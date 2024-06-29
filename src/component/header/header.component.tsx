import { useEffect, useState } from "react";
import { BASIC_CONTACT_DETAILS, NAV_LINKS } from "./constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { SideNav } from "../sideNav";
import { useDispatch } from "react-redux";
import { setActiveSection } from "../../store/slices/main.slice";
import { useAppSelector } from "../../store/hook.store";

interface IProps {
  scrollToSection: (section: string) => void;
}

export function Header(props: IProps) {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { activeSection } = useAppSelector((state) => state.main);

  const handleHamburgerClick = () => {
    setShowSideNav(!showSideNav);
  };

  useEffect(() => {
    if (showSideNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSideNav]);

  return (
    <header className="header-container">
      {showSideNav && (
        <div className="sidenav-backdrop" onClick={handleHamburgerClick}></div>
      )}
      <SideNav
        show={showSideNav}
        setShow={setShowSideNav}
        scrollToSection={props.scrollToSection}
      />
      <nav className="header">
        <h1
          className="header_logo"
          onClick={() => props.scrollToSection("header")}
        >
          Aayushman
        </h1>
        <ul className="header_nav-links">
          {NAV_LINKS.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                props.scrollToSection(item.id);
                dispatch(setActiveSection(item.id));
              }}
              className={`header_nav-links_item ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <ul className="header_contact">
          {BASIC_CONTACT_DETAILS.map((item) => (
            <li key={item.id} className="header_contact_item">
              <a
                className="item-link"
                href={
                  item.id === "email"
                    ? `mailto:${item.content}`
                    : `tel:${item.content}`
                }
              >
                {item.icon}
                {item.content}
              </a>
            </li>
          ))}
        </ul>
        <div className="header_hamburger">
          <GiHamburgerMenu size={25} onClick={handleHamburgerClick} />
        </div>
      </nav>
    </header>
  );
}
