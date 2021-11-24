import React from "react";
import "./Employee.css";

class Employee extends React.Component {
  render() {
      console.log(this.props.img);
    return (
      <div className="divOfChefImages">
      <img src={this.props.img} alt="" />
        <h3>{this.props.name}</h3>
        <p>{this.props.part}</p>
      </div>
    );
  }
}

export default Employee;
