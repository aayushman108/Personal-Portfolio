import { useDispatch } from "react-redux";
import { NAV_LINKS } from "../header/constant";
import { setActiveSection } from "../../store/slices/main.slice";
import { BASIC_CONTACT_DETAILS, SOCIAL_LINKS } from "../constant";
import { useAppSelector } from "../../store/hook.store";

interface IProps {
  scrollToSection: (section: string) => void;
}
export function Footer(props: IProps) {
  const dispatch = useDispatch();
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <footer
      className={`footer-container ${theme === "dark" ? "dark" : ""}`}
      aria-label="Footer"
    >
      <div className="footer">
        {/* Basic and Social Contact Links */}
        {/* <div className={`footer_contact ${theme === "dark" ? "dark" : ""}`}>
          <h2 className="footer_contact_heading" id="contact-heading">
            Get In Touch
          </h2>
          {/* Email and Phone Links 
          <ul
            className="footer_contact_general"
            aria-labelledby="contact-heading"
          >
            {BASIC_CONTACT_DETAILS.map((item) => (
              <li className="general-item">
                <a
                  href={
                    item.id === "email"
                      ? `mailto:${item.content}`
                      : `tel:${item.content}`
                  }
                  className={`general-item_link ${
                    theme === "dark" ? "dark" : ""
                  }`}
                  aria-label={`${item.id}: ${item.content}`}
                >
                  {item.icon}
                  {item.content}
                </a>
              </li>
            ))}
          </ul>
          {/* Social Media Link Lists 
          <ul className="footer_contact_social" aria-label="Social media links">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.id} className="social-item">
                <a
                  href={item.link}
                  className={`social-item_icon ${
                    theme === "dark" ? "dark" : ""
                  }`}
                  aria-label={`${item.id} profile`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
        {/* Navigation Links */}
        <div className="footer_nav-links">
          <h1
            className="footer-logo"
            onClick={() => {
              props.scrollToSection("home");
              dispatch(setActiveSection("home"));
            }}
          >
            Aayushman
          </h1>
          <nav className="nav-links" aria-label="Footer navigation">
            <ul className="nav-links_list">
              {NAV_LINKS.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    props.scrollToSection(item.id);
                    dispatch(setActiveSection(item.id));
                  }}
                  className="nav-link-item"
                >
                  <button
                    className={`nav-link-item_button ${
                      theme === "dark" ? "dark" : ""
                    }`}
                    aria-label={`Go to ${item.title} section`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
