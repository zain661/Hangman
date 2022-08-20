import React, { Component } from "react";
import Letters from "./letters";

class Letter extends Component {
  render() {
    return <span>{this.props.letter}</span>
    
      
        {/* <div>available letters</div> */}
        
    
  }
}

export default Letter;
