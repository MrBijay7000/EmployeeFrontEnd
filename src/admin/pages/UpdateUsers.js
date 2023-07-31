import React, { Fragment, useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useNavigate } from "react-router-dom";

import "./AssignTask.css";
import DropdownComponent from "../../shared/components/UIElements/Dropdown";

const AssignTask = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const navigate = useNavigate();

  const [formState, inputHandler] = useForm(
    {
      employeeName: {
        value: "",
        isValid: false,
      },
      taskName: {
        value: "",
        isValid: false,
      },
      // assignedTo: {
      //   value: "",
      //   isValid: false,
      // },
      description: {
        value: "",
        isValid: false,
      },
      taskgivendate: {
        value: "",
        isValid: false,
      },
      // status: {
      //   value: "",
      //   isValid: false,
      // },
      dueDate: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const taskgivenHandler = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        `http://localhost:5001/api/users/${employeeId}`,

        "POST",
        JSON.stringify({
          employeeName: formState.inputs.employeeName.value,
          taskName: formState.inputs.taskName.value,
          // assignedTo: formState.inputs.assignedTo.value,
          description: formState.inputs.description.value,
          taskgivendate: formState.inputs.taskgivendate.value,
          // status: formState.inputs.status.value,
          dueDate: formState.inputs.dueDate.value,
          // priority: formState.inputs.priority.value,
        }),

        {
          "Content-Type": "application/json",
        }
      );
      console.log(responseData);
      navigate("/admin");
    } catch (err) {}
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />

      <form className="assigntask" onSubmit={taskgivenHandler}>
        {isLoading}
        <Input
          id="employeeName"
          element="input"
          type="text"
          label="Employee Name"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText="Please Enter A Valid Employee Id"
        />
        <Input
          id="taskName"
          element="input"
          type="text"
          label="Task Name"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText="Please Enter A Valid Title"
        />

        <Input
          id="description"
          element="textarea"
          type="text"
          label="Description (Description of the task)"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
          errorText="Please Enter A Valid Description (At least 5 letters)"
        />
        <Input
          id="taskgivendate"
          element="input"
          type="date"
          label="Task Given Date"
          validators={[VALIDATOR_REQUIRE()]}
          min="2022-01-31"
          max="2025-12-31"
          onInput={inputHandler}
          errorText="Please Enter A Valid Date"
        />

        <Input
          id="dueDate"
          element="input"
          type="date"
          label="Due Date"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText="Please Enter A Valid DueDate For This Task"
        />

        <Button type="submit" disabled={!formState.isValid}>
          ASSIGN
        </Button>
      </form>
    </Fragment>
  );
};

export default AssignTask;
