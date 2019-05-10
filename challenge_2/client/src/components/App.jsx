import React, { Component } from 'react';
import LineGraph from './LineGraph.jsx';
import Search from './Search.jsx';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: undefined,
    }
  }

  componentDidMount() {
    axios.get('/api/coindesk')
    .then((data) => {
      this.setState({
        data: data.data
      })
    });
  }
    
  changeDateState(e) {
    const startDate = this.state['start-date'];
    const endDate = this.state['end-date'];

    this.setState({
      [e.target.name]: e.target.value
    })
    
    
  }
 
  render() {
    let Graph;
    !this.state.data ? Graph = <div>No data from CoinDesk currently.</div> : Graph = <LineGraph data={this.state.data}/>
    return(
      <div>
        <h1>CoinStat</h1>
        <Search changeDateState={this.changeDateState.bind(this)}/>
        {Graph}
      </div>
    )
  }
}

export default App;
