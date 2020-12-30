import React from "react";
import classnames from "classnames"
import "components/InterviewerListItem.scss"

export default function DayListItem(props) {

const interviewerClass = classnames("interviewers__item", {
  "interviewers__item-image": props.avatar,
  "interviewers__item--selected && interviewers__item-image":props.selected,
})

function nameReturn(){
  if (props.selected){
    return props.name
  }
}

return (
  <li 
  className={interviewerClass}
  onClick={props.setInterviewer}
  
  >
  <img
    className={interviewerClass}
    src={props.avatar}
    alt={props.name}
  />
  {nameReturn()}
</li>

)

}