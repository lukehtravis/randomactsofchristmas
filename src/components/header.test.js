import Header from "./header";
import { screen, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("header component is working", () => {
  const history = createMemoryHistory();
  test("the link to the map works", () => {
    render(<Router history={history}>{<Header />}</Router>);
    expect(screen.getByText("Map").closest("a")).toHaveAttribute(
      "href",
      "/map"
    );
  });
});
