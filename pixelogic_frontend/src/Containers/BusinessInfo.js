import React from "react";
import TextField from "../Components/TextField";
import DropdownList from "../Components/DropDownList";
import "../App.css";
import axios from "axios";
import { Checkbox, Label } from "semantic-ui-react";

class BusinessInfo extends React.Component {
  state = {
    departments_name: [],
    titles: [],
    leaders: [],
    ChosenDepart: [],
    ChosenTitle:[],
    LeaderID:0,
    LabelChecked: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/ViewAllDeps")
      .then(response => {
        console.log(response);
        let department_name = [];
        response.data.map(department => {
          department_name.push({
            text: department.department_name,
            value: department.department_name,
            key: department.department_name
          });
        });
        this.setState({ departments_name: department_name }, () => {
          console.log(this.state.departments_name);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  GetTitlebyDepName(DepsName,x) {
    axios
      .get("http://localhost:8080/GetTitlesbyDepName", {
        params: { DepName: DepsName }
      })
      .then(response => {
          console.log("response" , response)
        let titless = [];
        response.data.map(title => {
          titless.push({ text: title.title_name, value: title.title_name, key: title.title_name });
        });
        
        this.setState({ titles: titless } , x());
      })
      .catch(error => {
        console.log(error);
      });
      
  }



  CheckDepHasLeader(DepsName,x)
  {
    axios.get("http://localhost:8080/DepHasLeaderOrNot", {
      params:{ DepName:DepsName }

    }).then(response => {
      console.log("response  ", response)
      this.setState({LeaderID:response.data},x())
    }).catch(
      error => {
        console.log(error);
      }
    );
  }

 

  myFunction = (event, data) => {
    this.setState({ ChosenDepart: event.target.textContent }, () => {
      this.GetTitlebyDepName(this.state.ChosenDepart, () => this.sendDep() );
    });
  };

  myFunction2 = (event, data) => {
    
    this.setState({ ChosenTitle: event.target.textContent } , ()=> this.sendTitle());

  };


  CheckLeader = (event, data) => {
    if(event.target.checked === true)
    {
      this.CheckDepHasLeader( this.state.ChosenDepart, 
        ()=> {this.setState({LabelChecked:true} ,
           () => {this.sendLabelChecked(this.sendLeaderId)})})  
    }
    else{
      this.setState({LabelChecked:false} ,
        () => {this.sendLabelChecked(()=>{})})
    }
   
  };

  sendTitle=()=>{
    this.props.empTitle(this.state.ChosenTitle);
  
}

sendLeaderId=()=>
{
  this.props.getLeaderID(this.state.LeaderID)
}

sendLabelChecked=(x)=>
{
  this.props.getLabelChecked(this.state.LabelChecked)
  x();
}

sendDep=()=>
{
  this.props.empDep(this.state.ChosenDepart)
}

  render() {


    return (
      <div className="form form2">
        <h4>Business Info</h4>

        <div>
          <DropdownList
            id="dep"
            options={this.state.departments_name}
            Placeholder="Department"
            Change={this.myFunction}
          />
        </div>

        <div>
          <DropdownList
            options={this.state.titles}
            Placeholder="Choose a title"
            Change={this.myFunction2} 
          />
        </div>

      <div className="leader">
        <Label className=" leader leaderID" > Leader ? </Label>
        <Checkbox onChange={this.CheckLeader} id="checkbox" >  </Checkbox> 
        </div>
     
      </div>
    );
  }
}

export default BusinessInfo;
