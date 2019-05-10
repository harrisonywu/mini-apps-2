import React, { Component } from 'react';
import Chart from 'chart.js';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    
    this.chartRef = React.createRef();
    this.createGraph = this.createGraph.bind(this);
  }

  componentDidMount() {
    this.createGraph();
  }
  
  componentDidUpdate() {
    this.createGraph();
  }
  
  createGraph() {
    let myChartRef = this.chartRef.current.getContext("2d");
    let bpiData = this.props.data.bpi;
  
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: Object.keys(bpiData),
        datasets: [
          {
            label: "BTC Prices",
            data: Object.values(bpiData),
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'BTC: Last Month',
          position: 'top',
          fontSize: 30
        }
      }
    });
  }

  render() {
    return (
        <div>
          <div>HELP{this.props.data.bpi['2019-04-10']}</div>
          <canvas
            id="myChart"
            ref={this.chartRef}
          />
          <a href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a>
        </div>
    )
  }
}

export default LineGraph;
