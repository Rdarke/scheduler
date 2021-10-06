import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

//....
// Main form component starts <here
//....

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  // function resets both name & interviwer values when called.
  const reset = () => {
    setName("");
    setInterviewer(null);
  };

  const cancelForm = () => {
    reset();
    props.onCancel();
  };

  // //function saves interviewer & name values on form submit.
  const saveForm = () => {
      if (name === "") {
        setError("Student name cannot be blank");
        return;
      }
    props.onSave(name, interviewer)
  };


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            value={name}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setName(event.target.value)}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
        </form >
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancelForm} danger>Cancel</Button>
          <Button onClick={saveForm} confirm>Save</Button>
        </section>
      </section>
    </main>
  );
}


