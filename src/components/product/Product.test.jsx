import Product from "./Product";
import { render, screen } from "@testing-library/react";
import { test, vi, expect } from "vitest";

vi.mock("react-router-dom", () => ({
  useOutletContext: () => [vi.fn()],
  useParams: () => ({ id: "1" }),
}));

function mockUseFetch() {
  return {
    data: {
      id: 1,
      title: "Test Product",
      image: "https://example.com/image.jpg",
      price: 19.99,
      rating: { rate: 4.5 },
      description: "This is a test product description.",
    },
    loading: false,
    error: null,
  };
}

vi.mock("../../useFetch", () => {
  return {
    default: mockUseFetch,
  };
});

test("loading text is shown while API request is in progress", async () => {
  render(<Product />);
  const loading = screen.getByText("Loading...");

  expect(loading).toBeInTheDocument();
});

test("product's name is rendered", async () => {
  render(<Product />);
  const productName = await screen.findByText("Test Product");
  expect(productName).toBeInTheDocument();
});
