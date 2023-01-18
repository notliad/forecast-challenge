import { useCallback, useEffect, useState } from "react";

import * as S from "./styles";

import { Input } from "../../components";

import { getBackground } from "../../services/Bing";
import { getWeather } from "../../services/OpenWeather";
import { reverseGeocode } from "../../services/OpenCage";

const Home = () => {
  const [background, setBackground] = useState();
  const [coords, setCoords] = useState({});

  const setWeather = useCallback(async () => {
    const location = await reverseGeocode(coords.lat, coords.long);

    const weather = await getWeather(
      `${location.results[0].components.city},${location.results[0].components.state},${location.results[0].components.country}`
    );
  }, []);

  const getPosition = useCallback(async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoords({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
      setWeather();
    });
  }, []);

  useEffect(() => {
    getPosition();
  }, []);

  async function setImage() {
    const image = await getBackground();
  }

  return (
    <S.Container style={{ backgroundImage: `url(${background})` }}>
      <S.ComponentsContainer>
        <Input />
      </S.ComponentsContainer>
    </S.Container>
  );
};

export default Home;
