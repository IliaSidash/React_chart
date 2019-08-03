import React, { Component } from 'react';
import '../scss/App.css';
import axios from 'axios';
import ChartBar from './ChartBar';
import Settings from './Settings';
import { generateData } from '../services/func';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      deviceTypes: [],
      chartData1: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          // {
          //   label: "Undefined",
          //   data: [617594, 181045, 153060, 106519, 105162, 95072],
          //   backgroundColor: [
          //     "rgba(153, 153, 153, 0.6)",
          //     "rgba(153, 153, 153, 0.6)",
          //     "rgba(153, 153, 153, 0.6)",
          //     "rgba(153, 153, 153, 0.6)",
          //     "rgba(153, 153, 153, 0.6)",
          //     "rgba(153, 153, 153, 0.6)",
          //     "rgba(153, 153, 153, 0.6)"
          //   ]
          // },
          // {
          //   label: "Kids",
          //   data: [617594, 181045, 153060, 106519, 105162, 95072],
          //   backgroundColor: [
          //     "rgba(18, 149, 26, 0.6)",
          //     "rgba(18, 149, 26, 0.6)",
          //     "rgba(18, 149, 26, 0.6)",
          //     "rgba(18, 149, 26, 0.6)",
          //     "rgba(18, 149, 26, 0.6)",
          //     "rgba(18, 149, 26, 0.6)",
          //     "rgba(18, 149, 26, 0.6)"
          //   ]
          // },
          // {
          //   label: "Young Adult",
          //   data: [617594, 181045, 153060, 106519, 105162, 95072],
          //   backgroundColor: [
          //     "rgba(51, 153, 254, 0.6)",
          //     "rgba(51, 153, 254, 0.6)",
          //     "rgba(51, 153, 254, 0.6)",
          //     "rgba(51, 153, 254, 0.6)",
          //     "rgba(51, 153, 254, 0.6)",
          //     "rgba(51, 153, 254, 0.6)",
          //     "rgba(51, 153, 254, 0.6)"
          //   ]
          // },
          // {
          //   label: "Adult",
          //   data: [617594, 181045, 153060, 106519, 105162, 95072],
          //   backgroundColor: [
          //     "rgba(51, 102, 203, 0.6)",
          //     "rgba(51, 102, 203, 0.6)",
          //     "rgba(51, 102, 203, 0.6)",
          //     "rgba(51, 102, 203, 0.6)",
          //     "rgba(51, 102, 203, 0.6)",
          //     "rgba(51, 102, 203, 0.6)",
          //     "rgba(51, 102, 203, 0.6)"
          //   ]
          // },
          // {
          //   label: "Senior",
          //   data: [617594, 181045, 153060, 106519, 105162, 95072],
          //   backgroundColor: [
          //     "rgba(220, 57, 18, 0.6)",
          //     "rgba(220, 57, 18, 0.6)",
          //     "rgba(220, 57, 18, 0.6)",
          //     "rgba(220, 57, 18, 0.6)",
          //     "rgba(220, 57, 18, 0.6)",
          //     "rgba(220, 57, 18, 0.6)",
          //     "rgba(220, 57, 18, 0.6)"
          //   ]
          // }
        ]
      }
    };
  }
  componentWillMount() {
    //this.getChartData();
    this.getData().then((response) => {
      var deviceTypes = [];

      for (var index in response.data.data.o) {
        deviceTypes.push(response.data.data.o[index].n);
      }

      console.log(deviceTypes, 'deviceTypes');

      var obj1 = generateData(response.data);

      console.log(obj1, 'getData');
      this.setState({
        deviceTypes: deviceTypes,
        chartData: obj1
      });
    });
  }

  async getData() {
    const url =
      'https://analytics.3divi.ru/api/v2/statistics/user/43/devices/dates/ages/?key=050a11d6e8cf4dc5bac15bae6a14cec4&b=2016/01/01%2000:00:00&e=2016/07/01%2013:00:00&tzo=0';
    const res = await axios(url);
    console.log(res);

    return await res;
  }

  // async getChartData() {

  //   let url =
  //     "https://analytics.3divi.ru/api/v2/statistics/user/43/devices/dates/ages/?key=050a11d6e8cf4dc5bac15bae6a14cec4&b=2016/01/01%2000:00:00&e=2016/07/01%2013:00:00&tzo=0";
  //   await axios.get(url).then(response => {

  //     var deviceTypes = [];

  //     for (var index in response.data.data.o) {
  //       deviceTypes.push(response.data.data.o[index].n);
  //     }

  //     console.log(deviceTypes, "deviceTypes");

  //      var obj1 = generateData(response.data);

  //     var obj = {
  //       labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  //       datasets: [
  //         {
  //           label: "Undefined",
  //           data: [617594, 181045, 153060, 106519, 105162, 95072],
  //           backgroundColor: [
  //             "rgba(153, 153, 153, 0.6)",
  //             "rgba(153, 153, 153, 0.6)",
  //             "rgba(153, 153, 153, 0.6)",
  //             "rgba(153, 153, 153, 0.6)",
  //             "rgba(153, 153, 153, 0.6)",
  //             "rgba(153, 153, 153, 0.6)",
  //             "rgba(153, 153, 153, 0.6)"
  //           ]
  //         },
  //         {
  //           label: "Kids",
  //           data: [617594, 181045, 153060, 106519, 105162, 95072],
  //           backgroundColor: [
  //             "rgba(18, 149, 26, 0.6)",
  //             "rgba(18, 149, 26, 0.6)",
  //             "rgba(18, 149, 26, 0.6)",
  //             "rgba(18, 149, 26, 0.6)",
  //             "rgba(18, 149, 26, 0.6)",
  //             "rgba(18, 149, 26, 0.6)",
  //             "rgba(18, 149, 26, 0.6)"
  //           ]
  //         },
  //         {
  //           label: "Young Adult",
  //           data: [617594, 181045, 153060, 106519, 105162, 95072],
  //           backgroundColor: [
  //             "rgba(51, 153, 254, 0.6)",
  //             "rgba(51, 153, 254, 0.6)",
  //             "rgba(51, 153, 254, 0.6)",
  //             "rgba(51, 153, 254, 0.6)",
  //             "rgba(51, 153, 254, 0.6)",
  //             "rgba(51, 153, 254, 0.6)",
  //             "rgba(51, 153, 254, 0.6)"
  //           ]
  //         },
  //         {
  //           label: "Adult",
  //           data: [617594, 181045, 153060, 106519, 105162, 95072],
  //           backgroundColor: [
  //             "rgba(51, 102, 203, 0.6)",
  //             "rgba(51, 102, 203, 0.6)",
  //             "rgba(51, 102, 203, 0.6)",
  //             "rgba(51, 102, 203, 0.6)",
  //             "rgba(51, 102, 203, 0.6)",
  //             "rgba(51, 102, 203, 0.6)",
  //             "rgba(51, 102, 203, 0.6)"
  //           ]
  //         },
  //         {
  //           label: "Senior",
  //           data: [617594, 181045, 153060, 106519, 105162, 95072],
  //           backgroundColor: [
  //             "rgba(220, 57, 18, 0.6)",
  //             "rgba(220, 57, 18, 0.6)",
  //             "rgba(220, 57, 18, 0.6)",
  //             "rgba(220, 57, 18, 0.6)",
  //             "rgba(220, 57, 18, 0.6)",
  //             "rgba(220, 57, 18, 0.6)",
  //             "rgba(220, 57, 18, 0.6)"
  //           ]
  //         }
  //       ]
  //     }

  //     this.setState({
  //       deviceTypes: deviceTypes,
  //       chartData:obj
  //     });

  //   });

  //    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Задание</h1>
        </header>
        <div className="chartResult">
          <Settings deviceTypes={this.state.deviceTypes} />

          <ChartBar
            chartData={this.state.chartData}
            location="Massachusetts"
            legendPosition="bottom"
          />
        </div>
      </div>
    );
  }
}
export default App;
