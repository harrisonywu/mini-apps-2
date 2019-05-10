import React, { Component } from 'react';

// Buttons need to rerender OR just be unable to update score dependent on ...
// ... if 2nd bowl of a frame, then only numbers that are 10 - 1st bowl will update score. Otherwise, an alert should appear saying
// there aren't that many pins left!

class Keypad extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // consider recreating buttons with a for loop from 0 - 10
    const { updateTotal, updateTotalAndIncreaseRoll, updateTotalAndSwitchFrame, currentFrame, currentRoll } = this.props;
    

    return (
    <div>
      <h1>X Bowl</h1>
      <h1>Number of pins to hit</h1>
      <div>
        <button onClick={(e) => updateTotalAndIncreaseRoll(e, currentRoll, currentFrame)}>1</button>
        <button onClick={(e) => updateTotalAndIncreaseRoll(e, currentRoll, currentFrame)}>2</button>
        <button onClick={(e) => updateTotalAndIncreaseRoll(e, currentRoll, currentFrame)}>3</button>
      </div>
      <div>
        <button onClick={(e) => updateTotalAndIncreaseRoll(e, currentRoll, currentFrame)}>4</button>
        <button onClick={(e) => updateTotalAndIncreaseRoll(e, currentRoll, currentFrame)}>5</button>
        <button onClick={(e) => updateTotalAndIncreaseRoll(e, currentRoll, currentFrame)}>6</button>
      </div>
      <div>
        <button onClick={(e) => updateTotalAndIncreaseRoll(e, currentRoll, currentFrame)}>7</button>
        <button onClick={(e) => updateTotalAndIncreaseRoll(e, currentRoll, currentFrame)}>8</button>
        <button onClick={(e) => updateTotalAndIncreaseRoll(e, currentRoll, currentFrame)}>9</button>
      </div>
        <button onClick={(e) => updateTotalAndIncreaseRoll(e, currentRoll, currentFrame)}>0</button>
        <button onClick={(e) => updateTotalAndSwitchFrame(e, currentFrame)}>10</button>
    </div>
    )
  }
}

export default Keypad;
