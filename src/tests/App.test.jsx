import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Test the truthy", () => {
  it("should be true", async () => {
    expect(true).toBe(true);
  });
});

describe("App", () => {
  it("should render REACT", () => {
    render(<App />);
    screen.debug();
    const headline = screen.getByText(/REACT/i);
    expect(headline).toBeInTheDocument();
  });
});
