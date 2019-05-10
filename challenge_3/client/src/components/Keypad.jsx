import React from 'react';

// Buttons need to rerender OR just be unable to update score dependent on ...
// ... if 2nd bowl of a frame, then only numbers that are 10 - 1st bowl will update score. Otherwise, an alert should appear saying
// there aren't that many pins left!

function Keypad(props) {
  return(
    <div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
        <button>0</button>
        <button>10</button>
    </div>
  )
}

export default Keypad;
