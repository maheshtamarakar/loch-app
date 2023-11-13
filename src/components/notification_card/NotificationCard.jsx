import React from "react";
import arrow_dowm from "../../assets/triangle-down.svg";
import check_mark from "../../assets/Checkmark.svg";
import './style.css'

const NotificationCard = ({data}) => {
  return (
    <div className="notification_card">
      <div className="notifiation__bell">
        <img src={data?.img} alt={data?.type} />
        {data?.type === 'email' ? <span>Save</span> : <img src={check_mark} alt={data?.type} />}
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
      {data?.type === 'time' && 
      <>
     <button className="wallet_btn">
        {'>'}{data?.time}
        <img src={arrow_dowm} alt="" />
      </button>
      <p className="more_content">{data?.more_content}</p>
      </>
      }
    </div>
  );
};

export default NotificationCard;
