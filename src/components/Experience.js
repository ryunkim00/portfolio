import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ReactComponent as ExperienceIllustration } from "../assets/Experience-Illustration.svg";
import CollapsibleCard from "./shared/CollapsibleCard";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SoundsUniteMobile from "../assets/SU-Mobile.png";
import SoundsUniteDesktop from "../assets/SU-Desktop.png";
import AWLogo from "../assets/AW-Logo.png";
import SSnCLogo from "../assets/SS&C-Logo.png";
import MSLogo from "../assets/MS-Logo.png";
import FBNLogo from "../assets/FBN-Logo.png";
import FBNLandingPage from "../assets/FBN-Landing-Page.png";

const Experience = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { windowDimensions, breakpoint } = useWindowDimensions();
  const { width } = windowDimensions;

  const styles = {
    container: {
      paddingTop: "5rem",
      backgroundColor: theme.bg,
      color: theme.syntax,
    },
    header: {
      display: "flex",
      flexDirection: width > breakpoint.lg ? "row" : "column",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "5rem",
    },
    card: {
      marginBottom: "3rem",
    },
    generalInfo: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      lineHeight: "2rem",
    },
    companyLogo: {
      width: "1.5rem",
      height: "1.5rem",
      objectFit: "contain",
      marginRight: "0.5rem",
      position: "relative",
      bottom: "0.1rem",
    },
  };

  return (
    <div id="Experience" className="container" style={styles.container}>
      <div style={styles.header}>
        <div
          style={{
            width: width > breakpoint.lg ? "50%" : "100%",
            marginBottom: "2rem",
          }}
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
          style={{
            width: width > breakpoint.lg ? "30rem" : "18rem",
            height: "auto",
          }}
        />
      </div>
      <CollapsibleCard
        id="4"
        header={() => <h3>Frontend Software Engineer</h3>}
        style={styles.card}
      >
        <hr />
        <p style={styles.generalInfo}>
          <img
            src={FBNLogo}
            alt="Mensante (Feeling Better Now) Logo"
            style={styles.companyLogo}
          />
          Mensante Corporation | 📅 Mar 2021 – Current | 🛠️
          <span className="tool">React</span>
          <span className="tool">React Native</span>
          <span className="tool">Expo</span>
          <span className="tool">Git</span>
        </p>
        <hr />
        <p>
          Developed frontend features for an online platform offering mental
          health assessment, diagnosis, prescription, and counselling services
          for employees. View the staging site here:{" "}
          <a
            href="https://fbn3staging.ca/"
            target="_blank"
            rel="noreferrer"
            style={{ color: theme.syntax }}
          >
            fbn3staging.ca
          </a>
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: width > breakpoint.lg ? "row" : "column",
            marginBottom: "2rem",
          }}
        >
          <img
            src={FBNLandingPage}
            alt="Feeling Better Now landing page"
            style={{
              flex: 1,
              width: width > breakpoint.lg ? "50%" : "100%",
              margin: width > breakpoint.lg ? 0 : "1rem 0",
              borderRadius: 10,
            }}
          />
          <ul style={{ flex: 1 }}>
            <li>
              Cutomized a <strong>Chart.js</strong> widget in{" "}
              <strong>React</strong> for displaying a user's mental health
              assessment history by parsing and filtering data to display in
              tooltips and labels; adding resize and pan functionalities; and
              adding navigation click handler events
            </li>
            <li>
              Implemented and integrated push notification services using{" "}
              <strong>React Native</strong> and <strong>Expo</strong>
            </li>
          </ul>
        </div>
      </CollapsibleCard>
      <CollapsibleCard
        id="3"
        header={() => <h3>Full Stack Web Application Developer</h3>}
        style={styles.card}
      >
        <hr />
        <p style={styles.generalInfo}>
          <img
            src={AWLogo}
            alt="Audioworks Technologies Logo"
            style={styles.companyLogo}
          />
          Audioworks Techologies | 📅 Jan 2021 – Current | 🛠️{" "}
          <span className="tool">React Native</span>
          <span className="tool">React</span>
          <span className="tool">Expo</span>
          <span className="tool">Postman</span>
          <span className="tool">Git</span>
        </p>
        <hr />
        <p>
          Developed a cross-platform music-education, -creation, and
          -collaboration app called SoundsUnite from scratch in a small, agile
          startup environment/team
        </p>
        <ul>
          <li>
            Implemented mobile and web UI's based on Figma designs using{" "}
            <strong>React Native</strong>
          </li>
          <li>
            Designed, implemented, and integrated REST APIs and managed
            respective collections for backend resources using{" "}
            <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
            <strong>MongoDB</strong>, hosted on Microsoft Azure Cosmos DB;
            tested and troubleshot various endpoints of the APIs based on server
            responses using <strong>Postman</strong>
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
            using React Native and deployed it to an Nginx server using Docker
            and Kubernetes
          </li>
          <li>
            Applied agile project management methodology by creating and
            tracking epics, stories, and tasks on Jira; participated in biweekly
            scrum calls and a design audit at the end of each two-week sprint
          </li>
          <li>Performed live demos of new features to stakeholders</li>
        </ul>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src={SoundsUniteMobile}
            alt="SoundsUnite mobile"
            style={{ width: "40%", height: "auto", objectFit: "contain" }}
          />
          <img
            src={SoundsUniteDesktop}
            alt="SoundsUnite desktop"
            style={{ width: "50%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </CollapsibleCard>
      <CollapsibleCard
        id="2"
        header={() => <h3>Full Stack Developer</h3>}
        style={styles.card}
      >
        <hr />
        <p style={styles.generalInfo}>
          <img
            src={SSnCLogo}
            alt="SS&C Technologies Logo"
            style={styles.companyLogo}
          />
          SS&C Techologies | 📅 May – Aug. 2020 | 🛠️{" "}
          <span className="tool">Java</span>
          <span className="tool">SonarQube</span>
          <span className="tool">Eclipse</span>
          <span className="tool">Git</span>
        </p>
        <hr />
        <ul>
          <li>
            Integrated <strong>SonarQube</strong> analysis into a build pipeline
            to detect any bugs, vulnerabilities and code smells, ensuring that
            code entering the hands of clients were free of any defects
          </li>
          <li>
            Resolved code smells and security vulnerabilities using best, up to
            date coding practices, applying optimal design principles and
            patterns
          </li>
          <li>
            Developed automated test scripts that crawled through various web
            pages on a brokerage management software, inputting and validating
            data entry and search query results using a BDD framework called
            Cucumber in <strong>Java</strong>
          </li>
        </ul>
      </CollapsibleCard>
      <CollapsibleCard
        id="1"
        header={() => <h3>Software Engineer in Test</h3>}
        style={styles.card}
      >
        <hr />
        <p style={styles.generalInfo}>
          <img src={MSLogo} alt="Maplesoft Logo" style={styles.companyLogo} />
          Maplesoft | 📅 Sep. – Dec. 2019 | 🛠️{" "}
          <span className="tool">Typescript</span>
          <span className="tool">Jest</span>
          <span className="tool">Puppeteer</span>
        </p>
        <hr />
        <ul>
          <li>
            Developed comprehensive unit and visual integration tests using{" "}
            <strong>Puppeteer</strong> and a JS testing framework called{" "}
            <strong>Jest</strong> to debug custom web components built in
            Stencil used in the company's modelling and simulation software
            MapleSim
          </li>
          <li>
            Prevented bugs from entering production by running a test suite
            using custom npm run scripts, undergoing review cycles for the test
            files and submitting them on a VCS called Perforce
          </li>
        </ul>
      </CollapsibleCard>
    </div>
  );
};

export default Experience;
