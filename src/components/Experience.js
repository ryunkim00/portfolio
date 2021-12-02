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
import CarrotLogo from "../assets/Carrot-Logo.png";
import CarrotCommunity from "../assets/Carrot-Community.png";
import HTSLogo from "../assets/HTS-Logo.png";

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
            accumulated 22 months of work experience in which I've made
            meaningful and impactful contributions to various tech companies in
            the digital health space and beyond. Specific roles and
            contributions are described below.
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
        id="6"
        header={() => <h3>Full Stack Engineer Intern</h3>}
        style={styles.card}
      >
        <hr />
        <p style={styles.generalInfo}>
          <img
            src={CarrotLogo}
            alt="Carrot Inc. Logo"
            style={styles.companyLogo}
          />
          Carrot Inc. | 📅 Sep 2021 – Current | 🛠️{" "}
          <span className="tool">TypeScript</span>
          <span className="tool">Node.js + Express</span>
          <span className="tool">Postgres</span>
          <span className="tool">DBeaver</span>
          <span className="tool">Postman</span>
          <span className="tool">AWS via Terraform</span>
          <span className="tool">React</span>
          <span className="tool">Git</span>
          <span className="tool">Jira</span>
          <span className="tool">Google Cloud</span>
        </p>
        <hr />
        <p>
          Carrot Inc. at its core provides a smoking cessation solution through
          its main product{" "}
          <a
            href={"https://pivot.co/"}
            target="_blank"
            rel="noreferrer"
            style={{ color: theme.syntax }}
            title="Click to learn more about this product"
          >
            Pivot
          </a>{" "}
          which combines software, breath sensors, human coaching, and
          behavioral science to help people quit smoking through a revolutionary
          quit program. Pivot not only benefits individuals whose lives are
          often transformed from quitting but businesses which lose around
          $8,000 per person who smokes annually to excess healthcare costs and
          lost productivity.
        </p>
        <p>
          I had the pleasure of working in the company's full stack engineering
          team developing in-demand features for internal tools, such as Coach
          Portal used by coaches to manage their clients, managing Carrot's
          AWS-hosted infrastructure via Terraform, and leaving behind a
          revenue-generating legacy by fully implementing a streamlined
          re-enrollment flow with automatic sensor renewal. On top of the
          technical work, I was mentored by seasoned software engineers on the
          team, learning everything from best coding practices to life advice. I
          am grateful for the opportunity to work on tech that empowers people
          to be the best version of themselves as shown by a continuous stream
          of testimonies from ex-smokers whose lives have been changed for the
          better.
        </p>
        <div style={{ display: width > breakpoint.lg ? "flex" : "block" }}>
          <img
            src={CarrotCommunity}
            alt="Carrot Inc. - Pivot Community"
            style={{
              width: width > breakpoint.lg ? "40%" : "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
          <ul>
            <li>
              Designed and implemented a streamlined re-enrollment flow with
              automatic sensor renewal for improved UX and retention; developed
              a sensor renewal calculator, relevant services, DAOs, entities,
              and endpoints in TypeScript and Express; performed Postgres schema
              migrations; and ensured functionality across web, email, and
              in-app channels
            </li>
            <li>
              Automated running scripts for updating tracking sheets by defining
              Amazon ECS task definitions and CloudWatch cron jobs via Terraform
              and a Google Cloud service account reducing overhead for this
              process by 93.3%
            </li>
            <li>
              Remodelled coach backfilling script in internal ETL framework to
              follow separation of concerns and replaced Amazon Cognito
              dependencies with real-time DB ones to address scalability
              concerns and greatly increase throughput
            </li>
            <li>
              Shipped out features including those for displaying any community
              activity by a user for an internal web tool built with React used
              by coaches to manage their clients; received positive feedback
              from coaches
            </li>
            <li>
              Led Node.js backend i18n research, created documentation, and
              helped devise a road plan for upcoming expansion
            </li>
          </ul>
        </div>
      </CollapsibleCard>
      <CollapsibleCard
        id="5"
        header={() => <h3>Web & Mobile Developer</h3>}
        style={styles.card}
      >
        <hr />
        <p style={styles.generalInfo}>
          <img
            src={AWLogo}
            alt="Audioworks Technologies Logo"
            style={styles.companyLogo}
          />
          Audioworks Techologies | 📅 Jan – Jun 2021 | 🛠️{" "}
          <span className="tool">React Native</span>
          <span className="tool">Expo</span>
          <span className="tool">React</span>
          <span className="tool">Node.js + Express</span>
          <span className="tool">Azure Cosmos DB</span>
          <span className="tool">Postman</span>
          <span className="tool">Git</span>
          <span className="tool">Jira</span>
        </p>
        <hr />
        <p>
          Audioworks Technologies strives to create software to inspire and
          empower a young generation of artists. Their main product in
          development SoundsUnite is a one-stop solution for all aspiring
          musicians. It includes a built-in digital audio workstation, courses
          on various topics authored by professionals in the field, and social
          features for connecting with fellow musicians and growing their
          following/network.
        </p>
        <p>
          I worked in a small, agile team to develop this cross-platform music
          app from the ground up focusing on social features including instant
          messaging, comment threads, and push notifications.
        </p>
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
        <ul>
          <li>
            Proposed and implemented robust Reddit-style comment threads and
            server-side push notification handling throughout the app to
            increase user engagement and retention
          </li>
          <li>
            Developed REST APIs for various resources and implemented Redis
            caching to improve efficiency by 82.9%
          </li>
          <li>
            Transformed Figma designs into responsive UI for the mobile app and
            staging site deployed to an NGINX server
          </li>
          <li>
            Applied agile project management methodology by creating and
            tracking epics, stories, and tasks on Jira; participated in biweekly
            scrum calls and a design audit at the end of each two-week sprint;
            opened and reviewed pull requests on GitHub
          </li>
          <li>Performed live demos of new features to stakeholders</li>
        </ul>
      </CollapsibleCard>
      <CollapsibleCard
        id="4"
        header={() => <h3>Software Developer</h3>}
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
          Mensante Corportation strives to make mental health services,
          including assessments, diagnoses, prescriptions and counselling more
          accessible to the working public through their website
          FeelingBetterNow.
        </p>
        <p>
          I took on this part-time role because mental health is an area I care
          about and advocate for. I worked remotely with an international team
          of developers working on major frontend and backend features.
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
              Integrated Chart.js to provide users with a graphical widget for
              showing disorders and scores from past assessments, and i18next to
              add support for multiple languages and reach a broader audience
            </li>
          </ul>
        </div>
      </CollapsibleCard>
      <CollapsibleCard
        id="3"
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
          <li>
            Developed automated test scripts in Java using the BDD framework
            Cucumber and Gherkin to ensure pages were bug-free
          </li>
        </ul>
      </CollapsibleCard>
      <CollapsibleCard
        id="2"
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
          <li>
            Engaged in detailed code reviews and defined AC with the developer;
            tested for edge cases
          </li>
        </ul>
      </CollapsibleCard>
      <CollapsibleCard
        id="1"
        header={() => <h3>UI Designer</h3>}
        style={styles.card}
      >
        <hr />
        <p style={styles.generalInfo}>
          <img
            src={HTSLogo}
            alt="HTS Engineering Logo"
            style={styles.companyLogo}
          />
          HTS Engineering | 📅 Jan – Apr 2019 | 🛠️{" "}
          <span className="tool">SketchUp</span>
          <span className="tool">AutoCAD</span>
          <span className="tool">Visio</span>
          <span className="tool">Compass (Industry-Specific)</span>
        </p>
        <hr />
        <ul>
          <li>
            Produced graphical components used in project-specific UI for HVAC
            operators from engineered shop drawings of duct systems and AutoCAD
            floor plans; converted these floor plans into 3-D models using
            SketchUp
          </li>
          <li>
            Programmed direct digital control systems for actuating HVAC systems
            based on custom sequences of operation using a plugin-in analog and
            digital logic stencil on Visio
          </li>
        </ul>
      </CollapsibleCard>
    </div>
  );
};

export default Experience;
