import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
  },
};
const navLinkVariants = {
  hover: {
    scale: 1.1,
    color: "#fcbc66",
    transition: {
      color: { duration: 0 },
    },
  },
};

const NavModal = () => {
  const { navVisible, setNavVisible } = useContext(NavContext);

  const styles = {
    navLink: {
      fontFamily: "Prata",
      fontSize: "2rem",
      textDecoration: "none",
      color: "#fff",
      padding: "1rem",
    },
  };

  return (
    <AnimatePresence>
      {navVisible && (
        <motion.div
          onClick={() => setNavVisible(false)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.a
            href="#Experience"
            style={styles.navLink}
            variants={navLinkVariants}
            whileHover="hover"
          >
            Experience
          </motion.a>
          <motion.a
            href="#Projects"
            style={styles.navLink}
            variants={navLinkVariants}
            whileHover="hover"
          >
            Projects
          </motion.a>
          <motion.a
            href="#Interests"
            style={styles.navLink}
            variants={navLinkVariants}
            whileHover="hover"
          >
            Interests
          </motion.a>
          <motion.a
            href="#Contact"
            style={styles.navLink}
            variants={navLinkVariants}
            whileHover="hover"
          >
            About / Contact
          </motion.a>
          <motion.a
            href="#"
            style={styles.navLink}
            variants={navLinkVariants}
            whileHover="hover"
          >
            Resume
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavModal;
