import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import Link from 'next/link';

const footer = () => {
  return (
    <>
    <div className='bg-gray-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-15'>
      <div className='p-10'>
        <ul>
          <p className='text-gray-600 font-bold text-3xl pb-6'>
            VT<span className='text-teal-500'>Renewables</span>
          </p>
          <div className='flex gap-6 pb-5'>
            <a className='text-2xl text-gray-600 cursor-pointer hover:text-blue-400'
             target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/vembarasan-nagarajan-he-him-09797b37/'>
             <FaLinkedin/>
            </a>
            <a className='text-2xl text-gray-600 cursor-pointer hover:text-blue-600'
             target='_blank' rel='noopener noreferrer'  href='https://twitter.com/vembarasan25'>
             <FaTwitter/>
            </a>
            <a className='text-2xl text-gray-600 cursor-pointer hover:text-red-500' 
             target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/vembarasan.nagarajan'>
             <FaYoutube/> 
            </a>
          </div>
        </ul>
      </div>
      <div className='p-10'>
        <ul>
          <p className='text-teal-500 font-semibold text-2xl pb-3'>Projects</p>
          <li className='text-gray-500 text-md pb-1 font-semibold hover:text-teal-500 cursor-pointer no-underline hover:underline decoration-4'>Electrical</li>
          <li className='text-gray-500 text-md pb-1 font-semibold hover:text-teal-500 cursor-pointer no-underline hover:underline decoration-4'>SolarPower</li>
        </ul>
      </div>
      <div className='p-10'>
        <ul>
          <p className='text-teal-500 font-semibold text-2xl pb-3'>Company</p>
          <li><Link href="/" className='text-gray-500 text-md pb-1 font-semibold hover:text-teal-500 cursor-pointer no-underline hover:underline decoration-4'>Home</Link></li>
          <li><Link href="/careers" className='text-gray-500 text-md pb-1 font-semibold hover:text-teal-500 cursor-pointer no-underline hover:underline decoration-4'>Careers</Link></li>
          <li className='text-gray-500 text-md pb-1 font-semibold hover:text-teal-500 cursor-pointer no-underline hover:underline decoration-4'>Press & Media</li>
        </ul>
      </div>
      <div className='p-10'>
        <ul>
          <p className='text-teal-500 font-semibold text-2xl pb-3'>Support</p>
          <li><Link href="/services" className='text-gray-500 text-md pb-1 font-semibold hover:text-teal-500 cursor-pointer no-underline hover:underline decoration-4'>Services</Link></li>
          <li><Link href="/blog" className='text-gray-500 text-md pb-1 font-semibold hover:text-teal-500 cursor-pointer no-underline hover:underline decoration-4'>Blog</Link></li>
          <li className='text-gray-500 text-md pb-1 font-semibold hover:text-teal-500 cursor-pointer no-underline hover:underline decoration-4'>Downloads & Resources</li>
        </ul>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-200'>
      <h1 className='text-teal-500 font-semibold'> © 2023 All Rights Reserved.</h1>
    </div>
  </>
  )
};

export default footer;
