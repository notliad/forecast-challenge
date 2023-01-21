import React from "react";
import { render, screen } from "@testing-library/react";
import { Forecast } from "../index";

describe("Forecast", () => {
  test("redner the Forecast loading correctly", async () => {
    const location = "Paris,fr";
    const { getByTestId } = render(
      <Forecast
        location={location}
        convertUnits={false}
        setConvertUnits={jest.fn()}
      />
    );

    // Checa se as div de loading estão sendo renderizadas
    expect(screen.getByTestId("tomorrowLoading")).toBeInTheDocument();
    expect(screen.getByTestId("dayAfterTomorrowLoading")).toBeInTheDocument();
  });
});
