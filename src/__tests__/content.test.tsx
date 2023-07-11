import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Content from "../components/content";

describe("content", () => {
  afterEach(cleanup);

  it("should render content", () => {
    render(<Content />);
  });
});
