import React, { Component } from "react";
class Soluation extends Component{

    render(){
    const numberOfLettersUser = 5
    let arr = []
    for(let i = 0 ; i < numberOfLettersUser ; i++) {
        arr.push('_')
    }
           
     return  ( 
        <div>
        {arr.map(a => <span>{a} </span>)} 

         </div> 
         )
    }
}

export default Soluation