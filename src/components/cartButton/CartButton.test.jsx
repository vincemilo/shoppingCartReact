import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import CartButton from "./CartButton";

describe("Cart button", () => {
  it("should render a button with the text 'add to cart'", () => {
    render(<CartButton onClick={() => {}} />);
    const button = screen.getByRole("button", { name: "Add to Cart" });
    expect(button).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<CartButton onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Add to Cart" });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the onClick function when it isn't clicked", async () => {
    const onClick = vi.fn();
    render(<CartButton onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
  });
});
