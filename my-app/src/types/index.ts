export interface TestState {
  tests: Test[];
  sort: Sort[];
  loading: boolean;
  error: null | string;
}
export interface Test {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}
enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT",
}
export interface Sort {
  [index: string]: boolean;
}

enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export enum TestActionTypes {
  FETCH_TESTS = "FETCH_TESTS",
  FETCH_TESTS_SUCCESSS = " FETCH_TESTS_SUCCESSS",
  FETCH_TESTS_ERROR = "FETCH_TESTS_ERROR",
}
interface FetchTestsAction {
  type: TestActionTypes.FETCH_TESTS;
}

interface FetchTestsSuccsessAction {
  type: TestActionTypes.FETCH_TESTS_SUCCESSS;
  payload: Test[];
}
interface FetchTestsErrorAction {
  type: TestActionTypes.FETCH_TESTS_ERROR;
  payload: string;
}
export type TestAction =
  | FetchTestsAction
  | FetchTestsSuccsessAction
  | FetchTestsErrorAction;
// ---------------------------------------------------------------------
export interface SiteState {
  site: Site[];
  loading: boolean;
  error: null | string;
}
export interface Site {
  id: number;
  url: string;
}

export enum SiteActionTypes {
  FETCH_SITE = "FETCH_SITE",
  FETCH_SITE_SUCCESSS = " FETCH_SITE_SUCCESSS",
  FETCH_SITE_ERROR = "FETCH_SITE_ERROR",
}
interface FetchSiteAction {
  type: SiteActionTypes.FETCH_SITE;
}

interface FetchSiteSuccsessAction {
  type: SiteActionTypes.FETCH_SITE_SUCCESSS;
  payload: Site[];
}
interface FetchSiteErrorAction {
  type: SiteActionTypes.FETCH_SITE_ERROR;
  payload: string;
}
export type SiteAction =
  | FetchSiteAction
  | FetchSiteSuccsessAction
  | FetchSiteErrorAction;
// --------------------------------------------------------------------------------------
export enum SearchActionTypes {
  SEARACH_TEST = "SEARACH_TEST",
  SEARACH_TEST_SUCCESSS = " SEARACH_TEST_SUCCESSS",
  SEARACH_TEST_ERROR = "SEARACH_TEST_ERROR",
}
interface SearchSiteAction {
  type: SearchActionTypes.SEARACH_TEST;
}

interface SearchSuccsessAction {
  type: SearchActionTypes.SEARACH_TEST_SUCCESSS;
  payload: string;
}
interface SearchErrorAction {
  type: SearchActionTypes.SEARACH_TEST_ERROR;
  payload: string;
}
export type SearchAction =
  | SearchSiteAction
  | SearchSuccsessAction
  | SearchErrorAction;
// /=======================================================================
export enum SortActionTypes {
  SORT = "SORT",
  SORT_SUCCESSS = " SORT_SUCCESSS",
  SORT_ERROR = "SORT_ERROR",
}
interface SortActionRequest {
  type: SortActionTypes.SORT;
}

interface SortSuccsessAction {
  type: SortActionTypes.SORT_SUCCESSS;
  payload: string;
}
interface SortErrorAction {
  type: SortActionTypes.SORT_ERROR;
  payload: string;
}
export type SortAction =
  | SortActionRequest
  | SortSuccsessAction
  | SortErrorAction;
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
export enum SortReverseActionTypes {
  SORT_REVERSE = "SORT_REVERSE",
  SORT_REVERSE_SUCCESSS = " SORT_REVERSE_SUCCESSS",
  SORT_REVERSE_ERROR = "SORT_REVERSE_ERROR",
}
interface SortReverseActionRequest {
  type: SortReverseActionTypes.SORT_REVERSE;
}

interface SortReverseSuccsessAction {
  type: SortReverseActionTypes.SORT_REVERSE_SUCCESSS;
  payload: string;
}
interface SortReverseErrorAction {
  type: SortReverseActionTypes.SORT_REVERSE_ERROR;
  payload: string;
}
export type SortReverseAction =
  | SortReverseActionRequest
  | SortReverseSuccsessAction
  | SortReverseErrorAction;
