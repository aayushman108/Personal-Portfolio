import { useCallback, useEffect } from "react";
import { About, Contact, Footer, Header, Home, Portfolio } from "./component";
import { setActiveSection } from "./store/slices/main.slice";
import { useAppDispatch } from "./store/hook.store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useAppDispatch();

  /**
   * Effect to set "home" as active section when the component mounts.
   */
  useEffect(() => {
    dispatch(setActiveSection("home"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Scrolls to a specific section on the page with smooth behavior.
   *
   * @param sectionId - ID of the specific section to scroll to.
   */
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === "home" ? 80 : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  /**
   * Effect to handle section activation based on scroll position.
   *
   */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contact"];

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          return (
            top <= window.innerHeight / 3 && bottom >= window.innerHeight / 3
          );
        }
        return false;
      });

      if (currentSection) {
        dispatch(setActiveSection(currentSection));
      }
    };

    // Attach scroll event listener and initially call handleScroll
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <Home id="home" />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
      <Footer scrollToSection={scrollToSection} />
      <ToastContainer />
    </div>
  );
}

export default App;
