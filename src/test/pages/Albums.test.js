import React from "react";
import {shallow, mount} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {render, fireEvent, cleanup} from "@testing-library/react";
import "jest-styled-components";

import {AlbumTest} from "../../pages/Albums";

describe("Testing Buscar", () => {
  let defaultProps = {
    history: {},
    getAlbumRequest: jest.fn(),
    setErro: jest.fn(),
    getBuscarRequest: jest.fn(),
    buscar: {
      busca: "",
      data: {
        artists: {},
        images: {},
        name: "",
        tracks: {
          items: [],
        },
      },
      loading: false,
    },
  };

  it("renders without crashing", () => {
    shallow(
      <MemoryRouter>
        <AlbumTest {...defaultProps} />
      </MemoryRouter>
    );
  });
});
