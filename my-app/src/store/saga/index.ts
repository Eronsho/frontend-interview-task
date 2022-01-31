import { all, fork } from "redux-saga/effects";
import { fetchSiteWatcher } from "./site";
import { fetchTestsWatcher } from "./tests";

export function* rootWatcher() {
  yield all([fork(fetchTestsWatcher)]);
  yield all([fork(fetchSiteWatcher)]);
}
