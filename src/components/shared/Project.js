import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link } from "react-router-dom";

const imageVariants = {
  hover: {
    y: -10,
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};
const buttonVariants = {
  hover: {
    scale: 1.1,
  },
};

const Project = ({
  title,
  description,
  imgSrc,
  textFirst,
  destination,
  style,
}) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { width } = useWindowDimensions();
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    text: {
      paddingRight: width > 992 ? textFirst && "8rem" : 0,
      paddingLeft: width > 992 ? !textFirst && "8rem" : 0,
      textAlign: width > 992 ? (textFirst ? "left" : "right") : "center",
      lineHeight: width > 992 && "3rem",
    },
    image: {
      width: width > 992 ? "25rem" : "15rem",
      height: width > 992 ? "25rem" : "15rem",
      maxWidth: "25rem",
      maxHeight: "25rem",
      borderRadius: 10,
      objectFit: "cover",
    },
    button: { border: "0.1rem #fcbc66 solid", color: theme.syntax },
  };

  return (
    <div style={{ display: "flex", marginBottom: "6rem" }}>
      {textFirst ? (
        <div
          style={{
            ...styles.container,
            flexDirection: width > 992 ? "row" : "column-reverse",
          }}
        >
          <div style={styles.text}>
            <h3>
              <span style={{ borderBottom: "0.5rem #fcbc66 solid" }}>
                {title}
              </span>
            </h3>
            <p>{description}</p>
            <Link to={destination ? destination : "/"}>
              <motion.button
                style={styles.button}
                variants={buttonVariants}
                whileHover="hover"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
          <motion.img
            src={imgSrc}
            alt="Project thumbnail"
            className="shadow"
            style={styles.image}
            variants={imageVariants}
            whileHover="hover"
          />
        </div>
      ) : (
        <div
          style={{
            ...styles.container,
            flexDirection: width > 992 ? "row" : "column",
          }}
        >
          <motion.img
            src={imgSrc}
            alt="Project thumbnail"
            className="shadow"
            style={styles.image}
            variants={imageVariants}
            whileHover="hover"
          />
          <div style={styles.text}>
            <h3>
              <span style={{ borderBottom: "0.5rem #fcbc66 solid" }}>
                {title}
              </span>
            </h3>
            <p>{description}</p>
            <Link to={destination ? destination : "/"}>
              <motion.button
                style={styles.button}
                variants={buttonVariants}
                whileHover="hover"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
