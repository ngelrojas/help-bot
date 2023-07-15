import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup, screen } from "@testing-library/react";
import SliderMain from "../components/slider-main";

const _h1 = "DESCUBRA O PODER DOS HELP BOTS";

describe("slider-main", () => {
  afterEach(cleanup);

  it("should render slider-main", () => {
    render(<SliderMain />);
  });

  it("should render slider-main with text", () => {
    render(<SliderMain />);
    expect(screen.getByText(_h1));
  });
});
