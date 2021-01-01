import React from "react";

export default function Empty(props) {

// component for empty scheduled slots 

return(


<main className="appointment__add">
  <img
    className="appointment__add-button"
    src="images/add.png"
    alt="Add"
    onClick={props.onAdd}
  />
</main>

  )
}