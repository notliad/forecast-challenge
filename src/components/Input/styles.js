import styled from "styled-components";
import { ReactComponent as InputLogo } from "../../assets/icons/44.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #efeae7;
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  background-color: #efeae7;
  color: #7c7877;
`;

export const SearchIcon = styled(InputLogo)`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;
