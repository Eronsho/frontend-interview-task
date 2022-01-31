import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sortRequest } from "../store/action-creators/site";
import { Site, Test } from "../types";
import TestsItems from "./TestsItem";
import "./TestsList.scss";
type TestsListProps = {
  tests: Test[];
  site: Site[];
  loading: boolean;
};
const TestsList: React.FC<TestsListProps> = ({ tests, site, loading }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const soretName = (payload: string) => {
    dispatch(sortRequest(payload));
  };

  return (
    <div>
      <div className="filter">
        <div onClick={() => soretName("name")} className="filter__name text">
          name
        </div>
        <div
          onClick={() => dispatch(sortRequest("type"))}
          className="filter__type text type-bf "
        >
          type
        </div>
        <div
          onClick={() => dispatch(sortRequest("status"))}
          className="filter__status text"
        >
          status
        </div>
        <div
          onClick={() => dispatch(sortRequest("site"))}
          className="filter__site text"
        >
          site
        </div>
      </div>

      {loading === true ? (
        "loading  "
      ) : tests.length > 0 ? (
        tests.map((test) => (
          <TestsItems site={site} key={test.id} test={test} />
        ))
      ) : (
        <div className="error">
          <div className="error__title">
            Your search did not match any results.
          </div>
          <div onClick={() => history.push("/")} className="error__btn">
            Reset
          </div>
        </div>
      )}
    </div>
  );
};
export default TestsList;
