import React from "react";
import {withRouter} from "react-router";
import {Link, Route, Router, Switch} from "react-router-dom";
import {createMemoryHistory} from "history";
import {render, fireEvent} from "@testing-library/react";

import {Provider} from "react-redux";

import store from "../store";
import Routes from "../routes";

const LocationDisplay = withRouter(({location}) => (
  <div data-testid="location-display">{location.pathname}</div>
));

function App() {
  return (
    <Provider store={store}>
      <Link to="/">Buscar</Link>
      <Link data-testid="album" to="/albums/0vshXZYhBkbIoqxyC2fXcF">
        Álbum
      </Link>
      <Routes />
      <LocationDisplay />
    </Provider>
  );
}

function renderWithRouter(
  ui,
  {route = "/", history = createMemoryHistory({initialEntries: [route]})} = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

test("full app rendering/navigating", () => {
  const {container, getByText} = renderWithRouter(<App />);
  expect(container.innerHTML).toMatch("Busque por artistas, álbums ou músicas");

  // const leftClick = {button: 0};
  // expect(container.innerHTML).toMatch("Voltar");
});

test("rendering a component that uses withRouter", () => {
  const route = "/buscar/metallica";
  const {getByTestId} = renderWithRouter(<LocationDisplay />, {route});
  expect(getByTestId("location-display").textContent).toBe(route);
});
