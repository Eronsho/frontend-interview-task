import { SiteActionTypes } from "./../../types/index";

import axios from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { fetchSiteError, fetchSiteSuccess } from "../action-creators/site";
const fetchSite = () => {
  return axios.get("http://localhost:3100/sites");
};
function* FetchSiteWorker() {
  try {
    const { data } = yield call(fetchSite);
    yield put(fetchSiteSuccess(data));
  } catch (e) {
    yield put(fetchSiteError("Произошла ошибка при загрузке типов"));
  }
}

export function* fetchSiteWatcher() {
  yield all([takeLatest(SiteActionTypes.FETCH_SITE, FetchSiteWorker)]);
}
