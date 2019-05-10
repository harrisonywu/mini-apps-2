import React, { Component } from 'react';
import Keypad from './Keypad.jsx';
import Frames from './Frames.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      totalPinsHit: 0,
      currentFrame: 1,
      pinsHit: 0,
      currentRoll: 1,
    }
  }

  componentDidUpdate() {
    const { currentFrame } = this.state;
    if (currentFrame === 10) {
      // implement frame 10 logic.
      //
    }
  }

  updateTotal(e) {
    let { totalPinsHit } = this.state;
    let pinsHit = parseFloat(e.target.textContent);
    let newPinTotal = totalPinsHit += pinsHit;
    
    this.setState({ totalPinsHit: newPinTotal, pinsHit });
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
  
  updateTotalAndIncreaseRoll(e, currentRoll, currentFrame) {
    this.updateTotal(e);
    this.increaseRoll(currentRoll, currentFrame);
  }

  increaseRoll(currentRoll, currentFrame) {
    currentRoll++;
    if (currentRoll === 2) {
      this.setState({ currentRoll })
    } else { // roll count already exceeded
      currentRoll = 1;
      currentFrame++;
      this.setState({ currentRoll, currentFrame })
    }
  }

  render() {
    const { totalPinsHit, currentFrame, pinsHit, currentRoll } = this.state;
    const { updateTotal, nextFrame, updateTotalAndIncreaseRoll, updateTotalAndSwitchFrame } = this;

    return (
      <div>
        <div>Current Frame: {currentFrame}</div>
        <div>currentRoll: {currentRoll}</div>
        <div>Total Pins Knocked: {totalPinsHit}</div>
        <Keypad 
          // updateTotal={updateTotal.bind(this)}
          updateTotalAndIncreaseRoll={updateTotalAndIncreaseRoll.bind(this)}
          updateTotalAndSwitchFrame={updateTotalAndSwitchFrame.bind(this)}
          currentFrame={currentFrame}
          currentRoll={currentRoll}
          // increaseRoll={increaseRoll.bind(this)}
        />
        <Frames />
      </div>
    )
  }
}


export default App;
