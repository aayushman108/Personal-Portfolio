import { RxCross2 } from "react-icons/rx";
import { SIDENAV_LINKS } from "./constant";
import { useAppDispatch, useAppSelector } from "../../store/hook.store";
import { setActiveSection } from "../../store/slices/main.slice";

interface IProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (section: string) => void;
}
export function SideNav(props: IProps) {
  const dispatch = useAppDispatch();

  const handleSideNavActive = () => {
    props.setShow(false);
  };
  return (
    <nav className={`sidenav-container ${props.show ? "active" : ""}`}>
      <div className="sidenav">
        <span className="sidenav_close">
          <RxCross2 onClick={handleSideNavActive} />
        </span>
        <ul className="sidenav_links">
          {SIDENAV_LINKS.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                props.scrollToSection(item.id);
                dispatch(setActiveSection(item.id));
                handleSideNavActive();
              }}
              className={`sidenav_links_item`}
            >
              {item.icon}
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
