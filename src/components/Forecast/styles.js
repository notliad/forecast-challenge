import styled from "styled-components";

export const Tommorrow = styled.section`
  height: 15%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: ${(props) =>
    props.temp > 35
      ? "rgba(229, 30, 45, 1)"
      : props.temp < 15
      ? "rgba(92, 183, 220, 1)"
      : "rgba(225, 183, 4, 1)"};
`;

export const DayAfterTommorrow = styled.section`
  height: 15%;

  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: ${(props) =>
    props.temp > 35
      ? "rgba(204, 27, 40, 1)"
      : props.temp < 15
      ? "rgba(82, 163, 196, 1)"
      : "rgba(200, 163, 4, 1)"};
`;

export const Container = styled.div``;

export const WeatherText = styled.h3`
  margin-top: 10px;
  margin-bottom: 0;
  color: #fff;
`;

export const TempText = styled.h2`
  margin-top: 10px;
  color: #fff;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding-left: 0;
`;
