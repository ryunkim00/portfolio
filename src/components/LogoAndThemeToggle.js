import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import DeerLogoLight from "../assets/Deer-Logo-Light.png";
import DeerLogoDark from "../assets/Deer-Logo-Dark.png";

const LogoAndThemeToggle = () => {
  const { isLightTheme, light, dark, setTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div style={{ color: theme.syntax }}>
      <div
        onClick={() => setTheme({ isLightTheme: !isLightTheme, light, dark })}
        style={{
          position: "fixed",
          left: "1rem",
          bottom: "1rem",
          cursor: "pointer",
        }}
      >
        {isLightTheme ? <FiMoon size="1.5rem" /> : <FiSun size="1.5rem" />}
      </div>
      <a
        href="/portfolio"
        style={{
          position: "fixed",
          left: "1rem",
          top: "1rem",
          outline: "none",
        }}
      >
        <img
          src={isLightTheme ? DeerLogoLight : DeerLogoDark}
          alt="Deer logo"
          style={{ width: "2.5rem" }}
        />
      </a>
    </div>
  );
};

export default LogoAndThemeToggle;
