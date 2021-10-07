import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import useVisualMode from "hooks/useVisualMode"
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";

// supporting mode constRants for useVisualMode custom hook.
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

// Appointments gains props from Application.jsx
export default function Appointment(props) {
  const {interview, time, interviewers, id, bookInterview, cancelInterview} = props

  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  // Function creates a new interview object and transfers data to bookInterview API Call function.
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    bookInterview(id, interview)
    .then(() => transition(SHOW))
    .catch(error => transition(ERROR_SAVE, true));
  };

  // Destructive action, Function removes selected interview from the DB. Once user confirms.
  function remove(student, interviewer) {
    const interview = {
      student: student,
      interviewer: interviewer
    };
    transition(DELETING, true);
    cancelInterview(id, interview)
    .then(() => transition(EMPTY))
    .catch(error => transition(ERROR_DELETE, true));
  };

  return (
    <article className=".appointment">
      <Header time={time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form 
        interviewers={interviewers}
        onSave={save}
        onCancel={() => back()} />)}
      {mode === SAVING && <Status message={`Saving....`}/>}
      {mode === DELETING && <Status message={`Deleting....`}/>}
      {mode === SHOW && (
        <Show 
        student={interview.student} 
        interviewer={interview.interviewer}
        onDelete={() => transition(CONFIRM)}
        onEdit={() => transition(EDIT)}
        />
      )}
      {mode === EDIT && (
        <Form
        interviewers={interviewers}
        name={interview.student}
        interviewer={interview.interviewer.id}
        onSave={save}
        onCancel={() => back()} />)}
      {mode === CONFIRM && (
        <Confirm
        student={interview.student} 
        interviewer={interview.interviewer}
        onConfirm={remove}
        onCancel={() => back()}
        />)}
        {mode === ERROR_SAVE && (
          <Error onClose={() => back()}/>
        )}
        {mode === ERROR_DELETE && (
          <Error onClose={() => back()}/>
        )}
    </article>
  );
};