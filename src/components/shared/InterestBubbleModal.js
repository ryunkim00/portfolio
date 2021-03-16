const InterestBubbleModal = ({ size, title }) => {
  const offset = `${parseInt(size) + 0.25}rem`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "#fff",
        position: "relative",
        bottom: offset,
      }}
    >
      <p style={{ padding: "0 1rem" }}>{title}</p>
    </div>
  );
};

export default InterestBubbleModal;
