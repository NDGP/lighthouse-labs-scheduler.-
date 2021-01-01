import React from "react";

export default function Status(props) {

// component shown when async functions are processing, save and delete of appointments 

return(
<main className="appointment__card appointment__card--status">
  <img
    className="appointment__status-image"
    src="images/status.png"prosesing
    alt="Loading"
  />
  <h1 className="text--semi-bold">{props.message}</h1>
</main>


)
}