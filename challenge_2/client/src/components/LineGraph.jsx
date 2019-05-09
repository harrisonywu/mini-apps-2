import React, { Component } from 'react';
import Chart from 'chart.js';

class LineGraph extends Component {
  constructor(props) {
    super(props);
  }

  chartRef = React.createRef()

  componentDidUpdate(prevProps, prevState) {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March"],
        datasets: [
          {
            label: "Sales",
            data: [this.props.data.bpi["2019-04-08"], 67, 91],
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
