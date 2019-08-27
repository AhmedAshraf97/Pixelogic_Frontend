import React from "react";
import "./App.css";

import { Button, Placeholder } from "semantic-ui-react";
import "./styles.css";
import TextField from "./Components/TextField";
import DropDownList from "./Components/DropDownList";
import PersonalInfo from "./Containers/PersonalInfo";
import BusinessInfo from "./Containers/BusinessInfo";
import EmployeeInfo from "./Containers/EmployeeInfo";

import axios from "axios";

class App extends React.Component {
  state = {
    departments_name: [],
    Employees: []
  };

  render() {
    return (
      <div className="App">
        <a href="/AddEmployees">
          <Button className="button"> Add Employee </Button>
        </a>
        <Button className="button" id="special">
          {" "}
          View Employees{" "}
        </Button>
        {/* <EmployeeInfo></EmployeeInfo> */}
      </div>
    );
  }
}
export default App;
