import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer";

test("should render Footer Component", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("test-1");
  expect(footerElement).toBeInTheDocument();
});