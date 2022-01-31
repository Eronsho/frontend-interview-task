import { sortSiteError, sortSiteSucces } from "./../action-creators/site";
import { SiteActionTypes, SortSiteActionTypes } from "./../../types/index";

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
function* SortSiteWorker(action: any) {
  try {
    yield put(sortSiteSucces(action.payload));
  } catch (e) {
    yield put(sortSiteError("Произошла ошибка при поиске"));
  }
}
export function* fetchSiteWatcher() {
  yield all([takeLatest(SiteActionTypes.FETCH_SITE, FetchSiteWorker)]);
  yield all([takeLatest(SortSiteActionTypes.SORT_SITE, SortSiteWorker)]);
}
