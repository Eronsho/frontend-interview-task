import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchSiteRequest } from "../store/action-creators/tests";
import { Test } from "../types";
import "./Search.scss";
type SearchProps = {
  tests: Test[];
};
const Search: React.FC<SearchProps> = ({ tests }) => {
  const dispatch = useDispatch();
  const [filter, setfilter] = useState("");
  const search = () => {
    if (filter.length > 0) {
      dispatch(searchSiteRequest(filter));
    }
  };
  return (
    <div className="search">
      <div className="search__logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <g data-name="search">
              <rect width="10" height="10" opacity="0" />
              <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
            </g>
          </g>
        </svg>
      </div>
      <input
        value={filter}
        onChange={(e) => setfilter(e.target.value)}
        placeholder="What test are you looking for?"
        className="search__input"
      />
      <div onClick={search} className="search__btn">
        7 tests
      </div>
    </div>
  );
};

export default Search;
