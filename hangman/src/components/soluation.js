import React, { Component } from "react";
import Letter from "./letter";
class Soluation extends Component{

    render() {
          let word = this.props.soluation.word
          let hint = this.props.soluation.hint
          let letterStatus = this.props.letterStatus
     return  ( 
        <div>
           {word.split("").map(w => letterStatus[w] ? <Letter letter= {w}/> : <Letter letter = '_'/>)} 
           <div>

           </div>
           {hint.split("").map(w => <Letter letter= {w}/>)} 
         </div> 
         )
    }
}

export default Soluation