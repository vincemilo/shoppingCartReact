import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("clickHandler", () => {
  it("adds the items correctly to the cart", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    expect().toMatchSnapshot();
  });
  // it("renders radical rhinos after button click", async () => {
  //   const user = userEvent.setup();
  //   render(<App />);
  //   const button = screen.getByRole("button", { name: "Click Me" });
  //   await user.click(button);
  //   expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  // });
});
