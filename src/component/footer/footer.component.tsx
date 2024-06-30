import { useDispatch } from "react-redux";
import { NAV_LINKS } from "../header/constant";
import { useAppSelector } from "../../store/hook.store";
import { setActiveSection } from "../../store/slices/main.slice";
import { BASIC_CONTACT_DETAILS, SOCIAL_LINKS } from "../constant";

interface IProps {
  scrollToSection: (section: string) => void;
}
export function Footer(props: IProps) {
  const dispatch = useDispatch();
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer_contact">
          <ul className="footer_contact_general">
            {BASIC_CONTACT_DETAILS.map((item) => (
              <li className="general-item">
                {item.icon}
                {item.content}
              </li>
            ))}
          </ul>
          <ul className="footer_contact_social">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.id} className="social-icon">
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_nav-links">
          <h1 className="footer-logo">Asyushman</h1>
          <ul className="nav-links">
            {NAV_LINKS.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  props.scrollToSection(item.id);
                  dispatch(setActiveSection(item.id));
                }}
                className="nav-links_item"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
