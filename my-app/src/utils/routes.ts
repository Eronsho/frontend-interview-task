import Finalize from "../page/Finalize";
import Main from "../page/Main";
import Result from "../page/Results";
import { FINALIZE_ROUTE, MAIN_ROUTE, RESULTS_ROUTE } from "./consts";

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: FINALIZE_ROUTE + "/:id",
    Component: Finalize,
  },
  {
    path: RESULTS_ROUTE + "/:id",
    Component: Result,
  },
];
