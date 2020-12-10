import React, { Fragment } from "react";
import "components/appointment/styles.scss"
import Header from "./Header"
import Show from "./Show"
import Empty from "./Empty"
import { render } from "@testing-library/react";

export default function Appointment(props) {

  if(props.interview){
    return(
      <>
      <Header/>{props.time}
      <Show/>
      </>
    )
  }
  return(
    <>
    <Header/>{props.time}
    <Empty/>
    </>
  )

}
