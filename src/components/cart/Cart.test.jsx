import Cart from "./Cart";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Cart", () => {
  it("should render the shopping cart array contents"),
    () => {
      render(<Cart />);
      const list = screen.getByRole("list");
      expect(list).toBeIntheDocument();
    };
});
