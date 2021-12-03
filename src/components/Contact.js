import Profile from "../assets/Profile.png";
import {
  GrMail,
  GrLinkedinOption,
  GrLinkedin,
  GrGithub,
  GrYoutube,
} from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import Resume from "../assets/Ryun_Kim_Resume.pdf";

const buttonVariants = {
  hover: {
    scale: 1.1,
  },
};

const Contact = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { windowDimensions, breakpoint } = useWindowDimensions();
  const { width } = windowDimensions;

  const styles = {
    contactLink: {
      display: "flex",
      alignItems: "center",
      color: theme.syntax,
      textDecoration: "none",
    },
    contactIcon: {
      marginRight: "0.3rem",
      padding: "0.4rem",
      borderRadius: "50%",
      backgroundColor: theme.tertiary,
    },
    footerLink: {
      marginLeft: "1.5rem",
      color: theme.syntax,
    },
  };

  return (
    <>
      <div
        id="Contact"
        style={{
          display: "flex",
          flexDirection: width > breakpoint.lg ? "row" : "column",
          backgroundColor: theme.bg,
          color: theme.syntax,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: width > breakpoint.lg ? "row" : "column",
            backgroundColor: theme.secondary,
          }}
        >
          <img
            src={Profile}
            alt="Profile"
            title="Nice to meet you!"
            style={{
              width: width > breakpoint.lg ? "50%" : "100%",
              height: width > breakpoint.lg ? "auto" : "50vh",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              padding: `4rem ${width > breakpoint.lg ? "3rem" : "10vmax"}`,
            }}
          >
            <h2>About</h2>
            <p>
              Hello, my name is <strong>Ryun Kim</strong>. Thank you for
              visiting my website. I am a dedicated third-year{" "}
              <strong>engineering student</strong> at the{" "}
              <strong>University of Waterloo</strong> and an{" "}
              <strong>aspiring software engineer</strong> with{" "}
              <strong>22 months of industry experience</strong> under my belt. I
              have a passion for finding creative, robust solutions to real-life
              problems and making a meaningful impact on products I believe in.
            </p>
            <p>
              I am actively seeking <strong>internship</strong> opportunities
              for <strong>Summer 2022</strong>.
            </p>
            <a href={Resume} target="_blank" rel="noreferrer">
              <motion.button
                style={{
                  border: "0.1rem #fcbc66 solid",
                  color: theme.syntax,
                  marginTop: "1rem",
                }}
                variants={buttonVariants}
                whileHover="hover"
              >
                View Resume
              </motion.button>
            </a>
          </div>
        </div>
        <div
          style={{
            padding: `4rem ${width > breakpoint.lg ? "3rem" : "10vmax"}`,
            backgroundColor: theme.primary,
          }}
        >
          <h2>Contact</h2>
          <p style={{ marginBottom: "2rem" }}>
            If you see a good fit for a role in your company, please don't
            hesitate to reach out through any of the methods below:
          </p>
          <a
            href="mailto:ryun.kim@uwaterloo.ca"
            className="contact-link"
            style={{ ...styles.contactLink, marginBottom: "0.8rem" }}
          >
            <GrMail style={styles.contactIcon} /> ryun.kim@uwaterloo.ca
          </a>
          <a
            href="https://www.linkedin.com/in/ryun-kim/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            style={styles.contactLink}
          >
            <GrLinkedinOption style={styles.contactIcon} />{" "}
            linkedin.com/in/ryun-kim
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "4rem",
          backgroundColor: theme.tertiary,
          color: theme.syntax,
        }}
      >
        <p style={{ marginLeft: "10vmax" }}>
          Made with <FaHeart style={{ position: "relative", top: 2 }} /> by Ryun
          Kim © 2021
        </p>
        <div style={{ marginRight: "10vmax" }}>
          <a
            href="mailto:ryun.kim@uwaterloo.ca"
            title="Send me an email"
            style={styles.footerLink}
          >
            <GrMail size="1.5rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/ryun-kim/"
            target="_blank"
            rel="noreferrer"
            title="Visit my LinkedIn profile"
            style={styles.footerLink}
          >
            <GrLinkedin size="1.4rem" />
          </a>
          <a
            href="https://github.com/ryunkim00"
            target="_blank"
            rel="noreferrer"
            title="See my GitHub repos"
            style={styles.footerLink}
          >
            <GrGithub size="1.5rem" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC3P-TOvlwIfGhQiUumYW5Xw"
            target="_blank"
            rel="noreferrer"
            title="Check out my YouTube music channel"
            style={styles.footerLink}
          >
            <GrYoutube size="1.5rem" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
