import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 53px);
  background-color: #efeae7;
`;

export const Today = styled.section`
  height: 50%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #3d3d;

  h2 {
    margin: 10px 0;
  }

  h3 {
    margin-top: 10px;
    margin-bottom: 0;
  }

  h4 {
    margin: 5px 0;
  }

  button {
    background: none;
    border: none;
    padding-left: 0;
    cursor: pointer;
  }
`;

export const Tommorow = styled.section`
  height: 15%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #a678;

  h2 {
    margin-top: 10px;
  }

  h3 {
    margin-top: 10px;
    margin-bottom: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding-left: 0;
  }
`;

export const DayAfterTommorrow = styled.section`
  height: 15%;

  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #dcdcdc;

  h2 {
    margin-top: 10px;
  }

  h3 {
    margin-top: 10px;
    margin-bottom: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding-left: 0;
  }
`;
