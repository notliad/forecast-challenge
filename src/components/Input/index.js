import * as S from "./styles";

const Input = ({ input, setInput, setLocation, reference }) => {
  return (
    <S.Container>
      <S.SearchIcon color={"#7c7877"} />
      <S.FormContainer>
        <S.Form
          onSubmit={(event) => {
            event.preventDefault();
            setLocation(input);
          }}
        >
          <S.Input
            type="text"
            value={input}
            onChange={(input) => setInput(input.target.value)}
            ref={reference}
          />
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
};

export default Input;
