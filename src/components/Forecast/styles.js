import styled from "styled-components";

export const Tomorrow = styled.section`
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

export const TomorrowLoading = styled.section`
  height: 15%;
  background-color: rgba(198, 198, 198, 1);
`;

export const DayAfterTomorrow = styled.section`
  border-radius: 0 0 5px 5px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: ${(props) =>
    props.temp > 35
      ? "rgba(204, 27, 40, 1)"
      : props.temp < 15
      ? "rgba(82, 163, 196, 1)"
      : "rgba(200, 163, 4, 1)"};
`;

export const DayAfterTomorrowLoading = styled.section`
  height: 15%;
  border-radius: 0 0 5px 5px;
  background-color: rgba(176, 176, 176, 1);
`;

export const Container = styled.div``;

export const WeatherText = styled.h3`
  font-size: 22px;
  margin-top: 5px;
  margin-bottom: 0;
  color: #fff;
  font-family: "Nunito";
  font-weight: 700;

  @media (max-width: 830px) {
    font-size: 16px;
  }
`;

export const TempText = styled.h2`
  font-size: 22px;
  margin-top: 5px;
  color: #fff;
  font-family: "Nunito";
  font-weight: 700;

  @media (max-width: 830px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding-left: 0;
`;
