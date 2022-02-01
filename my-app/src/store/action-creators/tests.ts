import {
  SearchActionTypes,
  SortActionTypes,
  SortReverseActionTypes,
  Test,
} from "./../../types/index";
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

export const sortRequest = (payload: string) => ({
  type: SortActionTypes.SORT,
  payload,
});
export const sortSucces = (payload: string) => ({
  type: SortActionTypes.SORT_SUCCESSS,
  payload,
});
export const sortError = (payload: string) => ({
  type: SortActionTypes.SORT_SUCCESSS,
  payload,
});
export const sortReverseRequest = (payload: string) => ({
  type: SortReverseActionTypes.SORT_REVERSE,
  payload,
});
export const sortReverseSucces = (payload: string) => ({
  type: SortReverseActionTypes.SORT_REVERSE_SUCCESSS,
  payload,
});
export const sortReverseError = (payload: string) => ({
  type: SortReverseActionTypes.SORT_REVERSE_ERROR,
  payload,
});
