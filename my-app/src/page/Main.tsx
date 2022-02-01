import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTestseRequest } from "../store/action-creators/tests";
import { useTypeSelector } from "../hooks/useTypeSelector";
import Search from "../components/Search";
import TestsList from "../components/TestsList";
import "./Main.scss";
import { fetchSiteRequest } from "../store/action-creators/site";

const Main: React.FC = () => {
  const { tests, loading, sort } = useTypeSelector((state) => state.tests);
  const { site } = useTypeSelector((state) => state.site);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTestseRequest());
    dispatch(fetchSiteRequest());
  }, []);

  return (
    <div className="main">
      <div className="main__container">
        <div className="main__title">Dashboard</div>

        <Search tests={tests} />
        <TestsList site={site} loading={loading} tests={tests} sort={sort} />
      </div>
    </div>
  );
};
export default Main;
