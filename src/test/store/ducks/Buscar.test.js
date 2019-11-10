import reducer, {
  INITIAL_STATE,
  Creators as BuscarActions,
} from "../../../store/ducks/buscar";

import MockBuscar from "../../../../mocker/data/buscar";

describe("Testing store buscar duck", () => {
  it("expect initial state", () => {
    const state = reducer(INITIAL_STATE, {});
    expect(state).toStrictEqual(INITIAL_STATE);
  });

  const buscar = "Metallica";

  it("expect buscar request", () => {
    const stateRequest = reducer(INITIAL_STATE, BuscarActions.getBuscarRequest(buscar));

    let compare = {
      busca: "",
      loading: true,
    };

    expect(stateRequest).toEqual({...INITIAL_STATE, ...compare});

    const stateSuccess = reducer(
      INITIAL_STATE,
      BuscarActions.getBuscarSuccess(MockBuscar, buscar)
    );

    compare = {
      data: MockBuscar,
      cache: [],
      busca: buscar,
      loading: false,
    };

    expect(stateSuccess).toEqual({...compare});
  });

  it("expect buscar erro", () => {
    const stateRequest = reducer(INITIAL_STATE, BuscarActions.getBuscarRequest(buscar));

    let compare = {
      loading: true,
    };

    expect(stateRequest).toEqual({...INITIAL_STATE, ...compare});

    const state = reducer(INITIAL_STATE, BuscarActions.getBuscarError());

    compare = {
      loading: false,
    };

    expect(state).toEqual({...INITIAL_STATE, ...compare});
  });
});
