import React from "react";
import Button from "components/Button"

export default function Confirm(props) {

// confirmation component html, space for user to back out or continue with creating their new appointment


return(
<main className="appointment__card appointment__card--confirm">
  <h1 className="text--semi-bold">Delete the appointment?</h1>
  <section className="appointment__actions">
    <Button onClick={props.onCancel}>Cancel</Button>
    <Button onClick={props.onConfirm}>Confirm</Button>
  </section>
</main>
  ) 
}