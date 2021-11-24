import React from "react";

class NameAndAge extends React.Component{
render(){
    return(
        <p>{this.props.name} , {this.props.age} </p>
    )
}
}


export default NameAndAge