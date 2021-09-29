import React from "react";
import "components/DayListItem.scss";
import classNames from 'classnames';
// const classNames = require();

//....
// DayListItem starts <here
//.....

export default function DayListItem(props) {
  const {setDay, name, spots, selected} = props

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  return (
    <li 
    className={dayClass}
    onClick={() => setDay(name)}
    >
      <h2 >{name}</h2>
      <h3 >{spots}</h3>
    </li>
  );
}

