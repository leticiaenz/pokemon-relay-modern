import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";

import App from "../App";

describe("App tests", () => {
  it("should render App and show pokemons and click in card", async () => {
    const r = render(<App />);

    await wait(() => r.getByText("001 - Bulbasaur"));
    wait(() => r.getByText("012 - Butterfree"));
    wait(() => r.getByText("025 - Pikachu"));

    fireEvent.click(r.getByText("025 - Pikachu"));
    await wait(() => r.getByText("025 - Pikachu"));
    await wait(() => r.getByText("Tipos"));
    await wait(() => r.getByText("Resistência"));
  });
});
