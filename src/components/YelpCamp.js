import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import LogoAndThemeToggle from "./LogoAndThemeToggle";
import ImageGallery from "react-image-gallery";
import NavFooter from "./NavFooter";
import Banner from "../assets/YelpCamp1.png";
import CarWithImages from "../assets/YelpCamp2.png";
import AppView from "../assets/YelpCamp3.png";
import HardwareSetup from "../assets/YelpCamp4.png";
import FinalProduct from "../assets/YelpCamp5.png";
import { motion } from "framer-motion";
import { DiNodejsSmall, DiMongodb, DiBootstrap } from "react-icons/di";

const YelpCamp = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const images = [
    {
      original: Banner,
      thumbnail: Banner,
    },
    {
      original: CarWithImages,
      thumbnail: CarWithImages,
    },
    {
      original: AppView,
      thumbnail: AppView,
    },
    {
      original: HardwareSetup,
      thumbnail: HardwareSetup,
    },
    {
      original: FinalProduct,
      thumbnail: FinalProduct,
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
        <h1>YelpCamp</h1>
        <a
          href="https://still-citadel-75028.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button
            style={{ border: "1px #fcbc66 solid", color: theme.syntax }}
            whileHover={{ scale: 1.1 }}
          >
            Launch App
          </motion.button>
        </a>
        <p style={{ marginTop: "3rem" }}>
          As part of a Udemy initiative, I developed a scalable RESTful full
          stack web application for reviewing campsites that can perform CRUD
          operations with custom authentication and comment features.
        </p>
        <h2>How I Built It</h2>
        <hr />
        <div className="tools-container">
          <DiNodejsSmall size="3rem" title="Node.js" />
          <DiMongodb size="3rem" title="MongoDB" />
          <DiBootstrap size="3rem" title="Bootstrap" />
        </div>
        <hr style={{ marginBottom: "1.5rem" }} />
        <p>
          I used <strong>Bootstrap</strong> for the frontend and{" "}
          <strong>Node.js</strong> and <strong>MongoDB</strong> for the backend.
          The app can perform CRUD operations for campsites and comments using
          REST APIs. A containerization service called goormIDE was used for
          development and <strong>Heroku</strong> for deployment.
        </p>
        <h2>Image Gallery</h2>
        <ImageGallery items={images} />
      </div>
      <NavFooter
        next="/portfolio"
        nextName="Back to Landing Page"
        previous="/anti-bumper-car"
        previousName="Anti-Bumper Car"
      />
      <LogoAndThemeToggle />
    </motion.div>
  );
};

export default YelpCamp;
