import React from "react";
import {render} from "@testing-library/react";
import "jest-styled-components";

// Mock
import MockAlbum from "../../../mocker/data/album";

import Album from "../../components/Album";

describe("Testing Container", () => {
  it("render component album cover", () => {
    const {container} = render(<Album album={MockAlbum} />);
    expect(container.querySelectorAll("img").length).toStrictEqual(1);
  });

  it("render component album artists name", () => {
    const artists = MockAlbum.artists;
    const {container} = render(<Album album={MockAlbum} />);

    expect(container.querySelectorAll("div.album-artista").length).toStrictEqual(
      artists.length
    );
  });

  it("render component album name", () => {
    const {container} = render(<Album album={MockAlbum} />);
    expect(container.querySelectorAll("strong").length).toStrictEqual(1);
  });
});
