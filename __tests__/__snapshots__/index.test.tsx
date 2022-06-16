import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("First test", () => {
  it("Check render", () => {
    render(<Home />);
  });
});
