import reducer, {
  INITIAL_STATE,
  Creators as AlbumActions,
} from "../../../store/ducks/album";

import MockAlbum from "../../../../mocker/data/album";

describe("Testing store album duck", () => {
  it("expect initial state", () => {
    const state = reducer(INITIAL_STATE, {});
    expect(state).toStrictEqual(INITIAL_STATE);
  });

  const albumId = "ID-FAKE-TESTE";

  it("expect album request", () => {
    const stateRequest = reducer(INITIAL_STATE, AlbumActions.getAlbumRequest(albumId));

    let compare = {
      loading: true,
    };

    expect(stateRequest).toEqual({...INITIAL_STATE, ...compare});

    const stateSuccess = reducer(
      {...INITIAL_STATE},
      AlbumActions.getAlbumSuccess(MockAlbum)
    );

    compare = {
      data: MockAlbum,
      loading: false,
    };

    expect(stateSuccess).toEqual({...compare});
  });

  it("expect album erro", () => {
    const stateRequest = reducer(INITIAL_STATE, AlbumActions.getAlbumRequest(albumId));

    let compare = {
      loading: true,
    };

    expect(stateRequest).toEqual({...INITIAL_STATE, ...compare});

    const state = reducer({...INITIAL_STATE, ...compare}, AlbumActions.getAlbumError());

    compare = {
      loading: false,
    };

    expect(state).toEqual({...INITIAL_STATE, ...compare});
  });
});
