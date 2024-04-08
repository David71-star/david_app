import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import CommentArea from "../COMMENTAREA/commenArea";
import "@testing-library/jest-dom";

describe("CommentSection", () => {
  test("render Comments area", () => {
    render(<CommentArea />);
    expect(screen.getByTestId("commentsArea")).toBeInTheDocument();
  });
});
