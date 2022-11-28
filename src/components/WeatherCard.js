const WeatherCard = ({ data }) => {
  const weatherInfo = data.weather[0];
  return (
    <div
      className="lg:w-1/5 md:w-1/2 sm:w-full lg:mt-1/2 sm:mt-10  align-middle"
      key={data.dt_txt}
    >
      <div className="bg-gray w-11/12 ml-auto mr-auto rounded-lg text-center text-white">
        <h1>{data.main.temp}</h1>
        <h2>{weatherInfo.main}</h2>
        <h2>{weatherInfo.description}</h2>
        <p> Humidity: {data.main.humidity}</p>
        <p> Wind: {data.wind.speed}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
