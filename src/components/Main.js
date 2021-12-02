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
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
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
