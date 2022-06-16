import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("index", () => {
  it("Should render correctly", () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
});
