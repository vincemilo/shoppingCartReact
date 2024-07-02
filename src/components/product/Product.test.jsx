import Product from "./Product";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { test, vi, expect } from "vitest";

vi.mock("react-router-dom", () => ({
  useOutletContext: () => [vi.fn()],
  useParams: () => ({ id: "1" }),
}));

test("loading text is shown while API request is in progress", async () => {
  render(<Product />);
  const loading = screen.getByText("Loading...");

  expect(loading).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
});

test("user's name is rendered", async () => {
  render(<Product />);
  const productName = await screen.findByText(
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  );
  expect(productName).toBeInTheDocument();
});
