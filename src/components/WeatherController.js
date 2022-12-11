import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import WeatherDetails from "./WeatherDetails";
import WeatherCard from "./WeatherCard";
import { isVisible } from "@testing-library/user-event/dist/utils";

const WeatherController = ({ reset, location }) => {
  const [dateForDetails, setDateForDetails] = useState(null);
  const { isLoading, error, data, isFetching } = useQuery(
    ["fetchWeather"],
    () =>
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${location}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        )
        .then((res) => res.data)
  );

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error occured</div>;

  const weatherDataSorted = parseData(data);

  const timeExpected = "12:00:00";
  const filteredData = data.list.filter((point) =>
    point.dt_txt.includes(timeExpected)
  );

  const getDetails = (date) => {
    setDateForDetails(date);
  };
  const forecastListData = filteredData.map((point) => {
    return <WeatherCard data={point} getDetails={getDetails} />;
  });

  return (
    <>
      <div className=" pt-5  text-white">
        <div className="flex-1">
          <button className="" onClick={reset}>
            Back
          </button>
        </div>
        <div className="flex-1 ">
          <h1 className="text-center"> Weather in {location} </h1>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="flex flex-wrap flex-row">
        <div className="flex-1 w-1/3">
          <div className="flex flex-wrap flex-col justify-evenly">
            {forecastListData}
          </div>
        </div>
        <div className="flex-2 w-2/3 text-white">
          {dateForDetails ? (
            <WeatherDetails
              date={dateForDetails}
              weatherList={weatherDataSorted[dateForDetails]}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

const parseData = (data) => {
  let dateToWeatherMap = {};
  const mapped = data.list.forEach((weather) => {
    let date = weather.dt_txt.split(" ");

    if (dateToWeatherMap.hasOwnProperty(date[0])) {
      dateToWeatherMap[date[0]].push(weather);
    } else {
      dateToWeatherMap[date[0]] = [weather];
    }
  });
  // reparseDataForDayForecast(dateToWeatherMap);
  return dateToWeatherMap;
};

// const reparseDataForDayForecast = (weatherObject) => {
//   let listOfForcast = []
//   Object.keys(weatherObject).forEach((key, index) => {
//       let minTemp;
//       let maxTemp;
//       weatherObject[key].map((weatherPoint) => {
//          if (minTemp == undefined ){
//           minTemp = weatherPoint.main.temp_min
//          } else{
//             minTemp = Math.min(minTemp, weatherObject.main.temp_min)
//          }
//       })
//       const weatherForTheDay = {
//         min_temp: minTemp,
//         maxTemp: maxTemp,

//       }
//   });
// };

export default WeatherController;
