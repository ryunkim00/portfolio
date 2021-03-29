import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import LogoAndThemeToggle from "./LogoAndThemeToggle";
import ImageGallery from "react-image-gallery";
import NavFooter from "./NavFooter";
import LandingPage from "../assets/Portfolio1.png";
import ExperienceSectionLight from "../assets/Portfolio2.png";
import ExperienceSectionDark from "../assets/Portfolio3.png";
import ProjectsSection from "../assets/Portfolio4.png";
import ProjectsSectionResponsive from "../assets/Portfolio5.png";
import { motion } from "framer-motion";
import { DiReact, DiNpm, DiJsBadge } from "react-icons/di";

const Portfolio = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const images = [
    {
      original: LandingPage,
      thumbnail: LandingPage,
    },
    {
      original: ExperienceSectionLight,
      thumbnail: ExperienceSectionLight,
    },
    {
      original: ExperienceSectionDark,
      thumbnail: ExperienceSectionDark,
    },
    {
      original: ProjectsSection,
      thumbnail: ProjectsSection,
    },
    {
      original: ProjectsSectionResponsive,
      thumbnail: ProjectsSectionResponsive,
    },
  ];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <motion.div exit={{ x: "-100vw" }} transition={{ ease: "easeInOut" }}>
      <div
        className="project-container"
        style={{ backgroundColor: theme.bg, color: theme.syntax }}
      >
        <h1>Portfolio</h1>
        <p>
          This is the third iteration of my portfolio website. I like to update
          or create a new one as I continue to learn more frontend technologies
          and hone my skills. This website was built using React and an
          animation library called Framer Motion, which is responsible for
          animated transitions between pages and the floating bubbles in the
          interests section. I also used an npm library called
          `react-image-gallery` for displaying pictures in the project pages.
        </p>
        <h2>How I Built It</h2>
        <hr />
        <div className="tools-container">
          <DiReact size="3rem" title="React" />
          <DiNpm size="3rem" title="npm" />
          <DiJsBadge size="2rem" title="Javascript" />
        </div>
        <hr style={{ marginBottom: "1.5rem" }} />
        <p>
          One of the biggest challenges I initially faced was deciding which
          frontend technologies/libraries to use. Scalability was a big concern
          as I wanted to be able to add to each section as I progressed. For
          this, I wanted to leverage
          <strong> React</strong>'s reusability to quickly lay out the UI but
          beyond that, there were countless options for animations, components,
          and assets. I had initially used React-Bootstrap but later determined
          that I wanted more flexibility so only enlisted the help of{" "}
          <strong>Framer Motion</strong> to bring this website to life. I also
          used a React context and a useContext hook for the light and dark
          theme feature.
        </p>
        <h2>Image Gallery</h2>
        <ImageGallery items={images} />
      </div>
      <NavFooter next="/masked-captions" nextName="Masked Captions" />
      <LogoAndThemeToggle />
    </motion.div>
  );
};

export default Portfolio;
