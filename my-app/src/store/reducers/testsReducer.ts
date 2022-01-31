import {
  TestState,
  TestAction,
  TestActionTypes,
  SearchActionTypes,
  SearchAction,
  SortActionTypes,
  SortAction,
} from "./../../types/index";
const testsState: TestState = {
  tests: [],
  loading: false,
  error: null,
};
export const testsReducer = (
  state = testsState,
  action: TestAction | SearchAction | SortAction
): TestState => {
  switch (action.type) {
    case TestActionTypes.FETCH_TESTS:
      return { loading: true, error: null, tests: state.tests };
    case TestActionTypes.FETCH_TESTS_SUCCESSS:
      debugger;
      return {
        loading: false,
        tests: action.payload,
        error: null,
      };
    case TestActionTypes.FETCH_TESTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        tests: state.tests,
      };
    case SearchActionTypes.SEARACH_TEST:
      return { loading: true, error: null, tests: state.tests };
    case SearchActionTypes.SEARACH_TEST_SUCCESSS:
      return {
        loading: false,
        error: null,
        tests: state.tests.filter(
          (site) => site.name.toLowerCase() === action.payload.toLowerCase()
        ),
      };
    case SearchActionTypes.SEARACH_TEST_ERROR:
      return { loading: false, error: "aasd", tests: state.tests };
    case SortActionTypes.SORT:
      return { loading: true, error: null, tests: state.tests };
    case SortActionTypes.SORT_SUCCESSS:
      return {
        loading: false,
        error: null,
        tests: state.tests.slice().sort((a, b) => {
          if (action.payload === "name") {
            const nameA = a.name.toLowerCase().charAt(0);
            const nameB = b.name.toLowerCase().charAt(0);
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          }
          if (action.payload === "type") {
            const nameA = a.type.toLowerCase().charAt(0);
            const nameB = b.type.toLowerCase().charAt(0);
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
          }
          if (action.payload === "status") {
            const nameA = a.status.toLowerCase();
            const nameB = b.status.toLowerCase();
            const draft: string = "draft";
            if (nameA === draft) return 1;
            if (nameB === draft) return -1;
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          }
          if (action.payload === "site") {
            debugger;
            const nameA = a.siteId;
            const nameB = b.siteId;
            if (nameA === 2) return -1;
            if (nameA === 3) return 1;
            if (nameA === 1) return 0;
          }

          return 0;
        }),
      };
    default:
      return state;
  }
};
