import styled from "styled-components";
import { ReactComponent as InputLogo } from "../../assets/icons/searchIcon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #efeae7;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form``;

export const Input = styled.input`
  padding: 6px 10px;
  margin: 10px 0;
  border: none;
  background-color: #efeae7;
  outline: none;
  font-size: 18px;
`;

export const SearchIcon = styled(InputLogo)`
  width: 25px;
  height: 25px;
`;
