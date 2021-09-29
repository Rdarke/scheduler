import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

//..
// InterviewerList Component, will render a full list of interviwer icons.
//..

export default function InterviewerList(props) {

  const interviews = props.interviewers.map((int) => (
    <InterviewerListItem
      key={int.id}
      name={int.name}
      avatar={int.avatar}
      selected={int.id === props.interviewer}
      setInterviewer={int.interviewer}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviews}</ul>
    </section>
  );
};
