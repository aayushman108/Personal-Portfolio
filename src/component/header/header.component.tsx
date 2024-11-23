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
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

interface IProps {
  scrollToSection: (section: string) => void;
}

export function Header(props: IProps) {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { activeSection } = useAppSelector((state) => state.main);
  const { theme } = useAppSelector((state) => state.theme);

  /**
   * MARK: Toggle sidenav visibility
   */
  const handleHamburgerClick = () => {
    setShowSideNav(!showSideNav);
  };

  /**
   * MARK: Handle theme mode toggle
   */
  const handleModeBtnClick = () => {
    dispatch(toggleTheme());
  };

  /**
   * Control body overflow when sidenav is active
   */
  useEffect(() => {
    if (showSideNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSideNav]);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > Number(previous) && latest > 500) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        hidden: { y: "-100%" },
        visible: { y: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.15, ease: "easeIn" }}
      className={`header-container ${theme === "dark" ? "dark" : ""}`}
    >
      {/* Backdrop when sidenav is active */}
      {showSideNav && (
        <div
          className="sidenav-backdrop"
          onClick={handleHamburgerClick}
          aria-hidden="true"
        ></div>
      )}
      {/* Render SideNav component */}
      <SideNav
        show={showSideNav}
        setShow={setShowSideNav}
        scrollToSection={props.scrollToSection}
      />
      {/* Main navigation section */}
      <nav className="header" role="navigation" aria-label="Main navigation">
        <h1
          className="header_logo"
          onClick={() => props.scrollToSection("home")}
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
        {/* Hamburger menu, CV, and theme mode section */}
        <div className="hamburger-cv-mode">
          {/* Hamburger menu */}
          <div className="header_hamburger">
            <GiHamburgerMenu
              size={25}
              onClick={handleHamburgerClick}
              aria-label="Toggle navigation"
              aria-expanded={showSideNav}
            />
          </div>
          {/* CV Download Link */}
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
          {/* Theme Mode Buttons */}
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
    </motion.header>
  );
}
