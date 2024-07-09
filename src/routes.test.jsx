import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "./routes";
import { findByRole, render, screen } from "@testing-library/react";
import { describe } from "vitest";
import userEvent from "@testing-library/user-event";

describe("routes", () => {
  it("goes to relevant page when link is clicked", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();
    const cart = screen.getByRole("link", { name: "Cart 0" });
    await user.click(cart);
    const cartPage = await screen.findByText(/subtotal/i);
    expect(cartPage).toBeInTheDocument();
  });
});
