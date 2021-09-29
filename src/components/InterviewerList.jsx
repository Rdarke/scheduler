import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

//..
// InterviewerList Component, will render a full list of interviwer icons.
//..

export default function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list"></ul>
    </section>
  );
}
