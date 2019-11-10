export const Types = {
  GET_REQUEST: "cache/GET_REQUEST",
  GET_SUCCESS: "cache/GET_SUCCESS",
  GET_ERROR: "cache/GET_ERROR",
};

export const INITIAL_STATE = {
  data: {
    busca: "",
    albums: {
      items: [],
    },
    tracks: {
      items: [],
    },
  },
  loading: false,
};

export default function cache(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        busca: action.payload.busca,
      };
    default:
      return state;
  }
}

export const Creators = {
  addCache: ({data, busca}) => ({
    type: Types.GET_SUCCESS,
    payload: {data, busca},
  }),
};
