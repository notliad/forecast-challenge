import React from "react";
import { render, screen } from "@testing-library/react";
import { Today } from "../index";

describe("Today", () => {
  test("render Today loading container correctly", async () => {
    const location = "Paris,fr";
    const { getByTestId } = render(
      <Today
        location={location}
        convertUnits={false}
        setConvertUnits={jest.fn()}
        input="Teste"
      />
    );

    // Checa se as div de loading estão sendo renderizadas
    expect(screen.getByTestId("container-loading")).toBeInTheDocument();
  });
});
