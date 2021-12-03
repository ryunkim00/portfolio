import { useContext, useEffect } from "react";
import Background from "../assets/Background.mp4";
import { ThemeContext } from "../contexts/ThemeContext";
import { FiMenu, FiX } from "react-icons/fi";
import { NavContext } from "../contexts/NavContext";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Home = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { navVisible, setNavVisible } = useContext(NavContext);
  const theme = isLightTheme ? light : dark;
  const { windowDimensions, breakpoint } = useWindowDimensions();
  const { width } = windowDimensions;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div style={{ height: "100vh", color: theme.syntax }}>
      <video
        autoPlay
        loop
        muted
        className="shadow"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={Background} type="video/mp4" />
      </video>
      <h1
        className="centered"
        style={{
          maxWidth: "80%",
          padding: 20,
          backgroundColor: theme.bg,
        }}
      >
        Ryun Kim's Portfolio
      </h1>
      <div
        onClick={() => setNavVisible(!navVisible)}
        style={{
          position: "fixed",
          right: width > breakpoint.lg ? "1rem" : "0.5rem",
          top: width > breakpoint.lg ? "1rem" : "0.5rem",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        {navVisible ? (
          <FiX size="1.5rem" color="#fff" />
        ) : (
          <FiMenu size="1.5rem" />
        )}
      </div>
    </div>
  );
};

export default Home;
