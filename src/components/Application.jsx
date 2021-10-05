import React from "react";
import useApplicationData from "hooks/useApplicationData";
import DayList from "components/DayList";
import Appointment from "components/Appointment/index"
import {getAppointmentsForDay, getInterview, getInterviewersForDay} from "helpers/selectors"

import "components/Application.scss";

//************************************ */
// Main application starts here.....
//************************************* */

export default function Application() {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const dailyAppointments = getAppointmentsForDay( state, state.day )
  const dailyInterviewers = getInterviewersForDay( state, state.day )

  const appointmentList = dailyAppointments.map((appointment) => {
    const interview = getInterview( state, appointment.interview);
  
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={dailyInterviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });
  

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentList}
      </section>
    </main>
  );
}
