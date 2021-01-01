import React from "react";
import "components/Application.scss";
import DayList from './DayList'
import Appointment from 'components/appointment'
import {getAppointmentsForDay, getInterview, getInterviewersForDay} from 'helpers/selectors';
import useApplicationData from 'hooks/useApplicationData'


export default function Application(props) {
  
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview,
    setSpots
  } = useApplicationData();
  
  // appointmentsLoop maps and returns an appointment objects from the api to be printed.

    let appointmentsLoop = getAppointmentsForDay(state, state.day).map((appointment) => {
      const interview = getInterview(state, appointment.interview);
      let interviewers = getInterviewersForDay(state, state.day)
      return (
        <Appointment
          key={appointment.id}
          id={appointment.id}
          time={appointment.time}
          bookInterview={bookInterview}
          interviewers= {interviewers}
          interview={interview}
          delete={cancelInterview}
          />
        );
    })

  // the final application return, printing the side bar, logo, and appointments. 

  return (

    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu" >
          <DayList
            days={state.days}
            day={state.day}
            spots={setSpots}
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
        {appointmentsLoop}
      </section>

    </main>

  );
}


