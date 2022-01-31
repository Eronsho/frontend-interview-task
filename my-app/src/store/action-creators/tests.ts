import { SearchActionTypes, Test } from "./../../types/index";
import { TestActionTypes } from "../../types";

export const fetchTestseRequest = () => ({
  type: TestActionTypes.FETCH_TESTS,
});

export const fetchTestseSuccess = (payload: Test[]) => ({
  type: TestActionTypes.FETCH_TESTS_SUCCESSS,
  payload,
});
export const fetchTestseError = (payload: string) => ({
  type: TestActionTypes.FETCH_TESTS_ERROR,
  payload,
});
export const searchSiteRequest = (payload: string) => ({
  type: SearchActionTypes.SEARACH_TEST,
  payload,
});
export const searchSiteSuccess = (payload: string) => ({
  type: SearchActionTypes.SEARACH_TEST_SUCCESSS,
  payload,
});
export const searchSiteErroe = (payload: string) => ({
  type: SearchActionTypes.SEARACH_TEST_ERROR,
  payload,
});
