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
    const { updateTotalScore }= this.props;
    

    return (
    <div>
      <h1>X Bowl</h1>
      <h1>Number of pins to hit</h1>
      <div>
        <button onClick={updateTotalScore}>1</button>
        <button onClick={updateTotalScore}>2</button>
        <button onClick={updateTotalScore}>3</button>
      </div>
      <div>
        <button onClick={updateTotalScore}>4</button>
        <button onClick={updateTotalScore}>5</button>
        <button onClick={updateTotalScore}>6</button>
      </div>
      <div>
        <button onClick={updateTotalScore}>7</button>
        <button onClick={updateTotalScore}>8</button>
        <button onClick={updateTotalScore}>9</button>
      </div>
        <button onClick={updateTotalScore}>0</button>
        <button onClick={updateTotalScore}>10</button>
    </div>
    )
  }
}

export default Keypad;
