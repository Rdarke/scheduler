import React from "react";

export default function DayListItem(props) {
  const {setDay, name, spots} = props

  return (
    <li onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{spots}</h3>
    </li>
  );
}