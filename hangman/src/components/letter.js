import React, { Component } from "react";
import Letters from "./letters";

class Letter extends Component {
   letter = 'a';
  render() {
    return <div>
      <div>available letters</div>
      <span>{this.letter}</span>
    </div> 
  }
}

export default Letter