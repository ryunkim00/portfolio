import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import LogoAndThemeToggle from "./LogoAndThemeToggle";
import ImageGallery from "react-image-gallery";
import NavFooter from "./NavFooter";
import LandingPage from "../assets/Portfolio1.png";
import ExperienceSectionLight from "../assets/Portfolio2.png";
import ExperienceSectionDark from "../assets/Portfolio3.png";
import ProjectsSection from "../assets/Portfolio4.png";
import ProjectsSectionResponsive from "../assets/Portfolio5.png";

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

  return (
    <div>
      <div
        className="container"
        style={{ backgroundColor: theme.bg, color: theme.syntax }}
      >
        <h1>Portfolio</h1>
        <h2>Description</h2>
        <p>
          This is the third iteration of my portfolio website. I like to update
          or create a new one as I continue to learn more frontend technologies
          and hone my skills. This website was built using React and an
          animation library called Framer Motion, which is responsible for
          animated transitions between pages and the floating bubbles in the
          interests section. I also used an npm library called
          react-image-gallery for displaying the pictures.
        </p>
        <h2>How I Built It</h2>
        <p>
          One of the biggest challenges was deciding which frontend
          technologies/libraries to use. I know I wanted to use React to
          structure and lay out the user interface but beyond that, there were
          countless options. I had initially used React-Bootstrap but later
          determined that I needed more flexibility so only enlisted the help of
          Framer Motion to bring this website to life.
        </p>
        <h2>Image Gallery</h2>
        <ImageGallery items={images} />
      </div>
      <NavFooter next="/masked-captions" nextName="Masked Captions" />
      <LogoAndThemeToggle />
    </div>
  );
};

export default Portfolio;
