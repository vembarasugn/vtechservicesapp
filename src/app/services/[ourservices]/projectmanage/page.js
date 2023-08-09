import React from 'react';
import Image from 'next/image';

const projectManagement = () => {
  return ( 
  <div className="bg-white-300 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-teal-500 sm:text-4xl">OUR SERVICES</h2>
    </div> 
    <div className="flex flex-row items-stretch justify-between pb-18 mb-25 border-t-2 border-gray-500 pt-15">
    <div className="flex flex-col items-stretch justify-between max-w-lg">
      <div className='border-gray-500 pt-10'>
        <h2 className="font-medium mb-8 text-teal-500">PROJECT MANAGEMENT</h2>
        <p className="text-gray-400 mb-7 text-justify">
        At V-TECH Renewables, effective project management is at the core of what we do. We understand the complexities involved in electrical and solar power projects and strive to deliver exceptional results within budget and timeline constraints. Our experienced project managers take a proactive approach, ensuring thorough planning, efficient resource allocation, and seamless coordination among various stakeholders. We keep our clients updated throughout the project's lifecycle, providing regular progress reports, and addressing any challenges that may arise. Our commitment to meticulous project management ensures successful project completion and client satisfaction.
        </p>
      </div>
      <a className='text-gray-700' href="https://google.com" target="_blank" rel="noreferrer">
        Learn more from this project ➔
      </a>
    </div>
    <div className='w-full p-2 lg:w-1/2 md:w-1/2 hidden md:block'>
      <Image className='rounded' src="/projectmanagement2.jpg" alt="projectmanagement2img"/>
    </div>
  </div>
  </div>
</div>   
)
};


export default projectManagement;

