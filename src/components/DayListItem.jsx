import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

//....
// DayListItem starts <here
//.....

export default function DayListItem(props) {
  const { setDay, name, spots, selected } = props;

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0,
  });

  // Function formats spots to render user messaging based on available spots.
  const formatSpots = () => {
    if (spots === 0) {
      return "no spots remaining"
    }
    if (spots === 1) {
      return `${spots} spot remaining`
    }
      return `${spots} spots remaining`
  };

  return (
    <li className={dayClass} data-testid="day" onClick={() => setDay(name)}>
      <h2>{name}</h2>
      <h3>{formatSpots()}</h3>
    </li>
  );
};
