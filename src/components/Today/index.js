import { useEffect, useCallback, useState } from "react";
import * as S from "./styles";

import { getWeatherToday } from "../../services/OpenWeather";
import { reverseGeocode } from "../../services/OpenCage";

const Today = ({ location, convertUnits, setConvertUnits, input }) => {
  const [weatherToday, setWeatherToday] = useState({});

  const reverse = useCallback(
    async (lat, long) => {
      const result = await reverseGeocode(lat, long);
      if (result.status.code === 200) {
        input.current.value = `${result.data.city}, ${result.data.state_code}, ${result.data.country}`;
      }
    },
    [input]
  );

  const getTodayInfo = useCallback(async () => {
    const resultWeatherToday = await getWeatherToday(location);
    if (resultWeatherToday.status === 200) {
      setWeatherToday(resultWeatherToday.data);
    }

    await reverse(
      resultWeatherToday.data.coord.lat,
      resultWeatherToday.data.coord.lon
    );
  }, [location, reverse]);

  function getWeatherTranslated(weather) {
    const mapWeather = {
      Thunderstorm: "Tempestade",
      Drizzle: "Chuva fraca",
      Rain: "Chuva",
      Snow: "Neve",
      Clear: "Ensolarado",
      Clouds: "Nublado",
    };

    let description = mapWeather[weather] || "Desconhecido";
    return description;
  }

  function getWeatherIcon(weather) {
    const mapWeather = {
      Clouds: <S.CloudsIcon />,
      Clear: <S.ClearDayIcon />,
      Rain: <S.RainIcon />,
      Snow: <S.SnowIcon />,
      Thunderstorm: <S.ThuderstormIcon />,
      Drizzle: <S.DrizzleIcon />,
    };

    let description = mapWeather[weather] || <></>;
    return description;
  }

  const convertTemp = useCallback(
    (temp) =>
      convertUnits
        ? `${Math.floor((temp * 9) / 5 + 32)} °F`
        : `${Math.floor(temp)} °C`,
    [convertUnits]
  );

  function getWindDirection(deg) {
    let directions = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
    return directions[Math.floor(((deg + 22.5) % 360) / 45)];
  }

  const convertWindSpeed = useCallback(
    (speed) =>
      convertUnits ? `${(speed * 0.621371).toFixed(2)}mp/h` : `${speed}km/h`,
    [convertUnits]
  );

  const convertPressure = useCallback(
    (pressure) =>
      convertUnits
        ? `${(pressure * 0.0145038).toFixed(2)}Psi`
        : `${pressure}hPa`,
    [convertUnits]
  );

  useEffect(() => {
    getTodayInfo();
  }, [getTodayInfo, location]);

  return (
    Object.keys(weatherToday).length > 0 && (
      <S.Container temp={weatherToday.main.temp}>
        <S.IconContainer>
          {getWeatherIcon(weatherToday.weather[0].main)}
        </S.IconContainer>
        <S.WeatherInfoContainer>
          <S.TempContainer>
            <S.TodayText>Hoje</S.TodayText>
            <S.Button
              onClick={() => setConvertUnits((prevstate) => !prevstate)}
            >
              <S.WeatherText>
                {convertTemp(weatherToday.main.temp)}
              </S.WeatherText>
            </S.Button>
          </S.TempContainer>
          <S.DetailsContainer>
            <S.WeatherText>
              {getWeatherTranslated(weatherToday.weather[0].main)}
            </S.WeatherText>
            <S.DetailsText>
              Vento: {getWindDirection(weatherToday.wind.deg)}{" "}
              {convertWindSpeed(weatherToday.wind.speed)}
            </S.DetailsText>

            <S.DetailsText>
              Humidade: {weatherToday.main.humidity}%
            </S.DetailsText>
            <S.DetailsText>
              Pressão: {convertPressure(weatherToday.main.pressure)}
            </S.DetailsText>
          </S.DetailsContainer>
        </S.WeatherInfoContainer>
      </S.Container>
    )
  );
};

export default Today;
