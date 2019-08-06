import React from 'react';
import './App.css';

import { Button, Placeholder } from 'semantic-ui-react'
import "./styles.css"
import TextField from './Components/TextField'
import DropDownList from './Components/DropDownList'
import PersonalInfo from "./Containers/PersonalInfo"

function App() {
  return (
    <div className="App">
    {/* <Button className="button"> Add Employee </Button>
    <Button className="button" id="special"> View Employees </Button>
    <TextField Placeholder="Enter Username" LabelText="Username">  </TextField>

<DropDownList> </DropDownList> */}
<PersonalInfo> </PersonalInfo>
    </div>
  );
}

export default App;
