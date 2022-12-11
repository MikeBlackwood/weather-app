const WeatherDetailRow = ({ weather }) => {
  console.log(weather);
  const weatherInfo = weather.weather[0];
  const main = weather.main;
  const time = weather.dt_txt.split(" ")[1];
  return (
    <div
      className="flex flex-row justify-evenly text-center h-auto"
      key={weather.dt}
    >
      <div className="flex-1">
        <p> {time}</p>
      </div>
      <div className="flex-1">
        <p> {weatherInfo.description}</p>
      </div>
      <div className="flex-1">
        <p> {main.feels_like} F</p>
      </div>
      <div className="flex-1">
        <p>{main.temp_min}</p>
      </div>
      <div className="flex-1">
        <p>{main.temp_max}</p>
      </div>
    </div>
  );
};
export default WeatherDetailRow;
