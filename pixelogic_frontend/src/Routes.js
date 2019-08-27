import React from "react";
import {Route , Switch} from "react-router"
import TextField from "./Components/TextField";
import DropDownList from "./Components/DropDownList";
import PersonalInfo from "./Containers/PersonalInfo";
import BusinessInfo from "./Containers/BusinessInfo";
import EmployeeInfo from "./Containers/EmployeeInfo";
import App from "./App"
import "./App.css";

function Routes () {
return (
 <Route>
<Switch>

<Route path="/" exact component={App}/>
<Route path="/AddEmployees" exact component={EmployeeInfo}/>

</Switch>

 </Route>

);
}

export default Routes