import React, { useState, useEffect } from "react";
import axios from "axios"
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
  
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  // console.log(dailyAppointments)

  // function appointmentsLoop() {
    let appointmentsLoop = getAppointmentsForDay(state, state.day).map((appointment) => {
      const interview = getInterview(state, appointment.interview);
      // console.log("this is the log", interview)
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


