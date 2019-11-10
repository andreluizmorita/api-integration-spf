import {all, takeLatest} from "redux-saga/effects";

import {Types as AlbumTypes} from "../ducks/album";
import {Types as BuscarTypes} from "../ducks/buscar";

import getAlbum from "./album";
import getBuscar from "./buscar";

export default function* rootSaga() {
  yield all([
    takeLatest(AlbumTypes.GET_REQUEST, getAlbum),
    takeLatest(BuscarTypes.GET_REQUEST, getBuscar),
  ]);
}
