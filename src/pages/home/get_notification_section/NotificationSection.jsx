import React, { useEffect, useState } from "react";
import "./style.css";
import bell from "../../../assets/bell2.svg";
import bar_chart from "../../../assets/bar-chart.svg";
import clock from "../../../assets/clock.svg";
import NotificationCard from "../../../components/notification_card/NotificationCard";

const NotificationSection = (e) => {
  const [notificationData, setNotificationData] = useState([])
  useEffect(() => {
    setNotificationData([
      {
       type: 'email',
       content: 'We’ll be sending notifications to you here',
       more_content: null,
       email: 'hello@gmail.com',
       wallet:null,
       time: null,
       img: bell
      },
      {
       type: 'wallet',
       content: 'Notify me when any wallets move more than',
       more_content: null,
       email: null,
       wallet: 1000.00,
       time: null,
       img: bar_chart
      },
      {
       type: 'time',
       content: 'Notify me when any wallet dormant for',
       more_content: 'becomes active',
       email: null,
       wallet: null,
       time: 30,
       img: clock

      },
      {
       type: 'email',
       content: 'We’ll be sending notifications to you here',
       more_content: null,
       email: 'hello@gmail.com',
       wallet:null,
       time: null,
       img: bell
      },
      {
       type: 'wallet',
       content: 'Notify me when any wallets move more than',
       more_content: null,
       email: null,
       wallet: 1000.00,
       time: null,
       img: bar_chart
      },
      {
       type: 'time',
       content: 'Notify me when any wallet dormant for',
       more_content: 'becomes active',
       email: null,
       wallet: null,
       time: 30,
       img: clock

      },
    ])
  }, [])
  
  return (
    <div className="notification__section">
      <div className="notification__left">
        <img src={bell} alt="bell" />
        <h3>Get notified when a highly correlated whale makes a move</h3>
        <p>
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
      <div className="notification__right">
        <div className="notification_track">
          { notificationData.length && notificationData.map((data) => (
            <div className="notification">
            <NotificationCard data={data} />
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default NotificationSection;
