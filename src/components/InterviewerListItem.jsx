import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

//...
// InterviewerListItem renders a single profile image unless selected.
//...

export default function InterviewerListItem(props) {
  const { name, avatar, selected, setInterviewer} = props;

  // Updates css styles based on user input.
  const interviewersClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });

  return (
   <li className={interviewersClass} onClick={setInterviewer}>
     <img
       className="interviewers__item-image"
       src={avatar}
       alt={name}
     />
     {selected && (name)}
   </li>
 );
 };