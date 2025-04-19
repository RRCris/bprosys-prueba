import { render, screen } from "@testing-library/react";
import Button from "./Button";
describe("Button UI", () => {
  it("render component", () => {
    render(<Button />);
    const component = screen.getByRole("button");
    expect(component).toBeInTheDocument();
  });
});
