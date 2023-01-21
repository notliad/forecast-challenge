import React, { useState, useEffect, useCallback, useRef } from "react";

import * as S from "./styles";

import { Input, Dashboard } from "../../components";

import { reverseGeocode } from "../../services/OpenCage";

const Home = () => {
  const [coords, setCoords] = useState({});
  const [input, setInput] = useState("");
  const [location, setLocation] = useState();
  const inputRef = useRef();

  const reverse = useCallback(async () => {
    const result = await reverseGeocode(coords.lat, coords.long);
    if (result.status.code === 200) {
      setInput(
        `${result.data.city}, ${result.data.state_code}, ${result.data.country}`
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

  return (
    <S.Container>
      <S.ComponentsContainer>
        <Input
          input={input}
          setInput={setInput}
          setLocation={setLocation}
          reference={inputRef}
        />
        <Dashboard location={location} input={inputRef} />
      </S.ComponentsContainer>
    </S.Container>
  );
};

export default Home;
