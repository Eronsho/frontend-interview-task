import React from "react";
import { useHistory } from "react-router-dom";
import "./Results.scss";
const Result: React.FC = () => {
  const history = useHistory();
  return (
    <div className="result">
      <div className="result__title">Order basket redesing</div>
      <div onClick={() => history.push("/")} className="result__btn ">
        Back
      </div>
    </div>
  );
};
export default Result;
