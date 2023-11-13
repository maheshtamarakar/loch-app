import React from "react";
import bell from "../../assets/bell2.svg";
import bar_chart from "../../assets/bar-chart.svg";
import arrow_dowm from "../../assets/triangle-down.svg";
import './style.css'

const NotificationCard = ({data}) => {
  return (
    <div className="notification_card">
      <div className="notifiation__bell">
        <img src={data?.type === 'email'? bell: bar_chart} alt="bell" />
        {data?.type === 'email' && <span>Save</span>}
      </div>
      <div className="notification__content">
      {data?.content}
      </div>
      {data?.type === 'email' &&  <div className="notification__gmail">{data?.email}</div>}
      {data?.type === 'wallet' && 
      <button className="wallet_btn">
        ${data?.wallet}
        <img src={arrow_dowm} alt="" />
      </button>
      }
    </div>
  );
};

export default NotificationCard;
