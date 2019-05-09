import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    axios.get('/api/coindesk')
      .then((data) => console.log('data returned: ', data.data))
  }
 
  render() {
    return(
      <div>
        App rendering!
      </div>
    )
  }
}

export default App;
