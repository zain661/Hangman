import logo from "./logo.svg";
import "./App.css";
import Soluation from "./components/soluation";
import Letter from "./components/letter";
import Letters from "./components/letters";
import Score from "./components/score";
import { Component } from "react";

class App extends Component {
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  constructor(){
    super()
    this.state = {
      letterStatus : this.generateLetterStatuses() ,
      soluation : {
        word: "PALESTINE",
        hint: "The most wonderful COUNTRY in the World"
      },
      score : 100
    }

  }

  

  selectLetter =(letter) =>{
   
    let letterStatus = { ...this.state.letterStatus };
    let score = this.state.score;
    // if (letterStatus[letter]) {
    //   return;
    // }

    if (this.state.solution.word.includes(letter)) {
       score += 5;
    } 
    else
      score -= 20;

    letterStatus[letter] = true
    this.setState({letterStatus , score} ,this.checkWinner)
  }

  reset = () => {
    this.setState({
      letterStatus: this.generateLetterStatuses(),
      score: 100,
    });
  };

  

  render() {

    return (
      <div className="App">
        <header className="App-header">
         <Score score = {this.state.score}/>
         <Soluation letterStatus = {this.state.letterStatus} soluation = {this.state.soluation}/>
         <Letters  letterStatus = {this.state.letterStatus} selectLetter = {this.selectLetter}  />
        </header>
      </div>
    );
  }
}

export default App;
