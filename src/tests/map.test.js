import Map from "../components/map";
import { screen, render, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import mapboxgl from "mapbox-gl";

describe("<Map> component is working", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    // Here we need to add jest mocks to the Map prototype for things to pass
    mapboxgl.Map.prototype.addControl = jest.fn().mockImplementation(() => {
      return {};
    });
    mapboxgl.Map.prototype.on = jest.fn().mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("mapbox component renders", () => {
    render(
      <Router history={history}>
        <Map />
      </Router>
    );

    expect(screen.getByTestId("map")).toBeInTheDocument();
  });
});
