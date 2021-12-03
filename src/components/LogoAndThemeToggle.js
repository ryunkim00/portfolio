import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import DeerLogoLight from "../assets/Deer-Logo-Light.png";
import DeerLogoDark from "../assets/Deer-Logo-Dark.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

const LogoAndThemeToggle = () => {
  const { isLightTheme, light, dark, setTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { windowDimensions, breakpoint } = useWindowDimensions();
  const { width } = windowDimensions;

  return (
    <div style={{ color: theme.syntax }}>
      <div
        onClick={() => setTheme({ isLightTheme: !isLightTheme, light, dark })}
        style={{
          position: "fixed",
          left: width > breakpoint.lg ? "1rem" : "0.5rem",
          bottom: width > breakpoint.lg ? "1rem" : "0.5rem",
          cursor: "pointer",
        }}
      >
        {isLightTheme ? <FiMoon size="1.2rem" /> : <FiSun size="1.2rem" />}
      </div>
      <a
        href="/portfolio"
        style={{
          position: "fixed",
          left: width > breakpoint.lg ? "1rem" : "0.5rem",
          top: width > breakpoint.lg ? "1rem" : "0.5rem",
          outline: "none",
        }}
      >
        <img
          src={isLightTheme ? DeerLogoLight : DeerLogoDark}
          alt="Deer logo"
          style={{ width: "2rem" }}
        />
      </a>
    </div>
  );
};

export default LogoAndThemeToggle;
