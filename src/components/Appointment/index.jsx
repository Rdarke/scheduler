import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import useVisualMode from "hooks/useVisualMode"
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";

// supporting mode constants for useVisualMode custom hook.
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";

// Appointments gains props from Application.jsx
export default function Appointment(props) {
  const {interview, time, interviewers, id, bookInterview, cancelInterview} = props

  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    bookInterview(id, interview).then(() => transition(SHOW));
  };

  function remove(student, interviewer) {
    const interview = {
      student: student,
      interviewer: interviewer
    };
    cancelInterview(id, interview);
    transition(EMPTY);
  };

  return (
    <article className="appointment">
      <Header time={time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form 
        interviewers={interviewers}
        onSave={save}
        onCancel={() => back()} />)}
      {mode === SAVING && <Status message={"Saving...."}/>}
      {mode === SHOW && (
        <Show 
        student={interview.student} 
        interviewer={interview.interviewer}
        onDelete={remove}
        />
      )}
    </article>
  );
};