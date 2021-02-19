import Mission from "../components/mission";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
describe("Testing the mission component", () => {
  const history = createMemoryHistory();
  test("does the spreadsheet link point to the right place", () => {
    render(
      <Router history={history}>
        <Mission />)
      </Router>
    );
    expect(
      screen.getByText("Acts Of Christmas Spreadsheet").closest("a")
    ).toHaveAttribute(
      "href",
      "https://docs.google.com/spreadsheets/d/1skJYfeya6QrZUZcUF0Vm0AvuyVlDxyNNTnvtbcCBSSU/edit?usp=sharing"
    );
  });
});
