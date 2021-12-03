import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import LogoAndThemeToggle from "./LogoAndThemeToggle";
import ImageGallery from "react-image-gallery";
import NavFooter from "./NavFooter";
import Banner from "../assets/Anti-Bumper-Car1.png";
import CarWithImages from "../assets/Anti-Bumper-Car2.jpg";
import AppView from "../assets/Anti-Bumper-Car3.jpg";
import HardwareSetup from "../assets/Anti-Bumper-Car4.jpg";
import FinalProduct from "../assets/Anti-Bumper-Car.jpg";
import { motion } from "framer-motion";
import { DiSwift, DiApple } from "react-icons/di";
import { SiArduino } from "react-icons/si";

const AntiBumperCar = () => {
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
        <h1>Anti-Bumper Car</h1>
        <a
          href="https://devpost.com/software/anti-bumper-car-a-collision-avoidance-system"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: "1rem" }}
        >
          <motion.button
            style={{ border: "1px #fcbc66 solid", color: theme.syntax }}
            whileHover={{ scale: 1.1 }}
          >
            See Devpost
          </motion.button>
        </a>
        <a
          href="https://github.com/ryunkim00/AntiBumperCar"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button
            style={{ border: "1px #fcbc66 solid", color: theme.syntax }}
            whileHover={{ scale: 1.1 }}
          >
            Repo
          </motion.button>
        </a>
        <p style={{ marginTop: "3rem" }}>
          Anti-Bumper Car is an AR-guided collision avoidance system that my
          friends and I prototyped for Hack the 6ix 2019. We wanted to
          demonstrate the potential for AR technology in the self-driving space.
        </p>
        <h2>How We Built It + My Contributions</h2>
        <hr />
        <div className="tools-container">
          <DiSwift size="3rem" title="Swift" />
          <DiApple size="2.5rem" title="Apple's ARKit" />
          <SiArduino size="3rem" title="Arduino" />
        </div>
        <hr style={{ marginBottom: "1.5rem" }} />
        <p>
          Using Swift and ARKit, we built an image-detecting app which was
          uploaded to an iOS device with a built-in LiDAR sensor. The app was
          used to recognize a principal vehicle, get its position and velocity,
          and send data corresponding to a certain driving mode to an HTTP
          endpoint on Autocode. This data was then parsed using a Python script
          and sent to an Arduino control board for actuating the motors of the
          autonomous vehicle.
        </p>
        <h2>Image Gallery</h2>
        <ImageGallery items={images} />
      </div>
      <NavFooter
        next="/yelpcamp"
        nextName="YelpCamp"
        previous="/masked-captions"
        previousName="Masked Captions"
      />
      <LogoAndThemeToggle />
    </motion.div>
  );
};

export default AntiBumperCar;
