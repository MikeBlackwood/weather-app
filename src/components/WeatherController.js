import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const WeatherController = ({ location }) => {
  const { isLoading, error, data, isFetching } = useQuery(
    ["fetchWeather"],
    () =>
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        )
        .then((res) => res.data)
  );

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error occured</div>;

  const forecastListData = data.list;

  const forecastList = forecastListData.map((weather) => {
    return <div>temp: {weather.main.temp}</div>;
  });
  return <div>{forecastList}</div>;
  // fetch data
  //  for each element render
};

export default WeatherController;
