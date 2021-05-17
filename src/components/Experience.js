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
            accumulated 16 months of work experience in which I've made
            meaningful and impactful contributions to various software
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
        header={() => (
          <h3>
            {width > breakpoint.lg
              ? "Full Stack Web & Mobile Application Developer"
              : "Full Stack Developer"}
          </h3>
        )}
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
          <span className="tool">React</span>
          <span className="tool">React Native</span>
          <span className="tool">Expo</span>
          <span className="tool">Node.js</span>
          <span className="tool">Express</span>
          <span className="tool">Azure Cosmos DB</span>
          <span className="tool">Postman</span>
        </p>
        <hr />
        <p>
          Developed a cross-platform music app from the ground up focusing on
          social features including instant messaging, comment threads, and push
          notifications in a small, agile start-up team
        </p>
        <ul>
          <li>
            Developed REST APIs for various resources and implemented Redis
            caching to improve efficiency by 82.9%
          </li>
          <li>
            Proposed and developed robust Reddit-style comment threads and
            server-side push notification handling throughout the app to
            increase user engagement and retention
          </li>
          <li>
            Transformed Figma designs into responsive UI for the mobile app and
            staging site deployed on an Nginx server
          </li>
          <li>
            Applied agile project management methodology by creating and
            tracking epics, stories, and tasks on Jira; participated in biweekly
            scrum calls and a design audit at the end of each two-week sprint;
            made and reviewed pull requests on GitHub
          </li>
          <li>Presented new features to stakeholders</li>
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
        id="3"
        header={() => <h3>Software Engineer</h3>}
        style={styles.card}
      >
        <hr />
        <p style={styles.generalInfo}>
          <img
            src={FBNLogo}
            alt="Mensante (Feeling Better Now) Logo"
            style={styles.companyLogo}
          />
          Mensante Corporation | 📅 Mar – Apr 2021 | 🛠️
          <span className="tool">React</span>
          <span className="tool">React Native</span>
          <span className="tool">Expo</span>
          <span className="tool">Chart.js</span>
          <span className="tool">i18next</span>
        </p>
        <hr />
        <p>
          Developed features for a cross-platform app that strives to make
          mental health services, including assessments, diagnoses,
          prescriptions, and counselling, more accessible to the working public.
          View staging site here:{" "}
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
              Implemented deep linking and push notifications to increase the
              number of mobile app downloads, user engagement, and relevant
              content delivery
            </li>
            <li>
              Integrated JS library and framework to provide users with a
              graphical widget for showing disorders and scores from past
              assessments, as well as support for multiple languages to reach a
              larger audience
            </li>
          </ul>
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
          SS&C Techologies | 📅 May – Aug 2020 | 🛠️{" "}
          <span className="tool">Java</span>
          <span className="tool">GitLab</span>
          <span className="tool">SonarQube</span>
          <span className="tool">Cucumber</span>
          <span className="tool">Gherkin</span>
          <span className="tool">Eclipse</span>
        </p>
        <hr />
        <ul>
          <li>
            Addressed the need for continuous inspection of code quality by
            researching and integrating a code analysis platform into the build
            of a brokerage management software resulting in a 70.4% reduction of
            defects and vulnerabilities
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
          Maplesoft | 📅 Sep – Dec 2019 | 🛠️{" "}
          <span className="tool">Typescript</span>
          <span className="tool">Jest</span>
          <span className="tool">Puppeteer</span>
          <span className="tool">Perforce VCS</span>
        </p>
        <hr />
        <ul>
          <li>
            Developed comprehensive unit and visual integration tests to debug
            custom web components used in the company’s modelling and simulation
            software
          </li>
        </ul>
      </CollapsibleCard>
    </div>
  );
};

export default Experience;
