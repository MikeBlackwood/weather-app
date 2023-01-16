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

const getDayOfTheWeek = (dateString) => {
  const integerToDay = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  const date = new Date(dateString);
  return `${integerToDay[date.getDay()]}`;
};
export { converTime, getDayOfTheWeek };
