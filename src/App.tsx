import { useEffect } from "react";
import { About, Contact, Footer, Header, Portfolio } from "./component";
import { setActiveSection } from "./store/slices/main.slice";
import { useAppDispatch } from "./store/hook.store";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setActiveSection("about"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "portfolio", "contact"];

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

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
