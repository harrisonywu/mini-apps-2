import React, { Component } from 'react';
import Chart from 'chart.js';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }


  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
  
    const bpiData = this.props.data.bpi;
  
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
