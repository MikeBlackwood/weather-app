import WeatherDetailRow from "./WeatherDetailRow";
const WeatherDetails = (props) => {
  const renderList = props.weatherList.map((weather) => {
    return <WeatherDetailRow weather={weather} />;
  });

  return (
    <div className="w-full h-full block">
      <div className="flex flex-row justify-evenly text-center">
        <div className="flex-1">
          <p className="">Time</p>
        </div>
        <div className="flex-1">
          <p className="">Description</p>
        </div>
        <div className="flex-1">
          <p>Feels like</p>
        </div>
        <div className="flex-1">
          <p>Min temprature</p>
        </div>
        <div className="flex-1">
          <p>Max temprature</p>
        </div>
      </div>
      <div className="w-auto">{renderList}</div>
    </div>
  );
};

export default WeatherDetails;
