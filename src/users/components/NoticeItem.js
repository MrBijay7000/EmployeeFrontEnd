import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/FormElements/Card";
import "./TaskItem.css";

const NoticeItem = (props) => {
  return (
    <li className="place-item ">
      <Card className="place-item__content">
        {/* <Link to={`/viewProfile/${props.id}`}> */}
        {/* <div className="place-item__image">
          <Avatar image={props.image} alt={props.name} />
        </div> */}
        <h1 className="center">IMPORTANT NOTICE!!!</h1>
        <div className="place-item__info">
          <h3>Notice ID: {props.id}</h3>
          <h1>{props.image}</h1>
          <h2>Title: {props.title}</h2>
          <h2>Description: {props.description}</h2>
          <h2>Notice Created Date: {props.date}</h2>
        </div>
        {/* </Link> */}
      </Card>
    </li>
  );
};

export default NoticeItem;
