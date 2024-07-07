import Product from "./Product";
import { render, screen } from "@testing-library/react";
import { test, vi, expect } from "vitest";
import useFetch from "../../useFetch";

vi.mock("react-router-dom", () => ({
  useOutletContext: () => [vi.fn()],
  useParams: () => ({ id: "1" }),
}));

vi.mock("../../useFetch");

test("shows loading text while API request is in progress", () => {
  useFetch.mockReturnValue({ loading: true });
  render(<Product />);
  const loading = screen.getByText("Loading...");
  expect(loading).toBeInTheDocument();
});

test("renders product's name", () => {
  useFetch.mockReturnValue({
    data: {
      id: 1,
      title: "Test Product",
      image: "https://example.com/image.jpg",
      price: 19.99,
      rating: { rate: 4.5 },
      description: "This is a test product description.",
    },
  });
  render(<Product />);
  const productName = screen.getByText("Test Product");
  expect(productName).toBeInTheDocument();
});

test("shows error message when there is an error", () => {
  useFetch.mockReturnValue({ error: new Error() });
  render(<Product />);
  const errorMessage = screen.getByText("A network error was encountered");
  expect(errorMessage).toBeInTheDocument();
});
