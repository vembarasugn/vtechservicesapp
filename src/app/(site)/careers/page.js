import React from 'react';

const Careers = () => {
  return (
    <section className="py-24 lg:pb-36 bg-gray-100 overflow-hidden">
    <div className="container px-4 mx-auto">
      <div className="max-w-xl text-center mx-auto mb-16">
        <h2 className="font-heading mb-5 text-6xl tracking-tighter text-teal-500">Open Positions</h2>
        <p className="text-xl text-gray-600 tracking-tight"> Find our below listed open positions.</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap -m-1">
          <div className="w-full p-1">
            <a className="block p-6 bg-white border-2 border-slate-500 hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500" href="#">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <h3 className="mb-1 font-semibold tracking-tight text-teal-500">Software Engineer</h3>
                  <span className="text-gray-600 tracking-tight">Full Time / Remote</span>
                </div>
                <div className="w-auto p-2">
                  <div className="flex flex-row justify-center">
                    <button className="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-gray-500 hover:bg-gray-400 rounded-lg focus:ring-4 focus:ring-gray-300 transition duration-200" href="#">Check Details</button>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full p-1">
            <a className="block p-6 bg-white border-2 border-slate-500 hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500" href="#">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <h3 className="mb-1 font-semibold tracking-tight text-teal-500">Product Designer</h3>
                  <span className="text-gray-600 tracking-tight">Full Time / Pune, India</span>
                </div>
                <div className="w-auto p-2">
                  <div className="flex flex-row justify-center">
                    <button className="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-gray-500 hover:bg-gray-600 rounded-lg focus:ring-4 focus:ring-gray-300 transition duration-200" href="#">Check Details</button>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full p-1">
            <a className="block p-6 bg-white border-2 border-slate-500 hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500" href="#">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <h3 className="mb-1 font-semibold tracking-tight text-teal-500">VP of Marketing</h3>
                  <span className="text-gray-600 tracking-tight">Full Time / Pune, India</span>
                </div>
                <div className="w-auto p-2">
                  <div className="flex flex-row justify-center">
                    <button className="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-gray-500 hover:bg-gray-600 rounded-lg focus:ring-4 focus:ring-gray-300 transition duration-200" href="#">Check Details</button>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full p-1">
            <a className="block p-6 bg-white border-2 border-slate-500 hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500" href="#">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <h3 className="mb-1 font-semibold tracking-tight text-teal-500">Graphic Designer</h3>
                  <span className="text-gray-600 tracking-tight">Full Time / Pune, India</span>
                </div>
                <div className="w-auto p-2">
                  <div className="flex flex-row justify-center">
                    <button className="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-gray-500 hover:bg-gray-600 rounded-lg focus:ring-4 focus:ring-gray-300 transition duration-200" href="#">Check Details</button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
};

export default Careers;
