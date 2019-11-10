export const Types = {
  GET_REQUEST: "album/GET_REQUEST",
  GET_SUCCESS: "album/GET_SUCCESS",
  GET_ERROR: "album/GET_ERROR",
};

export const INITIAL_STATE = {
  data: {
    name: "",
    images: {},
    artists: {},
    tracks: {
      items: [],
    },
  },
  loading: false,
};

export default function album(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {...INITIAL_STATE, loading: true};
    case Types.GET_SUCCESS:
      const {id, name, images, artists, tracks} = action.payload.data;

      const data = {
        id,
        name,
        images,
        artists,
        tracks,
      };

      return {...state, loading: false, data};
    case Types.GET_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
}

export const Creators = {
  getAlbumRequest: albumId => ({
    type: Types.GET_REQUEST,
    payload: {albumId},
  }),

  getAlbumSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {data},
  }),

  getAlbumError: () => ({
    type: Types.GET_ERROR,
  }),
};
