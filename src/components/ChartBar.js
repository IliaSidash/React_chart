import React, { Component } from 'react';
import Chart from 'chart.js';

class ChartBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: null,
      chartData: {}
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    position: 'right',
    location: 'City'
  };

  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');

    console.log(this.state.chartData.length, 'check');
    const chart = new Chart(myChartRef, {
      type: 'bar',
      data: this.props.chartData,
      options: {
        legend: {
          display: true,
          position: this.props.legendPosition
        },
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    });

    this.setState({ chart });
    console.log(myChartRef);
  }

  componentDidUpdate() {
    const { labels, datasets } = this.props.chartData;
    const { chart } = this.state;

    chart.data.labels = labels;
    chart.data.datasets = datasets;
    chart.update();
  }

  shouldComponentUpdate() {
    console.log(this.props.chartData, 'searching for props');
    return true;
  }
  render() {
    return (
      <div className="asd">
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default ChartBar;
