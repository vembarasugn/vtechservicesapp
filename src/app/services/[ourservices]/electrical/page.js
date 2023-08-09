import React from 'react';
import Image from 'next/image';

const services = () => {
  return (
  <div className="bg-white-300 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-teal-500 sm:text-4xl">OUR SERVICES</h2>
      </div> 
    <div className="flex flex-row items-stretch justify-between pb-18 mb-25 border-t-2 border-gray-500 pt-15">
      <div className="flex flex-col items-stretch justify-between max-w-lg">
        <div className='border-gray-500 pt-10'>
          <h2 className="font-medium mb-8 text-teal-500">ELECTRICAL PROJECTS</h2>
          <p className="text-gray-400 mb-7 text-justify">
          At V-TECH Renewables, we pride ourselves on our in-depth knowledge and experience in electrical projects. From initial design and planning to installation and maintenance, we provide end-to-end consulting services, ensuring that our clients electrical systems meet their specific requirements. Our team of highly skilled electrical engineers and technicians has a proven track record of delivering successful projects for various industries, including residential, commercial, and industrial sectors. We work closely with our clients, understanding their needs and delivering innovative solutions that optimize energy efficiency enhance safety, and ensure reliable power distribution.",
          </p>
        </div>
        <a className='text-gray-700' href="https://google.com" target="_blank" rel="noreferrer">
          Learn more from this project ➔
        </a>
      </div>
      <div className='w-full p-2 lg:w-1/2 md:w-1/2 hidden md:block'>
        <Image src='/Electricals2.jpg' alt='electricimg1' className='rounded'/>
      </div>
    </div>
    </div>
</div>  
 )
};

export default services;