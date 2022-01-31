import {
  SearchActionTypes,
  SortActionTypes,
  TestActionTypes,
} from "./../../types/index";
import {
  fetchTestseSuccess,
  fetchTestseError,
  searchSiteSuccess,
  searchSiteErroe,
} from "./../action-creators/tests";
import axios from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { sortError, sortSucces } from "../action-creators/site";
const fetchTest = () => {
  return axios.get("http://localhost:3100/tests");
};
function* FetchTestsWorker() {
  try {
    const { data } = yield call(fetchTest);
    yield put(fetchTestseSuccess(data));
  } catch (e) {
    yield put(fetchTestseError("Произошла ошибка при загрузке типов"));
  }
}
function* SearchSiteWorker(action: any) {
  try {
    yield put(searchSiteSuccess(action.payload));
  } catch (e) {
    yield put(searchSiteErroe("Произошла ошибка при поиске"));
  }
}
function* SortWorker(action: any) {
  try {
    yield put(sortSucces(action.payload));
  } catch (e) {
    yield put(sortError("Произошла ошибка при поиске"));
  }
}
export function* fetchTestsWatcher() {
  yield all([takeLatest(TestActionTypes.FETCH_TESTS, FetchTestsWorker)]);
  yield all([takeLatest(SearchActionTypes.SEARACH_TEST, SearchSiteWorker)]);
  yield all([takeLatest(SortActionTypes.SORT, SortWorker)]);
}
