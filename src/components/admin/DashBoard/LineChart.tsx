'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement,
} from 'chart.js';

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
);
const data = {
  labels: ['Thứ 2', 'Thứ 3', 'Thứ 4'],
  datasets: [
    {
      backgroundColor: '#0090da',
      label: 'Số lượng bán ra',
      data: [12, 19, 3],
      borderColor: 'rgba(255, 99, 132, 1)',
      fill: false,
    },
  ],
};
const BarChart = () => {
  return (
    <Bar
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
};
export default BarChart;
