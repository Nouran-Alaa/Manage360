/* eslint-disable react/prop-types */
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import AnimatedNumbers from './AnimatedNumbers';

const Cards = ({ title, num, percentage }) => {
  return (
    <div className="bg-white w-[300px] h-[250px] rounded-md p-4 flex flex-col justify-between">
      <div>
        <p className="font-bold text-2xl">{title}</p>
        <p className="text-sm text-gray-400">Last 7 days</p>
      </div>
      <span className="text-6xl font-bold flex justify-center">
        <AnimatedNumbers n={num} />k
      </span>
      <span className="text-green-400 text-md font-semibold flex justify-center items-center">
        <ArrowUpwardOutlinedIcon />
        <AnimatedNumbers n={percentage} />k
      </span>
    </div>
  );
};

export default Cards;
