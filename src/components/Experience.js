import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ReactComponent as ExperienceIllustration } from "../assets/Experience-Illustration.svg";
import CollapsibleCard from "./shared/CollapsibleCard";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SoundsUniteMobile from "../assets/SU-Mobile.png";
import SoundsUniteDesktop from "../assets/SU-Desktop.png";

const Experience = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { width } = useWindowDimensions();

  const styles = {
    card: {
      marginBottom: "3rem",
    },
  };

  return (
    <div
      id="Experience"
      className="container"
      style={{
        backgroundColor: theme.bg,
        color: theme.syntax,
        paddingTop: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: width > 992 ? "row" : "column",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5rem",
        }}
      >
        <div
          style={{ width: width > 992 ? "50%" : "100%", marginBottom: "2rem" }}
        >
          <h2>Experience</h2>
          <p style={{ paddingRight: "2rem" }}>
            Through University of Waterloo's cooperative education, I have
            accumulated 16 months of work experience at various software
            companies, ranging from those in fintech to the music industry.
            Specific roles and contributions are described below.
          </p>
        </div>
        <ExperienceIllustration
          style={{ width: width > 992 ? "30rem" : "18rem", height: "auto" }}
        />
      </div>
      <CollapsibleCard
        id="1"
        header={() => <h3>Full Stack Web Application Developer</h3>}
        style={styles.card}
      >
        <p style={{ lineHeight: "2rem" }}>
          📍 Audioworks Techologies | ⏱️ Jan. 2021 – Current | 🛠️{" "}
          <span className="tool">React Native</span>
          <span className="tool">React JS</span>
          <span className="tool">Expo</span>
          <span className="tool">Git</span>
        </p>
        <p>
          Built a cross-platform music-education, -creation, and -collaboration
          app called SoundsUnite from the ground up in a small, agile startup
          environment/team
        </p>
        <ul>
          <li>
            Implemented mobile and web UI's based on Figma design using{" "}
            <strong>React Native</strong>
          </li>
          <li>
            Designed and implemented REST APIs and managed respective
            collections for resources using <strong>Node.js</strong>,{" "}
            <strong>Express</strong>, and <strong>MongoDB</strong>, hosted on
            Microsoft Azure Cosmos DB
          </li>
          <li>
            Fully implemented the company website{" "}
            <a
              href="https://app.audioworks.io/"
              target="_blank"
              rel="noreferrer"
              style={{ color: theme.syntax }}
            >
              app.audioworks.io
            </a>{" "}
            using React Native web build and deployed it to an Nginx server
            using Docker and Kubernetes
          </li>
        </ul>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src={SoundsUniteMobile}
            style={{ width: "40%", height: "auto", objectFit: "contain" }}
          />
          <img
            src={SoundsUniteDesktop}
            style={{ width: "50%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </CollapsibleCard>
      <CollapsibleCard
        id="2"
        header={() => <h3>Full Stack Developer</h3>}
        style={styles.card}
      >
        <p style={{ lineHeight: "2rem" }}>
          📍 SS&C Techologies | ⏱️ May – Aug. 2020 | 🛠️{" "}
          <span className="tool">Java</span>
          <span className="tool">SonarQube</span>
          <span className="tool">Git</span>
        </p>
      </CollapsibleCard>
      <CollapsibleCard
        id="3"
        header={() => <h3>Software Engineer in Test</h3>}
        style={styles.card}
      >
        <p style={{ lineHeight: "2rem" }}>
          📍 Maplesoft | ⏱️ Sep. – Dec. 2019 | 🛠️{" "}
          <span className="tool">Typescript</span>
          <span className="tool">Jest</span>
          <span className="tool">Puppeteer</span>
        </p>
      </CollapsibleCard>
    </div>
  );
};

export default Experience;
