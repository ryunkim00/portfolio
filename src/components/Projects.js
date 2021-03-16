import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ReactComponent as ProjectIllustration } from "../assets/Projects-Illustration.svg";
import Project from "./shared/Project";
import PortfolioThumbnail from "../assets/Portfolio-Thumbnail.png";
import MaskedCaptions from "../assets/Masked-Captions.gif";
import AntiBumperCar from "../assets/Anti-Bumper-Car.jpg";
import YelpCamp from "../assets/YelpCamp.jpg";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Projects = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { width } = useWindowDimensions();
  const projects = [
    {
      id: "1",
      title: "Portfolio",
      description:
        "A showcase of my past work, built on modern frontend technologies",
      imgSrc: PortfolioThumbnail,
      destination: "/portfolio",
    },
    {
      id: "2",
      title: "Masked Captions",
      description: "A simple but powerful communication tool amidst a pandemic",
      imgSrc: MaskedCaptions,
    },
    {
      id: "3",
      title: "Anti-Bumper Car",
      description: "An AR-guided self-driving vehicle prototype",
      imgSrc: AntiBumperCar,
    },
    {
      id: "4",
      title: "YelpCamp",
      description: "A full stack web app for reviewing campsites",
      imgSrc: YelpCamp,
    },
  ];

  return (
    <div
      id="Projects"
      className="container"
      style={{ backgroundColor: theme.bg, color: theme.syntax }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: width > 992 ? "row" : "column-reverse",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5rem",
        }}
      >
        <ProjectIllustration
          style={{ width: width > 992 ? "30rem" : "18rem", height: "auto" }}
        />
        <div
          style={{
            width: width > 992 ? "50%" : "100%",
            textAlign: width > 992 ? "right" : "left",
            marginBottom: width > 992 ? 0 : "2rem",
          }}
        >
          <h2>Projects</h2>
          <p>Click on each project to learn more!</p>
        </div>
      </div>
      {projects.map((project) => (
        <Project
          key={project.id}
          {...project}
          textFirst={projects.indexOf(project) % 2 === 0}
          style={{ marginBottom: "6rem" }}
        />
      ))}
    </div>
  );
};

export default Projects;
