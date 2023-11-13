import React from "react";
import "./style.css";
import whaleImg from "../../../assets/Cohorts1.svg";
import eye from "../../../assets/Eye.svg";

const WatchWhale = () => {
  return (
    <div className="watch_whale__section">
      <div className="whale_left">
        <img src={whaleImg} alt="" />
      </div>
      <div className="whale_right">
        <div className="eye_icon">
          <img src={eye} alt="eye" />
        </div>
        <h3>Watch what the whales are doing</h3>
        <p>
        All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.
        </p>
      </div>
    </div>
  );
};

export default WatchWhale;
