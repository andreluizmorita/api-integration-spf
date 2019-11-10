export const Types = {
  GET_REQUEST: "buscar/GET_REQUEST",
  GET_SUCCESS: "buscar/GET_SUCCESS",
  GET_ERROR: "buscar/GET_ERROR",
};

export const INITIAL_STATE = {
  data: {
    albums: {
      items: [],
    },
    tracks: {
      items: [],
    },
  },
  busca: "",
  loading: false,
};

export default function buscar(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {...INITIAL_STATE, loading: true};
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        busca: action.payload.busca,
      };
    case Types.GET_ERROR:
      return {...INITIAL_STATE};
    default:
      return state;
  }
}

export const Creators = {
  getBuscarRequest: buscar => ({
    type: Types.GET_REQUEST,
    payload: {buscar},
  }),

  getBuscarSuccess: ({data, busca}) => ({
    type: Types.GET_SUCCESS,
    payload: {data, busca},
  }),

  getBuscarError: () => ({
    type: Types.GET_ERROR,
  }),
};
