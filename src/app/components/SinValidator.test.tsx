import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SinValidator from "./SinValidator";

describe("SinValidator Component", () => {
  it("renders with initial text 'Check a SIN'", () => {
    render(<SinValidator />);

    const heading = screen.getByText("Check a SIN");
    expect(heading).toBeInTheDocument();
  });

  it("displays 'Valid SIN' when validateSin returns true", async () => {
    // Mock validateSin to return true
    // (validateSin as jest.Mock).mockResolvedValue(true);

    render(<SinValidator />);

    const input = screen.getByPlaceholderText("Enter SIN number");
    const button = screen.getByRole("button", { name: /validate/i });

    fireEvent.change(input, { target: { value: "046454286" } });
    fireEvent.click(button);

    // Wait for the async validation to resolve
    expect(await screen.findByText("Valid SIN")).toBeInTheDocument();
    expect(button).toHaveClass("bg-green-600");
  });

  it("displays 'Invalid SIN' when validateSin returns false", async () => {
    render(<SinValidator />);

    const input = screen.getByPlaceholderText("Enter SIN number");
    const button = screen.getByRole("button", { name: /validate/i });

    fireEvent.change(input, { target: { value: "123456789" } });
    fireEvent.click(button);

    // Wait for the async validation to resolve
    expect(await screen.findByText("Invalid SIN")).toBeInTheDocument();
    expect(button).toHaveClass("bg-red-600");
  });
});
