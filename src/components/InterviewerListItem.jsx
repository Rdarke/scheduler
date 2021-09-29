import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

//...
// InterviewerListItem renders a single profile image unless selected.
//...

export default function InterviewerListItem(props) {
  const {id, name, avatar, selected, setInterviewer} = props;

  const interviewersClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });

  return (
   <li className={interviewersClass} >
     <img onClick={() => setInterviewer(name)}
       className="interviewers__item-image"
       src={avatar}
       alt={name}
     />
     {props.selected && (name)}
   </li>
 );
 };

// className="interviewers__item-image"
// "interviewers__item-image": avatar
// "interviewers__item--selected-image": avatar
