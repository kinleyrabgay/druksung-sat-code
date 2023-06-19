import React, { useState, useEffect, useRef } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, RadialLinearScale);

const RadarChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const labels = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'];
    const dataValues = [4, 2, 3, 5, 1];
    const maxDistance = 5;

    setChartData({
      labels: labels,
      datasets: [
        {
          data: dataValues,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.4)',
          pointBorderColor: 'rgba(75, 192, 192, 1)',
          pointBackgroundColor: '#fff',
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    });

    setChartOptions({
      plugins: {
        title: {
          display: true,
          text: 'Radar Chart',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: maxDistance,
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
          ticks: {
            stepSize: 1,
            font: {
              size: 14,
            },
            callback: (value) => `${value}m`,
          },
        },
      },
      elements: {
        line: {
          borderWidth: 1,
        },
      },
      interaction: {
        intersect: false,
      },
    });

    const radarChart = chartRef.current?.chartInstance;
    let rotation = 0;

    const animation = () => {
      if (radarChart) {
        const canvas = radarChart.ctx.canvas;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY);
        const detectionDistance = radius * 0.6; // Adjust the detection distance as needed

        radarChart.options.rotation = rotation;
        radarChart.update();

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 2;
        ctx.stroke();

        const detectedObjects = dataValues.filter(
          (value) => value <= detectionDistance
        );
        if (detectedObjects.length > 0) {
          // Object detected, perform necessary actions
          console.log('Object detected:', detectedObjects);
        }

        rotation += 0.01; // Adjust the rotation speed as needed
      }

      requestAnimationFrame(animation);
    };

    animation();

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="w-full md:col-span-2 relative m-auto p-4 border rounded-lg bg-white">
      <Radar ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
};

export default RadarChart;
