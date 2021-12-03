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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="project-container"
        style={{ backgroundColor: theme.bg, color: theme.syntax }}
      >
        <h1>Portfolio</h1>
        <p>
          This is the third iteration of my portfolio website and is home to my
          past work and projects. I like to improve or create a new one as I
          continue to learn more frontend technologies and hone my skills.
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
          This website was built using <strong>React</strong> and an animation
          library called <strong>Framer Motion</strong> which is responsible for
          the animated transitions between pages and the bobbing bubbles in the
          interests section. I also used an npm library called
          `react-image-gallery` for displaying images in the project pages.
        </p>
        <p>
          One of the challenges I initially faced was deciding which frontend
          technologies/libraries to use since there are so many viable options
          out there. Reusability and a small amount of scalability were both of
          interest to me as I wanted the ability to easily and efficiently add
          to each section. I wanted to leverage my experience with React, its
          reusability and modularity to quickly lay out the UI. Althought I had
          briefly considered React-Bootstrap, I opted for a more cutomized feel
          and flexibility with CSS and Framer Motion. React contexts + hooks
          were also useful for the modern light/dark theme feature.
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
