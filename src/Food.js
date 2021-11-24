import React from "react";
import "./Food.css";

class Food extends React.Component{
    render(){
        return(
            <div className="divOfFood">
            <h1>{this.props.header}</h1>
            <p>{this.props.paragraph}</p>
            <img src={this.props.img} alt="foodImg" ></img>
            </div>
        )
    }
}




export default Food;