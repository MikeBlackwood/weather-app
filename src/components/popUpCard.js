const PopUpCard = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: props.isVisible ? "block" : "none",
      }}
    >
      <div>
        <h1>{props.errorMessage}</h1>
        <button onClick={() => props.reset()}>Dismiss</button>
      </div>
    </div>
  );
};

export default PopUpCard;
