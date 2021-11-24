import React from "react";
import "./PeopleVisit.css";

class PeopleVisit extends React.Component{
    render(){
        return(
            <div>
            <img src={this.props.peopleImg}></img>
            <h3>{this.props.namePeople}</h3>
            <p>{this.props.info}</p>
            </div>
        )
    }
}


export default PeopleVisit ;