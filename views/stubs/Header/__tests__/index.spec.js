import React from "react";
import { render, screen } from "utils/testUtils";
import Header from "../";

describe("render Header component", () => {
  it("match THE MOVIE DB text", () => {
    render(<Header />);

    const linkElement = screen.getByText("THE MOVIE DB");
    expect(linkElement).toBeInTheDocument();
  });

  it("match Username text", () => {
    render(<Header />);

    const linkElement = screen.getByText("Username");
    expect(linkElement).toBeInTheDocument();
  });
});
