import React from 'react';

const Blog = () => {
  return (
    <>
    <div className="bg-gray-100 px-4 xl:px-0 py-12 mt-6">
        <div className="mx-auto container">
          <h1 className="text-center font-semibold text-3xl lg:text-5xl tracking-wider text-teal-500">Latest from our Blog</h1>
           <div className="mt-12 lg:mt-24 rounded">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div className='border-2 border-slate-500'>
                        <div className="py-4 px-8 w-full flex justify-between bg-teal-500">
                            <p className="text-sm text-white font-semibold tracking-wide">Writer</p>
                            <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                        </div>
                        <div className="px-10 py-14 pb-11">
                            <h1 className="text-4xl text-gray-400 font-semibold tracking-wider">Project Management</h1>
                            <p className="text-gray-600 text-base text-justify lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.</p>
                            <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                                <p className="text-base tracking-wide text-teal-500">Read more ➔</p>
                            </div>
                            <div className="h-5 w-2"/>
                        </div>
                    </div>
                    <div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            <div className="border-2 border-slate-500">
                                <div className="py-2 px-4 w-full flex justify-between bg-teal-500">
                                    <p className="text-sm text-white font-semibold tracking-wide">Writer 1</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">04TH Nov, 2020</p>
                                </div>
                                <div className="px-3 lg:px-6 py-4">
                                    <h1 className="text-lg text-gray-400 font-semibold tracking-wider">Electrical Project</h1>
                                    <p className="text-gray-600 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                    <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                                      <p className="text-base tracking-wide text-teal-500">Read more ➔</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-slate-500">
                                <div className="py-2 px-4 w-full flex justify-between bg-teal-500">
                                    <p className="text-sm text-white font-semibold tracking-wide">Writer 2</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">25TH Dec, 2020</p>
                                </div>
                                <div className="px-3 lg:px-6 py-4">
                                    <h1 className="text-lg text-gray-400 font-semibold tracking-wider">Solar Project</h1>
                                    <p className="text-gray-600 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2 text-justify">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                    <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                                      <p className="text-base tracking-wide text-teal-500">Read more ➔</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            <div className="border-2 border-slate-500">
                                <div className="py-2 px-4 w-full flex justify-between bg-teal-500">
                                    <p className="text-sm text-white font-semibold tracking-wide">Write 3</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">07TH Jan, 2022</p>
                                </div>
                                <div className="px-3 lg:px-6 py-4">
                                    <h1 className="text-lg text-gray-400 font-semibold tracking-wider">Project Management</h1>
                                    <p className="text-gray-600 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2 text-justify">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                    <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                                      <p className="text-base tracking-wide text-teal-500">Read more ➔</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-slate-500">
                                <div className="py-2 px-4 w-full flex justify-between bg-teal-500">
                                    <p className="text-sm text-white font-semibold tracking-wide">Writer 4</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">11TH Mar, 2022</p>
                                </div>
                                <div className="px-3 lg:px-6 py-4">
                                    <h1 className="text-lg text-gray-400 font-semibold tracking-wider">Project Management</h1>
                                    <p className="text-gray-600 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2 text-justify">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                    <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                                      <p className="text-base tracking-wide text-teal-500">Read more ➔</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
};

export default Blog;

