import React, { Component } from 'react';
import LineGraph from './LineGraph.jsx'

import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    axios.get('/api/coindesk')
      .then((data) => {
        console.log('data returned: ', data.data)
        this.setState({
          data: data.data
        })
      } 
      )
  }
 
  render() {
    return(
      <div>
        <h1>CoinStat</h1>
        <LineGraph data={this.state.data}/>
      
      </div>
    )
  }
}

export default App;
