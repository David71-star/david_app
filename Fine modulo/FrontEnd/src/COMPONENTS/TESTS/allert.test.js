import React from "react";
import { screen, render } from "@testing-library/react";
import Alert from "../WELCOME/welcome";
import "@testing-library/jest-dom";

describe("MyAlert component", () => {
  test("render the Welcome message", () => {
    render(<Alert />);
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
  });

  test("render the custom text", () => {
    const customText = "This is a test alert! You can safely ignore it.";
    render(<Alert />);
    expect(screen.getByText(customText)).toBeInTheDocument();
  });

  test("rende the close button", () => {
    render(<Alert />);
    expect(screen.getByTestId("closeButton")).toBeInTheDocument();
  });
});
