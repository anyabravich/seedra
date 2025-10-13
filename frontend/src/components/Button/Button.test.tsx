import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("_primary");
    expect(button).toHaveClass("_medium");
  });

  it("renders with custom variant", () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole("button", { name: /secondary button/i });

    expect(button).toHaveClass("_secondary");
  });

  it("renders with custom size", () => {
    render(<Button size="large">Large Button</Button>);
    const button = screen.getByRole("button", { name: /large button/i });

    expect(button).toHaveClass("_large");
  });

  it("renders with loading state", () => {
    render(<Button loading>Loading Button</Button>);
    const button = screen.getByRole("button", { name: /loading.../i });

    expect(button).toBeDisabled();
    expect(button).toHaveClass("_loading");
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders with disabled state", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button", { name: /disabled button/i });

    expect(button).toBeDisabled();
    expect(button).toHaveClass("_disabled");
  });

  it("renders with full width", () => {
    render(<Button fullWidth>Full Width Button</Button>);
    const button = screen.getByRole("button", { name: /full width button/i });

    expect(button).toHaveClass("_fullWidth");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const button = screen.getByRole("button", { name: /clickable button/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not handle click events when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled Button
      </Button>
    );

    const button = screen.getByRole("button", { name: /disabled button/i });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not handle click events when loading", () => {
    const handleClick = jest.fn();
    render(
      <Button loading onClick={handleClick}>
        Loading Button
      </Button>
    );

    const button = screen.getByRole("button", { name: /loading.../i });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole("button", { name: /custom button/i });

    expect(button).toHaveClass("custom-class");
  });

  it("renders with custom type", () => {
    render(<Button type="submit">Submit Button</Button>);
    const button = screen.getByRole("button", { name: /submit button/i });

    expect(button).toHaveAttribute("type", "submit");
  });

  it("passes through additional props", () => {
    render(
      <Button
        data-testid="test-button"
        aria-label="Test button"
        title="Button tooltip"
      >
        Test Button
      </Button>
    );

    const button = screen.getByTestId("test-button");
    expect(button).toHaveAttribute("aria-label", "Test button");
    expect(button).toHaveAttribute("title", "Button tooltip");
  });

  it("renders children correctly", () => {
    render(
      <Button>
        <span>Icon</span>
        <span>Text</span>
      </Button>
    );

    expect(screen.getByText("Icon")).toBeInTheDocument();
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
});
