import React from "react";
import {shallow} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import "jest-styled-components";

import {INITIAL_STATE, Creators as BuscarActions} from "../../store/ducks/buscar";

import {BuscarTest} from "../../pages/Buscar";

describe("Testing Buscar", () => {
  it("renders without crashing", () => {
    shallow(
      <MemoryRouter>
        <BuscarTest {...{...INITIAL_STATE, ...BuscarActions}} />
      </MemoryRouter>
    );
  });
});
