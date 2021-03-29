import Home from "./Home";
import Experience from "./Experience";
import NavModal from "./NavModal";
import Projects from "./Projects";
import Interests from "./Interests";
import Contact from "./Contact";
import { motion } from "framer-motion";
import LogoAndThemeToggle from "./LogoAndThemeToggle";

const Main = () => {
  return (
    <motion.div exit={{ x: "-100vw" }} transition={{ ease: "easeInOut" }}>
      <Home />
      <Experience />
      <Projects />
      <Interests />
      <Contact />
      <LogoAndThemeToggle />
      <NavModal />
    </motion.div>
  );
};

export default Main;
