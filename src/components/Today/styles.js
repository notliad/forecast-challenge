import styled from "styled-components";
import { ReactComponent as Clouds } from "../../assets/icons/Clouds.svg";
import { ReactComponent as CloudDay } from "../../assets/icons/CloudDay.svg";
import { ReactComponent as CloudNight } from "../../assets/icons/CloudNight.svg";
import { ReactComponent as ClearDay } from "../../assets/icons/ClearDay.svg";
import { ReactComponent as ClearNight } from "../../assets/icons/ClearNight.svg";
import { ReactComponent as Drizzle } from "../../assets/icons/Drizzle.svg";
import { ReactComponent as Rain } from "../../assets/icons/Rain.svg";
import { ReactComponent as Thunderstorm } from "../../assets/icons/Thunderstorm.svg";
import { ReactComponent as Snow } from "../../assets/icons/Snow.svg";

export const Container = styled.section`
  height: 50%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: ${(props) =>
    props.temp > 35
      ? "rgba(255, 34, 51, 0.7)"
      : props.temp < 15
      ? "rgba(103, 204, 245, 0.7)"
      : "rgba(250,204, 5, 0.7)"};
`;

export const ContainerLoading = styled.div`
  background: linear-gradient(to top, #dcdcdc 0%, #c6c6c6 20%, #b0b0b0 40%);
  height: 50%;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeatherInfoContainer = styled.div`
  display: "flex";
  gap: "15px";
`;

export const TempContainer = styled.div`
  padding-top: 5px;
`;

export const TodayText = styled.h3`
  font-size: 25px;
  margin-top: 5px;
  margin-bottom: 0;
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
  padding-left: 0;
  cursor: pointer;
`;

export const DetailsContainer = styled.div``;

export const WeatherText = styled.h2`
  font-size: 25px;
  margin: 10px 0;
  color: #fff;
  font-family: "Nunito";
  font-weight: 700;

  @media (max-width: 830px) {
    font-size: 18px;
  }
`;

export const DetailsText = styled.h4`
  font-size: 18px;
  margin: 5px 0;
  color: #fff;
  font-family: "Nunito";
  font-weight: 700;

  @media (max-width: 830px) {
    font-size: 14px;
  }
`;

export const CloudsIcon = styled(Clouds)`
  width: 250px;
  height: 250px;
  fill: "#afafaf";

  @media (max-width: 830px) {
    width: 150px;
    height: 150px;
  }
`;
export const CloudDayIcon = styled(CloudDay)`
  width: 250px;
  height: 250px;

  @media (max-width: 830px) {
    width: 150px;
    height: 150px;
  }
`;
export const CloudNightIcon = styled(CloudNight)`
  width: 250px;
  height: 250px;

  @media (max-width: 830px) {
    width: 150px;
    height: 150px;
  }
`;
export const ClearDayIcon = styled(ClearDay)`
  width: 250px;
  height: 250px;

  @media (max-width: 830px) {
    width: 150px;
    height: 150px;
  }
`;
export const ClearNightIcon = styled(ClearNight)`
  width: 250px;
  height: 250px;

  @media (max-width: 830px) {
    width: 150px;
    height: 150px;
  }
`;
export const DrizzleIcon = styled(Drizzle)`
  width: 250px;
  height: 250px;

  @media (max-width: 830px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 830px) {
    width: 150px;
    height: 150px;
  }
`;
export const RainIcon = styled(Rain)`
  width: 250px;
  height: 250px;
  color: "#afafaf";

  @media (max-width: 830px) {
    width: 150px;
    height: 150px;
  }
`;
export const ThuderstormIcon = styled(Thunderstorm)`
  width: 250px;
  height: 250px;

  @media (max-width: 830px) {
    width: 150px;
    height: 150px;
  }
`;
export const SnowIcon = styled(Snow)`
  width: 250px;
  height: 250px;

  @media (max-width: 830px) {
    width: 150px;
    height: 150px;
  }
`;
