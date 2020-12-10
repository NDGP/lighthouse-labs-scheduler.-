import React from "react";
import classnames from "classnames"
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem"

export default function InterviewerList(props) {


  function InterviewerlistLoop() {
    return props.interviewers.map((interviewer) => {
       return(
       <InterviewerListItem 
       id={interviewer.interviewer}
       name={interviewer.name}
       avatar={interviewer.avatar}
       selected={interviewer.id === props.interviewer}
       setInterviewer={(event) => props.setInterviewer(interviewer.id)}/>
       )
     })
   }


return(
<section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
<ul className="interviewers__list">{InterviewerlistLoop()}</ul>
</section>
)
}

