import { useEffect, useState } from "react";
import * as S from "./styles";

const Input = ({ input, setInput, setLocation }) => {
  return (
    <S.Container>
      <S.SearchIcon color={"#7c7877"} src="../../assets/icons/44.svg" />
      <S.Form onSubmit={() => setLocation(input)}>
        <S.Input
          type="text"
          value={input}
          onChange={(input) => setInput(input.target.value)}
        />
        <S.Input type="submit" />
      </S.Form>
    </S.Container>
  );
};

export default Input;
