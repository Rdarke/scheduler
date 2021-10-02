import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import useVisualMode from "hooks/useVisualMode"
import Form from "components/Appointment/Form";

// supporting mode constants for useVisualMode custom hook.
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

// Appointments gains props from Application.jsx
export default function Appointment(props) {
  const {interview, time} = props

  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form 
        interviewers={[]}
        onCancel={() => back()} />)}
      {mode === SHOW && (
        <Show 
        student={interview.student} 
        interviewer={interview.interviewer}
        />
      )}
    </article>
  );
};