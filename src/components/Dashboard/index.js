import React, { useEffect, useState, useCallback } from "react";
import * as S from "./styles";

import { getWeather } from "../../services/OpenWeather";

const Dashboard = ({ location }) => {
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherInfo = useCallback(async () => {
    const resultWeather = await getWeather(location);
    if (resultWeather) {
      setWeatherInfo(resultWeather);
    }
  }, [location]);

  useEffect(() => {
    if (location) {
      getWeatherInfo();
    }
  }, [getWeatherInfo, location]);

  return <S.Container></S.Container>;
};

export default Dashboard;
