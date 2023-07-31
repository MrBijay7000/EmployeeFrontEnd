import React from "react";
import TaskItem from "./AdminTaskItem";
import "./AdminTaskList.css";

const AdminTaskList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Tasks Found!</h2>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((user) => (
        <TaskItem
          key={user.id}
          id={user.id}
          employeeName={user.employeeName}
          taskName={user.taskName}
          assignedTotartDate={user.assignedTo}
          description={user.description}
          taskgivendate={user.taskgivendate}
          status={user.status}
          dueDate={user.dueDate}
          priority={user.priority}
          onDelete={props.onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default AdminTaskList;
