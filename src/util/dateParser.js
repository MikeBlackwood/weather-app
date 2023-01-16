const converTime = (dateString) => {
  let options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const date = new Date(dateString);
  const time = date.toLocaleDateString("en-US", options).split(", ")[1];
  return time;
};

export default converTime;
