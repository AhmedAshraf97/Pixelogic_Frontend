import React from 'react'
import "../App.css"

function TextField(props)
{
  return(
<div class="TextField">
<label> {props.LabelText} </label>
  <input type={props.type} size="50" placeholder={props.Placeholder} > 
  </input>
</div>
);
}
export default TextField