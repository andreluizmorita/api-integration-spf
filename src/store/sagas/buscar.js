import {call, put} from "redux-saga/effects";
import api from "../../services/api";

import {Creators as ErroActions} from "../ducks/erro";
import {Creators as BuscarActions} from "../ducks/buscar";

export default function* getBuscar({payload}) {
  try {
    ErroActions.hideErro();
    api.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem("token") ||
      "request-token"}`;

    const response = yield call(
      api.get,
      `/search?query=${payload.buscar}&offset=0&limit=10&type=album,track`
    );

    yield put(BuscarActions.getBuscarSuccess(response.data, payload.buscar));
  } catch (err) {
    yield put(BuscarActions.getBuscarError());

    if (typeof err.response !== "undefined" && err.response.status === 401) {
      yield put(ErroActions.showInputToken(true));
    } else {
      yield put(ErroActions.setErro("Não foi possivel obter os dados"));
    }
  }
}
