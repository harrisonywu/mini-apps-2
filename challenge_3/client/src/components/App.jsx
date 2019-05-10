import React, { Component } from 'react';
import Keypad from './Keypad.jsx';
import Frames from './Frames.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      totalScore: 0,
      currentFrame: 1,
      pinsHit: 0,
    }
  }

  updateTotalScore(e) {
    let pinsHit = parseFloat(e.target.textContent);
    let newScore = this.state.totalScore += pinsHit;
    this.setState(
      { totalScore: newScore,
        pinsHit }
    );
  }

  render() {
    return (
      <div>
        <div>Total Pins Knocked: {this.state.totalScore}</div>
        <Keypad 
          updateTotalScore={this.updateTotalScore.bind(this)}
        />
        <Frames />
      </div>
    )
  }
}


export default App;
