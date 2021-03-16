import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CollapsibleCard = ({ id, header, children, style }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const theme = isLightTheme ? light : dark;

  const onClick = () => {
    setIsOpen(!isOpen);
    const childrenContainer = document.getElementById(id);
    childrenContainer.classList.toggle("card-closed");
    childrenContainer.classList.toggle("card-open");
  };

  return (
    <div
      className="shadow"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.secondary,
        borderRadius: 10,
        ...style,
      }}
    >
      <div
        onClick={onClick}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "5rem",
          padding: "0 1.5rem",
          cursor: "pointer",
        }}
        title="Click to expand/collapse"
      >
        <div style={{ width: "90%" }}>{header()}</div>
        {isOpen ? (
          <FiChevronUp size="1.5rem" style={{ width: "1.5rem" }} />
        ) : (
          <FiChevronDown size="1.5rem" style={{ width: "1.5rem" }} />
        )}
      </div>
      <div id={id} className="card-closed" style={{ padding: "0 1.5rem" }}>
        {children}
      </div>
    </div>
  );
};

export default CollapsibleCard;
