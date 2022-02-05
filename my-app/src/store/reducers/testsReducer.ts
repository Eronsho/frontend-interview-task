import {
  TestState,
  TestAction,
  TestActionTypes,
  SearchActionTypes,
  SearchAction,
  SortActionTypes,
  SortAction,
  SortReverseAction,
  SortReverseActionTypes,
} from "./../../types/index";
const testsState: TestState = {
  tests: [],
  loading: false,
  error: null,
  sort: [{ name: false }, { type: false }, { status: false }, { site: false }],
};
export const testsReducer = (
  state = testsState,
  action: TestAction | SearchAction | SortAction | SortReverseAction
): TestState => {
  switch (action.type) {
    case TestActionTypes.FETCH_TESTS:
      return {
        ...state,
        loading: true,
        error: null,
        tests: state.tests,
        sort: state.sort,
      };
    case TestActionTypes.FETCH_TESTS_SUCCESSS:
      return {
        ...state,
        loading: false,
        tests: action.payload,
        error: null,
        sort: state.sort,
      };
    case TestActionTypes.FETCH_TESTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        tests: state.tests,
        sort: state.sort,
      };
    case SearchActionTypes.SEARACH_TEST:
      return {
        ...state,
        loading: true,
        error: null,
        tests: state.tests,
        sort: state.sort,
      };
    case SearchActionTypes.SEARACH_TEST_SUCCESSS:
      return {
        ...state,
        loading: false,
        error: null,
        tests: state.tests.filter(
          (site) => site.name.toLowerCase() === action.payload.toLowerCase()
        ),
        sort: state.sort,
      };
    case SearchActionTypes.SEARACH_TEST_ERROR:
      return {
        ...state,
        loading: false,
        error: "aasd",
        tests: state.tests,
        sort: state.sort,
      };
    case SortActionTypes.SORT:
      return {
        ...state,
        loading: true,
        error: null,
        tests: state.tests,
        sort: state.sort,
      };
    case SortActionTypes.SORT_SUCCESSS:
      return {
        ...state,
        loading: false,
        error: null,
        sort: state.sort.map((obj) => {
          const [key] = Object.keys(obj);
          obj[key] = false;
          if (key === action.payload) {
            obj[key] = true;
          }
          return obj;
        }),
        tests: state.tests.slice().sort((a, b) => {
          if (action.payload === "name") {
            const nameA = a.name.toLowerCase().charAt(0);
            const nameB = b.name.toLowerCase().charAt(0);
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          } else if (action.payload === "type") {
            const nameA = a.type.toLowerCase().charAt(0);
            const nameB = b.type.toLowerCase().charAt(0);
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
          } else if (action.payload === "status") {
            const nameA = a.status.toLowerCase();
            const nameB = b.status.toLowerCase();
            const draft: string = "draft";
            if (nameA === draft) return 1;
            if (nameB === draft) return -1;
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          } else if (action.payload === "site") {
            debugger;
            const nameA = a.siteId;
            const nameB = b.siteId;

            if (nameA === 2) return -1;
            if (nameA === 3) return 1;
            if (nameA === 1) return 0;

            return -1;
          }
          return 0;
        }),
      };
    case SortReverseActionTypes.SORT_REVERSE:
      return {
        ...state,
        loading: true,
        error: null,
        tests: state.tests,
        sort: state.sort,
      };
    case SortReverseActionTypes.SORT_REVERSE_SUCCESSS:
      debugger;
      return {
        ...state,
        loading: false,
        error: null,
        sort: state.sort.map((obj) => {
          const [key] = Object.keys(obj);
          if (key === action.payload) {
            obj[key] = false;
          }
          return obj;
        }),
        tests: state.tests.slice().sort((a, b) => {
          if (action.payload === "name") {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameB < nameA) return -1;
            if (nameB > nameA) return 1;
            return 0;
          } else if (action.payload === "type") {
            const nameA = a.type.toLowerCase().charAt(0);
            const nameB = b.type.toLowerCase().charAt(0);
            if (nameB < nameA) return -1;
            if (nameB > nameA) return 1;
          } else if (action.payload === "status") {
            const nameA = a.status.toLowerCase();
            const nameB = b.status.toLowerCase();
            const draft: string = "draft";
            if (nameB === draft) return 1;
            if (nameA === draft) return -1;
            if (nameB < nameA) return -1;
            if (nameB > nameA) return 1;
            return 0;
          } else if (action.payload === "site") {
            debugger;
            const nameA = a.siteId;
            const nameB = b.siteId;
            if (nameA === 2) return 1;
            if (nameA === 3) return 0;
            if (nameA === 1) return -1;
          }
          return 0;
        }),
      };
    default:
      return state;
  }
};
