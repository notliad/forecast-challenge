import React, { useState, useEffect, useCallback } from "react";

import * as S from "./styles";

import { Input, Dashboard } from "../../components";

import { getBackground } from "../../services/Bing";
import { reverseGeocode } from "../../services/OpenCage";

const Home = () => {
  const [background, setBackground] = useState();
  const [coords, setCoords] = useState({});
  const [input, setInput] = useState(null);
  const [location, setLocation] = useState();

  const reverse = useCallback(async () => {
    const result = await reverseGeocode(coords.lat, coords.long);
    if (result.status.code === 200) {
      setInput(
        `${result.data.city},${result.data.state},${result.data.country}`
      );
      setLocation(
        `${result.data.city},${result.data.state},${result.data.country}`
      );
    }
  }, [coords.lat, coords.long]);

  const getPosition = useCallback(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoords({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
    reverse();
  }, [reverse]);

  useEffect(() => {
    getPosition();
  }, [getPosition]);

  async function setImage() {
    const image = await getBackground();
  }

  return (
    <S.Container>
      <S.ComponentsContainer>
        <Input input={input} setInput={setInput} setLocation={setLocation} />
        {location && <Dashboard location={location} />}
      </S.ComponentsContainer>
    </S.Container>
  );
};

export default Home;
