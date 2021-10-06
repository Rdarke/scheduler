// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     appointments: [1, 2],
//     interviewers: [1, 2],
//     spots: 0,
//   },
// ];

// const appointments = {
//   1: {
//     id: 1,
//     time: "12pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: 1,
//     },
//   },
//   2: {
//     id: 2,
//     time: "1pm",
//     interview: null,
//   },
// };

// const interviewers = {
//   1: {
//     id: 1,
//     name: "Sylvia Palmer",
//     avatar: "https://i.imgur.com/LpaY82x.png",
//   },
//   2: {
//     id: 2,
//     name: "Tori Malcolm",
//     avatar: "https://i.imgur.com/Nmx0Qxo.png",
//   },
// };

// const state = {
//   day: "Monday",
//   days,
//   appointments,
//   interviewers,
// };

// Updates the value of the key "spots" inside a specific day, based on appointment id.
// function updateSpots(state, id) {
//   const newState = { ...state };
//   let counter = 0;

//   // Finds the day object inside state.days []
//   const foundDay = newState.days.find((element) =>
//     element.appointments.includes(id)
//   );

//   //.Finds the day {} index inside the days []
//   const dayIndex = newState.days.findIndex(
//     (element) => element.id === foundDay.id
//   );

//   // Loops through the day.appointments [] & if interview  is null + to counter
//   for (const appID of foundDay.appointments) {
//     if (newState.appointments[appID].interview === null) counter = counter + 1;
//   }

//   dayObj = { ...foundDay, spots: counter };
//   newState.days[dayIndex] = dayObj;

  // Sets state with updated amount of spots per day.
  // setState(newState);
//};

// updateSpots(state, 2);
