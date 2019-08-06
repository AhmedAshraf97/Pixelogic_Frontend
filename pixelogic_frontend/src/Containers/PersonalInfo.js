import React from 'react'
import TextField from "../Components/TextField"
import "../App.css"

class PersonalInfo extends React.Component
{
    render()
    {
        return (
            <div className="form">
            <text> Personal Info </text>
            <TextField type= "text" Placeholder= "Enter Your Username" > </TextField>
            <TextField type= "text" Placeholder= "Enter Your Email"> </TextField>
            <TextField type= "date" classname ="date" > Enter your Birthdate</TextField>
            </div>
        );
    }
}

export default PersonalInfo