import React, { useState, useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ScatterChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      datasets: [
        {
          label: 'Satellite',
          data: [
            { x: 100, y: 200 },
            { x: 200, y: 300 },
            { x: 300, y: 100 },
          ],
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 5,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
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
          position: 'bottom',
          min: 0,
          max: 500,
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
          position: 'left',
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
          label: (context) => `x: ${context.parsed.x}, y: ${context.parsed.y}`,
        },
      },
    });
  }, []);

  return (
    <div className="w-full md:col-span-2 relative m-auto p-4 border rounded-lg bg-white">
      <Scatter data={chartData} options={chartOptions} />
    </div>
  );
};

export default ScatterChart;
