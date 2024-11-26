import { useAppSelector } from "../../../store/hook.store";
import { easeInOut, motion } from "framer-motion";

export function BasicDetails() {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <section
      className={`basic-details-container ${theme === "dark" ? "dark" : ""}`}
      aria-labelledby="about-me-heading"
    >
      <div className="basic-details">
        {/* My Image */}
        {/* <figure
          className={`basic-details_image ${theme === "dark" ? "dark" : ""}`}
        >
          <img src="/images/aayushmanSharma.jpg" alt="..." />
          <BiSolidLeftArrow
            aria-hidden="true"
            className={`basic-arrow-icon ${theme === "dark" ? "dark" : ""}`}
          />
        </figure> */}
        {/* Basic Details */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.35, ease: easeInOut }}
          viewport={{ once: true, margin: "100% 0px -35% 0px" }}
          className="basic-details_content"
        >
          <h2
            id="about-me-heading"
            className={`basic-details_content_heading ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            ABOUT ME
          </h2>
          {/* My Name */}
          <h2
            className={`basic-details_content_name ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            AAYUSHMAN SHARMA
          </h2>
          {/* My Basic description */}
          <p
            className={`basic-details_content_description ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            Proficient Associate Frontend Developer with 1.5 years of experience
            in web application development. I specialize in modern frontend
            technologies and have a basic foundation in backend development. I
            am dedicated to creating efficient and user-friendly web interfaces
            while continuously learning and applying new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
