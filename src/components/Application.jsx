import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "components/DayList";
import Appointment from "components/Appointment/index"

import "components/Application.scss";

// testing data for appointments
const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
  id: 3,
    time: "2pm",
    interview: {
      student: "Ricky Bobby",
      interviewer: {
        id: 3,
        name: "Mildred Nazir",
        avatar: "https://i.imgur.com/T2WwVfS.png",
      }
    }
  },
  {
    id: 3,
      time: "3pm",
      interview: {
        student: "Fanky Lillian",
        interviewer: {
          id: 3,
          name: "Mildred Nazir",
          avatar: "https://i.imgur.com/T2WwVfS.png",
        }
      }
    },
    {
      id: 2,
      time: "4pm",
    },
    {
      id: 2,
      time: "5pm",
      interview: {
        student: "Hoolio Jones",
        interviewer: {
          id: 5,
          name: "Sven Jones",
          avatar: "https://i.imgur.com/twYrpay.jpg",
        }
      }
    },
];


export default function Application() {
  const [day, setDay] = useState("Monday")
  const [days, setDays] = useState([])
  const appointmentList = appointments.map((appointment) => (<Appointment key={appointment.id} {...appointment} />))

  // Should only render API data once therfore empty [] declaration 
  useEffect(() => {
    axios.get('/api/days')
      .then((response) => {
        setDays(response.data);
      });
  }, []);

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
            days={days}
            day={day}
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
