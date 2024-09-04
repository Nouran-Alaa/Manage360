import React from 'react';
import Cards from './Cards';


const userData = [
  { name: 'MON', value: 500 },
  { name: 'TUE', value: 1500 },
  { name: 'WED', value: 1200 },
  { name: 'THU', value: 1300 },
  { name: 'FRI', value: 1400 },
  { name: 'SAT', value: 1600 },
  { name: 'SUN', value: 1700 },
];

const orderData = [
  { name: 'MON', value: 50 },
  { name: 'TUE', value: 250 },
  { name: 'WED', value: 220 },
  { name: 'THU', value: 280 },
  { name: 'FRI', value: 300 },
  { name: 'SAT', value: 200 },
  { name: 'SUN', value: 290 },
];

const salesData = [
  { name: 'MON', value: 5000 },
  { name: 'TUE', value: 4000 },
  { name: 'WED', value: 5500 },
  { name: 'THU', value: 3500 },
  { name: 'FRI', value: 6200 },
  { name: 'SAT', value: 5000 },
  { name: 'SUN', value: 6100 },
];

const profitData = [
  { name: 'MON', value: 2000 },
  { name: 'TUE', value: 1800 },
  { name: 'WED', value: 2200 },
  { name: 'THU', value: 2500 },
  { name: 'FRI', value: 2700 },
  { name: 'SAT', value: 2300 },
  { name: 'SUN', value: 2600 },
];

const sessionData = [
  { name: 'MON', value: 300 },
  { name: 'TUE', value: 450 },
  { name: 'WED', value: 500 },
  { name: 'THU', value: 550 },
  { name: 'FRI', value: 600 },
  { name: 'SAT', value: 520 },
  { name: 'SUN', value: 570 },
];

export default function Dashboard() {
  return (
    <section className="flex h-screen">
      <div className="flex-1 p-6 mt-2 border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="w-full">
          <Cards title="Total Users" num={15} percentage={3.2} data={userData} />
        </div>
        <div className="w-full">
          <Cards title="Total Orders" num={3.2} percentage={5.7} data={orderData} />
        </div>
        <div className="w-full">
          <Cards title="Total Sales" num={230} percentage={8.1} data={salesData} />
        </div>
        <div className="w-full">
          <Cards title="Profit" num={12.5} percentage={7.2} data={profitData} />
        </div>
        <div className="w-full">
          <Cards title="Sessions" num={3} percentage={8.5} data={sessionData} />
        </div>
     
      </div>
    </section>
  );
}
