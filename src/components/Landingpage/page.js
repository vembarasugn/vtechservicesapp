import React from 'react';
import Video from '/src/app/video/page';
import Image from 'next/image';

const Landingpage = () => {

  return (
    <>
      <div className="container pt-24 pb-10 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Vtech
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-gray-500">
            Renewable
            </span><br/>
             services!  
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center text-gray-400 font-semibold md:text-left">
          We strive to deliver the best results for our every project and technology to ensure that our customers get the most value for their money.
          </p>
          <form className="bg-gray-800 opacity-75 w-full shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
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
                className="bg-gradient-to-r from-blue-300 to-green-800 hover:from-gray-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-80  ease-in-out"
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
        <div className="mx-auto md:pt-16">
          <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
            Download our apps: Coming Soon..
          </p>
          <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
            <Image src="App Store.svg" className="h-12 pr-12 transform hover:scale-125 " />
            <Image src="Play Store.svg" className="h-12 transform hover:scale-125" />
          </div>
        </div>
     </div>
    </>
  )
};

export default Landingpage;
