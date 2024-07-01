import { useDispatch } from "react-redux";
import { NAV_LINKS } from "../header/constant";
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
          <h2 className="footer_contact_heading">Get In Touch</h2>
          <ul className="footer_contact_general">
            {BASIC_CONTACT_DETAILS.map((item) => (
              <li className="general-item">
                <a
                  href={
                    item.id === "email"
                      ? `mailto:${item.content}`
                      : `tel:${item.content}`
                  }
                  className="general-item_link"
                >
                  {item.icon}
                  {item.content}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer_contact_social">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.id} className="social-item">
                <a href={item.link} className="social-item_icon">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_nav-links">
          <h1 className="footer-logo">Aayushman</h1>
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
