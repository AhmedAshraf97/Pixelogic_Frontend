import React from 'react'
import TextField from "../Components/TextField"
import DropDownList from "../Components/DropDownList"
import "../App.css"

class BusinessInfo extends React.Component
{
    render()
    { 
        const titles=["Tester","Developer","QC"];
        return (
            <div className="form">
            <h4> 
                <text >BusinessInfo Info</text> 
            </h4> 
            <DropDownList placeholder="Title" search selection options="titles" > </DropDownList>
            <DropDownList placeholder="Department" search selection options="titles"> </DropDownList>
            <DropDownList placeholder="Leader" search selection options="titles"> </DropDownList>
            </div>
        );
    }
}

export default BusinessInfo