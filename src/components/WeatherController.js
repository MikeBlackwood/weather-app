import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import WeatherDetails from "./WeatherDetails";
import WeatherCard from "./WeatherCard";
import { GoArrowLeft } from "react-icons/go";
const WeatherController = ({ reset, location }) => {
  const { isLoading, error, data, isFetching } = useQuery(
    ["fetchWeather"],
    () =>
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${location}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        )
        .then((res) => res.data)
  );
  if (isFetching) return <div className="text-white"> fetching</div>;
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error occured</div>;

  const weatherDataSorted = parseData(data);

  const timeExpected = "12:00:00";
  const filteredData = data.list.filter((point) =>
    point.dt_txt.includes(timeExpected)
  );

  const forecastListData = filteredData.map((point) => {
    return (
      <WeatherCard
        key={point.dt}
        data={point}
        details={weatherDataSorted[point.dt_txt.split(" ")[0]]}
      />
    );
  });

  return (
    <>
      <div className="pt-5 ml-20 mr-20 text-white">
        <div className="flex" style={{ height: "10%" }}>
          <div className="flex-1">
            <button onClick={reset}>
              <span className="color-white text-lg">
                <GoArrowLeft />
              </span>
            </button>
          </div>
          <div className="flex-1">
            <h1 className="text-center"> Weather in {location} </h1>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      <div
        className="flex flex-wrap flex-col lg:h-9/10 sm:h-auto"
        style={{ height: "90%", backgroundColor: "black" }}
      >
        <div
          className=" flex sm:flex-col flex-wrap lg:flex-row justify-evenly lg:h-full sm:h-auto "
          style={{ backgroundColor: "black" }}
        >
          {forecastListData}
        </div>
      </div>
    </>
  );
};

const parseData = (data) => {
  let dateToWeatherMap = {};
  data.list.forEach((weather) => {
    let date = weather.dt_txt.split(" ");
    if (dateToWeatherMap.hasOwnProperty(date[0])) {
      dateToWeatherMap[date[0]].push(weather);
    } else {
      dateToWeatherMap[date[0]] = [weather];
    }
  });
  return dateToWeatherMap;
};

export default WeatherController;
