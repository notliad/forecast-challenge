import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5rem 5rem;

  background-color: #f333;

  > div {
    width: 110rem;
  }

  @media (max-width: 1200px) {
    > div {
      width: 100%;
      margin: 0rem 3rem;
    }
  }

  @media (max-width: 500px) {
    padding: 2rem;
  }
`;

export const MainContent = styled.main`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
