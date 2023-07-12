import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { NavMain, NavUp } from "../components/navigation";

describe("navigation", () => {
  afterEach(cleanup);
  it("should render navigation", () => {
    render(<NavMain />);
  });

  it("should render navigation up", () => {
    render(<NavUp />);
  });
});
