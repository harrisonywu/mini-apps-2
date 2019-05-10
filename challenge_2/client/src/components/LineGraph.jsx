import React, { Component } from 'react';
import Chart from 'chart.js';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    
    this.chartRef = React.createRef();
    this.createGraph = this.createGraph.bind(this);
  }

  componentDidMount() {
    let currentTitle = 'BTC: Price in the Last Month'
    this.createGraph(currentTitle);
  }
  
  componentDidUpdate() {
    const { startDate, endDate } = this.props;
    let currentTitle = `BTC: Price between ${startDate} and ${endDate}`
    this.createGraph(currentTitle);
  }
  
  createGraph(titleName) {
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
          text: titleName,
          position: 'top',
          fontSize: 30
        }
      }
    });
  }

  render() {
    return (
        <div>
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
