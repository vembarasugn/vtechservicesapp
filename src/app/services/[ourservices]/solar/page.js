import React from 'react';
import Image from 'next/image';

const solar = () => {
  return (  
  <div className="bg-white-300 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-teal-500 sm:text-4xl">OUR SERVICES</h2>
    </div>
  <div className="flex flex-row items-stretch justify-between pb-18 mb-25 border-t-2 border-gray-500 pt-15">
    <div className="flex flex-col items-stretch justify-between max-w-lg">
      <div className='border-gray-500 pt-10'>
        <h2 className="font-medium mb-8 text-teal-500">SOLARPOWER PROJECTS</h2>
        <p className="text-gray-400 mb-7 text-justify">
        As advocates of renewable energy, we offer consultancy and implementation services for solar power projects. Our dedicated team of solar energy experts assists clients in designing, installing, and maintaining efficient solar power solutions. Whether it's a small residential installation or a large-scale commercial project, we tailor our services to each client's unique needs and location. With a focus on maximizing solar energy generation, we utilize the latest technologies, such as photovoltaic (PV) panels, energy storage systems, and smart grid integration, to deliver cost-effective and sustainable solar power projects. Our team also provides ongoing monitoring and maintenance services to ensure optimal system performance and longevity.
        </p>
      </div>
      <a className='text-gray-700' href="https://google.com" target="_blank" rel="noreferrer">
        Learn more from this project ➔
      </a>
    </div> 
    <div className='w-full p-2 lg:w-1/2 md:w-1/3 hidden md:block'>
      <Image src="/SolarEnergy2.jpg" alt="SolarEnergyimg2" width={800}
        height={800} className="rounded"/>
    </div>
  </div>
  </div>
</div>   
)
};

export default solar;
