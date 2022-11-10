import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header component", () => {
  test("renders header title as a text", () => {
    render(<Header />);
    const headerElement = screen.getByText("Header!");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders 'this is the description' if the button was NOT clicked", () => {
    render(<Header />);
    const paragraphElement = screen.getByText(/this is the description/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders 'this text has changed' if the button was clicked", () => {
    // Arrange
    render(<Header />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("this text has changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'this is the description' if the button was clicked", () => {
    // Arrange
    render(<Header />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("this is the description", {
      exact: false,
    });

    expect(outputElement).toBeNull();
  });

  test("renders title", () => {
    render(<Header />);
    const titleElement = screen.getByText("Title");
    expect(titleElement).toBeInTheDocument();
  });
});
