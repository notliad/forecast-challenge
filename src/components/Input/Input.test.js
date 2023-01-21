import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "../index";

test("Input component renders correctly", () => {
  const { getByPlaceholderText } = render(
    <Input
      input=""
      setInput={() => {}}
      setLocation={() => {}}
      reference={null}
    />
  );

  const input = screen.getByPlaceholderText("Carregando sua localização...");
  expect(input).toBeInTheDocument();
});
