import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales $',
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.4)',
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'TEMPERATURE FORECAST',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 12,
            },
          },
        },
        y: {
          type: 'linear',
          min: 0,
          max: 500,
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
          ticks: {
            font: {
              size: 12,
            },
            callback: (value) => `$${value}`,
          },
        },
      },
      tooltips: {
        callbacks: {
          label: (context) => `$${context.parsed.y}`,
        },
      },
    });
  }, []);

  return (
    <div className="w-full md:col-span-2 relative m-auto p-4 border rounded-lg bg-white">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
