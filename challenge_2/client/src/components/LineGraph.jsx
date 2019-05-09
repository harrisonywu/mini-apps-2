import React, { Component } from 'react';
import Chart from 'chart.js';

class LineGraph extends Component {
  constructor(props) {
    super(props);
  }

  chartRef = React.createRef()

  componentDidUpdate() {
    const myChartRef = this.chartRef.current.getContext("2d");

    const bpiData = this.props.data.bpi;
    const bpiDates = [];
    const bpiPrices = [];
    
    for (var key in bpiData) {
      bpiDates.push(key);
      bpiPrices.push(bpiData[key]);
    }

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: bpiDates,
        datasets: [
          {
            label: "BTC Prices",
            data: bpiPrices,
          }
        ]
      },
      options: {
        //Customize chart options
      }
    });
  }
  render() {
    return (
        <div >
          <canvas
            id="myChart"
            ref={this.chartRef}
          />
        </div>
    )
  }
}

export default LineGraph;
