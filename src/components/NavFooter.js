import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const NavFooter = ({ previous, next, previousName, nextName }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "12rem",
        backgroundColor: theme.primary,
        color: theme.syntax,
      }}
    >
      {previous && (
        <Link
          to={previous}
          style={{ color: theme.syntax, textDecoration: "none" }}
        >
          <motion.div
            style={{ textAlign: "center" }}
            whileHover={{ y: "-1rem" }}
          >
            <h4>Previous Project</h4>
            <FiArrowLeftCircle size="1.5rem" />
          </motion.div>
        </Link>
      )}
      {next && (
        <Link to={next} style={{ color: theme.syntax, textDecoration: "none" }}>
          <motion.div style={{ textAlign: "center" }} whileHover={{ y: -10 }}>
            <h4>{nextName}</h4>
            <FiArrowRightCircle size="1.5rem" />
          </motion.div>
        </Link>
      )}
    </div>
  );
};

export default NavFooter;
