import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  sortRequest,
  sortReverseRequest,
} from "../store/action-creators/tests";
import { Site, Sort, Test } from "../types";
import TestsItems from "./TestsItem";
import "./TestsList.scss";
type TestsListProps = {
  tests: Test[];
  site: Site[];
  sort: Sort[];
  loading: boolean;
};
const TestsList: React.FC<TestsListProps> = ({
  tests,
  site,
  loading,
  sort,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  interface BigObject {
    [index: string]: boolean;
  }

  const soretName = (payload: string) => {
    console.log(sort);
    for (let obj of sort) {
      const [key] = Object.keys(obj);
      if (key == payload && obj[key] == false) {
        dispatch(sortRequest(payload));
      } else if (key == payload && obj[key] == true) {
        dispatch(sortReverseRequest(payload));
      }
    }
  };
  // const sortRevers: BigObject = {
  //   name: false,
  //   type: false,
  //   status: false,
  //   site: false,
  // };
  // for (const key in sortRevers) {
  //   if (key == payload && sortRevers[key] == false) {
  //     sortRevers[key] = true;
  //     console.log(sortRevers);
  //   } else if (key == payload && sortRevers[key] == true) {
  //     dispatch(sortReverseRequest(payload));
  //     sortRevers[key] = false;
  //   }
  // }
  // return sortRevers;

  return (
    <div>
      <div className="filter">
        <div onClick={() => soretName("name")} className="filter__name text">
          name
        </div>
        <div
          onClick={() => soretName("type")}
          className="filter__type text type-bf "
        >
          type
        </div>
        <div
          onClick={() => soretName("status")}
          className="filter__status text"
        >
          status
        </div>
        <div onClick={() => soretName("site")} className="filter__site text">
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
