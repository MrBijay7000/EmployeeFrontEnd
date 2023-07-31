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

const CreateNotice = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const navigate = useNavigate();

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      date: {
        value: "",
        isValid: false,
      },
      description: {
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
        "http://localhost:5001/api/admin/createNotice",
        "POST",
        JSON.stringify({
          title: formState.inputs.title.value,
          date: formState.inputs.date.value,

          description: formState.inputs.description.value,
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
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText="Please Enter A Valid Employee Id"
        />
        <Input
          id="date"
          element="input"
          type="date"
          label="Notice Create Date"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          errorText="Please Enter A Valid Title"
        />

        <Input
          id="description"
          element="textarea"
          type="text"
          label="Description (Description of the Notice)"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
          errorText="Please Enter A Valid Description (At least 5 letters)"
        />

        <Button type="submit" disabled={!formState.isValid}>
          ADD
        </Button>
      </form>
    </Fragment>
  );
};

export default CreateNotice;
