const PopUpCard = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.9)",
        display: props.isVisible ? "block" : "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "30vw",
          minWidth: "300px",
          minHeight: "200px",
          height: "30vh",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          backgroundColor: "rgba(255,255,255, 0.8)",
          borderRadius: "50px",
        }}
        className="text-white"
      >
        <div style={{ margin: "auto" }}>
          <h1>{props.errorMessage}</h1>
          <button onClick={() => props.reset()}>Dismiss</button>
        </div>
      </div>
    </div>
  );
};

export default PopUpCard;
