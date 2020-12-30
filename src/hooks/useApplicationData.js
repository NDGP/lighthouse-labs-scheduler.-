import { useState, useEffect } from "react";
import axios from "axios"



export default function useApplicationData(){
const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
});

useEffect(() => {
  Promise.all([
    axios.get('/api/days'),
    axios.get('/api/appointments'),
    axios.get('/api/interviewers'),
  ])
  .then(response => {
    setState(previous => (
      {...previous, 
        days:response[0].data, 
        appointments:response[1].data, 
        interviewers:response[2].data, 
      }))
  });
}, [])

function bookInterview(id, interview) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };

  const days = state.days.map((day) => {
    if(state.day === day.name){
      day.spots -= 1
    }
    return day
  })

  console.log("this is ID", id);
  console.log("this is interview", interview)
  return axios.put(`/api/appointments/${id}`, {interview})
  .then(() => {
    setState({
      ...state,
      appointments,
      days
    });
  })
  
}

function cancelInterview(id) {
  const appointment = {
    ...state.appointments[id],
    interview: null
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  const days = state.days.map((day) => {
    if(state.day === day.name){
      day.spots += 1
    }
    return day
  })
  return axios.delete(`/api/appointments/${id}`)
  .then(() => {
    setState({
      ...state,
      appointments,
      days
    });
    
  })
}

  function setDay(day) {
    setState({...state, day})
  }

  

return {    
  state,
  setDay,
  bookInterview,
  cancelInterview,
  }
}