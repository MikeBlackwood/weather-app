import { useState } from "react";
import { getDayOfTheWeek } from "../util/dateParser";
import WeatherDetails from "./WeatherDetails";
const WeatherCard = ({ data, details }) => {
  const [isVisible, setIsVisible] = useState(false);
  const weatherInfo = data.weather[0];

  const curDate = getDayOfTheWeek(data.dt_txt);
  return (
    <div className="flex-1 align-middle mt-auto mb-auto" key={data.dt}>
      <div
        className=" lg:mt-0 sm:mt-5 bg-gray w-11/12 ml-auto mr-auto rounded-lg text-center text-white"
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className="flex flex-row">
          <div className="flex-1 align-center justify-center">
            <h1 className="lg:text-4xl sm:text-3xl">
              {Math.round(data.main.temp)} <span>&#176;</span> F
            </h1>
          </div>
          <div className="flex-1 lg:text-6xl sm:text-3xl">
            <span style={{ height: "50px", width: "auto" }}></span>
          </div>
        </div>
        <h1>{curDate}</h1>
        <h2>{weatherInfo.description}</h2>
        <p> Humidity: {data.main.humidity} %</p>
        <p> Wind: {data.wind.speed} mph</p>
        {isVisible ? <WeatherDetails weatherList={details} /> : <></>}
      </div>
    </div>
  );
};

export default WeatherCard;
