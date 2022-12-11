const WeatherCard = ({ data, getDetails }) => {
  const weatherInfo = data.weather[0];
  const curDate = data.dt_txt.split(" ")[0];
  return (
    <div className="flex-1 align-middle mt-auto mb-auto" key={data.dt}>
      <div
        className="bg-gray w-11/12 ml-auto mr-auto rounded-lg text-center text-white"
        key={data.dt}
        onClick={() => {
          getDetails(curDate);
        }}
      >
        <h1>{curDate}</h1>
        <h1>{data.main.temp} F</h1>
        <h2>{weatherInfo.main}</h2>
        <h2>{weatherInfo.description}</h2>
        <p> Humidity: {data.main.humidity} %</p>
        <p> Wind: {data.wind.speed} mph</p>
      </div>
    </div>
  );
};

export default WeatherCard;
