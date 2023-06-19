import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const coordinateData = [
      { x: 1, y: 100 },
      { x: 2, y: 200 },
      { x: 3, y: 150 },
      { x: 4, y: 300 },
      { x: 5, y: 250 },
      { x: 6, y: 350 },
      { x: 7, y: 400 },
      { x: 8, y: 100 },
      { x: 9, y: 200 },
      { x: 10, y: 150 },
      { x: 11, y: 300 },
      { x: 12, y: 250 },
      { x: 13, y: 350 },
      { x: 14, y: 400 },
      { x: 15, y: 100 },
      { x: 16, y: 200 },
      { x: 17, y: 150 },
      { x: 18, y: 300 },
      { x: 19, y: 250 },
      { x: 20, y: 350 },
      { x: 21, y: 400 },
    ];

    setChartData({
      datasets: [
        {
          label: 'Altitude',
          data: coordinateData,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.4)',
          fill: true,
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
          text: 'SATELLITE LOCATION',
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
          type: 'linear',
          min: 0,
          max: 10,
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
          },
        },
      },
      tooltips: {
        callbacks: {
          label: (context) =>
            `Altitude: ${context.parsed.y}m at Time: ${context.parsed.x}`,
        },
      },
    });
  }, []);

  return (
    <div className="w-full md:col-span-2 relative m-auto p-4 border rounded-lg bg-white">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
