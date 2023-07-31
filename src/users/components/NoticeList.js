import React, { Fragment } from "react";

import "./TaskList.css";
import NoticeItem from "./NoticeItem";

const NoticeList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Notice Found!</h2>
      </div>
    );
  }

  return (
    <ul className="admin-list">
      {/* <img
        src="https://voh-ny.com/wp-content/uploads/2018/12/important-notice-hi.png"
        width={200}
      /> */}
      {props.items.map((user) => (
        <NoticeItem
          key={user.id}
          id={user.id}
          title={user.title}
          description={user.description}
          date={user.date}
          image={user.image}
        />
      ))}
    </ul>
  );
};

export default NoticeList;
