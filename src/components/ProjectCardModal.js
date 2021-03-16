import { useState } from "react";

const ProjectCardModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: 8,
          }}
        >
          <h3
            style={{
              color: "#fff",
              padding: "0.5rem 1rem",
              backgroundColor: "rgba(0,0,0,0.8)",
              margin: 0,
            }}
          >
            Project Name
          </h3>
          <p style={{ backgroundColor: "red" }}>Some description.</p>
          <button style={{ width: "8rem" }}>Learn more</button>
        </div>
      )}
    </>
  );
};

export default ProjectCardModal;
