import React from 'react';
import Video from '/src/app/video/page';
import Image from 'next/image';

const Landingpage = () => {

  return (
    <>
      <div className="container pt-20 pb-12 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-gray-500 to-blue-400">
             V-TECH RENEWABLES 
            </span>  
          </h1>
          <p className="leading-normal text-xs font-normal md:text-2xl mb-8 text-gray-600 md:text-left tracking-tight text-justify">
            We strive to deliver the best results for our every project and technology to ensure that our customers get the most value for their money.
          </p>
          <form className="bg-gray-400 opacity-75 w-full shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-600 py-2 font-bold mb-2" htmlFor="emailaddress">
                Contact Our Sales Team
              </label>
              <input
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-80 ease-in-out"
                id="emailaddress"
                type="text"
                placeholder="Please enter your email"
              />
            </div>
            <div className="flex items-center justify-between pt-4">
              <button
                className="bg-gradient-to-r from-blue-400 to-green-800 hover:from-gray-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-80  ease-in-out"
                type="button"
              >
               Contact Us
              </button>
            </div>
          </form>
        </div>
        
        <div className="w-full xl:w-3/5 p-12 overflow-hidden">
          <Video/>
        </div>
       
     </div>
    </>
  )
};

export default Landingpage;
