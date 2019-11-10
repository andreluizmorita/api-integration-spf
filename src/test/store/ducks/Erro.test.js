import reducer, {INITIAL_STATE, Creators as ErroActions} from "../../../store/ducks/erro";

describe("Testing store erro duck", () => {
  it("expect initial state", () => {
    const state = reducer(INITIAL_STATE, {});
    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it("show error message", () => {
    const message = "Ocorreu um erro";
    const state = reducer(INITIAL_STATE, ErroActions.setErro(message));
    expect(state).toEqual({...INITIAL_STATE, visible: true, message});
  });

  it("hide error message", () => {
    const message_state = {
      visible: true,
      message: "Ocorreu um erro",
      token: false,
    };
    const state = reducer(message_state, ErroActions.hideErro());
    expect(state).toEqual({...INITIAL_STATE, visible: false, message: null});
  });

  it("token message", () => {
    const compare = {
      visible: true,
      message: null,
      token: true,
    };
    const state = reducer(INITIAL_STATE, ErroActions.showInputToken());
    expect(state).toEqual({...INITIAL_STATE, ...compare});
  });
});
