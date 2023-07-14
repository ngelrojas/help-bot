import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MenuItem } from "../components/menu-item";

const menu_title = "SERVICES";
const link = "/services";

describe("item menu", () => {
  afterEach(cleanup);

  it("should render services menu", () => {
    render(<MenuItem title={menu_title} link={link} />);
  });

  it("should render item menu with text", () => {
    render(<MenuItem title={menu_title} link={link} />);
    expect(screen.getByText(menu_title));
  });
});
