import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Home from "../pages/home";

describe("home", () => {
  afterEach(cleanup);

  it("shoudl render home", () => {
    render(<Home />);
  });
});
