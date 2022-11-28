import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import WeatherCard from "./WeatherCard";

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

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error occured</div>;
  // Parse data and group by the day
  const timeExpected = "12:00:00";
  const filteredData = data.list.filter((point) =>
    point.dt_txt.includes(timeExpected)
  );
  console.log(filteredData);
  const forecastListData = filteredData.map((point) => {
    return <WeatherCard data={point} />;
  });

  return (
    <>
      <div className="flex pt-5 lg:h-1/3">
        <div className="flex-1">
          <button className="" onClick={reset}>
            back
          </button>
        </div>
        <div className="flex-1">
          <h1 className="text-center"> Weather at </h1>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="lg:h-2/3 flex flex-row flex-wrap justify-between align-middle ">
        {forecastListData}
      </div>
    </>
  );
  // fetch data
  //  for each element render
};

export default WeatherController;
