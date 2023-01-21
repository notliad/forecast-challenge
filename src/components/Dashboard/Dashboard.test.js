import React from "react";
import { render, screen } from "@testing-library/react";
import { Dashboard } from "../index";

describe("Dashboard", () => {
  test("Dashboard container is rendering correctly", async () => {
    const location = "Paris,fr";
    const { getByTestId } = render(
      <Dashboard location={location} input="Teste" />
    );

    // Checa se as div de loading estão sendo renderizadas
    expect(screen.getByTestId("container-dashboard")).toBeInTheDocument();
  });
});
