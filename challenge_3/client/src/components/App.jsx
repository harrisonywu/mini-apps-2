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
      currentRoll: 1,
    }
  }

  updateTotal(e) {
    console.log('update total score')
    let { totalScore } = this.state;
    let pinsHit = parseFloat(e.target.textContent);
    let newScore = totalScore += pinsHit;
    
    this.setState({ totalScore: newScore, pinsHit });
  }

  nextFrame(currentFrame) {
    currentFrame++;
    this.setState({
      currentFrame: currentFrame,
      currentRoll: 1,
    })
  }

  updateTotalAndSwitchFrame(e, currentFrame) {
    this.updateTotal(e);
    this.nextFrame(currentFrame);
  }
  

  increaseRoll() {
    let { currentRoll } = this.state;
    this.setState({
      currentRoll: currentRoll++,
    })
  }

  render() {
    const { totalScore, currentFrame, pinsHit, currentRoll } = this.state;
    const { updateTotal, nextFrame, increaseRoll, updateTotalAndSwitchFrame } = this;

    return (
      <div>
        <div>Current Frame: {currentFrame}</div>
        <div>currentRoll: {currentRoll}</div>
        <div>Total Pins Knocked: {totalScore}</div>
        <Keypad 
          updateTotal={updateTotal.bind(this)}
          updateTotalAndSwitchFrame={updateTotalAndSwitchFrame.bind(this)}
          currentFrame={currentFrame}
        />
        <Frames />
      </div>
    )
  }
}


export default App;
