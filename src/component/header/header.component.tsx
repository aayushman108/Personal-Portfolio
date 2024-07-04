import { useEffect, useState } from "react";
import { DOWNLOAD_CV, NAV_LINKS } from "./constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { SideNav } from "../sideNav";
import { useDispatch } from "react-redux";
import { setActiveSection } from "../../store/slices/main.slice";
import { useAppSelector } from "../../store/hook.store";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { toggleTheme } from "../../store/slices/theme.slice";

interface IProps {
  scrollToSection: (section: string) => void;
}

export function Header(props: IProps) {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { activeSection } = useAppSelector((state) => state.main);
  const { theme } = useAppSelector((state) => state.theme);

  const handleHamburgerClick = () => {
    setShowSideNav(!showSideNav);
  };

  const handleModeBtnClick = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (showSideNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSideNav]);

  return (
    <header className={`header-container ${theme === "dark" ? "dark" : ""}`}>
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
        <div className="hamburger-cv-mode">
          <div className="header_hamburger">
            <GiHamburgerMenu
              size={25}
              onClick={handleHamburgerClick}
              aria-label="Toggle navigation"
              aria-expanded={showSideNav}
            />
          </div>
          <ul className="header_cv" aria-label="Aayushman Resume">
            {DOWNLOAD_CV.map((item) => (
              <li key={item.id} className="header_cv_item">
                <a
                  className={`item-link ${theme === "dark" ? "dark" : ""}`}
                  href={item.link}
                  aria-label="Download CV"
                >
                  {item.icon}
                  {item.content}
                </a>
              </li>
            ))}
          </ul>
          <ul
            className={`header_mode ${theme === "dark" ? "dark" : ""}`}
            aria-label="Theme mode"
          >
            <li className="header_mode_item">
              <button
                className={`mode-btn ${
                  theme === "dark" ? "mode-btn--highlight" : ""
                } ${theme === "dark" ? "dark" : ""}`}
                onClick={handleModeBtnClick}
                disabled={theme === "dark"}
                aria-pressed={theme === "dark"}
                aria-label="Switch to dark mode"
              >
                <MdOutlineDarkMode />
              </button>
            </li>
            <li className="header_mode_item">
              <button
                className={`mode-btn ${
                  theme === "light" ? "mode-btn--highlight" : ""
                } ${theme === "dark" ? "dark" : ""}`}
                onClick={handleModeBtnClick}
                disabled={theme === "light"}
                aria-pressed={theme === "light"}
                aria-label="Switch to light mode"
              >
                <MdOutlineLightMode />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
