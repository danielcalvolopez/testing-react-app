import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Home component", () => {
  test("renders home title as a text", () => {
    render(<App />);
  });
  const homeElement = screen.getByText("HELLO");
  expect(homeElement).toBeInTheDocument();
});
