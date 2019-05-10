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
    axios.get('/prices/BTC/last_month')
    .then((data) => {
      this.setState({
        data: data.data
      })
    });
  }
    
  changeDateState(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      let startDate = this.state['start-date'];
      let endDate = this.state['end-date'];
      if (startDate && endDate) {
          axios.get(`/prices/BTC/${startDate}/${endDate}`)
          .then((btcPrices) => {
            const {data} = btcPrices;
            this.setState({data});
          })
          .catch((err) => console.log('error: ', err))
      };
    });
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
