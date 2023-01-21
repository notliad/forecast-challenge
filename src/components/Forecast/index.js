import { useEffect, useState, useCallback } from "react";
import * as S from "./styles";

import { getWeatherForecast } from "../../services/OpenWeather";

const Forecast = ({ location, convertUnits, setConvertUnits }) => {
  const [weatherForecast, setWeatherForecast] = useState({});
  const [loading, setLoading] = useState(true);

  const getForecastInfo = useCallback(async () => {
    setLoading(true);
    const resultWeatherForecast = await getWeatherForecast(location);
    if (resultWeatherForecast.status === "200") {
      setWeatherForecast(resultWeatherForecast.data);
    }
    setLoading(false);
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

  return loading ? (
    <>
      <S.TomorrowLoading data-testid="tomorrowLoading" />
      <S.DayAfterTomorrowLoading data-testid="dayAfterTomorrowLoading" />
    </>
  ) : (
    <>
      <S.Tomorrow temp={weatherForecast[0].main.temp}>
        <p></p>
        <S.Container>
          <S.WeatherText>Amanhã</S.WeatherText>
          <S.Button onClick={() => setConvertUnits((prevstate) => !prevstate)}>
            <S.TempText>
              {transformTemp(weatherForecast[0].main.temp)}
            </S.TempText>
          </S.Button>
        </S.Container>
      </S.Tomorrow>
      <S.DayAfterTomorrow temp={weatherForecast[1].main.temp}>
        <p></p>
        <S.Container>
          <S.WeatherText>Depois de Amanhã</S.WeatherText>
          <S.Button onClick={() => setConvertUnits((prevstate) => !prevstate)}>
            <S.TempText>
              {transformTemp(weatherForecast[1].main.temp)}
            </S.TempText>
          </S.Button>
        </S.Container>
      </S.DayAfterTomorrow>
    </>
  );
};

export default Forecast;
