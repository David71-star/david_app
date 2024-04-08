import React from "react";
import { render } from "@testing-library/react";
import Welcome from "../WELCOME/welcome";

test("renders MyComponent correctly", () => {
  const { getByText } = render(<Welcome />);
  const textElement = getByText(
    "NOTA, qua non puoi comprare proprio nulla, perciò esci"
  );
  expect(textElement).toBeInTheDocument();
});
