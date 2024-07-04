import { RxCross2 } from "react-icons/rx";
import { SIDENAV_LINKS } from "./constant";
import { useAppDispatch, useAppSelector } from "../../store/hook.store";
import { setActiveSection } from "../../store/slices/main.slice";
import { PiDownloadFill } from "react-icons/pi";

interface IProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (section: string) => void;
}
export function SideNav(props: IProps) {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);

  const handleSideNavActive = () => {
    props.setShow(false);
  };
  return (
    <nav
      className={`sidenav-container ${props.show ? "active" : ""} ${
        theme === "dark" ? "dark" : ""
      }`}
      aria-hidden={!props.show}
    >
      <div className="sidenav">
        <button
          className={`sidenav_close ${theme === "dark" ? "dark" : ""}`}
          aria-label="Close side navigation"
        >
          <RxCross2 onClick={handleSideNavActive} />
        </button>
        <ul className="sidenav_links" role="menu">
          {SIDENAV_LINKS.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                props.scrollToSection(item.id);
                dispatch(setActiveSection(item.id));
                handleSideNavActive();
              }}
              className={`sidenav_links_item`}
              role="menuitem"
              aria-label={`Scroll to ${item.title}`}
            >
              {item.icon}
              {item.title}
            </li>
          ))}
        </ul>
        <a
          className={`sidenav_cv ${theme === "dark" ? "dark" : ""}`}
          href="https://drive.google.com/file/d/1zeNSSM01WQUqxEhk-ZUce6SSVm0blQ8Q/view?usp=sharing"
          aria-label="Download CV"
        >
          <button
            className={`sidenav_cv_btn ${theme === "dark" ? "dark" : ""}`}
            aria-label="Download CV"
          >
            <PiDownloadFill size={18} />
            Download CV
          </button>
        </a>
      </div>
    </nav>
  );
}
