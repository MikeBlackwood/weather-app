import { converTime } from "../util/dateParser";

const WeatherDetailRow = ({ weather }) => {
  const weatherInfo = weather.weather[0];
  const main = weather.main;
  const date = converTime(weather.dt_txt);
  return (
    <div
      className="flex flex-row justify-evenly text-center h-auto"
      key={weather.id}
    >
      <div className="flex-1">
        <p>{date}</p>
      </div>
      <div className="flex-1">
        <p>{weatherInfo.description}</p>
      </div>
      <div className="flex-1">
        <p>
          {Math.round(main.temp_max)} <span>&#176;</span> F
        </p>
      </div>
    </div>
  );
};
export default WeatherDetailRow;
