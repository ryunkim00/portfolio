import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import LogoAndThemeToggle from "./LogoAndThemeToggle";
import ImageGallery from "react-image-gallery";
import NavFooter from "./NavFooter";
import Art from "../assets/Masked-Captions1.gif";
import FigmaLanuageSelection from "../assets/Masked-Captions2.jpg";
import SolidWorksMountDesign from "../assets/Masked-Captions3.jpg";
import MountParts from "../assets/Masked-Captions4.jpg";
import MountedPhone from "../assets/Masked-Captions5.jpg";
import FinalProduct from "../assets/Masked-Captions6.jpg";
import { motion } from "framer-motion";
import { DiUnitySmall, DiGoogleCloudPlatform } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

const MaskedCaptions = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const images = [
    {
      original: Art,
      thumbnail: Art,
    },
    {
      original: FigmaLanuageSelection,
      thumbnail: FigmaLanuageSelection,
    },
    {
      original: SolidWorksMountDesign,
      thumbnail: SolidWorksMountDesign,
    },
    {
      original: MountParts,
      thumbnail: MountParts,
    },
    {
      original: MountedPhone,
      thumbnail: MountedPhone,
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
        <h1>Masked Captions</h1>
        <a
          href="https://devpost.com/software/masked-captions"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button
            style={{ border: "1px #fcbc66 solid", color: theme.syntax }}
            whileHover={{ scale: 1.1 }}
          >
            See Devpost
          </motion.button>
        </a>
        <p style={{ marginTop: "3rem" }}>
          This project was a submission for Hack the North 2020++. Three of my
          friends and I wanted to create a tool that could alleviate some of the
          frustrations and limitations the COVID-19 pandemic has placed on
          society espcially in in-person communication. Our product Masked
          Captions is a user-friendly mobile app that provides captions on a
          full screen to allow users to communicate freely from a safe distance.
          To extend on this idea, we also added a real-time, fairly accurate
          translation capability supporting multiple languages.
        </p>
        <h2>How We Built It + My Contributions</h2>
        <hr />
        <div className="tools-container">
          <DiUnitySmall size="3rem" title="Unity" />
          <FiFigma size="2.5rem" title="Figma" />
          <DiGoogleCloudPlatform size="3rem" title="Google Cloud APIs" />
        </div>
        <hr style={{ marginBottom: "1.5rem" }} />
        <p>
          We initally had difficulty finding the right framework to build our
          app in as we wanted to ease the integration of the{" "}
          <strong>Google Cloud Speech-to-Text and Translate APIs</strong> later
          down the road. After some digging, we landed on <strong>Unity</strong>{" "}
          and set up the speech-to-text which performed well. I worked on the
          translate API integration in <strong>C#</strong> and the UI and
          navigation logic in Unity's intuitive GUI.
        </p>
        <h2>Image Gallery</h2>
        <ImageGallery items={images} />
      </div>
      <NavFooter
        next="/anti-bumper-car"
        nextName="Anti-Bumper Car"
        previous="/portfolio-project"
        previousName="Portfolio"
      />
      <LogoAndThemeToggle />
    </motion.div>
  );
};

export default MaskedCaptions;
