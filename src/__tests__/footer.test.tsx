import { describe, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Footer from "../components/footer";

describe("Footer", () => {
  afterEach(cleanup);

  it("should render footer", () => {
    render(<Footer />);
  });
});
