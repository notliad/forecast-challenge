import styled from "styled-components";
import { ReactComponent as InputLogo } from "../../assets/icons/searchIcon.svg";

export const Container = styled.div`
  width: 10 0%;
  display: flex;
  flex-direction: row;
  background-color: #efeae7;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  border-radius: 5px 5px 0 0;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input.attrs({
  placeholder: "Carregando sua localização...",
})`
  max-width: 350px;
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: none;
  background-color: #efeae7;
  outline: none;
  font-size: 18px;
  font-family: "Nunito";

  @media (max-width: 830px) {
    width: 200px;
  }
`;

export const SearchIcon = styled(InputLogo)`
  width: 25px;
  height: 25px;
`;

export const FormContainer = styled.div`
  width: 100%;
`;
