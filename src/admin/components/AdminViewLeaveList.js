import React from "react";
import TaskItem from "./AdminTaskItem";
import "./AdminTaskList.css";

const AdminViewLeaveList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Tasks Found!</h2>
      </div>
    );
  }

  return (
    <ul className="admin-list">
      {props.items.map((user) => (
        <TaskItem
          key={user.id}
          id={user.id}
          title={user.title}
          reason={user.reason}
          startDate={user.startDate}
          endDate={user.endDate}
          appliedDate={user.appliedDate}
          duration={user.duration}
          status={user.status}
          onDelete={props.onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default AdminViewLeaveList;
