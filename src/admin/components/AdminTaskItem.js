import React, { useState } from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/FormElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import "./AdminTaskItem.css";

const AdminTaskItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5001/api/admin/${props.id}`,
        "DELETE"
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              Cancel
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Delete
            </Button>
          </React.Fragment>
        }
      >
        <p>Do you want to proceed?</p>
      </Modal>
      <li className="place-item ">
        <Card className="place-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          {/* <Link to={`/viewProfile/${props.id}`}> */}
          {/* <div className="task-item__image">
          <Avatar image={props.image} alt={props.name} />
        </div> */}
          <div className="place-item__info">
            <h2>EmployeeName: {props.employeeName}</h2>
            <h2>TaskName: {props.taskName}</h2>
            <h2>AssignedTo: {props.assignedTo}</h2>
            <h2>Description: {props.description}</h2>
            <h3>Task Given Date: {props.taskgivendate}</h3>
            <h3>Status: {props.status}</h3>
            <h3>DueDate: {props.dueDate}</h3>
            <h3>Priority: {props.priority}</h3>
          </div>
          <div className="place-item__actions">
            <Button danger onClick={showDeleteWarningHandler}>
              DELETE
            </Button>
          </div>

          {/* </Link> */}
        </Card>
      </li>
    </React.Fragment>
  );
};

export default AdminTaskItem;
