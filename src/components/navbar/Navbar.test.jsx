import { describe, expect } from "vitest";
import NavBar from "./NavBar";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("navbar component", () => {
  it("renders the correct links and menu items", () => {
    render(<NavBar itemCount={0} />, { wrapper: BrowserRouter });
    const home = screen.getByRole("link", { name: "Home" });
    const products = screen.getByRole("link", { name: "Products" });
    const cart = screen.getByRole("link", { name: "Cart 0" });
    const menuItems = [home, products, cart];
    menuItems.forEach((e) => {
      e.textContent === "Home"
        ? expect(e).toHaveAttribute("href", "/")
        : e.textContent === "Products"
        ? expect(e).toHaveAttribute("href", "/products")
        : expect(e).toHaveAttribute("href", "/cart");
      expect(e).toBeInTheDocument();
    });
  });

  it("renders the correct number of items in the cart widget", () => {
    render(<NavBar itemCount={5} />, { wrapper: BrowserRouter });
    const cart = screen.getByRole("link", { name: "Cart 5" });
    expect(cart).toBeInTheDocument();
  });
});
