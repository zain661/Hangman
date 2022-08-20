import React, { Component } from "react";
import Letter from "./letter";

class Letters extends Component {
    

    render(){
       let letterArray = Object.keys(this.props.letterStatus)
       let letterStatus = this.props.letterStatus
        return (
        <div>
            <div>available letters</div>
            {letterArray.map(l=> letterStatus[l] ? <Letter className="clicked" letter={l}/> :<Letter letter={l} selectLetter = {this.props.selectLetter}/>)} 
        </div>
               
               )
        
        
    }
}

export default Letters