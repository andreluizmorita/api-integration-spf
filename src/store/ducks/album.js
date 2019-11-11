export const Types = {
  GET_REQUEST: "album/GET_REQUEST",
  GET_SUCCESS: "album/GET_SUCCESS",
  GET_ERROR: "album/GET_ERROR",
};

export const INITIAL_STATE = {
  data: {
    id: null,
    artist: null,
    name: null,
    cover: null,
    songs: {},
  },
  loading: true,
};

export default function album(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {...INITIAL_STATE, loading: true};
    case Types.GET_SUCCESS:
      const {id, name, images, artists, tracks} = action.payload.data;
      const cover = images[Object.keys(images)[0]].url;

      const data = {
        id,
        name,
        cover,
        artist: artists[Object.keys(artists)[0]].name,
        songs: tracks.items.map(item => {
          return {
            id: item.id,
            album: name,
            title: item.name,
            preview_url: item.preview_url,
            duration: item.duration_ms,
            cover,
          };
        }, cover),
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
