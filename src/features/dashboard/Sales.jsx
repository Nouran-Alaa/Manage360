import React from 'react'

export default function Sales() {
  return (
<div>
  <p className="font-bold text-xl mb-4">Sales by Country</p>
  <div className="space-y-4">
    <section className="flex items-center space-x-4 p-4 border border-gray-300 rounded-md">
      <div className="flex-shrink-0 w-9 h-9 overflow-hidden rounded-full bg-white">
        <img alt="USA flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1080px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"  className="w-full h-full" />
      </div>
      <div className="flex-grow">
        <p className="text-xl font-medium">30K</p>
        <p className="text-sm text-gray-500">USA</p>
      </div>
      <div className="flex-1 mx-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-xs font-medium text-green-400">64%</div>
          </div>
          <div className="flex">
            <div className="relative flex-grow w-full bg-gray-200 rounded-full h-2.5">
              <div className="absolute bg-green-400 h-2.5 rounded-full" style={{ width: '64%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-sm text-gray-500">64%</span>
    </section>
    <section className="flex items-center space-x-4 p-4 border border-gray-300 rounded-md">
      <div className="flex-shrink-0 w-10 h-10   overflow-hidden rounded-full bg-white">
        <img alt="Brazil flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1080px-Flag_of_Brazil.svg.png"  className="w-full h-full" />
      </div>
      <div className="flex-grow">
        <p className="text-xl font-medium">26K</p>
        <p className="text-sm text-gray-500">Brazil</p>
      </div>
      <div className="flex-1 mx-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-xs font-medium text-green-400">50%</div>
          </div>
          <div className="flex">
            <div className="relative flex-grow w-full bg-gray-200 rounded-full h-2.5">
              <div className="absolute bg-green-400 h-2.5 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-sm text-gray-500">25.8%</span>
    </section>

   
    <section className="flex items-center space-x-4 p-4 border border-gray-300 rounded-md">
      <div className="flex-shrink-0 w-9 h-9 overflow-hidden rounded-full bg-white">
        <img alt="India flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1080px-Flag_of_India.svg.png"  className="w-full h-full" />
      </div>
      <div className="flex-grow">
        <p className="text-xl font-medium">22K</p>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div className="flex-1 mx-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-xs font-medium text-green-400">25.8%</div>
          </div>
          <div className="flex">
            <div className="relative flex-grow w-full bg-gray-200 rounded-full h-2.5">
              <div className="absolute bg-green-400 h-2.5 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-sm text-gray-500">25.8%</span>
    </section>

  
    <section className="flex items-center space-x-4 p-4 border border-gray-300 rounded-md">
      <div className="flex-shrink-0 w-9 h-9 overflow-hidden rounded-full bg-white">
        <img alt="Australia flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1080px-Flag_of_Australia_%28converted%29.svg.png" className="w-full h-full" />
      </div>
      <div className="flex-grow">
        <p className="text-xl font-medium">17K</p>
        <p className="text-sm text-gray-500">Australia</p>
      </div>
      <div className="flex-1 mx-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-xs font-medium text-green-400">33.5%</div>
          </div>
          <div className="flex">
            <div className="relative flex-grow w-full bg-gray-200 rounded-full h-2.5">
              <div className="absolute bg-green-400 h-2.5 rounded-full" style={{ width: '33.5%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-sm text-gray-500">33.5%</span>
    </section>
  </div>
</div>
  )
}
