import React from "react";
import PersonalInfo from "./PersonalInfo";
import BusinessInfo from "./BusinessInfo";
import { Button, Placeholder } from "semantic-ui-react";
import axios from "axios";
import "../App.css";
import Axios from "axios";

class EmployeeInfo extends React.Component {
  state = {
    titles: [],
    leaders: [],
    ChosenDepart: [],
    ChosenTitle: [],
    LeaderID: 0,
    LabelChecked: false,
    Username:"",
    Email:"",
    Dates:""
  };

    postEmployee = e => {
       e.preventDefault()
      var elm = this.state.Dates.split("-");

      console.log("day " , elm[2]);
      console.log("month " , elm[1]);
      console.log("year " , elm[0]);
      if(this.state.LabelChecked === true )
      {
        if(this.state.LeaderID === 0 )
        {
          Axios.post('http://localhost:8080/Employee/Add',{
        "username":this.state.Username,
        "email":this.state.Email,
        "day":elm[2],
        "month":elm[1],
        "year":elm[0],
        "title_name":this.state.ChosenTitle,
        "department_name":this.state.ChosenDepart
      }).then(
        response => {
              console.log(response)
              Axios.put('http://localhost:8080/AssignLeaderToDep',
              {
                "email":this.state.Email

              }).then(
                response =>
                {
                  console.log("Put D")
                }
              ).catch(error => {
                console.log(error)
              })
        }
      ).catch(error => {
        console.log(error);
      });
      }
      else
      {
        Axios.post('http://localhost:8080/Employee/Add',{
        "username":this.state.Username,
        "email":this.state.Email,
        "day":elm[2],
        "month":elm[1],
        "year":elm[0],
        "title_name":this.state.ChosenTitle,
        "department_name":this.state.ChosenDepart
      }).then(
        response => {
              console.log(response)
        }
      ).catch(error => {
        console.log(error);
      });
      }
      
    }
  }


  componentDidMount() {
    console.log("ahmed");
  }

  getTitle = title => {
    this.setState({ ChosenTitle: title }, () =>
      console.log("Title: ",this.state.ChosenTitle)
    );
  };

  getUserName = username => {
    this.setState({ Username: username }, () =>
      console.log("Username: ",this.state.Username)
    );
  };
  getEmail = email => {
    this.setState({ Email: email }, () =>
      console.log("Email: ",this.state.Email)
    );
  };
  getdate = date => {
    this.setState({ Dates: date }, () =>
      console.log("Dates: ",this.state.Dates)
    );
  };

  getDep = Dep => {
    this.setState({ ChosenDepart: Dep }, () =>
      console.log("Dep: ",this.state.ChosenDepart)
    );
  };


  getLeaderID= LeaderID => {
    this.setState({LeaderID:LeaderID}, ()=> console.log("LeaderId:", this.state.LeaderID))
  };

    getLabelChecked = Label => {
      this.setState({LabelChecked:Label}, ()=> console.log("Label " , this.state.LabelChecked));
    }

  render() {
    return (
      <form name="myForm">
        <div className="App">
          <div>
            <BusinessInfo empTitle={this.getTitle}  empDep={this.getDep}
getLeaderID={this.getLeaderID}
    getLabelChecked={this.getLabelChecked}
            />

            <PersonalInfo
             empUsername={this.getUserName}  empEmail={this.getEmail} empDate={this.getdate}
            />
          </div>

          <div className="EmployeeInfoButtons">
            <Button id="special" type="post" onClick={this.postEmployee}>
              {" "}
              Insert Employee{" "}
            </Button>
            <a href="/">
              <Button id="special2" type="button" >
                {" "}
                Back{" "}
              </Button>
            </a>
          </div>
        </div>
      </form>
    );
  }
}
export default EmployeeInfo;
