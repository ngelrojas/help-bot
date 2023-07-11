import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Header from "../components/header";

describe("header", () => {
  afterEach(cleanup);

  it("should render header", () => {
    render(<Header />);
  });
});
