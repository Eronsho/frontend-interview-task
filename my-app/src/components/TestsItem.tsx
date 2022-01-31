import React from "react";
import { useHistory } from "react-router-dom";
import "./TestsItem.scss";
import { Site, Test } from "../types";
import { FINALIZE_ROUTE, RESULTS_ROUTE } from "../utils/consts";
type TestsItemProps = {
  test: Test;
  site: Site[];
};
const TestsItems: React.FC<TestsItemProps> = ({ test, site }) => {
  const history = useHistory();
  const draft: string = "DRAFT";
  const online: string = "ONLINE";
  const paused: string = "PAUSED";
  const Stopped: string = "STOPPED";
  return (
    <>
      <div className="item-tests">
        <div
          style={{
            background:
              test.siteId === 1
                ? "#E14165;"
                : test.siteId === 2
                ? "#C2C2FF"
                : "#8686FF",
          }}
          className="item-tests__color"
        ></div>
        <div className="item-tests__name">{test.name}</div>
        <div className="item-tests__type">{test.type}</div>
        <div
          style={{
            color:
              test.status === online
                ? "#1BDA9D;"
                : test.status === paused
                ? "#FF8346"
                : test.status === Stopped
                ? "#FE4848"
                : "#5C5C5C",
          }}
          className="item-tests__status"
        >
          {test.status}
        </div>
        <div className="item-tests__site">
          {site.map((site) =>
            site.id === test.siteId
              ? site.url.replace(/(^\w+:|^)\/\//, "").replace("www.", "")
              : ""
          )}
        </div>
        {test.status === draft ? (
          <button
            style={{ background: "#7D7D7D" }}
            className="item-tests__btn "
            onClick={() => history.push(FINALIZE_ROUTE + "/" + test.id)}
          >
            Finalize
          </button>
        ) : (
          <button
            className="item-tests__btn   "
            onClick={() => history.push(RESULTS_ROUTE + "/" + test.id)}
          >
            Results
          </button>
        )}
      </div>
    </>
  );
};

export default TestsItems;
