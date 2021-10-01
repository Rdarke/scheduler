import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "components/DayList";
import Appointment from "components/Appointment/index"
import {getAppointmentsForDay} from "helpers/selectors"

import "components/Application.scss";

//************************************ */
// Main application starts here.....
//************************************* */

export default function Application() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments:{}
  })
  const setDay = day => setState({ ...state, day });

  // Should only render API data once therfore empty [] declaration 
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers'),
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviews: all[2].data }));
    });  
  }, []);
  
  const dailyAppointments = getAppointmentsForDay( {...state}, state.day )

  const appointmentList = dailyAppointments.map((appointment) => (<Appointment key={appointment.id} {...appointment} />))
  

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
