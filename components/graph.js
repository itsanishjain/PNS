import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const data = {
  labels: ['', '', '', '', '', '', ''],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'red',
      borderColor: '#3773f5',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#3773f5',
      pointBackgroundColor: '#3773f5',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#3773f5',
      pointHoverBorderColor: '#3773f5',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [23, 59, 60, 10, 56, 12, 45, 67, 55, 0],
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

const Graph = () => {
  return <Line data={data} options={options} width={400} height={150} />
}

export default Graph