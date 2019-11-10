import {call, put} from "redux-saga/effects";
import api from "../../services/api";

import {Creators as ErroActions} from "../ducks/erro";
import {Creators as AlbumActions} from "../ducks/album";

export default function* getAlbum({payload}) {
  try {
    ErroActions.hideErro();
    api.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem("token") ||
      "request-token"}`;

    const response = yield call(api.get, `/albums/${payload.albumId}`);

    yield put(AlbumActions.getAlbumSuccess(response.data));
  } catch (err) {
    yield put(AlbumActions.getAlbumError());

    if (typeof err.response !== "undefined" && err.response.status === 401) {
      yield put(ErroActions.showInputToken(true));
    } else {
      yield put(ErroActions.setErro("Não foi possivel obter os dados"));
    }
  }
}
