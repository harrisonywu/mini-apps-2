import React, { Component } from 'react';
import Keypad from './Keypad.jsx'
class App extends Component {
  constructor() {
    super();

    this.state = {
      totalScore: 0,
      currentFrame: 1,
    }
  }

  updateTotalScore(e) {
    let pinsHit = parseFloat(e.target.textContent);
    let newScore = this.state.totalScore += pinsHit;
    this.setState({ totalScore: newScore })
  }

  render() {

    return (
      <div>
        <div>App rendering!</div>
        <div>Total Pins Knocked: {this.state.totalScore}</div>
        <Keypad 
          updateTotalScore={this.updateTotalScore.bind(this)}
        />

      </div>
    )
  }
}


export default App;
