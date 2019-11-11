export const Types = {
  GET_REQUEST: "buscar/GET_REQUEST",
  GET_CACHE: "buscar/GET_CACHE",
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
  cache: [],
  loading: false,
};

export default function buscar(state = INITIAL_STATE, action) {
  switch (action.type) {
    // TODO (André Morita) migrate check cache the component to redux
    case Types.GET_CACHE:
      const busca = action.payload.buscar;
      const cache = state.cache.filter(
        cache => cache.buscar.toUpperCase() === busca.toUpperCase(),
        busca
      );

      const data = {
        data: cache[Object.keys(cache)[0]].data,
        buscar: cache[Object.keys(cache)[0]].buscar,
      };

      return {...INITIAL_STATE, ...data, loading: false};
    case Types.GET_REQUEST:
      return {...INITIAL_STATE, loading: false};
    case Types.GET_SUCCESS:
      if (state.cache.length > 10) {
        state.cache.shift();
      }
      const addCache = {
        data: {...action.payload.data},
        buscar: action.payload.busca,
      };
      state.cache.push(addCache);

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
  getCache: buscar => ({
    type: Types.GET_CACHE,
    payload: {buscar},
  }),

  getBuscarRequest: buscar => ({
    type: Types.GET_REQUEST,
    payload: {buscar},
  }),

  getBuscarSuccess: (data, busca) => ({
    type: Types.GET_SUCCESS,
    payload: {data, busca},
  }),

  getBuscarError: () => ({
    type: Types.GET_ERROR,
  }),
};
