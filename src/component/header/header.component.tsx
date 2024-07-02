import { useEffect, useState } from "react";
import { DOWNLOAD_CV, NAV_LINKS } from "./constant";
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
        <div
          className="sidenav-backdrop"
          onClick={handleHamburgerClick}
          aria-hidden="true"
        ></div>
      )}
      <SideNav
        show={showSideNav}
        setShow={setShowSideNav}
        scrollToSection={props.scrollToSection}
      />
      <nav className="header" role="navigation" aria-label="Main navigation">
        <h1
          className="header_logo"
          onClick={() => props.scrollToSection("header")}
        >
          Aayushman
        </h1>
        <ul className="header_nav-links" role="menu">
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
              aria-current={activeSection === item.id ? "true" : undefined}
              role="menuitem"
            >
              {item.title}
            </li>
          ))}
        </ul>
        <ul className="header_cv" aria-label="Aayushman Resume">
          {DOWNLOAD_CV.map((item) => (
            <li key={item.id} className="header_cv_item">
              <a
                className="item-link"
                href={item.link}
                aria-label="Download CV"
              >
                {item.icon}
                {item.content}
              </a>
            </li>
          ))}
        </ul>
        <div className="header_hamburger">
          <GiHamburgerMenu
            size={25}
            onClick={handleHamburgerClick}
            aria-label="Toggle navigation"
            aria-expanded={showSideNav}
          />
        </div>
      </nav>
    </header>
  );
}
