import { useEffect, useState, useCallback } from "react";
import * as S from "./styles";

import { getWeatherForecast } from "../../services/OpenWeather";

const Forecast = ({ location, convertUnits, setConvertUnits }) => {
  const [weatherForecast, setWeatherForecast] = useState({});

  const getForecastInfo = useCallback(async () => {
    const resultWeatherForecast = await getWeatherForecast(location);
    if (resultWeatherForecast.status === "200") {
      setWeatherForecast(resultWeatherForecast.data);
    }
  }, [location]);

  const transformTemp = useCallback(
    (temp) =>
      convertUnits
        ? `${Math.floor((temp * 9) / 5 + 32)} °F`
        : `${Math.floor(temp)} °C`,
    [convertUnits]
  );

  useEffect(() => {
    getForecastInfo();
  }, [getForecastInfo]);
  return (
    Object.keys(weatherForecast).length > 0 && (
      <>
        <S.Tommorrow temp={weatherForecast[0].main.temp}>
          <p></p>
          <S.Container>
            <S.WeatherText>Amanhã</S.WeatherText>
            <S.Button
              onClick={() => setConvertUnits((prevstate) => !prevstate)}
            >
              <S.TempText>
                {transformTemp(weatherForecast[0].main.temp)}
              </S.TempText>
            </S.Button>
          </S.Container>
        </S.Tommorrow>
        <S.DayAfterTommorrow temp={weatherForecast[1].main.temp}>
          <p></p>
          <S.Container>
            <S.WeatherText>Depois de Amanhã</S.WeatherText>
            <S.Button
              onClick={() => setConvertUnits((prevstate) => !prevstate)}
            >
              <S.TempText>
                {transformTemp(weatherForecast[1].main.temp)}
              </S.TempText>
            </S.Button>
          </S.Container>
        </S.DayAfterTommorrow>
      </>
    )
  );
};

export default Forecast;
