import React from "react";
import { useHistory } from "react-router-dom";
import "./Finalize.scss";

const Finalize: React.FC = () => {
  const history = useHistory();
  return (
    <div className="finlize">
      <div className="finlize__title">Finalize</div>
      <div className="finlize__sub-title">Spring promotion</div>
      <div onClick={() => history.push("/")} className="finlize__btn">
        Back
      </div>
    </div>
  );
};
export default Finalize;
