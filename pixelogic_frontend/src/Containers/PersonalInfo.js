import React from 'react'
import TextField from "../Components/TextField"
import "../App.css"

import axios from 'axios'

class PersonalInfo extends React.Component
{
    state = {

        Username:"",
        Email:"",
        Dates:""
    }

   



    UsernameHanlder(event,value)
    {
        console.log("heeeh")
        this.setState({Username:event.target.value},()=> this.sendUserName())
    }

    EmailHandler(event,value)
    {
        this.setState({Email:event.target.value}, ()=> this.sendEmail())
    }

    DateHandler(event,value)
    {
        this.setState({Dates:event.target.value},()=>this.sendDate())
    }
    sendUserName=()=>{
        this.props.empUsername(this.state.Username);
      
    }
    sendEmail=()=>{
        this.props.empEmail(this.state.Email);
      
    }
    sendDate=()=>{
        this.props.empDate(this.state.Dates);
      
    }
    
    componentDidMount(){
    }
    render(props)
    {

        return (
            <div className="form">
            <h4> 
               Personal Info 
            </h4> 
        
            <TextField onChange = { (e)=>this.UsernameHanlder(e,"username")} id="text1" type= "text" Placeholder= "Enter Your Username" > </TextField>
            <TextField onChange={ (e)=>this.EmailHandler(e,"email")} id="text2" type= "text" Placeholder= "Enter Your Email"> </TextField>
            <TextField onChange={ (e)=>this.DateHandler(e,"date")} id="text3" type= "date"  > </TextField>
            </div>
        );
    }
}



export default PersonalInfo