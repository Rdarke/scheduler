
// function will return an array of appointments for the given day.
export function getAppointmentsForDay(state, day) {
  const results = [];
  // finds the array via day argument.
  const locateDay = state.days.filter( dayObj => dayObj.name === day);
  
  // returns empty array if locateDay is empty
  if (locateDay.length === 0) {
    return results;
  }

  // push the desired object values into a new array based on the above keys.
  for (const val of locateDay[0].appointments) {
    results.push(state.appointments[val]);
  }
  return results;
}