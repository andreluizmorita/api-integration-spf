export const Types = {
  SET: "erro/SET",
  HIDE: "erro/HIDE",
  TOKEN: "erro/token",
};

export const INITIAL_STATE = {
  visible: false,
  message: null,
  token: false,
};

export default function erro(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return {...state, visible: true, message: action.payload.message};
    case Types.HIDE:
      return {...state, visible: false, message: null};
    case Types.TOKEN:
      return {...state, visible: !state.visible, token: !state.token};
    default:
      return state;
  }
}

export const Creators = {
  setErro: message => ({
    type: Types.SET,
    payload: {message},
  }),

  hideErro: () => ({
    type: Types.HIDE,
  }),

  showInputToken: () => ({
    type: Types.TOKEN,
  }),
};
