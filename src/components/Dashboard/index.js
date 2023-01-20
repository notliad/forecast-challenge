import React, { useEffect, useState, useCallback } from "react";
import * as S from "./styles";
import { ReactComponent as InputLogo } from "../../assets/icons/searchIcon.svg";
import { ReactComponent as Cloud } from "../../assets/icons/40.svg";
import { getWeather } from "../../services/OpenWeather";

const Dashboard = ({ location }) => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [tempConvert, setTempConvert] = useState(false);

  const getWeatherInfo = useCallback(async () => {
    const resultWeather = await getWeather(location);
    console.log(resultWeather);

    if (resultWeather) {
      setWeatherInfo(resultWeather.data);
    }
  }, [location]);

  function getWeatherTranslated(weather) {
    const mapWeather = {
      Clouds: "Nublado",
      Clear: "Ensolarado",
      Rain: "Chuva",
      Snow: "Neve",
    };

    let description = mapWeather[weather] || "Desconhecido";
    return description;
  }

  function getWeatherIcon(weather) {
    const mapWeather = {
      Clouds: <Cloud />,
      Clear: <InputLogo />,
      Rain: <Cloud />,
      Snow: <InputLogo />,
    };

    let description = mapWeather[weather] || <></>;
    return description;
  }

  function getWindDirection(deg) {
    let directions = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
    return directions[Math.floor(((deg + 22.5) % 360) / 45)];
  }

  const transformTemp = useCallback(
    (temp) =>
      tempConvert
        ? `${Math.floor((temp * 9) / 5 + 32)} °F`
        : `${Math.floor(temp)} °C`,
    [tempConvert]
  );

  useEffect(() => {
    if (location) {
      getWeatherInfo();
    }
  }, [getWeatherInfo, location]);

  return (
    Object.keys(weatherInfo).length > 0 && (
      <S.Container>
        <S.Today>
          <div>{getWeatherIcon(weatherInfo[0].weather[0].main)}</div>
          <div styles={{ display: "flex", gap: "15px" }}>
            <div>
              <h3>Hoje</h3>
              <button onClick={() => setTempConvert((prevstate) => !prevstate)}>
                <h2>{transformTemp(weatherInfo[0].main.temp)}</h2>
              </button>
            </div>
            <div>
              <h2>{getWeatherTranslated(weatherInfo[0].weather[0].main)}</h2>
              <h4>
                Vento: {getWindDirection(weatherInfo[0].wind.deg)}{" "}
                {weatherInfo[0].wind.speed}km/h
              </h4>
              <h4>Humidade: {weatherInfo[0].main.humidity}%</h4>
              <h4>Pressão: {weatherInfo[0].main.pressure}hPA</h4>
            </div>
          </div>
        </S.Today>
        <S.Tommorow>
          <p></p>
          <div>
            <h3>Amanhã</h3>
            <button onClick={() => setTempConvert((prevstate) => !prevstate)}>
              <h2>{transformTemp(weatherInfo[1].main.temp)}</h2>
            </button>
          </div>
        </S.Tommorow>
        <S.DayAfterTommorrow>
          <p></p>
          <div>
            <h3>Depois de amanhã</h3>
            <button onClick={() => setTempConvert((prevstate) => !prevstate)}>
              <h2>{transformTemp(weatherInfo[2].main.temp)}</h2>
            </button>
          </div>
        </S.DayAfterTommorrow>
      </S.Container>
    )
  );
};

export default Dashboard;
