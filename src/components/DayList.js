import React from "react";
import classnames from "classnames"
import DayListItem from "./DayListItem"

export default function DayList(props) {


  function listLoop() {
   return props.days.map((day) => {
      return(
      <DayListItem 
      key={day.id}
      name={day.name} 
      spots={day.spots} 
      selected={day.name === props.day}
      setDay={props.setDay}/>
      )
    })
  }

  return (
  <ul>
    {listLoop()}
  </ul>
  );
}