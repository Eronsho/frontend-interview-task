import { combineReducers } from "redux";
import { siteReducer } from "./setteReducer";
import { testsReducer } from "./testsReducer";

export const rootReducer = combineReducers({
  tests: testsReducer,
  site: siteReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
