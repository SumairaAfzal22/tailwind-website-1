"use client";
import React from 'react'
import  { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeContent = () => {
useEffect(() => {
  AOS.init({
    duration:1000,
    once: true,
  });
}, []
);
  return (
    
      <section className='hero h-screen flex items-center bg-cover bg-center ' style={{backgroundImage:'url(background-1.jpg)'}}>
          <div className='pl-0 md:pl-16 text-blue-700 text-center'>
            <h1 className='text-5xl font-bold drop-shadow-md' data-aos="fade-up">Welcome to Watch Web</h1>
            <p className='text-1xl mt-4'>
                Your one-stop shop for the best watches
            </p>
            <button className='mt-6 px-6 py-3 text-white bg-blue-700 hover:bg-blue-950 rounded-md font-bold'>Shop Now</button>
          </div>
      </section>
    
  )
}

export default HomeContent
