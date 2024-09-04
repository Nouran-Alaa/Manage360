/* eslint-disable react/prop-types */
import React from 'react';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import AnimatedNumbers from './AnimatedNumbers'; // تأكد من أنك تستطيع ضبط سرعة الرسوم المتحركة هنا
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Cards = ({ title, num, percentage, data }) => {
  const labels = data.map(entry => entry.name);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data.map(entry => entry.value),
        fill: false,
        borderColor: 'rgb(74, 222, 128)', // Adjust color as needed
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: `${title} Growth`,
      },
    },
    animation: {
      duration: 1500, // Duration in milliseconds for animations
      easing: 'easeInOutQuad', // Easing function to control the speed of the animation
    },
  };

  return (
    <div className="flex items-center mb-5">
      <div className="bg-white w-[300px] h-[250px] rounded-md p-4 flex flex-col justify-between">
        <div>
          <p className="font-bold text-2xl">{title}</p>
          <p className="text-sm text-gray-400">Last 7 days</p>
        </div>
        <span className="text-6xl font-bold flex justify-center">
          <AnimatedNumbers n={num} duration={1000} />k
        </span>
        <span className="text-green-400 text-md font-semibold flex justify-center items-center">
          <ArrowUpwardOutlinedIcon />
          <AnimatedNumbers n={percentage} duration={1000} />%
        </span>
      </div>
      <div className="w-[400px] h-[250px] bg-white p-5">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Cards;
